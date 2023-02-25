import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { HeaderComponent } from './header/header.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { NoteSidebarComponent } from './note-sidebar/note-sidebar.component';
import { NoteService } from './note.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EditNoteComponent,
    HeaderComponent,
    AllNotesComponent,
    NoteSidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
