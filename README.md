Ejercicio 4, Paula-Roig
Uso de la API para mostrar los datos en el front-end.

Cómo funciona en general:

1. Se conecta con la API de pelis de Ghibli.
2. Guarda los datos recibidos en una variable.
3. Muestra las pelis en la pantalla con su imagen, título, director, etc.
4. Llena un menú con los nombres de los directores (sin repetir).
5. Cuando eliges un director, filtra las pelis y muestra solo las suyas.
6. Si eliges "all", muestra todas otra vez.

-----------

----mainSection---- es donde se van a mostrar las pelis.
----directorFilter---- es el menú desplegable con los directores.

Obtener datos de la API:
----fetch("https://ghibliapi.vercel.app/films")----
Esta línea se conecta con la API. Luego vienen los pasos para convertir la respuesta en datos utilizables:

----.then(response => response.json())----
Convierte la respuesta a formato JSON.

----.catch(error => console.error("Error al obtener los datos:", error));----
Si hay algún error lo muestra en al consola

Luego recorre cada peli:

----data.forEach(element => {
    const div = document.createElement("div");
    div.classList.add("film-card");----
    
Crea un div nuevo para cada película y le añade una clase.

Después le mete todo el contenido HTML:

---div.innerHTML ----

Al final, el div se añade a la sección principal:

----mainSection.appendChild(div);----


Resumen:
JS pide los datos a la API.
Cuando llegan, los guarda y muestra las pelis.
Llena el menú con directores.
Al elegir uno, muestra solo sus pelis.
Todo el contenido se mete dinámicamente al HTML usando JS.


El script hace lo siguiente:

1.  Coge la lista de pelis del API (con info como título, director, etc.).
2.  Saca todos los nombres de la variable "director" sin repetirlos.
3.  Mete esos nombres en un menú desplegable (`<select>`), para que el usuario pueda elegir uno.
4.  Cuando seleccionas un director filtra las pelis y muestra solo las que ha hecho esa persona.
5.  Si eliges "cualquiera", te muestra todas las pelis otra vez.

¿Cómo lo hace?

- Usa `.map()` para sacar los nombres de director.
- Usa `Set` para eliminar los duplicados.
- Crea elementos `<option>` y los mete en el `<select>`.
- Detecta cambios con un `addEventListener`.
- Filtra con `.filter()` según lo que elijas.

