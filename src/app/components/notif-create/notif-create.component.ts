import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notif } from 'src/app/models/Notif';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-notif-create',
  templateUrl: './notif-create.component.html',
  styleUrls: ['./notif-create.component.scss']
})
export class NotifCreateComponent implements OnInit {
  notif:Notif = new Notif();

  constructor(private service:HttpClientService, private router:Router) {}
  ngOnInit(){}

  save() {
    this.service.createNotif(this.notif).subscribe({
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
