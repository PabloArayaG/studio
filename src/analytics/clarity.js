// El snippet de Clarity expone window.clarity
export function markClarityRouteChange() {
  try {
    if (typeof window.clarity === 'function') {
      window.clarity('event', 'route_change')
    }
  } catch (e) {
    // opcional: log silencioso
  }
}

