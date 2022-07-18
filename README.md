# Como subir un proyecto a git.

- ## Creación del repositorio.

    1. Navegamos hasta la carpeta donde queremo tener el repostorio.
    2. Introducimos el siguiente comando en la terminal.

    ```
    git init
    ```

- ## Creación de una rama.

    ¡OJO! Nunca trabajamos en la rama master/main (puede ocasionar problemas graves), 
    siempre 
    
    1. creamos una rama.
    2. trabajamos en ella, y luego, cuando hemos terminado.
    3. la fusionamos con la principal. 
    
    
    para ello, disponemos del siguiente comando.

    ```
    git branch miRama
    ```
    *mas abajo explico como fusionar ~~(Coloquialmente mergear)~~ ramas*.

- ## Add y Commit
    Cuando tus archivos estás seguro de que tu proyecto funciona, estamos listos para subirlo.
    
    ### add

    el comando **git add** sirve para añadir un archivo al **'stage area'**, su sintaxis es:
    
    *el stage area area es una zona donde git monitorea los cambios en los archivos.*

    ```
    git add [archivo]
    ```

    o

    ```
    git add . (añadir todo)
    ```

    ### Commit

    Cuando hemos termidado de hacer canmbios confirmamos con commit de la siguiente manera:

    ```
    git commit -m 'comentario descriptivo sobre los cambios'
    ```

- ## push

    y finalmente para subir los archivos al repositorio usamos el siguiente comando.

    ```
    git push
    ```