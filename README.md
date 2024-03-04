Carosello Mono Array
===

## Consegna
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

## Logica di svolgimento

1. Creiamo la struttura del carosello statica dove inseriamo l'immagine iniziale al centro.
1. Creiamo i vari stili che ci serviranno.
1. Inserisco tutte le img in un array.
1. Do a tutti gli elemtni la classe `.hide`.
1. Tolgo la classe `.hide` al primo elemento, e inizializzo un contatore a 0, che mi servirà per sapere dove mi trovo tra le immagini.
1. Creo le mie freccie che al 'click', mi faranno muovere tra le immagini del array.