import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileUploaderPage } from './profile-uploader.page';

describe('ProfileUploaderPage', () => {
  let component: ProfileUploaderPage;
  let fixture: ComponentFixture<ProfileUploaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUploaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileUploaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
