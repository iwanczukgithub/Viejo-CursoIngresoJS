function Mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById('edad').value;

if(edad>17)
{
	alert("Es mayor de edad");
}
if(edad>12 && edad<18)
{
	alert("Es adolescente");
}
if(edad<13)
{
	alert("Es un niño");
}
}//FIN DE LA FUNCIÓN