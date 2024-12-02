import { Component, OnInit } from '@angular/core';
import { Collab } from 'src/app/Collabs';
import { CollabsService } from 'src/app/services/collabs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collabs',
  templateUrl: './collabs.component.html',
  styleUrls: ['./collabs.component.css',
  
]
})
export class CollabsComponent implements OnInit {
  displayedColumns = ['id', 'nom', 'prenom','actions'];
  Success : boolean = false;
  Hide : boolean = false;
  success!:string;
  state:string="";
  type:string="";
   collabs!: Collab[];
  constructor(private collabService : CollabsService,private router :Router) {
    this.collabService.getCollabs().subscribe(items =>{
      console.log("iteeems",items);
      this.collabs = items;
   })}

  private getCollabs(){
    this.collabService.getCollabs().subscribe(items =>{
      console.log("iteeems",items);
      this.collabs = items;
    })
  }
  ngOnInit(): void {
    this.getCollabs();
    this.success=this.collabService.getSuccess();
    this.state=this.collabService.getState();
    this.type=this.collabService.getType();
    console.log("state"+this.state+" type"+this.type);

  }
  goToAdd(){
    this.router.navigate(["add-collab"]);
  }
  
  updateCollab(matr: string){
    this.router.navigate(['update-collab', matr]);
  }

  deleteCollab(matr: string){
    this.collabService.deleteCollab(matr).subscribe((data)=> {
      console.log(data);
      this.collabService.setSuccess("Collab deleted succesfully ");
      this.collabService.setStateType("","danger");
      this.ngOnInit();
    })
  }

  hide(){
    this.state="fade";
    this.success="";
  }
  public searchEmployees (key: string): void {
    console.log(key);
      const results: Collab[] = [];
      for (const collab of this.collabs) {
        if (collab.matr!.toLowerCase().indexOf(key.toLowerCase()) !== -1
       || collab.prenom!.toLowerCase().indexOf(key.toLowerCase ()) !== -1
       || collab.nom!.toLowerCase().indexOf(key.toLowerCase ()) !== -1) {
          results.push(collab);
      }
    }
    this.collabs = results;
    if (results.length === 0 ) {
      this.Hide = true;
    }
    if(!key){
      this.getCollabs();
    }
    this.Hide = false;
}
refresh()
{
this.ngOnInit();
}
}
