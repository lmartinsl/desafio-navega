import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FillButtonDirective } from './directives/fill-button.directive';

import { DividerModule } from 'primeng/divider';

const PRIMENG = [DividerModule]
const COMPONENTS = [SidebarComponent, SidenavComponent];
const DIRECTIVES = [FillButtonDirective];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [...PRIMENG, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class SharedModule {}
