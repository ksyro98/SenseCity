import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Service} from '../../entities/Service';
import {SubService} from '../../entities/SubService';
import {isOtherCategory, OtherCategory} from '../../entities/OtherCategory';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {PermissionFlag} from '../../entities/utils/PermissionFlag';

@Component({
  selector: 'app-technical-form-subcategory',
  templateUrl: './technical-form-sub-service.component.html',
  styleUrls: ['./technical-form-sub-service.component.scss'],
})
export class TechnicalFormSubServiceComponent implements OnInit {

  @Input() service: Service;
  canProceed: boolean;
  @Output() canProceedEvent = new EventEmitter<PermissionFlag>();
  @Input() category: SubService;
  @Output() categoryChange = new EventEmitter<SubService>();
  categories: SubService[];
  otherPressed = false;
  value: string;

  shortDescription = 'Συντομη περιγραφη (εως 40 χαρ.)';
  private categoryNotSelectedTxt = '';

  constructor(private localTranslateService: LocalTranslateService) {}

  ngOnInit() {
    this.categories = Service.getSubServices(this.service.id);
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
    const reason = this.canProceed ? '' : this.categoryNotSelectedTxt;
    this.canProceedEvent.emit(new PermissionFlag(this.canProceed, reason));
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
    this.localTranslateService.pairs.push({key: 'description-not-set', callback: (res: string) => this.categoryNotSelectedTxt = res});
  }
}
