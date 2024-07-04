import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';
import { GenericService } from '../services/generic.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends GenericService<Todo> {
  constructor(http: HttpClient) {
    super(http, "http://localhost:4200/api/todo");
  }
}
