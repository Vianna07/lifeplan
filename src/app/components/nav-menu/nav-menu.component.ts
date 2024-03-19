import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { MenuContent } from './menu-content.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    NgFor,
    NgOptimizedImage,
    NgClass,
    NgIf,
    RouterLink,
    MatIconModule,
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent implements OnInit, AfterViewInit {
  public menuContent!: MenuContent[];
  private sections!: object;
  private enableSections!: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}
  ngOnInit(): void {
    this.__setMenuContent()
    this.__setSections()
  }

  ngAfterViewInit(): void {
    this.__onResize()
  }

  private __setMenuContent(): void {
    this.menuContent = [
      {
        title: 'Finanças',
        titleIcon: 'monetization_on',
        sectionName: 'Finance',
        content: [
          { name: 'O que é?', link: '/finance', fragment: 'what-is-it' },
          { name: 'Poupança', link: '/finance', fragment: 'savings-account' },
          { name: 'CDB/CDI', link: '/finance', fragment: 'certificate-of-deposit' },
          { name: 'LCI/LCA', link: '/finance', fragment: 'lci-lca' },
          { name: 'Tesouro Direto', link: '/finance', fragment: 'treasury-direct' },
          { name: 'Fundos Imobiliários', link: '/finance', fragment: 'real-estate-funds' },
          { name: 'Ações', link: '/finance', fragment: 'stocks' },
          { name: 'Criptomoedas', link: '/finance', fragment: 'cryptocurrencies' }
        ],
        hiddenContent: false
      },
      {
        title: 'Planejamento',
        titleIcon: 'manage_accounts',
        sectionName: 'Planning',
        content: [
          { name: 'Carreira', link: '/career', fragment: '' },
          { name: 'Investimentos', link: '/investments', fragment: '' }
        ],
        hiddenContent: false
      }
    ]
  }

  private __setSections(): void {
    this.sections = {
      financeSection: this.menuContent[0],
      planningSection: this.menuContent[1],
    }
  }

  public getSection(sectionName): void {
    if (this.enableSections) {
      return this.sections[sectionName + 'Section']
    }
  }

  public openSection(sectionName): void {
    return this.sections[sectionName + 'Section']
  }

  @HostListener('window:resize')
  private __onResize(): void {
    const navMenu = this.el.nativeElement.querySelector('.app-nav-menu-wrapper');

    if (navMenu) {
      const navMenuWidth = navMenu.offsetWidth

      if (navMenuWidth == 75) {
        this.enableSections = true
      } else {
        this.enableSections = false
      }
    }

    const topicContentList = this.el.nativeElement.querySelectorAll('.topic-content')

    topicContentList.forEach((topicContent: HTMLElement) => {
      const topicContentHeight = topicContent.offsetHeight
      if (topicContentHeight) {
        this.renderer.setStyle(topicContent, 'height', `${topicContentHeight}px`)
      }
    })
  }
}
