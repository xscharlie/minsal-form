angular.module('listForms', [])
.controller('listForms', function($scope, $state) {
  $scope.forms = [
    { color: '#FC3230', icon: 'fa-medkit', title: 'Entidad servicio', id: 1 },
    { color: '#6CC83C', icon: 'fa-list-alt', title: 'Datos del servicio', id: 2 },
    { color: '#193AA1', icon: 'fa-user', title: 'Paciente', id: 3 },
    { color: '#00AB60', icon: 'fa-gears', title: 'Causa traumática', id: 4 },
    { color: '#5C2799', icon: 'fa-gears', title: 'Causa cliníca', id: 5 },
    { color: '#FF7F14', icon: 'fa-gears', title: 'Parto', id: 6 },
    { color: '#0065B3', icon: 'fa-gears', title: 'Evaluación inicial', id: 7 },
    { color: '#ED1B24', icon: 'fa-gears', title: 'Evaluación física', id: 8 },
    { color: '#FEEF00', icon: 'fa-gears', title: 'Signos vitales monitoreo', id: 9 },
    { color: '#9D4E00', icon: 'fa-gears', title: 'Score de trauma revisado', id: 10 },
    { color: '#006C3A', icon: 'fa-gears', title: 'Historia Amplia', id: 11 },
    { color: '#390363', icon: 'fa-gears', title: 'Tratamiento', id: 12 },
    { color: '#00A9AC', icon: 'fa-gears', title: 'Manejo farmacológico', id: 13 },
    { color: '#AC1792', icon: 'fa-gears', title: 'Receptor', id: 14 },
    { color: '#FFA419', icon: 'fa-gears', title: 'Consumo nivel basico', id: 15 },
    { color: '#5686CC', icon: 'fa-gears', title: 'Consumo nivel avanzado', id: 16 },
    { color: '#FF7266', icon: 'fa-gears', title: 'Negativa atención', id: 17 },
    { color: '#FDF580', icon: 'fa-gears', title: 'Diagnostico presunto', id: 18 },
    { color: '#670059', icon: 'fa-gears', title: 'Material de intercambio', id: 19 }
  ];

  // $scope.forms = [
  //   { title: 'Entidad que brinda el servicio', id: 1 },
  //   { title: 'Datos del servicio', id: 2 },
  //   { title: 'Paciente', id: 3 },
  //   { title: 'Causa traumática', id: 4 },
  //   { title: 'Causa cliníca', id: 5 },
  //   { title: 'Parto', id: 6 },
  //   { title: 'Evaluación inicial', id: 7 },
  //   { title: 'Evaluación física', id: 8 },
  //   { title: 'Signos vitales monitoreo', id: 9 },
  //   { title: 'Score de trauma revisado', id: 10 },
  //   { title: 'Historia Amplia', id: 11 },
  //   { title: 'Tratamiento', id: 12 },
  //   { title: 'Manejo farmacológico y terapia eléctrica', id: 13 },
  //   { title: 'Receptor', id: 14 },
  //   { title: 'Consumo nivel basico', id: 15 },
  //   { title: 'Consumo nivel avanzado', id: 16 },
  //   { title: 'Negativa a recibir atención/ser trasladado eximiente de responsabilidad', id: 17 },
  //   { title: 'Diagnostico presunto', id: 18 },
  //   { title: 'Material de intercambio', id: 19 }
  // ];


  $scope.initWaves = function(){
      Waves.displayEffect();
    }

  $scope.goTo = function (id) {
    $state.go('app.f'+id);
  }

});
