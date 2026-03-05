---
title: 'Dinámica del puck y flow profiling'
description: 'La ciencia del espresso bajo presión: comportamiento del puck, erosión, compactación, flow profiling vs pressure profiling y cómo diseñar perfiles de extracción basados en física.'
publishedDate: 2026-03-05
tags:
  - puck
  - flow-profiling
  - espresso
  - presion
  - extraccion
  - avanzado
phase: 8
lessonOrder: 4
isPremium: false
---

## El puck como sistema dinámico

En la Fase 7 aprendiste pressure profiling con Rao: pre-infusión larga, presión declinante, turbo shots. Eso te dio herramientas prácticas. Ahora vamos a entender *qué le sucede al puck* durante esos perfiles — la física de lo que ocurre dentro de la canasta entre que presionas el botón y el espresso cae en la taza.

Jonathan Gagné, en *The Physics of Espresso*, aplica mecánica de medios porosos y dinámica de fluidos al puck de espresso. Entender este nivel te permite diseñar perfiles de extracción con intención, no solo copiar recetas.

## Anatomía del puck bajo presión

### Estado inicial

Antes de que el agua llegue, tu puck es un disco de café compactado. No es un sólido homogéneo — es un medio poroso con miles de canales microscópicos entre las partículas. La distribución de estos canales depende de cómo moliste (distribución de partículas), cómo distribuiste (WDT, nivelación) y cómo tampaste (presión, nivelado).

### Primer contacto con el agua

Cuando el agua presurizada toca la superficie del puck, suceden varias cosas simultáneamente.

**Saturación:** El agua llena los espacios entre partículas. No todo se llena instantáneamente — el aire atrapado necesita escapar, lo que crea resistencia inicial. La pre-infusión a baja presión permite que esta saturación ocurra gradualmente, expulsando el aire sin crear canales.

**Hinchamiento:** Las partículas de café absorben agua y se hinchan. Gagné documenta que las partículas pueden aumentar su volumen un 30-50% al saturarse. Este hinchamiento reduce los espacios entre partículas, aumentando la resistencia al flujo. Es uno de los mecanismos por los que la pre-infusión "sella" el puck.

**Compactación:** La presión del agua empuja las partículas hacia abajo y las comprime contra la canasta. La parte inferior del puck se compacta más que la superior. Esto crea un gradiente de densidad: más denso abajo, más poroso arriba.

### Durante la extracción

A medida que la extracción avanza, el puck cambia continuamente.

**Erosión de partículas:** Las partículas se disuelven parcialmente — pierden masa. Esto abre espacios que antes estaban ocupados, aumentando la permeabilidad local. Las zonas más extraídas se vuelven más permeables, atrayendo más agua, acelerando su extracción. Es otro mecanismo de channeling.

**Migración de finos:** Igual que en pour-over pero amplificado por la presión. Los finos se mueven hacia abajo y se acumulan sobre el filtro de la canasta, creando una capa densa que actúa como "segundo filtro".

**Compresión progresiva:** A presión constante de 9 bares, el puck se comprime progresivamente durante los primeros segundos. Gagné estima que un puck puede perder 1-2mm de altura durante la extracción. Esta compresión continua reduce la permeabilidad y explica por qué el flujo de muchas máquinas se desacelera naturalmente hacia el final del shot.

## Pressure profiling vs flow profiling

### El paradigma clásico: presión constante

Las máquinas tradicionales de espresso aplican ~9 bares de presión constante. El flujo es *resultado* de la interacción entre esa presión y la resistencia cambiante del puck. No controlas el flujo directamente — solo la presión. El flujo empieza lento (mientras el puck se satura), aumenta, y luego puede desacelerarse (por compactación y acumulación de finos).

### Pressure profiling

En pressure profiling (cubierto en Lección 7.2), controlas la presión a lo largo del tiempo. Defines una curva de presión (por ejemplo: 3 bar → 9 bar → 6 bar) y el flujo es la consecuencia. Es como definir la "fuerza" y dejar que la "velocidad" se determine sola.

**Ventajas:** Intuitivo. La mayoría de máquinas de profiling (Decent, Lelit Bianca, La Marzocco Strada) controlan presión. Pre-infusión a baja presión, rampa, declive — son conceptos fáciles de visualizar.

**Limitaciones:** El mismo perfil de presión produce flujos diferentes con diferentes cafés. Un café denso de tueste claro tiene más resistencia que uno poroso de tueste oscuro. A los mismos 9 bares, el flujo será muy diferente. Ajustar el perfil por presión requiere recalibrar para cada café.

### Flow profiling

En flow profiling, controlas el caudal de agua (ml/s) a lo largo del tiempo. La presión es *resultado* de la interacción entre ese caudal y la resistencia del puck. Es como definir la "velocidad" y dejar que la "fuerza" se determine sola.

**Ventajas:** Más consistente entre cafés. Si defines un flujo de 2 ml/s, obtienes 2 ml/s independientemente de la resistencia del puck. La máquina ajusta la presión automáticamente. Esto hace que los perfiles sean más transferibles.

**Limitaciones:** Requiere hardware más sofisticado (bomba con control de flujo, no solo de presión). Menos intuitivo para baristas acostumbrados a pensar en presión. Y hay un riesgo: si defines un flujo alto y el puck tiene mucha resistencia, la presión puede subir a niveles que dañen la extracción.

### La máquina Decent como laboratorio

Gagné (que trabaja estrechamente con la comunidad Decent) usa la Decent DE1 como plataforma de experimentación porque permite tanto pressure profiling como flow profiling, y registra ambas variables en tiempo real. Los gráficos resultantes muestran cómo presión, flujo, temperatura y peso interactúan durante cada shot — datos que antes eran invisibles.

## Diseñando perfiles basados en física

### Principio 1: Pre-infusión = saturación uniforme

El objetivo de la pre-infusión es saturar el puck completamente antes de aplicar presión completa. Gagné recomienda pre-infusión por flujo, no por presión: define un flujo bajo (1-2 ml/s) hasta que veas las primeras gotas salir del portafiltro. Esto indica que el puck está saturado de arriba a abajo.

La duración depende de la molienda: más fina = más tiempo de saturación. Típicamente 5-15 segundos. Una pre-infusión demasiado corta deja zonas secas (channeling). Una demasiado larga comienza a extraer antes de que el puck esté uniformemente húmedo.

### Principio 2: Extracción = gradiente controlado

Una vez saturado, el perfil de extracción determina cuánto y qué tan rápido extraes. Opciones basadas en física:

**Flujo constante (2-3 ml/s):** Predecible y repetible. La presión sube inicialmente y luego cae a medida que el puck se erosiona. Simple pero efectivo.

**Flujo declinante:** Empezar con flujo alto y reducirlo progresivamente. Extrae compuestos "fáciles" rápido al principio y luego reduce la velocidad para evitar sobre-extraer los compuestos "difíciles" (amargos, astringentes) al final. Gagné argumenta que esta es la base teórica de la presión declinante de Rao.

**Flujo en rampa:** Empezar bajo y subir. Menos convencional, pero útil para cafés muy claros donde quieres una saturación prolongada antes de extraer agresivamente.

### Principio 3: Final = reducir la extracción marginal

Los últimos mililitros de un shot son los más problemáticos: el puck ya cedió la mayoría de sus compuestos deseables, y lo que queda son compuestos amargos y astringentes. Reducir la presión o el flujo al final minimiza la extracción de estos compuestos.

Esto es lo que hace la presión declinante: no es arbitrario — es una estrategia para extraer lo bueno fuerte y lo malo suave.

## El puck después de la extracción

### Lectura del puck

Después de extraer, el puck contiene información sobre lo que pasó.

**Puck seco y firme, superficie uniforme:** Buena distribución, buena extracción. El agua pasó uniformemente.

**Puck con cráter central:** El agua se concentró en el centro — posible channeling central por mala distribución o tamp desigual.

**Puck lodoso ("soupy puck"):** Demasiada agua relativa al café, o ratio muy extendido. No necesariamente es malo — depende del perfil.

**Puck con grietas o fracturas:** Channeling severo. El agua creó caminos preferentes que fracturaron la estructura del puck.

### Puck screen / filtro de puck

Una tendencia creciente es usar un disco metálico sobre el café (puck screen o contact screen). Este disco distribuye el agua uniformemente sobre toda la superficie del puck antes de que penetre. Gagné confirma que los puck screens mejoran la uniformidad de extracción, reducen channeling superficial, y mantienen la ducha de la máquina más limpia. La desventaja es otro componente que limpiar.

## Temperatura del agua durante la extracción

### El problema térmico

La temperatura del agua no es constante durante la extracción. El agua pierde calor al pasar por el grupo, el portafiltro, y el puck. El primer agua que toca el café puede estar varios grados más fría que la temperatura del boiler, especialmente si el grupo no está bien precalentado.

### Estabilidad térmica

Gagné discute cómo diferentes diseños de grupo (E61, grupo saturado, multi-boiler) afectan la estabilidad térmica. Los grupos saturados (como en la La Marzocco Linea) mantienen temperatura más estable porque el agua del boiler circula continuamente por el grupo. Los E61 (comunes en máquinas prosumer) dependen de convección pasiva y pueden tener oscilaciones de 2-4°C durante un shot.

### Temperature profiling

Algunas máquinas (Decent, Sanremo) permiten cambiar la temperatura durante la extracción. Gagné explora perfiles como alta temperatura inicial para extraer ácidos frutales rápido, luego reducir para evitar extraer amargos. O baja temperatura inicial para saturación suave, luego subir para extracción agresiva. Esto es un campo experimental donde la física guía pero la taza decide.

## Integrando todo: la Fase 8 como marco mental

Las 4 lecciones de esta fase no son recetas — son un marco para entender por qué las recetas funcionan.

Cuando tu V60 drena demasiado lento, ya no dices "algo está mal". Dices: los finos migraron al fondo y redujeron la permeabilidad (ley de Darcy). La solución no es solo moler más grueso — puede ser cambiar de filtro (menor resistencia), usar más agitación (romper la capa de finos), o cambiar de dripper (fondo plano con múltiples orificios).

Cuando tu espresso tiene channeling, ya no es misterioso. Es un gradiente de permeabilidad en el puck causado por distribución desigual. WDT, puck screen, y pre-infusión larga son soluciones que atacan la causa, no el síntoma.

La física no reemplaza la práctica. La práctica calibrada por física es más eficiente. Ajustas con dirección, no a ciegas. Ese es el nivel profesional.

## Lo que necesitas para esta lección

- Máquina de espresso (cualquier tipo, pero pressure profiling es ideal)
- Portafiltro desnudo para observación
- Canasta de precisión (VST o IMS)
- Báscula con timer
- Opcional: puck screen
- Tu cuaderno de recetas

## Ejercicio práctico

### Observando el puck

1. Extrae un shot normal con tu receta habitual
2. Antes de golpear el portafiltro para descartar el puck, obsérvalo: ¿está plano? ¿tiene cráter? ¿grietas?
3. Repite con pre-infusión más larga (si tu máquina lo permite)
4. Compara los pucks: ¿la pre-infusión cambió la apariencia?

### Puck screen comparativo

1. Si tienes un puck screen, extrae dos shots idénticos: uno con, uno sin
2. Misma dosis, mismo ratio, misma molienda
3. Compara: tiempo de extracción, aspecto del puck, sabor
4. Con portafiltro desnudo: ¿el flujo es más uniforme con el screen?

### Perfil de flujo (si tienes máquina con profiling)

1. Extrae un shot con presión constante de 9 bares — registra el flujo resultante
2. Extrae otro con presión declinante (9 → 6 bar) — registra el flujo
3. Si puedes: extrae uno con flujo constante (2.5 ml/s) — observa cómo la presión sube y baja sola
4. Compara los tres en sabor y anota qué perfil destacó qué características del café

## Conceptos clave de esta lección

- El puck es un sistema dinámico que cambia durante la extracción: se satura, se hincha, se compacta, se erosiona
- La pre-infusión satura uniformemente el puck — su duración debe adaptarse a la molienda
- Pressure profiling controla la fuerza (la presión) y deja que el flujo sea consecuencia
- Flow profiling controla la velocidad (el flujo) y deja que la presión sea consecuencia — más consistente entre cafés
- Los finos migran hacia la canasta y crean una capa que actúa como filtro secundario
- La lectura del puck después de la extracción diagnostica problemas de distribución y channeling
- Puck screens mejoran la uniformidad de distribución del agua sobre la superficie del puck
- La temperatura varía durante la extracción y depende del diseño del grupo de tu máquina
- La física del puck explica por qué funcionan las técnicas de Rao (Fase 7) y guía el diseño de nuevos perfiles
