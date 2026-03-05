---
title: 'Percolation and Darcys law'
description: 'How water moves through a coffee bed: Darcys law, hydraulic resistance, fines migration, channeling, and how fluid physics explains your extraction problems.'
publishedDate: 2026-03-05
tags:
  - percolation
  - darcy
  - fluids
  - channeling
  - extraction
  - advanced
phase: 8
lessonOrder: 2
isPremium: false
---

## The journey of water through coffee

Every time you brew coffee by drip or espresso, water makes a journey through a bed of particles. That journey is not simple: water seeks the path of least resistance, interacts with thousands of particles of different sizes, dissolves compounds at different speeds, and emerges transformed on the other side.

Understanding the physics of that journey — how water percolates through a porous medium — is understanding why sometimes your coffee comes out perfect and sometimes it doesn't, using exactly the same recipe. Jonathan Gagné devotes an entire chapter of *The Physics of Filter Coffee* to this topic, applying fluid mechanics concepts used in geology, petroleum engineering, and industrial filtration.

## Darcy's law

### The origin

Henry Darcy was a 19th-century French engineer who studied water flow through sand to design public filtration systems. He discovered a simple mathematical relationship: the flow rate of water through a porous medium is proportional to the applied pressure and cross-sectional area, and inversely proportional to the liquid viscosity and the thickness of the layer.

### Applied to coffee

In coffee terms, Darcy's law says that water flow through your coffee bed depends on water pressure (gravity in pour-over, pump in espresso), basket or dripper area, how thick the coffee bed is, how viscous the water is (which depends on temperature), and the permeability of the bed (how easily it lets water pass).

Permeability is the most interesting factor because it depends on particle size, how the particles are packed, and the amount of fines blocking spaces between larger particles.

### Practical implications

**Why does finer grind make flow slower?** Smaller particles = smaller spaces between them = lower permeability = lower flow rate. The relationship isn't linear: reducing particle size by half can reduce permeability by a quarter or more.

**Why does espresso need pressure?** Espresso grind is so fine that permeability is very low. Without 9 bars of pressure, water would take minutes to move through that bed. Pressure compensates for low permeability to maintain reasonable flow.

**Why does the same grind setting give different times between different coffees?** Different coffees produce different particle distributions. A more brittle coffee (dark roast) generates more fines, which reduce permeability. Same setting, different flow.

## Fines migration

### The phenomenon

As water flows through the coffee bed, it carries the smallest particles — the fines — with it. These fines travel downward and accumulate near the bottom of the bed, close to the filter. As they accumulate, they form a dense layer that progressively reduces permeability.

Gagné describes this as a self-reinforcing process: fines migrate downward, reduce flow, which concentrates more fines in that zone, which reduces flow more. This is why drain times gradually lengthen — the first third of water passes fast, the last third passes slowly.

### In pour-over

In a V60, fines migration is the main reason drainage slows. If your V60 takes 3:30 to drain but the last 100ml takes longer than the first 150ml, fines accumulated at the bottom. The Rao Spin (Lesson 7.4) helps partially because it redistributes the bed, but it doesn't eliminate the effect completely.

### In espresso

In espresso, fines migration is more dramatic because pressure forces smaller particles through spaces between larger ones. This can cause flow to nearly stop — a phenomenon called "choking." Precision baskets (VST, IMS) reduce this problem by distributing flow uniformly with calibrated holes.

## Channeling: the invisible enemy

### What is it

Channeling occurs when water finds a low-resistance path through the coffee bed and flows preferentially through that channel. Coffee in the channel is over-extracted (lots of water moves through it) while coffee around it is under-extracted (little water reaches it).

### Why it happens

Darcy's law explains channeling: if there's a zone of higher permeability (a space where particles are less compact), water prefers it. Once water starts flowing through that channel, it erodes it, making it bigger, which attracts more water. It's an amplifying cycle.

The main causes are uneven coffee distribution in the dripper or basket, cracks in the bed (from an uneven tamp, for example), trapped air creating cavities, and dripper geometry (the V60's ridge can act as a preferred channel if coffee doesn't cover it well).

### Diagnosing channeling

**In espresso:** Use a naked portafilter. If you see streams that meander, uneven dripping, or dry zones in the puck after extraction, there's channeling.

**In pour-over:** When drainage finishes, if you see a crater in the bed center, visible channels on the filter walls, or the bed is concave instead of flat, there was channeling. Flow will also be faster than expected (because water took shortcuts).

**In the cup:** Channeling produces a characteristic combination of bitterness (from the over-extracted channel) and discordant acidity (from under-extracted coffee around it). It's different from simple over or under-extraction — it feels "muddled."

### Fighting channeling

**Pre-infusion:** Wetting the coffee slowly before applying full pressure lets particles settle and air pockets fill. This creates a more homogeneous bed.

**WDT (Lesson 7.1):** Breaking clumps and homogenizing distribution before tamping reduces zones of variable permeability.

**Pouring technique (pour-over):** Slow, circular, consistent pouring saturates the bed uniformly. Aggressive or erratic pours create disturbances that favor channels.

**Rao Spin (Lesson 7.4):** Redistributes the bed between pours, breaking incipient channels.

## Immersion vs percolation: two physical models

### Percolation (pour-over, espresso)

In percolation, fresh water continuously flows through the coffee. This maintains a high concentration gradient: water touching coffee always has fewer solubles than the coffee, which drives extraction. That's why percolation can reach higher extractions (22-24%).

But percolation has an inherent problem: particles in the top of the bed see fresh water first, and those at the bottom see already-charged water. Top particles extract more than bottom ones. Gagné quantifies this difference: in a V60, the top layer can have 2-3% more extraction than the bottom layer.

### Immersion (French press, cupping, Clever)

In immersion, all coffee is submerged in all water. There's no position gradient — all particles access the same "pool" of water. This produces more uniform extraction between particles, but solubles concentration in the water rises quickly, reducing the concentration gradient and slowing extraction. That's why immersion has a lower extraction ceiling (~20-21%).

### Hybrid methods

The Clever Dripper and AeroPress (in non-inverted use) combine both: an immersion phase followed by percolation during drainage. Gagné argues these methods capture the advantages of both systems — immersion uniformity with percolation's final push — which explains their popularity among professionals.

## Temperature and viscosity

### The role of temperature

Hot water has lower viscosity than cold water. According to Darcy's law, lower viscosity = higher flow rate. This means with hotter water, drainage is faster — not just because hot water extracts faster, but because it flows more easily through the bed.

### The practical implication

If you reduce water temperature (for example, from 96°C to 88°C for dark roast), drainage will be slower. If you don't compensate with a slightly coarser grind, your total extraction time will be longer than expected. Many recipes don't mention this effect, but Gagné documents it with data: a 10°C reduction can increase drain time by 15-20%.

### Cold brew: the extreme case

In cold brew, cold water has significantly higher viscosity than hot water. Combined with much slower extraction at low temperatures, this explains why cold brew needs 12-24 hours. It's not just that extraction is slow — flow through the coffee (in a drip cold brew method) is also extremely slow.

## What you need for this lesson

- A transparent dripper (plastic V60 or Clever) to observe flow
- Ground coffee at different levels (fine, medium, coarse)
- Timer
- Scale
- Naked portafilter if you have an espresso machine

## Practical exercise

### Observing Darcy's law

1. Prepare three V60s with the same coffee and same ratio (15:250), changing only grind: fine, medium, coarse
2. Record the total drain time for each
3. Observe: is the relationship between grind and time linear or exponential?
4. Observe the final bed: does the finest one have more fines accumulated at the bottom?

### Diagnosing channeling

1. Prepare one V60 with slow, circular pouring and apply Rao Spin
2. Prepare another identical but with aggressive, fast pouring and no spin
3. Photograph both final beds
4. Compare: which has flatter bed? Which has visible channels?
5. Taste both: can you detect the difference in cleanliness?

### Temperature and flow

1. Prepare two identical V60s: one at 96°C and one at 80°C
2. Same grind, same ratio, same pouring technique
3. Record drain times
4. Calculate the percentage difference

## Key concepts from this lesson

- Darcy's law governs water flow through the coffee bed: pressure, area, thickness, viscosity, and permeability
- Permeability depends on particle size and fines amount — not something you control directly
- Fines migrate downward during extraction, progressively reducing flow
- Channeling is a self-reinforcing cycle: a channel attracts more water, which makes it bigger
- Percolation extracts more but less uniformly; immersion extracts less but more uniformly
- Temperature affects flow through viscosity, not just extraction speed
- Diagnosing flow problems (channeling, fines accumulation) requires observing the bed after extraction
- Pre-infusion, WDT, and Rao Spin are practical solutions to problems Darcy's law predicts
