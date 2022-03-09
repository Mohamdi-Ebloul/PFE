import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LaboratoiresPage } from './laboratoires.page';

describe('LaboratoiresPage', () => {
  let component: LaboratoiresPage;
  let fixture: ComponentFixture<LaboratoiresPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoiresPage ],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(LaboratoiresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
