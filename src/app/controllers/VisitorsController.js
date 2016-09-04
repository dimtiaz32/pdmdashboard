(function () {
    angular
        .module('app')
        .controller('VisitorsController', [
            VisitorsController
        ]);

    function VisitorsController() {
        var vm = this;

        // TODO: move data to the service
        vm.completedCal = 1234;
        vm.goalCal = 2000;
        // TODO: put in a check in case they exceeed the calorie goal
        vm.visitorsChartData = [ { key: 'Calories to go', y: vm.goalCal - vm.completedCal}, {key: 'Completed', y: vm.completedCal} ];

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['#BDBDBD', '#00b9be'],
                showLabels: false,
                showLegend: false,
                title: vm.completedCal + ' cal',
                margin: { top: -10 }
            }
        };
    }
})();
