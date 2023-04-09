import { Component, Input } from '@angular/core';

@Component({
  selector: 'j-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: string = '';
  @Input() className: string = '';
  @Input() name: string = '';
  @Input() ariaLabel: string = '';
  @Input() icon: string = '';
  @Input() iconSize = 18;
  @Input() isWorking = false;
  @Input() isActive = false;
  @Input() disabled = false;
}
