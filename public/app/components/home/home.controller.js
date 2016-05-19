module.exports = function($scope, $log, $http) {
    $http.get('/rate.json').success(function(data) {
      $scope.atoData = data;
    });

    $scope.process = function(){
      $scope.employeesProcessed = [];
      angular.forEach($scope.employees, function(e){
        var name = e[0] + ' ' + e[1],
            grossIncome, monthlyTax, netIncome, sup
            period = e[4], error = false;

        try {
          salary = e[2];
          grossIncome = Math.round(salary / 12);
          segSalary = salary;
          tax = 0;
          for(var i=$scope.atoData.rates.length - 1; i >=0; i--) {
            var rate = $scope.atoData.rates[i];
            if (salary >= rate.min) {
              var segTax = (segSalary - rate.min) * rate.rate;
              segSalary = rate.min;
              tax = tax + segTax;
            }
          }
          monthlyTax = Math.round(tax / 12);
          netIncome = grossIncome - monthlyTax;
          sup = Math.round(grossIncome * e[3] / 100);
        } catch(err) {
          error = "Please valid the data";

        } finally {
          $scope.employeesProcessed.push({
            name: name,
            gross: grossIncome,
            tax: monthlyTax,
            net: netIncome,
            sup: sup,
            period: period,
            error: error
          });
        }
      });
    }
}
