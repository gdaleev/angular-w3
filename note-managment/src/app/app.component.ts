import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotesComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit{
  @ViewChild('notesComponent') notesComponent!: NotesComponent;
  title = '';
  content = '';
  notesArray: { title: string; content: string }[] = [];
  editModeOn = false;
  index = 0;

  ngAfterViewInit() {
    this.index = this.notesComponent.index;
    this.editModeOn = this.notesComponent.editModeOn;
  }

  addNote() {
    console.log('editModeOn:', this.editModeOn);
    if (this.editModeOn) {
      console.log('Calling updateNote');
      this.updateNote();
    } else {
      this.notesArray.push({ title: this.title, content: this.content });
      this.title = '';
      this.content = '';
      this.notesComponent.listItemClicked = false;
    }
  }

  updateNote() {
    this.notesArray[this.index] = { title: this.title, content: this.content }
    this.title = '';
    this.content = '';
    this.notesComponent.listItemClicked = false;
    this.editModeOn = false;
  }

  onChildValuesEvent(values: { titleValue: string; contentValue: string; editMode?: boolean; index?: number }) {
    this.title = values.titleValue;
    this.content = values.contentValue;
    this.editModeOn = !!values.editMode;
    this.index = values.index || 0;
  }
}
