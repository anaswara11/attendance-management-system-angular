import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { TacheService } from 'src/app/services/tache.service';
import { Tache } from 'src/app/Taches';

@Component({
  selector: 'app-add-tache-to-service',
  templateUrl: './add-tache-to-service.component.html',
  styleUrls: ['./add-tache-to-service.component.css']
})
export class AddTacheToServiceComponent implements OnInit {


  tache:Tache=new Tache();
  id!:number;
  registerForm!:FormGroup;

  constructor(private tacheService:TacheService,private serviceService:ServiceService,private router :Router,private route :ActivatedRoute) { }

  goToServiceList(){
    this.router.navigate(['/services']);
  }

  saveTache(id:any,tache:Tache) {
    this.tacheService.addTache(tache,id).subscribe(
      (data) =>  console.log(data));
      this.serviceService.setSuccess("Task added succesfully ");
      this.serviceService.setStateType("","success");
      this.goToServiceList(); 
    }

  ngOnInit(): void {
    this.registerForm= new FormGroup({
      'idtask': new FormControl(null,[Validators.required]),
      'task': new FormControl(null,[Validators.required])

    })
    this.id = this.route.snapshot.params['id'];


  }

  onSubmit(){
    this.saveTache(this.id,this.tache);

  }

}
