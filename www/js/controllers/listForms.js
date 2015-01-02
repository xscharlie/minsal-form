angular.module('listForms', [])

.controller('listForms', function($scope) {
  $scope.forms = [
    { title: 'Entidad que brinda el servicio', id: 1 },
    { title: 'Datos del servicio', id: 2 },
    { title: 'Paciente', id: 3 },
    { title: 'Causa traumática', id: 4 },
    { title: 'Causa cliníca', id: 5 },
    { title: 'Parto', id: 6 },
    { title: 'Evaluación inicial', id: 7 },
    { title: 'Evaluación física', id: 8 },
    { title: 'Signos vitales monitoreo', id: 9 },
    { title: 'Score de trauma revisado', id: 10 },
    { title: 'Historia Amplia', id: 11 },
    { title: 'Tratamiento', id: 12 },
    { title: 'Manejo farmacológico y terapia eléctrica', id: 13 },
    { title: 'Receptor', id: 14 },
    { title: 'Consumo nivel basico', id: 15 },
    { title: 'Consumo nivel avanzado', id: 16 },
    { title: 'Negativa a recibir atención/ser trasladado eximiente de responsabilidad', id: 17 },
    { title: 'Diagnostico presunto', id: 18 },
    { title: 'Material de intercambio', id: 19 }
  ];
});
