public class AccountCasesController {
    // state
    public List<AccountWrapper> accountsWithNumberOfCases {get; private set;}
    // constructor
    public AccountCasesController() {
        if(accountsWithNumberOfCases == null)
            accountsWithNumberOfCases = new List<AccountWrapper>();
        List<AggregateResult> casesAndAccounts = [SELECT AccountId accId, Account.Name accName, COUNT(Id) amountOfCases
                                                 FROM Case
                                                 GROUP BY AccountId, Account.Name
                                                ];
        for (AggregateResult ar : casesAndAccounts)
            accountsWithNumberOfCases.add(
                new AccountWrapper(
                    (Id) ar.get('accId'),
                    (String) ar.get('accName'),
                    (Integer) (ar.get('amountOfCases') != null ? ar.get('amountOfCases') : 0)
                    )
            );
        }
        public String getresultJson() {
            return JSON.serialize(accountsWithNumberOfCases);
        }

    // inner wrapper class
    public class AccountWrapper {
        // wrapper state
        public Account acc {get; private set;}
        public Integer amountOfCases {get; private set;}
        // wrapper constructor
        public AccountWrapper(Id accId, String name, Integer nCases) {
            acc = new Account(Id = accId, Name = name);
            amountOfCases = nCases;
        }
    }
}