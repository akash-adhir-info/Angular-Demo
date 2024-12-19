import { Component, inject, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { VideoModel } from '../../model/Video';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit {

  videoList :VideoModel [] = [];
  videoObj : VideoModel = new VideoModel;
  videoSrc = inject(VideosService);

  ngOnInit(): void {
    debugger
    this.getVideos();
  }

  getVideos(){
    debugger
    this.videoSrc.getvideos().subscribe((result:any)=>{
      debugger
      this.videoList = result.data;
    })
  }

  onEdit(data:VideoModel){
    this.videoObj = data;
  }

  onsaveVideo(){
    this.videoSrc.saveVideo(this.videoObj).subscribe((result:any)=>{
      if (result.result) {
        alert("Video Saved Successfully");
        this.getVideos();
      }
      else{
        alert(result.message);
      }
    })
  }

  onupdateVideo(){
    this.videoSrc.updateVideo(this.videoObj).subscribe((result:any)=>{
      if (result.result) {
        alert("Video Updated Successfully");
        this.getVideos();
      }
      else{
        alert(result.message);
      }
    })
  }

  onDeleteVideo(id:number){
    const isDelete = confirm("Are You Sure Want to Delete?")
    if (isDelete) {
      this.videoSrc.deleteVideo(id).subscribe((result:any)=>{
        if (result.result) {
          alert("Video Deleted Successfully");
          this.getVideos();
        }
        else{
          alert(result.message);
        }
      })
    }
    
    
  }

}
