
// #botao-pula
// Adicionando o evento de clique ao botão '#botao-pular'
var distancialeft = 300;
$('#botao-pular').click(function(){

  //Alterando a propriedade css do elemento
  $('#sapo').css('margin-top', '350px');
  //
  $('#sapo').css('margin-left', distancialeft);
  //
  $('#sapo').css('border', '2px solid red');

  distancialeft = distancialeft + 50;

})
