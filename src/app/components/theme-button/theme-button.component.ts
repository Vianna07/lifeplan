import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserStorageService } from '../../services/browser-storage/browser-storage.service';
import { NgIf } from '@angular/common';

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
    private storage: BrowserStorageService,
    private renderer: Renderer2,

  ) {}

  ngOnInit(): void {
    this.theme = this.storage.getItem('theme')
  }

  public changeTheme(theme: string): void {
    if (theme === 'light') {
      this.renderer.removeClass(document.body, 'dark');
      this.renderer.addClass(document.body, 'light');
      this.storage.setItem('theme', 'light');
    } else { // theme === 'dark'
      this.renderer.removeClass(document.body, 'light');
      this.renderer.addClass(document.body, 'dark');
      this.storage.setItem('theme', 'dark');
    }

    this.theme = this.storage.getItem('theme')
  }

}

