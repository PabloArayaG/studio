import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackHubSpotPageview } from '../analytics/hubspot'
import { markClarityRouteChange } from '../analytics/clarity'

export default function useAnalyticsOnRouteChange() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    const path = `${pathname}${search || ''}`
    // HubSpot: setPath + trackPageView
    trackHubSpotPageview(path)
    // Clarity: opcional (si no detecta cambios automáticamente)
    markClarityRouteChange()
  }, [pathname, search])
}

