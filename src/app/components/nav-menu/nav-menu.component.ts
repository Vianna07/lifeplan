import { Component, OnInit, Renderer2, ElementRef, Input } from '@angular/core';
import { NavModule } from './nav-module.interface';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [],
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
        title: 'Finanças',
        titleIcon: 'monetization_on',
        sectionName: 'finance',
        content: [
          { name: 'Introdução', link: '/finance', fragment: 'what-is-it' },
          { name: 'Taxas', link: '/finance', fragment: 'fees' },
          { name: 'Impostos', link: '/finance', fragment: 'taxes' },
          { name: 'CDB/CDI', link: '/finance', fragment: 'certificate-of-deposit' },
          { name: 'LCI', link: '/finance', fragment: 'lci' },
          { name: 'LCA', link: '/finance', fragment: 'lca' },
          { name: 'Tesouro Direto', link: '/finance', fragment: 'treasury-direct' },
          { name: 'Fundos Imobiliários', link: '/finance', fragment: 'real-estate-investment-funds' },
          { name: 'Mercado de Ações', link: '/finance', fragment: 'stock-market' },
          { name: 'Criptomoedas', link: '/finance', fragment: 'cryptocurrencies' },
          { name: 'Investimentos', link: 'finance/investments' },
        ],
        hiddenContent: false,
        iconIsSelected: false,
        tabindex: 0
      },
      {
        title: 'Projeto de vida',
        titleIcon: 'manage_accounts',
        sectionName: 'lifeProject',
        content: [
          { name: 'Carreira', link: '/career', fragment: '' },
        ],
        hiddenContent: false,
        iconIsSelected: false,
        tabindex: 0
      }
    ]

    this.__setModuleTabindex()
    this.__setState()
  }

  private __setModuleTabindex(): void {
    this.navModules.forEach((module: NavModule, index: number) => {
      try {
        module.tabindex = (this.navModules[index - 1].tabindex)  + (this.navModules[index -1].content.length) + 1
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
      children = navModule.content
    } else {
      children = element.querySelectorAll('li')
    }

    this.renderer.setStyle(element, 'height', `${children.length * 37}px`)
  }
}
