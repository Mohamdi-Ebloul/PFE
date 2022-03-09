import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HopitauxPage } from './hopitaux.page';

describe('HopitauxPage', () => {
  let component: HopitauxPage;
  let fixture: ComponentFixture<HopitauxPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HopitauxPage ],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HopitauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
