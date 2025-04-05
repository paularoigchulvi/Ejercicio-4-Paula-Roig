

// Obtener elementos del DOM
        const mainSection = document.querySelector("#main-section");
        const directorFilter = document.querySelector("#director-filter");
        
        let films = [];

        // Función para obtener datos de la API
        fetch("https://ghibliapi.vercel.app/films")
            .then(response => response.json())
            .then(data => {
                films = data;
                mostrarPeliculas(films);
                poblarSelect(data);
            })
            .catch(error => console.error("Error al obtener los datos:", error));

        // Función para mostrar las películas en la interfaz
        function mostrarPeliculas(data) {
            mainSection.innerHTML = ""; // Limpiar contenido previo
            data.forEach(element => {
                const div = document.createElement("div");
                div.classList.add("film-card");
                div.innerHTML = `
                    <picture>
                        <img class="image-pelicula" src="${element.image}" alt="${element.title}">
                    </picture>
                    <p class="title">${element.title}</p>
                    <p class="original_title">${element.original_title}</p>
                    <p class="description">${element.description}</p>
                    <p class="director"><strong>Director:</strong> ${element.director}</p>
                    <p class="producer"><strong>Productor:</strong> ${element.producer}</p>
                    <p class="release_date"><strong>Año:</strong> ${element.release_date}</p>
                    <p class="running_time"><strong>Duración:</strong> ${element.running_time} min</p>
                    <p class="rt_score"><strong>RT Score:</strong> ${element.rt_score}</p>
                `;
                mainSection.appendChild(div);
            });
        }

        // Función para poblar el select con los directores de las pelis
        function poblarSelect(data) {
            const directores = [...new Set(data.map(film => film.director))]; 
            //"data.map" : crea una lista con los nombres de los directores de todas las pelis.
            //"...new SET" : elimina los nombres repetidos (porque puede haber varias pelis del mismo director).
            directores.forEach(director => {
                //Recorre la lista de directores.
                const option = document.createElement("option");
                option.value = director;
                option.textContent = director;
                directorFilter.appendChild(option);
                //Resultado final: El menú tiene una opción para cada director.
            });
        }

        // Evento en el botón, filtrar peliculas por director
        directorFilter.addEventListener("change", () => {
            const selectedDirector = directorFilter.value; //Esto detecta cuándo el usuario elige un director u otro del menú desplegable.
            if (selectedDirector === "all") {
                mostrarPeliculas(films);
                //Si el usuario elige "all" (ver todas las pelis), muestra todas las pelis.
            } else {
                const filteredFilms = films.filter(film => film.director === selectedDirector);
                mostrarPeliculas(filteredFilms);
                //Si elige un director, filtra las pelis que dirigió esa persona y muestra solo esas.
            }
        });



























