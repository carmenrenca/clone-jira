import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { JProject } from 'src/app/core/interfaces/project';

export type ProjectState = JProject;

function createInitialState(): ProjectState {
  return {
    issues: [],
    users: [],
  } as ProjectState;
}
@Injectable({
  providedIn: 'root',
})
@StoreConfig({
  name: 'project',
})
export class ProjectStore extends Store<ProjectState> {
  constructor() {
    super(createInitialState());
  }
}
