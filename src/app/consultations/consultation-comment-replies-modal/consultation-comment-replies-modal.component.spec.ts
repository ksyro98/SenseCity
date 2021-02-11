import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultationCommentRepliesModalComponent } from './consultation-comment-replies-modal.component';

describe('ConsultationCommentRepliesModalComponent', () => {
  let component: ConsultationCommentRepliesModalComponent;
  let fixture: ComponentFixture<ConsultationCommentRepliesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationCommentRepliesModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultationCommentRepliesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
