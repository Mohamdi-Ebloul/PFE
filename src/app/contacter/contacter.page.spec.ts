import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ContacterPage } from './contacter.page';

describe('ContacterPage', () => {
  let component: ContacterPage;
  let fixture: ComponentFixture<ContacterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacterPage ],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ContacterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
