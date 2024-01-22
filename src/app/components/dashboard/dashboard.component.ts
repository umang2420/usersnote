import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from 'src/services/notes.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userNote: any;
  value: any;
  USerData: any[] = [];

  constructor(private service: NotesService, private route: Router) {
    this.service.getDataService().subscribe(data => {
      this.userNote = data;
      this.value = JSON.parse(sessionStorage.getItem('loginData') || '{}');
      this.userNote.forEach((user: any) => {
        if (user.id == this.value.id) {
          this.USerData.push(user);
        }
        console.log(user);
      });
    });
  } 
  editService(id: string) {
    let currentService = this.userNote.find((userNote: any) => userNote.id == id);
    console.log(currentService);
    this.route.navigate(['/dashboard/addnotes', id]);
  }

  deleteService(id: any) {
    this.service.deleteService(id).subscribe(data => {
      this.service.getDataService().subscribe((data) => {
        this.userNote = data;
      });
    });
  }
  clearData(){
    sessionStorage.clear();
    this.route.navigate(['/login']);
  }
}
