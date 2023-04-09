import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent {
  @Input() name: string = '';
  @Input() size = 16;
  @Input() fill = 'currentColor';

  window: any = window;

  get iconUrl() {
    return `${this.window.location.href}#${this.name}`;
  }
}
