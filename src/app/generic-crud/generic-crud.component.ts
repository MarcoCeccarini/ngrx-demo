import { Component, Input, OnInit } from '@angular/core';
import { GenericService } from '../services/generic.service';


@Component({
  selector: 'app-generic-crud',
  templateUrl: './generic-crud.component.html',
  styleUrls: ['./generic-crud.component.css']
})
export class GenericCrudComponent<T> implements OnInit {

  @Input() columns: string[] = [];
  @Input() entityName: string = '';
  @Input() service!: GenericService<T>;

  items: T[] = [];
  selectedItem: T | null = null;
  isNew: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.service.getAll().subscribe((data: T[]) => {
      this.items = data;
    });
  }

  edit(item: T): void {
    this.selectedItem = { ...item };
    this.isNew = false;
  }

  create(): void {
    this.selectedItem = {} as T;
    this.isNew = true;
  }

  save(): void {
    if (this.isNew) {
      this.service.create(this.selectedItem!).subscribe(() => {
        this.loadItems();
        this.cancel();
      });
    } else {
      const id = (this.selectedItem as any).id;
      this.service.update(id, this.selectedItem!).subscribe(() => {
        this.loadItems();
        this.cancel();
      });
    }
  }

  delete(id: number): void {
    this.service.delete(id).subscribe(() => {
      this.loadItems();
    });
  }

  cancel(): void {
    this.selectedItem = null;
  }
}
