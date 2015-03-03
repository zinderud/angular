

var moduleiki = angular.module('moduleiki', []);

moduleiki.controller('kontrol', function($scope) {
        $scope.mesaj = 'n emesajı';

        $scope.isimler = ['de', 'ere', 'ds'];

        $scope.isimEkle = function () {
            $scope.isimler.push($scope.isimgir);
            $scope.isimgir = '';
        };

        $scope.isimSil = function(c) {

            var i = $scope.isimler.indexOf(c);
            $scope.isimler.splice(i, 1);
        };

    });