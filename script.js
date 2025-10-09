google.charts.setOnLoadCallback(drawChart);
google.charts.load('current', {'packages':['corechart']});



function drawChart() {
    var data = new google.visualization.DataTable();
        data.addColumn('number', 'Age');
        data.addColumn('number', 'Salary');
        data.addRows([
            [25, 40000],
            [30, 50000],
            [35, 60000],
            [40, 75000],
            [45, 80000],
            [50, 90000]
        ]);
        var options = {
        title: 'Age vs. Salary',
        hAxis: { title: 'Age' },
        vAxis: { title: 'Salary' }
    };
    
    var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
    
    chart.draw(data, options);
}

drawChart();