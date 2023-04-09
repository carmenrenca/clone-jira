import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'j-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() avatarUrl: string = '';
  @Input() size = 12;
  @Input() name = '';
  @Input() rounded = true;
  @Input() className = '';
  constructor() {}

  ngOnInit(): void {}

  get style() {
    return {
      witch: `${this.size}px`,
      height: `${this.size}px`,
      'background-image': `url('${this.avatarUrl}')`,
      'border-radius': this.rounded ? '100%' : '3px',
    };
  }
}
