import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges, OnChanges} from '@angular/core';
import {RequestedService} from '../../entities/RequestedService';
import {Category} from '../../entities/Category';
import {valueReferenceToExpression} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';
import {isOtherCategory, OtherCategory} from '../../entities/OtherCategory';

@Component({
  selector: 'app-technical-form-subcategory',
  templateUrl: './technical-form-subcategory.component.html',
  styleUrls: ['./technical-form-subcategory.component.scss'],
})
export class TechnicalFormSubcategoryComponent implements OnInit {

  @Input() service: RequestedService;
  canProceed: boolean;
  @Output() canProceedEvent = new EventEmitter<boolean>();
  @Input() category: Category;
  @Output() categoryChange = new EventEmitter<Category>();
  categories: Category[];
  otherPressed = false;
  value: string;

  constructor() {}

  ngOnInit() {
    this.categories = RequestedService.getCategoryForService(this.service.id);
    this.setOtherPressed(this.category.id === -1);
    this.value = this.getCategoryDescription();
  }

  onItemClick(category: Category){
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

  setCategory(category: Category){
    this.category = category;
    this.categoryChange.emit(this.category);
  }

  getCategoryDescription(): string{
    if (isOtherCategory(this.category)){
      return (this.category as OtherCategory).shortDescription;
    }
    return '';
  }

}
