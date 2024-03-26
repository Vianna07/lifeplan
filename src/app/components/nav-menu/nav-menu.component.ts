import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgFor, NgIf, NgOptimizedImage, NgStyle } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { Module } from './module.interface';
import { RouterLink } from '@angular/router';
import { ThemeButtonComponent } from '../theme-button/theme-button.component';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    NgFor,
    NgOptimizedImage,
    NgClass,
    RouterLink,
    MatIconModule,
    ThemeButtonComponent,
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent implements OnInit, AfterViewInit {
  public modules!: Module[];
  public openedModule!: Module;
  public sectionIsOpen: boolean = false;
  private sections!: object;

  constructor(
    public el: ElementRef,
    private renderer: Renderer2,
  ) {}
  ngOnInit(): void {
    this.__setModules()
    this.__setModuleTabindex()
    this.openedModule = this.modules[0]
    this.__setSections()
  }

  ngAfterViewInit(): void {
    this.__setHeightOf('module-content')
  }

  private __setModules(): void {
    this.modules = [
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
        iconIsSelected: false,
        tabindex: 0
      },
      {
        title: 'Planejamento',
        titleIcon: 'manage_accounts',
        sectionName: 'planning',
        content: [
          { name: 'Carreira', link: '/career', fragment: '' },
          { name: 'Investimentos', link: '/investments', fragment: '' },
        ],
        hiddenContent: false,
        iconIsSelected: false,
        tabindex: 0
      }
    ]
  }

  private __setModuleTabindex(): void {
    this.modules.forEach((module, index) => {
      try {
        module.tabindex = (this.modules[index - 1].tabindex)  + (this.modules[index -1].content.length) + 1
      } catch (e) {
        module.tabindex = 1
      }
    })
  }

  private __setSections(): void {
    this.sections = {
      finance: this.modules[0],
      planning: this.modules[1],
    }
  }

  public openSection(sectionName): void {
    const module = this.sections[sectionName]
    this.__setHeightOf('section-module-content')

    if (this.__isDifferentModule(module)) {
      if (!this.sectionIsOpen) {
        this.openedModule = module
        this.sectionIsOpen = true
      } else {
        this.sectionIsOpen = false
        setTimeout(() => {
          this.openedModule = module
          this.sectionIsOpen = true
        }, 300)
      }

    } else {
      this.sectionIsOpen = !this.sectionIsOpen
    }
  }

  private __isDifferentModule(module: Module): boolean {
    const moduleJson = JSON.stringify(module)
    const currentModuleJson = JSON.stringify(this.openedModule)

    return moduleJson !== currentModuleJson
  }

  private __setHeightOf(element: string): void {
    const elements = this.el.nativeElement.querySelectorAll(`.${element}`)

    elements.forEach((element: HTMLElement) => {
      this.__defineHeightValue(element)
    })
  }

  private __defineHeightValue(element: HTMLElement): void {
    const elementHeight = element.offsetHeight

    if (elementHeight) {
      this.renderer.setStyle(element, 'height', `${elementHeight}px`)
    } else {
      const children = element.querySelectorAll('li')
      this.renderer.setStyle(element, 'height', `${children.length * 37}px`)
    }
  }
}
