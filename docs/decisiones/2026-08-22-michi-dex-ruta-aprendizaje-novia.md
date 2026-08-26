# Decisiones — Michi-dex: ruta de aprendizaje de la novia + reanudar Cata · 2026-08-22

> Generado por grill-me. Sirve para retomar sin re-preguntar lo ya decidido.
> Contexto: David retoma el proyecto Cata (RAG de café) tras ~2.5 meses; en paralelo tutorea a su novia (principiante) para que aprenda programación web con un proyecto real.

## Decisiones tomadas

- **Cata sigue siendo de David y a su ritmo**: reanuda Cata solo; el siguiente paso pendiente era write-a-prd (DAV-52). NO se mete a la novia al monorepo de Cata (evitar acoplar su ritmo de principiante a la ruta crítica del producto).
- **Proyecto de aprendizaje de la novia, decoplado**: ella tiene su PROPIO proyecto/repo. Como Cata es una API standalone, su web nunca bloquea el demo de Cata. Al final: si su web queda bien, la adoptan como UI de Cata; si no, se descarta — pero ella ya ganó el skill de conectar frontend con una API.
- **Encuadre elegido (Opción A, descubrimiento)**: empezar con enganche a ~2 h/semana y dejar que las sesiones se alarguen; meta llegar a 8 h/semana. Primero confirmar que le gusta; apuntar a "empleable / trabajo remoto" cuando suban las horas. (Su motivación real: título en telecomunicaciones, no le gusta su trabajo presencial, quiere remoto.)
- **Proyecto v1: "Michi-dex"** — catálogo mágico de gatos (Animal Crossing critterpedia + grimorio HP). Tema elegido por sus gustos: visual/creativa, le encantan los gatos.
- **API del hito: The Cat API** (imágenes de gatos, la más probada para principiantes). Verificada viva y gratis (ago-2026). Alterna descartada por ahora: HP-API.
- **Stack**: HTML + CSS + JavaScript vanilla. Sin framework, sin build. Deploy final a GitHub Pages (URL real que pueda presumir).
- **Pedagogía**: escribe el código a mano al principio. ChatGPT como EXPLICADOR (conceptos + desatorar bugs), NO como generador. Aún no usa Claude.
- **Tickets**: cada tramo entra como un ticket en Linear (workspace de David, al que ya la agregó). Aprende el flujo de tickets sobre su propio proyecto, bajo riesgo.
- **Tooling ya resuelto con David** (no gastar tiempo en setup): Windows, Cursor, Node, nvm, git + llave SSH, cuenta GitHub, PATH de Windows arreglado, ya clona repos, está en la org La Commune y en el Linear de David.

## Ruta (cada tramo = 1 ticket)

- Tramo 0 — "Mi nombre en una web": repo + index.html, abrir en navegador, commit/push.
- Tramo 1 — Primera tarjeta de gato a mano (img, nombre, descripción, casa de Hogwarts).
- Tramo 2 — CSS: se ve bonito (colores, Google Fonts, box model, flexbox).
- Tramo 3 — Galería responsive (CSS grid).
- Tramo 4 — Primer JS: botón "gato aleatorio" + toggle día/noche (variables, funciones, eventos, DOM).
- Tramo 5 — HITO: fetch a The Cat API + render dinámico (fetch, async/await, JSON). = mismo skill que el frontend de Cata.
- Extra — Deploy a GitHub Pages.

## Temas para próximos proyectos (banco de ideas de sus gustos)

Harry Potter / magia (HP-API), flores, K-pop, Animal Crossing, La Boticaria (Kusuriya — recetas/hierbas, guiño natural a Cata), Vampire Diaries / Crepúsculo.

## Preguntas abiertas

- Nombre y ubicación del repo de ella (org personal vs La Commune) — depende de: David.
- Cuándo apuntar el fetch de su web a la API de Cata — depende de: que Cata exista (write-a-prd/implementación).
- ¿Crear ya el repo semilla + los tickets de los tramos, o los arma ella para aprender? — depende de: David.

## Actualización 2026-08-22 (mismo día)
- **Repo**: DECIDIDO — vive en el GitHub PROPIO de Alondra (repo que ella ya creó). Las issues de los tramos van en ese repo (aprende issues de GitHub sobre lo suyo), no en Linear.
- **Nombre real de la novia**: Alondra.
- Pendiente: handle exacto del repo (usuario/repo) y si David tiene acceso de colaborador para crear las issues, o las crea ella.
