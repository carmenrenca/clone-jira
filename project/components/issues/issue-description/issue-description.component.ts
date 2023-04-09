import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-description',
  templateUrl: './issue-description.component.html',
  styleUrls: ['./issue-description.component.scss'],
})
export class IssueDescriptionComponent implements OnInit {
  @Input() issue: any;
  constructor() {}

  ngOnInit(): void {}
}
