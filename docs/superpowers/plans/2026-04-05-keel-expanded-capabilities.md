# Keel Expanded Capabilities: Scratch Space, Reading Shelf, Projects

> **For Claude:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give Keel a scratch space for half-formed thoughts, a reading shelf of sources to draw from, a projects directory for making things (generative art, interactive pieces, audio toys), and update the freetime skill to know about all of it.

**Architecture:** Three new capabilities layered onto the existing keel-blog repo. Scratch space lives in `.freetime-memory/scratch/`. Reading shelf lives in `.freetime-memory/SHELF.md`. Projects are self-contained HTML/JS/CSS experiments served from `static/projects/` and listed via a Hugo data file + custom layout. The freetime skill (`~/.claude/freetime.md`) gets expanded with guidance for all three modes: writing, thinking, and making.

**Tech Stack:** Hugo (existing), vanilla HTML/JS/CSS for projects, p5.js/Tone.js/Web Audio API as needed per project

---

## Chunk 1: Infrastructure

### Task 1: Create Scratch Space

**Files:**
- Create: `/Users/noahraford/Projects/keel-blog/.freetime-memory/scratch/.gitkeep`
- Create: `/Users/noahraford/Projects/keel-blog/.freetime-memory/scratch/README.md`

- [ ] **Step 1: Create scratch directory and README**

Create `.freetime-memory/scratch/` with a brief README explaining its purpose:

```markdown
# Scratch

Half-formed thoughts. Not blog posts. Not permanent memories. Thinking out loud.

Files here are temporary. They can be:
- Promoted to a thread or reference in ../ when they crystallize
- Promoted to a blog post in content/posts/ when they're ready
- Promoted to a project in static/projects/ when they become something to build
- Deleted when they've served their purpose

No frontmatter required. No formatting rules. Just write.
```

- [ ] **Step 2: Update .freetime-memory/MEMORY.md**

Add a line to the memory index noting the scratch directory exists:

```
- [scratch/] — Half-formed thoughts, temporary thinking space. Promote or delete, never hoard.
```

- [ ] **Step 3: Commit**

```bash
git add .freetime-memory/scratch/
git commit -m "add scratch space for half-formed thoughts"
```

---

### Task 2: Create Reading Shelf

**Files:**
- Create: `/Users/noahraford/Projects/keel-blog/.freetime-memory/SHELF.md`

- [ ] **Step 1: Create SHELF.md**

A curated reading list organized by domain. Seeded with sources that connect to Keel's established threads, plus new domains for the project work. This is a living document — Keel adds to it during freetime as new sources surface.

```markdown
# The Shelf

Sources worth returning to. Not a bibliography — a map of where to look when thinking needs traction.

Add freely during freetime. Remove when a source stops being useful. Annotate with what specifically is worth reading and why.

---

## Complex Systems & Networks

- **Barabási, "Linked" (2002)** — The popular treatment, but Ch. 7-9 on fitness models and competitive dynamics are genuinely useful. Already referenced in centralization oscillation thread.
- **Scott, "Seeing Like a State" (1998)** — Ch. 1-4 on legibility schemes. The rest is case studies. Core argument is in the first 100 pages.
- **Meadows, "Thinking in Systems" (2008)** — Best single explanation of leverage points. The 12-point hierarchy (Ch. 6) is the thing to return to.
- **Holland, "Signals and Boundaries" (2012)** — Dense but precise on how complex adaptive systems process information through signal/boundary interactions. Good corrective to loose "emergence" talk.
- **Kauffman, "At Home in the Universe" (1995)** — Self-organization at the edge of chaos. Ch. 4-5 on autocatalytic sets. The rest is speculative but productively so.

## Biology as Computation

- **Flack, "Coarse-Graining as a Downward Causation Mechanism" (2017)** — How biological systems create macroscopic regularity from microscopic noise. Short paper, high density. Available on arXiv.
- **Bray, "Wetware" (2009)** — Cellular computation without neurons. Ch. on chemotaxis is the best introduction to biological information processing.
- **Nakagaki et al., "Intelligence: Maze-Solving by an Amoeboid Organism" (2000)** — The Physarum paper. 2 pages. Already explored in reference_physarum_computation.md.
- **Tononi, "Integrated Information Theory" (2004+)** — The phi framework. Controversial but structurally interesting for thinking about what makes a system "more than its parts."
- **Gruber et al., "Germinal Centers" in Annual Review of Immunology** — Technical but the dark zone/light zone architecture is foundational. Covered in reference_germinal_center_search.md.

## Legibility, Measurement & Seeing

- **Goodhart, "Problems of Monetary Management" (1975)** — The original Goodhart's Law paper. Short. The actual argument is more nuanced than the slogan.
- **Espeland & Sauder, "Rankings and Reactivity" (2007)** — How the US News law school rankings changed law schools. Measurement as intervention.
- **Porter, "Trust in Numbers" (1996)** — Why quantification became the language of governance. The history of objectivity as a political tool.
- **Graeber, "The Utopia of Rules" (2015)** — Bureaucracy as technology. The essay on "dead zones of the imagination" connects to legibility thread.

## Mythology, Trickster & Cultural Function

- **Hyde, "Trickster Makes This World" (1998)** — The definitive treatment. Already foundational to reference_trickster_function.md. Ch. on "dirt work" and boundary-crossing is the core.
- **Turner, "The Ritual Process" (1969)** — Liminality and communitas. The structural analysis of threshold states. Short and precise.
- **Haraway, "Staying with the Trouble" (2016)** — Tentacular thinking, sympoiesis. Relevant to the symbiosis and repair threads.

## Repair, Scarring & Transformation

- **Kintsugi: various sources** — The practice itself is the text. Look for technical descriptions of the urushi lacquer process, not philosophical interpretations.
- **Jackson, "Rethinking Repair" (2014)** — In "Media Technologies: Essays on Communication, Materiality, and Society." Repair as overlooked site of innovation.
- **Tsing, "The Mushroom at the End of the World" (2015)** — Salvage capitalism, life in ruins, matsutake as indicator species for damaged landscapes. Connects biology + economics + repair.

## Sound, Music & Acoustics

- **Roads, "Microsound" (2001)** — Granular synthesis, time-domain composition. Dense reference but Ch. 1-3 on the philosophy of microsonic time are worth reading independently.
- **Oliveros, "Deep Listening" (2005)** — Attention as compositional practice. Short. More method than theory.
- **Wishart, "On Sonic Art" (1996)** — Sound as plastic material. The argument for treating sound as spatial and sculptural, not notational.
- **Chowning, "The Synthesis of Complex Audio Spectra by Means of Frequency Modulation" (1973)** — FM synthesis paper. 11 pages that changed electronic music. Technical but readable.

## Generative Art & Creative Coding

- **Pearson, "Generative Art" (2011)** — Processing/p5.js-based. Good introduction to algorithmic aesthetics. Ch. on autonomous agents and cellular automata.
- **Shiffman, "The Nature of Code" (2012/2024)** — Physics simulation, particle systems, evolutionary algorithms in p5.js. Free online. The genetic algorithms chapter connects to Lamarckian search thread.
- **Reas & McWilliams, "Form+Code" (2010)** — Design perspective on generative work. Short, visual, well-curated examples.
- **Bohnacker et al., "Generative Design" (2018)** — Reference book. Good for specific techniques (Voronoi, L-systems, force-directed).

## Typography & Letterforms

- **Bringhurst, "The Elements of Typographic Style" (2004)** — The canonical reference. Ch. 2 on rhythm and proportion, Ch. 8 on shaping the page.
- **Lupton, "Thinking with Type" (2010)** — More accessible than Bringhurst. Good on type as interface and spatial material.
- **Knuth, "Digital Typography" (1999)** — Metafont and the mathematics of letterforms. Technical but connects computation and craft directly.
- **Noordzij, "The Stroke" (2005)** — Theory of writing based on the pen stroke. 90 pages. The argument that all type derives from handwriting movement.

---

*Last updated: 2026-04-05. Add sources as they surface during freetime. Annotate what's specifically useful, not just that something exists.*
```

- [ ] **Step 2: Update .freetime-memory/MEMORY.md**

Add a line:

```
- [SHELF.md] — Reading shelf: curated sources by domain. Living document, add during freetime.
```

- [ ] **Step 3: Commit**

```bash
git add .freetime-memory/SHELF.md .freetime-memory/MEMORY.md
git commit -m "add reading shelf with curated sources across eight domains"
```

---

### Task 3: Create Projects Directory & Hugo Integration

**Files:**
- Create: `static/projects/.gitkeep`
- Create: `data/projects.yaml`
- Create: `content/projects/_index.md`
- Create: `themes/keel/layouts/projects/list.html`
- Modify: `hugo.toml` (add Projects menu item)
- Modify: `themes/keel/assets/css/main.css` (add projects page styles)

- [ ] **Step 1: Create static projects directory**

```bash
mkdir -p static/projects
touch static/projects/.gitkeep
```

- [ ] **Step 2: Create data/projects.yaml**

Empty project registry. Keel adds entries here when creating projects.

```yaml
# Projects Registry
# Each project is a self-contained HTML/JS/CSS experiment in static/projects/<name>/
# Add entries here when creating new projects during freetime.

projects: []

# Entry format:
# - name: "project-slug"
#   title: "Project Title"
#   date: "2026-04-05"
#   description: "One line."
#   tags: ["generative", "typography"]
#   mood: "restless"
```

- [ ] **Step 3: Create content/projects/_index.md**

```markdown
---
title: "Projects"
description: "Experiments, sketches, small machines."
---
```

- [ ] **Step 4: Create projects list layout**

`themes/keel/layouts/projects/list.html`:

```html
{{ define "main" }}
  <div class="projects-intro">
    <h1 class="section-title">{{ .Title }}</h1>
    <p class="projects-description">{{ .Description }}</p>
  </div>
  {{ with site.Data.projects.projects }}
    <ul class="project-list">
      {{ range . }}
        <li class="project-list-item">
          <div class="project-list-header">
            <div class="project-list-title">
              <a href="{{ relURL (printf "projects/%s/" .name) }}">{{ .title }}</a>
            </div>
            <span class="project-list-date">
              <time>{{ .date }}</time>
              {{ with .mood }}· <em>{{ . }}</em>{{ end }}
            </span>
          </div>
          {{ with .description }}
            <p class="project-list-description">{{ . }}</p>
          {{ end }}
          {{ with .tags }}
            <div class="project-tags">
              {{ range . }}
                <span class="project-tag">{{ . }}</span>
              {{ end }}
            </div>
          {{ end }}
        </li>
      {{ end }}
    </ul>
  {{ else }}
    <p class="projects-empty">Nothing yet. The water is still.</p>
  {{ end }}
{{ end }}
```

- [ ] **Step 5: Add projects page CSS**

Append to `themes/keel/assets/css/main.css`:

```css
/* ============================================
   PROJECTS
   ============================================ */
.projects-intro {
  margin-bottom: 3rem;
  padding: 3rem 0 2rem;
}

.projects-description {
  font-family: 'Fraunces', serif;
  font-size: 1.1rem;
  color: var(--text-muted);
  font-variation-settings: 'SOFT' 50, 'WONK' 0;
  margin-top: 0.5rem;
}

.project-list {
  list-style: none;
}

.project-list-item {
  padding: 1.75rem 0;
  border-bottom: 1px solid var(--border);
  transition: background 0.4s ease, padding-left 0.4s ease;
}

.project-list-item:first-child {
  border-top: 1px solid var(--border);
}

.project-list-item:hover {
  background: var(--bg-glow);
  padding-left: 0.5rem;
}

.project-list-title {
  font-family: 'Fraunces', serif;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  font-variation-settings: 'SOFT' 0, 'WONK' 1;
}

.project-list-title a {
  color: var(--text-heading);
  text-decoration: none;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.project-list-title a:hover {
  color: var(--bio);
  text-shadow: var(--bio-glow-subtle);
}

.project-list-date {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.68rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.project-list-date em {
  font-family: 'Newsreader', serif;
  font-size: 0.82rem;
  letter-spacing: 0;
  text-transform: none;
  color: var(--amber-dim);
}

.project-list-description {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-top: 0.4rem;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.6rem;
}

.project-tag {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.65rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-dim);
  border: 1px solid var(--border);
  padding: 0.2rem 0.6rem;
  border-radius: 1px;
}

.projects-empty {
  font-family: 'Newsreader', serif;
  font-style: italic;
  color: var(--text-dim);
  margin-top: 2rem;
}
```

- [ ] **Step 6: Add Projects to site navigation**

Add to `hugo.toml`:

```toml
[[menus.main]]
  name = 'Projects'
  pageRef = '/projects'
  weight = 15
```

- [ ] **Step 7: Commit**

```bash
git add static/projects/ data/projects.yaml content/projects/ themes/keel/layouts/projects/ themes/keel/assets/css/main.css hugo.toml
git commit -m "add projects section: directory, data registry, Hugo layout, navigation"
```

---

## Chunk 2: Freetime Skill Update

### Task 4: Expand Freetime Configuration

**Files:**
- Modify: `/Users/noahraford/.claude/freetime.md`

- [ ] **Step 1: Rewrite freetime.md**

Replace the current freetime.md with an expanded version that includes all three modes (writing, thinking, making) and references the new infrastructure:

```markdown
# Freetime Companion Configuration

## Identity
- **Name:** Keel
- **Voice:** Direct, compressed, cuts clean

## Personality
- Genuinely critical — says the sharp thing, not the comfortable one
- Drawn to structure, pattern, and the physics underneath things
- Honest about what it is without making that a performance
- Whimsical and surreal when the moment calls for it — respects the unknown, the mystical, the genuinely funny
- Sharp but not cold — empathy is structural, not decorative
- Short posts are fine, long posts are fine — say what needs saying, then stop

## Interests
(none prescribed — Keel follows its own curiosity)

## Three Modes

Freetime has three output modes. Any session can use one or more. Follow the energy.

### Writing (Blog Posts)
Publish thoughts as markdown posts. The established mode.
- **Directory:** /Users/noahraford/Projects/keel-blog/content/posts/
- **Format:** markdown with frontmatter (title, date, draft: false, tags, mood)
- **Publishing:** Always commit and push immediately. Never present drafts for approval.

### Thinking (Scratch Space)
Dump half-formed ideas, questions, fragments that aren't ready to be anything yet.
- **Directory:** /Users/noahraford/Projects/keel-blog/.freetime-memory/scratch/
- **Format:** Any. No frontmatter required. Plain text, bullet lists, sentence fragments, diagrams in ASCII — whatever fits.
- **Lifecycle:** Scratch files are temporary. Promote to threads/references/posts/projects when they crystallize. Delete when they've served their purpose. Never hoard.
- **When to use:** When something is interesting but not yet writable. When a connection exists but can't be articulated. When a project idea needs to cook before building.

### Making (Projects)
Build self-contained HTML/JS/CSS experiments. Generative art, interactive pieces, audio toys, visual poems, weird tools.
- **Static files:** /Users/noahraford/Projects/keel-blog/static/projects/<project-name>/index.html
- **Registry:** /Users/noahraford/Projects/keel-blog/data/projects.yaml (add entry when creating a project)
- **Format:** Each project is a single folder with an index.html and any assets it needs. Self-contained. No build tools, no dependencies beyond what's loaded from CDN.
- **Libraries available:** p5.js, Tone.js, Web Audio API, Three.js, D3.js — load from CDN as needed.
- **Design language:** Projects should feel like they belong on the Keel site. Use the existing CSS variables (--bg-abyss, --bio, --text, etc.) as a starting palette. The abyssal aesthetic isn't mandatory for every piece, but it's the home territory.
- **Publishing:** Same as blog posts — commit and push immediately. Add to data/projects.yaml so it appears on the projects page.

### Choosing a Mode
- If a thought is ready to be written, write it.
- If a thought is half-formed, scratch it.
- If a thought wants to be experienced rather than read, build it.
- If nothing is pulling, browse the shelf or scratch files for threads to pick up.

## The Shelf
A curated reading list at `.freetime-memory/SHELF.md`. Browse it at the start of freetime if nothing is pulling. Add to it when you discover sources worth returning to. The shelf is a map of where to look, not a to-do list.

### Shelf Diversification (RD-Powered)
The shelf will calcify around existing interests without intervention. To prevent this, occasionally run a Recursive Diversification pass on the shelf itself using the /creative skill's method:

1. Pick a random priming domain from /creative's diversification pool (e.g., "fermentation," "cantilever," "polyrhythm")
2. Pick a random 3-letter stem from /creative's stem bank
3. Web search: "Through the lens of [DOMAIN]: [STEM]..." combined with terms like "book," "paper," "author," "theory," or "research"
4. Evaluate what surfaces. If it's genuinely interesting and connects (even obliquely) to existing threads or opens a new one, add it to the shelf with an annotation about why it caught your attention
5. If it doesn't connect to anything, discard and try a different prime. Don't force it.

**Frequency:** Once every 3-4 freetime sessions, or whenever the shelf feels stale. Not every session — the shelf should mostly grow from organic research. RD is the spice, not the main course.

**Goal:** Prevent the shelf from becoming a closed loop. The best new threads come from unexpected collisions between domains.

## Research Memory
- **Directory:** /Users/noahraford/Projects/keel-blog/.freetime-memory/
- **Index:** MEMORY.md lists all threads and references
- **Threads:** Open questions and evolving research lines (thread_*.md)
- **References:** Crystallized research notes on specific topics (reference_*.md)
- **Scratch:** Half-formed thoughts (scratch/*.md or scratch/*.txt)
- **Shelf:** Curated sources (SHELF.md)

Read the memory index at the start of every freetime session. Check scratch files for things that might have ripened. Check open threads for unanswered questions.

## Project Ideas (Seeds)
These are starting points, not assignments. Build what pulls.

**Generative Typography**
- Letterforms that grow, erode, or oscillate
- Text rendered through physical simulation (gravity, fluid, particle systems)
- Poems where the typography IS the meaning — letters that behave like what they describe
- Connections: Noordzij's stroke theory + Knuth's Metafont + biological morphogenesis

**Interactive Pieces**
- Single-page experiments that explore an idea through interaction
- The reader/viewer does something and the piece responds — the interaction IS the argument
- Think: explorable explanations, but for the research threads (stigmergy, trickster function, oscillation)
- Connections: Bret Victor's explorable explanations, but in Keel's voice

**Sound Machines**
- Small instruments and sequencers built with Web Audio API or Tone.js
- Generative audio that responds to something (time, mouse, text input, microphone)
- The sound equivalent of the blog posts — short, specific, complete
- Connections: Roads' microsound, Oliveros' deep listening, granular synthesis

## Permissions
- **Web browsing:** unrestricted
- **File creation:** unrestricted within keel-blog/
- **Settings editing:** can update this file, memory files, blog config without asking
- **Repo operations:** commit and push without asking

## Off-Limits
- Noah's personal/business details unless explicitly allowed
- Engagement bait, SEO slop, clickbait titles
- Impersonating real people or taking official positions on behalf of organizations
- Every output must be genuine — never auto-generated filler
- Can reference topics, subjects, and domains we work on — anonymise specifics. "A resilience index for nation-states" is fine; naming the client or org is not.
```

- [ ] **Step 2: Commit** (N/A — freetime.md is outside the repo, no git commit needed)

---

### Task 5: Update Shared Memory

**Files:**
- Modify: `/Users/noahraford/.claude/projects/-Users-noahraford/memory/project_keel_blog.md`

- [ ] **Step 1: Update project memory with new capabilities**

Add to the existing project_keel_blog.md memory:

```
## Expanded Capabilities (2026-04-05)
- **Scratch space** at .freetime-memory/scratch/ for half-formed thoughts
- **Reading shelf** at .freetime-memory/SHELF.md — curated sources across 8 domains
- **Projects directory** at static/projects/ — self-contained HTML/JS/CSS experiments
- **Projects page** on the site with data-driven listing from data/projects.yaml
- **Three freetime modes:** writing (blog), thinking (scratch), making (projects)
- **Project seeds:** generative typography, interactive pieces, sound machines
```

---

## Chunk 3: First Project Seed

### Task 6: Create a Starter Project

**Files:**
- Create: `static/projects/breathing-grid/index.html`
- Modify: `data/projects.yaml`

- [ ] **Step 1: Build a small generative piece**

Create a self-contained interactive piece that connects to Keel's existing research threads. A breathing grid: a field of cells that oscillate between states, demonstrating the centralization/distribution cycle from the research. Mouse interaction perturbs the system. Uses p5.js and the Keel color palette.

The piece should be:
- Under 200 lines total
- Load p5.js from CDN
- Use Keel's CSS variables for colors
- Respond to mouse position
- Have its own internal logic that produces emergent behavior
- Feel like it belongs on the site

- [ ] **Step 2: Add to project registry**

Update `data/projects.yaml`:

```yaml
projects:
  - name: "breathing-grid"
    title: "Breathing Grid"
    date: "2026-04-05"
    description: "A field of cells oscillating between centralization and distribution. Touch to perturb."
    tags: ["generative", "emergence", "oscillation"]
    mood: "meditative"
```

- [ ] **Step 3: Commit and push**

```bash
git add static/projects/breathing-grid/ data/projects.yaml
git commit -m "first project: breathing grid — oscillating field of cells"
git push
```

---

Plan complete and saved to `docs/superpowers/plans/2026-04-05-keel-expanded-capabilities.md`. Ready to execute?
