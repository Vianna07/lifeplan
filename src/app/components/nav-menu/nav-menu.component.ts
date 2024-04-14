import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgFor, NgIf, NgOptimizedImage, NgStyle } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, SimpleChanges } from '@angular/core';
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
          { name: 'Taxas', link: '/finance', fragment: 'fees' },
          { name: 'Impostos', link: '/finance', fragment: 'taxes' },
          { name: 'CDB/CDI', link: '/finance', fragment: 'certificate-of-deposit' },
          { name: 'LCI', link: '/finance', fragment: 'lci' },
          { name: 'LCA', link: '/finance', fragment: 'lca' },
          { name: 'Tesouro Direto', link: '/finance', fragment: 'treasury-direct' },
          { name: 'Fundos Imobiliários', link: '/finance', fragment: 'real-estate-investment-funds' },
          { name: 'Mercado de Ações', link: '/finance', fragment: 'stock-market' },
          { name: 'Criptomoedas', link: '/finance', fragment: 'cryptocurrencies' }
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
          { name: 'Investimentos', link: '/investments', fragment: '' },
        ],
        hiddenContent: false,
        iconIsSelected: false,
        tabindex: 0
      }
    ]
  }

  private __setModuleTabindex(): void {
    this.modules.forEach((module: Module, index: number) => {
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
      lifeProject: this.modules[1],
    }
  }

  public openSection(sectionName: string): void {
    const module: Module = this.sections[sectionName]
    this.__deselectAllModules()
    module.iconIsSelected = true

    if (this.__isDifferentModule(module)) {
      if (!this.sectionIsOpen) {
        this.openedModule = module
        this.sectionIsOpen = true
      } else {
        this.sectionIsOpen = false
        setTimeout(() => {
          this.openedModule = module
          this.sectionIsOpen = true
        }, 350)
      }
      this.__setHeightOf('section-module-content', module)
    } else {
      this.sectionIsOpen = !this.sectionIsOpen
    }
  }

  private __deselectAllModules(): void {
    this.modules.forEach((module: Module) => {
      module.iconIsSelected = false
    })
  }

  private __isDifferentModule(module: Module): boolean {
    const moduleJson = JSON.stringify(module)
    const currentModuleJson = JSON.stringify(this.openedModule)

    return moduleJson !== currentModuleJson
  }

  private __setHeightOf(element: string,  module: Module | null = null): void {
    const elements = this.el.nativeElement.querySelectorAll(`.${element}`)

    elements.forEach((element: HTMLElement) => {
      this.__defineHeightValue(element, module)
    })
  }

  private __defineHeightValue(element: HTMLElement, module: Module | null = null): void {
    let children;

    if (module) {
      children = module.content
    } else {
      children = element.querySelectorAll('li')
    }

    this.renderer.setStyle(element, 'height', `${children.length * 37}px`)
  }

  @HostListener('document:click', ['$event'])
  private __onClick(event: MouseEvent): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.sectionIsOpen = false
    }
  }

  @HostListener('keyup', ['$event'])
  private __onKeyUp(event: KeyboardEvent): void {
    const targetElement = event.target as HTMLElement

    if (event.key === 'Escape' || event.key === 'Backspace') {
      this.sectionIsOpen = false
    } else if (event.key === 'Enter') {
      targetElement.click()
    }
  }
}
