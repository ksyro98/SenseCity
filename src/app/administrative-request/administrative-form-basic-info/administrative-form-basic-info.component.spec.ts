import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdministrativeFormBasicInfoComponent } from './administrative-form-basic-info.component';

describe('AdministrativeFormBasicInfoComponent', () => {
  let component: AdministrativeFormBasicInfoComponent;
  let fixture: ComponentFixture<AdministrativeFormBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativeFormBasicInfoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdministrativeFormBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
