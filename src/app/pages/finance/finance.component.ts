import { AfterViewInit, Component, HostListener, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from '../../models/module.interface';
import { ModuleIteratorComponent } from '../../components/module-iterator/module-iterator.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { addTag } from '../../utils/module.utils';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [
    NavBarComponent,
    ModuleIteratorComponent,
  ],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss',
})
export class FinanceComponent implements OnInit, AfterViewInit {
  private activesRoutes: ActivatedRoute = inject(ActivatedRoute)
  public modules!: Module[]

  constructor() {}

  ngOnInit() {
    this.modules = [
      {
        id: "introduction",
        title: "Introdução:",
        description: [
          "Finanças é a gestão inteligente dos recursos financeiros, desde decisões pessoais até estratégias empresariais. Abrangem orçamentação, investimentos, gestão de dívidas e mais, tanto em nível pessoal quanto corporativo.",
          "Nos mercados financeiros, compreender oferta, demanda e diversificação é essencial. Além disso, as finanças públicas garantem estabilidade econômica. Dominar os princípios financeiros é crucial para alcançar metas e garantir um futuro próspero."
        ]
      },
      {
        id: "fees",
        title: "Taxas:",
        topics: [
          {
            title: "Taxa Selic:",
            description: [
              "A Taxa Selic é a taxa básica de juros definida pelo Banco Central do Brasil, influenciando o rendimento de diversos investimentos, como Tesouro Selic e LCIs/LCAs. É utilizada como instrumento de política monetária para controlar a inflação e estimular a economia.",
              "Para mais Informações, segue o link para o site do " + addTag('a', ' Tesouro Direto', [{name: 'class', value: 'link-selic'}, { name: 'href', value: 'https://www.tesourodireto.com.br/'}])
            ]
          },
          {
            title: "IPCA:",
            description: [
              "O IPCA é o Índice Nacional de Preços ao Consumidor Amplo, utilizado como indicador oficial de inflação no Brasil. Investimentos como Tesouro IPCA e CDBs são indexados a este índice para proteção contra a desvalorização da moeda."
            ]
          },
          {
            title: "DI - Depósito Interfinanceiro:",
            description: [
              "DI é a taxa média de juros praticada entre instituições financeiras para empréstimos de curtíssimo prazo, geralmente de um dia. É uma referência para diversos investimentos de renda fixa, como CDBs e Letras de Câmbio (LCs). Para mais Informações, segue o link:",
              "Para mais Informações, segue o link para o site da " + addTag('a', ' mobills', [{name: 'class', value: 'link-di'}, { name: 'href', value: 'https://www.mobills.com.br/blog/bancos/como-funciona-deposito-bancario/'}])
            ]
          }
        ]
      },
      {
        id: "taxes",
        title: "Impostos:",
        topics: [
          {
            title: "IOF:",
            description: [
              "O Imposto sobre Operações Financeiras é um tributo federal aplicado sobre diversas transações financeiras, como operações de crédito, câmbio, seguros e títulos e valores mobiliários. Tem como objetivo regular o mercado e controlar o fluxo de capital."
            ]
          },
          {
            title: "IR - Imposto de Renda:",
            description: [
              "O Imposto de Renda é um tributo federal aplicado sobre a renda de pessoas físicas e jurídicas no Brasil. Incide sobre salários, lucros, rendimentos de investimentos, entre outros. Sua arrecadação é essencial para o financiamento de serviços públicos, como saúde, educação e segurança. Para mais informações sobre impostos, segue o link para o site do " + addTag('a', ' PagBank', [{name: 'class', value: 'link-ipca'}, { name: 'href', value: 'https://blog.pagseguro.uol.com.br/tabela-ir-e-iof-em-investimentos-tudo-que-voce-precisa-saber/'}])
            ]
          }
        ]
      },
      {
        id: "certificate-of-deposit",
        title: "CDB/CDI:",
        description: [
          "O Certificado de Depósito Bancário (CDB) é uma popular opção de investimento em renda fixa. Funciona como um empréstimo ao banco, com remuneração por meio de juros.",
          "Com baixo risco e garantido pelo FGC, oferece rentabilidade atrativa, podendo ter diferentes prazos e tipos de remuneração. É uma escolha acessível e diversificada para quem busca segurança e previsibilidade nos investimentos.",
          "Para mais Informações sobre o CDB/CDI, segue o link para o site do " + addTag('a', ' PagBank', [{name: 'class', value: 'link-ipca'}, { name: 'href', value: 'https://blog.pagseguro.uol.com.br/cdi-x-cdb-entenda-a-diferenca-entre-eles/'}])
        ],
        topics: [
          {
            title: "Rendimento do CDI:",
            description: [
              "O rendimento do CDI (Certificado de Depósito Interbancário) representa a taxa de juros que os bancos utilizam para emprestar dinheiro entre si. Essa taxa é determinada diariamente com base em fatores como oferta e demanda no mercado financeiro.",
              "O CDI serve como referência para diversos investimentos de renda fixa no Brasil, indicando seu potencial de retorno. Investimentos vinculados ao CDI, como CDBs e fundos de investimento, acompanham de perto essa taxa."
            ]
          },
          {
            title: "Como investir em CDB:",
            description: [
              "Para investir em um CDB, é necessário escolher uma instituição financeira confiável e abrir uma conta de investimento. Após isso, o investidor deve selecionar o tipo de CDB desejado (prefixado ou pós-fixado) e determinar o valor do investimento. A compra do CDB pode ser realizada diretamente com a instituição financeira, e o investidor deve monitorar regularmente o desempenho do investimento."
            ]
          }
        ],
        img: {
          src: "img/cdb.jpg",
          alt: "CDB",
          description: "Um homem entregando dinheiro para o banco, ilustrando o contexto de uma operação de CDB"
        }
      },
      {
        id: "lci",
        title: "LCI:",
        description: [
          "LCI, ou Letra de Crédito Imobiliário, é um título de renda fixa emitido por instituições financeiras para captar recursos destinados ao setor imobiliário. Oferece isenção de Imposto de Renda para pessoas físicas, segurança garantida pelo Fundo Garantidor de Créditos (FGC) e remuneração atrativa ao investidor.",
          "Para mais Informações sobre o LCI/LCA, segue o link para o site da " + addTag('a', ' infomoney', [{name: 'class', value: 'link-ipca'}, { name: 'href', value: 'https://www.infomoney.com.br/guias/lci-lca/'}])
        ],
        topics: [
          {
            title: "Rendimento:",
            description: [
              "O rendimento do LCI (Letra de Crédito Imobiliário) é determinado pela taxa de juros acordada no momento da compra do título, podendo ser pré ou pós-fixada. Esse rendimento também é influenciado pelo prazo de vencimento do título. Importante ressaltar que o LCI oferece isenção de Imposto de Renda para pessoas físicas, tornando seu rendimento líquido mais atrativo."
            ]
          },
          {
            title: "Como investir:",
            steps: {
              listStyle: "ol",
              list: [
                "Escolha uma instituição financeira.",
                "Abra uma conta de investimento.",
                "Escolha o tipo de LCI que deseja.",
                "Faça o investimento transferindo os fundos.",
                "Acompanhe o desempenho do investimento.",
                "No vencimento, resgate ou renove o investimento."
              ]
            }
          },
        ]
      },
      {
        id: "lca",
        title: "LCA:",
        description: [
          "LCA, ou Letra de Crédito do Agronegócio, é um título de renda fixa emitido por instituições financeiras com o objetivo de captar recursos para o setor do agronegócio. Assim como a LCI, a LCA oferece isenção de Imposto de Renda para pessoas físicas, segurança garantida pelo Fundo Garantidor de Créditos (FGC) e remuneração atrativa ao investidor."
        ],
        topics: [
          {
            title: "Rendimento:",
            description: [
              "O rendimento da LCA (Letra de Crédito do Agronegócio) é determinado pela taxa de juros acordada no momento da compra do título. Assim como a LCI, a LCA pode ter rentabilidade pré ou pós-fixada, e seu rendimento também é influenciado pelo prazo de vencimento do título. Além disso, a LCA oferece isenção de Imposto de Renda para pessoas físicas, o que a torna uma opção interessante para investidores."
            ]
          },
          {
            title: "Como investir:",
            steps: {
              listStyle: "ol",
              list:[
                "Escolha uma instituição financeira.",
                "Abra uma conta de investimento.",
                "Se informe sobre as opções de LCA disponíveis.",
                "Selecione o prazo e a rentabilidade desejada.",
                "Realize o investimento transferindo os fundos.",
                "Monitore o desempenho do investimento ao longo do tempo.",
                "No vencimento, decida entre resgatar ou reinvestir o valor."
              ]
            }
          },
        ]
      },
      {
        id: "treasury-direct",
        title: "Tesouro Direto:",
        description: [
          "O Tesouro Direto é um programa do governo brasileiro que permite que pessoas físicas comprem títulos públicos federais pela internet. Esses títulos são uma forma de investimento onde o investidor empresta dinheiro ao governo e recebe juros em troca. O programa oferece uma variedade de títulos com diferentes prazos e formas de remuneração, com baixo custo e liquidez diária. É uma opção segura e acessível para diversificar a carteira de investimentos e planejar o futuro financeiro.",
          "Para mais Informações, segue o link para o site do " + addTag('a', ' Tesouro Direto', [{name: 'class', value: 'link-selic'}, { name: 'href', value: 'https://www.tesourodireto.com.br/'}])
        ],
        topics: [
          {
            title: "Tipos de Tesouro:",
            description: [
              "Existem três tipos de Tesouro, são eles:"]
              ,
            subTopics: [
              {
                title: "Tesouro SELIC:",
                description: [
                  "O Tesouro Selic é um título público federal oferecido pelo Tesouro Nacional através do programa Tesouro Direto. É conhecido por sua remuneração atrelada à taxa Selic, o que o torna uma opção conservadora e com boa liquidez. Investidores podem resgatar seu dinheiro a qualquer momento. É uma escolha popular para formação de reserva de emergência e diversificação de investimentos."
                ]
              },
              {
                title: "Tesouro PREFIXADO:",
                description: [
                  "O Tesouro Prefixado é um tipo de título público oferecido pelo Tesouro Nacional via Tesouro Direto. Sua principal característica é a taxa de juros fixa, determinada no momento da compra, independente das variações do mercado. Com baixo risco e prazo de vencimento definido, é uma opção para investidores que buscam previsibilidade e segurança nos retornos."
                ]
              },
              {
                title: "Tesouro IPCA:",
                description: [
                  "O Tesouro IPCA é um tipo de título público oferecido pelo Tesouro Nacional através do Tesouro Direto. Sua característica principal é a remuneração composta por uma taxa de juros prefixada mais a variação do IPCA, índice oficial de inflação. Isso proporciona proteção contra a inflação e oferece um retorno real ao investidor. Com baixo risco e prazo de vencimento definido, é uma opção para quem busca segurança e preservação do poder de compra ao longo do tempo."
                ]
              }
            ]
          },
          {
            title: "Como investir:",
            steps: {
              listStyle: "ol",
              list:[
                "Cadastre-se em uma corretora ou banco habilitado.",
                "Escolha o título que melhor se adapta aos seus objetivos.",
                "Defina o valor que deseja investir e realize a compra do título.",
                "Acompanhe o desempenho do seu investimento.",
                "No vencimento, resgate o valor investido com os juros acumulados.",
                "O Tesouro Direto é um investimento de baixo risco."
              ]
            }
          },
        ],
        video: {
          src: "video/treasury-direct.mp4",
          poster: {
            src: "img/treasury-direct.poster.jpg",
            alt: "poster"
          },
        }
      },
      {
        id: "real-estate-investment-funds",
        title: "Fundos Imobiliários:",
        description: [
          "Um Fundo de Investimento Imobiliário (FII) é um tipo de investimento coletivo em que os recursos dos investidores são aplicados em diversos empreendimentos imobiliários, tais como shoppings, edifícios comerciais, hospitais, entre outros. Os FIIs são negociados na Bolsa de Valores e oferecem aos investidores a possibilidade de se tornarem proprietários de parte desses empreendimentos, recebendo rendimentos proporcionais aos aluguéis e ganhos de capital.",
          "Para mais Informações, segue o link para o site da " + addTag('a', ' XP investimentos', [{name: 'class', value: 'link-selic'}, { name: 'href', value: 'https://conteudos.xpi.com.br/aprenda-a-investir/relatorios/fundos-imobiliarios/'}])
        ],
        topics: [
          {
            title: "Rendimento:",
            description: [
              "O rendimento de um FII é composto principalmente pelos aluguéis recebidos dos imóveis que compõem sua carteira, que são distribuídos periodicamente aos cotistas na forma de proventos. Além disso, os cotistas podem se beneficiar da valorização das cotas negociadas na Bolsa de Valores, que reflete a valorização dos imóveis e as expectativas do mercado em relação ao fundo. É importante ressaltar que os rendimentos dos FIIs são isentos de imposto de renda para pessoa física quando o fundo possui no mínimo 50 cotistas e é negociado em bolsa."
            ]
          },
          {
            title: "Como investir:",
            steps: {
              listStyle: "ol",
              list:[
                "Abra uma conta em uma corretora de valores.",
                "Pesquise e analise os diferentes FIIs disponíveis no mercado.",
                "Analise os relatórios e prospectos de cada FII para entender sua estratégia de investimento, histórico de rendimentos e perspectivas futuras.",
                "Decida qual FII se adequa melhor aos seus objetivos e perfil de investidor.",
                "Realize a compra das cotas do FII desejado através da corretora, seguindo os procedimentos estabelecidos por ela.",
                "Monitore periodicamente o desempenho do seu investimento e faça ajustes na sua carteira conforme necessário."
              ]
            }
          },
        ]
      },
      {
        id: "stock-market",
        title: "Mercado de Ações:",
        description: [
          "O mercado de ações é onde são negociadas partes de propriedade de empresas, chamadas de ações. Os investidores compram e vendem essas ações em bolsas de valores, como a NYSE e a NASDAQ. Apesar da volatilidade, o mercado de ações tem sido historicamente uma das melhores opções de investimento de longo prazo, proporcionando retornos significativos.",
          "Para mais Informações, segue o link para o site da " + addTag('a', ' TopInvest', [{name: 'class', value: 'link-selic'}, { name: 'href', value: 'https://www.topinvest.com.br/mercado-de-acoes/'}])
        ],
        topics: [
          {
            title: "Riscos:",
            description: [
              "O mercado de ações apresenta diversos riscos, incluindo volatilidade dos preços das ações, riscos macroeconômicos, riscos de mercado, riscos setoriais, riscos de empresa específica, entre outros. É importante que os investidores compreendam esses riscos e estejam preparados para enfrentá-los, diversificando suas carteiras e investindo com base em objetivos de longo prazo."
            ]
          },
          {
            title: "Como investir:",
            steps: {
              listStyle: "ol",
              list:[
                "Abra uma conta em uma corretora de valores.",
                "Defina seus objetivos e tolerância ao risco.",
                "Estude sobre o mercado de ações e empresas.",
                "Analise e selecione ações para investir.",
                "Faça ordens de compra e venda pela corretora.",
                "Acompanhe o desempenho de seus investimentos regularmente.",
                "Reavalie e ajuste sua carteira conforme necessário."
              ]
            }
          },
        ]
      },
      {
        id: "cryptocurrencies",
        title: "Criptomoedas:",
        description: [
          "Criptomoedas são uma forma de dinheiro digital descentralizado, operando em uma tecnologia chamada blockchain. Elas garantem transações seguras por meio de criptografia e não são controladas por nenhum governo ou autoridade central. Caracterizadas por anonimato, segurança e uso variado, as criptomoedas são conhecidas por sua volatilidade e riscos associados ao investimento.",
          "Para mais Informações, segue o link para o site da" + addTag('a', ' BitDegree', [{name: 'class', value: 'link-selic'}, { name: 'href', value: 'https://br.bitdegree.org/crypto/aprender/o-que-e-uma-criptomoeda'}])
        ],
        topics: [
          {
            title: "Rendimento:",
            description: [
              "O rendimento das criptomoedas é altamente volátil e especulativo, influenciado por diversos fatores. Estes incluem oferta e demanda, adoção e popularidade, desenvolvimentos tecnológicos, regulação governamental e eventos do mercado financeiro. É importante entender os riscos antes de investir, pois os preços podem variar significativamente em curtos períodos de tempo."
            ]
          },
          {
            title: "Moedas mais cotadas no mercado:",
            subTopics: [
              {
                title: "Bitcoin:",
                description: [
                  "O Bitcoin é uma moeda digital descentralizada, criada em 2009 por Satoshi Nakamoto. Operando em uma rede peer-to-peer, ele não é controlado por nenhum governo ou instituição central. Com oferta limitada a 21 milhões de unidades, o Bitcoin é deflacionário e utiliza criptografia avançada para garantir segurança e anonimato nas transações. Sua volatilidade e riscos associados ao investimento são características marcantes."
                ]
              },
              {
                title: "Ethereum:",
                description: [
                  "O Ethereum é uma plataforma de computação distribuída e uma criptomoeda chamada Ether (ETH). Lançada em 2015, ela permite a criação e execução de contratos inteligentes e aplicativos descentralizados (DApps). Flexível e altamente utilizado, o Ethereum está em processo de transição para um sistema de consenso de Prova de Participação (PoS). O Ether é a criptomoeda nativa usada na rede para pagar taxas de transação e recompensar os mineradores."
                ]
              }
            ]
          },
          {
            title: "Como investir:",
            steps: {
              listStyle: "ol",
              list:[
                "Escolha uma plataforma de negociação confiável.",
                "Crie uma conta e deposite fundos.",
                "Escolha as criptomoedas desejadas para investir.",
                "Execute as negociações na plataforma.",
                "Armazene suas criptomoedas de forma segura.",
                "Acompanhe o mercado e faça ajustes conforme necessário."
              ]
            }
          }
        ]
      },
    ]
  }

  ngAfterViewInit(): void {
    this.activesRoutes.fragment.subscribe((data) => {
      if (data) {
        document.getElementById(data)?.scrollIntoView({behavior: 'smooth', block: 'start'})
      }
    })
  }
}
