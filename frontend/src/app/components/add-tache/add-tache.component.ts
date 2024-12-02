import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';
import { ServiceService } from 'src/app/services/service.service';
import { TacheService } from 'src/app/services/tache.service';
import { Tache } from 'src/app/Taches';

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})
export class AddTacheComponent implements OnInit {

  tache: Tache = new Tache();
  service: Service = new Service();
  alert: boolean= false;
  registerForm!:FormGroup;

  constructor(private tacheService: TacheService,private serviceService: ServiceService,private router: Router) { }

  ngOnInit(): void {
    this.registerForm= new FormGroup({
      'serv': new FormControl(null,[Validators.required]),
      'task': new FormControl(null,[Validators.required])

    })
  }

  saveService() {
    this.serviceService.addService(this.service).subscribe(
      (data) =>  this.saveTache(data.id));
      this.serviceService.setSuccess("task and Service added succesfully ");
      this.serviceService.setStateType("","success");
      this.goToServiceList(); 
    }

  saveTache(id:any) {
    this.tacheService.addTache(this.tache,id).subscribe(
      (data) =>  console.log(data));
      this.goToServiceList(); 
    }

  goToServiceList(){
    this.router.navigate(['/services']);
  }
  
  onSubmit(){
  
    this.saveService();
    // console.log("im here"+this.service.id)
    // this.saveTache(this.service.id);
    this.alert=true;
  }
  closeAlert(){
    this.alert=true;
  }

}
