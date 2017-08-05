
import { Component, OnInit } from '@angular/core';
import { Video } from './../video';
import { VideoService } from './../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {
  videos: Array<Video>;
  constructor(private _videoservice: VideoService) { }

  ngOnInit() {
    this._videoservice.getVideo().subscribe(resVideoData => this.videos = resVideoData);
  }

  selectedVideo: Video;

  onSelectVideo(video: any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}
