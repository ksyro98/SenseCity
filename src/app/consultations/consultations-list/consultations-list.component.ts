import { Component, OnInit } from '@angular/core';
import {Consultation} from '../../entities/Consultation';
import {not} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-consultations-list',
  templateUrl: './consultations-list.component.html',
  styleUrls: ['./consultations-list.component.scss'],
})
export class ConsultationsListComponent implements OnInit {

  consultations: Consultation[];
  notificationsOn = false;

  constructor() {
    this.consultations = [];
  }

  ngOnInit() {
    this.getConsultations();
  }

  setSorting(sorting: string){
    switch (sorting){
      case 'newest':
        this.notificationsOn = false;
        this.consultations.sort((a, b) => -(a.date.getTime() - b.date.getTime()));
        break;
      case 'popular':
        this.notificationsOn = false;
        this.consultations.sort((a, b) => -(a.likes + a.dislikes - (b.likes + b.dislikes)));
        break;
      case 'notifications_on':
        this.notificationsOn = true;
    }
  }

  private getConsultations(){
    this.consultations.push(
        {
          name: 'Θέμα',
          text: 'Architecto delectus laboriosam sit dicta aliquam inventore facilis. Libero qui omnis quasi. Enim quia optio sapiente harum. Aliquam atque officiis animi voluptates voluptatem...',
          files: [],
          comments: [],
          follows: false,
          rating: 0,
          likes: 102,
          dislikes: 2,
          date: new Date('2021-01-01')
        });

    this.consultations.push(
        {
          name: 'Θέμα',
          text: 'Architecto delectus laboriosam sit dicta aliquam inventore facilis. Libero qui omnis quasi. Enim quia optio sapiente harum. Aliquam atque officiis animi voluptates voluptatem...',
          files: [],
          comments: [],
          follows: true,
          rating: 1,
          likes: 67,
          dislikes: 12,
          date: new Date('2020-12-01')
        });

    this.consultations.push(
        {
          name: 'Θέμα',
          text: 'Architecto delectus laboriosam sit dicta aliquam inventore facilis. Libero qui omnis quasi. Enim quia optio sapiente harum. Aliquam atque officiis animi voluptates voluptatem...',
          files: [],
          comments: [],
          follows: true,
          rating: 1,
          likes: 407,
          dislikes: 351,
          date: new Date('2020-11-30')
        });

    this.consultations.push(
        {
          name: 'Θέμα',
          text: 'Architecto delectus laboriosam sit dicta aliquam inventore facilis. Libero qui omnis quasi. Enim quia optio sapiente harum. Aliquam atque officiis animi voluptates voluptatem...',
          files: [],
          comments: [],
          follows: false,
          rating: 0,
          likes: 3,
          dislikes: 0,
          date: new Date('2020-11-27')
        });

    this.consultations.push(
        {
          name: 'Θέμα',
          text: 'Architecto delectus laboriosam sit dicta aliquam inventore facilis. Libero qui omnis quasi. Enim quia optio sapiente harum. Aliquam atque officiis animi voluptates voluptatem...',
          files: [],
          comments: [],
          follows: true,
          rating: -1,
          likes: 57,
          dislikes: 23,
          date: new Date('2020-11-19')
        });

    this.consultations.push(
        {
          name: 'Θέμα',
          text: 'Architecto delectus laboriosam sit dicta aliquam inventore facilis. Libero qui omnis quasi. Enim quia optio sapiente harum. Aliquam atque officiis animi voluptates voluptatem...',
          files: [],
          comments: [],
          follows: false,
          rating: 0,
          likes: 2,
          dislikes: 104,
          date: new Date('2020-10-30')
        });

    this.consultations.push(
        {
          name: 'Θέμα',
          text: 'Architecto delectus laboriosam sit dicta aliquam inventore facilis. Libero qui omnis quasi. Enim quia optio sapiente harum. Aliquam atque officiis animi voluptates voluptatem...',
          files: [],
          comments: [],
          follows: true,
          rating: 1,
          likes: 51,
          dislikes: 7,
          date: new Date('2020-10-25')
        });

    this.consultations.sort((a, b) => -(a.date.getTime() - b.date.getTime()));
  }
}
