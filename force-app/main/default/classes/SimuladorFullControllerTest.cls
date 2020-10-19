@isTest public class SimuladorFullControllerTest {
    @IsTest static void methodName(){  
        Test.startTest();

        Test.stopTest();
        System.assert(!SimuladorFullController.getUserName().isWhitespace());
        System.assert(!SimuladorFullController.getVentasFromLast30DaysForCurrentUser().isWhitespace());
    }
}
