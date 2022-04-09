import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material-modules/angular-material.module';
import { ActionButtonModule } from './atoms/action-button/action-button.module';
import { ContainerModule } from './atoms/container/container.module';
import { BookCardModule } from './atoms/book-card/book-card.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, AngularMaterialModule, ActionButtonModule, ContainerModule, BookCardModule],
    exports: [ActionButtonModule, ContainerModule, BookCardModule],
})
export class ReusableUiModule {}
