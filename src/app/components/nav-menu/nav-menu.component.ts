import { Component, OnInit, Renderer2, ElementRef, Input } from '@angular/core';
import { NavModule } from './nav-module.interface';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    NgFor,
    MatIconModule,
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent implements OnInit {
  @Input({required: true}) state!: string;
  public navModules!: NavModule[];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.navModules = [
      {
        title: {
          name: 'Finanças',
          icon: 'monetization_on'
        },
        baseLink: '/finance',
        anchors: [
          { name: 'Introdução', fragment: 'what-is-it' },
          { name: 'Taxas', fragment: 'fees' },
          { name: 'Impostos', fragment: 'taxes' },
          { name: 'CDB/CDI', fragment: 'certificate-of-deposit' },
          { name: 'LCI', fragment: 'lci' },
          { name: 'LCA', fragment: 'lca' },
          { name: 'Tesouro Direto', fragment: 'treasury-direct' },
          { name: 'Fundos Imobiliários', fragment: 'real-estate-investment-funds' },
          { name: 'Mercado de Ações', fragment: 'stock-market' },
          { name: 'Criptomoedas', fragment: 'cryptocurrencies' },
          { name: 'Investimentos', link: '/investments' },
        ],
        hiddenAnchors: false,
        tabindex: 0
      },
      {
        title: {
          name: 'Projeto de vida',
          icon: 'manage_accounts',
        },
        baseLink: '/life-project',
        anchors: [
          { name: 'Carreira', link: '/career' },
        ],
        hiddenAnchors: false,
        tabindex: 0
      }
    ]

    this.__setModuleTabindex()
    this.__setState()
  }

  private __setModuleTabindex(): void {
    this.navModules.forEach((module: NavModule, index: number) => {
      try {
        module.tabindex = (this.navModules[index - 1].tabindex)  + (this.navModules[index -1].anchors.length) + 1
      } catch (e) {
        module.tabindex = 1
      }
    })
  }

  private __setState(): void {
    if (this.state === 'closed') {
      // this.renderer.selectRootElement('')
    }
  }

  private __setHeightOf(element: string,  navModule: NavModule | null = null): void {
    const elements = this.el.nativeElement.querySelectorAll(`.${element}`)

    elements.forEach((element: HTMLElement) => {
      this.__defineHeightValue(element, navModule)
    })
  }

  private __defineHeightValue(element: HTMLElement, navModule: NavModule | null = null): void {
    let children;

    if (navModule) {
      children = navModule.anchors
    } else {
      children = element.querySelectorAll('li')
    }

    this.renderer.setStyle(element, 'height', `${children.length * 37}px`)
  }
}
