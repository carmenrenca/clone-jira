import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() placeholder = '';
  @Input() iconSize = 16;
  @Input() icon: string = '';
  ngOnInit(): void {}

  get iconContainerWidth(): number {
    return this.iconSize * 2;
  }
}
