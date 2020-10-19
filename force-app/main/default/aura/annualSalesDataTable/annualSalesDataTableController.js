({
    doInit : function(cmp, _, helper) {
        const maybeDate = cmp.get("v.simulDate")
        if(!maybeDate)
          cmp.set("v.simulDate", new Date())   
        cmp.set('v.detailData', []) 
        helper.setAnnualSales(cmp)
    },
    onRowSelection : function(cmp, event, helper) {
        if(event.getParams().selectedRows[0]) {
            const monthString = event.getParams().selectedRows[0].month
            const monthN = helper.monthStringToNumber(monthString)
            helper.setMonthlySales(cmp, monthN)    
        } else {
            cmp.set('v.detailData', [])
        }
    },
})
