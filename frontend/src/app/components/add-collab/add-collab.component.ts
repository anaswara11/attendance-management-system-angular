import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Collab } from 'src/app/Collabs';
import { CollabsService } from 'src/app/services/collabs.service';
@Component({
  selector: 'app-add-collab',
  templateUrl: './add-collab.component.html',
  styleUrls: ['./add-collab.component.css']
})
export class AddCollabComponent implements OnInit {
  collab: Collab = new Collab();
  alert: boolean= false;
  registerForm!:FormGroup;
  constructor(private collabService: CollabsService,private router: Router) { }




  ngOnInit(): void {
    this.registerForm= new FormGroup({
      'matr': new FormControl(null,[Validators.required]),
      'nom': new FormControl(null,[Validators.required]),
      'prenom': new FormControl(null,[Validators.required])
    }
    )
  }
  saveCollab() {
    this.collabService.addCollab(this.collab).subscribe(
      (data) => console.log(data));
      this.collabService.setSuccess("Collab added succesfully ");
      this.collabService.setStateType("","success");
      this.goToCollabList(); 
  }

  goToCollabList(){
    this.router.navigate(['/collabs']);
  }
  
  onSubmit(){
 
    console.log(this.collab);
    this.saveCollab();
    this.alert=true;
  }
  closeAlert(){
    this.alert=true;
  }


}
