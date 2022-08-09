import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';

import { LogsComponent } from "./logs/logs.component";

import { TestExecutionLogRoutingModule } from "./test-execution-log-routing.module";
import { SuiteComponent } from './logs/suite/suite.component';
import { TestComponent } from './logs/test/test.component';
import { KeywordComponent } from './logs/keyword/keyword.component';
import { DurationFormatPipe } from './logs/duration-format.pipe';
import { SearchBarComponent } from './logs/search-bar/search-bar.component';

@NgModule({
    imports: [
        CommonModule,
        TestExecutionLogRoutingModule,
        CdkAccordionModule,
        MatIconModule
    ],
    declarations: [
        LogsComponent,
        SuiteComponent,
        TestComponent,
        KeywordComponent,
        DurationFormatPipe,
        SearchBarComponent
    ]
})
export class TestExecutionLogModule { }