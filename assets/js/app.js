const baseEndpoint = 'https://api.github.com'; //Api de github 
const usersEndpoint = `${baseEndpoint}/users`; //Concatena la api de github usando /user para ingresar a la pagina 
const n = document.querySelector('.name'); //Clase llamada en html, signo $ eliminado 
const b = document.querySelector('.blog'); //Se corrige nombre de variable de acuerdo a clase html
const l = document.querySelector('.location'); //Variable corregida y clase creada en html

async function displayUser(username) {
  n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json ();
  console.log(data);
  n.textContent = `${data.name}`;
  b.textContent = `${data.blog}`;
  l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);