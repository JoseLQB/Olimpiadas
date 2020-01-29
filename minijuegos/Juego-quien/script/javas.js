
$(document).ready(function(){
	var json = [
		{
		pregunta:"¿Quien gano el segunda mejor marca de la historia de Reino Unido?",
		respuesta: "./imagenes/farah.jpg",
		pista:["Se refugió en Londres en 1993", "Estudió en la escuela Community College", "Es medalla de plata en el Campeonato Europeo de Atletismo"]
		},
		{
		pregunta:"¿Quien se encuentra en primera posición en títulos de Masters 1000 en modalidad individual?",
		respuesta: "./imagenes/nadal.jpg",
		pista:["Está considerado como uno de los mejores deportistas y tenistas de la historia y el mejor de todos los tiempos en pistas de tierra batida", "En 2010 se convirtió en el único tenista de la historia en ganar el Clay Slam o Slam de Tierra Batida", "Ha vencido diez o más veces a quince rivales y veinte o más veces a cuatro contrincantes"]	
		},
		{
		pregunta:"¿Quien se consagró como el máximo medallista de oro en una sola edición de los juegos?",
		respuesta: "./imagenes/phelps.jpg",
		pista:["Nació y creció en el vecindario Rodgers Forge en Towson", "Su padre es un policía retirado del Estado de Maryland quien jugó Fútbol americano en la secundaria y la Universidad", "Se presentó por primera vez en los Juegos Olímpicos en Sídney 2000"]
		}
	];
	var aleatorio= 0;
	var src;
	var pista;
	var cont = 0;
	for(var i = 0; i<json.length ; i++){
		aleatorio= Math.floor(Math.random() * 3);
		$("h3").text(json[aleatorio].pregunta);
		src = json[aleatorio].respuesta;
		pista = json[aleatorio].pista;
	}
	$('img').click(function(){
		if ($(this).attr('src') == src){
			$(this).attr('src', './imagenes/bien.jpg');
			cont =0;
		}
		else{
			$(this).attr('src', './imagenes/mal.jpg');
			pistitas(pista,cont);
			cont++;
		}
	});
	
});
function pistitas(pista,cont){

	if(cont <= 2){
		var li = $("<li>");
		$('ul').append(li);
		var texto_li = (pista[cont]);
		li.append(texto_li);
		li.css('color','white');
	}

	
}