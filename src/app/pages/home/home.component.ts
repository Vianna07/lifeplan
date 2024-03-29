import { Component, OnInit } from '@angular/core';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { moduleContent } from './module-content.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavMenuComponent,
    NgOptimizedImage,
    NgFor,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public moduleContent!: moduleContent[]

  constructor() { }

  ngOnInit(): void {
    this.__setModuleContent()
  }

  private __setModuleContent():void {
    this.moduleContent = [
      {
        title: "Módulo de Finanças",
        description: "O módulo de finanças do LifePlan é projetado para fornecer informações e orientações sobre diversos aspectos financeiros, ajudando os usuários a entender melhor suas opções e tomar decisões informadas sobre suas finanças pessoais. Aqui estão alguns tópicos que podem ser abordados neste módulo:",
        topics: [
          {
            title: "O que é?",
            description: "Esta seção pode oferecer uma visão geral do conceito de finanças pessoais, explicando a importância de gerenciar o dinheiro de forma eficaz."
          },
          {
            title: "CDB/CDI",
            description: "Informações sobre investimentos em CDB (Certificado de Depósito Bancário) e CDI (Certificado de Depósito Interbancário), incluindo como funcionam e por que são importantes para o planejamento financeiro. Isso pode incluir detalhes sobre taxas de retorno, prazos de resgate e riscos associados."
          }
        ]
      },
      {
        title: "Módulo de Planejamento",
        description: "O módulo de planejamento do LifePlan tem como objetivo ajudar os usuários a desenvolver estratégias para alcançar seus objetivos de vida, incluindo carreira e investimentos. Aqui estão alguns dos tópicos que podem ser abordados neste módulo:",
        topics: [
          {
            title: "Carreira",
            description: "Exploração de diferentes aspectos relacionados à carreira, como planejamento de carreira, desenvolvimento de habilidades e estratégias para avançar profissionalmente. Isso pode incluir conselhos sobre networking, elaboração de currículo e técnicas de entrevista."
          },
          {
            title: "Investimentos",
            description: "Orientação sobre como planejar e gerenciar investimentos para alcançar metas financeiras de longo prazo, incluindo estratégias de alocação de ativos e diversificação. Isso pode incluir informações sobre diferentes tipos de investimentos, como ações, títulos e fundos mútuos, e como construir um portfólio diversificado."
          }
        ]
      }
    ]
  }
}
