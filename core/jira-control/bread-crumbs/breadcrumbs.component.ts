import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadCrumbsComponent implements OnInit {
  @Input() items: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
