import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonComponent } from './action-button.component';
import { AngularMaterialModule } from 'src/app/angular-material-modules/angular-material.module';

@NgModule({
    declarations: [ActionButtonComponent],
    imports: [CommonModule, AngularMaterialModule],
    exports: [ActionButtonComponent],
})
export class ActionButtonModule {}
