import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges, OnChanges} from '@angular/core';
import {Service} from '../../entities/Service';
import {SubService} from '../../entities/SubService';
import {isOtherCategory, OtherCategory} from '../../entities/OtherCategory';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';

@Component({
  selector: 'app-technical-form-subcategory',
  templateUrl: './technical-form-sub-service.component.html',
  styleUrls: ['./technical-form-sub-service.component.scss'],
})
export class TechnicalFormSubServiceComponent implements OnInit {

  @Input() service: Service;
  canProceed: boolean;
  @Output() canProceedEvent = new EventEmitter<boolean>();
  @Input() category: SubService;
  @Output() categoryChange = new EventEmitter<SubService>();
  categories: SubService[];
  otherPressed = false;
  value: string;

  shortDescription = 'Συντομη περιγραφη (εως 40 χαρ.)';

  constructor(private localTranslateService: LocalTranslateService) {}

  ngOnInit() {
    this.categories = Service.getSubService(this.service.id);
    this.setOtherPressed(this.category.id === -1);
    this.value = this.getCategoryDescription();

    this.setTranslationPairs();
    this.localTranslateService.translateLanguage();
  }

  onItemClick(category: SubService){
    this.setCategory(category);
    this.setOtherPressed(category.id === -1);
  }

  setOtherPressed(otherPressed: boolean){
    if (this.otherPressed === true && otherPressed === true) {
      return;
    }
    this.otherPressed = otherPressed;
    this.setCanProceed(!this.otherPressed);
  }

  setCanProceed(canProceed: boolean){
    this.canProceed = canProceed;
    this.canProceedEvent.emit(this.canProceed);
  }

  setCategory(category: SubService){
    this.category = category;
    this.categoryChange.emit(this.category);
  }

  getCategoryDescription(): string{
    if (isOtherCategory(this.category)){
      return (this.category as OtherCategory).shortDescription;
    }
    return '';
  }

  private setTranslationPairs(){
    this.categories.forEach((category) => {
      this.localTranslateService.pairs.push({key: category.translationKey, callback: (res: string) => category.name = res});
    });
    this.localTranslateService.pairs.push({key: 'short-description', callback: (res: string) => this.shortDescription = res});
  }
}
