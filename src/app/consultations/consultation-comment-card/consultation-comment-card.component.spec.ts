import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultationCommentCardComponent } from './consultation-comment-card.component';

describe('ConsultationCommentCardComponent', () => {
  let component: ConsultationCommentCardComponent;
  let fixture: ComponentFixture<ConsultationCommentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationCommentCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultationCommentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
