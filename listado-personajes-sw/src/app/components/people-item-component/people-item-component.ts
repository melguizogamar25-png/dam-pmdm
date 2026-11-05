import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../interface/people';

@Component({
  imports: [],
  selector: 'app-people-item-component',
  styleUrl: './people-item-component.css',
  templateUrl: './people-item-component.html',
})
export class PeopleItemComponent {
   @Input() person!: Person;
  @Output() selected = new EventEmitter<Person>();

  onClick(): void {
    this.selected.emit(this.person);
  }
}
