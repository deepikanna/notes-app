import { Component } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private noteService: NoteService) {}
  noteToDisplay: any;
  title = 'notes-app';
  editNoteForAllEvent(note: any) {
    this.noteToDisplay = note
  }
  deleteNoteForAllEvent(note: any) {

    this.noteService.notes = this.noteService.notes.filter(value => value.id != note.id);
    if (this.noteToDisplay.id == note.id) {
      this.noteToDisplay = this.noteService.notes.length ? this.noteService.notes[0] : {heading:'',body:'',id:1};
    }
  }
}
