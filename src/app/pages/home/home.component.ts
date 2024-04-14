import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Module } from '../../models/module.interface';
import { ModuleIteratorComponent } from '../../components/module-iterator/module-iterator.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent,
    ModuleIteratorComponent,
    NgOptimizedImage,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public modules!: Module[]

  constructor() { }

  ngOnInit(): void {
    this.__setModules()
  }

  private __setModules():void {
    this.modules = [
      {
        title: 'Introdução',
        description: 'LifePlan é uma plataforma projetada para ajudar os usuários a planejar e gerenciar diversos aspectos de suas vidas, visando um futuro mais promissor e bem-sucedido. Com foco em finanças, carreira e investimentos, o LifePlan oferece recursos, orientações e informações que capacitam os usuários a tomar decisões informadas e alcançar seus objetivos pessoais e profissionais.',
      },
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
