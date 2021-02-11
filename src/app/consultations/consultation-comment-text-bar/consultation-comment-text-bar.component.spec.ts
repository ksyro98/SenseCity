import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultationCommentTextBarComponent } from './consultation-comment-text-bar.component';

describe('ConsultationCommentTextBarComponent', () => {
  let component: ConsultationCommentTextBarComponent;
  let fixture: ComponentFixture<ConsultationCommentTextBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationCommentTextBarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultationCommentTextBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
