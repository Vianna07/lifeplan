import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { MenuContent } from './menu-content.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgFor,
    NgOptimizedImage,
    NgClass,
    RouterLink,
    MatIconModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public menuContent!: MenuContent[];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}
  ngOnInit(): void {
    this.__setMenuContent()
  }

  ngAfterViewInit(): void {
    this.__setHeightOfTopicContent()
  }

  private __setMenuContent(): void {
    this.menuContent = [
      {
        title: 'Finanças',
        titleIcon: 'monetization_on',
        content: [
          { name: 'O que é?', link: '/finance', fragment: 'what-is-it' },
          { name: 'Poupança', link: '/finance', fragment: 'savings-account' },
          { name: 'CDB/CDI', link: '/finance', fragment: 'certificate-of-deposit' },
          { name: 'LCI/LCA', link: '/finance', fragment: 'lci-lca' },
          { name: 'Tesouro Direto', link: '/finance', fragment: 'treasury-direct' },
          { name: 'Fundos Imobiliários', link: '/finance', fragment: 'reits' },
          { name: 'Ações', link: '/finance', fragment: 'stocks' },
          { name: 'Criptomoedas', link: '/finance', fragment: 'cryptocurrencies' }
        ],
        hiddenContent: false
      },
      {
        title: 'Planejamento',
        titleIcon: 'manage_accounts',
        content: [
          { name: 'Carreira', link: '/career', fragment: '' },
          { name: 'Investimentos', link: '/investments', fragment: '' }
        ],
        hiddenContent: false
      }
    ]
  }

  private __setHeightOfTopicContent(): void {
    const topicContentList = this.el.nativeElement.querySelectorAll('.topic-content')

    topicContentList.forEach((topicContent: HTMLElement) => {
      const topicContentHeight = topicContent.offsetHeight
      this.renderer.setStyle(topicContent, 'height', `${topicContentHeight + 15}px`)
    })
  }
}
