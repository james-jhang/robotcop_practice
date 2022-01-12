import { Component, OnInit } from '@angular/core';

import { TestExecutionLogService } from "../test-execution-log.service";
import { Suite } from "../robot-model";

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs!: Suite;

  constructor(private testExecutionLogService: TestExecutionLogService) {}

  ngOnInit(): void {
    this.testExecutionLogService.getSuite().subscribe((s) => {
      this.logs = s;
    });
  }

}
