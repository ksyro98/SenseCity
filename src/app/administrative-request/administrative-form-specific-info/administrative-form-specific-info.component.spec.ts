import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdministrativeFormSpecificInfoComponent } from './administrative-form-specific-info.component';

describe('AdministrativeFormSpecificInfoComponent', () => {
  let component: AdministrativeFormSpecificInfoComponent;
  let fixture: ComponentFixture<AdministrativeFormSpecificInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativeFormSpecificInfoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdministrativeFormSpecificInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
