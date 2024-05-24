package lifeplan.lifeplan.repositories;

import lifeplan.lifeplan.domain.currencyQuotation.CurrencyQuotation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CurrencyQuotationRepository extends JpaRepository<CurrencyQuotation, Long> {
}
