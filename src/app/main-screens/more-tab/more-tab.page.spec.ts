import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreTabPage } from './more-tab.page';

describe('MoreTabPage', () => {
  let component: MoreTabPage;
  let fixture: ComponentFixture<MoreTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
