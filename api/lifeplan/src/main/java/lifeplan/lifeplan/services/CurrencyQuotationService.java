package lifeplan.lifeplan.services;

import lifeplan.lifeplan.domain.currencyQuotation.CurrencyQuotation;
import lifeplan.lifeplan.repositories.CurrencyQuotationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CurrencyQuotationService {
    @Autowired
    private CurrencyQuotationRepository currencyQuotationRepository;

    public CurrencyQuotation getCurrencyQuotationById(Long id) {
        return currencyQuotationRepository.findById(id).orElseThrow(() -> new RuntimeException("Currency quotation not found"));
    }

    public CurrencyQuotation getExample() {
        return this.getCurrencyQuotationById(1L);
    }
}
