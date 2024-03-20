import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgFor, NgOptimizedImage, NgStyle } from '@angular/common';
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
    RouterLink,
    MatIconModule,
    NgStyle
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent implements OnInit, AfterViewInit {
  public menuContent!: MenuContent[];
  public openedSection!: MenuContent;
  public isOpen: boolean = false;
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
        sectionName: 'finance',
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
        hiddenContent: false,
        iconIsSelected: false
      },
      {
        title: 'Planejamento',
        titleIcon: 'manage_accounts',
        sectionName: 'planning',
        content: [
          { name: 'Carreira', link: '/career', fragment: '' },
          { name: 'Investimentos', link: '/investments', fragment: '' }
        ],
        hiddenContent: false,
        iconIsSelected: false,
      }
    ]

    this.openedSection = this.menuContent[0]
  }

  private __setSections(): void {
    this.sections = {
      financeSection: this.menuContent[0],
      planningSection: this.menuContent[1],
    }
  }

  public openSection(sectionName): void {
    if (this.enableSections) {
      const topic = this.sections[sectionName + 'Section']
      this.openedSection = topic

      if (this.__isDifferentTopic(topic)) {
        this.isOpen = true
        console.log(1);

      } else {
        this.isOpen = !this.isOpen
        console.log(2);

      }
      console.log(3, this.isOpen);

    }
  }

  private __isDifferentTopic(topic: MenuContent): boolean {
    const topicJson = JSON.stringify(topic)
    const currentTopicJson = JSON.stringify(this.openedSection)

    return topicJson !== currentTopicJson
  }

  @HostListener('window:resize')
  private __onResize(): void {
    const navMenu = this.el.nativeElement.querySelector('.app-nav-menu-wrapper');

    if (navMenu) {
      const navMenuWidth = navMenu.offsetWidth

      if (navMenuWidth == 75) {
        this.enableSections = true
        this.isOpen = false
      } else {
        this.enableSections = false
        this.isOpen = false
      }
    }

    if (this.enableSections) {
      this.__setHeight('topic-content')
    }
  }

  private __setHeight(classOfElement: string): void {
    const element = this.el.nativeElement.querySelectorAll(`.${classOfElement}`)

    element.forEach((element: HTMLElement) => {
      this.__defineHeightValue(element)
    })
  }

  private __defineHeightValue(element: HTMLElement): void {
    const elementHeight = element.offsetHeight

    if (elementHeight) {
      this.renderer.setStyle(element, 'height', `${elementHeight}px`)
    }
  }
}
