var operacion ='';
		var operando =0;

		function leer_boton(boton){
			if(boton>=0 && boton <=9){

				document.getElementById('entrada').value=document.getElementById('entrada').value+boton;
			}
			if(boton==11){

				document.getElementById('entrada').value="";
				operando=0;
				operacion="";
			}
			
			if(boton>=12 && boton<=15 ){
				operando=parseInt(document.getElementById('entrada').value);
				if(boton==12){ operacion='+';}

				if(boton==13){ operacion='-';}

				if(boton==14){ operacion='*';}
				
				if(boton==15){ operacion='/';}	
				document.getElementById('entrada').value="";
			}
			if(boton==16){
				document.getElementById('entrada').value=document.getElementById('entrada').value+'.';

			}
			if(boton==17){

				switch(operacion){

					case '+': 
						var result = operando + parseInt(document.getElementById("entrada").value);
						document.getElementById("entrada").value=result.toString();
						break;
					case '-': 
					var result = operando - parseInt(document.getElementById("entrada").value);
						document.getElementById("entrada").value=result.toString();break;
					case '/': var result = operando / parseInt(document.getElementById("entrada").value);
						document.getElementById("entrada").value=result.toString();break;
					case '*': var result = operando * parseInt(document.getElementById("entrada").value);
						document.getElementById("entrada").value=result.toString();break;

				}

			}



		}
