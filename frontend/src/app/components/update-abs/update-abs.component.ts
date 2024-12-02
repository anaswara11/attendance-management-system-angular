import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Abs } from 'src/app/Absence';
import { Collab } from 'src/app/Collabs';
import { AbsService } from 'src/app/services/abs.service';
import { CollabsService } from 'src/app/services/collabs.service';
import { TacheService } from 'src/app/services/tache.service';
import { Tache } from 'src/app/Taches';

@Component({
  selector: 'app-update-abs',
  templateUrl: './update-abs.component.html',
  styleUrls: ['./update-abs.component.css']
})
export class UpdateAbsComponent implements OnInit {
  collabs?: Collab[];
  taches?: Tache[];
  id!: number;
  abs : Abs = new Abs();
  constructor(private absService: AbsService, private route: ActivatedRoute,private collabService : CollabsService,private tacheService : TacheService,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("id abs" , this.abs)
    this.absService.getAbsById(this.id).subscribe(data =>{
    this.abs = data;
    console.log("abs" ,this.abs)
  })
  }
    goToAbsList(){
    this.router.navigate(['/abs']);
  }

  onSubmit(){
    this.absService.updateAbs(this.id, this.abs).subscribe((data)=> console.log(data))
    console.log("request body",this.abs)
    this.absService.setSuccess("Absence updated succesfully ");
    this.absService.setStateType("","warning");
    this.goToAbsList();
    }

    private getCollabs(){
      this.collabService.getCollabs().subscribe(items =>{
        console.log("collabs",items);
        this.collabs = items;
      })
    }
    private getTaches(){
      this.tacheService.getTaches().subscribe(items =>{
        console.log("taches",items);
        this.taches = items;
      })
    }

}
