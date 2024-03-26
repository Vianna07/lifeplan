import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserStorageService } from '../../services/browser-storage/browser-storage.service';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.scss'
})
export class ThemeButtonComponent implements OnInit{
  private themes!: object
  private execute: boolean = false

  constructor (
    private storage: BrowserStorageService,
    private el: ElementRef, 
    private renderer: Renderer2,

  ) {}

  ngOnInit(): void {
    this.themes = {
      dark: "light",
      light: "dark"
    }
  }

  public changeTheme(): void {
    if (this.execute) {
      const theme = this.themes[this.storage.get("theme")]
    const body = this.el.nativeElement.ownerDocument.body

    if (theme) {
      console.log(theme, this.themes[theme]);
      
      this.renderer.addClass(body, theme)
      this.renderer.removeClass(body, this.themes[theme])
    }
    this.storage.set('theme', theme );
    this.execute = !this.execute
    } else {
      this.execute = !this.execute
    }
    
  }
  
}

