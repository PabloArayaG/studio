// En tiempo de ejecución, el snippet de HubSpot inyectará window._hsq
export function trackHubSpotPageview(path) {
  try {
    window._hsq = window._hsq || []
    if (path) window._hsq.push(['setPath', path])
    window._hsq.push(['trackPageView'])
  } catch (e) {
    // opcional: log silencioso
  }
}

