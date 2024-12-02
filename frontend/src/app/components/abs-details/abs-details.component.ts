import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog'
import { Abs } from 'src/app/Absence';
import { Collab } from 'src/app/Collabs';
import { AbsService } from 'src/app/services/abs.service';

@Component({
  selector: 'app-abs-details',
  templateUrl: './abs-details.component.html',
  styleUrls: ['./abs-details.component.css']
})
export class AbsDetailsComponent implements OnInit {
  abs : Abs = new Abs();

  constructor(private absService:AbsService,@Inject(MAT_DIALOG_DATA) public data:any,private matDialogRef:MatDialogRef<AbsDetailsComponent> ) { }

  ngOnInit(): void {
    console.log("id in popup",this.data);
    this.absService.getAbsById(this.data).subscribe((item)=> {
      this.abs=item;
      console.log("one item by id",item);
    })
  }
  ngOnDestroy(){
    this.matDialogRef.close(this.data)
  }
  onClose(){
    this.matDialogRef.close()
  }
  

  


}
