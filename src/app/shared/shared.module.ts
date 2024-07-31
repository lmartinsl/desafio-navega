import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FillButtonDirective } from './directives/fill-button.directive';

const COMPONENTS = [SidebarComponent];
const DIRECTIVES = [FillButtonDirective];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class SharedModule {}
