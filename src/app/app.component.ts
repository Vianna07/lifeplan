import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { BrowserStorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(
    // public browserStorageService: BrowserStorageService
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.__getTheme();
  }

  ngAfterViewInit(): void {
    this.onResize();
    this.renderer.listen('window', 'resize', this.onResize.bind(this));
  }

  ngOnDestroy(): void {
    // window.removeEventListener('resize', this.onResize.bind(this));
  }

  @HostListener('window:resize')
  private onResize() {
    const pageId = this.elementRef.nativeElement.querySelector('#page')
    const pageClass = this.elementRef.nativeElement.querySelector('.page');
    const containerClass = this.elementRef.nativeElement.querySelector('.container');

    if (pageId && pageClass && containerClass) {
      const pageIdHeight = parseFloat(pageId.offsetHeight)
      const pageClassHeight = parseFloat(pageClass.offsetHeight)

      if (pageClassHeight > pageIdHeight) {
        containerClass.style.maxHeight = `${pageIdHeight}px`
      }
    }
  }

  private __getTheme(): void {
    // const theme = this.browserStorageService.get('theme');

    // if (theme) {
    //   document.body.classList.add(theme);
    // } else {
    //   document.body.classList.add('dark');
    //   this.browserStorageService.set('theme', 'dark');
    // }
  }
}
