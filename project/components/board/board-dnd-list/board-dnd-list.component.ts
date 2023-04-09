import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  IssueStatus,
  IssueStatusDisplay,
  JIssue,
} from 'src/app/core/interfaces/issue';

@Component({
  selector: '[board-dnd-list]',
  templateUrl: './board-dnd-list.component.html',
  styleUrls: ['./board-dnd-list.component.scss'],
})
export class BoardDndListComponent implements OnInit {
  @Input() status!: IssueStatus;
  @Input() issues$: Observable<JIssue[]> = of();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  IssueStatusDisplay = IssueStatusDisplay;
  issues: JIssue[] = [];
  constructor() {}

  ngOnInit(): void {
    this.issues$.subscribe((res) => {
      this.issues = res;
      console.log(res);
    });
  }
}
