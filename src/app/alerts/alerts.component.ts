import { Component, OnInit } from '@angular/core';
import { Alert} from "../models";
import { MessageBusService } from '../message-bus.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.less']
})
export class AlertsComponent implements OnInit {
  public alerts: Array<Alert> = [];

  constructor(private messageBus: MessageBusService) {
      this.messageBus.addListener('Alert', this.onMessageReceived.bind(this))
  }

  onMessageReceived(alert: any) {
      this.alerts.push(alert);
  }

  ngOnInit() {

  }

}
