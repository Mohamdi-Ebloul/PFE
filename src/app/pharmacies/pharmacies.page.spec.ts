import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PharmaciesPage } from './pharmacies.page';

describe('PharmaciesPage', () => {
  let component: PharmaciesPage;
  let fixture: ComponentFixture<PharmaciesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaciesPage ],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PharmaciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
