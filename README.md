# Rest Countries App / Next 13 + Typescript

Esta aplicación fue creada con Next 13 usando la última novedad de la carpeta `app` para hacer el enrutado de la misma

## Librerías usadas

- Axios
- Tailwind CSS
- Clsx
- React Testing Library
- Jest

## Instalación

Esta aplicación requiere [Node.js](https://nodejs.org/) v12+ para correr.

Instalar las dependencias y correr el servidor de desarrollo:

```sh
npm i
npm run dev
```

Correr las pruebas:

```sh
npm run test
```

## Arquitectura propuesta

Esta aplicación sigue la nueva arquitectura propuesta en Next 13, usando la carpeta `app` como enrutamiento de la misma. Con este nuevo enrutador, se abre la posibilidad de hacer el renderizado del lado del servidor usando componentes asíncronos. Por defecto, todas las páginas son server side rendering.

Los componentes que se renderizan en el cliente llevan la directiva `'use client'`, tal como se especifíca en la documentación de Next.

Se usaron las últimas novedades del lenguaje, tales como desestructuración, operadores rest, funciones flecha, etc, y demás buenas prácticas. Los componentes son pequeños para ser de fácil lectura, respetan el principio de responsabilidad única y permiten observar cómo fluye la data entre ellos.

Los llamados al API para obtener tanto los países como el detalle de cada país son obtenidos del servidor, para optimizar el tiempo de carga de la app.

En este caso en particular, los filtros se aplicaron del lado del cliente debido a el API dispone de dos endpoints diferentes para hacer el filtrado por nombre y por region. Al traer todos los países, llamar de nuevo a endpoints diferentes para filtrar la data que ya está en nuestro poder resulta ser ineficiente, demoraría más el proceso de filtrado y complicaría el código.

Para el tema de los estilos, se usó Tailwind por su versatilidad y por la facilidad de aplicar de forma muy sencilla tanto el responsive desing como el Dark Mode.

La inclusión de Typescript resulta fundamental, ya que nos permite tener control de tipos en todo momento de nuestro desarrollo, además de permitir acceder fácilmente a los tipos de las respuestas del API.

La estructura de carpetas permite una fácil búsqueda de cualquier archivo en el directorio.

Los iconos usados son SVG's, y solo se colocaron los necesarios para la app. No se usó una librería ya que generalmente estas incrementan el tamaño de la app aunque solo se usen unos pocos componentes. De esta manera nos aseguramos que la aplicación contenga solo lo que necesitamos.

Las pruebas fueron hechas de manera lógica y que testearan el comportamiento general de la aplicación, garantizando su correcto funcionamiento.
