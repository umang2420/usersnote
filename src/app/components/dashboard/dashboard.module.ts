import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesService } from 'src/services/notes.service';

@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    NgModule
  ],
  providers:[NotesService]
})
export class DashboardModule {
  constructor() {
    console.log("dashboard module loaded");
  }
 }
