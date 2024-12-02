import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';
import { ServiceService } from 'src/app/services/service.service';
import { TacheService } from 'src/app/services/tache.service';
import { Tache } from 'src/app/Taches';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  displayedColumns = ['ID', 'Service', 'Tache','ActionsTache','actions'];
  Hide : boolean = false;
  services!: Service[];
  selectedOption:string="Voir les taches";
  success!:string;
  state:string="";
  type:string="";
  // tacheToAdd:string="Add tache";
  
  constructor(private serviceService : ServiceService,private tacheService : TacheService,private router :Router) {
    this.serviceService.getServices().subscribe(items =>{
      console.log("iteeems",items);
      this.services = items;
    }) 
 }

  private getService(){
    this.serviceService.getServices().subscribe(items =>{
      console.log("iteeems",items);
      this.services = items;
    }) 
  }

  ngOnInit(): void {
    this.getService();
    this.success=this.serviceService.getSuccess();
    this.state=this.serviceService.getState();
    this.type=this.serviceService.getType();
  }

  goToAdd(){
    this.router.navigate(["add-Tache"]);
  }


  updateTache(id:any){
    this.router.navigate(['update-tache', id,this.selectedOption]);
    //this.router.navigate(['update-Service', id]);
  }


  addTacheToService(id:any){
    this.router.navigate(['add-tache-to-Service',id]);
  }

  deleteTache(){
    this.tacheService.deleteTache(this.selectedOption).subscribe((data)=> {
      console.log(data);
      this.serviceService.setSuccess("Task deleted succesfully");
      this.serviceService.setStateType("","danger");
      this.ngOnInit();
    })
  }

  deleteService(id:any){
    this.serviceService.deleteService(id).subscribe((data)=> {
      console.log(data);
      this.serviceService.setSuccess("Service deleted succesfully ");
      this.serviceService.setStateType("","danger");
      this.ngOnInit();
    })
    
  }
  
  hide(){
    this.state="fade";
    this.success="";
  }

  public searchEmployees (key: string): void {
    console.log(key);
      const results: Service[] = [];
      for (const ser of this.services) {
        if (ser.intitulService!.toLowerCase().indexOf(key.toLowerCase()) !== -1
       ) {
          results.push(ser);
      }
    }
        this.services = results;
        if (results.length === 0 ) {
          this.Hide = true;
        }
        if(!key){
          this.getService();
        }
        this.Hide = false;
    }

refresh()
{
this.ngOnInit();
}
  }