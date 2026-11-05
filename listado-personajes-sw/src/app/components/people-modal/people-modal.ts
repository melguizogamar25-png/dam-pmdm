import { Component, inject, Input } from '@angular/core';
import { Person } from '../../interface/people';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [],
  selector: 'app-people-modal',
  styleUrl: './people-modal.css',
  templateUrl: './people-modal.html',
})
export class PeopleModal {
  activeModal = inject(NgbActiveModal);

  @Input() person!: Person;
}
