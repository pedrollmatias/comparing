import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';

import { ElementLoadingAreaComponent } from './components/element-loading-area/element-loading-area.component';
import { ElementRequestBtnComponent } from './components/element-request-btn/element-request-btn.component';
import { ElementBreadcrumbComponent } from './components/element-breadcrumb/element-breadcrumb.component';
import { ElementFormFieldComponent } from './components/element-form-field/element-form-field.component';
import { ElementCardNoDataFoundComponent } from './components/element-card-no-data-found/element-card-no-data-found.component';
import { ElementButtonIconTextComponent } from './components/element-button-icon-text/element-button-icon-text.component';

@NgModule({
  declarations: [
    ElementLoadingAreaComponent,
    ElementRequestBtnComponent,
    ElementBreadcrumbComponent,
    ElementFormFieldComponent,
    ElementCardNoDataFoundComponent,
    ElementButtonIconTextComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, MaterialModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    ElementLoadingAreaComponent,
    ElementRequestBtnComponent,
    ElementBreadcrumbComponent,
    ElementFormFieldComponent,
    ElementCardNoDataFoundComponent,
    ElementButtonIconTextComponent,
  ],
})
export class SharedModule {}
