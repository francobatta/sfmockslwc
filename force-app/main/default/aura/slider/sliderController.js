({
    setSellerRanking : function(component, event, helper) {
        let amount = component.get('v.amountSold')
        let message = ''
        if(amount < 500000)
            message = "mal vendedor"
        if(amount >= 500000)
            message = "buen vendedor"
        component.set('v.sellerRanking', message)
    }
})