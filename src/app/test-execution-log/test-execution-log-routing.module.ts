import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LogsComponent } from "./logs/logs.component";

const testExecutionLogRoutes: Routes = [
    {
        path: '',
        component: LogsComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(testExecutionLogRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TestExecutionLogRoutingModule {}