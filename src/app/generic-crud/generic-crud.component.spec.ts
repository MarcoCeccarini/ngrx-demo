import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCrudComponent } from './generic-crud.component';
import { Todo } from '../todo/todo.model';

describe('GenericCrudComponent', () => {
  let component: GenericCrudComponent<Todo>;
  let fixture: ComponentFixture<GenericCrudComponent<Todo>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericCrudComponent<Todo>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
