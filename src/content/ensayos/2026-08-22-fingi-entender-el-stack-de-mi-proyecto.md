---
title: 'Fingí entender el stack de mi propio proyecto'
description: 'Estaba diseñando la tutora de IA de mi roadmap de café asintiendo a un stack —pgvector, embeddings, coseno— que no entendía. Este es el diario honesto de las preguntas tontas que me hice para dejar de fingir: índices, vectores, y el momento en que pregunté "¿qué es un embedding?" por tercera vez.'
publishedDate: 2026-08-22
draft: true
tags:
  - aprendizaje
  - bases-de-datos
  - embeddings
  - cata
mood: personal
---

Estaba diseñando el spec de Cata —una tutora de IA para mi roadmap de café— cuando me cayó el veinte de algo incómodo: llevaba varias sesiones diciendo "sí, va" a decisiones técnicas que no entendía. pgvector, HNSW, embeddings, distancia coseno, 384 dimensiones. Asentía como quien asiente en una junta para que no le pregunten nada.

No quería un Cata que funcionara porque le copié el stack a un blog post de Medium. Así que hice lo que me daba pena hacer: paré, abrí un sandbox aparte, y empecé a preguntar cosas básicas en voz alta.

Este post es eso. No es un tutorial pulido — es el **diario de mis dudas reales**, incluidas las que me dio vergüenza hacer. Si te topas con lo mismo y sientes que eres el único que no le entiende, este post es para ti. Spoiler: pregunté "¿qué es un embedding?" tres veces en la misma sesión. Y no pasó nada malo.

## Primero, lo aburrido que resultó no ser aburrido: los índices

Empecé por algo que creía que ya sabía: los índices de base de datos. Sé que sirven para que las búsquedas sean más rápidas. Lo que no sabía era *cómo*.

Mi primera duda fue la más honesta: si busco `WHERE email = 'x'` en una tabla enorme sin índice, ¿qué hace Postgres exactamente? Mi intuición fue *"¿va a buscar registro por registro?"*. Y resultó que casi — solo que no lee fila por fila, lee en **páginas de 8 KB**. Ese matiz me importó porque explica por qué las métricas hablan de "páginas leídas" y no de "filas".

Pero la que de verdad me trabó fue esta: **¿qué guarda un índice por dentro?** ¿Una columna que apunta a la fila? ¿Todas las columnas? No me cerraba.

La respuesta, con un ejemplo de 4 filas enfrente, por fin hizo clic:

> Un índice es un **archivo aparte**, ordenado, que guarda solo **dos cosas**: la columna por la que buscas (digamos `email`) y un **puntero** a dónde vive la fila completa. Nada más. No copia el resto de las columnas.

O sea: el índice es como el índice alfabético al final de un libro de cocina. No es el libro — es una lista ordenada que te dice *en qué página* está el tiramisú. La tabla real (con todos los datos) se llama **heap**, y es un archivo distinto. Cuando pides `SELECT id, name, city`, Postgres busca en el índice, encuentra el puntero, y con ese puntero salta al heap a leer la fila completa. Dos pasos.

De ahí salieron tres dudas más, todas de "nunca me había puesto a pensarlo":

- **¿Qué es ese "puntero"?** Se llama **CTID** (*Current Tuple ID*, donde "tupla" es una fila). Es la dirección física: *"página 42, ranura 3"*. Postgres se la pone solo.
- **¿Por qué siempre el ejemplo con `email`? ¿Cómo sé qué columna indexar?** Resulta que no hay nada especial con email — indexas las columnas por las que *buscas seguido*. Y no indexas todo "por si acaso" porque cada índice **cuesta**: ocupa disco y vuelve más lentas las escrituras (cada `INSERT` tiene que actualizar la tabla y todos los índices). Es un trade-off, no un "más es mejor".
- **¿Por qué se llama B-tree? ¿La B de qué?** Me hice a la idea de que era "binary". No lo es — un B-tree tiene muchos hijos, no dos. Y la neta nadie sabe con certeza qué es la B (Balanced, Bayer, Boeing — hay tres teorías). Me pareció graciosísimo que una de las estructuras más usadas del mundo tenga el nombre a medio explicar.

Ah, y una palabra que me sacó de onda: cuando pregunté cómo hace Postgres para saber qué índices existen, apareció el **catálogo del sistema** — unas tablas internas con nombres endemoniadamente parecidos: `pg_index`, `pg_indexes`, `pg_class`. Pregunté qué significaba la "o" de *oid*, qué era *rel* (creía que podía ser "real", es "relation"), por qué la "s" de `pg_indexes` cambia todo. No me dio pena preguntar la etimología, y qué bueno, porque ahí estaba mi bloqueo: no entendía los nombres, entonces no entendía el concepto.

## La pared: los embeddings

Aquí es donde se puso feo, y donde más honesto quiero ser.

Todo el proyecto de Cata depende de una idea: convertir texto en números para poder buscar por *significado*. A esos números se les llama **embeddings**. Y yo, sinceramente, no entendía nada.

Lo dije tal cual: *"entiendo que sea un array de números, pero no veo para qué ni cómo se conectan"*. Y rematé con algo que me costó admitir: *"nunca había escuchado 'coseno' ni 'euclidiano' fuera de hoy"*. Cero fundamentos de matemáticas de universidad. Si tú tampoco los tienes, quédate — se puede.

Me aventaron varias analogías y voy a ser franco sobre cuáles funcionaron y cuáles no:

- **"Es como GPS pero para significado"** — más o menos. El problema es que ni siquiera tenía claro qué representaban los dos números de las coordenadas GPS. Media.
- **"Son como flechas que apuntan a algún lado; el coseno mide si dos flechas apuntan al mismo lado sin importar qué tan largas sean"** — esta sí. La parafraseé yo solo: *"encontrar que las flechas apunten al mismo lado sin importar la distancia a la que estén"*. Ahí sentí el primer clic real.
- **"Es como RGB, pero para significados"** — esta fue la definitiva, y creo que porque es la única que ya conocía de antes (de CSS). RGB son 3 números que codifican un color; colores parecidos → números parecidos. Un embedding son ~384 números que codifican significado; textos parecidos → números parecidos.

Aun con todas las analogías, después de la primera pasada dije la frase más honesta de todo el proyecto: *"masomenos, pero entiendo que no hay que profundizar aún mucho"*. Y más tarde, ya listo para seguir, **volví a preguntar "¿qué es un embedding?"** — la versión más básica posible. Por tercera vez.

No lo cuento para hacerme el humilde. Lo cuento porque creo que ese es **el punto exacto donde la mayoría de los tutoriales te pierden** y tú crees que el problema eres tú. No eres tú. El concepto necesita más vueltas de las que parece.

Otras dudas que solté sin filtro en esa sesión, por si son las tuyas:

- **¿De dónde salió el número 384?** No lo eliges tú. Es una propiedad **fija** del modelo que uses (uno da 384, otro 768, otro 1536). El modelo escupe siempre esa cantidad, sea el texto una palabra o un párrafo.
- **¿Cómo aprende el modelo a poner los significados parecidos cerca?** Con una idea que me encantó: imagina cada texto como una esfera en un cuarto vacío. Los textos parecidos están unidos por ligas que los jalan; los que no tienen nada que ver, por resortes que los separan. Tras millones de ajustes, el sistema llega a un equilibrio donde lo relacionado queda junto. Y lo más loco: los pares de entrenamiento no se etiquetan a mano — salen de trucos automáticos como traducciones (mismo significado, otro idioma).
- **¿Y "logarítmicamente" qué?** Sí, también pregunté eso. (Es, más o menos, "cuántos dígitos tiene un número". Crece lentísimo.)

## La segunda sesión: verlo con mis propios ojos

Después de tanta teoría, hubo una frase mía que resultó ser la clave de cómo aprendo: *"hasta que no vea los números reales en consola, no me va a cerrar"*.

Así que corrimos código. Embebimos dos frases —"mi espresso sale ácido" y "mi café sabe agrio"— y medimos qué tan cerca caían. Y ahí, viendo los números salir, se acomodó todo lo que la teoría no había logrado. Pero primero tuve que aclarar unas confusiones más:

**Confundí RAG con embeddings.** Pregunté: *"¿embeddings es la cadena completa y RAG es una parte?"*. Estaba al revés. **RAG** (Retrieval-Augmented Generation) es la estrategia completa: primero *recuperas* los pedazos relevantes de tus documentos, luego se los das a la IA, y esta *genera* una respuesta basada en ellos. El embedding es solo una herramienta dentro del primer paso. RAG es la receta; el embedding es un cuchillo. (Y sí, también tuve que preguntar qué era un RAG, porque no me acordaba.)

**No entendía por qué los números eran decimales abajo de 1.** Porque el coseno no cuenta cosas, mide *alineación*: va de -1 a 1, donde 1 es "apuntan idéntico". Es una proporción, no un conteo. Un `0.899` es como decir "apuntan casi 90% en la misma dirección".

**Creí que los números cambiaban al azar.** Vi un puntaje de 0.8 y luego uno de 0.9 y me confundí. La verdad tranquilizadora: los embeddings son **deterministas**. Mismo texto + mismo modelo = exactamente los mismos números, siempre. No hay azar. Si el número cambió, fue porque el texto cambió.

Y el momento favorito: probamos dos modelos. Uno inglés-céntrico aplastó todo el contraste con mis frases en español. El otro, multilingüe, separó bien — justo el que ya había elegido en el spec, pero ahora *sabía por qué*. Y hubo un resultado imperfecto delicioso: una frase sobre *"ácido sulfúrico"* se coló entre las respuestas porque compartía la palabra "ácido", aunque no tuviera nada que ver con café. Ahí entendí, viéndolo fallar, por qué existen técnicas más finas encima de la búsqueda vectorial. No me lo tuvieron que decir — lo vi.

## Lo que me llevo (y por qué escribí esto)

Dos cosas.

La primera, técnica: entendí que un índice y un embedding resuelven el mismo problema desde ángulos distintos — *no revisar todo para encontrar lo que buscas*. Un B-tree lo hace para valores sueltos; un índice vectorial (que es lo que sigue en mi aprendizaje) lo hace para significados. Todo conecta.

La segunda, y la que de verdad importa: **está bien no entender y preguntar la misma cosa tres veces.** Estaba a punto de construir sobre un stack que no comprendía solo para no sentirme tonto preguntando. Y resultó que las preguntas "tontas" —qué es un puntero, de dónde sale el 384, por qué el número es menor a 1— eran exactamente las que separaban "le copié el stack a alguien" de "sé lo que estoy haciendo".

Si estás aprendiendo esto y sientes que todos le entienden menos tú: probablemente los demás también están asintiendo en la junta. Haz la pregunta tonta. En voz alta.

*(Lo que sigue: meter estos vectores a Postgres de verdad, con pgvector y un índice HNSW, y medir qué tanto se acelera la búsqueda. Eso va en la siguiente entrada.)*
