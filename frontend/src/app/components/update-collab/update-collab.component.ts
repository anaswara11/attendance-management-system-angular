import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collab } from 'src/app/Collabs';
import { CollabsService } from 'src/app/services/collabs.service';

@Component({
  selector: 'app-update-collab',
  templateUrl: './update-collab.component.html',
  styleUrls: ['./update-collab.component.css']
})
export class UpdateCollabComponent implements OnInit {
  matr!: string;
  collab : Collab = new Collab();
  constructor(private collabService: CollabsService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.matr = this.route.snapshot.params['id'];
    console.log("maaaatr" , this.matr)
    this.collabService.getCollabByMatr(this.matr).subscribe(data =>{
    this.collab = data;
    console.log("collab" ,this.collab)
  })
  }
    goToCollabList(){
    this.router.navigate(['/collabs']);
  }
  
  onSubmit(){
    this.collabService.updateCollab(this.matr, this.collab).subscribe((data)=> console.log(data))
    console.log("request body",this.collab)
    this.collabService.setSuccess("collab updated succesfully ");
    this.collabService.setStateType("","warning");
    this.goToCollabList();
    }

  }
  

