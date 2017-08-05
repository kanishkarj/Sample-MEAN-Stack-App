import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Video} from './video';
@Injectable()

export class VideoService {
  private _getUrl = '/api/videos';
  private _postUrl = '/api/videos';
  private _putUrl = '/api/videos/';
  private _deleteUrl = '/api/videos/';
  constructor(private _http: Http) {}

  getVideo(){
    return this._http.get(this._getUrl)
    .map((response: Response) => response.json());
  }

  // tslint:disable-next-line:one-line
  addVideo(video:  Video){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl,JSON.stringify(video), options)
    .map((response:Response)=> response.json());
  }

  putVideo(video:  Video){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.put(this._putUrl + video._id,JSON.stringify(video), options)
    .map((response:Response)=> response.json());
  }
  deleteVideo(video:  Video){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.delete(this._deleteUrl + video._id, options)
    .map((response:Response)=> response.json());
  }
}
