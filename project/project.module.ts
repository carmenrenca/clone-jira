import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoardComponent } from './pages/board/board.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { BoardFilterComponent } from './components/board/board-filter/board-filter.component';
import { BoardDndComponent } from './components/board/board-dnd/board-dnd.component';
import { JiraControlModule } from '../core/jira-control.module';
import { HttpClientModule } from '@angular/common/http';
import { BoardPageComponent } from './components/board';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IssueUtilComponents } from './components/issues';
import { NzModalModule } from 'ng-zorro-antd/modal';
@NgModule({
  declarations: [
    BoardComponent,
    ProjectComponent,
    ...BoardPageComponent,
    ...IssueUtilComponents,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProjectRoutingModule,
    JiraControlModule,
    DragDropModule,
    NzModalModule,
  ],
  exports: [
    BoardComponent,
    ProjectComponent,
    BoardFilterComponent,
    BoardDndComponent,
  ],
})
export class ProjectModule {}
