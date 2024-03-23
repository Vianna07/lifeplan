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
    NgStyle,
    RouterLink,
    MatIconModule,
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent implements OnInit, AfterViewInit {
  public menuContent!: MenuContent[];
  public openedSection!: MenuContent;
  public sectionIsOpen: boolean = false;
  private sections!: object;

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
    this.__setHeight('topic-content')
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
      finance: this.menuContent[0],
      planning: this.menuContent[1],
    }
  }

  public openSection(sectionName): void {
    const topic = this.sections[sectionName]

    if (this.__isDifferentTopic(topic)) {
      if (!this.sectionIsOpen) {
        this.openedSection = topic
        this.sectionIsOpen = true
      } else {
        this.sectionIsOpen = false
        setTimeout(() => {
          this.sectionIsOpen = true
          this.openedSection = topic
        }, 350)
      }
    } else {
      this.sectionIsOpen = !this.sectionIsOpen
    }
  }

  private __isDifferentTopic(topic: MenuContent): boolean {
    const topicJson = JSON.stringify(topic)
    const currentTopicJson = JSON.stringify(this.openedSection)

    return topicJson !== currentTopicJson
  }

  @HostListener('window:resize')
  private __onResize(): void {
    const body = this.el.nativeElement.ownerDocument.body

    if (body.offsetWidth <= 768) {

    } else if (body.offsetWidth <= 1024) {
      this.__setHeight('topic-content')
    } else {
      this.sectionIsOpen = false
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
