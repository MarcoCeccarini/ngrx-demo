import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrl: './dashboard-detail.component.css'
})
export class DashboardDetailComponent {

  @Input()
  item: User;

  @Output() onNotify: EventEmitter<string> = new EventEmitter<string>();

  sendNotification() {
    this.onNotify.emit('Message from Child Component!');
  }

}
