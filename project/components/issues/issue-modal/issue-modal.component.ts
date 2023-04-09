import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { JIssue } from 'src/app/core/interfaces/issue';
@Component({
  selector: 'app-issue-modal',
  templateUrl: './issue-modal.component.html',
  styleUrls: ['./issue-modal.component.scss'],
})
export class IssueModalComponent implements OnInit {
  @Input() issue$!: Observable<JIssue | undefined>;

  constructor(private _modal: NzModalRef) {}

  ngOnInit(): void {}
  closeModal() {
    this._modal.close();
  }
}
