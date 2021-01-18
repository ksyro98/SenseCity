import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestsTabPage } from './requests-tab.page';

describe('RequestsTabPage', () => {
  let component: RequestsTabPage;
  let fixture: ComponentFixture<RequestsTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
