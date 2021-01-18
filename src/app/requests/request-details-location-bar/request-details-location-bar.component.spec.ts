import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestDetailsLocationBarComponent } from './request-details-location-bar.component';

describe('RequestDetailsLocationBarComponent', () => {
  let component: RequestDetailsLocationBarComponent;
  let fixture: ComponentFixture<RequestDetailsLocationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDetailsLocationBarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestDetailsLocationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
