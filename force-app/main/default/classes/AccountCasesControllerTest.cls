@isTest public class AccountCasesControllerTest {
    @IsTest static void insertTwoAccounts_accountsAndJsonAreProperlyReturned(){
        Account acc = Build.anAccount()
        .withName('acc1!')
        .build();

        Test.startTest();
        insert acc;
        Case Acase = Build.aCase().withAccountId(acc).build();
        insert Acase;
        AccountCasesController controller = new AccountCasesController();
        Test.stopTest();
        System.assertEquals(acc.Id, controller.accountsWithNumberOfCases[0].acc.Id);
        System.assertEquals(1, controller.accountsWithNumberOfCases[0].amountOfCases);
        System.assert(controller.getresultJson().contains(acc.Id));
    }
}