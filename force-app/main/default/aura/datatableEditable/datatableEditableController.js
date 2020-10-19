({
    init: function (cmp, event, helper) {
        cmp.set('v.columns', [
            {label: 'Account name', fieldName: 'AccountName', type: 'text'},
            {label: 'Created date', fieldName: 'CreatedDate', type: 'date'},
            {label: 'Subject', fieldName: 'Subject', type: 'text'},
            {label: 'Status', fieldName: 'Status', type: 'text'},
        ]);
        cmp.set('v.data', [
            {AccountName: 'Account1', CreatedDate: new Date(), Subject: 'a subject', Status: 'Closed'}
        ])

    }
});