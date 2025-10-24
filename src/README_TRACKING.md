# Integración de Tracking (HubSpot)

## HubSpot ya integrado ✅

El snippet de HubSpot ya está configurado en `index.html`:
```html
<!-- HUBSPOT_SNIPPET_START -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/23480943.js"></script>
<!-- HUBSPOT_SNIPPET_END -->
```

## Cómo funciona el tracking en SPA

En esta aplicación de página única (SPA), los pageviews se rastrean automáticamente en cada cambio de ruta mediante:

- **Hook personalizado**: `src/hooks/useAnalyticsOnRouteChange.ts`
  - Escucha cambios en `pathname` y `search` usando React Router
  - Envía eventos automáticamente a HubSpot

- **HubSpot tracking**:
  - `window._hsq.push(['setPath', path])` → Actualiza la ruta actual
  - `window._hsq.push(['trackPageView'])` → Registra la vista de página

## Rutas disponibles

- `/` → Página principal (Home)
- `/gracias` → Página de agradecimiento (Thank You)

## Verificación

1. **HubSpot**:
   - Ve a tu cuenta de HubSpot
   - Asegúrate de que `lp.adereso.ai` esté incluido en Analytics/Reports
   - Verifica que el banner de consentimiento esté configurado si aplica
   - Revisa que las vistas de página se estén registrando correctamente

## Despliegue en Vercel

El archivo `vercel.json` ya está configurado para reescribir todas las rutas a `/`, lo que permite que el SPA funcione correctamente.

```bash
vercel --prod
```

## Notas importantes

- No instales librerías adicionales para tracking
- Los snippets se inyectan directamente en `index.html`
- El tracking de rutas es automático mediante React Router
- Los errores de tracking fallan silenciosamente para no romper la app

