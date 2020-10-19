public with sharing class SimuladorFullController {

    @AuraEnabled
    public static String getUserName() {
        return userinfo.getName();
    }

    @AuraEnabled
    public static List<Comision__c> getSalesForMonthForAnAccount(Integer year, Integer month, Id accountId) {
        List<Comision__c> salesInMonth =
        [
        SELECT Id, Nro_Factura__c, Nro_Recibo__c, Producto__c, Porcentaje_comision__c, Base_de_comision__c, Medio_de_pago__c, Monto_comision__c
        FROM Comision__c
        WHERE
            Cuenta__r.Id = :accountId
        AND
            ((CALENDAR_YEAR(Inicio_de_periodo__c) = :year AND CALENDAR_MONTH(Inicio_de_periodo__c) = :month)
            OR
            (CALENDAR_YEAR(Fin_de_periodo__c) = :year AND CALENDAR_MONTH(Fin_de_periodo__c) = :month))
        ];
        return salesInMonth;
    }

    public static Map<Integer, String> monthIntegerToString = new Map<Integer,String>{1 => 'Enero', 2 => 'Febrero', 3 => 'Marzo', 4 => 'Abril', 5 => 'Mayo', 6 => 'Junio', 7 => 'Julio', 8 => 'Agosto', 9 => 'Septiembre', 10 => 'Octubre', 11 => 'Noviembre', 12 => 'Diciembre'};

    @AuraEnabled
    public static List<AnnualSalesSummary> getAnnualSalesSummary(Integer year, Id accountId) {
        List<AnnualSalesSummary> groups = new List<AnnualSalesSummary>();
        List<AggregateResult> salesGroupedByMonth =
        [
        SELECT CALENDAR_MONTH(Inicio_de_periodo__c) month, SUM(Monto_comision__c) sum
        FROM Comision__c
        WHERE
            Cuenta__r.Id = :accountId
        AND
            ((CALENDAR_YEAR(Inicio_de_periodo__c) = :year)
            OR
            (CALENDAR_YEAR(Fin_de_periodo__c) = :year))
        GROUP BY
            CALENDAR_MONTH(Inicio_de_periodo__c)
        ];
        for(AggregateResult monthGroup : salesGroupedByMonth) {
            String typeComision = 'unTipo'; // esto tambien vendria en el query, lo hardcodeo por ahora
            groups.add(new AnnualSalesSummary(
                monthIntegerToString.get(
                    (Integer) monthGroup.get('month')),
                    typeComision,
                    (Decimal) monthGroup.get('sum')));
        }
        System.debug(groups);
        return groups;
    }

    class AnnualSalesSummary {
        @AuraEnabled
        public String month {get; set;}
        @AuraEnabled
        public String type {get; set;}
        @AuraEnabled
        public Decimal sum {get; set;}
        public AnnualSalesSummary(String month, String type, Decimal sum){
            this.month = month;
            this.type = type;
            this.sum = sum;
        }
    }
}