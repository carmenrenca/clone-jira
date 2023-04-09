import { ButtonComponent } from './jira-control/button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './jira-control/input/input.component';
import { SvgIconComponent } from './jira-control/svg-icon/svg-icon.component';
import { AvatarComponent } from './jira-control/avatar/avatar.component';
import { BreadCrumbsComponent } from './jira-control/bread-crumbs/breadcrumbs.component';

const JirControlsComponents = [
  InputComponent,
  SvgIconComponent,
  AvatarComponent,
  ButtonComponent,
  BreadCrumbsComponent,
];
@NgModule({
  declarations: JirControlsComponents,
  imports: [CommonModule, ReactiveFormsModule],
  exports: JirControlsComponents,
})
export class JiraControlModule {}
