import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFillButton]',
})
export class FillButtonDirective {
  constructor(private _eleRef: ElementRef) {
    _eleRef.nativeElement.style.width = '100%';
    _eleRef.nativeElement.style.height = '40px';
    _eleRef.nativeElement.style.justifyContent = 'center';
    _eleRef.nativeElement.style.fontWeight = 'bold';
    _eleRef.nativeElement.style.backgroundColor = '#1aaab2';
    _eleRef.nativeElement.style.border = 'none';
    _eleRef.nativeElement.style.color = '#ffff';
  }
}
