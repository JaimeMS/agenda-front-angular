import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoDetalheComponent } from './contato-detalhe.component';

describe('ContatoDetalheComponent', () => {
  let component: ContatoDetalheComponent;
  let fixture: ComponentFixture<ContatoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
