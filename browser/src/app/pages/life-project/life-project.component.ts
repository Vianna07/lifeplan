import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { ModuleIteratorComponent } from '../../components/module-iterator/module-iterator.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { Module } from '../../models/module.interface';
import { ActivatedRoute } from '@angular/router';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-life-project',
  standalone: true,
  imports: [
    NavBarComponent,
    ModuleIteratorComponent,
    FormComponent
  ],
  templateUrl: './life-project.component.html',
  styleUrl: './life-project.component.scss'
})
export class LifeProjectComponent implements OnInit, AfterViewInit {
  private activesRoutes: ActivatedRoute = inject(ActivatedRoute)
  public module_1!: Module[]
  public module_2!: Module[]

  constructor() {}

  ngOnInit(): void {
    this.module_1 = [
      {
        id: "guide",
        title: "Guia Prático para Construção de um Projeto de Vida",
        description: ["Nosso trabalho será dividido em três passos, onde buscaremos escrever o máximo de elementos possíveis que servirão de base para nossas ações presentes e futuras, de modo que consigamos efetivamente realizar nossos sonhos e desejos."]
      },
      {
        id: 'self-knowledge',
        title: "Autoconhecimento",
        description: ["Conhecer a si mesmo é o primeiro passo para iniciarmos a construção do Projeto de Vida. Identificar nossos valores, analisar nossas atitudes e ações, identificar nossos pontos fortes e pontos fracos, o que nos agrada e o que não nos agrada em nosso comportamento, dentre outras coisas, é de grande importância para que consigamos traçar nossos planos e metas para o presente e para o futuro. Nas atividades a seguir, você fará um ‘mergulho’ em seu interior e compreenderá melhor certos aspectos de seu comportamento, e isso o ajudará a tomar decisões mais conscientes, de acordo com seus valores, com aquilo que você é hoje e com o que você deseja ser!"],
        topics: [
          {
            title: "Pontos Fortes e Pontos Fracos",
            description: ["Conhecer nossos pontos fortes e nossos pontos fracos nos permite saber em que aspectos precisamos melhorar e mudar e também saber que temos características positivas importantes em nosso comportamento. Devemos estar sempre buscando nos conhecer melhor e avaliar sempre nossas atitudes e comportamentos."]
          },
          {
            title: "Valores",
            description: ["Valores são crenças e convicções suas sobre o que é mais importante para você. São uma espécie de princípio, ou seja, condutas e atitudes que você não negocia por nada, e normalmente define o que você acha certo ou errado, bom ou mau. Exemplos de valores: honestidade, generosidade, justiça, amor, paz, respeito, etc. Cite abaixo quais os seus valores. Lembre-se que eles são inegociáveis e devem fazer parte de cada conduta sua."]
          }
        ]
      },
    ]

    this.module_2 = [
      {
        id: "my-future",
        title: "O que eu quero para o meu futuro?",
        description: ["Desde criança, temos vários sonhos e planos para nosso futuro. Muitas vezes, também temos dúvidas e questionamentos como: 'Qual a carreira que quero seguir?', 'O que eu quero ser?', 'Onde quero chegar?', 'Como irei concretizar meus sonhos?', dentre outras perguntas que surgem inevitavelmente em nossa vida. Agora é hora de pensar de maneira mais concreta nestas questões e definir quais são, HOJE, meus sonhos e desejos para o futuro e como eu devo me planejar para alcançar meus ideais. Ter um objetivo de vida, saber onde queremos chegar, é o que nos motiva a lutar e superar as dificuldades e desafios que surgirão em nosso caminho. Nossos objetivos e nossos sonhos serão os alvos a serem atingidos por nós!"],
        topics: [
          {
            title: "Você e sua escolha profissional",
            description: ["Escolher a profissão que queremos seguir é quase uma missão impossível. São tantas possibilidades que ficamos certas vezes confusos e sem saber o que fazer. Ficamos ansiosos, com medo de fazer a escolha errada, às vezes seguimos as orientações das pessoas e não o nosso real desejo... São tantas variáveis envolvidas neste processo que é tão dinâmico e tão decisivo em nossa vida! Decidir a carreira que iremos seguir não é fácil, mas isso será necessário, mais cedo ou mais tarde! Assim, para tomarmos uma decisão acertada, satisfatória, é preciso que nós nos conheçamos bem, e foi o que fizemos na parte 1 deste roteiro. Após isso, obter informações que nos auxiliem nesta escolha será fundamental e embasará de maneira mais concreta esse processo."],
            subTopics: [
              {
                title: "SUA ESCOLHA PROFISSIONAL NÃO É DEFINITIVA",
                description: ["A escolha profissional não é definitiva! Mas muitos jovens não conseguem compreender isso. Nossos sonhos, vontades, desejos, podem sim mudar com o tempo, pois vamos crescendo, vivendo novas experiências que nos dão cada vez mais maturidade para perceber em quê somos realmente bons, o que gostamos de fazer, o que fazemos de melhor, qual a ocupação que nos fará feliz. Enfim, ao longo da juventude, que por si só já é uma fase de muitas descobertas e mudanças de percepções, é possível fazer mudanças nas escolhas feitas para a carreira profissional, e há tempo para se construir uma nova caminhada."]
              },
              {
                title: "NÃO TENHA MEDO DE ERRAR NA ESCOLHA",
                description: ["Uma escolha, quando bem definida e analisada, é uma escolha certa naquele momento. E se você mudar sua opinião sobre ela mais na frente, isso não quer dizer que a escolha foi errada. Pode ser o resultado de mudanças e transformações em sua vida."]
              },
              {
                title: "NÃO TENHA MEDO DO DESEMPREGO",
                description: ["Muitas vezes, deixamos de escolher certa profissão porque pensamos que há poucas vagas no mercado de trabalho para esta área, ou que os salários pagos são baixos. Isso não deve determinar nossa escolha. Se formos um profissional competente e preparado, certamente teremos muitas oportunidades no mercado de trabalho, inclusive para ganhar bons salários."]
              },
              {
                title: "NÃO TENHA MEDO DE NÃO SER CAPAZ",
                description: ["Às vezes, deixamos de escolher certa profissão que gostamos porque nos achamos incapazes de sermos bons naquilo que iremos fazer. Temos que confiar em nossa competência, investir em nossa formação e aprimoramento, e assim nos prepararemos para ser os melhores profissionais naquilo que escolhemos fazer. Portanto, confie em você, no seu potencial!"]
              },
              {
                title: "A ESCOLHA É SUA",
                description: ["É importante você buscar informações e orientações com as pessoas à sua volta, mas lembre-se que a escolha final deve ser sua, apenas sua!"]
              }
            ]
          },
          {
            title: "DICAS",
            steps: {
              listStyle: 'ol',
              list: [
                "A escolha profissional deve compor seu Projeto de Vida, e deverá estar alinhada aos seus objetivos de vida, objetivos acadêmicos, etc. Não esqueça de avaliar todo o contexto do seu projeto de vida para entender como sua escolha profissional influenciará as outras áreas de sua vida.",
                "Pesquise sobre a profissão que deseja seguir: reúna informações acerca da profissão desejada (o que faz, como é a rotina deste profissional, quais as habilidades e competências necessárias, salários, mercado de trabalho, universidades que oferecem o curso). Avalie se você está disposto a vivenciar o que esta profissão tem a lhe trazer.",
                "Busque conversar com alguém que atue na área que você escolheu para seguir carreira, tire dúvidas acerca da profissão, como é o dia-a-dia, as responsabilidades, etc.",
                "Não escolha uma profissão apenas porque ela te trará muito dinheiro, fama, sucesso. Além disso, você também precisa gostar do que vai fazer, se sentir bem fazendo. Não adianta ganhar muito dinheiro e ser infeliz com o que faz. É perfeitamente possível descobrir algo que te faça ser uma pessoa realizada, feliz, satisfeita, e que te dê um retorno financeiro que lhe permita viver bem.",
                "Escolheu a profissão errada? Não tenha medo de repensar o que quer seguirl Não há problema em mudar de profissão. Pense e reflita o por quê desistiu daquela profissão, e se estiver convicto de que quer seguir outra profissão, avalie e perceba aquilo que você faz de melhor, quais suas maiores habilidades e competências, o que o deixa feliz, e daí descubra a profissão que se encaixa no seu perfil. Não escolha um curso apenas pela facilidade do vestibular. Ao fazer vestibular, por exemplo, faça o curso que você realmente deseja, mesmo que a concorrência seja alta. Acredite no seu potencial.",
                "Responda as seguintes perguntas: O que farei no dia-a-dia ;Com o que irei trabalhar?, Com quem vou trabalhar?, Onde irei trabalhar?, O que irei estudar?, Como é o estilo de vida das pessoas que seguem a profissão que eu escolhi? Qual o significado do que eu farei? Serei feliz fazendo isso?, Terei tempo de estar com minha família? Tenho as habilidades e competências necessárias para seguir esta profissão (ou posso aprendê-las)? As respostas destas perguntas te ajudarão a entender como poderá ser sua vida quando optar pelo profissão desejada, ou até te fazer pensar em outra profissão mais adequada ao seu perfil.",
                "Tire dúvidas com seus pais, familiares, Educadores, amigos, acerca de sua decisão. A escolha é sua, mas é importante ouvir a opinião das pessoas que te cercam. Elas conhecem suas características, suas habilidades, seu jeito, e poderão te auxiliar no processo de escolha profissional",
              ]
            }
          }
        ]
      },
      {
        id: "planning",
        title: "PLANEJAMENTO",
        description: [
          "Para realizarmos nossos sonhos, precisamos tomar algumas decisões que nos ajudarão a trilhar o caminho correto rumo aos nossos ideais de vida. Não basta apenas termos sonhos e objetivos. Temos que PLANEJAR cada passo que precisamos dar para concretizar nossos objetivos. Estabelecer metas, prazos e ações concretas nos ajudará a saber cada etapa que precisaremos cumprir em nossa jornada rumo ao futuro brilhante que desejamos para nós, para nossa família, para nossa sociedade.",
          "O planejamento nos permite escrever nossas metas, nossas ações para alcançarmos nossos objetivos. Através do planejamento, podemos traçar todo o caminho necessário para alcançarmos nossos ideais.",
        ],
        topics: [
          {
            description: ["Entendendo alguns conceitos"],
            subTopics: [
              {
                title: "SONHO",
                description: ["Sonho é algo que você deseja, algo que você quer alcançar na vida. O sonho é algo que lhe motiva a trabalhar, estudar, planejar para alcançá-lo."]
              },
              {
                title: "META",
                description: ["Meta é o resultado a ser alcançado num determinado prazo. E você terá que AGIR para alcançar suas metas e realizar seu SONHO."]
              }
            ]
          },
          {
            title: "Dez dicas para melhorar nos estudos",
            steps: {
              listStyle: "ol",
              list: [
                "Participe da aula, preste atenção, tome nota e não tenha vergonha de fazer perguntas.",
                "Monte um plano de estudo, prevendo o que vai estudar ao longo da semana.",
                "Faça as lições de casa no dia e deixe um tempo para revisar o que aprendeu na aula.",
                "Estude no horário em que está mais atento e disposto. Não deixe para as horas em que tem sono ou está cansado.",
                "Descubra qual técnica de memorização funciona para você: falar em voz alta, fazer resumos, montar esquemas, exercícios, dramatização ou estudar em grupo.",
                "Procure outras referências sobre o assunto que está aprendendo para ampliar seus conhecimentos, como livros, revistas e filmes.",
                "Aproxime-se de um professor, pesquisador ou profissional que domine o assunto de seu interesse.",
                "Tenha o hábito de refazer os exercícios que errou nas provas e entenda por que errou.",
                "Prepare na véspera a mochila da escola. Verifique os cadernos e livros de que vai precisar e se todas as lições estão feitas.",
                "Reconheça seus pontos fortes e fracos, as áreas em que tem mais habilidade."
              ],
            }
          }
        ],
      }
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

