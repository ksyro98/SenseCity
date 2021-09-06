import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NeighborhoodTabPage } from './neighborhood-tab.page';

describe('NeighborhoodTabPage', () => {
  let component: NeighborhoodTabPage;
  let fixture: ComponentFixture<NeighborhoodTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeighborhoodTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NeighborhoodTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
