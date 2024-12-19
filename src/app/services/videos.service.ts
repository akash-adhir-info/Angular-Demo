import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoModel } from '../model/Video';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  baseUrl:string = "https://projectapi.gerasim.in/api/OnlineLearning/";

  constructor(private http: HttpClient) { }

  getvideos(){
    return this.http.get(this.baseUrl + "GetAllVideos")
  }

  saveVideo(obj:VideoModel){
    return this.http.post(this.baseUrl+ "AddNewVideo",obj)
  }
  updateVideo(obj:VideoModel){
    return this.http.put(this.baseUrl + "UpdateVideo",obj)
  }
  deleteVideo(id:number){
    return this.http.delete(this.baseUrl + "DeleteVideo?videoId=" +id);
  }

}
