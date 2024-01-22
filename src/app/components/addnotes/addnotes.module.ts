import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesService } from 'src/services/notes.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[NotesService]
})
export class AddnotesModule { }
