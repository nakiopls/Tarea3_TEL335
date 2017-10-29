
function calc2grad(a,b,c){
discriminante=Math.pow(b,2)-4*a*c;
  if(discriminante<0){
    document.getElementById("info").innerHTML="No tiene soluciones reales [discriminante<0]"
    document.getElementById("x1").value=0;
    document.getElementById('x2').value=0;
    imagen="img/disc_negt.png";
    document.images["grafico"].src=imagen;
    
  }else if(discriminante==0){
    document.getElementById("info").innerHTML="Tiene una sola solución [discriminante==0]"
    document.getElementById("x1").value=parseFloat((-b)/(2*a));
    document.getElementById('x2').value=parseFloat((-b)/(2*a));
    imagen="img/disc0.png";
    document.images["grafico"].src=imagen;
  }else{
    document.getElementById("info").innerHTML="Tiene dos solución [discriminante>0]"
    document.getElementById("x1").value=parseFloat(((-b)+Math.sqrt(discriminante))/(2*a));
    document.getElementById("x2").value=parseFloat(((-b)-Math.sqrt(discriminante))/(2*a));
    imagen="img/dis_post.png";
    document.images["grafico"].src=imagen;
  }
}

document.images["grafico"].src=imagen;


function Solucion(){

  form = document.expresion

  a = form.a.value
  b = form.b.value
  c = form.c.value

  a = parseFloat(a)
  b = parseFloat(b)
  c = parseFloat(c)

  calc2grad(a,b,c)

}