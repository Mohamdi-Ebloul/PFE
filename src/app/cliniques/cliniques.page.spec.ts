import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CliniquesPage } from './cliniques.page';

describe('CliniquesPage', () => {
  let component: CliniquesPage;
  let fixture: ComponentFixture<CliniquesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CliniquesPage ],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(CliniquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
