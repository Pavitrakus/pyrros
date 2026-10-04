import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <Image className="hero-image" src="/pyrros/hero.png" alt="A bronze hand holds a glowing ember above a maker's worktable" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content wrap">
          <div className="hero-overline"><span className="live-dot" /> Born in Kanpur, 2024 <span className="hero-overline-line" /> Formerly ByteForge</div>
          <h1>Give the first<br /><em>fire.</em></h1>
          <p>We bring young builders into the room and back the ideas they cannot leave alone.</p>
          <div className="hero-actions"><Link href="/grants" className="button button-warm">Explore the grants <span aria-hidden>↗</span></Link><Link href="/story" className="text-link light">Meet Pyrros <span aria-hidden>↗</span></Link></div>
        </div>
        <div className="hero-bottom wrap"><span>01 / The beginning</span><span>Scroll to explore ↓</span></div>
      </section>

      <section className="intro-section wrap section-pad"><div className="section-index">01 / Why we exist</div><div className="intro-copy"><h2>Potential usually arrives <span>before permission.</span></h2><div className="intro-bottom"><p>A student with a half-built prototype should have a place to take it. Pyrros gives that work an early push through small grants, ambitious gatherings, and people who take it seriously.</p><Link href="/grants" className="circle-arrow" aria-label="Explore Pyrros grants">↗</Link></div></div></section>

      <section className="grant-band"><div className="wrap grant-band-inner"><div><div className="section-index warm">02 / The first grant</div><h2>₹5,000<span> to </span>₹20,000</h2></div><div className="grant-band-side"><p>For high school and college builders with a project worth starting, finishing, or taking further.</p><Link href="/grants" className="button button-outline">How it works <span aria-hidden>↗</span></Link></div></div></section>

      <section className="record-section wrap section-pad"><div className="section-head"><div><div className="section-index">03 / The record</div><h2>Work speaks.</h2></div><Link href="/story" className="text-link">Read the full story <span aria-hidden>↗</span></Link></div><div className="record-grid">
        <article className="record-card record-card-image"><Image src="/pyrros/worktable.png" alt="A small prototype, tools, and chai on a maker's worktable" fill sizes="(max-width: 800px) 100vw, 50vw" /><div className="record-card-image-shade" /><div className="record-card-top">2024 · Kanpur</div><div className="record-card-bottom"><h3>It started with a room full of builders.</h3><p>ByteForge began in Kanpur. Hack Club helped fund the early hackathons and workshops.</p></div></article>
        <article className="record-card record-card-paper"><div className="record-card-top">2025 · IIT Kanpur</div><div className="record-card-number">04<span>days</span></div><div className="record-card-bottom"><h3>A house built for making.</h3><p>Four days together at IIT Kanpur, with the time and company to push ideas forward.</p></div></article>
        <article className="record-card record-card-rust"><div className="record-card-top">2026 · Execron 1.0</div><div className="record-card-number">$75k<span>+</span></div><div className="record-card-bottom"><h3>Resources in builders&apos; hands.</h3><p>Credits from OpenAI, Anthropic, Emergent, Lovable, and Supabase, alongside $2k in cash prizes and more.</p></div></article>
      </div></section>

      <section className="manifesto-section"><div className="wrap manifesto-inner"><div className="section-index warm">04 / What comes next</div><p>Some ideas need a lab. Some need a weekend. Some need <span>₹5,000 and someone to say yes.</span></p><Link href="/grants" className="button button-warm">Bring us your idea <span aria-hidden>↗</span></Link></div></section>

      <section className="people-teaser wrap section-pad"><div><div className="section-index">05 / The people</div><h2>A small team.<br />A wide table.</h2></div><div className="people-teaser-right"><p>Founders, organizers, and builders who have kept the doors open since ByteForge.</p><div className="name-line">Pavitra Kushwaha <span>·</span> Aditya Bhatia <span>·</span> Tanish Anand</div><Link href="/people" className="text-link">Meet the team <span aria-hidden>↗</span></Link></div></section>
    </main>
  );
}
