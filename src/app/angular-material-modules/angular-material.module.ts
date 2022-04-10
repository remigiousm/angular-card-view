import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatSidenavModule,
        MatTooltipModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatSidenavModule,
        MatTooltipModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
    ],
})
export class AngularMaterialModule {}
