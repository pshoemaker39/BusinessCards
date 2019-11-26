import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs-compat/Subject";
import { Observable } from "rxjs-compat/Observable";
import { WebcamImage } from "ngx-webcam";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { BusinessCardService } from "../business-card.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-web-cam",
  templateUrl: "./web-cam.component.html",
  styleUrls: ["./web-cam.component.scss"]
})
export class WebCamComponent implements OnInit {
  trigger: Subject<void> = new Subject<void>();
  webcamImage: WebcamImage = null;
  base64: string = null;
  url = `https://vision.googleapis.com/v1/images:annotate?key=${environment.cloudVisionAPIKey}`;
  rawCardBody: string = null;
  parsedBody: any = {};
  imageURL: string = null;

  constructor(
    private http: HttpClient,
    private businessCardService: BusinessCardService,
    private router: Router
  ) {}

  private cloudVisionSubmit() {
    this.http
      .post(this.url, {
        requests: [
          {
            image: {
              content: this.base64
            },
            features: [
              {
                type: "TEXT_DETECTION"
              }
            ]
          }
        ]
      })
      .subscribe((results: any) => {
        this.rawCardBody = JSON.stringify(
          results.responses[0].fullTextAnnotation.text
        );

        this.parsedBody.phone = this.rawCardBody.match(
          /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/
        );

        if (this.parsedBody.phone && this.parsedBody.phone.length) {
          this.parsedBody.phone = this.parsedBody.phone[0];
        }
        this.parsedBody.email = this.rawCardBody.match(
          /[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+/
        );

        if (this.parsedBody.email && this.parsedBody.email.length) {
          this.parsedBody.email = this.parsedBody.email[0];
        }

        this.parsedBody.company = "";
        this.parsedBody.position = "";
        this.parsedBody.firstName = "";
        this.parsedBody.lastName = "";
        this.parsedBody.address = "";
        this.parsedBody.address2 = "";
        this.parsedBody.city = "";
        this.parsedBody.state = "";
        this.parsedBody.postalCode = "";
        this.parsedBody.imageURL = this.imageURL;

        this.businessCardService.addCard(this.parsedBody, id => {
          this.router.navigate(["/new", id]);
        });
      });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.imageURL = webcamImage.imageAsDataUrl;
    this.base64 = webcamImage.imageAsBase64.replace(
      /^data:image\/(png|jpg|jpeg);base64,/,
      ""
    );
    this.cloudVisionSubmit();
  }

  public createFromImage() {}

  ngOnInit() {}
}
