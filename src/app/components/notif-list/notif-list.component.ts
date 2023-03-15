import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Notif } from 'src/app/models/Notif';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-notif-list',
  templateUrl: './notif-list.component.html',
  styleUrls: ['./notif-list.component.scss']
})
export class NotifListComponent implements OnInit {
  notifs!: Observable<Notif[]>;
   
  constructor(private service: HttpClientService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.notifs = this.service.listNotifs();
  }
  

  deleteNotification(id: number) {
    this.service.deleteNotif(id).subscribe({
      next : (data) => {
        console.log(data);
        this.reloadData();
      },
      error : (e) => console.log(e),
    });
  }

  findNotification(id:number) {
    this.router.navigate(['/update'], { queryParams: { id : id } });
  }
  
}
