import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
    const theme = this.storage?.getItem('theme');
    const body = this.el.nativeElement.ownerDocument.body;
    console.log(Array.from(body.classList));

    if (theme) {
      this.renderer.addClass(body, theme);
    } else {
      this.storage.setItem('theme', 'light');
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
