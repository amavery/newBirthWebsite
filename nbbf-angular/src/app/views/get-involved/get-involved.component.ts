import { Component, OnInit } from '@angular/core';
import { VideoBackground as VideoBackgroundRenderer } from '@squarespace/video-background-rendering';




@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.css']
})
export class GetInvolvedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const config = {
      container: document.documentElement.querySelector('.sqs-video-background'),
      url: 'https://www.youtube.com/watch?v=ZyS6twkhXF8&feature=youtu.be'
    };
    const myVideoBackground = new VideoBackgroundRenderer(config);
  }

}
