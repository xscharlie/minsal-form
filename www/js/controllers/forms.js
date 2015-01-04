angular.module('forms', [])
/*-------------------- Controller Form1 ------------------*/
.controller('form1', function($scope, $state) {
    $scope.institucion = 1;
    $scope.entidades = [
        { id: 1, name: 'Fosalud', icon: 'fosalud.png'},
        { id: 2, name: 'Cruz Verde', icon: 'cruzverde.png'},
        { id: 3, name: 'Comandos de Salvamento', icon: 'comandos.png'},
        { id: 4, name: 'Cruz Roja', icon: 'cruzroja.png'},
        { id: 5, name: 'Policía Nacional Civil', icon: 'pnc.png'}
    ];

    $scope.save = function(variable) {
        console.log('save: '+variable);
    }

    $scope.skip = function() {
        console.log('skip: ');
        $state.go('app.f2');
    }

    $scope.home = function(){
        console.log('home: ');
        $state.go('app.list');
    }

    $scope.next = function(){
        console.log('next: ');
        $state.go('app.f2');
    }
})

/*-------------------- Controller Form2 ------------------*/
.controller('form2', function($scope, $state) {

    $scope.toggle = 1;
    $scope.toggleGroup = function(group) {
        if ($scope.isGroupShown(group)) {
          $scope.shownGroup = null;
        } else {
          $scope.shownGroup = group;
        }
    };

    $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
    };


    $scope.save = function(variable) {
        console.log('save: '+variable);
    }

    $scope.home = function(){
        console.log('home: ');
        $state.go('app.list');
    }

    $scope.skip = function() {
        console.log('skip: ');
        $state.go('app.f3');
    }

    $scope.next = function(){
        console.log('next: ');
        $state.go('app.f3');
    }
})
/*-------------------- Controller Form3 ------------------*/
.controller('form3', function($scope, $state) {

    $scope.save = function(variable) {
        console.log('save: '+variable);
    }

    $scope.home = function(){
        console.log('home: ');
        $state.go('app.list');
    }

    $scope.skip = function() {
        console.log('skip: ');
        $state.go('app.f4');
    }

    $scope.next = function(){
        console.log('next: ');
        $state.go('app.f4');
    }

});