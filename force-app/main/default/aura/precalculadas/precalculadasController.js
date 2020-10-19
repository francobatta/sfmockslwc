({
    handleClick : function(cmp) {
        let amount = cmp.find('precalculadas').get('v.value')
        const prevState = cmp.get('v.customSalesData')
        const precalculated = {isPrecalculated: true, Monto_comision__c: +amount}
        if(prevState)
            cmp.set('v.customSalesData', [...prevState, precalculated])
        else
            cmp.set('v.customSalesData', [precalculated])
    }
})
