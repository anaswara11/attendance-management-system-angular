import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/Service';
import { ServiceService } from 'src/app/services/service.service';
import { TacheService } from 'src/app/services/tache.service';
import { Tache } from 'src/app/Taches';

@Component({
  selector: 'app-update-tache',
  templateUrl: './update-tache.component.html',
  styleUrls: ['./update-tache.component.css']
})
export class UpdateTacheComponent implements OnInit {

  id!: number;
  idSelectedTache!:number;

  service : Service = new Service();
  tache: Tache=new Tache()
  constructor(private serviceService:ServiceService,private tacheService:TacheService, private route: ActivatedRoute,
    private router: Router) { }
    
   
    
   
    

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idS'];
    this.idSelectedTache=this.route.snapshot.params['idStache'];

    // console.log("idservice" , this.id)
    // console.log("idselected tache:" , this.idSelectedTache)

    this.serviceService.getServiceById(this.id).subscribe(data =>{
    this.service = data;
    console.log("service" ,this.service)
  })

  this.tacheService.getTacheById(this.idSelectedTache).subscribe(data =>{
    this.tache = data;
    console.log("tache" ,this.tache)
  })


}
goToServiceList(){
  this.router.navigate(['/services']);
}

onSubmit(){
  this.tacheService.updateTache(this.idSelectedTache, this.tache).subscribe((data)=> console.log(data))
  this.serviceService.updateService(this.id, this.service).subscribe((data)=> console.log(data))
  console.log("request body",this.tache)
  this.serviceService.setSuccess("Task and Service updated succesfully ");
  this.serviceService.setStateType("","warning");
  this.goToServiceList();
  }
}