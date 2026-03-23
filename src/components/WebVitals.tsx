'use client'
 
import { useReportWebVitals } from 'next/web-vitals'
 
export function WebVitals() {
  useReportWebVitals((metric) => {
    // In development, log the metrics
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vital:', metric.name, metric.value.toFixed(2), metric.label);
    }
    
    // Example: Send to Vercel Analytics if configured
    // window.va?.('web-vital', metric);
  })
 
  return null
}
