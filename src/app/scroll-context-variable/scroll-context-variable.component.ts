import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-context-variable',
  templateUrl: './scroll-context-variable.component.html',
  styleUrls: ['./scroll-context-variable.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollContextVariableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
}
