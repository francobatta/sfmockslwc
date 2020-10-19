({
  doInit : function (cmp, e, helper) {
    cmp.set('v.customSalesData', [])
    const maybeDate = cmp.get("v.simulDate");
    if(!maybeDate)
      cmp.set("v.simulDate", new Date())
    helper.setUser(cmp)
    helper.setActualSalesForMonth(cmp)
  },
  onProgressClickHandler: function (cmp, event) {
    cmp.set("v.currentProgressStep", event.getSource().get("v.value"));
  }
});
