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

    $scope.back = function(){
        console.log('back: ');
        $state.go('app.list');
    }

    $scope.next = function(){
        console.log('next: ');
        $state.go('app.f2');
    }
})

/*-------------------- Controller Form ------------------*/
.controller('form2', function($scope, $state) {
    
    $scope.save = function(variable) {
        console.log('save: '+variable);
    }

    $scope.back = function(){
        console.log('back: ');
        $state.go('app.F1');
    }

    $scope.skip = function() {
        console.log('skip: ');
    }

    $scope.next = function(){
        console.log('next: ');
    }
});