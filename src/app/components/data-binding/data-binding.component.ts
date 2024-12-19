import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName:string = "Angular Course";
  courseDuration:number = 2;

  showMessage (){
    alert("Welcome to Adhir Info")
  }

  onStateChange (event:any){
    alert("State Change "+ event.target. value )
  }
}
