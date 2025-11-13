# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is a **dual-system landing page repository** that maintains both original static HTML files and a Handlebars-based template system for rapid client site generation.

### Two Parallel Systems

**System 1: Original Static Files (Root Level)**
- `index.html` - Main landing page with VSL
- `education.html` - Pre-call education page
- `confirmation-page.html` - Post-submission thank you page
- These files are the "source of truth" and should NOT be modified by template builds

**System 2: Template System (For Client Sites)**
- `templates/*.hbs` - Handlebars templates derived from original HTML
- `clients/*/config.json` - Single config file controls entire client site
- `clients/*/output/` - Generated HTML files (deploy these)
- Build process: config.json → Handlebars → HTML output

### Critical Separation

**When modifying tracking pixels, meta tags, or core HTML structure:**
- Always update the **root HTML files** (index.html, education.html, etc.)
- Then separately update the **matching template files** (templates/*.hbs)
- These systems do NOT auto-sync - changes must be applied to both

## Build System

### Commands

```bash
# Create new client with scaffolding
npm run new-client <client-name>

# Build specific client
npm run build <client-name>

# Build all clients
npm run build:all

# Watch mode (not yet implemented)
npm run dev <client-name>
```

### Build Process Flow

1. **Load config**: `clients/<client-name>/config.json`
2. **Register Handlebars partials**: From `templates/partials/*.hbs`
3. **Register custom helpers**: `times`, `eq`, `json`, `foreach`
4. **Compile templates**: Each `.hbs` → `.html`
5. **Copy assets**:
   - Shared JS (utm.js) → `output/js/`
   - Client assets → `output/` (flat structure)
6. **Output location**: `clients/<client-name>/output/`

### Custom Handlebars Helpers

- `{{times n}}` - Repeat block n times
- `{{eq a b}}` - Equality check
- `{{json obj}}` - Stringify for debugging
- `{{foreach array}}` - Loop with index access

## Config-Driven Architecture

**Single source of truth**: `clients/*/config.json`

The entire site is controlled by this one JSON file. Key sections:

```
client → name, businessName, domain
colors → primary, accent, text colors
fonts → heading, body fonts
hero → headline, video, CTA
mission → title, paragraphs
about → founder story, timeline
education → pre-call videos
testimonials → social proof
confirmation → thank you page
```

**Asset path convention**: References in config.json are relative to `assets/` folder
- `"portrait.jpg"` → `clients/*/assets/portrait.jpg`
- `"testimonials/result-1.jpg"` → `clients/*/assets/testimonials/result-1.jpg`

During build, assets are copied **flat** to output root (not nested).

## Tracking Systems

### UTM Tracking (`shared/js/utm.js`)

Framework-agnostic utility that:
1. **Captures** UTM parameters from URL on page load
2. **Persists** to localStorage (key: `pp_utm`)
3. **Populates** hidden form inputs matching UTM param names
4. **Appends** UTMs to iframe src attributes (for Typeform embeds)

Global API: `window.__UTM__.read()`, `.populateHiddenInputs()`, `.appendUTMsToIframes()`

### Meta Pixel Tracking

**Current implementation** (as of last commit):
- **index.html**: Meta Pixel with PageView event
- **education.html**: Meta Pixel with PageView + Schedule conversion event
- **confirmation-page.html**: No pixel (intentionally removed)

**Pixel ID**: 1410609885939308

**When adding tracking**:
1. Add pixel code to `<head>` after UTM script
2. For conversions, add `fbq('track', 'EventName');` after PageView
3. Update **both** root HTML and templates if applicable

## Templates Structure

### Main Templates

- `templates/index.hbs` - Main landing page
- `templates/education.hbs` - Education page
- `templates/confirmation-page.hbs` - Thank you page

### Partials System

Located in `templates/partials/`:
- `video-embed.hbs` - Wistia video player embed
- `typeform-modal.hbs` - Modal for Typeform embeds
- `video-modal.hbs` - Full-screen video modal

Usage: `{{> partial-name context}}`

Partials are auto-registered during build by reading `templates/partials/*.hbs`.

## Workflow Patterns

### Creating a New Client Site

1. `npm run new-client john-doe`
2. Edit `clients/john-doe/config.json` (all content here)
3. Add images to `clients/john-doe/assets/`
4. `npm run build john-doe`
5. Deploy `clients/john-doe/output/` to Vercel

**Time estimate**: 15-30 minutes (vs 2-4 hours manually)

### Modifying Original Site

When updating index.html, education.html, or confirmation-page.html:
1. Make changes to root HTML file
2. Test the original file
3. If change should apply to client sites, **manually update** corresponding template
4. Rebuild all clients: `npm run build:all`

### Adding Tracking Pixels

**For root site**:
```html
<!-- Add to <head> after UTM script -->
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){...}
fbq('init', 'PIXEL_ID');
fbq('track', 'PageView');
fbq('track', 'CustomEvent'); // Optional conversion
</script>
```

**For template system**:
- Add same code to `templates/*.hbs`
- Use Handlebars variables if pixel ID varies: `{{client.pixelId}}`

## Important Constraints

### Don't Auto-Sync

- Root HTML files and templates are **separate codebases**
- Changes to one do NOT automatically update the other
- Always consider: "Does this change need to be in both places?"

### Asset Path Translation

- Config: `"portrait.jpg"`
- Source: `clients/john-doe/assets/portrait.jpg`
- Output: `clients/john-doe/output/portrait.jpg` (flat, no /assets prefix)
- HTML uses: `<img src="portrait.jpg">`

### Deployment Target

Always deploy the **output/** folder contents:
- `clients/john-doe/output/` → Vercel root
- Not `clients/john-doe/` itself

## Common Modifications

### Changing Colors

Update `config.json`:
```json
{
  "colors": {
    "primary": "#5B1F0F",
    "primaryHover": "#4A1A0D"
  }
}
```
Then rebuild.

### Adding Videos

1. Get Wistia video ID
2. Add to config section (hero, education.videos, testimonials)
3. Rebuild

### Adding Testimonials

1. Place images in `clients/*/assets/testimonials/`
2. Add filenames to `config.json` testimonials.images array
3. Rebuild

## Git Workflow

This repo uses conventional commits with Claude Code attribution:

```bash
git commit -m "$(cat <<'EOF'
Brief summary of changes

- Detailed point 1
- Detailed point 2

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

## Debugging

### Build Fails

- Check `config.json` syntax (valid JSON)
- Verify client directory exists: `clients/<name>/`
- Check template compile errors in console output

### Assets Missing After Build

- Verify files exist in `clients/*/assets/`
- Check filename matches exactly (case-sensitive)
- Remember: assets copy flat to output root

### UTMs Not Working

- Check localStorage: `window.__UTM__.read()` in browser console
- Verify hidden inputs have correct `name` attributes
- Check iframe src has UTM parameters appended

### Pixel Not Firing

- Open browser dev tools → Network tab
- Filter for "facebook.net"
- Check console for `fbq` errors
- Verify pixel ID is correct
