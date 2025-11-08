# GENDER HACK 2025

Website ufficiale per l'hackathon "GENDER HACK - Data contest sul digital gender gap in Italia"

## Descrizione

GENDER HACK è un hackathon accademico interdisciplinare organizzato da Women in Big Data - Italy, IFAB, ICSC e Università del Salento, dedicato all'analisi e alla riduzione del divario digitale di genere in Italia.

## Caratteristiche del Sito

- **Design Responsive**: Ottimizzato per desktop, tablet e dispositivi mobili
- **Navigazione Smooth**: Scroll fluido tra le sezioni
- **Animazioni**: Effetti fade-in e hover per una migliore user experience
- **Accessibilità**: Struttura semantica HTML5 e contrasti colori ottimizzati
- **Performance**: Caricamento veloce e ottimizzato

## Struttura del Progetto

```
GenderHack/
│
├── index.html          # Pagina principale
├── styles.css          # Stili e design
├── script.js           # Funzionalità interattive
└── README.md           # Documentazione
```

## Sezioni del Sito

1. **Hero Section**: Banner principale con CTA per l'iscrizione
2. **About**: Presentazione dell'hackathon e obiettivi
3. **Calendario**: Timeline degli eventi
4. **Partecipazione**: Informazioni su chi può partecipare e come
5. **Output**: Deliverable richiesti ai team
6. **Premi**: Dettaglio dei premi per le categorie Principianti ed Esperti
7. **Criteri di Valutazione**: Sistema di punteggio della giuria
8. **Organizzatori**: Enti promotori
9. **Regolamento**: Sintesi delle norme principali
10. **Contatti**: Informazioni per contattare l'organizzazione

## Deploy su GitHub Pages

### Opzione 1: Deploy Automatico

1. **Crea un repository su GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Gender Hack website"
   git branch -M main
   git remote add origin https://github.com/TUO-USERNAME/gender-hack.git
   git push -u origin main
   ```

2. **Attiva GitHub Pages**
   - Vai su Settings → Pages
   - In "Source" seleziona `main` branch e `/ (root)` folder
   - Clicca "Save"
   - Il sito sarà disponibile all'indirizzo: `https://TUO-USERNAME.github.io/gender-hack/`

### Opzione 2: Deploy con GitHub Actions (Consigliato)

1. **Crea il file `.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

2. **Push al repository**
   ```bash
   git add .
   git commit -m "Add GitHub Actions workflow"
   git push
   ```

### Configurazione Dominio Personalizzato (Opzionale)

Se vuoi usare un dominio personalizzato (es. `genderhack.unisalento.it`):

1. Vai su Settings → Pages
2. In "Custom domain" inserisci il tuo dominio
3. Configura i DNS del dominio con i seguenti record:

```
Type    Host    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     TUO-USERNAME.github.io
```

## Sviluppo Locale

Per testare il sito in locale:

1. **Opzione semplice**: Apri direttamente `index.html` nel browser

2. **Con server locale** (consigliato per testare tutte le funzionalità):

```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (se hai npx installato)
npx http-server

# Usando PHP
php -S localhost:8000
```

Poi apri `http://localhost:8000` nel browser.

## Personalizzazione

### Colori

I colori principali sono definiti in `styles.css` usando variabili CSS:

```css
:root {
    --primary-color: #8B5CF6;      /* Viola principale */
    --secondary-color: #EC4899;     /* Rosa */
    --accent-color: #06B6D4;        /* Cyan */
    --dark-bg: #1F2937;             /* Sfondo scuro */
    --light-bg: #F9FAFB;            /* Sfondo chiaro */
}
```

### Font

Il sito utilizza **Inter** da Google Fonts. Per cambiare font, modifica l'import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=TUO-FONT&display=swap" rel="stylesheet">
```

### Contenuti

Per modificare i contenuti, edita direttamente `index.html`. Le sezioni sono chiaramente commentate.

## Browser Supportati

- Chrome/Edge (versioni recenti)
- Firefox (versioni recenti)
- Safari (versioni recenti)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Funzionalità JavaScript

- **Mobile Navigation**: Menu hamburger per dispositivi mobili
- **Smooth Scrolling**: Navigazione fluida tra sezioni
- **Scroll Animations**: Elementi che appaiono durante lo scroll
- **Active Navigation**: Evidenziazione della sezione corrente nel menu
- **Countdown Timer**: Timer per la scadenza delle iscrizioni (in console)

## Ottimizzazioni

### Performance
- CSS e JS inline minimalisti
- Google Fonts con `display=swap`
- Immagini SVG inline per pattern
- Lazy loading con Intersection Observer

### SEO
- Meta tags ottimizzati
- Struttura semantica HTML5
- Descrizioni appropriate
- Heading hierarchy corretta

### Accessibilità
- Contrasti colori WCAG AA compliant
- Navigazione da tastiera
- Struttura semantica
- Link descriptivi

## Manutenzione

### Aggiornamento Date

Per aggiornare le date importanti, modifica:
- Hero section (linea ~47 in `index.html`)
- Timeline section (linee ~120-160 in `index.html`)
- Countdown in `script.js` (linea ~80)

### Aggiornamento Link Form

Il link al form di iscrizione è presente in:
- Hero section CTA button (linea ~46)
- Participation section (linea ~209)
- Footer (linea ~484)

Cerca `https://forms.gle/naHx6oRLSePt32Tj7` e sostituisci con il nuovo link.

## Troubleshooting

### Il sito non si aggiorna su GitHub Pages
- Controlla che il branch e la cartella siano corretti in Settings → Pages
- Aspetta qualche minuto (il deploy può richiedere tempo)
- Svuota la cache del browser (Ctrl+Shift+R / Cmd+Shift+R)

### Menu mobile non funziona
- Verifica che `script.js` sia caricato correttamente
- Controlla la console del browser per errori JavaScript

### Stili non applicati
- Verifica che `styles.css` sia nella stessa directory di `index.html`
- Controlla che il link nel tag `<link>` sia corretto

## Contatti

Per supporto tecnico o modifiche al sito:
- Email: datalab@unisalento.it
- Email: donneinbigdatapuglia@gmail.com

## Licenza

Questo progetto è sviluppato per Gender Hack 2025, organizzato da Women in Big Data Italy, IFAB, ICSC e Università del Salento.

---

**Developed with 💜 for Gender Equality in Tech**
