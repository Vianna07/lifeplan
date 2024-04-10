import { Component, OnInit } from '@angular/core';
import { CurrencyQuotationService } from './currency-quotation.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyQuotation } from './currency-quotation.interface';
import { transformToArray, transformToObjectArray } from '../../utils/object.utils';
import { NgFor, NgIf } from '@angular/common';
import { Module } from '../../models/module.interface';
import { ModuleIteratorComponent } from '../module-iterator/module-iterator.component';
import { LpSelectComponent } from '../lp-select/lp-select.component';
import { Option } from '../../models/option.interface';
import { CurrencyCode } from './currency-code.enum';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CurrencyDataSource } from './currency-data-source.interface';


@Component({
  selector: 'app-currency-quotation',
  standalone: true,
  imports: [
    HttpClientModule,
    NgIf,
    NgFor,
    ModuleIteratorComponent,
    LpSelectComponent,
    MatTableModule,
  ],
  templateUrl: './currency-quotation.component.html',
  styleUrl: './currency-quotation.component.scss',
  providers: [CurrencyQuotationService]
})
export class CurrencyQuotationComponent implements OnInit{
  public currencyQuotation: CurrencyQuotation | undefined | null = null;
  public modules!: Module[]
  public displayedColumns: string[] = ['property', 'value'];
  public dataSource!: MatTableDataSource<CurrencyDataSource>;
  public currencies!: Option[]
  public firstCurrency!: string
  public secondCurrency!: string


  constructor(
    private currencyQuotationService: CurrencyQuotationService,
  ) {}

  ngOnInit(): void {
      this.modules = [
        {
          id: "earning_from_currency_exchange",
          title: "Aproveitando as Flutuações Cambiais: Como Ganhar Dinheiro com a Cotação de Moedas",
          topics: [
            {
              title: "Compra e Venda de Moedas:",
              description: "A maneira mais direta de lucrar com a cotação das moedas é comprar uma moeda quando seu valor está baixo e vendê-la quando seu valor aumenta. Por exemplo, se um investidor prevê que o dólar americano vai se fortalecer em relação ao euro, ele pode comprar dólares americanos enquanto o preço está baixo e vendê-los mais tarde quando o preço aumentar, obtendo assim um lucro."
            },
            {
              title: "Negociação de Pares de Moedas:",
              description: "No mercado Forex, as moedas são sempre negociadas em pares. Os investidores podem lucrar com a diferença nas taxas de câmbio entre dois pares de moedas. Por exemplo, se um investidor acredita que o dólar americano vai se valorizar em relação ao iene japonês, ele pode abrir uma posição de compra no par de moedas USD/JPY. Se o dólar americano se fortalecer como previsto, o investidor pode fechar a posição vendendo o par de moedas a um preço mais alto do que comprou, realizando assim um lucro."
            },
            {
              title: "Alavancagem:",
              description: "Uma característica única do mercado Forex é a capacidade de usar alavancagem. Isso permite que os investidores controlem uma grande quantidade de capital com uma quantia relativamente pequena de dinheiro. Embora a alavancagem possa aumentar os lucros potenciais, também aumenta o risco de perdas, portanto, deve ser usada com cautela."
            },
            {
              title: "Análise Fundamental e Técnica:",
              description: "Os investidores podem usar análise fundamental, que envolve a avaliação de fatores econômicos, políticos e sociais que podem afetar as taxas de câmbio, e análise técnica, que envolve o estudo de padrões de gráficos e indicadores técnicos, para tomar decisões de negociação informadas."
            },
            {
              title: "Diversificação:",
              description: "Assim como em qualquer forma de investimento, a diversificação é importante no mercado Forex. Os investidores podem mitigar o risco distribuindo seus investimentos entre diferentes pares de moedas e estratégias de negociação."
            }
          ]
        },
        {
          id: "currency_quotations",
          title: "Cotação de Moedas:",
          topics: [
            {
              title: "Nome:",
              description: "O nome da moeda indica as duas moedas envolvidas na conversão e a direção da conversão. Por exemplo, 'Dólar Americano/Real Brasileiro' significa que a cotação está relacionada à conversão entre dólar americano e real brasileiro. A primeira moeda listada (nesse caso, o dólar americano) é a moeda base, enquanto a segunda moeda (real brasileiro) é a moeda de cotação. Isso significa que o preço indicado é quantos reais brasileiros são necessários para comprar um dólar americano."
            },
            {
              title: "Código:",
              description: "Cada moeda tem um código atribuído de acordo com os padrões internacionais ISO 4217. Por exemplo, 'USD' é o código para dólar americano. Esses códigos são amplamente reconhecidos e padronizados internacionalmente para identificar moedas."
            },
            {
              title: "Alta:",
              description: "Refere-se ao preço mais alto que a moeda atingiu durante um determinado período de tempo. Esse período de tempo pode variar dependendo do contexto da cotação, como o dia, a semana ou o mês."
            },
            {
              title: "Baixa:",
              description: "Indica o preço mais baixo que a moeda atingiu durante o mesmo período de tempo considerado para a alta. Assim como a alta, o período de tempo para a baixa pode variar dependendo do contexto da cotação."
            },
            {
              title: "Variação:",
              description: "A variação é a diferença entre o preço de oferta atual (ou preço de compra) e o preço anterior. É uma medida da mudança no preço da moeda em relação ao período anterior."
            },
            {
              title: "Porcentagem de Mudança:",
              description: "A porcentagem de mudança é a variação expressa como uma porcentagem em relação ao preço anterior. Por exemplo, se a variação for positiva, isso indica um aumento no preço da moeda, enquanto uma variação negativa indica uma queda no preço."
            },
            {
              title: "Oferta:",
              description: "Refere-se ao preço pelo qual os negociantes (como bancos, corretoras ou instituições financeiras) estão dispostos a comprar a moeda. É o preço pelo qual os compradores podem vender a moeda."
            },
            {
              title: "Pergunte:",
              description: "É o preço pelo qual os negociantes estão dispostos a vender a moeda. Também é conhecido como preço de venda. É o preço pelo qual os compradores podem comprar a moeda."
            },
            {
              title: "Data de Criação:",
              description: "Indica a data e hora em que os dados de cotação foram criados ou atualizados pela última vez. Isso é importante para entender a atualidade das informações fornecidas. Quanto mais recente a data de criação, mais atualizada é a cotação. Isso permite aos usuários saberem se estão olhando para informações recentes ou se precisam buscar atualizações mais recentes."
            }
          ]
        },
      ]

      this.currencies = Object.keys(CurrencyCode).map(key => ({
        value: key,
        name: CurrencyCode[key as keyof typeof CurrencyCode]
      }))
  }

  public getCurrencyQuotation(currency: string, ignoreLocalStorage = false): any {
    const savedCurrencyQuote = ignoreLocalStorage ? null : JSON.parse(localStorage.getItem('currency-quotation') || '')
    this.dataSource = new MatTableDataSource<CurrencyDataSource>(this.__setDataSource(savedCurrencyQuote))

    if (savedCurrencyQuote) {
      this.currencyQuotation = savedCurrencyQuote
      console.log(savedCurrencyQuote);
    }
    else {
      this.currencyQuotationService.getCurrencyQuotation(currency).subscribe({
        next: (data: object) => {
          this.currencyQuotation = transformToObjectArray(data)[0]
          localStorage.setItem('currency-quotation', JSON.stringify(this.currencyQuotation))
          this.dataSource = new MatTableDataSource<CurrencyDataSource>(this.__setDataSource())
        },
        error: (error) => {
          this.currencyQuotation = undefined
        }
      })
    }
  }

  private __setDataSource(currencies: CurrencyQuotation | null = null): CurrencyDataSource[] {
    if (currencies) {
      return (Object.entries(currencies || {}).map(([key, value], index) => ({
        property: this.__translateProperties(key),
        value: value
      })))
    } else {
      return Object.entries(this.currencyQuotation || {}).map(([key, value], index) => ({
        property: this.__translateProperties(key),
        value: value,
      }));
    }
  }

  private __translateProperties(property: string) {
    const properties = {
      'code': 'Código',
      'codein': 'Código em',
      'name': 'Nome',
      'high': 'Alta',
      'low': 'Baixa',
      'varBid': 'Variação',
      'pctChange': 'Porcentagem de Mudança',
      'bid': 'Oferta',
      'ask': 'Pergunte',
      'timestamp': 'Data de Criação',
      'create_date': 'Data de Criação'
    }

    return properties[property] || property
  }

  public onChangeSelect(currency: any, currencyNumber: number) {
    if (currencyNumber === 1) {
      this.firstCurrency = currency.value
    } else { // currencyNumber === 2
      this.secondCurrency = currency.value
    }

    if (this.firstCurrency && this.secondCurrency) {
      this.getCurrencyQuotation(`${this.firstCurrency}-${this.secondCurrency}`, true)
    }
  }
}
