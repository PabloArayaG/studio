# Integración de Tracking (HubSpot + Microsoft Clarity)

## Pasos para integrar los snippets

1. Abre `index.html` en la raíz del proyecto.

2. **Pega el snippet de Clarity** dentro del `<head>` entre los comentarios:
   ```html
   <!-- CLARITY_SNIPPET_START -->
   <!-- Pegar aquí el código de Clarity -->
   <!-- CLARITY_SNIPPET_END -->
   ```

3. **Pega el snippet de HubSpot** antes del cierre de `</body>` entre los comentarios:
   ```html
   <!-- HUBSPOT_SNIPPET_START -->
   <!-- Pegar aquí el código de HubSpot -->
   <!-- HUBSPOT_SNIPPET_END -->
   ```

## Cómo funciona el tracking en SPA

En esta aplicación de página única (SPA), los pageviews se rastrean automáticamente en cada cambio de ruta mediante:

- **Hook personalizado**: `src/hooks/useAnalyticsOnRouteChange.js`
  - Escucha cambios en `pathname` y `search` usando React Router
  - Envía eventos a HubSpot y Clarity

- **HubSpot tracking**:
  - `window._hsq.push(['setPath', path])` → Actualiza la ruta actual
  - `window._hsq.push(['trackPageView'])` → Registra la vista de página

- **Clarity tracking**:
  - `window.clarity('event', 'route_change')` → Marca el cambio de ruta (opcional)

## Rutas disponibles

- `/` → Página principal (Home)
- `/gracias` → Página de agradecimiento (Thank You)

## Verificación

1. **HubSpot**:
   - Ve a tu cuenta de HubSpot
   - Asegúrate de que `lp.adereso.ai` esté incluido en Analytics/Reports
   - Verifica que el banner de consentimiento esté configurado si aplica

2. **Clarity**:
   - Ve a tu proyecto en Microsoft Clarity
   - Verifica que las sesiones se estén grabando correctamente
   - Revisa que los eventos `route_change` aparezcan en el timeline

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

