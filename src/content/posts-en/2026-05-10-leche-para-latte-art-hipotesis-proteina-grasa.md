---
title: 'Milk for latte art: putting the 1:1 hypothesis to the test'
description: 'After testing several Mexican milk brands I noticed a pattern: when protein matches fat, the figure survives. When it doesn''t, it fades. Here''s what the science says and why Voble collapses where Alpura holds.'
publishedDate: 2026-05-10
tags:
  - milk
  - latte-art
  - microfoam
  - coffee
  - specialty
  - tests
---

I've spent months pouring the same tulip, with the same machine, the same coffee, the same steaming technique. The only variable is the milk. After several cartons I started seeing a pattern that no latte art YouTube video had ever mentioned: **the figure survives when the protein matches (or exceeds) the fat, and slowly fades when it doesn't**.

It sounds like a minor observation. It isn't. It's the difference between a tulip that's still visible when you take the last sip and one that gradually blurs until, by minute 25–30, you can't make out the figure anymore — right when you still have half a cup to go.

This post is a testing log + the science that explains it. And as always, I'll be honest: my original hypothesis was almost right, but only once I understood the nuance did I stop guessing and start choosing milk at the grocery store with intent.

## The lab

For the tests to matter, everything else has to be fixed. My setup:

**Machine:** Gemilai Owl G3006, 15 bar, PID, ULKA, 58mm. Solid thermal stability, an honest steam wand (not commercial-grade, but it passes the microfoam test with good technique).
**Pitcher and technique:** same pitcher, same wand position, same target temperature (~62-65°C / 144-149°F), same target "stretch" (air incorporation in the first few seconds, until the pitcher starts to warm the hand).
**Coffee:** the same espresso pull every time (same beans, same grind, same time).
**Water:** controlled. That's another story I already documented in the [interactive guide to water-testing tools](/en/cafe-en/water-testing-tools-guide) — if I'm controlling the water, controlling the milk is the next logical link.

Only the milk brand varies.

## The raw observation

Before the science, the numbers. This is what each carton's nutrition label measures (per 100 ml):

| Brand | Fat | Protein | P:F Ratio | Initial figure | Persistence |
|---|---|---|---|---|---|
| Alpura Selecta Lactose-Free | 3 g | 3 g | 1:1 | Sharp, glossy | Holds through the last sip |
| Voble Lactose-Free | 3 g | 1.5 g | 0.5:1 | Looks fine at first | Gradually blurs, gone by ~25–30 min |

Two milks with **the same fat content** and half the protein in one of them. Same machine, same technique, same coffee. The Alpura figure holds through the whole session: photo, handoff, first sip, and the rest of the latte. The Voble figure looks correct when poured, but starting around the first minute the outlines begin to blur subtly, and between minute 25 and 30 what was a tulip is no longer recognizable.

Before reading a single line of scientific research, the pattern was already there.

## Why this happens

Think of microfoam as an **elastic net** trapping air bubbles inside the milk. Proteins weave that net — specifically **caseins** (~80%) and **whey proteins** (~20%). When you submerge the wand, heat and air unfold them, push them to the surface of every bubble, and there they form a film that holds the bubbles in place. That film is what holds your tulip.

Fat plays a different role. **It brings shine, body, that paintable texture** that separates a latte from a cardboard cappuccino. But it also competes with proteins for the same space: when fat globules float free in the milk, the proteins that should be weaving your net get distracted coating those globules. The net weakens.

And when the net weakens, you get what you see in my photos. Larger bubbles start swallowing smaller ones, the foam turns coarse, and the drawing — which lives on top of that net — fades.

**Here's the nuance I was missing.** 1:1 isn't a magic number on its own. What's happening is the protein has to **win the race against the fat** for the surface of the bubbles. Standard whole milk (3.5% fat, 3.4% protein) is almost a tie, which is why it works — it's the industry's *gold standard*. When Voble cuts protein in half without cutting fat, the caseins can't cover the whole front, part of them get lost coating fat, and the net stays loose. The collapse I saw in my cup is exactly that.

> **What the science says** — A study in *Food and Bioprocess Technology* (2024) confirms that raising protein from 1.5% to 4% significantly increases foam stability. *Food Hydrocolloids* adds that viscosity also rises with protein, which makes bubbles drain more slowly. My Alpura tulip doesn't hold because it's pretty — it holds because there are 3 g of protein per 100 ml doing architecture.

## The nerd detail: casein vs whey

There's one piece of info no carton tells you: **the ratio between the two kinds of protein** in the milk.

In natural milk that ratio is ≈80:20 (casein:whey). Caseins are organized in *micelles* — spherical structures that "spread" at the surface of bubbles much better than loose whey proteins. They're the real stars of stable foam.

This explains something curious. When a milk is marketed as "high in protein" but uses isolated whey to pad the label, the casein:whey ratio drops (to 60:40 or worse). Total protein goes up, but the **quality** of that protein for making foam goes down. The label doesn't lie — it just doesn't tell you the whole story.

It also explains why **lactose-free milk works perfectly** for latte art. The lactase enzyme breaks down lactose but doesn't touch the proteins. My Alpura Selecta Lactose-Free keeps its caseins and whey in their natural proportion. And as a bonus, it tends to taste a little sweeter, which pairs better with espresso.

## The brands I've tested

> *This section grows as I test more cartons. The photos are mine, with the same setup described above.*

### Alpura Selecta Lactose-Free — ⭐ My current favorite

**Fat:** 3 g / 100 ml · **Protein:** 3 g / 100 ml · **Ratio:** 1:1 · **Lactose-free:** yes

<!-- TODO: add tulip photo with Alpura Selecta Lactose-Free once available. Recommended: same shooting technique as the Voble sequence (overhead, square, post-processed). -->

The tulip comes out sharp, glossy, and holds through the last sip — I haven't observed any measurable collapse within the normal lifespan of a latte. The mouthfeel is silky, not cardboard. It's the closest thing to "ideal whole milk" I can find at a Mexican grocery store without paying import prices.

### Voble Lactose-Free — Skip for latte art

**Fat:** 3 g / 100 ml · **Protein:** 1.5 g / 100 ml · **Ratio:** 0.5:1 · **Lactose-free:** yes

<figure class="my-10 not-prose">
  <div class="grid grid-cols-2 gap-2 sm:gap-3">
    <div>
      <img src="/images/voble-fade/voble-fade-t00min.jpg" alt="Just-poured tulip with Voble Lactose-Free milk, sharp contours" class="w-full aspect-square object-cover rounded-md" loading="lazy" width="600" height="600" />
      <p class="mt-2 mb-0 text-center text-[11px] font-medium uppercase tracking-[0.15em] opacity-50">0 min · just poured</p>
    </div>
    <div>
      <img src="/images/voble-fade/voble-fade-t03min.jpg" alt="Same cup at 3 minutes: contours visibly softer" class="w-full aspect-square object-cover rounded-md" loading="lazy" width="600" height="600" />
      <p class="mt-2 mb-0 text-center text-[11px] font-medium uppercase tracking-[0.15em] opacity-50">3 min · first softening</p>
    </div>
    <div>
      <img src="/images/voble-fade/voble-fade-t22min.jpg" alt="Same cup at 22 minutes: the protein network collapses, only a ghost of the tulip remains" class="w-full aspect-square object-cover rounded-md" loading="lazy" width="600" height="600" />
      <p class="mt-2 mb-0 text-center text-[11px] font-medium uppercase tracking-[0.15em] opacity-50">22 min · visible collapse</p>
    </div>
    <div>
      <img src="/images/voble-fade/voble-fade-t29min.jpg" alt="Same cup at 29 minutes: figure practically gone" class="w-full aspect-square object-cover rounded-md" loading="lazy" width="600" height="600" />
      <p class="mt-2 mb-0 text-center text-[11px] font-medium uppercase tracking-[0.15em] opacity-50">29 min · figure gone</p>
    </div>
  </div>
  <figcaption class="mt-5 text-center text-sm italic opacity-60">Voble Lactose-Free (3 g fat / 1.5 g protein per 100 ml) — the same cup, the same milk, photographed across 29 minutes. Same machine, same coffee, same pull.</figcaption>
</figure>

Steams fine at first, the tulip comes out defined. But starting around the first minute the outlines begin to blur gradually, and between minute 25 and 30 the figure is no longer recognizable. The substitution of air for liquid in the protein network is happening the whole time — it just becomes visible when the network is weak. If you drink your latte fast, it works. If you sip it slowly, serve it to someone else, or want it to look presentable a few minutes after pouring, half the protein will cost you the figure.

*\[More brands in testing — I'll update this post as I get data.\]*

## Mini-guide for choosing milk at the grocery store

After several tests, my mental checklist before putting a carton in the cart:

**Read the nutrition label, not the brand.** The carton can say "ideal for barista", "extra creamy", whatever. Numbers rule.

**Compare protein vs fat per 100 ml.** If protein is lower than fat, the figure will collapse. It's not opinion, it's colloid physics.

**Aim for protein ≥ 3 g per 100 ml.** Below that, even with low fat you won't have enough protein network for an elastic foam.

**Beware of "reduced-fat" options.** The problem is reversed: lots of protein, little fat = rigid foam without shine. Fine for cappuccino, not for latte art.

**Lactose-free is fine.** Lactolysis doesn't affect protein. In fact, it adds a subtle sweetness that pairs well with espresso.

**Be suspicious of "fortified" protein.** If a milk brags about high protein but the ingredients list includes isolated whey, the casein:whey ratio may be off from natural and stability suffers.

## Ongoing tests

This is a living log, not a closed verdict. There are Mexican brands I haven't tested yet (Lala Entera, Santa Clara, Sello Rojo in their different versions, Costco options) and others where I want to validate whether fortified protein ruins or helps the casein:whey ratio. I'll keep updating this table and the photos as data comes in.

If you're already controlling variables — the water I measure with [the TDS and GH/KH kit](/en/cafe-en/water-testing-tools-guide), the coffee, the extraction — milk is the last big lever before pouring technique. And it turns out the lever is literally printed on the carton's nutrition label.

## Related reading

- [Interactive guide: tools to measure your water](/en/cafe-en/water-testing-tools-guide) — the other controllable pillar of your latte.
- [The accidental history of espresso](/en/posts/2026-04-12-historia-accidental-espresso) — historical context for why the espresso + milk combination became canonical.

## Sources

- *Foaming Properties and Foam Structure of Milk Determined by Its Protein Content and Protein to Fat Ratio* — Springer (Food and Bioprocess Technology, 2024).
- *Foaming properties of milk protein dispersions at different protein content and casein to whey protein ratios* — ScienceDirect (Food Hydrocolloids).
- *The Science of Steamed Milk: Understanding Your Latte Art* — Science & Food (UCLA).
- *Selecting The Best Milk For Coffee Foam & Latte Art* — Perfect Daily Grind.
- *Microfoam* — general reference (Wikipedia).
