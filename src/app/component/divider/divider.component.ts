import { Component, Input, OnInit, inject } from '@angular/core';
import { LoggerService } from '../../logger/logger.service';

@Component({
    selector: 'app-divider',
    imports: [],
    templateUrl: './divider.component.html',
    styleUrl: './divider.component.scss'
})
export class DividerComponent implements OnInit {
  @Input({ alias: 'color', transform: trimString }) style: string | undefined;

  private logger: LoggerService = inject(LoggerService);

  constructor() {}

  ngOnInit() {}
}

function trimString(value: string | undefined) {
  return value?.trim() ?? '';
}
