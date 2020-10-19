({
  setUser: function (cmp) {
    const getUserAction = cmp.get("c.getUserName");
    getUserAction.setCallback(this, function (res) {
      let state = res.getState();
      if (state === "SUCCESS") {
        cmp.set("v.username", res.getReturnValue());
      }
    });
    $A.enqueueAction(getUserAction);
  },

  setActualSalesForMonth: function (cmp) {
    const date = new Date(cmp.get("v.simulDate"))
    const simulationMonth = date.getUTCMonth() + 1
    const simulationYear = date.getFullYear()
    const getSalesFromPeriodAction = cmp.get("c.getSalesForMonthForAnAccount");
    // account id is hardcoded for now (accountId param)
    getSalesFromPeriodAction.setParams({ year: simulationYear, month: simulationMonth, accountId: '0014W000021loSGQAY' });
    getSalesFromPeriodAction.setCallback(this, function (res) {
      let state = res.getState();
      if (state === "SUCCESS") {
        cmp.set("v.salesData", res.getReturnValue().map(sale => Object.assign(sale, { isReal: true })));
        this.setTotalSalesInView(cmp)
      }
    });
    $A.enqueueAction(getSalesFromPeriodAction);
  },

  setTotalSalesInView: function (cmp) {
    let sales = cmp.get("v.salesData");
    let total = sales.reduce((total, sale) => total + +sale.Base_de_comision__c, 0);
    cmp.set("v.totalSales", total);
  }
});
