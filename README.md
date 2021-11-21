# FrontEnd

El FrontEnd es la parte visual de la apliación, en este caso utilizamos una **SPA** (Single Page Aplicación) con el propósito de dar una experiencia más fluida a los usuarios, como si fuera una aplicación de escritorio. En un SPA todos los códigos de HTML, JavaScript, y CSS se cargan una sola vez y los recursos necesarios se cargan dinámicamente cuando lo requiera la página, normalmente como respuesta a las acciones del usuario.

![Image Text](https://github.com/gsierra10/netflix-wannabe-front/blob/4d34cb30f07e1e65a8287d23576d6d39c5f80302/Estructura_carpetas.png)


## SPA

El proceso de creación de una página de este proyecto, requiere enlazar distintos scripts desde un App.js que tomamos como núcleo principal, en el que establecemos un Container, con las rutas que va  a tener esta web. Aquí importamos la página de Login, Home, etc, y establecemos la URL de la siguiente manera:

![Image text](https://github.com/gsierra10/netflix-wannabe-front/blob/4d34cb30f07e1e65a8287d23576d6d39c5f80302/AppJS.png)



Para crear la página de login, creamos un archivo que llamamos LoginPage.js y establecemos una función con el mismo nombre de este archivo, e introducimos los componentes que necesita esta página, en este caso un Header y una lógica que llamamos LoginUser, donde se encuentra el formulario que va a tener que rellenar el usuario para hacer el login a la aplicación,  quedando este archivo de la siguiente manera:

![Image text](https://github.com/gsierra10/netflix-wannabe-front/blob/4d34cb30f07e1e65a8287d23576d6d39c5f80302/login.png)


En la parte superior se puede ver la importación de ambos archivos.



La parte lógica que podemos encontrar en el LoginUser, precisa la estructura que va a tener la página para iniciar sesión,  donde hemos añadido un formulario  a rellenar por el usuario que consta de un email y de una contraseña, y un botón para dar acceso, en caso de existir un usuario en la base de datos, se contrasta la información y se permite el acceso, de no encontrarse, saldrá un mensaje de error, que indicará al usuario si está mal escrito el email o contraseña o que no existe.
Este LoginUser lo exportamos en la parte inferior del archivo y en la superior importamos el servicio de APIConsumer, que pasamos a explicar a continuación.

![Image text](https://github.com/gsierra10/netflix-wannabe-front/blob/4d34cb30f07e1e65a8287d23576d6d39c5f80302/loginUser.png)


En el archivo de APIConsumer, establecemos la ruta que va a tener esta página con el metodo que necesitamos, en este caso es un POST y con un contenido de tipo json que dará un token al usuario, para verificar su autenticación y le permita hacer las comprar que necesite.

![Image text](https://github.com/gsierra10/netflix-wannabe-front/blob/4d34cb30f07e1e65a8287d23576d6d39c5f80302/APIConsumer.png)
