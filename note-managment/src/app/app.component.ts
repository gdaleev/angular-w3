import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotesComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '';
  content = '';
  notesArray: { title: string; content: string }[] = [];

  addNote() {
    this.notesArray.push({ title: this.title, content: this.content });
    console.log(this.notesArray);

    this.title = '';
    this.content = '';
  }
}
