package lifeplan.lifeplan.domain.currencyQuotation;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "currency-quotation")
public class CurrencyQuotation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "code", length = 10)
    private String code;

    @Column(name = "code_in", length = 10)
    private String codeIn;

    @Column(name = "name", length = 255)
    private String name;

    @Column(name = "high")
    private BigDecimal high;

    @Column(name = "low")
    private BigDecimal low;

    @Column(name = "var_bid")
    private BigDecimal varBid;

    @Column(name = "pct_change")
    private BigDecimal pctChange;

    @Column(name = "bid")
    private BigDecimal bid;

    @Column(name = "ask")
    private BigDecimal ask;

    @Column(name = "timestamp")
    private Long timestamp;

    @Column(name = "create_date")
    private LocalDateTime createDate;

    @JsonIgnore
    @Column(name = "user_id")
    private UUID userId;
}
