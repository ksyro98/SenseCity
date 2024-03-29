import { Component, OnInit } from '@angular/core';
import {Consultation} from '../../entities/Consultation';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-consultations-list',
  templateUrl: './consultations-list.component.html',
  styleUrls: ['./consultations-list.component.scss'],
})
export class ConsultationsListComponent implements OnInit {

    discussions = 'Διαβουλεύσεις';
    orderBy = 'Ταξινόμηση κατά';
    newest = 'Νεότερα';
    popular = 'Δημοφιλή';
    selected = 'Επιλεγμενα';
    subject = 'Θέμα';

    constructor(private localTranslateService: LocalTranslateService) {
        this.consultations = [];
        this.setTranslationPairs();
    }

    consultations: Consultation[];
    notificationsOn = false;


    longString = 'Fugit sit delectus alias aperiam reprehenderit sit. Sit illo laboriosam sint. Rerum ea vitae autem ut possimus voluptatum fugiat eos. Blanditiis autem rerum doloribus.' +
        '<br><br>' +
        'Ea qui qui unde quisquam qui et dolores. Eos enim expedita dolores ullam itaque accusamus qui. Eveniet molestiae delectus est placeat. Explicabo est aut et quas error quam.' +
        '<br><br>' +
        'Vitae tenetur voluptatem molestias dignissimos sit vel. Rerum ex quia earum. Eum possimus sint est id sequi. Quibusdam quisquam eos dolor consequatur cum sunt similique. Eaque corporis tempora ut quia. Voluptas magnam dolorum quibusdam.' +
        '<br><br>' +
        'Praesentium ad magnam voluptatem qui sed nulla et qui. Provident et inventore voluptate mollitia impedit eveniet. Voluptas non quisquam quam blanditiis consequatur. Sit magni voluptatem voluptas aut. Quibusdam quidem perferendis porro distinctio est. Ipsa harum sunt eveniet aut.' +
        '<br><br>' +
        'Temporibus explicabo eius fugit non praesentium sunt voluptatem hic. Quis enim nisi alias velit recusandae est est et. Fuga rerum magnam ipsa vero sit perspiciatis. Voluptatem dolore quia excepturi quas occaecati accusantium. Qui placeat vel quia laudantium.';

    replies = [
        {
            userName: 'Όνομα Επώνυμο',
            text: 'Fugit sit delectus alias aperiam reprehenderit sit. Sit illo laboriosam sint. Rerum ea vitae autem ut possimus voluptatum fugiat eos. Blanditiis autem rerum doloribus.',
            replies: [],
            timestamp: 1612994831,
            isReply: true
        },
        {
            userName: 'Όνομα Επώνυμο',
            text: 'Fugit sit delectus alias aperiam reprehenderit sit. Sit illo laboriosam sint. Rerum ea vitae autem ut possimus voluptatum fugiat eos. Blanditiis autem rerum doloribus.',
            replies: [],
            timestamp: 1612994831,
            isReply: true
        },
        {
            userName: 'Όνομα Επώνυμο',
            text: 'Fugit sit delectus alias aperiam reprehenderit sit. Sit illo laboriosam sint. Rerum ea vitae autem ut possimus voluptatum fugiat eos. Blanditiis autem rerum doloribus.',
            replies: [],
            timestamp: 1612994831,
            isReply: true
        },
        {
            userName: 'Όνομα Επώνυμο',
            text: 'Fugit sit delectus alias aperiam reprehenderit sit. Sit illo laboriosam sint. Rerum ea vitae autem ut possimus voluptatum fugiat eos. Blanditiis autem rerum doloribus.',
            replies: [],
            timestamp: 1612994831,
            isReply: true
        },
        {
            userName: 'Όνομα Επώνυμο',
            text: 'Fugit sit delectus alias aperiam reprehenderit sit. Sit illo laboriosam sint. Rerum ea vitae autem ut possimus voluptatum fugiat eos. Blanditiis autem rerum doloribus.',
            replies: [],
            timestamp: 1612994831,
            isReply: true
        },
        {
            userName: 'Όνομα Επώνυμο',
            text: 'Fugit sit delectus alias aperiam reprehenderit sit. Sit illo laboriosam sint. Rerum ea vitae autem ut possimus voluptatum fugiat eos. Blanditiis autem rerum doloribus.',
            replies: [],
            timestamp: 1612994831,
            isReply: true
        },
        {
            userName: 'Όνομα Επώνυμο',
            text: 'Fugit sit delectus alias aperiam reprehenderit sit. Sit illo laboriosam sint. Rerum ea vitae autem ut possimus voluptatum fugiat eos. Blanditiis autem rerum doloribus.',
            replies: [],
            timestamp: 1612994831,
            isReply: true
        }
    ];

    comments = [
        {
            userName: 'Όνομα Επώνυμο',
            text: 'Fugit sit delectus alias aperiam reprehenderit sit. Sit illo laboriosam sint. Rerum ea vitae autem ut possimus voluptatum fugiat eos. Blanditiis autem rerum doloribus.',
            replies: this.replies,
            timestamp: 1612994831,
            isReply: false
        },
        {
            userName: 'Όνομα Επώνυμο',
            text: 'Fugit sit delectus alias aperiam reprehenderit sit. Sit illo laboriosam sint. Rerum ea vitae autem ut possimus voluptatum fugiat eos. Blanditiis autem rerum doloribus.',
            replies: this.replies,
            timestamp: 1612994831,
            isReply: false
        },
        {
            userName: 'Όνομα Επώνυμο',
            text: 'Fugit sit delectus alias aperiam reprehenderit sit. Sit illo laboriosam sint. Rerum ea vitae autem ut possimus voluptatum fugiat eos. Blanditiis autem rerum doloribus.',
            replies: this.replies,
            timestamp: 1612994831,
            isReply: false
        },
        {
            userName: 'Όνομα Επώνυμο',
            text: 'Fugit sit delectus alias aperiam reprehenderit sit. Sit illo laboriosam sint. Rerum ea vitae autem ut possimus voluptatum fugiat eos. Blanditiis autem rerum doloribus.',
            replies: this.replies,
            timestamp: 1612994831,
            isReply: false
        },
        {
            userName: 'Όνομα Επώνυμο',
            text: 'Fugit sit delectus alias aperiam reprehenderit sit. Sit illo laboriosam sint. Rerum ea vitae autem ut possimus voluptatum fugiat eos. Blanditiis autem rerum doloribus.',
            replies: this.replies,
            timestamp: 1612994831,
            isReply: false
        },
        {
            userName: 'Όνομα Επώνυμο',
            text: 'Fugit sit delectus alias aperiam reprehenderit sit. Sit illo laboriosam sint. Rerum ea vitae autem ut possimus voluptatum fugiat eos. Blanditiis autem rerum doloribus.',
            replies: this.replies,
            timestamp: 1612994831,
            isReply: false
        },
        {
            userName: 'Όνομα Επώνυμο',
            text: 'Fugit sit delectus alias aperiam reprehenderit sit. Sit illo laboriosam sint. Rerum ea vitae autem ut possimus voluptatum fugiat eos. Blanditiis autem rerum doloribus.',
            replies: this.replies,
            timestamp: 1612994831,
            isReply: false
        }
    ];

    ngOnInit() {
        this.localTranslateService.translateLanguage();
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
                break;
        }
    }

    private getConsultations(){
        this.consultations.push(
            {
                name: this.subject,
                text: this.longString,
                files: [],
                comments: this.comments,
                follows: false,
                rating: 0,
                likes: 102,
                dislikes: 2,
                date: new Date('2021-01-01')
            });

        this.consultations.push(
            {
                name: this.subject,
                text: this.longString,
                files: [],
                comments: this.comments,
                follows: true,
                rating: 1,
                likes: 67,
                dislikes: 12,
                date: new Date('2020-12-01')
            });

        this.consultations.push(
            {
                name: this.subject,
                text: this.longString,
                files: [],
                comments: this.comments,
                follows: true,
                rating: 1,
                likes: 407,
                dislikes: 351,
                date: new Date('2020-11-30')
            });

        this.consultations.push(
            {
                name: this.subject,
                text: this.longString,
                files: [],
                comments: this.comments,
                follows: false,
                rating: 0,
                likes: 3,
                dislikes: 0,
                date: new Date('2020-11-27')
            });

        this.consultations.push(
            {
                name: this.subject,
                text: this.longString,
                files: [],
                comments: this.comments,
                follows: true,
                rating: -1,
                likes: 57,
                dislikes: 23,
                date: new Date('2020-11-19')
            });

        this.consultations.push(
            {
                name: this.subject,
                text: this.longString,
                files: [],
                comments: this.comments,
                follows: false,
                rating: 0,
                likes: 2,
                dislikes: 104,
                date: new Date('2020-10-30')
            });

        this.consultations.push(
            {
                name: this.subject,
                text: this.longString,
                files: [],
                comments: this.comments,
                follows: true,
                rating: 1,
                likes: 51,
                dislikes: 7,
                date: new Date('2020-10-25')
            });

        this.consultations.sort((a, b) => -(a.date.getTime() - b.date.getTime()));
    }

    private setTranslationPairs(){
        this.localTranslateService.pairs.push({key: 'discussions', callback: (res: string) => this.discussions = res});
        this.localTranslateService.pairs.push({key: 'order-by', callback: (res: string) => this.orderBy = res});
        this.localTranslateService.pairs.push({key: 'newest', callback: (res: string) => this.newest = res});
        this.localTranslateService.pairs.push({key: 'popular', callback: (res: string) => this.popular = res});
        this.localTranslateService.pairs.push({key: 'selected', callback: (res: string) => this.selected = res});
        this.localTranslateService.pairs.push({key: '_subject', callback: (res: string) => this.subject = res});
    }
}
