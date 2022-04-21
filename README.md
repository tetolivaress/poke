# PokeDex Test.  
Este proyecto simula el funcionamiento de un pokedex en un entorno web.
## requisitos 
- Docker cli o Docker desktop
- Un entorno capaz de correr bash scripts
## Correr el proyecto 
Para iniciar el servidor de desarrollo primero debes clonar el repositorio desde esta URL https://github.com/tetolivaress/poke
Navega al directorio del proyecto y corre lo siguiente:
```bash
$ docker run --rm \
    -u "$(id -u):$(id -g)" \    -v $(pwd):/var/www/html \    -w /var/www/html \    laravelsail/php81-composer:latest \    composer install --ignore-platform-reqs
 ```
 Esto inicializa el contenedor en el cual corre el proyecto (si no funciona copiar del siguiente enlace: https://laravel.com/docs/9.x/sail#installing-composer-dependencies-for-existing-projects).
 ## setup 
 Este proyecto consume dos fuentes de datos, una api rest externa y su propia base de datos, para poder llenar el segundo es necesario ejecutar los siguientes dos comandos en el orden indicado:
 ```
 $ ./vendor/bin/sail up
 $ ./vendor/bin/sail artisan migrate
 $ ./vendor/bin/sail artisan get:pokemons
 $ ./vendor/bin/sail yarn
 $ ./vendor/bin/sail yarn prod
 ```
 Posteriormente puedes entrar al proyecto visitando la URL http://localhost
