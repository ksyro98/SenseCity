import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-technical-form-info',
  templateUrl: './technical-form-info.component.html',
  styleUrls: ['./technical-form-info.component.scss'],
})
export class TechnicalFormInfoComponent implements OnInit {

  details = 'Πληροφορίες';
  additionalDescription = 'Επιπλέον Παρατηρήσεις';
  comments = 'Σχόλια';

  @Input() imageDataUrl: string;
  @Output() imageDataUrlChange = new EventEmitter<string>();

  @Input() userComments: string;
  @Output() userCommentsChange = new EventEmitter<string>();

  constructor(public actionSheetController: ActionSheetController, private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

  setTranslationPairs() {
    this.localTranslateService.pairs.push({key: 'details', callback: (res: string) => this.details = res});
    this.localTranslateService.pairs.push({key: 'additional-description', callback: (res: string) => this.additionalDescription = res});
    this.localTranslateService.pairs.push({key: 'comments', callback: (res: string) => this.comments = res});
  }

  onCommentChange(){
    this.userCommentsChange.emit(this.userComments);
  }
}
