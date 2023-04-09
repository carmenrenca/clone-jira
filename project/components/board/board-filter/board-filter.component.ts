import { ProjectService } from './../../../state/project/project.service';
import { ProjectQuery } from './../../../state/project/project.query';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-board-filter',
  templateUrl: './board-filter.component.html',
  styleUrls: ['./board-filter.component.scss'],
})
export class BoardFilterComponent implements OnInit {
  searchControl: FormControl = new FormControl('');
  placeholder: string = 'buscador...';
  constructor(
    public projectQuery: ProjectQuery,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.projectService.getProject();
    console.log(this.projectQuery.projects$);
  }
  get usuarios() {
    return this.projectQuery.user$;
  }
}
