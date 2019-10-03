import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-vitual-scroll',
  templateUrl: './basic-vitual-scroll.component.html',
  styleUrls: ['./basic-vitual-scroll.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicVitualScrollComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

}
