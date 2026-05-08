---
title: 'Bonus: Master Your Extraction — What Your Shot Is Telling You'
description: 'The rat tail, the salami technique, commercial coffee rescue, and why the single-wall basket changes everything. Interactive Phase 2 bonus.'
publishedDate: 2026-04-18
tags:
  - espresso
  - extraction
  - diagnostics
  - technique
  - bonus
isBonus: true
isPremium: false
draft: false
---

You completed Phase 2. You know how to measure a shot, dial in, and read channeling signals. Now let's go one level deeper: understanding the temporal anatomy of your extraction — what happens in each second — and how to use that knowledge to salvage even the most mediocre coffee.

This bonus has four interactive sections. You can go through them in order or jump directly to what interests you most.

---

## Part 1 — The Rat Tail: Your Most Powerful Visual Diagnostic

When you use a bottomless (naked) portafilter, you can watch the bottom of the basket in real time. The flow tells you everything before you taste the shot.

The ideal flow is called the **rat tail**: a thin, symmetrical stream that emerges from the center of the basket, dark at first and gradually clearing to golden amber.

<div class="extraction-visualizer" id="rat-tail-demo">
  <div class="ev-header">
    <h3 class="ev-title">Espresso flow simulator</h3>
    <p class="ev-subtitle">Select a scenario to see what happens in the portafilter</p>
  </div>

  <div class="ev-scenarios">
    <button class="ev-btn ev-btn--active" data-scenario="perfect">
      Perfect rat tail
    </button>
    <button class="ev-btn" data-scenario="channeling">
      Channeling
    </button>
    <button class="ev-btn" data-scenario="gushing">
      Too fast
    </button>
    <button class="ev-btn" data-scenario="choked">
      Too slow
    </button>
  </div>

  <div class="ev-stage">
    <div class="ev-basket">
      <div class="ev-basket-label">Basket bottom (naked view)</div>
      <div class="ev-flow-container" id="flow-container">
        <div class="ev-drop-zone" id="drop-zone"></div>
      </div>
    </div>
    <div class="ev-info-panel" id="info-panel">
      <div class="ev-info-scenario" id="info-scenario">Perfect rat tail</div>
      <div class="ev-info-diagnosis" id="info-diagnosis">Even extraction</div>
      <div class="ev-info-description" id="info-description">
        The stream emerges from the center, thin and symmetrical. The color starts dark and gradually clears to golden amber. Constant flow without interruptions.
      </div>
      <div class="ev-info-action" id="info-action">
        <strong>What to do:</strong> Nothing. This is the goal. Note your parameters so you can repeat it.
      </div>
    </div>
  </div>

  <div class="ev-timeline">
    <div class="ev-timeline-label">Extraction timeline</div>
    <div class="ev-timeline-bar">
      <div class="ev-timeline-segment ev-seg--pre"></div>
      <div class="ev-timeline-segment ev-seg--head"></div>
      <div class="ev-timeline-segment ev-seg--body"></div>
      <div class="ev-timeline-segment ev-seg--tail"></div>
    </div>
    <div class="ev-timeline-labels">
      <span>0s</span><span>Pre</span><span>Head</span><span>Body</span><span>Tail</span><span>30s</span>
    </div>
  </div>
</div>

### Video examples — rat tail vs. channeling

<div class="video-row">
  <div class="video-block">
    <div class="video-label">Rat tail — extraction 1</div>
    <div class="video-short">
      <iframe
        src="https://www.youtube.com/embed/6PZAW0F_qn8?rel=0&modestbranding=1"
        title="Perfect rat tail — extraction 1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
  <div class="video-block">
    <div class="video-label">Rat tail — extraction 2</div>
    <div class="video-short">
      <iframe
        src="https://www.youtube.com/embed/EHiv_9sV0Pc?rel=0&modestbranding=1"
        title="Perfect rat tail — extraction 2"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
  <div class="video-block">
    <div class="video-label">Channeling — what to avoid</div>
    <div class="video-short">
      <iframe
        src="https://www.youtube.com/embed/ozthKLF16NA?rel=0&modestbranding=1"
        title="Channeling in espresso"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</div>

### What each flow type means

**Rat tail** — Even extraction. Water passes homogeneously through the entire coffee bed. Each particle contributes in a balanced way.

**Channeling** — Water found a path of least resistance (crack in the puck, uneven distribution, tilted tamping) and concentrates there. The channeled zones over-extract, the rest under-extracts. Result: a shot that is bitter and acidic at the same time. WDT and level tamping is the fix.

**Fast flow** — Grind is too coarse or dose is insufficient. Water passes without enough resistance. Guaranteed under-extraction. Grind finer as the first adjustment.

**Slow flow** — Grind is too fine or dose is excessive. Water cannot pass properly. Over-extraction of the little that gets through. Grind coarser.

---

## Part 2 — The Salami Technique: Taste Every Moment of Your Extraction

The **salami technique** (or salami shot) is the most revealing exercise you can do as a home barista. The name comes from the idea of slicing your extraction into segments, like a salami, to taste what each stage has to offer.

<div class="salami-explorer" id="salami-explorer">
  <div class="se-header">
    <h3 class="se-title">Extraction phase explorer</h3>
    <p class="se-subtitle">Click on each phase to discover what you're extracting</p>
  </div>

  <div class="se-shot-diagram">
    <div class="se-phase se-phase--pre" data-phase="pre" tabindex="0">
      <div class="se-phase-bar"></div>
      <div class="se-phase-label">Pre-infusion</div>
      <div class="se-phase-time">0 – 6s</div>
    </div>
    <div class="se-phase se-phase--head" data-phase="head" tabindex="0">
      <div class="se-phase-bar"></div>
      <div class="se-phase-label">Head</div>
      <div class="se-phase-time">6 – 12s</div>
    </div>
    <div class="se-phase se-phase--body" data-phase="body" tabindex="0">
      <div class="se-phase-bar"></div>
      <div class="se-phase-label">Body</div>
      <div class="se-phase-time">12 – 25s</div>
    </div>
    <div class="se-phase se-phase--tail" data-phase="tail" tabindex="0">
      <div class="se-phase-bar"></div>
      <div class="se-phase-label">Tail</div>
      <div class="se-phase-time">25 – 30s</div>
    </div>
  </div>

  <div class="se-detail-panel" id="se-detail">
    <div class="se-detail-placeholder">
      Select a phase to explore it
    </div>
  </div>
</div>

### The experiment on video

<div class="video-block video-block--wide">
  <div class="video-label">Salami technique — reference demonstration</div>
  <div class="video-wide">
    <iframe
      src="https://www.youtube.com/embed/_yIpi5KPUys?rel=0&modestbranding=1"
      title="Salami technique — reference demonstration"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <p class="video-caption">This video uses 12 cups switching every 5 seconds — finer resolution than the 4-cup exercise we do here, but useful to see the complete gradual shift of the extraction.</p>
</div>


### Why this matters

The salami exercise teaches you something fundamental: **your shot is not a homogeneous liquid**. It's a sequence where different compounds dissolve at different times. When you taste each phase separately, you instantly understand why a "bitter" shot is different from an "acidic" one — it's not the same coffee, it's the same coffee at different moments.

<details>
<summary>How to run the salami experiment at home</summary>

You'll need 4 small cups (shot glasses work well). The process:

1. Prepare your normal recipe and start the extraction
2. The first seconds of flow (before significant liquid comes out, if you have pre-infusion) go into the first cup
3. The next seconds of dark flow (the head) go into the second cup
4. The middle phase — the body, when flow is golden amber — goes into the third cup. This is the longest part
5. The last seconds before it blonds out completely (the tail) go into the fourth cup
6. Taste each one in order. Let them cool slightly — heat masks defects

What you'll notice: the first cup is almost undrinkable — acidic, intense, aggressive. The last is watery and bitter. The middle one is where everything good lives. This isn't opinion — it's chemistry.

**Practical note:** Don't do this with every shot of the day. It's a diagnostic and educational exercise, not a production technique. Do it once or twice to internalize the knowledge, then apply it by adjusting your cut times.

</details>

---

## Part 3 — Commercial Coffee Rescue

Here's one of the most counterintuitive techniques in espresso: you can make something genuinely tasty with dark, commercial coffee if you understand exactly what you're doing.

<div class="rescue-guide" id="rescue-guide">
  <div class="rg-header">
    <h3 class="rg-title">Rescue guide: commercial coffee</h3>
    <p class="rg-subtitle">Got supermarket coffee? Get the best out of it</p>
  </div>

  <div class="rg-problem">
    <div class="rg-problem-title">The problem with dark coffee</div>
    <div class="rg-problem-content">
      Very dark roasts (French roast, Italian roast, or what most supermarkets sell) have a very different extraction profile from specialty coffee:
      <ul>
        <li>The <strong>head</strong> is brutal — bitter, burnt, aggressive</li>
        <li>The <strong>body</strong> still contains sweetness from caramelization and the bean's natural body</li>
        <li>The <strong>tail</strong> is bitter and watery at the same time</li>
      </ul>
      The mistake most people make: extract the full shot and then complain it tastes bitter.
    </div>
  </div>

  <div class="rg-steps">
    <div class="rg-step" data-step="1">
      <div class="rg-step-number">1</div>
      <div class="rg-step-content">
        <div class="rg-step-title">Identify your target ratio</div>
        <div class="rg-step-text">With dark coffee, work with a shorter ratio: 1:1.5 to 1:1.8 instead of the standard 1:2. If you use 18g, cut at 27–32g of liquid instead of 36g. The body is more concentrated and you avoid entering the bitter tail zone.</div>
      </div>
    </div>
    <div class="rg-step" data-step="2">
      <div class="rg-step-number">2</div>
      <div class="rg-step-content">
        <div class="rg-step-title">Discard the first seconds (the head)</div>
        <div class="rg-step-text">If your machine has pre-infusion, use it. If not, collect the full shot and discard the first 3–5ml before serving. Alternatively, slightly tilt the cup so the first milliliters fall to the side.</div>
      </div>
    </div>
    <div class="rg-step" data-step="3">
      <div class="rg-step-number">3</div>
      <div class="rg-step-content">
        <div class="rg-step-title">Cut before blonding</div>
        <div class="rg-step-text">Watch the flow. As soon as the color shifts from golden amber to lighter or blond (blonding), cut the extraction. Don't wait for the full time. Blonding indicates the pleasant compounds have already passed.</div>
      </div>
    </div>
    <div class="rg-step" data-step="4">
      <div class="rg-step-number">4</div>
      <div class="rg-step-content">
        <div class="rg-step-title">Lower temperature 2–3°C</div>
        <div class="rg-step-text">Dark coffee already has pre-caramelized compounds that extract more easily. A lower temperature (91–93°C instead of 93–95°C) extracts the sweet notes without pulling the heavy bitter compounds that dissolve at high temperature.</div>
      </div>
    </div>
    <div class="rg-step" data-step="5">
      <div class="rg-step-number">5</div>
      <div class="rg-step-content">
        <div class="rg-step-title">Taste the result</div>
        <div class="rg-step-text">With these modifications, a commercial coffee can surprise you: chocolatey, full-bodied, round, without the aggressive bitterness. It won't compete with a well-roasted specialty coffee, but you'll be getting the best it has to offer.</div>
      </div>
    </div>
  </div>

  <div class="rg-calculator">
    <div class="rg-calc-title">Cut calculator by ratio</div>
    <div class="rg-calc-row">
      <label class="rg-calc-label">Dose (g)</label>
      <input type="number" class="rg-calc-input" id="dose-input" value="18" min="10" max="25" />
    </div>
    <div class="rg-calc-row">
      <label class="rg-calc-label">Coffee type</label>
      <select class="rg-calc-select" id="coffee-type">
        <option value="commercial">Commercial / Dark roast</option>
        <option value="specialty">Specialty / Medium roast</option>
        <option value="light">Specialty / Light roast</option>
      </select>
    </div>
    <div class="rg-calc-result" id="calc-result">
      <div class="rg-calc-result-row">
        <span>Target yield</span>
        <strong id="result-yield">27 – 32g</strong>
      </div>
      <div class="rg-calc-result-row">
        <span>Ratio</span>
        <strong id="result-ratio">1:1.5 – 1:1.8</strong>
      </div>
      <div class="rg-calc-result-row">
        <span>Suggested temperature</span>
        <strong id="result-temp">91 – 93°C</strong>
      </div>
      <div class="rg-calc-result-row">
        <span>Cut strategy</span>
        <strong id="result-cut">Cut at first blonding</strong>
      </div>
    </div>
  </div>
</div>


---

## Part 4 — Single Wall vs. Double Wall Basket: Why Your Filter Matters

<details>
<summary>What is the double-wall basket and why do most cheap machines include it?</summary>

The **double-wall basket** (also called pressurized filter) has two layers of metal with a small hole between them. What it does is artificial: regardless of how you grind or extract, the water passes through that small hole and generates constant pressure. The visual result is a crema that looks nice but isn't real — it's bubbles created by mechanical pressure, not by coffee oils.

**Why it exists:** Entry-level machines include them because they forgive mistakes. With a double-wall basket you can use poorly ground supermarket coffee and still get something that looks like espresso. It's accessible for people who don't want to learn technique.

**The problem:** It hides everything. You can't diagnose anything. Channeling, distribution, ratio, temperature — none of it is visible in the result because the double wall artificially levels everything out.

</details>

<details>
<summary>The single-wall basket: why it's the professional standard</summary>

The **single-wall basket** (unpressurized) doesn't have that trick. Water passes directly through the coffee bed and exits through the holes in the bottom. This means:

- The crema you see is **real** — it comes from coffee oils dissolved under pressure
- The flow tells you exactly how your extraction is going (this is where the rat tail lives)
- Technique errors are visible and immediately correctable
- The flavor is more complex, with more body, with nuances that the double wall flattens

**The catch:** It requires correct grind, correct dose, proper distribution and tamping. If something fails, you see it and taste it. That's precisely why you'll learn faster with it.

If your machine includes both basket types, switch to the single wall now. If you only have a double wall, consider buying a compatible single-wall basket (usually $8–20 USD, make sure it's 58mm).

</details>

<details>
<summary>What is the puck screen and how does it improve any basket?</summary>

The **puck screen** is a thin perforated metal disc you place on top of the ground coffee, before inserting the portafilter into the machine.

**What it does:** Distributes the water from the machine's shower screen more evenly across the entire puck surface. This reduces channeling caused by uneven water jets.

**Benefits:** Less channeling from the surface, cleaner puck removal, more even extraction without recipe changes.

**Cost:** $10–25 USD. One of the highest-impact, lowest-cost improvements you can make. The puck screen doesn't replace good WDT distribution — it's a complement, not a substitute.

</details>


---

## Practical Exercise: The Three-Shot Experiment

This exercise integrates everything you learned in this bonus. You need 30–45 minutes and 3–4 coffee doses.

**Shot 1 — Baseline:** Make your normal recipe. Watch the flow. Note the flavor. This is your reference point.

**Shot 2 — The salami:** Divide the extraction into three cups (head / body / tail). Taste each one. Identify at what moment your shot is good and at what moment it falls apart.

**Shot 3 — Body only:** Based on what you learned in shot 2, adjust your cut time to stay only in the zone that tasted good. If the head was too aggressive, give more time to pre-infusion. If the tail ruined it, cut earlier.

**Shot 4 (optional) — Commercial coffee application:** If you have dark or commercial coffee, apply the Part 3 strategy. Compare with shot 3.


---

<style>
/* ── Video embeds ── */
.video-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1.25rem 0;
}
@media (max-width: 700px) { .video-row { grid-template-columns: 1fr; } }

.video-block { display: flex; flex-direction: column; gap: 0.5rem; }
.video-block--wide { margin: 1.25rem 0; }

.video-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-text-muted, #888);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.video-short {
  position: relative;
  width: 100%;
  padding-bottom: 177.78%;
  background: color-mix(in srgb, var(--color-accent) 6%, var(--color-bg));
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--color-accent) 15%, transparent);
}
.video-short iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-wide {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  background: color-mix(in srgb, var(--color-accent) 6%, var(--color-bg));
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--color-accent) 15%, transparent);
}
.video-wide iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-caption {
  font-size: 0.78rem;
  color: var(--color-text-muted, #888);
  margin-top: 0.4rem;
  line-height: 1.5;
}

/* ── Media placeholders ── */
.media-grid { display: grid; gap: 1rem; margin: 1.25rem 0; }
.media-grid--1 { grid-template-columns: 1fr; max-width: 400px; }
.media-grid--2 { grid-template-columns: repeat(2, 1fr); }
.media-grid--3 { grid-template-columns: repeat(3, 1fr); }
@media (max-width: 640px) {
  .media-grid--1, .media-grid--2, .media-grid--3 { grid-template-columns: 1fr; }
}
.media-placeholder {
  border: 1.5px dashed color-mix(in srgb, var(--color-accent) 35%, transparent);
  border-radius: 10px; padding: 1.5rem 1rem;
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 0.6rem; text-align: center;
  background: color-mix(in srgb, var(--color-accent) 4%, var(--color-bg));
  min-height: 140px; transition: border-color 0.2s, background 0.2s;
}
.media-placeholder:hover {
  border-color: color-mix(in srgb, var(--color-accent) 60%, transparent);
  background: color-mix(in srgb, var(--color-accent) 7%, var(--color-bg));
}
.mp-icon { width: 36px; height: 36px; color: color-mix(in srgb, var(--color-accent) 70%, transparent); }
.mp-icon svg { width: 100%; height: 100%; }
.mp-label { font-size: 0.82rem; font-weight: 600; color: var(--color-text); line-height: 1.3; }
.mp-hint { font-size: 0.75rem; color: var(--color-text-muted, #888); line-height: 1.3; }

/* ── Extraction Visualizer ── */
.extraction-visualizer {
  background: color-mix(in srgb, var(--color-accent) 6%, var(--color-bg));
  border: 1px solid color-mix(in srgb, var(--color-accent) 20%, transparent);
  border-radius: 12px; padding: 1.5rem; margin: 2rem 0;
}
.ev-header { margin-bottom: 1.25rem; }
.ev-title { font-size: 1.1rem; font-weight: 600; margin: 0 0 0.25rem; color: var(--color-text); }
.ev-subtitle { font-size: 0.85rem; color: var(--color-text-muted, #888); margin: 0; }
.ev-scenarios { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.25rem; }
.ev-btn { padding: 0.45rem 0.9rem; border-radius: 6px; border: 1px solid color-mix(in srgb, var(--color-accent) 30%, transparent); background: transparent; color: var(--color-text); font-size: 0.8rem; cursor: pointer; transition: all 0.18s ease; }
.ev-btn:hover { background: color-mix(in srgb, var(--color-accent) 12%, transparent); }
.ev-btn--active { background: color-mix(in srgb, var(--color-accent) 20%, transparent); border-color: var(--color-accent); color: var(--color-accent); font-weight: 600; }
.ev-stage { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem; }
@media (max-width: 600px) { .ev-stage { grid-template-columns: 1fr; } }
.ev-basket { background: color-mix(in srgb, var(--color-accent) 4%, var(--color-bg)); border: 1px solid color-mix(in srgb, var(--color-accent) 15%, transparent); border-radius: 8px; padding: 1rem; display: flex; flex-direction: column; align-items: center; min-height: 160px; }
.ev-basket-label { font-size: 0.75rem; color: var(--color-text-muted, #888); margin-bottom: 0.75rem; text-align: center; }
.ev-flow-container { width: 100px; height: 100px; border-radius: 50%; background: color-mix(in srgb, var(--color-accent) 8%, var(--color-bg)); border: 2px dashed color-mix(in srgb, var(--color-accent) 30%, transparent); position: relative; overflow: hidden; }
.ev-drop-zone { position: absolute; inset: 0; }
.ev-info-panel { display: flex; flex-direction: column; gap: 0.5rem; }
.ev-info-scenario { font-weight: 700; font-size: 1rem; color: var(--color-accent); }
.ev-info-diagnosis { font-size: 0.85rem; font-weight: 600; color: var(--color-text); }
.ev-info-description { font-size: 0.82rem; color: var(--color-text); line-height: 1.5; }
.ev-info-action { font-size: 0.82rem; background: color-mix(in srgb, var(--color-accent) 8%, transparent); border-left: 3px solid var(--color-accent); padding: 0.5rem 0.75rem; border-radius: 0 6px 6px 0; color: var(--color-text); line-height: 1.5; }
.ev-timeline { margin-top: 0.5rem; }
.ev-timeline-label { font-size: 0.75rem; color: var(--color-text-muted, #888); margin-bottom: 0.4rem; }
.ev-timeline-bar { display: flex; height: 12px; border-radius: 6px; overflow: hidden; gap: 2px; margin-bottom: 0.35rem; }
.ev-timeline-segment { flex: 1; border-radius: 3px; }
.ev-seg--pre { background: color-mix(in srgb, var(--color-accent) 25%, transparent); }
.ev-seg--head { background: color-mix(in srgb, var(--color-accent) 50%, transparent); }
.ev-seg--body { flex: 2; background: var(--color-accent); }
.ev-seg--tail { background: color-mix(in srgb, var(--color-accent) 35%, transparent); }
.ev-timeline-labels { display: flex; justify-content: space-between; font-size: 0.7rem; color: var(--color-text-muted, #888); }

/* ── Salami Explorer ── */
.salami-explorer { background: color-mix(in srgb, var(--color-accent) 6%, var(--color-bg)); border: 1px solid color-mix(in srgb, var(--color-accent) 20%, transparent); border-radius: 12px; padding: 1.5rem; margin: 2rem 0; }
.se-header { margin-bottom: 1.25rem; }
.se-title { font-size: 1.1rem; font-weight: 600; margin: 0 0 0.25rem; color: var(--color-text); }
.se-subtitle { font-size: 0.85rem; color: var(--color-text-muted, #888); margin: 0; }
.se-shot-diagram { display: flex; gap: 4px; height: 80px; margin-bottom: 1.25rem; border-radius: 8px; overflow: hidden; }
.se-phase { display: flex; flex-direction: column; align-items: center; justify-content: flex-end; padding: 0.5rem 0.25rem; cursor: pointer; border-radius: 6px; transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); border: 2px solid transparent; position: relative; overflow: hidden; }
.se-phase:focus { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.se-phase:hover { transform: translateY(-3px); }
.se-phase--pre { flex: 0.7; background: color-mix(in srgb, #6366f1 20%, var(--color-bg)); }
.se-phase--head { flex: 1; background: color-mix(in srgb, #f59e0b 30%, var(--color-bg)); }
.se-phase--body { flex: 2; background: color-mix(in srgb, var(--color-accent) 40%, var(--color-bg)); }
.se-phase--tail { flex: 0.8; background: color-mix(in srgb, #ef4444 20%, var(--color-bg)); }
.se-phase--selected { border-color: var(--color-accent); transform: translateY(-4px); box-shadow: 0 8px 20px color-mix(in srgb, var(--color-accent) 25%, transparent); }
.se-phase-bar { position: absolute; inset: 0; opacity: 0.15; }
.se-phase-label { font-size: 0.72rem; font-weight: 600; color: var(--color-text); text-align: center; position: relative; z-index: 1; }
.se-phase-time { font-size: 0.65rem; color: var(--color-text-muted, #888); position: relative; z-index: 1; }
.se-detail-panel { background: color-mix(in srgb, var(--color-accent) 4%, var(--color-bg)); border: 1px solid color-mix(in srgb, var(--color-accent) 15%, transparent); border-radius: 8px; padding: 1rem 1.25rem; min-height: 120px; display: flex; align-items: center; }
.se-detail-placeholder { color: var(--color-text-muted, #888); font-size: 0.85rem; text-align: center; width: 100%; }
.se-detail-content { width: 100%; }
.se-detail-phase-name { font-weight: 700; font-size: 1rem; margin-bottom: 0.2rem; }
.se-detail-compounds { font-size: 0.8rem; color: var(--color-accent); font-weight: 600; margin-bottom: 0.5rem; }
.se-detail-taste { font-size: 0.85rem; margin-bottom: 0.5rem; color: var(--color-text); line-height: 1.5; }
.se-detail-verdict { font-size: 0.82rem; padding: 0.4rem 0.75rem; border-radius: 6px; font-weight: 600; }
.se-verdict--bad { background: color-mix(in srgb, #ef4444 15%, transparent); color: #ef4444; }
.se-verdict--good { background: color-mix(in srgb, #22c55e 15%, transparent); color: #22c55e; }
.se-verdict--neutral { background: color-mix(in srgb, #6366f1 15%, transparent); color: #6366f1; }

/* ── Rescue Guide ── */
.rescue-guide { background: color-mix(in srgb, var(--color-accent) 6%, var(--color-bg)); border: 1px solid color-mix(in srgb, var(--color-accent) 20%, transparent); border-radius: 12px; padding: 1.5rem; margin: 2rem 0; }
.rg-header { margin-bottom: 1rem; }
.rg-title { font-size: 1.1rem; font-weight: 600; margin: 0 0 0.25rem; color: var(--color-text); }
.rg-subtitle { font-size: 0.85rem; color: var(--color-text-muted, #888); margin: 0; }
.rg-problem { background: color-mix(in srgb, #ef4444 8%, var(--color-bg)); border: 1px solid color-mix(in srgb, #ef4444 25%, transparent); border-radius: 8px; padding: 1rem; margin-bottom: 1.25rem; }
.rg-problem-title { font-weight: 700; font-size: 0.9rem; color: #ef4444; margin-bottom: 0.5rem; }
.rg-problem-content { font-size: 0.85rem; color: var(--color-text); line-height: 1.6; }
.rg-problem-content ul { margin: 0.5rem 0 0 1rem; padding: 0; }
.rg-problem-content li { margin-bottom: 0.25rem; }
.rg-steps { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.25rem; }
.rg-step { display: flex; gap: 0.75rem; align-items: flex-start; padding: 0.75rem; background: color-mix(in srgb, var(--color-accent) 4%, var(--color-bg)); border-radius: 8px; border: 1px solid color-mix(in srgb, var(--color-accent) 12%, transparent); transition: border-color 0.2s; }
.rg-step:hover { border-color: color-mix(in srgb, var(--color-accent) 35%, transparent); }
.rg-step-number { width: 28px; height: 28px; background: var(--color-accent); color: var(--color-bg, #000); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.8rem; flex-shrink: 0; }
.rg-step-content { flex: 1; }
.rg-step-title { font-weight: 700; font-size: 0.9rem; color: var(--color-text); margin-bottom: 0.3rem; }
.rg-step-text { font-size: 0.82rem; color: var(--color-text); line-height: 1.55; }
.rg-calculator { background: color-mix(in srgb, var(--color-accent) 8%, var(--color-bg)); border: 1px solid color-mix(in srgb, var(--color-accent) 25%, transparent); border-radius: 8px; padding: 1rem; }
.rg-calc-title { font-weight: 700; font-size: 0.9rem; color: var(--color-text); margin-bottom: 0.75rem; }
.rg-calc-row { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.6rem; }
.rg-calc-label { font-size: 0.82rem; color: var(--color-text); min-width: 90px; }
.rg-calc-input, .rg-calc-select { padding: 0.35rem 0.6rem; border-radius: 6px; border: 1px solid color-mix(in srgb, var(--color-accent) 30%, transparent); background: var(--color-bg); color: var(--color-text); font-size: 0.82rem; outline: none; }
.rg-calc-input:focus, .rg-calc-select:focus { border-color: var(--color-accent); }
.rg-calc-result { margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.4rem; }
.rg-calc-result-row { display: flex; justify-content: space-between; align-items: center; padding: 0.4rem 0.6rem; background: color-mix(in srgb, var(--color-accent) 5%, var(--color-bg)); border-radius: 6px; font-size: 0.82rem; }
.rg-calc-result-row span { color: var(--color-text-muted, #888); }
.rg-calc-result-row strong { color: var(--color-text); }
</style>

<script>
(function () {
  const scenarios = {
    perfect: {
      label: 'Perfect rat tail', diagnosis: 'Even extraction',
      description: 'The stream emerges from the center, thin and symmetrical. The color starts dark and gradually clears to golden amber. Constant flow without interruptions.',
      action: 'Nothing. This is the goal. Note your parameters so you can repeat it.'
    },
    channeling: {
      label: 'Channeling', diagnosis: 'Water taking paths of least resistance',
      description: 'You see lateral jets or shooting streams. Water found cracks in the puck. Result: bitter and acidic at the same time.',
      action: 'Improve your distribution with WDT before tamping. Verify your tamping is perfectly horizontal. Consider a puck screen.'
    },
    gushing: {
      label: 'Too fast', diagnosis: 'Under-extraction from lack of resistance',
      description: 'The espresso comes out like water, light and fast. The shot finishes in under 20 seconds. Grind is too coarse or dose is insufficient.',
      action: 'Grind finer as the first adjustment. If you\'re at the grinder\'s limit, increase dose by 0.5g.'
    },
    choked: {
      label: 'Too slow', diagnosis: 'Over-extraction or blocked puck',
      description: 'Drops barely fall or the flow is extremely slow. Grind is too fine or dose is excessive.',
      action: 'Grind coarser as the first adjustment. Reduce dose by 0.5g if you\'ve already adjusted grind.'
    }
  }

  const dropZone = document.getElementById('drop-zone')
  const infoScenario = document.getElementById('info-scenario')
  const infoDiagnosis = document.getElementById('info-diagnosis')
  const infoDescription = document.getElementById('info-description')
  const infoAction = document.getElementById('info-action')
  let animFrame = null, tick = 0

  function animatePerfect () { dropZone.innerHTML=''; tick++; const p=(tick%60)/60; const d=document.createElement('div'); d.style.cssText=`position:absolute;width:${4+p*2}px;height:40%;left:50%;top:10%;transform:translateX(-50%);background:hsl(35,${70-p*30}%,${30+p*25}%);border-radius:4px 4px 0 0;opacity:${0.5+p*0.5};`; dropZone.appendChild(d); animFrame=requestAnimationFrame(animatePerfect); }
  function animateChanneling () { dropZone.innerHTML=''; tick++; [{x:22,a:-20},{x:70,a:15},{x:45,a:-5}].forEach((j,i)=>{ const ph=(tick+i*20)%60; if(ph<45){const d=document.createElement('div'); d.style.cssText=`position:absolute;width:3px;height:${15+ph/2}px;left:${j.x}%;top:15%;transform:translate(-50%,0) rotate(${j.a}deg);transform-origin:top center;background:#f59e0b;border-radius:3px;opacity:${0.5+ph/90};`; dropZone.appendChild(d);}}); animFrame=requestAnimationFrame(animateChanneling); }
  function animateGushing () { dropZone.innerHTML=''; tick++; const p=(tick%30)/30; const d=document.createElement('div'); d.style.cssText=`position:absolute;width:${30+p*10}px;height:${30+p*10}px;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;background:#6366f1;opacity:${0.6-p*0.4};`; dropZone.appendChild(d); animFrame=requestAnimationFrame(animateGushing); }
  function animateDrip () { dropZone.innerHTML=''; tick++; const ph=tick%90; if(ph<15){const p=ph/15; const d=document.createElement('div'); d.style.cssText=`position:absolute;width:${3+p*2}px;height:${3+p*2}px;left:50%;top:${20+p*40}%;transform:translate(-50%,-50%);border-radius:50%;background:#ef4444;opacity:${0.8-p*0.3};`; dropZone.appendChild(d);} animFrame=requestAnimationFrame(animateDrip); }

  function renderScenario (key) {
    if (animFrame) cancelAnimationFrame(animFrame)
    const s = scenarios[key]
    infoScenario.textContent = s.label
    infoDiagnosis.textContent = s.diagnosis
    infoDescription.textContent = s.description
    infoAction.innerHTML = '<strong>What to do:</strong> ' + s.action
    if (key==='perfect') animatePerfect()
    else if (key==='channeling') animateChanneling()
    else if (key==='gushing') animateGushing()
    else animateDrip()
  }

  document.querySelectorAll('.ev-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ev-btn').forEach(b => b.classList.remove('ev-btn--active'))
      btn.classList.add('ev-btn--active')
      renderScenario(btn.dataset.scenario)
    })
  })
  renderScenario('perfect')

  const phaseData = {
    pre: { name:'Pre-infusion', color:'#6366f1', compounds:'Puck saturation · No real extraction yet', taste:'Water wets the coffee bed without full pressure. No significant liquid yet. This is where the coffee absorbs water evenly before real extraction begins.', verdict:'neutral', verdictText:'Preparation — no flavor yet' },
    head: { name:'Head', color:'#f59e0b', compounds:'Organic acids · Caffeine · Simple soluble compounds', taste:'Very acidic, intense, aggressive. High concentration of chlorogenic acids — the most soluble compounds in coffee. Tasted alone, the coffee is practically undrinkable.', verdict:'bad', verdictText:'Under-extracted — acidic and intense' },
    body: { name:'Body', color:'var(--color-accent)', compounds:'Sugars · Oils · Maillard compounds · Melanoidins', taste:'This is where everything you\'re looking for lives. The acids soften and caramelized sugars, melanoidins, flavor oils, and Maillard compounds enter. Natural sweetness, balance, complexity.', verdict:'good', verdictText:'The goal — this is where flavor lives' },
    tail: { name:'Tail', color:'#ef4444', compounds:'Tannins · Partial cellulose · Heavy bitter compounds', taste:'Bitter, watery, astringent. The water dissolves the heaviest compounds now: tannins, partially dissolved cellulose. The flow clears (blonding) but what remains is undesirable.', verdict:'bad', verdictText:'Over-extracted — bitter and astringent' }
  }

  const seDetail = document.getElementById('se-detail')
  document.querySelectorAll('.se-phase').forEach(phase => {
    phase.addEventListener('click', () => {
      const data = phaseData[phase.dataset.phase]
      document.querySelectorAll('.se-phase').forEach(p => p.classList.remove('se-phase--selected'))
      phase.classList.add('se-phase--selected')
      seDetail.innerHTML = `<div class="se-detail-content"><div class="se-detail-phase-name" style="color:${data.color}">${data.name}</div><div class="se-detail-compounds">${data.compounds}</div><div class="se-detail-taste">${data.taste}</div><div class="se-detail-verdict se-verdict--${data.verdict}">${data.verdictText}</div></div>`
    })
    phase.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' '){e.preventDefault();phase.click()} })
  })

  const doseInput = document.getElementById('dose-input')
  const coffeeType = document.getElementById('coffee-type')
  const resultYield = document.getElementById('result-yield')
  const resultRatio = document.getElementById('result-ratio')
  const resultTemp = document.getElementById('result-temp')
  const resultCut = document.getElementById('result-cut')
  const profiles = {
    commercial:{lo:1.5,hi:1.8,temp:'91 – 93°C',cut:'Cut at first blonding'},
    specialty:{lo:1.9,hi:2.2,temp:'93 – 94°C',cut:'Cut at 25–30s by taste'},
    light:{lo:2.2,hi:2.5,temp:'94 – 96°C',cut:'Allow full extraction'}
  }
  function updateCalc () {
    const dose = parseFloat(doseInput.value)||18
    const p = profiles[coffeeType.value]
    resultYield.textContent=`${(dose*p.lo).toFixed(0)} – ${(dose*p.hi).toFixed(0)}g`
    resultRatio.textContent=`1:${p.lo} – 1:${p.hi}`
    resultTemp.textContent=p.temp
    resultCut.textContent=p.cut
  }
  doseInput&&doseInput.addEventListener('input',updateCalc)
  coffeeType&&coffeeType.addEventListener('change',updateCalc)
  updateCalc()
})()
</script>
