---
title: Ionic SQLite TypeORM
description: Integra SQLite en tu aplicación de ionic
publishedDate: 2024-10-18
tags:
  - documentation
---

En este documento se explica como poder integrar SQLite a tu aplicación de Ionic junto con TypeORM, solamente para las plataformas iOS y Android, si te interesa saber como implementarlo en otras plataformas como Web o Electron revisa la [documentación](https://github.com/capacitor-community/sqlite/blob/master/docs/TypeORM-Usage-From-5.6.0.md) oficial

## Dependencias necesarias
Estas son las dependencias necesarias para poder hacer la integración
```shell
npm install @capacitor-community/sqlite 
npm install typeorm@latest
npm install sqlite3


npm install @types/node --save-dev 
npm install @types/es6-shim
npm install @types/events
npm install es6-shim  

```
Habilita los decoradores como @Injectable(), @Entity(), @Column() y la manipulación de metadatos en tiempo de ejecución. En TypeORM, se usa para definir la estructura de entidades y columnas que representan las tablas de la base de datos.



```shell 

npm install reflect-metadata --save

```
Agrega reflect-metadata en el archivo principal de tu aplicación o en algún lugar que se ejecute antes de cualquier otro código
```javascript
import "reflect-metadata"
```
Si en algun punto encuentras problemas instala alguna de las siguientes dependencias
```shell
npm install @types/node --save-dev 
npm install @types/es6-shim
npm install @types/events
npm install es6-shim  
```

```shell tsconfig.ts
"compilerOptions": {
	"types": ["node"],
	"skipLibCheck": true,
	"emitDecoratorMetadata": true,
  "experimentalDecorators": true,

}
```



## Estructura de carpetas 
La estructura del directorio para TypeOrm puede ser elaborada de la siguiente manera, independientemente del framework usado

![DavidSan logo](@/assets/screenshots/sqlite-typeorm-structure.png)


To add a new page to Nordlys, navigate to the `src/pages` and create a new Markdown file. Most likely you'll want the page to use the default layout, so set that in the frontmatter. After that, you can start writing your content.

```markdown src/pages/faq.md
---
layout: '@/layouts/PageLayout.astro'
title: FAQ
---

## How can I contact you?

You can contact me at ...
```

Go to `localhost:4321/faq` in your browser, and you will now see your newly created FAQ page! The frontmatter of a page is defined as follows.

```ts
// non-set properties default to the properties set in the theme config
type PageFrontmatter = {
  title?: string // tab title
  author?: string // meta
  description?: string // meta
  canonicalURL?: string // meta
  openGraphImage?: string | HTMLAttributes<'img'> // relative URL to image in public folder or local asset
  publishedDate?: Date // meta
  scrollProgress?: boolean // bar indicating scroll location on top of page
  activeHeaderLink?: string // title or href of the active header link
  scrollToTop?: boolean // "Back to top" button when having scrolled far down
}
```

## Writing a Blog Post

Writing a blog post is essentially the same as adding a new page, with slightly different frontmatter. You can follow the same procedure, except you'll create the file in the `src/content/posts` directory.

```markdown src/content/posts/i-learned-today.md
---
title: I learned something
description: A quick update on the new things I learned
publishedDate: 2024-10-06
tags:
  - programming
  - TIL
---

So today, I started learning a new programming language. It is really cool because ...
```

Navigate to `localhost:4321/posts`, and your new post will have appear there. Clicking on it will show the content you wrote, nicely rendered as text! The frontmatter of a post is defined as follows.

```ts
type PostFrontmatter = {
  title: string
  author?: string // defaults author set in theme config
  description: string
  publishedDate: Date
  draft?: boolean // defaults to false
  canonicalURL?: string // meta
  openGraphImage?: string | HTMLAttributes<'img'> // either URL to image in public folder or local asset
  tags?: string[] // defaults to []
}
```

## Adding a New Project

To add a new project in Nordlys, simply create a file in the `src/content/projects` directory. Set the project properties, write a short description, and you're done!

```markdown src/content/projects/awesome-app.md
---
title: Awesome App
startDate: 2023-10-06
endDate: 2024-10-06
tags:
  - HTML
  - CSS
  - TypeScript
---

I developed an awesome app, using `HTML`, `CSS` and `TypeScript`! The app can ...
```

Take a look at `localhost:4321/projects`, and your new project should be listed there! The frontmatter of a project is defined as follows.

```ts
type ProjectFrontmatter = {
  title: string
  url?: string // can be relative or absolute
  startDate: Date
  endDate?: Date // shows "Now" if not set
  tags?: string[] // defaults to []
}
```

Note that projects don't generate a dedicated page, but are just listed on the `/projects` page.
