import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notif } from 'src/app/models/Notif';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-notif-update',
  templateUrl: './notif-update.component.html',
  styleUrls: ['./notif-update.component.scss']
})
export class NotifUpdateComponent implements OnInit {
  notif:Notif = new Notif();
  id!:number;

  constructor(private service:HttpClientService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit(){
    this.route.queryParams.subscribe({
      next : params => {this.id=params['id'];},
      error : err =>console.log(err)
    });
    this.service.findNotif(this.id).subscribe({
      next : data =>{this.notif=data;},
      error : err =>console.log(err)
    });
  }

  save() {
    this.service.updateNotif(this.notif).subscribe({
      next : data => {
        console.log(data);
        this.router.navigate(['/notif-list']);
      },
      error : err =>console.log(err), 
    })
  }

  onSubmit() {
    this.save();
  }
}
