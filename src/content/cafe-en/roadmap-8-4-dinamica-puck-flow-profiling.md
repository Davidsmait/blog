---
title: 'Puck dynamics and flow profiling'
description: 'The science of espresso under pressure: puck behavior, erosion, compaction, flow profiling vs pressure profiling, and how to design extraction profiles based on physics.'
publishedDate: 2026-03-05
tags:
  - puck
  - flow-profiling
  - espresso
  - pressure
  - extraction
  - advanced
phase: 8
lessonOrder: 4
isPremium: false
---

## The puck as a dynamic system

In Phase 7 you learned pressure profiling with Rao: long pre-infusion, declining pressure, turbo shots. That gave you practical tools. Now let's understand *what happens to the puck* during those profiles — the physics of what occurs inside the basket between button press and espresso falling into the cup.

Jonathan Gagné, in *The Physics of Espresso*, applies porous media mechanics and fluid dynamics to the espresso puck. Understanding this level lets you design extraction profiles with intention, not just copy recipes.

## Anatomy of the puck under pressure

### Initial state

Before water arrives, your puck is a compacted disk of coffee. It's not a homogeneous solid — it's a porous medium with thousands of microscopic channels between particles. The distribution of these channels depends on how you ground (particle distribution), how you distributed (WDT, leveling), and how you tamped (pressure, levelness).

### First water contact

When pressurized water touches the puck surface, several things happen simultaneously.

**Saturation:** Water fills spaces between particles. Not everything fills instantly — trapped air needs to escape, creating initial resistance. Low-pressure pre-infusion lets this saturation happen gradually, expelling air without creating channels.

**Swelling:** Coffee particles absorb water and swell. Gagné documents that particles can increase in volume 30-50% when saturated. This swelling reduces spaces between particles, increasing flow resistance. It's one of the mechanisms by which pre-infusion "seals" the puck.

**Compaction:** Water pressure pushes particles downward and compresses them against the basket. The bottom of the puck compacts more than the top. This creates a density gradient: denser below, more porous above.

### During extraction

As extraction proceeds, the puck continuously changes.

**Particle erosion:** Particles partially dissolve — they lose mass. This opens spaces previously occupied, increasing local permeability. More extracted zones become more permeable, attracting more water, accelerating their extraction. It's another channeling mechanism.

**Fines migration:** Like in pour-over but amplified by pressure. Fines move downward and accumulate above the basket filter, creating a dense layer that acts as a "second filter."

**Progressive compression:** At constant 9 bars pressure, the puck progressively compresses during the first seconds. Gagné estimates a puck can lose 1-2mm of height during extraction. This continuous compression reduces permeability and explains why flow naturally decelerates toward shot end in many machines.

## Pressure profiling vs flow profiling

### The classic paradigm: constant pressure

Traditional espresso machines apply ~9 bars of constant pressure. Flow is a *result* of the interaction between that pressure and the puck's changing resistance. You don't control flow directly — only pressure. Flow starts slow (while puck saturates), increases, then may decelerate (from compaction and fines accumulation).

### Pressure profiling

In pressure profiling (covered in Lesson 7.2), you control pressure over time. You define a pressure curve (for example: 3 bar → 9 bar → 6 bar) and flow is the consequence. It's like defining the "force" and letting "velocity" be determined.

**Advantages:** Intuitive. Most profiling machines (Decent, Lelit Bianca, La Marzocco Strada) control pressure. Pre-infusion at low pressure, ramp, decline — these are easy to visualize.

**Limitations:** The same pressure profile produces different flows with different coffees. A dense, light-roasted coffee has more resistance than a porous, dark-roasted one. At the same 9 bars, flow will be very different. Adjusting the profile by pressure requires recalibration for each coffee.

### Flow profiling

In flow profiling, you control water flow rate (ml/s) over time. Pressure is a *result* of the interaction between that flow and puck resistance. It's like defining "velocity" and letting "force" be determined.

**Advantages:** More consistent between coffees. If you define 2 ml/s flow, you get 2 ml/s regardless of puck resistance. The machine adjusts pressure automatically. This makes profiles more transferable.

**Limitations:** Requires more sophisticated hardware (pump with flow control, not just pressure). Less intuitive for baristas accustomed to thinking in pressure. And there's a risk: if you define high flow and the puck has high resistance, pressure can spike to damaging levels.

### The Decent as a laboratory

Gagné (who works closely with the Decent community) uses the Decent DE1 as an experimentation platform because it allows both pressure and flow profiling, and records both variables in real time. The resulting graphs show how pressure, flow, temperature, and weight interact during each shot — data that was previously invisible.

## Designing profiles based on physics

### Principle 1: Pre-infusion = uniform saturation

The pre-infusion goal is complete puck saturation before applying full pressure. Gagné recommends pre-infusion by flow, not pressure: define low flow (1-2 ml/s) until you see first drops from the portafilter. This indicates the puck is saturated top to bottom.

Duration depends on grind: finer = longer saturation. Typically 5-15 seconds. Too-short pre-infusion leaves dry zones (channeling). Too-long begins extracting before the puck is uniformly wet.

### Principle 2: Extraction = controlled gradient

Once saturated, the extraction profile determines how much and how fast you extract. Physics-based options:

**Constant flow (2-3 ml/s):** Predictable and repeatable. Pressure rises initially then falls as the puck erodes. Simple but effective.

**Declining flow:** Start high, reduce progressively. Extracts "easy" compounds fast at the start, then slows to avoid over-extracting "difficult" compounds (bitters, astringents) at the finish. Gagné argues this is the theoretical basis of Rao's declining pressure.

**Rising flow:** Start low, increase. Less conventional, but useful for very light roasts needing lots of energy to extract completely.

### Principle 3: Finish = reduce marginal extraction

The final milliliters are most problematic: the puck has already yielded most desirable compounds, and what remains is bitter and astringent. Reducing pressure or flow at the end minimizes extraction of these compounds.

This is what declining pressure does: it's not arbitrary — it's a strategy to extract the good strongly and the bad softly.

## The puck after extraction

### Reading the puck

After extraction, the puck contains information about what happened.

**Dry, firm puck with uniform surface:** Good distribution, good extraction. Water passed uniformly.

**Puck with central crater:** Water concentrated in center — possible central channeling from poor distribution or uneven tamp.

**Soupy puck:** Too much water relative to coffee, or very extended ratio. Not necessarily bad — depends on the profile.

**Puck with cracks or fractures:** Severe channeling. Water created preferred paths that fractured the structure.

### Puck screen / contact screen

A growing trend is using a metal disk on top of the coffee (puck screen or contact screen). This disk distributes water uniformly over the entire puck surface before it penetrates. Gagné confirms that puck screens improve extraction uniformity, reduce surface channeling, and keep the machine's shower cleaner. The downside is another component to clean.

## Water temperature during extraction

### The thermal problem

Water temperature isn't constant during extraction. Water cools passing through the group, portafilter, and puck. The first water touching the coffee may be several degrees cooler than boiler temperature, especially if the group isn't well preheated.

### Thermal stability

Gagné discusses how different group designs (E61, saturated group, multi-boiler) affect thermal stability. Saturated groups (like La Marzocco Linea) maintain more stable temperature because boiler water circulates continuously through the group. E61s (common in prosumer machines) rely on passive convection and can have 2-4°C oscillations during a shot.

### Temperature profiling

Some machines (Decent, Sanremo) let you change temperature during extraction. Gagné explores profiles like high initial temperature to extract fruity acids fast, then lower to avoid extracting bitters. Or low initial temperature for gentle saturation, then raise for aggressive extraction. This is experimental territory where physics guides but the cup decides.

## Integrating everything: Phase 8 as a mental framework

The 4 lessons of this phase aren't recipes — they're a framework for understanding why recipes work.

When your V60 drains too slowly, you don't say "something's wrong." You say: fines migrated to the bottom and reduced permeability (Darcy's law). The solution isn't just coarser grind — maybe different filter (lower resistance), more agitation (break fines layer), or different dripper (flat bottom with multiple holes).

When your espresso channeling, it's not mysterious. It's a permeability gradient in the puck from uneven distribution. WDT, puck screen, and long pre-infusion are solutions that attack the cause, not the symptom.

Physics doesn't replace practice. Practice calibrated by physics is more efficient. You adjust with direction, not blind. That's the professional level.

## What you need for this lesson

- Espresso machine (any type, but pressure profiling is ideal)
- Naked portafilter for observation
- Precision basket (VST or IMS)
- Scale with timer
- Optional: puck screen
- Your recipe notebook

## Practical exercise

### Observing the puck

1. Extract a normal shot with your usual recipe
2. Before knocking the puck out, observe it: is it flat? Does it have a crater? Cracks?
3. Repeat with longer pre-infusion (if your machine allows)
4. Compare pucks: did longer pre-infusion change the appearance?

### Puck screen comparison

1. If you have a puck screen, extract two identical shots: one with, one without
2. Same dose, same ratio, same grind
3. Compare: extraction time, puck appearance, flavor
4. With naked portafilter: is flow more uniform with the screen?

### Flow profile (if you have profiling machine)

1. Extract one shot at constant 9 bar pressure — record the resulting flow
2. Extract another with declining pressure (9 → 6 bar) — record flow
3. If possible: extract one at constant flow (2.5 ml/s) — observe how pressure rises and falls automatically
4. Compare all three for flavor and note which profile highlighted which characteristics

## Key concepts from this lesson

- The puck is a dynamic system that changes during extraction: saturates, swells, compacts, erodes
- Pre-infusion should saturate the puck uniformly — duration adapts to grind
- Pressure profiling controls force (pressure); flow is a consequence
- Flow profiling controls velocity (flow); pressure is a consequence — more consistent between coffees
- Fines migrate toward the basket and create a secondary filter layer
- Reading the puck after extraction diagnoses distribution and channeling problems
- Puck screens improve uniform water distribution on the puck surface
- Water temperature varies during extraction and depends on your machine's group design
- Puck physics explain why Rao's Phase 7 techniques work and guide design of new profiles
