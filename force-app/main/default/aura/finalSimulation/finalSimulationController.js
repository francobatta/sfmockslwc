({
  doInit: function (cmp, event, helper) {
    helper.setPeriodDate(cmp)
    let firstChartArea = document.getElementById("first-chart")
    let secondChartArea = document.getElementById("second-chart")

    const colors = ['rgba(99,181,152,0.7)','rgba(206,125,120,0.7)','rgba(234,158,112,0.7)','rgba(164,138,158,0.7)','rgba(198,225,232,0.7)','rgba(100,129,119,0.7)','rgba(13,90,193,0.7)','rgba(242,5,230,0.7)','rgba(28,3,101,0.7)','rgba(20,169,173,0.7)','rgba(76,162,249,0.7)','rgba(164,228,63,0.7)','rgba(210,152,226,0.7)','rgba(97,25,208,0.7)','rgba(210,115,125,0.7)','rgba(192,164,60,0.7)','rgba(242,81,14,0.7)','rgba(101,27,230,0.7)','rgba(121,128,110,0.7)','rgba(97,218,94,0.7)','rgba(205,47,0,0.7)','rgba(147,72,175,0.7)','rgba(1,172,83,0.7)','rgba(197,164,251,0.7)','rgba(153,102,53,0.7)','rgba(177,21,115,0.7)','rgba(75,180,115,0.7)','rgba(117,216,158,0.7)','rgba(47,63,148,0.7)','rgba(47,123,153,0.7)','rgba(218,150,125,0.7)','rgba(52,137,31,0.7)','rgba(176,216,123,0.7)','rgba(202,71,81,0.7)','rgba(126,80,168,0.7)','rgba(196,214,71,0.7)','rgba(224,238,184,0.7)','rgba(17,222,193,0.7)','rgba(40,152,18,0.7)','rgba(86,108,160,0.7)','rgba(255,219,225,0.7)','rgba(47,17,121,0.7)','rgba(147,91,109,0.7)','rgba(145,105,136,0.7)','rgba(81,61,152,0.7)','rgba(174,173,58,0.7)','rgba(158,109,113,0.7)','rgba(75,91,220,0.7)','rgba(12,211,109,0.7)','rgba(37,6,98,0.7)','rgba(203,91,234,0.7)','rgba(34,137,22,0.7)','rgba(172,62,27,0.7)','rgba(223,81,74,0.7)','rgba(83,147,151,0.7)','rgba(136,9,119,0.7)','rgba(246,151,193,0.7)','rgba(186,150,206,0.7)','rgba(103,156,157,0.7)','rgba(198,196,44,0.7)','rgba(93,44,82,0.7)','rgba(72,180,27,0.7)','rgba(225,207,59,0.7)','rgba(91,228,240,0.7)','rgba(87,196,216,0.7)','rgba(164,209,122,0.7)','rgba(190,96,139,0.7)','rgba(150,176,12,0.7)','rgba(8,139,175,0.7)','rgba(241,88,191,0.7)','rgba(225,69,186,0.7)','rgba(238,145,227,0.7)','rgba(5,211,113,0.7)','rgba(84,38,224,0.7)','rgba(72,52,208,0.7)','rgba(128,34,52,0.7)','rgba(103,73,232,0.7)','rgba(9,113,240,0.7)','rgba(143,180,19,0.7)','rgba(178,180,240,0.7)','rgba(195,200,157,0.7)','rgba(201,169,65,0.7)','rgba(65,209,88,0.7)','rgba(251,33,163,0.7)','rgba(81,174,217,0.7)','rgba(91,179,45,0.7)','rgba(33,83,142,0.7)','rgba(137,213,52,0.7)','rgba(211,102,71,0.7)','rgba(127,180,17,0.7)','rgba(0,35,184,0.7)','rgba(59,140,42,0.7)','rgba(152,107,83,0.7)','rgba(245,4,34,0.7)','rgba(152,63,122,0.7)','rgba(234,36,163,0.7)','rgba(121,53,44,0.7)','rgba(82,18,80,0.7)','rgba(199,158,210,0.7)','rgba(214,221,146,0.7)','rgba(227,62,82,0.7)','rgba(178,190,87,0.7)','rgba(250,6,236,0.7)','rgba(27,182,153,0.7)','rgba(107,46,95,0.7)','rgba(100,130,15,0.7)','rgba(33,83,142,0.7)','rgba(137,213,52,0.7)','rgba(211,102,71,0.7)','rgba(127,180,17,0.7)','rgba(0,35,184,0.7)','rgba(59,140,42,0.7)','rgba(152,107,83,0.7)','rgba(245,4,34,0.7)','rgba(152,63,122,0.7)','rgba(234,36,163,0.7)','rgba(121,53,44,0.7)','rgba(82,18,80,0.7)','rgba(199,158,210,0.7)','rgba(214,221,146,0.7)','rgba(227,62,82,0.7)','rgba(178,190,87,0.7)','rgba(250,6,236,0.7)','rgba(27,182,153,0.7)','rgba(107,46,95,0.7)','rgba(100,130,15,0.7)','rgba(156,182,74,0.7)','rgba(153,108,72,0.7)','rgba(154,185,183,0.7)','rgba(6,224,82,0.7)','rgba(227,164,129,0.7)','rgba(14,182,33,0.7)','rgba(252,69,142,0.7)','rgba(178,219,21,0.7)','rgba(170,34,109,0.7)','rgba(121,46,216,0.7)','rgba(115,135,42,0.7)','rgba(82,13,58,0.7)','rgba(206,252,184,0.7)','rgba(165,179,217,0.7)','rgba(125,29,133,0.7)','rgba(196,253,87,0.7)','rgba(241,174,22,0.7)','rgba(143,226,42,0.7)','rgba(239,110,60,0.7)','rgba(36,62,235,0.7)','rgba(221,147,253,0.7)','rgba(63,132,115,0.7)','rgba(231,219,206,0.7)','rgba(66,31,121,0.7)','rgba(122,61,147,0.7)','rgba(99,95,109,0.7)','rgba(147,242,215,0.7)','rgba(155,92,42,0.7)','rgba(21,185,238,0.7)','rgba(15,89,151,0.7)','rgba(64,145,136,0.7)','rgba(145,30,32,0.7)','rgba(19,80,206,0.7)','rgba(16,229,177,0.7)','rgba(255,244,215,0.7)','rgba(203,37,130,0.7)','rgba(206,0,190,0.7)','rgba(50,213,214,0.7)','rgba(96,133,114,0.7)','rgba(199,155,194,0.7)','rgba(0,248,124,0.7)','rgba(119,119,42,0.7)','rgba(105,149,186,0.7)','rgba(252,107,87,0.7)','rgba(240,120,21,0.7)','rgba(143,216,131,0.7)','rgba(6,14,39,0.7)','rgba(150,229,145,0.7)','rgba(33,213,46,0.7)','rgba(208,0,67,0.7)','rgba(180,113,98,0.7)','rgba(30,194,39,0.7)','rgba(79,15,111,0.7)','rgba(29,29,88,0.7)','rgba(148,112,2,0.7)','rgba(189,224,82,0.7)','rgba(224,140,86,0.7)','rgba(40,252,253,0.7)','rgba(54,72,106,0.7)','rgba(208,46,41,0.7)','rgba(26,230,219,0.7)','rgba(62,70,76,0.7)','rgba(168,74,143,0.7)','rgba(145,30,126,0.7)','rgba(63,22,217,0.7)','rgba(15,82,95,0.7)','rgba(172,124,10,0.7)','rgba(180,192,134,0.7)','rgba(201,215,48,0.7)','rgba(48,204,73,0.7)','rgba(61,103,81,0.7)','rgba(251,76,3,0.7)','rgba(100,15,193,0.7)','rgba(98,192,62,0.7)','rgba(211,73,58,0.7)','rgba(136,170,11,0.7)','rgba(64,109,249,0.7)','rgba(97,90,240,0.7)','rgba(42,52,52,0.7)','rgba(74,84,63,0.7)','rgba(121,188,160,0.7)','rgba(168,184,212,0.7)','rgba(0,239,212,0.7)','rgba(122,210,54,0.7)','rgba(114,96,216,0.7)','rgba(29,234,167,0.7)','rgba(6,244,58,0.7)','rgba(130,60,89,0.7)','rgba(227,217,76,0.7)','rgba(220,28,6,0.7)','rgba(245,59,42,0.7)','rgba(180,98,56,0.7)','rgba(45,255,246,0.7)','rgba(168,43,137,0.7)','rgba(26,128,17,0.7)','rgba(67,106,159,0.7)','rgba(26,128,106,0.7)','rgba(76,240,157,0.7)','rgba(193,136,162,0.7)','rgba(103,235,75,0.7)','rgba(179,8,211,0.7)','rgba(252,126,65,0.7)','rgba(175,49,1,0.7)','rgba(113,177,244,0.7)','rgba(162,248,165,0.7)','rgba(226,61,208,0.7)','rgba(211,72,109,0.7)','rgba(0,247,249,0.7)','rgba(71,72,147,0.7)','rgba(60,236,53,0.7)','rgba(28,101,203,0.7)','rgba(93,29,12,0.7)','rgba(45,125,42,0.7)','rgba(255,52,32,0.7)','rgba(92,221,135,0.7)','rgba(162,89,164,0.7)','rgba(228,172,68,0.7)','rgba(27,237,230,0.7)','rgba(135,152,164,0.7)','rgba(215,121,15,0.7)','rgba(178,194,79,0.7)','rgba(222,115,194,0.7)','rgba(215,10,156,0.7)','rgba(136,233,184,0.7)','rgba(194,176,226,0.7)','rgba(134,233,143,0.7)','rgba(174,144,226,0.7)','rgba(26,128,107,0.7)','rgba(67,106,158,0.7)','rgba(14,192,255,0.7)','rgba(248,18,179,0.7)','rgba(177,127,201,0.7)','rgba(141,108,47,0.7)','rgba(211,39,122,0.7)','rgba(44,161,174,0.7)','rgba(150,133,235,0.7)','rgba(138,150,198,0.7)','rgba(219,162,230,0.7)','rgba(118,252,27,0.7)','rgba(96,143,164,0.7)','rgba(32,246,186,0.7)','rgba(7,215,246,0.7)','rgba(220,231,122,0.7)','rgba(119,236,202,0.7)']
    
    const salesData = cmp.get('v.salesData')
    const customSalesData = cmp.get('v.customSalesData')

    const allTheSales = salesData.concat(customSalesData)
    if(!allTheSales){
      // no data:

    } else {
    const productAndTotal = {}
    cmp.set('v.allTheSalesData', allTheSales.sort((a,b) => (a.Producto__c > b.Producto__c) ? 1 : ((b.Producto__c > a.Producto__c) ? -1 : 0)))

    const salesWithAProduct = allTheSales.filter(s => s.isReal || s.isCustom)

    const salesGroupedByProduct = helper.groupBy(salesWithAProduct, 'Producto__c') // remember to filter custom comisiones when grouping by product
    const totalMoneyByProductGroup = Object.values(salesGroupedByProduct).map(group => {
      let groupTotal = group.reduce((acc, cur) => acc + cur.Monto_comision__c, 0)

      productAndTotal[group[0].Producto__c] = parseFloat(groupTotal)

      return groupTotal
    })    

    let _max = -99999999
    let mostComisionesProduct = ''
    for (var [key, value] of Object.entries(productAndTotal)) {
      if(value > _max) {
        _max = value
        mostComisionesProduct = key
      }
    }

    cmp.set('v.mostComisionesProduct', mostComisionesProduct)
    const totalSales = allTheSales.reduce((acc, cur) => acc + +cur.Monto_comision__c, 0)
    const totalProductSales = totalMoneyByProductGroup.reduce((acc, cur) => acc + +cur, 0)
    // filter null, sum, get average
    const averageComision = salesWithAProduct.map(s => s.Porcentaje_comision__c).filter(x => x).reduce((acc, cur) => acc + cur) / salesWithAProduct.length
    const mostUsedMedioDePago = helper.getMostFrequentElement(salesWithAProduct.map(s => s.Medio_de_pago__c).filter(x => x))
    const productSoldMostTimes = helper.getMostFrequentElement(salesWithAProduct.map(s => s.Producto__c).filter(x => x))

    cmp.set('v.totalSales', '$' + totalSales)
    cmp.set('v.totalProductSales', '$' + totalProductSales)
    cmp.set('v.salesNoProduct', '$' + (totalSales - totalProductSales))
    cmp.set('v.averageComision', averageComision.toFixed(1) + '%')
    cmp.set('v.mostUsedMedioDePago', mostUsedMedioDePago)
    cmp.set('v.productSoldMostTimes', productSoldMostTimes)
    new Chart(firstChartArea, {
      type: "pie",
      data: {
        labels: Object.keys(salesGroupedByProduct),
        datasets: [
          {
            backgroundColor: colors.slice(0, totalMoneyByProductGroup.length),
            data: totalMoneyByProductGroup
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Total de comisiones por producto",
        },
        legend: {
          display: false
        }
      }
    });
    // time series
    
    new Chart(secondChartArea, {
        type: 'line',
        data: {
          labels: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
          datasets: [{ 
              data: [30000*24/100,62000*2/100,81000*26/100,57000*6/100,18000*78/100,20000*21/100,95000*58/100,25000,2600 + 25000],
              label: "comisiones",
              borderColor: "#3e95cd",
              fill: false
            },
            // more datasets
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Comisiones históricas por mes',
          },
          legend: {
            display: false
          }  
        }
      },
      {
        maintainAspectRatio: false
      }
  );
  }
}
});
