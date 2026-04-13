---
title: 'Presión, temperatura y pre-infusión'
description: 'Las variables de la máquina que afectan tu extracción: cómo funcionan los 9 bares, la estabilidad térmica y el poder de la pre-infusión.'
publishedDate: 2026-03-05
tags:
  - espresso
  - presion
  - temperatura
  - pre-infusion
phase: 2
lessonOrder: 3
isPremium: false
---

## Las variables que no controlas con el molino

En las lecciones anteriores nos enfocamos en dosis, molienda y ratio — las variables que controlas directamente como barista. Pero hay tres más que vienen de la máquina y que afectan profundamente tu extracción: presión, temperatura y pre-infusión. Entenderlas te permite sacar mucho más de tu equipo.

## Presión: los famosos 9 bares

El estándar de la industria para espresso es **9 bares de presión** (aproximadamente 130 PSI). Este número viene de los años 1960 cuando Faema diseñó la E61, la máquina que definió el espresso moderno. ¿Por qué 9? Porque a esa presión se logra un equilibrio entre velocidad de extracción, emulsión de aceites y producción de crema.

<details>
<summary>La historia detrás de los 9 bares — por qué ese número exacto</summary>

El número 9 no fue resultado de investigación científica deliberada. Fue **accidental**, pero el accidente ocurrió antes de la E61.

En 1946, **Achille Gaggia** introdujo la máquina de palanca con resorte. El pistón, la cámara y el tamaño de la palanca fueron diseñados por intuición práctica, no calculados para un objetivo técnico específico. El resorte simplemente generaba ~8-10 bares de presión — 9 como promedio natural. Resultó que a esa presión el agua emulsionaba los aceites del café y creaba una capa de espuma dorada encima: la crema. Nadie lo planeó; simplemente funcionó, y la industria lo adoptó.

Cuando Ernesto Valente diseñó la **Faema E61 en 1961**, no reinventó la presión — la replicó. La bomba eléctrica de la E61 fue diseñada para producir los mismos 9 bares que las palancas Gaggia ya habían establecido como estándar. Lo que sí fue genuinamente revolucionario en la E61 fue otra cosa: introdujo la **bomba eléctrica** (eliminando el esfuerzo físico del barista), la **pre-infusión automática** y el **termosifón** — un sistema de circulación continua de agua caliente que mantiene la temperatura del grupo estable sin necesidad de hacer flush antes de cada shot.

El diseño del grupo E61 fue tan bueno que sigue siendo estándar 60+ años después — máquinas modernas como la Lelit Bianca o la ECM Synchronika todavía usan grupos E61 o derivados directos.

En resumen: 9 bares es estándar porque una palanca de 1946 los producía por accidente mecánico, resultó ser un excelente punto de equilibrio, y la industria entera lo adoptó sin cuestionarlo.

</details>

### Qué hace la presión

La presión fuerza al agua a atravesar la cama de café compactada. Sin presión, el agua simplemente se sentaría encima del café y gotearia lentamente por gravedad (que es básicamente lo que hace un pour-over). A 9 bares, el agua penetra los poros del café molido fino de una forma que extrae compuestos que otros métodos no pueden alcanzar — especialmente los aceites insolubles que dan al espresso su cuerpo y textura únicos.

### Presión variable (pressure profiling)

Las máquinas modernas de alta gama permiten variar la presión durante la extracción. En lugar de mantener 9 bares constantes, puedes hacer algo como:

- **Ramp up:** Empezar a 3-4 bares e ir subiendo a 9. Esto permite una saturación más uniforme antes de la extracción completa.
- **Decline:** Empezar a 9 bares e ir bajando a 6. Reduce la sobre-extracción al final del shot.
- **Perfil tipo Londinium:** Subida gradual, pico a 9, descenso natural. Emula el comportamiento de las máquinas de palanca (lever).

Si tu máquina no tiene pressure profiling (la mayoría no lo tiene), no te preocupes — 9 bares constantes funciona perfectamente. Pero entender que la presión es una variable te ayuda a interpretar lo que pasa en tu shot: si tu manómetro marca menos de 8 bares durante la extracción, probablemente tu molienda es demasiado gruesa o tu dosis muy baja.

## Temperatura: el control fino del sabor

La temperatura del agua afecta qué compuestos se disuelven y a qué velocidad. Es tu herramienta de ajuste fino una vez que molienda y ratio están dialed-in.

### El rango de trabajo

- **88-92°C:** Ideal para tuestes oscuros. Menor temperatura = menos extracción de compuestos amargos.
- **92-94°C:** El rango medio, funciona para la mayoría de los cafés de tueste medio.
- **94-96°C:** Para tuestes claros que son densos y necesitan más energía para extraerse.

Cada grado importa. Un cambio de 2°C puede ser la diferencia entre un shot ácido y uno balanceado.

### Estabilidad térmica

Más importante que la temperatura absoluta es la **estabilidad**: que la temperatura se mantenga constante durante toda la extracción. Las máquinas baratas con termobloque tienen fluctuaciones de hasta 5°C durante un shot — esto produce extracción inconsistente donde parte del café se sub-extrae y parte se sobre-extrae.

Las máquinas manejan la estabilidad térmica de formas muy diferentes según su sistema de calentamiento. Desde termobloques (rápidos pero imprecisos) hasta grupos saturados (el gold standard), cada sistema tiene sus compromisos entre precio, estabilidad y conveniencia.

<details>
<summary>Los 5 sistemas de calderas — comparativa</summary>

**Termobloque:** Un bloque de metal con un canal por donde pasa el agua. Calienta rápido pero la temperatura fluctúa. Común en máquinas de entrada (Breville Bambino, De'Longhi). Funcional pero impreciso.

**Caldera única (single boiler):** Una caldera que se usa para espresso y vapor, alternando entre temperaturas. Tienes que esperar entre hacer espresso y vaporizar leche. Limitante pero la temperatura durante la extracción es más estable que un termobloque.

**Caldera única con PID:** Un controlador PID (Proportional-Integral-Derivative) mide constantemente la temperatura y ajusta la resistencia. Mejora dramáticamente la estabilidad. Muchas Rancilio Silvia se modifican con PID aftermarket por esta razón.

**Doble caldera:** Una caldera para espresso y otra para vapor. Puedes hacer espresso y vaporizar simultáneamente, cada una a su temperatura óptima. El estándar en máquinas prosumer y comerciales (Breville Dual Boiler, Profitec Pro 600, La Marzocco).

**Saturada (saturated group):** El grupo de extracción está conectado directamente a la caldera, manteniendo una temperatura extremadamente estable. La Marzocco GS3, Slayer, Synesso. El gold standard.

</details>

### Temperature surfing

Si tienes una máquina de caldera única sin PID, puedes mejorar la estabilidad con una técnica llamada "temperature surfing": activas brevemente la caldera, esperas a que la luz de temperatura se apague, esperas X segundos más, y extraes en el punto donde la temperatura es más estable. Cada máquina tiene su propio ritmo — necesitas aprender el de la tuya.

## Pre-infusión: el secreto del barista avanzado

La pre-infusión es una fase de baja presión antes de la extracción completa. En lugar de golpear el café con 9 bares inmediatamente, primero lo saturaste suavemente a 2-4 bares durante unos segundos.

### Por qué funciona

Cuando mojas la cama de café antes de aplicar presión completa:

1. **El CO2 se libera.** El café fresco tiene CO2 atrapado que crea turbulencia y channeling cuando el agua lo golpea con fuerza. La pre-infusión deja que el gas escape primero.
2. **La cama se satura uniformemente.** El agua tiene tiempo de distribuirse antes de que la presión la fuerce a través. Esto reduce enormemente el channeling.
3. **La extracción es más homogénea.** Menos canales = cada partícula de café se extrae de forma más parecida = mejor sabor.

Hay varias formas de lograr pre-infusión, desde la automática de un grupo E61 hasta técnicas manuales avanzadas como el blooming espresso de Scott Rao.

<details>
<summary>Tipos de pre-infusión — cuál tiene tu máquina</summary>

**Pre-infusión por presión de línea:** La máquina usa la presión del agua de tu casa (~2-3 bares) para saturar el café antes de activar la bomba. La E61 y muchas máquinas de palanca hacen esto naturalmente.

**Pre-infusión por bomba:** La bomba se activa a baja presión durante unos segundos antes de subir a 9 bares. Máquinas como la Breville Dual Boiler o la Decent DE1 lo permiten programar.

**Pre-infusión manual:** En máquinas de palanca, tú controlas la fase de pre-infusión levantando la palanca parcialmente. En máquinas con paddle (La Marzocco GS3 MP), puedes controlar el flujo manualmente.

**Blooming espresso:** Una técnica popularizada por Scott Rao: pre-infusión de 15-25 segundos a baja presión, pausa de 20-30 segundos para dejar que el CO2 escape completamente, y luego extracción completa. Produce shots extremadamente limpios y uniformes.

</details>

### Si tu máquina no tiene pre-infusión

Muchas máquinas de espresso caseras activan la bomba a 9 bares inmediatamente. Si la tuya es así, puedes simular pre-infusión: activa la extracción, espera 2-3 segundos a que veas las primeras gotas, pausa brevemente (si tu máquina lo permite), y luego continúa. No es lo mismo, pero ayuda.

## Lo que necesitas para esta lección

- Tu máquina de espresso (conoce qué tipo de caldera tiene)
- El manual de tu máquina — busca si tiene función de pre-infusión
- Un termómetro si quieres verificar la temperatura real de tu grupo (opcional pero revelador)

## Ejercicio práctico

Si tu máquina tiene control de temperatura:

1. Prepara tu receta estándar a 93°C y anota el sabor
2. Sube a 95°C manteniendo todo lo demás igual. ¿Qué cambió?
3. Baja a 91°C. ¿Qué cambió?
4. Anota las diferencias — entrenas tu paladar a conectar temperatura con perfil

Si tu máquina tiene pre-infusión:
1. Extrae con pre-infusión activada y sin ella (si se puede desactivar)
2. Compara: ¿cuál tiene más crema? ¿cuál sabe más limpio? ¿cuál tiene más consistencia entre shots?

## Conceptos clave de esta lección

- 9 bares es el estándar de presión; las máquinas avanzadas permiten variarla (pressure profiling)
- La temperatura es tu ajuste fino: más alta para tuestes claros, más baja para oscuros
- La estabilidad térmica importa más que la temperatura exacta — PID y doble caldera ayudan
- La pre-infusión satura el café antes de la extracción completa, reduciendo channeling
- Un cambio de 2°C puede transformar un shot de ácido a balanceado
- Conoce tu máquina: tipo de caldera, presión, opciones de pre-infusión
