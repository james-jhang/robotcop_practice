import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Keyword } from '../../robot-model';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.css']
})
export class KeywordComponent implements OnInit, OnChanges {

  @Input() keyword!: Keyword;
  @Input() expanded: boolean = false;
  @Input() expandedAll: boolean = false;

  @Input() type:string = 'keyword';

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
