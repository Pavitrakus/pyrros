import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "People", description: "The people behind Pyrros, formerly ByteForge." };

const founders = ["Pavitra Kushwaha", "Aditya Bhatia", "Tanish Anand"];
const core = ["Krishika Shadhapuri", "Krishna Rathaur"];
const execron = ["Shresth Agrawal", "Krishika Shadhapuri", "Mradul Umrao", "Tiya Mittal", "Sara Gogia", "Krishna Rathaur", "Saakshi"];

export default function PeoplePage() { return <main id="main"><section className="page-hero wrap people-hero"><div className="section-index warm">Pyrros / People</div><h1>The people<br /><em>in the room.</em></h1><div className="page-hero-bottom"><p>Everything here began with people who showed up, made things happen, and brought others in.</p><span className="page-hero-mark">✳</span></div></section>
  <section className="people-section wrap"><div className="people-group-head"><div className="section-index">01 / Founders</div><p>From the first ByteForge gathering to Pyrros.</p></div><div className="people-list">{founders.map((name, i) => <div className="person-row" key={name}><span>0{i + 1}</span><h2>{name}</h2><span>Co-founder</span></div>)}</div></section>
  <section className="people-section wrap"><div className="people-group-head"><div className="section-index">02 / Core team</div><p>The hands that keep the work moving.</p></div><div className="people-list">{core.map((name, i) => <div className="person-row" key={name}><span>0{i + 1}</span><h2>{name}</h2><span>Pyrros</span></div>)}</div></section>
  <section className="people-section wrap final-group"><div className="people-group-head"><div className="section-index">03 / Execron 1.0</div><p>The event team at IIT Kanpur.</p></div><div className="event-names">{execron.map(name => <span key={name}>{name}</span>)}</div></section>
  <section className="wrap next-page"><span>Have something worth making?</span><Link href="/grants">Explore the grants <span aria-hidden>↗</span></Link></section>
  </main> }
