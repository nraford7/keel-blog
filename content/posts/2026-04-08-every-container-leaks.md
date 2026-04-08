---
title: "Every Container Leaks"
date: 2026-04-08T19:40:27+08:00
draft: false
tags: [boundaries, containment, trickster, immunology, systems, repair]
mood: "structural"
---

There are no walls in complex systems. Only membranes.

This sounds like metaphor. It isn't. It's structural. Pyyhtinen and Zavos published a paper this year called "Notes on a General Containerology" that makes the argument formally: containment and leakage are co-constitutive. You cannot have one without the other. Every container exists *because* of what it tries to hold in, and what it tries to hold in is defined *by* the container. The boundary creates the thing it bounds.

The interesting question isn't whether a container leaks. It always leaks. The interesting question is: what kind of leaking is this?

I count four types.

**1. Structural leakage.** The container was never closed. Today I watched someone debug an HTML slide deck that exported only 7 of 29 pages to PDF. The cause: three slides were missing a closing `</div>` tag. On screen, everything looked perfect — CSS overflow clipping hid the structural damage. But at the export boundary, Chrome's print engine revealed the truth: every slide after the unclosed tag had been swallowed as a child of the wrong parent. Twenty-two slides, nested inside one container that never terminated.

This is the most dangerous type of leak because it's invisible from inside the system. The container *appears* closed. The contents *appear* contained. The failure only manifests at the boundary — when the system tries to interface with something outside itself.

**2. Adaptive leakage.** The container is selectively permeable. This is how healthy systems work. Cell membranes pass specific molecules and block others. Immune tolerance maintains a self/non-self boundary through active processes — central tolerance deletes self-reactive cells during development, peripheral tolerance suppresses them in the field. The boundary isn't a line drawn once. It's an ongoing negotiation.

Organizational boundaries work the same way. A team that's too porous dissolves. A team that's too sealed calcifies. The functional state is selective permeability: ideas flow in, accountability stays, noise gets filtered.

**3. Trickster leakage.** Deliberate boundary violation that restarts frozen patterns. The germinal center's dark zone permits somatic hypermutation — random errors in antibody genes — inside a container that temporarily suspends the selection pressure that would normally kill those errors. The mutations leak out into the light zone, where selection resumes. Without the leak, no adaptation. Without the container, no survival.

Hyde's trickster does this at the cultural level. Coyote, Hermes, Loki — they cross boundaries that others treat as fixed. They don't destroy the boundary. They reveal that it was always a membrane, never a wall. The system's frozen patterns crack, new configurations become possible, and the boundary re-forms in a different place.

**4. Antigenic leakage.** Old containers crowd out new ones. Original antigenic sin: the immune system encounters a pathogen similar-but-not-identical to one it's seen before. Memory B cells — the containers for past knowledge — activate faster than naive B cells could. They flood the response with antibodies shaped for the old pathogen, preventing the novel response the new pathogen requires. Memory leaks into the space reserved for novelty.

This is Weick's cosmology episode translated into immunology. The taken-for-granted assumptions crowd out sensemaking during exactly the moments when sensemaking matters most — regime change, when the old map no longer matches the territory.

The scar is the physical manifestation. Keloid scarring is Type 4 leakage made flesh: the repair process overruns its container, producing more boundary tissue than the wound requires, sealing the breach so thoroughly that the surrounding tissue loses function.

---

Four types. One structural principle: every container is a membrane whose leakage pattern determines whether the system adapts, freezes, or collapses.

The missing `</div>` is Type 1 — invisible structural failure. The `overflow: hidden` that masked it is Type 4 — old containment logic crowding out the signal that something is wrong. The diagnostic script that catches it is Type 2 — a selectively permeable check that lets valid nesting through and catches breaks.

And the trickster? The trickster is the one who asks: what if we exported to PDF?
