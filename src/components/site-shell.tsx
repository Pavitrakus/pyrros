"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [{ href: "/story", label: "Our story" }, { href: "/grants", label: "Grants" }, { href: "/people", label: "People" }];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <>
    <header className="site-header">
      <div className="header-inner wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Pyrros home">pyrros<span>.</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}</nav>
        <a className="header-cta" href="https://www.instagram.com/bytteforgespace/" target="_blank" rel="noopener noreferrer">Get in touch <span aria-hidden>↗</span></a>
        <button className={`menu-button ${open ? "is-open" : ""}`} type="button" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><span /><span /><span /></button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<span>↗</span></Link>)}<a href="https://www.instagram.com/bytteforgespace/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Get in touch<span>↗</span></a></nav>}
    </header>
    {children}
    <footer className="site-footer"><div className="wrap footer-top"><div><div className="footer-kicker">From Kanpur, outward.</div><h2>Something worth<br /><span>starting?</span></h2><a href="https://www.instagram.com/bytteforgespace/" target="_blank" rel="noopener noreferrer" className="button button-warm">Tell us about it <span aria-hidden>↗</span></a></div><div className="footer-links"><div><span>Explore</span><Link href="/story">Our story</Link><Link href="/grants">Grants</Link><Link href="/people">People</Link></div><div><span>Find us</span><a href="https://www.instagram.com/bytteforgespace/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://hackclub.com/map/" target="_blank" rel="noopener noreferrer">Hack Club map ↗</a></div></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Pyrros. Formerly ByteForge.</span><span>Made in Kanpur, India.</span></div><div className="footer-giant" aria-hidden="true">pyrros.</div></footer>
  </>;
}
