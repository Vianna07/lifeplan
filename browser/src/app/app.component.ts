import { AfterViewInit, Component, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BrowserStorageService } from './services/browser-storage/browser-storage.service';
import { DOCUMENT } from '@angular/common';


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
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  ngOnInit(): void {
    this.__setTheme();
  }

  private __setTheme(): void {
    const theme = this.storage?.getItem('theme');
    const html = this.document.documentElement

    if (theme) {
      this.renderer.addClass(html, theme);
    } else if (!theme && theme != undefined) {
      this.storage.setItem('theme', 'light-mode');
      this.renderer.addClass(html, 'light-mode');
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
