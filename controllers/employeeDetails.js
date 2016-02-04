mainApp.controller('employeeDetailsController', function($scope) {
   $scope.message = "This page will be used to display employee details";

   // Historical data
        $scope.history = [];

        // Default data (can be loaded from a database)
		$scope.records = [
			{ name: 'vinay', salary: 3000, tax: 195, include: false },
			{ name: 'lawry', salary: 1050, tax: 108, include: false }
		];

        // Total prices
		$scope.Totals = function () {
			var priceTotal = 0;
            var taxTotal = 0;

            // Loop through main records and calculate aggregate prices and taxes if include is true
			angular.forEach($scope.records, function (record) {
		        if (record.include) {
					priceTotal += record.salary;
		            taxTotal += record.tax;
		        }
			});

            // Return aggregate data
            return { salary: priceTotal , tax: taxTotal };
		};

        // Delete data
        $scope.Delete = function (index) {
            // Remove first / oldest element from history if it reaches maximum capacity of 10 records
            if ($scope.history.length === 10)
                $scope.history.shift();
            // Add deleted record to historical records
            $scope.history.push($scope.records[index]);

            // Remove from main records (using index)
            $scope.records.splice(index, 1);
        };

        // Reset new data model
        $scope.Reset = function () {
            $scope.newState = '';
            $scope.newPrice = 0;
            $scope.newTax = 0;
        }
        $scope.Reset();

        // Add new data
        $scope.Add = function () {
            // Do nothing if no state is entered (blank)
            if (!$scope.newState)
                return;

            // Add to main records
            $scope.records.push({
                name: $scope.newState,
                salary: $scope.newPrice,
                tax: $scope.newTax,
                include: false
            });

            // See $Scope.Reset...
            $scope.Reset();
        }

        // Undo action (delete)
        $scope.Undo = function () {
            // Add last / most recent historical record to the main records
            $scope.records.push($scope.history[ $scope.history.length - 1 ]);

            // Remove last / most recent historical record
            $scope.history.pop();
        }

   
});