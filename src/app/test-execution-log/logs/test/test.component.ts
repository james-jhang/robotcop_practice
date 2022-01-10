import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../../robot-model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() test!: Test;
  isCollapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
