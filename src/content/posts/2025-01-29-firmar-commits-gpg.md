---
title: 'Cómo firmar automáticamente tus commits en Git con GPG'
description: 'Guía completa para generar tu clave GPG, configurarla en Git y activar el firmado automático de commits.'
publishedDate: 2025-11-29
author: 'David San Luis Aguirre'
tags:
  - git
  - gpg
  - seguridad
  - desarrollo
  - github
---

## Firmar tus commits con GPG (GNU Privacy Guard)

### 1. Generar una clave GPG

```bash
gpg --full-generate-key
```

**¿Por qué?**  
Este comando genera un nuevo par de claves GPG (pública y privada).

**Opciones recomendadas:**

- **Tipo:** RSA y RSA
- **Tamaño:** 4096 bits (más seguro)
- **Expiración:** Puedes elegir 1 año o indefinido
- **Nombre y correo:** deben coincidir exactamente con los que usas en Git

---

### 2. Listar tus claves GPG

```bash
gpg --list-secret-keys --keyid-format=long
```

**¿Por qué?**  
Para obtener el ID de la clave que usaremos con Git.

**¿Qué buscar?**  
Una salida como esta:

```
/home/user/.gnupg/secring.gpg
------------------------------------
sec   4096R/6BF8308AAAABEA3A 2025-11-29
```

La parte después del slash (/) es tu clave: **6BF8308AAAABEA3A** → la necesitaremos más adelante.

---

### 3. Configurar Git para firmar automáticamente

Si ya tenías configuraciones previas que interfieren (como SSH):

```bash
git config --global --unset gpg.format
```

Ahora agrega tu clave:

```bash
git config --global user.signingkey TU_CLAVE_ID
```

_(Ejemplo: 6BF8308AAAABEA3A)_

Habilita el firmado automático:

```bash
git config --global commit.gpgSign true
```

Asegura que Git use gpg:

```bash
git config --global gpg.program gpg
```

Configura tu nombre y correo:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-correo@example.com"
```

💡 **Importante:** Asegúrate de que este correo coincida con el de la clave GPG y el usado en GitHub.

---

### 4. Exportar tu clave pública (para añadirla a GitHub)

```bash
gpg --armor --export tu-correo@example.com
```

**¿Por qué?**  
Esto genera tu clave pública en texto plano, la cual puedes subir a tu cuenta de GitHub en:  
**Settings → SSH and GPG Keys → New GPG Key**

---

### 5. Verifica que Git está firmando correctamente

Haz un commit sin usar `-S` manualmente. Luego verifica con:

```bash
git log --show-signature
```

Deberías ver algo como:

```
gpg: Firmado el Sat Nov 29 14:57:12 2025 CST
gpg:                usando RSA clave A3F9D21C7B8E44F119C52EA0D7F4419B3E6A8F12
gpg: Imposible comprobar la firma: No hay clave pública

```

---

### 6. Ver configuración actual (opcional)

```bash
git config --global --list
```

Te mostrará algo similar a:

```
user.name=yourUserName
user.email=tu-correo@example.com
user.signingkey=6BF8308AAAABEA3A
commit.gpgSign=true
gpg.program=gpg
```
