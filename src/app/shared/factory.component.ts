import { Component, Input } from '@angular/core';
import { IFactory }                from './../product';

@Component({
    selector: 'ai-factory',
    templateUrl: './factory.component.html'
})
export class FactoryComponent {
    @Input() prodFactories: IFactory[];

}
