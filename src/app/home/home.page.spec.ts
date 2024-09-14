import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular'; // Importa el módulo de Ionic

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [ IonicModule.forRoot() ] // Asegúrate de importar el IonicModule
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

