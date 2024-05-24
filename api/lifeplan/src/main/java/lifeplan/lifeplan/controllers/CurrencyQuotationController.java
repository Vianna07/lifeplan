package lifeplan.lifeplan.controllers;

import lifeplan.lifeplan.domain.currencyQuotation.CurrencyQuotation;
import lifeplan.lifeplan.services.CurrencyQuotationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/currency-quotation")
public class CurrencyQuotationController {

    @Autowired
    private CurrencyQuotationService currencyQuotationService;

    @GetMapping("/get-example")
    public ResponseEntity<CurrencyQuotation> getExample() {
        return ResponseEntity.ok(currencyQuotationService.getExample());

    }

}
