import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  constructor(
    private noteService: NoteService
  ) {}


  finalNote: any;
  noteEditted: any;
  @Input() set noteToDisplay(value: any) {
    this.noteEditted = value;
    this.finalNote = this.noteEditted;
  }

  get noteToDisplay(): any {
    return this.noteEditted;
  }


  ngOnInit(): void {
    if (!(this.noteToDisplay && this.noteToDisplay.heading)) {
      this.finalNote = this.noteService.notes.length ? this.noteService.notes[0] : {heading:'',body:'',id:1};
    } else {
      this.finalNote = this.noteToDisplay
    }

  }
  saveNote() {
    if ((this.noteToDisplay && this.noteToDisplay.heading)) {
      let noteFoundFlag = false;
      this.noteService.notes.forEach(value => {
        if (value.id == this.noteToDisplay.id) {
          noteFoundFlag = true
          value.heading = this.finalNote.heading;
          value.body = this.finalNote.body;
        }
      })
      if (!noteFoundFlag)
        this.noteService.notes.push(this.finalNote)
    } else {
      this.noteService.notes.forEach(value => {
        if (value.id == this.noteToDisplay.id) {
          value.heading = this.finalNote.heading;
          value.body = this.finalNote.body;
        }
      })
      this.noteToDisplay ={}
    }
  }
}
