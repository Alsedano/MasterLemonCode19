# Entegable TanStack Start

## Issues:

_(Aparte de los estilos con TailWindCss :))_

- Quitar de la UI el root '/' que muestra un link a '/houses' que es lo que quería ver inicialmente. He intentado hacer que '/' rediriga a '/houses' directamente. Al final he hecho una copia del RootComponent '/houses' en el RootComponent '/'

- La funcionalidad del search. En el search.component me lié y en lugar de llamar al navigate de @tanstack/react-router llamé a un Navigate de react-router que no me funcionaba. Eso me llevó un poco de tiempo darme cuenta

      navigate({
         to: '/houses',

      xxxxx

  - Siguiendo con la funcionalidad del search, el filtro lo aplico en el loader en la llamada de la api. Estuve leyendo también sobre Tanstack Query pero con ese filtro es me ha sido suficiente.
