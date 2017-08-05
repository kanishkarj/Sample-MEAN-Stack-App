
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
  private hidenewVideo = true;
  selectedVideo: Video;

  onSubmitAddVideo(video:Video){
    this._videoservice.addVideo(video).
    subscribe(resNewVideo => {
      this.videos.push(resNewVideo);
      this.selectedVideo = resNewVideo;
    });
  }
  OnNewVideoClicked(){
    this.hidenewVideo = false;
  }
  onSelectVideo(video: any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

  onUpdateVideoEvent(video: any){
    this._videoservice.putVideo(video).
    subscribe(resUpdatedVideo => video = resUpdatedVideo);
    this.selectedVideo = null;
  }

  onDeleteVideoEvent(video: any){
    this._videoservice.deleteVideo(video).
    subscribe(resDeleteVideo => video = resDeleteVideo);
    this.selectedVideo = null;
  }
}
