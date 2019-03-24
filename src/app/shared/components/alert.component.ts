import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert',
  template: `
    <ng-template [ngIf]="alerts && alerts.length > 0">
      <ngb-alert *ngFor="let alert of alerts">
        {{ alert }}
      </ngb-alert>
    </ng-template>
  `,
  providers: [NgbAlertConfig],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AlertComponent {

  public constructor(private alertConfig: NgbAlertConfig) {
    alertConfig.dismissible = false;
  }

  @Input() public alerts: Array<string>;
  @Input() public set type(v: string) {
    this.alertConfig.type = v;
  }


}
