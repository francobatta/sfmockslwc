({
  setMonthlySales: function (cmp, monthN) {
    const date = new Date(cmp.get("v.simulDate"))
    const queryYear = date.getFullYear()

    const getSalesFromPeriodAction = cmp.get("c.getSalesForMonthForAnAccount");
    // account id is hardcoded for now (accountId param)
    getSalesFromPeriodAction.setParams({
      month: monthN,
      year: queryYear,
      accountId: "0014W000021loSGQAY"
    });
    getSalesFromPeriodAction.setCallback(this, function (res) {
      let state = res.getState();
      if (state === "SUCCESS") {
        cmp.set("v.detailData", res.getReturnValue());
        //this.setTotalSalesInView(cmp);
      }
    });
    $A.enqueueAction(getSalesFromPeriodAction);
  },
  setAnnualSales: function (cmp) {
    const date = new Date(cmp.get("v.simulDate"))
    const simulationYear = date.getFullYear()
    const getSalesFromPeriodAction = cmp.get("c.getAnnualSalesSummary");
    // account id is hardcoded for now (accountId param)
    getSalesFromPeriodAction.setParams({
      year: simulationYear,
      accountId: "0014W000021loSGQAY"
    });
    getSalesFromPeriodAction.setCallback(this, function (res) {
      let state = res.getState();
      if (state === "SUCCESS") {
        cmp.set("v.summaryData", res.getReturnValue());
      }
    });
    $A.enqueueAction(getSalesFromPeriodAction);
  },
  monthStringToNumber : function(monthStr) {
    const monthMap = {
        Enero: 1,
        Febrero: 2,
        Marzo: 3,
        Abril: 4,
        Mayo: 5,
        Junio: 6,
        Julio: 7,
        Agosto: 8,
        Septiembre: 9,
        Octubre: 10,
        Noviembre: 11,
        Diciembre: 12
    }
    return monthMap[monthStr]
  }
});
