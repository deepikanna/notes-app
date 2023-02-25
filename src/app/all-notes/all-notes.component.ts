import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit {

  constructor(
    public noteService: NoteService
  ) {}

  @Output() editNoteForAllEvent = new EventEmitter<any>();
  @Output() deleteNoteForAllEvent = new EventEmitter<any>();

  ngOnInit(): void {
    this.noteService.notes = [
      {
        id: 1,
        heading: 'Headline1',
        body: 'test body1'
      },
      {
        id: 2,
        heading: 'Headline2',
        body: 'test body2'
      },
      {
        id: 3,
        heading: 'Headline3',
        body: 'test body3'
      },
    ]
  }
  addNewNote() {
    console.log('open');
    let maxId = 0;
    this.noteService.notes.forEach(value => {
      if(value.id > maxId)
        maxId = value.id;
    })
    this.editNoteForAllEvent.emit({heading: '',body:'', id: maxId+1});
  }
  editNote(event: any) {
    console.log(event)
    this.editNoteForAllEvent.emit(event);
  }
  deleteNote(event: any) {
    console.log(event)
    this.deleteNoteForAllEvent.emit(event);
  }
}
