import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs-compat/Subject";
import { Observable } from "rxjs-compat/Observable";
import { WebcamImage, WebcamInitError, WebcamUtil } from "ngx-webcam";

@Component({
  selector: "app-web-cam",
  templateUrl: "./web-cam.component.html",
  styleUrls: ["./web-cam.component.scss"]
})
export class WebCamComponent implements OnInit {
  private trigger: Subject<void> = new Subject<void>();
  public webcamImage: WebcamImage = null;
  public base64: string = null;

  constructor() {}

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public handleImage(webcamImage: WebcamImage): void {
    //console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;
    this.base64 = webcamImage.imageAsBase64.replace(
      /^data:image\/(png|jpg|jpeg);base64,/,
      ""
    );
    console.log(this.base64);
  }

  public createFromImage() {}

  ngOnInit() {}
}
