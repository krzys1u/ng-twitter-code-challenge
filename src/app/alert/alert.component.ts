import { Component, OnInit, Input } from '@angular/core';
import { Alert } from '../models';
import { AlertConfig } from 'ngx-bootstrap/alert';

export function getAlertConfig(): AlertConfig {
  let alertConfig: AlertConfig = new AlertConfig();

  alertConfig.dismissible = true;
  alertConfig.dismissOnTimeout = 2000;

  return Object.assign(alertConfig, {});
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less'],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class AlertComponent implements OnInit {
  @Input() alert: Alert;

  constructor() { }

  ngOnInit() {
  }

}
