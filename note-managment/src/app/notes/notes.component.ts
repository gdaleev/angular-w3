import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent {
  @Input() notesArray: { title: string; content: string }[] = [];
  @Input() editModeOn = false;
  @Input() index = 0;
  @Output() childValuesEvent = new EventEmitter<{ titleValue: string, contentValue: string }>();
  listItemClicked = false;

  showButtons() {
    this.listItemClicked = true
  }

  deleteNote(index: number) {
    this.notesArray.splice(index, 1)
    this.listItemClicked = false;
  }

  editNote(index: number) {
    const selectedNote = this.notesArray[index];
    const titleValue = selectedNote.title;
    const contentValue = selectedNote.content;

    this.childValuesEvent.emit({ titleValue, contentValue, editMode: true, index } as { titleValue: string; contentValue: string; editMode?: boolean, index: number });
  }

}
