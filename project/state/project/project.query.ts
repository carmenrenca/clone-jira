import { ProjectState, ProjectStore } from './project.store';
import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { IssueStatus, JIssue } from 'src/app/core/interfaces/issue';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectQuery extends Query<ProjectState> {
  user$ = this.select('users');
  issues$ = this.select('issues');
  projects$ = this.select();
  constructor(store: ProjectStore) {
    super(store);
  }

  issueByStatusSorted$ = (status: IssueStatus): Observable<JIssue[]> =>
    this.issues$.pipe(
      map((issues) =>
        issues
          .filter((x) => x.status === status)
          .sort((a, b) => a.listPosition - b.listPosition)
      )
    );

  issueById$ = (statusId: string) =>
    this.issues$.pipe(map((issue) => issue.find((x) => x.id === statusId)));
}
