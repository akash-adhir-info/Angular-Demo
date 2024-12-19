import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  isDiv1Visible:boolean = false;
  div2Visible:string="No";
  dayName:string = "";

  studentList:any [] = [
    {name:"Akash",mobile:"9537336266",city:"jamnagar",isActivate:"true"},
    {name:"Jaydev",mobile:"7016956878",city:"Sumari",isActivate:"false"},
    {name:"Harsh",mobile:"9265027197",city:"Amritsir",isActivate:"false"},
    {name:"Virendra",mobile:"9925958868",city:"Surat",isActivate:"true"},
  ]

  showHideDiv1(isshow:boolean) {
    this.isDiv1Visible = isshow;
  }
   
}
