const baseEndpoint = 'https://api.github.com'; //Api de github 
const usersEndpoint = `${baseEndpoint}/users`; //Concatena la api de github usando /user para ingresar a la pagina 
const n = document.querySelector('.name'); //Clase llamada en html, signo $ eliminado 
const b = document.querySelector('.blog'); //Se corrige nombre de variable de acuerdo a clase html
const l = document.querySelector('.location'); //Variable corregida y clase creada en html

async function displayUser(username) { //Funcion con el nombre de usuario
  n.textContent = 'cargando...'; //Solicitud de cambio texto a variable 
  const response = await fetch(`${usersEndpoint}/${username}`);//Solicitud para obtener informacion del usuario, con el nombre de usuario 
  const data = await response.json ();//Data se utiliza para guardar la informacion que recaba del fetch y lo convierte a json
  console.log(data);//imprime response como objeto json
  n.textContent = `${data.name}`;
  b.textContent = `${data.blog}`;
  l.textContent = `${data.location}`;
}

function handleError(err) { 
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`//Se cambian las comillas dobles por backtics
}

displayUser('stolinski').catch(handleError); //Se llaman las 2 funciones, en caso que no funcione se despliega el error

//El await se utiliza para esperar la respuesta de la pag para que el proceso pueda continuar
//En conclusión, este codigo obtiene informacion de un usuario de github utilizando una API, dicha información se desplegara en una página HTML, en caso de no ser exitoso muestra errores para identificar lo que salga mal en el proceso.