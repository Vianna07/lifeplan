import { Component, OnInit, Renderer2, ElementRef, Input, AfterViewInit } from '@angular/core';
import { NavModule } from './nav-module.interface';
import { NgClass, NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent implements OnInit, AfterViewInit {
  @Input({required: true}) visible!: boolean;
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
          { name: 'Introdução', fragment: 'introduction' },
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
  }

  ngAfterViewInit(): void {
    this.__setHeightOf('anchors', this.navModules)
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

  private __setHeightOf(element: string,  navModules: NavModule[]): void {
    const elements = Array.from(this.el.nativeElement.querySelectorAll(`.${element}`))

    elements.forEach((element, index: number) => {
      let children = navModules[index].anchors

      this.renderer.setStyle(element, 'height', `${children.length * 29}px`)
    })
  }
}
