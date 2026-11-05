import { Component, inject, OnInit, signal } from '@angular/core';
import { PeopleService } from '../../service/people-service';
import { Person } from '../../interface/people';
import { PeopleModal } from '../people-modal/people-modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [],
  selector: 'app-people-list-component',
  styleUrl: './people-list-component.css',
  templateUrl: './people-list-component.html',
})
export class PeopleListComponent implements OnInit{
  private peopleService = inject(PeopleService);
  private modalService = inject(NgbModal);

  people = signal<Person[]>([]);
  loading = signal(true);
  error = signal(false);

  ngOnInit(): void {
    this.peopleService.getAll().subscribe({
      next: (resp) => {
        this.people.set(resp.results);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      },
    });
  }

  openModal(person: Person): void {
    const modalRef = this.modalService.open(PeopleModal);
    modalRef.componentInstance.person = person;
  }

}
