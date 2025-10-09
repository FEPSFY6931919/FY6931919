google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);



function drawChart() {
    var data = new google.visualization.DataTable();
        data.addColumn('string', 'Cities');
        data.addColumn('number', 'Population');
        data.addRows([
            ['London', 9648000],
            ['Birmingham', 1153900],
            ['Edinburgh', 554000],
        ]);
        var options = {
        title: 'Population of different cities in 2024',
        hAxis: { title: 'Cities' },
        vAxis: { title: 'Population' },
        colors: ['red']
    };
    
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    
    chart.draw(data, options);
}