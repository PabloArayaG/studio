import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackHubSpotPageview } from '../analytics/hubspot'

export default function useAnalyticsOnRouteChange() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    const path = `${pathname}${search || ''}`
    // HubSpot: setPath + trackPageView
    trackHubSpotPageview(path)
  }, [pathname, search])
}

