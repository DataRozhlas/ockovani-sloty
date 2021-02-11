let chartWidth =
 document.getElementById("graf").offsetWidth > 400
   ? 400
   : document.getElementById("graf").offsetWidth;
 
  
  Highcharts.chart('graf', {
    chart: {
      type: 'bar',
      //width: chartWidthNehody,
      events: {
        load() {
          onChartLoad(this);
        },
      },
  
    },
    title: {
      text: 'Nemocnice s nejvíce neobsazenými očkovacími místy',
      useHTML: true,
      align: screenLeft,
    },
    subtitle: {
      text: 'Průměrný počet neobsazených míst den před očkováním, mezi dny od 28.1. do 08.02.2021',
      // + '<br><span style="color: #fff">.</span>',
      useHTML: true,
      align: screenLeft,
    },
    xAxis: {
      categories: ['FN Ostrava',
      'FN Královské Vinohrady',
      'Nemocnice AGEL Nový Jičín',
      'Thomayerova nemocnice',
      'FN u sv.Anny v Brně',
      'Nemocnice Na Bulovce',
      'Nemocnice s poliklinikou Havířov'],
      labels: {
        enabled: true,
      },
    },
    yAxis: {
      title: {
        text: 'průměrně neobsazených míst',
      },
      // labels: {
      //   formatter: function() {
      //     if (this.isLast) {
      //       return this.value + '<br>' +
      //                   '<span class="light-gray-text">jízd za</span>' + '<br>' +
      //                   '<span class="light-gray-text">návěstidla</span>'
      //     } else {
      //       return this.value
      //     }
      //   }
      // }
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      valueSuffix: '',
      shared: false
    },
    exporting: {
      enabled: false,
    },
    credits: {
      href: 'https://reservatic.com/en',
      text: 'Zdroj dat: Reservatic',
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
        },
        // enableMouseTracking: false, // odkomentuj, pokud nechces tooltip
        pointPadding: 0,
      },
    },
    series: [
      {
        name: 'průměrně neobsazených míst',
        data: [{ y: 284, color: colors['2020'] },
          { y: 78.5, color: colors['2020'] },
          { y: 76, color: colors['2020'] },
          { y: 16.5, color: colors['2020'] },
          { y: 13, color: colors['2020'] },
          { y: 7.5, color: colors['2019'] },
          { y: 3, color: colors['2020'] }],
      },
    ],
  });
