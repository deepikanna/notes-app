import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note-sidebar',
  templateUrl: './note-sidebar.component.html',
  styleUrls: ['./note-sidebar.component.css']
})
export class NoteSidebarComponent implements OnInit {

  @Input()
  note: any;
  @Output() editNoteEvent = new EventEmitter<any>();
  @Output() deleteNoteEvent = new EventEmitter<any>();
  ngOnInit(): void {
  }
  editNote(noteEmitted: any) {
    this.editNoteEvent.emit(noteEmitted);
  }
  deleteNote(noteEmitted: any) {
    this.deleteNoteEvent.emit(noteEmitted);
  }

}
