import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit, ElementRef, Renderer2, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserStorageService } from '../../services/browser-storage/browser-storage.service';
import { NgIf, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    NgIf,
  ],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.scss'
})
export class ThemeButtonComponent implements OnInit{
  public theme!: string;

  constructor (
    @Inject(DOCUMENT) private document: Document,
    private storage: BrowserStorageService,
    private renderer: Renderer2,

  ) {}

  ngOnInit(): void {
    this.theme = this.storage.getItem('theme')
  }

  public changeTheme(theme: string): void {
    const html = this.document.querySelector('html')

    if (theme === 'light-mode') {
      this.renderer.removeClass(html, 'dark-mode');
      this.renderer.addClass(html, 'light-mode');
      this.storage.setItem('theme', 'light-mode');
    } else { // theme === 'dark-mode'
      this.renderer.removeClass(html, 'light-mode');
      this.renderer.addClass(html, 'dark-mode');
      this.storage.setItem('theme', 'dark-mode');
    }

    this.theme = this.storage.getItem('theme')
  }

}

