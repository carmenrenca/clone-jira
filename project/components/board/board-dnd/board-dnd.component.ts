import { Component, OnInit } from '@angular/core';
import { IssueStatus } from 'src/app/core/interfaces/issue';
import { ProjectQuery } from 'src/app/project/state/project/project.query';

@Component({
  selector: 'app-board-dnd',
  templateUrl: './board-dnd.component.html',
  styleUrls: ['./board-dnd.component.scss'],
})
export class BoardDndComponent implements OnInit {
  issueStatuses: IssueStatus[] = [
    IssueStatus.BACKLOG,
    IssueStatus.SELECTED,
    IssueStatus.IN_PROGRESS,
    IssueStatus.DONE,
  ];

  constructor(public projectQuery: ProjectQuery) {}

  ngOnInit(): void {}
}
