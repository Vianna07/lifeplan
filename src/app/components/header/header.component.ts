import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuContent } from './menu-content.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgFor,
    NgOptimizedImage,
    NgIf,
    RouterLink,
    MatIconModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public menuContent!: MenuContent[];

  constructor() {}
  ngOnInit(): void {
    this.__setMenuContent()
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
        showContent: true
      },
      {
        title: 'Planejamento',
        titleIcon: 'manage_accounts',
        content: [
          { name: 'Carreira', link: '/career', fragment: '' },
          { name: 'Investimentos', link: '/investments', fragment: '' }
        ],
        showContent: true
      }
    ]
  }
}
