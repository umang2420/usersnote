  import { Component, OnInit } from '@angular/core';
  import { FormGroup,FormControl,Validators } from '@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
  import { NotesService } from 'src/services/notes.service';
  @Component({
    selector: 'app-addnotes',
    templateUrl: './addnotes.component.html',
    styleUrls: ['./addnotes.component.css']
  })
  export class AddnotesComponent implements OnInit{
    id:string="";
    constructor(private service:NotesService,private route :Router,private activeRoute:ActivatedRoute){}
    addForm=new FormGroup({
      name :new FormControl('',Validators.required),
      text:new FormControl('',Validators.required)
    })
    ngOnInit(): void {
        this.id = this.activeRoute.snapshot.params['id']
        this.service.getDataService(this.id).subscribe(data=>{
          this.addForm.patchValue({
            name:data.name,
            text:data.text
          })
        })
      }
      
      submitData(){
      let value=JSON.parse(sessionStorage.getItem('loginData')||'{}')
      let obj={
        name:this.addForm.value.name,
        text:this.addForm.value.text,
        userId:value.id,
      };
      this.service.getService(obj).subscribe(data=>{
        {
          this.route.navigateByUrl('/dashboard')
        }
      })
    }
    clear(){
      this.addForm.reset();
    } 
    update() {
      let body = {
        name:this.addForm.get('name')?.value,
        text:this.addForm.get('text')?.value
      }
      this.service.updateService(this.id,body).subscribe(data=>{
      alert("data updated");
      })
  } 
  }
