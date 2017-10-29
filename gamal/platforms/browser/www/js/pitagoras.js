


function Ejecutar_teorema() {

	form = document.pitagoras

	//obtencion de los datos del HTML

	cateto_ady = form.cateto_adyacente.value
	cateto_op = form.cateto_opuesto.value

	//Extraccion de los numeros

	cateto_ady = parseInt(cateto_ady)
	cateto_op = parseInt(cateto_op)

	//Calculo de los lados al cuadrado y la suma de estas

	cateto_ady = cateto_ady*cateto_ady
	cateto_op = cateto_op*cateto_op	
	aux= cateto_ady + cateto_op

	//Calculo de la raiz para obtener la hipotenusa

	hip = Math.sqrt(aux)

	imagen="img/triangulo.png";
    document.images["triangulo"].src=imagen;

	document.pitagoras.hipotenusa.value = hip


}