import { MatIconModule } from '@angular/material/icon';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { ThemeButtonComponent } from '../theme-button/theme-button.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    RouterLink,
    MatIconModule,
    NavMenuComponent,
    ThemeButtonComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Input() public show: boolean = true;
  @Input({required: true}) public title!: string;

  public navMenuState: string = 'closed';

  constructor(
    public el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('document:click', ['$event'])
  private __onClick(event: MouseEvent): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.navMenuState = 'closed'
    }
    console.log('oi');

  }
}
