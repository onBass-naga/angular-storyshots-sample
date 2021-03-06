import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  @Output() closed = new EventEmitter();

  constructor() { }

  close() {
    this.closed.emit();
  }
}
