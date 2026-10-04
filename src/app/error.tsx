"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return <main id="main" className="wrap page-hero"><div className="section-index warm">Something went wrong</div><h1>We lost the <em>thread.</em></h1><button className="button button-warm" type="button" onClick={reset}>Try again <span aria-hidden>↗</span></button></main>;
}
