import { Component, Input, OnInit } from '@angular/core';
import { JIssue } from 'src/app/core/interfaces/issue';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IssueModalComponent } from '../issue-modal/issue-modal.component';
import { ProjectQuery } from 'src/app/project/state/project/project.query';
@Component({
  selector: 'app-issues-card',
  templateUrl: './issues-card.component.html',
  styleUrls: ['./issues-card.component.scss'],
})
export class IssuesCardComponent implements OnInit {
  @Input() issue!: JIssue;
  constructor(
    private _modalService: NzModalService,
    private _projectQuery: ProjectQuery
  ) {}

  ngOnInit(): void {}

  openIssueModal(issueId: string) {
    this._modalService.create({
      nzContent: IssueModalComponent,
      nzWidth: 1040,
      nzClosable: false,
      nzFooter: null,
      nzComponentParams: {
        issue$: this._projectQuery.issueById$(issueId),
      },
    });
  }
}
