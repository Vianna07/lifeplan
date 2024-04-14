import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { BrowserStorageService } from './services/browser-storage/browser-storage.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private storage: BrowserStorageService,
    private renderer: Renderer2,
    private el: ElementRef,
  ) {}

  ngOnInit(): void {
    this.__setTheme();
  }

  private __setTheme(): void {
    const theme = this.storage.get('theme')
    const body = this.el.nativeElement.ownerDocument.body

    if (theme) {
      this.renderer.addClass(body, theme)
    } else {
      this.renderer.addClass(body, 'dark')
      this.storage.set('theme', 'dark');
    }
  }

  @HostListener('keyup', ['$event'])
  private __onKeyUp(event: KeyboardEvent): void {
    const targetElement = event.target as HTMLElement

    if (event.key === 'Enter') {
      targetElement.click()
    }
  }
}
