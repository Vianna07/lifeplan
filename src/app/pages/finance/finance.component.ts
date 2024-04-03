import { Component, OnInit, inject } from '@angular/core';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';
import { ActivatedRoute } from '@angular/router';
import { Module } from '../../models/module.interface';
import { addTag } from '../../functions/global.functions';


@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [
    NavMenuComponent
  ],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss'
})
export class FinanceComponent implements OnInit {
  private activesRoutes: ActivatedRoute = inject(ActivatedRoute)
  public modules!: Module[]

  constructor () {}

  ngOnInit() {
    this.activesRoutes.fragment.subscribe((data) => {
      if (data) {
        document.getElementById(data)?.scrollIntoView({behavior: 'smooth', block: 'start'})
      }
    })

    this.modules = [
      {
        id: "what-is-it",
        title: "O que é:",
        description: addTag("p", "Finanças são a gestão inteligente dos recursos financeiros, desde decisões pessoais até estratégias empresariais. Abrangem orçamentação, investimentos, gestão de dívidas e mais, tanto em nível pessoal quanto corporativo. Nos mercados financeiros, compreender oferta, demanda e diversificação é essencial. Além disso, as finanças públicas garantem estabilidade econômica. Dominar os princípios financeiros é crucial para alcançar metas e garantir um futuro próspero.")
      },
      {
        id: "fees",
        title: "Taxas:",
        topics: [
          {
            title: "Taxa Selic:",
            description: addTag("p", "A SELIC é a taxa básica de juros definida pelo governo, influenciando o rendimento de investimentos como Tesouro SELIC e LCIs/LCAs.")
          },
          {
            title: "IPCA:",
            description: addTag("p", "Índice oficial de inflação, usado como base de cálculo para investimentos como Tesouro IPCA e CDBs, protegendo contra desvalorização.")
          },
          {
            title: "DI - Depósito Interfinanceiro:",
            description: addTag("p", "Taxa média de juros praticada por instituições financeiras, próxima à SELIC, influenciando investimentos de renda fixa.")
          }
        ]
      },
      {
        id: "taxes",
        title: "Impostos:",
        topics: [
          {
            title: "IOF:",
            description: addTag("p", "Imposto federal aplicado em operações financeiras, regulando o mercado e controlando o fluxo de capital.")
          },
          {
            title: "IR:",
            description: addTag("p", "Tributo aplicado sobre a renda de pessoas físicas e jurídicas no Brasil, fundamental para o financiamento de serviços públicos.")
          }
        ]
      },
      {
        id: "certificate-of-deposit",
        title: "CDB/CDI",
        topics: [
          {
            title: "O que é:",
            description: addTag("p", "O Certificado de Depósito Bancário (CDB) é uma popular opção de investimento em renda fixa. Funciona como um empréstimo ao banco, com remuneração por meio de juros. Com baixo risco e garantido pelo FGC, oferece rentabilidade atrativa, podendo ter diferentes prazos e tipos de remuneração. É uma escolha acessível e diversificada para quem busca segurança e previsibilidade nos investimentos.")
          },
          {
            title: "Como investir:",
            steps: [
              addTag("li", "Pesquise e compare opções de CDB."),
              addTag("li", "Escolha uma instituição financeira confiável."),
              addTag("li", "Abra uma conta de investimento, se necessário."),
              addTag("li", "Escolha entre CDB prefixado ou pós-fixado."),
              addTag("li", "Determine o valor do investimento."),
              addTag("li", "Realize a compra do CDB."),
              addTag("li", "Monitore o investimento regularmente."),
              addTag("li", "No vencimento, resgate ou renove o CDB conforme necessário.")
            ]
          },
          {
            title: "Rendimento",
            description: addTag("p", "O rendimento do CDI (Certificado de Depósito Interbancário) representa a taxa de juros que os bancos utilizam para emprestar dinheiro entre si. Essa taxa é determinada diariamente com base em fatores como oferta e demanda no mercado financeiro. O CDI serve como referência para diversos investimentos de renda fixa no Brasil, indicando seu potencial de retorno. Investimentos vinculados ao CDI, como CDBs e fundos de investimento, acompanham de perto essa taxa.")
          }
        ]
      },
      {
        id: "teste",
        title: "Tesouro Direto",
        topics: [
          {
            title: "O que é:",
            description: addTag("p", "O Tesouro Direto é um programa do governo brasileiro que permite que pessoas físicas comprem títulos públicos federais pela internet. Esses títulos são uma forma de investimento onde o investidor empresta dinheiro ao governo e recebe juros em troca. O programa oferece uma variedade de títulos com diferentes prazos e formas de remuneração, com baixo custo e liquidez diária. É uma opção segura e acessível para diversificar a carteira de investimentos e planejar o futuro financeiro.")
          },
          {
            title: "Como investir:",
            steps: [
              addTag("li", "Cadastre-se em uma corretora ou banco habilitado."),
              addTag("li", "Escolha o título que melhor se adapta aos seus objetivos."),
              addTag("li", "Defina o valor que deseja investir e realize a compra do título."),
              addTag("li", "Acompanhe o desempenho do seu investimento."),
              addTag("li", "No vencimento, resgate o valor investido com os juros acumulados."),
              addTag("li", "O Tesouro Direto é um investimento de baixo risco.")
            ]
          },
          {
            title: "Tipos de Tesouro:",
            subTopics: [
              {
                title: "Tesouro_SELIC:",
                description: addTag("p", "O Tesouro Selic é um título público federal oferecido pelo Tesouro Nacional através do programa Tesouro Direto. É conhecido por sua remuneração atrelada à taxa Selic, o que o torna uma opção conservadora e com boa liquidez. Investidores podem resgatar seu dinheiro a qualquer momento. É uma escolha popular para formação de reserva de emergência e diversificação de investimentos.")
              },
              {
                title: "Tesouro_PREFIXADO:",
                description: addTag("p", "O Tesouro Prefixado é um tipo de título público oferecido pelo Tesouro Nacional via Tesouro Direto. Sua principal característica é a taxa de juros fixa, determinada no momento da compra, independente das variações do mercado. Com baixo risco e prazo de vencimento definido, é uma opção para investidores que buscam previsibilidade e segurança nos retornos.")
              },
              {
                title: "Tesouro_IPCA:",
                description: addTag("p", "O Tesouro IPCA é um tipo de título público oferecido pelo Tesouro Nacional através do Tesouro Direto. Sua característica principal é a remuneração composta por uma taxa de juros prefixada mais a variação do IPCA, índice oficial de inflação. Isso proporciona proteção contra a inflação e oferece um retorno real ao investidor. Com baixo risco e prazo de vencimento definido, é uma opção para quem busca segurança e preservação do poder de compra ao longo do tempo.")
              }
            ]
          }
        ]
      },
      {
        id: "teste",
        title: "Criptomoedas",
        topics: [
          {
            title: "O que é:",
            description: addTag("p", "Criptomoedas são uma forma de dinheiro digital descentralizado, operando em uma tecnologia chamada blockchain. Elas garantem transações seguras por meio de criptografia e não são controladas por nenhum governo ou autoridade central. Caracterizadas por anonimato, segurança e uso variado, as criptomoedas são conhecidas por sua volatilidade e riscos associados ao investimento.")
          },
          {
            title: "Rendimento:",
            description: addTag("p", "O rendimento das criptomoedas é altamente volátil e especulativo, influenciado por diversos fatores. Estes incluem oferta e demanda, adoção e popularidade, desenvolvimentos tecnológicos, regulação governamental e eventos do mercado financeiro. É importante entender os riscos antes de investir, pois os preços podem variar significativamente em curtos períodos de tempo.")
          },
          {
            title: "Moedas mais cotadas no mercado:",
            subTopics: [
              {
                title: "Bitcoin:",
                description: addTag("p", "O Bitcoin é uma moeda digital descentralizada, criada em 2009 por Satoshi Nakamoto. Operando em uma rede peer-to-peer, ele não é controlado por nenhum governo ou instituição central. Com oferta limitada a 21 milhões de unidades, o Bitcoin é deflacionário e utiliza criptografia avançada para garantir segurança e anonimato nas transações. Sua volatilidade e riscos associados ao investimento são características marcantes.")
              },
              {
                title: "Ethereum:",
                description: addTag("p", "O Ethereum é uma plataforma de computação distribuída e uma criptomoeda chamada Ether (ETH). Lançada em 2015, ela permite a criação e execução de contratos inteligentes e aplicativos descentralizados (DApps). Flexível e altamente utilizado, o Ethereum está em processo de transição para um sistema de consenso de Prova de Participação (PoS). O Ether é a criptomoeda nativa usada na rede para pagar taxas de transação e recompensar os mineradores.")
              }
            ]
          },
          {
            title: "Como investir:",
            steps: [
              addTag("li", "Escolha uma plataforma de negociação confiável."),
              addTag("li", "Crie uma conta e deposite fundos."),
              addTag("li", "Escolha as criptomoedas desejadas para investir."),
              addTag("li", "Execute as negociações na plataforma."),
              addTag("li", "Armazene suas criptomoedas de forma segura."),
              addTag("li", "Acompanhe o mercado e faça ajustes conforme necessário.")
            ]
          }
        ]
      },
      {
        id: "lci",
        title: "LCI",
        topics: [
          {
            title: "O que é:",
            description: addTag("p", "LCI, ou Letra de Crédito Imobiliário, é um título de renda fixa emitido por instituições financeiras para captar recursos destinados ao setor imobiliário. Oferece isenção de Imposto de Renda para pessoas físicas, segurança garantida pelo Fundo Garantidor de Créditos (FGC) e remuneração atrativa ao investidor.")
          },
          {
            title: "Como investir:",
            steps: [
              addTag("li", "Escolha uma instituição financeira."),
              addTag("li", "Abra uma conta de investimento."),
              addTag("li", "Escolha o tipo de LCI que deseja."),
              addTag("li", "Faça o investimento transferindo os fundos."),
              addTag("li", "Acompanhe o desempenho do investimento."),
              addTag("li", "No vencimento, resgate ou renove o investimento.")
            ]
          },
          {
            title: "Rendimento:",
            description: addTag("p", "O rendimento do LCI (Letra de Crédito Imobiliário) é determinado pela taxa de juros acordada no momento da compra do título, podendo ser pré ou pós-fixada. Esse rendimento também é influenciado pelo prazo de vencimento do título. Importante ressaltar que o LCI oferece isenção de Imposto de Renda para pessoas físicas, tornando seu rendimento líquido mais atrativo.")
          }
        ]
      },
      {
        id: "stock-market",
        title: "Mercado de Ações:",
        topics: [
          {
            title: "O que é:",
            description: addTag("p", "O mercado de ações é onde são negociadas partes de propriedade de empresas, chamadas de ações. Os investidores compram e vendem essas ações em bolsas de valores, como a NYSE e a NASDAQ. Apesar da volatilidade, o mercado de ações tem sido historicamente uma das melhores opções de investimento de longo prazo, proporcionando retornos significativos.")
          },
          {
            title: "Como investir:",
            steps: [
              addTag("li", "Abra uma conta em uma corretora de valores."),
              addTag("li", "Defina seus objetivos e tolerância ao risco."),
              addTag("li", "Estude sobre o mercado de ações e empresas."),
              addTag("li", "Analise e selecione ações para investir."),
              addTag("li", "Faça ordens de compra e venda pela corretora."),
              addTag("li", "Acompanhe o desempenho de seus investimentos regularmente."),
              addTag("li", "Reavalie e ajuste sua carteira conforme necessário.")
            ]
          },
          {
            title: "Riscos:",
            description: addTag("p", "O mercado de ações apresenta diversos riscos, incluindo volatilidade dos preços das ações, riscos macroeconômicos, riscos de mercado, riscos setoriais, riscos de empresa específica, entre outros. É importante que os investidores compreendam esses riscos e estejam preparados para enfrentá-los, diversificando suas carteiras e investindo com base em objetivos de longo prazo.")
          }
        ]
      }
    ]
  }
}
