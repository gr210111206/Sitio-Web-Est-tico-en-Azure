# Sitio Web Estático en Azure

Práctica 2 — Unidad 2 · Administración de Cómputo en la Nube.
Sitio web estático (HTML/CSS/JS) hospedado en **Azure Static Web Apps** con despliegue automático **CI/CD** mediante **GitHub Actions**.

## Estructura

```
sitio-azure/
├── index.html
├── css/styles.css
├── js/main.js
├── .gitignore
├── README.md
└── .github/workflows/azure-static-web-apps.yml   # Pipeline CI/CD
```

## Cómo desplegarlo (ruta recomendada)

### 1. Subir el código a GitHub
```bash
cd sitio-azure
git init
git add .
git commit -m "Sitio web estático inicial"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/sitio-azure.git
git push -u origin main
```

### 2. Crear el recurso en Azure
1. Entra a [portal.azure.com](https://portal.azure.com) → **Crear recurso** → **Static Web App**.
2. Elige suscripción, grupo de recursos y plan **Free**.
3. En *Deployment details* selecciona **GitHub**, autoriza y elige tu repositorio y la rama `main`.
4. Build presets: **Custom** → App location `/`, Api location vacío, Output location vacío.
5. Al crear, Azure añade automáticamente el workflow y el secret `AZURE_STATIC_WEB_APPS_API_TOKEN` en tu repo.
   > Si usas el YAML incluido aquí, copia el token a *GitHub → Settings → Secrets → Actions*.

### 3. Gestión de costos (Azure Budget)
En el portal: **Cost Management + Billing** → **Budgets** → **Add** → define un monto (p. ej. $5 USD) y una alerta al 80%.

### 4. Probar el ciclo CI/CD
Haz un cambio visible en `index.html`, luego:
```bash
git add . && git commit -m "Cambio de prueba" && git push
```
El sitio público se actualizará solo en 1-2 minutos, sin tocar el portal de Azure.

### 5. Monitoreo
En el recurso de Static Web App → sección **Monitoring / Metrics** para ver peticiones, ancho de banda y tiempos de respuesta.

## Probar en local
Abre `index.html` directamente, o levanta un servidor simple:
```bash
python -m http.server 8080
```
Y visita http://localhost:8080
