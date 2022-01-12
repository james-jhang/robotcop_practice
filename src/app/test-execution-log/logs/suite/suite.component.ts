import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Suite } from '../../robot-model';

@Component({
  selector: 'app-suite',
  templateUrl: './suite.component.html',
  styleUrls: ['./suite.component.css']
})
export class SuiteComponent implements OnInit, OnChanges {

  @Input() suite!: Suite;
  @Input() expandedAll: boolean = false;
  @Input() expanded: boolean = true;


  constructor() {
    console.log(this.suite);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['expandedAll']) {
      this.expanded = changes['expandedAll']['currentValue'];
    }
  }

  ngOnInit(): void {
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  expandMore(event: Event) {
    this.expandedAll = true;
    this.expanded = true;
    event.stopPropagation();
  }

  expandLess(event: Event) {
    this.expandedAll = false;
    this.expanded = false;
    event.stopPropagation();
  }

  link() {

  }
}
