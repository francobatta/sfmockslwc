({
    handleSuccess : function(component) {

    },
    addSaleToArray: function(cmp, event) {
        event.preventDefault();
        const prevState = cmp.get('v.customSalesData')
        const baseDeComision = cmp.get('v.baseDeComision')
        const porcentajeDeComision = cmp.get('v.porcentajeDeComision')
        let initialSale = event.getParams().fields
        const newSale = Object.assign(initialSale, {Base_de_comision__c: baseDeComision, Porcentaje_comision__c: parseFloat(porcentajeDeComision), Monto_comision__c: (baseDeComision * porcentajeDeComision / 100), isCustom: true})
        cmp.set('v.customSalesData', [...prevState, newSale])
        cmp.set('v.toastIsHiddenClassName','')
        setTimeout(() => cmp.set('v.toastIsHiddenClassName', 'slds-hidden'), 3000)
    },
})
