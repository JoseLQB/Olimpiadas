$(document).ready(function () {
    $(".btn-fuerza").click(function () { //Botón de Fuerza
        var sube = true;
        var valor = $(".carga-fuerza").css("width");
        valor = valor.slice(0,-2); // Elimina "px" y me quedo con el valor numérico del width.
        var intervalo = setInterval(function(){ // Comienza el intervalo de fuerza a oscilar
            
            $(".btn-fuerza").css("display","none"); // Modificación del botón fuerza para convertirlo en uno de parada
            $(".btn-fuerza-parada").css("display","block"); //Aparición del botón para parar
            
            if (sube){ //Control de oscilación
                $(".carga-fuerza").css("width",valor+"px");
                valor++;
            } else {
                $(".carga-fuerza").css("width",valor+"px");
                valor--;
            }
            if (valor == 100){
                sube = false;
            }
            if (valor == 0){
                sube = true;
            }
            
            $(".btn-fuerza-parada").click(function() { // Click en el botón de parada de fuerza
                clearInterval(intervalo); // Fin del intervalo
                $(".btn-fuerza-parada").css("display","none"); // Ocultación de botón fuerza/parar
                $(".btn-angulo").css("display","block"); //Muestra el botón de ángulo
            });
        },5);
        
        
    });
    $(".btn-angulo").click(function () { //Botón de ángulo
        var sube = true;
        var valor = $(".carga-angulo").css("width");
        valor = valor.slice(0,-2); // Elimina "px" y me quedo con el valor numérico del width.
        var intervalo = setInterval(function(){ // Comienza el intervalo de ángulo a oscilar
            
            $(".btn-angulo").css("display","none"); // Modificación del botón ángulo para convertirlo en uno de parada
            $(".btn-angulo-parada").css("display","block"); //Aparición del botón para parar
            
            if (sube){ //Control de oscilación
                $(".carga-angulo").css("width",valor+"px");
                valor++;
            } else {
                $(".carga-angulo").css("width",valor+"px");
                valor--;
            }
            if (valor == 90){
                sube = false;
            }
            if (valor == 0){
                sube = true;
            }
            
            $(".btn-angulo-parada").click(function() { // Click en el botón de parada de ángulo
                clearInterval(intervalo); // Fin del intervalo
                $(".btn-angulo-parada").css("display","none"); // Ocultación de botón ángulo/parar
                $(".btn-lanzar").css("display","block");
                
            });
        },5);   
    });

    $(".btn-lanzar").click(function () { 
        var velocidad = $(".carga-fuerza").css("width");
        var angulo = $(".carga-angulo").css("width");
        velocidad = velocidad.slice(0,-2);
        angulo = angulo.slice(0,-2);
        // Cálculo la x máxima
        const G = 9.81;
        anguloEnRadianes = angulo * Math.PI / 180;
        xMax = Math.pow(velocidad,2)*(Math.sin(2*anguloEnRadianes));
        xMax = xMax/G;
        var x = 1;
        var y = 1;
        var velocidadIntervalo = velocidadVisual(velocidad);
        var intervaloLanzamiento = setInterval(function(){
            if (x<=xMax){
                y = x*Math.tan(anguloEnRadianes)-((G*Math.pow(x,2))/(2*Math.pow(velocidad,2)*Math.pow(Math.cos(anguloEnRadianes),2)));
                $(".bola").css("bottom", y);
                $(".bola").css("left", x);
                x++;
            } else {
                clearInterval(intervaloLanzamiento);
            }
        },velocidadIntervalo);      
    });

    function velocidadVisual(velocidad) { // Velocidad a la que se ve el lanzamiento dependiendo de la velocidad.
        if (velocidad >= 0 && velocidad < 33){
            velocidadIntervalo = 15;
        } else if (velocidad >= 33 && velocidad < 66){
            velocidadIntervalo = 10;
        } else{
            velocidadIntervalo = 5;
        }
        return velocidadIntervalo;
    }
});