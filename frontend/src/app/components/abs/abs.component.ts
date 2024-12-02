import { Component, OnInit } from '@angular/core';
import { Abs } from 'src/app/Absence';
import { AbsService } from 'src/app/services/abs.service';
import {MatDialog} from '@angular/material/dialog'
import { AbsDetailsComponent } from '../abs-details/abs-details.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-abs',
  templateUrl: './abs.component.html',
  styleUrls: ['./abs.component.css']
})
export class AbsComponent implements OnInit {

  
  displayedColumns = ['Collaborateur', 'Service', 'Tache','Date','Motif','viewDetails','actions'];
  Absens!: Abs[];
  Hide : boolean = false;
 // Abs!: Abs;
  success!:string;
  state:string="";
  type:string="";
  constructor(private router : Router,private matDialog: MatDialog,private absService: AbsService) {   this.getAbs();}

  ngOnInit(): void {
    this.getAbs();
    this.success=this.absService.getSuccess();
    this.state=this.absService.getState();
    this.type=this.absService.getType();
  }
  private getAbs(){
    this.absService.getAbs().subscribe(items =>{
       //console.log("abssesns",items);
        this.Absens=items;
        console.log("Abss",items);
      });
  }
  viewDetails(id : number){
    this.matDialog.open(AbsDetailsComponent,
       {data : id });

    }
    goToAdd(){
      this.router.navigate(["add-abs"]);
    }

    updateAbs(id: number){
      this.router.navigate(['update-abs', id]);
    }

    deleteAbs(id: number){
      this.absService.deleteAbs(id).subscribe((data)=> {
        console.log(data);
        this.absService.setSuccess("Absence deleted succesfully ");
        this.absService.setStateType("","danger");
        this.ngOnInit();
      })
    }
    hide(){
      this.state="fade";
      this.success="";
    }

    public search (key: string): void {
      console.log(key);
        const results: Abs[] = [];
        for (const Absens of this.Absens) {
          if (Absens.nom!.toLowerCase().indexOf(key.toLowerCase()) !== -1
         || Absens.intitulService!.toLowerCase().indexOf(key.toLowerCase ()) !== -1
         || Absens.intitulTache!.toLowerCase().indexOf(key.toLowerCase ()) !== -1
         || Absens.date!.toLowerCase().indexOf(key.toLowerCase ()) !== -1
         || Absens.motif!.toLowerCase().indexOf(key.toLowerCase ()) !== -1) {
            results.push(Absens);
          }
        }
        this.Absens = results;
        if (results.length === 0 ) {
          this.Hide = true;
        }
        if(!key){
          this.getAbs();
        }
        this.Hide = false;
    }

refresh()
{
this.ngOnInit();
}
}


