google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);



function drawChart() {
    var data = new google.visualization.arrayToDataTable([
        ['Year', 'London', 'Birmingham', 'Edinburgh'],
        ['2023', 9648000, 1153900, 554000],
        ['2021', 9426000, 1142500, 543000],
        ['2019', 9177000, 1141800, 531000],
        ['2017', 8916000, 1137100, 519000],
        ['2015', 8661000, 1113000, 507000],
        ['2013', 8414000, 1092200, 495000]
        ]);
        var options = {
        title: 'Population of different cities in 2024',
        hAxis: { title: 'Cities' },
        vAxis: { title: 'Population' },
        colors: ['red', 'green', 'blue']
    };
    
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    
    chart.draw(data, options);
}