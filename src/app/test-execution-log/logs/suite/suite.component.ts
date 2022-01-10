import { Component, Input, OnInit } from '@angular/core';
import { Suite } from '../../robot-model';

@Component({
  selector: 'app-suite',
  templateUrl: './suite.component.html',
  styleUrls: ['./suite.component.css']
})
export class SuiteComponent implements OnInit {

  @Input() suite!: Suite;

  isCollapsed: boolean = false;

  // id!: string;
  // name!: string;
  // longname!: string;
  // source!: string;
  // passed!: boolean;
  // status!: string;
  // starttime!: Date;
  // endtime!: Date;
  // elapsedtime!: number;
  // setup!: Keyword;
  // teardown!: Keyword;
  // suite_test!: (Test|Suite)[];

  constructor() { }

  ngOnInit(): void {
  }
}
