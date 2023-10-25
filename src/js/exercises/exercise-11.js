/* 
EJERCICIO 11:
Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor
*/

const orderFilmByRating = (movies) => {

    return movies.sort((a,b) => a.rating - b.rating)

}

showContent(11, orderFilmByRating(movies));