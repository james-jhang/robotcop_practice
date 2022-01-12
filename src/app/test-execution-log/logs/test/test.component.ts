import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Test } from '../../robot-model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges {

  @Input() test!: Test;
  @Input() expanded: boolean = false;
  @Input() expandedAll: boolean = false;

  constructor() { }

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
