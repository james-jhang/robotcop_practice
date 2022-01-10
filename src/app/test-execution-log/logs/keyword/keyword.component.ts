import { Component, Input, OnInit } from '@angular/core';
import { Keyword } from '../../robot-model';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.css']
})
export class KeywordComponent implements OnInit {

  @Input() keyword!: Keyword;
  isCollapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
