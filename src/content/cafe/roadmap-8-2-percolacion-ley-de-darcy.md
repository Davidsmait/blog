---
draft: true
title: 'Percolación y ley de Darcy'
description: 'Cómo el agua atraviesa una cama de café: ley de Darcy, resistencia hidráulica, migración de finos, channeling y cómo la física de fluidos explica tus problemas de extracción.'
publishedDate: 2026-03-05
tags:
  - percolacion
  - darcy
  - fluidos
  - channeling
  - extraccion
  - avanzado
phase: 8
lessonOrder: 2
isPremium: false
---

## El viaje del agua a través del café

Cada vez que preparas café por goteo o espresso, el agua realiza un viaje a través de una cama de partículas. Ese viaje no es simple: el agua busca el camino de menor resistencia, interactúa con miles de partículas de diferentes tamaños, disuelve compuestos a diferentes velocidades, y emerge transformada al otro lado.

Entender la física de ese viaje — cómo el agua percola a través de un medio poroso — es entender por qué a veces tu café sale perfecto y a veces no, usando exactamente la misma receta. Jonathan Gagné dedica un capítulo entero de *The Physics of Filter Coffee* a este tema, aplicando conceptos de mecánica de fluidos que se usan en geología, ingeniería petrolera y filtración industrial.

## La ley de Darcy

### El origen

Henry Darcy fue un ingeniero francés del siglo XIX que estudiaba el flujo de agua a través de arena para diseñar sistemas de filtración pública. Descubrió una relación matemática simple: el caudal de agua a través de un medio poroso es proporcional a la presión aplicada y al área de la sección transversal, e inversamente proporcional a la viscosidad del líquido y al grosor de la capa.

### Aplicada al café

En términos de café, la ley de Darcy dice que el flujo de agua a través de tu cama de café depende de la presión del agua (gravedad en pour-over, bomba en espresso), el área de la canasta o dripper, qué tan gruesa es la cama de café, qué tan viscosa es el agua (que depende de la temperatura), y la permeabilidad de la cama (qué tan fácilmente deja pasar agua).

La permeabilidad es el factor más interesante porque depende del tamaño de las partículas, de cómo están empacadas, y de la cantidad de finos que bloquean los espacios entre partículas más grandes.

### Implicaciones prácticas

**¿Por qué una molienda más fina hace el flujo más lento?** Partículas más pequeñas = espacios más pequeños entre ellas = menor permeabilidad = menor caudal. La relación no es lineal: reducir el tamaño de partícula a la mitad puede reducir la permeabilidad a una cuarta parte o menos.

**¿Por qué el espresso necesita presión?** La molienda de espresso es tan fina que la permeabilidad es muy baja. Sin 9 bares de presión, el agua tardaría minutos en atravesar esa cama. La presión compensa la baja permeabilidad para mantener un flujo razonable.

**¿Por qué el mismo setting de molienda da tiempos diferentes entre cafés?** Diferentes cafés producen diferentes distribuciones de partículas. Un café más frágil (tueste oscuro) genera más finos, que reducen la permeabilidad. Mismo setting, diferente flujo.

## Migración de finos

### El fenómeno

Cuando el agua fluye a través de la cama de café, arrastra consigo las partículas más pequeñas — los finos. Estos finos viajan hacia abajo y se acumulan en la parte inferior de la cama, cerca del filtro. A medida que se acumulan, forman una capa densa que reduce progresivamente la permeabilidad.

Gagné describe esto como un proceso que se auto-refuerza: los finos migran hacia abajo, reducen el flujo, lo que concentra más finos en esa zona, lo que reduce más el flujo. Es por esto que los tiempos de drenaje se alargan progresivamente — el primer tercio del agua pasa rápido, el último tercio pasa lento.

### En pour-over

En un V60, la migración de finos es la razón principal por la que el drenaje se desacelera. Si tu V60 tarda 3:30 en drenar pero los últimos 100ml tardan más que los primeros 150ml, los finos se acumularon abajo. El Rao Spin (Lección 7.4) ayuda parcialmente porque redistribuye la cama, pero no elimina el efecto completamente.

### En espresso

En espresso la migración de finos es más dramática porque la presión fuerza las partículas más pequeñas a través de los espacios entre las más grandes. Esto puede causar que el flujo se detenga casi por completo — un fenómeno llamado "choking" o ahogamiento. Las canastas de precisión (VST, IMS) tienen agujeros calibrados que reducen este problema al distribuir el flujo más uniformemente.

## Channeling: el enemigo invisible

### Qué es

El channeling ocurre cuando el agua encuentra un camino de baja resistencia a través de la cama de café y fluye preferentemente por ese canal. El café en el canal se sobre-extrae (mucha agua lo atraviesa) mientras el café alrededor se sub-extrae (poca agua lo alcanza).

### Por qué ocurre

La ley de Darcy explica el channeling: si hay una zona de mayor permeabilidad (un espacio donde las partículas están menos compactas), el agua la prefiere. Una vez que el agua empieza a fluir por ese canal, lo erosiona, haciéndolo más grande, lo que atrae más agua. Es un ciclo que se amplifica.

Las causas principales son distribución desigual del café en el dripper o canasta, grietas en la cama de café (por un tamp desigual, por ejemplo), aire atrapado que crea cavidades, y la geometría del dripper (el surco del V60 puede actuar como canal preferente si el café no lo cubre bien).

### Diagnosticando channeling

**En espresso:** Usa un portafiltro desnudo. Si ves chorros que serpentean, goteo desigual, o zonas secas en el puck después de la extracción, hay channeling.

**En pour-over:** Si al terminar el drenaje ves un cráter en el centro de la cama, canales visibles en las paredes del filtro, o la cama tiene forma cóncava en lugar de plana, hubo channeling. El flujo también será más rápido de lo esperado (porque el agua tomó atajos).

**En la taza:** Channeling produce una combinación característica de amargura (del canal sobre-extraído) y acidez disonante (del café sub-extraído alrededor). Es diferente de una simple sobre o sub-extracción uniforme — se siente "desordenado".

### Combatiendo el channeling

**Pre-infusión:** Mojar el café lentamente antes de aplicar presión completa permite que las partículas se asienten y los espacios de aire se llenen. Esto crea una cama más homogénea.

**WDT (Lección 7.1):** Romper grumos y homogeneizar la distribución antes de tampar reduce las zonas de permeabilidad variable.

**Técnica de vertido (pour-over):** Un vertido lento, circular y consistente satura la cama uniformemente. Vertidos agresivos o erráticos crean perturbaciones que favorecen canales.

**Rao Spin (Lección 7.4):** Redistribuye la cama entre vertidos, rompiendo canales incipientes.

## Inmersión vs percolación: dos modelos físicos

### Percolación (pour-over, espresso)

En percolación, el agua fresca fluye continuamente a través del café. Esto mantiene un gradiente de concentración alto: el agua que toca el café siempre tiene menos solubles que el café, lo que impulsa la extracción. Por eso la percolación puede alcanzar extracciones más altas (22-24%).

Pero la percolación tiene un problema inherente: las partículas en la parte superior de la cama ven agua fresca primero, y las de abajo ven agua ya cargada de solubles. Las de arriba se extraen más que las de abajo. Gagné cuantifica esta diferencia: en un V60, la capa superior puede tener 2-3% más extracción que la capa inferior.

### Inmersión (French press, cupping, Clever)

En inmersión, todo el café está sumergido en toda el agua. No hay gradiente de posición — todas las partículas tienen acceso al mismo "pool" de agua. Esto produce extracción más uniforme entre partículas, pero la concentración de solubles en el agua aumenta rápidamente, reduciendo el gradiente de concentración y frenando la extracción. Por eso la inmersión tiene un techo de extracción más bajo (~20-21%).

### Métodos híbridos

El Clever Dripper y el AeroPress (en uso no invertido) combinan ambos: una fase de inmersión seguida de percolación al drenar. Gagné argumenta que estos métodos capturan las ventajas de ambos sistemas — uniformidad de inmersión con el empuje final de percolación — lo que explica su popularidad entre profesionales.

## Temperatura y viscosidad

### El papel de la temperatura

El agua caliente tiene menor viscosidad que el agua fría. Según la ley de Darcy, menor viscosidad = mayor caudal. Esto significa que con agua más caliente, el drenaje es más rápido — no solo porque el agua caliente extrae más rápido, sino porque fluye más fácilmente a través de la cama.

### La implicación práctica

Si reduces la temperatura del agua (por ejemplo, de 96°C a 88°C para un café de tueste oscuro), el drenaje será más lento. Si no compensas con una molienda ligeramente más gruesa, tu tiempo total de extracción será más largo de lo esperado. Muchas recetas no mencionan este efecto, pero Gagné lo documenta con datos: una reducción de 10°C puede aumentar el tiempo de drenaje un 15-20%.

### Cold brew: el caso extremo

En cold brew, el agua fría tiene una viscosidad significativamente mayor que el agua caliente. Esto, combinado con la extracción mucho más lenta a bajas temperaturas, explica por qué el cold brew necesita 12-24 horas. No es solo que la extracción sea lenta — el flujo a través del café (si es método de goteo frío) también es extremadamente lento.

## Lo que necesitas para esta lección

- Un dripper transparente (V60 plástico o Clever) para observar el flujo
- Café molido a diferentes niveles (fino, medio, grueso)
- Cronómetro
- Báscula
- Portafiltro desnudo si tienes máquina de espresso

## Ejercicio práctico

### Observando la ley de Darcy

1. Prepara tres V60 con el mismo café y mismo ratio (15:250), cambiando solo la molienda: fina, media, gruesa
2. Registra el tiempo total de drenaje de cada una
3. Observa: ¿la relación entre molienda y tiempo es lineal o exponencial?
4. Observa la cama final: ¿la más fina tiene más finos acumulados abajo?

### Diagnosticando channeling

1. Prepara un V60 con vertido lento y circular, aplica Rao Spin
2. Prepara otro idéntico pero con vertido agresivo y rápido, sin spin
3. Fotografía ambas camas finales
4. Compara: ¿cuál tiene cama más plana? ¿cuál tiene canales visibles?
5. Prueba ambas tazas: ¿puedes detectar la diferencia en limpieza?

### Temperatura y flujo

1. Prepara dos V60 idénticos: uno a 96°C y otro a 80°C
2. Misma molienda, mismo ratio, misma técnica de vertido
3. Registra tiempos de drenaje
4. Calcula la diferencia porcentual

## Conceptos clave de esta lección

- La ley de Darcy gobierna el flujo de agua a través de la cama de café: presión, área, grosor, viscosidad y permeabilidad
- La permeabilidad depende del tamaño de partículas y la cantidad de finos — no es algo que controles directamente
- Los finos migran hacia abajo durante la extracción, reduciendo progresivamente el flujo
- El channeling es un ciclo auto-reforzante: un canal atrae más agua, lo que lo hace más grande
- La percolación extrae más pero menos uniformemente; la inmersión extrae menos pero más uniformemente
- La temperatura afecta el flujo a través de la viscosidad, no solo la velocidad de extracción
- Diagnosticar problemas de flujo (channeling, acumulación de finos) requiere observación de la cama de café después de la extracción
- Pre-infusión, WDT, y Rao Spin son soluciones prácticas a problemas que la ley de Darcy predice
