import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-action-button',
    templateUrl: './action-button.component.html',
    styleUrls: ['./action-button.component.scss'],
})
export class ActionButtonComponent {
    @Input()
    matIconNamePrefix = '';

    @Input()
    matTooltipText = '';

    @Input()
    matTooltipPosition: 'above' | 'below' | 'left' | 'right' | 'before' | 'after' = 'above';

    @Input()
    buttonText = '';

    // Emit the button click event to run custom functions in parent component
    @Output()
    buttonClick: EventEmitter<any> = new EventEmitter();

    @Input() type: 'primary' = 'primary';

    constructor() {}

    onButtonClick($event: any) {
        this.buttonClick.emit($event);
    }
}
