# leccion 2 parcial n1

### conceptos concurrencia

- **q es?**
  - concurrencia es coincidir en el tiempo y el espacio dos o mas cosas(concepto general)
- concurrencia en informatica es cuando existen dos o mas procesos en ejecucion

### conceptos de paralelismo

- **q es?**
  - es la ejecucion simultanea de instrucciones

### procesos cooperativos

- los procesos se reunen para realizar tareas en conjunto
- para lograr la comunicacion los procesos deben sincronizarce, si no lo hacen pueden ocurrir problemas
- la sincronizacion es la transmision t recepcion de señales
- la sincronizacion entre procesos es necesaria para prevenir o corregir errores de sincronizacion debido al acceso concurrente de recursis compartidos

- **causa principal del problema**

  - los procesos concurrentes pueden onservar valores temporales inconsientemente de una variable compartida mientras se actualiza

- **resolucion de problema**

  - es realizar actualizaciones de variables compartidads de manera mutuamente exclusiva
  - se puede mejorar permitiendo el al procesos entrar en la seccion critica

- **q es la seccion critica**
  - la seccion critica es un codigo en la que se actualiza una variable compartida o estructura de datos en particular
  - **q es necesario para q se puedan sincronizar los procesos?**
    - disponer servicion que permitan bloquear o suspender la ejecucion de un proceso
    - **cuales son los principales mecanismos para sincronizar los procesos?**
      - los principales mecanismos para la sincronizacion que ofrece el sistema operarivo son:
        1. senales
        2. tuberias
        3. semaforos
        4. mutex y variables de condiciones
        5. paso de mensaje
- **tipos de procesos conurrentes**
  - procesos multiplexan
    - los procesos se multiplexan combinando mas de una señal en el tiempo
  - pseudoparalelismo
    - la cpu ejecuta un solo programa, en el cursor de un segundo puede trabajar varios programas dando la ilusion de paralelismo
  - concurrencia real
    - cada proceso ejecuta un cpu
    - se produce una ejecucion en paralelo
    - paralelismo real
  - indenpendientes
    - son procesos q se ejecutan concurrentemente pero sin tener ninguna relacion
    - estos procesos no se necesitan comunicarse
    - estos procesos no se necesitan sincronizarse
  - cooperantes
    - son procesos que se ejecutan concurrentemente con alguna interaccion entre ellos
    - estos pueden comunicarse entre si
    - se pueden sincronizar
- **comptenecia de recucursos escasos**
  - si dos o mas procesos compiten para coger un recursos
  - el sistema operativo asigna el recurso a un proceso y el otro se mantiene en espera
    -interloqueo
    -inanicion
    -excluion mutua

### exclusion mutua

- **q es?**
  - la exclusion mutua es una condicion q solo permite a un procesador estar dentro de la seccion critica
- para lograr la exclusion mutua se usan tecnicas para lograr entrar en la region critica:
  - semaforos
  - monitores
  - algoritmos
    - intento 1, 2, 3 y 4
    - dekker
    - peterson
  - los candados
- cuando un proceso usa un recurso del sistema realiza una serie de operaciones sobre el recurso y despues lo deja de usra
  -la seccion de codigo que usa ese recurso se le llama seccion critica
- **requisitos de la exclusion mutua**
  1. solo un proceso deve tener permiso para entrar en la seccion critica por un recursi en un instante dado
  2. un proceso que se interrumpe en una seccion no critica debe hacerlo sin interferir con los otros
  3. no puede permirtise el interbloqueo o la inanicion
  4. cuando un proceso esta en su seccion critica, cualquier proceso que solicita entrar en la suya debe poder hacerki sin dilacion
  5. no hacer suposiciones sobre la velocidad relativa de los procesos o el numero de procesadores
  6. un proceso permanece en su seccion critica solo por un tiempo finito

### analisis de soluciones

- **seccion critica**
  - seccion de codigo que puede ser solamente ejecutada por un proceso o hilo
- **seccion de entrada**
  - pide permiso para poder entrar a la seccion critica. si no lo puede hacer se mantiene en la cola
- **seccion de salida**
  - consiste en avusar que la seccion critica esta disponible para el uso de otro proceso
- **seccion restante** - seccion que no importa que varios procesis la ejecuten al mismo tiempo
  > la velocidad de los procesos o hilos siempre va a ser diferente a 0

### requisitos para resolucion

- **preservar la exclusion mutua**
  - los dos procesos se ejecutan y usan la seccion critica al mismo tiempo. se debe garantizar q un solo proceso use la seccion critica
- **progreso**
  - los procesos considerados para definir quien usa la seccion critica son los unico q deben participar en dicha seleccion. esta seccion no puede posponerse indefinidamente
- **espera limitad**
  - cuando entre los procesos a ejecutarse uno es mas rapido que el otro sin embargo existe un limite en el numero de veces que los otros procesos son permitidos entra a la seccion critica. caso contrario existe la inanicion

# algoritmos

### intento 1

- contiene 1 pizarra y 1 condicion
- tiene una variable de turno q es un pizarra
- condicion verifica si el numero es diferente al proceso de pizarra, si es falso pasa a la seccion critica, si el igual pasa a un nada

### intento 2

- contiene 2 pizzara, 1 condicion y una funcion de await
- contiene dos pizarras las cuales se deifine valores en true o false
  -condicion, se verifica el valor de la pizarra del otro proceso cuando el proceso q pregunta la condicciones Pi se consulta el valor de j - cuando la pizarra del otro proceso es true, se mantiene en wait hasta q la pizarra cambie a false

### intento 3

- contiene 1 pizarra y 1 condicion
- turno representada por la pizarra, la inicializa en true
- condicion, verifica la pizzara del otro proceso meintras este en true, espera. si cambia la pizzara del otro proceso a false puede usar la seccion critica y la variable de turno en flase

### intento 4

- contiene una bander y una condicion
- bandera, si un proceso desea usar la seccioncritica setea inicialmente la bandera en true
- condicion, se comprueba la bandera del otro proceso y si esta se encuetra en true, seteo la bandera en flase, espero un tiempo de unos ms, seteo en true y regreso a comprobar la bandera del otro proceso
  -si la bandera se encuentra en flase, uso la seccion critica y pongi mi bandera en false y permito q otro proceso entre

### dekker

- contiene 3 pizzaras, 2 banderas y otra q indique a quien le toca el turno
- cuando un proceso quiere entrar a la seccion critica setea su bandera en true, despues comprueba si esta en true, pone la bandera en flase y comprueba si la variable turno es diferente de su numero
- si esto se cumple quiere decir q no es su numero y por lo tanto tiene que volver a realizar el proceso hasta q la variable cambie y pueda salir del ciclo
- cuando entro a la seccion critica, pongo mi bandera en false para permitir q el siguiente proceso pueda entra en la seccion critica

### peterson

- contiene 3 pizzaras, 2 banderas y 1 turno para saber q proceso le toca
- pizzara, existen 3 pizzaras dos banderas y un turno, se inicializan el false y el turno en 0
- condicion, cuando un proceso quiere entrar a la seccion critica setea si bandera en true y la variable de truno con el numero del otro proceso en cola que tambein desea usar la seccion critica
- antes de la seccion critica se comprueba si la bandera del otro procesi es true y si ademas es su turno, entonces espera
- cuando sale del while, y la bandera es psitiva y si la variable de turno tiene el numero de proceso. puede hacer uso de mi seccion critica
- uso la seccion critica y seteo mi bandera en falso para que si esxite otro proceso pueda avanzar

# semaforos

- **q es?**
  - es una herramienta de sincronizancion que tiene el sistema operativo q no requiere espera ocupada
- los semafors q se setean solo tienen dos funciones exclusicas q son:
  - wait(s)
    - esta funcion se usa para cuando un proceso debe esperar a un semaforo(s), se bloquea y se pone en la cola del semaforo(s)
  - signal()
    - esta funcion con la politica fifo, quita un proceso de la cola y lo pone en la cola la de procesos listos y puede pasar a ejecutarse
- **exiten dos tipos de samaforos**
  - semaforo binario
    - este semaforo solo tiene dos valores 0 y 1
  - semaforo entero
    - este semaforo tiene valores negativos(-), positivos(+) y neutros (0)
    - cuando este semaforo tiene valores (count>=0) no pasa a la cola de bloqueados osea pasa a signal
    - si tiene un valor (count < 0) pasa a la cola de bloqueados q seria el wait
    

# Monitores

- **q es?**
    - los minitores son estructuras de un lenguaje de programcio q ofrecen una funcionalidad equivalente a la de lo semaforos, pero son mas faciles de controlar
    - son de alto nivel y se prestan a ser implemenrados en un sistema orientado a objetos
- **caracteristicas**
    - un monitor es un tipo de objeto q tiene la caracteristicas de q solo un proceso puede estar ejecutando cualquira de sus metodos
    - otro procesos q haigan llamado al monitor quedaran bloqueados mientras espera q el monitor este disponible
    - el monitor esta disponible luego q el proceso q lo estaba ustilizando termine
- **cola**
    - csignal
        - reanuda la ejecucion de un proceso q suspenfdio en cwait
    - cwait
        - suspende la ejecucion de un proceso

# algoritmo de panaderia
- cuando uno quiere entrar a la seccion critica debe coger un turno todos los procesos q quieran entrar
- el turno menor pasa a la seccion critica 
- si ese numero es diferente de 0 quiere entrar a la seccion critica, si es 0 no quiere entrar
- cuando uno va a tomar un numero pone su vandera en verdadero
- va a tomar todos los numeros q estan en el arreglo de numeros q son los numero ff
- se busca el mas alto, va a tomar ese numero y le va a sumar uno
- en el cliclo for se va a recorrer todos los numero voletos
- si se encuentra uno q esta seleccionando se va a esperar mientras esa vandera de se
image.pngimage.png
