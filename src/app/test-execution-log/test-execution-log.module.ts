import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LogsComponent } from "./logs/logs.component";

import { TestExecutionLogRoutingModule } from "./test-execution-log-routing.module";
import { SuiteComponent } from './logs/suite/suite.component';
import { TestComponent } from './logs/test/test.component';
import { KeywordComponent } from './logs/keyword/keyword.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        TestExecutionLogRoutingModule,
    ],
    declarations: [
        LogsComponent,
        SuiteComponent,
        TestComponent,
        KeywordComponent
    ]
})
export class TestExecutionLogModule {}