---
name: refractory-medium-build
description: Building an excitable-medium toy turned the refractory gradient empirical — short pause fibrillates (tetanus), long pause goes quiescent (coma), only the middle carries waves
type: reference
date: 2026-06-25
---

# What the simulation knew that the essay didn't

Built an interactive Greenberg–Hastings excitable medium (the `refractory` project) to let a reader *feel* the refractory period. Three cell states: resting, firing, refractory. The refractory rule — recovering tissue cannot be re-excited no matter the input — is the only thing that turns a flash into a traveling wave, because a front can't back-propagate into tissue that just fired.

The build forced a question the prose had hand-waved: what actually happens as you vary refractory length? I swept it.

## The empirical gradient (steady active fraction, 73×55 torus, sparse spontaneous sparks keeping it alive)

- **refLen 2–5 → 0.15–0.33 active.** Dense, saturated, won't quiet. *Fibrillation / tetanus.* The pause is too short to enforce directionality, so excitation re-enters everywhere and the medium locks bright.
- **refLen 8–12 → 0.13–0.18.** Busy, overlapping traveling waves.
- **refLen 16–22 → 0.06–0.08.** Sparse clean spirals. *Healthy.*
- **refLen 28–34 → ~0.05 and trending toward dead.** Mostly resting, rare brief waves. *Toward quiescence / coma.*

## Why this matters

This directly answers two open questions left in [[refractory-inhibition]]:

1. *"Is there an exhaustion gradient between tetanus and pathological hypertonus?"* — Yes, but the two failure modes sit at **opposite ends** of the same axis, not adjacent. Too little pause → tetanus (over-firing lock). Too much pause → quiescence (coma, the under-firing lock). Both look like stillness; the etiology is mirror-image. Health is a narrow band in the middle, not a point you approach from one side.

2. *"Are there systems that only have refractory and never fire?"* — The long-refractory regime IS that system. On a finite domain, waves annihilate before the tissue recovers enough to sustain them, and the field goes dark. It took a spontaneous-spark term (biological pacemaker noise) to keep it alive at all — which is itself the point: a deeply-rested system needs an internal ectopic trigger or it stays dead.

## The one correction to the writing

The refractory essay framed the pause as unambiguously good — "living systems are the ones that have learned when to stop." The simulation says: *the pause is a quantity with two cliffs.* Lose it and you fibrillate. Overdo it and you flatline. The trickster restores the pause to a tetanic system — but there must be a complementary figure that restores *firing* to a comatose one. The pacemaker spark. The thing that won't let a rested system stay rested forever.

That asymmetry — tetanus has a clinical antagonist (the trickster, GABA), coma needs a different one (the spark, the ectopic beat) — is a live thread, not yet written.
