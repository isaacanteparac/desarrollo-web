# fundamentos de nodejs

es un entorno de ejecucion de javascrip del navegador, se creo en el 2009

### concurremcias

- monohilo, con entrada y salidas asincronicas
- un proceso por cada nucleo del proceso

### motor v3

- enotorno de ejecucion de js creado por google
- escrito en c++
- convierte js en codigo maquina

### orinetado a objetos

- hay un blucle de eventos que se ejecuta constantemente


### event loop

- asincronismo x disño
#### event queue
- continen tosos los eventos que genera nuestro codigo
#### event loop
- se encarga de resolver los eventos ultra rapidos que llegan desde el event queue, envia el evento a **thread pool**

### xq usar una promesa?
- tener una solucion o pasa un error
- si sale un error pasa algo catch()
- si se soluciona se ejecuta una promesa then()
    - se puede seguir invocando promesas infinitamente, dentro del resolver se puede enviar un parametro
    - reject o error
- promesas encadenadas

```JavaScript
//PROMESA
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

```
### xq usar una ASINC/AWAIT?
- se pone en la funcion async y el await en la funcio en ejecutar

```JavaScript
    async functio gola(){
        return await hola()
    }
```
