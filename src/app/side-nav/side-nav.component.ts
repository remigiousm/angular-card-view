import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
    @Input() isExpanded: boolean = true;
    @Output() toggleMenu = new EventEmitter();

    public routeLinks = [{ link: 'book', name: 'BOOKS', icon: 'book' }];
}
