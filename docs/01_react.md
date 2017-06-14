# React

Cos'è react? Su non siate pigri e andate a leggervi quanto meno l'introduzione:

[React](https://facebook.github.io/react/)

Riassumendo brevemente, React è una libreria che ci permette di creare dei componenti
utilizzabili con una sintassi html-style.

```
<div>
  <HelloWord />
</div>
```

La strutture tipica di un'applicazione React è la seguente:


```
<html> 
  <head>
    <script type="text/javascript" src="app.js"></script>
  </head> 
  <body> 
    <div id="app" />
   </body> 
</html>
```

```
import React from 'react';
 import ReactDom from 'react-dom';  
ReactDom.render( 
  <h1>Hello react!</h1>, 
  document.getElementById('app') 
);
```

Spiegando brevemente:
Il metodo `render` del modulo `react-dom` attacca all'elemento \#app direttamente
un pezzo di HTML.
Come potrete notare il codice `<h1>Hello react!</h1>` è scritto direttamente utilizzando la sintassi HTML inserita nel codice [JSX](https://facebook.github.io/react/docs/introducing-jsx.html).
Eseguendo direttamente questo codice avrete sicuramente un errore in quanto l'interprete JS non capisce la sintassi.
Il codice deve essere infatti trasformato usando `babel`, ma per il momento tralasciamo il problema in quanto poco ci interessa, tratteremo il sistema di bundling successivamente.

## Storybook
Storybook è una piattaforma per la gestione/documentazione e sviluppo dei component react.
Quello che fa è gestire, utilizzando un sistema UnitTest-like, i componenti.
Per ogni componente che creiamo scriviamo una serie di storie e il sistema automaticamente ci fornirà un'interfaccia nella quale possiamo farne un browse.
La piattaforma si preoccuperà di fare il `mount` del componente ed eseguire il transpiling permettendoci di cominciare subito a giocare con i componenti.

L'aggiunta di una storia viene fatta aggiungendo un file *.story.js contenente:

```
storiesOf('Welcome', module)
    .add('Simple HTML', () => <div>questo non è un componente <b>REACT</b> ma semplice HTML</div>);
    .add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);
```

# Step by step

## Il primo componente

Creiamo un folder `hello`in src/components/atoms

e inseriamo 2 file:
 - index.js
 - index.story.js

```
// index.js
import React from 'react';

const Hello = () => {
  return <div>Hello REACT</div>;
}

export default Hello;
```

```
// index.story.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import Hello from '.';

storiesOf('Hello', module)
    .add('First hello', () => <Hello />)
```

Se ora riavviamo storybook (o se siamo fortunati e l'ha fatto autonomamente) troviamo una nuova voce `Hello` nella colonna di sinistra.
Cliccandoci sopra vedremo il componente che abbiamo creato.

Bene, ora React per voi non ha più segreti!!

**NOTE:**
 - Il nome del componente creato deve iniziare con una lettera Maiuscola. React infatti interpreta tutti i componenti che iniziano in minuscolo come dei semplice elementi HTML
 - Troverete un altro modo per definire un compomente React `class Hello extends React.Component ...`, il metodo proposto invece utilizza una sintassi molto più semplice.
 I componenti definiti utilizzando la sintassi `(props) => return <div>hello</div>` vengono chiamati `stateless component` e sono utilizzati quando non è necessario un certo livello di complessità. Come nel caso corrente.






