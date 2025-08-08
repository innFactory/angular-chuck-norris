<img src="./docs/logo.png">

# Start 🚀

Die Angular Chuck Norris Challenge ist dein erster Einstieg in die Angular Webapp Entwicklung. Erledige alle Challenges damit Chuck Norris stolz auf dich ist! Im Rahmen des Projekts wirst du das Frontend einer 404-Fehlerseite gestalten, über das Global-State-Management in Angular erfahren, selbst eine Katzenbild-API anbinden und als Bonus Aufgabe deine Daten in einer externen Datenbank speichern.

# Ⅰ. Challenge 🎖️ - Start

### Ⅰ.Ⅰ. GitHub Account

Jeder geschriebene Programmcode muss auch gespeichert und weitergegeben werden können. GitHub ist eine übergreifende Entwicklerplattform die das ermöglicht und auch dieses Projekt speichert.

Erstelle dir, falls du noch keinen hast, zunächst einen eigenen GitHub Account auf [https://github.com/](https://github.com/). Dieser wird dich bei der innFacotory und in deinem späteren Entwickler-Leben noch lange begleiten.

Du wirst später nicht nur deinen Programmcode mit anderen in Projekten teilen (=Publishen), sondern in sogennanten Code-Reviews gegenseitig mit anderen Entwicklern den Code überprüfen und verbessern.

### Ⅰ.Ⅱ. Entwickeln aus der Entwicklungsumgebung

Softwareentwickler benötigen einen Ort an dem sie den Programmcode ansehen, schreiben und verändern können.

Dieser Ort ist die sogennante Entwicklungsumgebung, auf englisch Integrated Development Environment, abgekürzt IDE. Für die Angular Chuck Norris App benutzen du am Besten VS Code.

1. Installiere dir [Visual Studio Code](https://code.visualstudio.com/).
2. Öffne VS Code. Wenn du Lust hast, mache dich mit diesem [Tutorial](https://code.visualstudio.com/docs/getstarted/getting-started) in VS Code etwas vertraut.

### Ⅰ.Ⅲ. Webapp kopieren

In GitHub online gespeicherte Software muss zum Bearbeiten erst lokal auf deinem PC kopiert werden (=Geklont). Das geht ganz einfach mit VS Code.

VS Code kommt standardmäßig mit einer Anbidung für GitHub, dem Source Control Management. Öffne den Tab des Source Control und wähle "Clone Repository". Gebe nun die URL des Repositories `https://github.com/innFactory/angular-chuck-norris` ein und wähle einen beliebigen Speicherort auf deinem PC.

![Source Control View](./docs/firstrun-source-control.png)

### Ⅰ.Ⅳ. Nodejs installieren

Die meisten Webapp Projekte haben Abhängigkeiten an andere Bibliotheken in Form von Paketen. Diese können mit dem Node Package Manager von Nodejs unkompliziert installiert werden. Installiere dir hierfür nun Nodejs und führe Node und NPM zum Test im Terminal in VS Code aus.

1. Installiere die Nodejs über den Installer [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
2. Prüfe ob die Befehle `node`und `npm` in deinem System global funktionieren.

   - Öffne dazu in VS Code das Terminal über die obere Leiste `View -> Terminal`.
   - Gebe im Terminal die folgenden Befehle ein. Nacheinander solltest du die aktuell installierte Version sehen.

   ```bash
    node --version
    # Ausgabe z.B. "v22.18.0".

    npm --version
    # Ausgabe z.B. "10.9.3".

    npx --version
    # Ausgabe z.B. "10.9.3".
   ```

3. Mache dich über die weiteren Funktionen von NPM vertraut [https://docs.npmjs.com/about-npm](https://docs.npmjs.com/about-npm).

### Ⅰ.Ⅴ. Abhängigkeiten installieren

Nun installiere ganz einfach die Dependencies aus der Konsole mit dem Befehl `npm install` und warte bis sie heruntergeladen sind.

### Ⅰ.Ⅵ. WebApp starten

Nun kannst du das Webprojekt aus der Konsole starten mit `npm start`.

Öffne den Browser auf [http://localhost:4200](http://localhost:4200) und du solltest die Webapp sehen.

<img src="doc/screenshot_0.png" width="40%">

### Ⅰ.7. Einstieg in die App

Jede Angular Komponente in deiner WebApp besteht aus einem Logik-, einem Struktur- und einem Stylingteil. Sehe dir exemplarisch einmal die Home-Page Komponente genauer an. Navigiere in in den Pfad `src -> pages -> home` und sehe dir die Datein an.

| Datei     | Function                |
| --------- | ----------------------- |
| home.ts   | Logikteil in TypeScript |
| home.html | Strukturteil in HTML    |
| home.scss | Stylingteil in SCSS     |

Fühle dich nicht überfordert von all den verschiedenen Sprachen und Frameworks. Du bekommst eine Schritt für Schritt Einführung in die Angular Welt.

### Ⅰ.8. Kennenlernen mit Chuck Norris

Im Browser siehst du die Vorstellung von Chuck Norris. Die Struktur ist in der Markupsprache HTML verfasst.
Sieh dir die Struktur in der Homepage [home.html](./src/pages/home/home.html) einmal genauer an. Der Text `..Ich bin Chuck Norris, ein Kampfsportler und Schauspieler..` ist in einem HTML `<p>` Paragraph Element eingeschlossen bzw. gewrapped.

Recherchiere auf diesem Wikipedia Eintrag über [Chuck Norris selbst-erfundenen Kampfkünste](https://en.wikipedia.org/wiki/Chuck_Norris#Martial_arts_knowledge) und füge in der `home.html` Datei weitere Fakten über Chuck Norris hinzu. Die Änderungen erscheinen beim Speichern automatisch im Browser.

# Ⅱ. Challenge 🎖️ - Leseratte

### Ⅱ.1. Offiziell ist am Besten - Angular Doku

Für jedes Framework und jede Sprache gibt es eine offiziele Dokumentation, so auch für Angular.

Bei Angular gibt es sogar ein interaktives Mini-Browser Tutorial. Schließe dieses [Tutorial](https://next.angular.dev/tutorials/learn-angular) ab.

Lese dir zum Einstieg außderdem folgende Angular-Artikel durch.

- Aufbau der Angular Komponenten: https://next.angular.dev/essentials/components
- Services
- Signals

### Ⅱ.2. Schön muss es sein - Angular Material

Angular Material Guide

### Ⅱ.3. TypeScript

TypeScript Guide

### Ⅱ.4. HTML

HTML Guide

### Ⅱ.5. CSS und SCSS

CSS und SCSS Guide

Geschafft! Das war aber eine Menge Input. Jetzt wird programmiert! Mache mit der [Ⅲ. Challenge](#ⅲ-challenge-️) weiter.

# Ⅲ. Challenge 🎖️ - Los geht's!

### Ⅲ.Ⅰ. Chuck Norris macht keine Fehler

Im Gegensatz zu Chuck Norris, dürfen wir Entwickler auch mal Fehler machen. Versuche im Browser eine Seite zu öffnen die es in unserer WebApp noch nicht gibt. Z.B. [[http://localhost:4200/diese-seite-gibts-ganz-bestimmt](http://localhost:4200/diese-seite-gibts-ganz-bestimmt)].

Was siehst du?

Eine leere seite mit Header und Footer? Wie langweilig! In unserem src/pages/ Ordner fehlt noch eine Not-Found Seite.

1. Sieh dir einmal bekannte Not-Found Seiten im Internet an:
2. In Angular kannst du ganz leicht aus der Kommandozeile neue Komponenten generieren. Öffne die Commandozeile im Projektordner angular-chuck-norris.
   Führe nun den Befehl `npx ng generate component ../pages/error` aus. Im src/pages Ordner sollte nun eine neue Angular Komponente im Ordner error erscheinen.

Angular kommt standardmäßig mit einem WebApp Pfadaufbau. Dieser kann in der Datei [app.routes.ts](./src/app/app.routes.ts) angepasst werden.

Füge nun in in der Kommentierten Stelle die Error-Komponente hinzu. Vergesse nicht sie wie die anderen Seiten zu importieren.

```bash
  // {
  //   path: '**',
  //     component: ... , // Add error page
  // },
```

### Ⅲ.Ⅱ. Schönheit ist nicht alles - aber auch wichtig

"Es gibt keinen Schönheitswettbewerb mit Chuck Norris, denn alle wissen, dass er der einzige Gewinner wäre."

Passe nun die error.html Datei an und gestalte Sie ein bisschen. Besuche nochmal die nicht-existierende Seite. Füge auch etwas CSS hinzu. Du kannst es einfach in die SCSS Datei Schreiben. Jedes gültige CSS ist auch SCSS aber nicht andersherum.

# Ⅳ. Challenge 🎖️ - Witze-Wettbewerb

# Ⅳ.1. Lieblingswitz

Sieh dir einmal die Witze Seite an und generiere so viele Chuck Norris Witze wie du willst!

# Ⅳ.2. Witze-Wettbewerb

Tritt nun in einem Witze-Wettbewerb gegen Chuck Norris an.

# Ⅴ. Challenge 🎖️ - Lieblingswitz

# Ⅵ. Challenge 🎖️ - Nur Bares ist Wahres 💸 aber in der WebApp zählt nur Speicherbares

Speicherung von Witzen zum Benutzer in der Firebase API.

<!-- # Ⅶ. Challenge 🎖️ - # Ⅷ. Challenge 🎖️ - -->

<!-- - Dieses Template dient als Basis für ein paar Aufgaben
- Im Template befindet sich bereits alles was man so braucht
- Als Beispiel wurde die https://api.chucknorris.io/ API angebunden, es wird immer ein zufälliger Witz geladen



## 1. Challenge: Template
### 1.1. Template auschecken

- Installiere dir [Github-Desktop](https://desktop.github.com/)
- Melde dich dort mit deinem Github-Account an
- Falls du noch keinen Account hast, kannst du dir einfach auf https://github.com/ einen erstellen
- Nun gehe auf https://github.com/innFactory/react-chuck-norris und unter dem grünen "Clone" Button findest du die Funktion "Open with Github Desktop". Alternativ kannst du das Repo auch direkt in Github Desktop oder mit Git clonen


### 1.2. Node installieren
- Gehe auf https://nodejs.org/en/download/ und installiere dir Nodejs
- Damit hast du den Packet-Manager NPM
- Lies dir durch, für was NPM so gut ist: https://docs.npmjs.com/about-npm


### 1.3. Template starten
- Gehe mit dem Terminal in deinem Ordner, in dem du das Template gecloned hast z.B. `Documents/Github/react-chuck-norris`
- nun installiere zunächst die Dependencies mit: `npm install`
- danach kannst du das Webprojekt starten mit: `npm start`


### 1.4. Template im Browser aufrufen
- nun kannst du unter http://localhost:3000 die WebApp anschauen
- müsste so aussehen, wie im Screenshot
  <img src="doc/screenshot_0.png" width="40%">

### 1.4.1 Account erstellen
- Geh auf den Link "Create an account" oder http://localhost:3000/signup
- Wenn du dort einen Account erstellst, wir im Hintergrund ein Benutzer zu dem hinterlegten Firebase Projekt hinzugefügt
- Du solltest dich nun anmelden können und auf die Home-Page gelangen:
  <img src="doc/screenshot_1.png" width="50%">


### 1.5. Code öffnen mit VS Code
- Nun schauen uns wir den SourceCode von der WebApp an
- Installiere dir hierfür [VS-Code](https://code.visualstudio.com/)
- Öffne in VS-Code den geklonten Ordner /react-chuck-norris

### 1.6. Erste Änderung
- Öffne in dem Projekt, dass du in VSCode offen hast das File `pages/index.tsx`
- Ändere die Überschrift "Home" zu irgendwas anderem
- Nun müsstest du instant die Änderungen im Browser sehen
- Falls nicht, gehe in ein Terminal und führe in deinem Projektordner `npm start` aus

## 2. Challenge: Hintergrundwissen

### 2.1 Was ist React?
- Beschäftige dich mit der Doku von React: https://reactjs.org/
- Du solltest danach folgendes wissen:
  * Was ist JSX?
  * Was ist eine StatefulComponent?
  * Was sind Props?
  * Was sind Hooks?
- natürlich kannst du neben der offiziellen Doku auch viele andere Quellen nutzen

### 2.2 Komponenten Library Material-UI
- Material-UI ist ein Design von Google
- Dieses Design wurde von einem Typen namens
Olivier Tassinari in React nach implementiert
- Dadurch können wir diese OpenSource Komponenten nutzen und müssen nicht jeden Button etc. neu erfinden, sondern können direkt auf etliche fertige und ziemlich schöne Komponenten zugreifen
- diese kann man sich hier anschauen: https://mui.com/material-ui
- Du kannst ruhig mal alle durchklicken, um ein Gefühl dafür zu bekommen

### 2.3 Typescript
- Wir nutzen statt Javascript eine sehr ähnliche "Variante" und zwar [Typescript](https://www.typescriptlang.org/)
- Lies dir mal die erste Seite der Doku durch
- Du solltest nach einer (längeren) Recherche folgendes Wissen:
  * Was ist eine typisierte Sprache?
  * Welche typisierten Sprachen gibt es noch?
  * Welche untypisierten Sprachen gibt es noch?
  * Welche Vorteile hat Typescript?
  * Wie sehr unterscheidet sich Typescript von Javascript?
  * Kann ein Browser Typescript interpretieren? Bzw. kann Typescript direkt im Browser ausgeführt werden?


## 3. Challenge: Styling

### 3.1 CSS
- Das Styling im Web basiert letztendlich immer auf CSS
- Was CSS ist kannst dir z.B. [hier](https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web/CSS_basics) anschauen
- Mit der Material-UI Library kommen ein paar Erleichterungen mit, sodass man z.B. CSS direkt im Typescript-File schreiben kann: https://mui.com/styles/basics/

### 3.2 Eine coole 404 Seite gestalten
- Gehe in das File `404.tsx`
- Diese Seite wird immer angezeigt, falls die Route nicht existiert. z.B. wenn du http://localhost:3000/asdf aufrufst (wenn du angemeldet bist)
- Die Seite ist nicht besonders schick, darum würde ihr ein Redesign gut stehen
- Es gibt ein paar 404 Seiten, die den Benutzer auf eine "nettere" Art sagen, dass die Seite nicht gefunden wurde hier ein paar Beispiele:
  * https://www.amazon.de/asdf
  * https://laura.vb-rb-baufinanzierung.de/asdf
  * https://9gag.com/asdf
  * https://www.netflix.com/asdf


## 4. Challenge: Favoriten

- Wenn man im Template einen Witz gut findet, soll man ihn zu seinen Favoriten hinzufügen können
- Erstelle dazu eine neue Page, um dort die Liste anzuzeigen: `pages/favorites.tsx`
- Ziel: Liste anzeigen mit Favoriten

### 4.1 Globales State Management
- Jede Component kann ihren eigenen State haben. Der State kann in Form von Props auch an den Kindern übergeben werden. Muss aber der State von einem Ast auf den nächsten wird diese Methode schnell aufwendig und unübersichtlich. Darum brauchen wir für manche Daten ein "globales Statemanagement"
- In diesen Template verwenden wir hierfür [recoil](https://recoiljs.org/)
- Da gibt's ein gutes Video, indem die Funktionsweise erklärt wird: https://youtu.be/_ISAA_Jt9kI
- In dem Projekt ist hierfür ein Demo mit eingebaut. Du hast dich sicher schon gefragt für was die "Colors" sind. Unter Colors kannst du eine zufällige Farbe erstellen und sie mit "Add color to list" zur Tabelle hinzufügen. Im Hintergrund wird hierbei die Farbe zu einem Recoil-State-Atom hinzugefügt. Das findest du unter `src/randomColor/state/`
- Auf den State selbst wird dann mit einem Hook (`const [colorList, setColorList] = useRecoilState(colorsState);`) z.B. in der Komponente `src/randomColor/components/RandomColorGenerator.tsx` zugegriffen.


### 4.2 Favoriten im State
- Zu nächst brauchen wir noch einen Button, damit ein Joke favorisiert werden kann. Ähnlich wie bei den Colors kannst du neben den Button "New Joke" einfach noch einen Favoriten-Button hinzufügen
- Nun brauchen wir eine Liste mit Jokes als Favoriten im State
- Immer wenn man auf den Favoriten-Button auf der HomePage drückt, soll der entsprechende Witz zu dieser Liste hinzugefügt werden
- Die Liste wird dann in der `page/favorites.tsx` gelesen und angezeigt
- Dafür brauchen wir keinen Request in /api und damit auch keinen selector. Recoil-Atoms werden vollkommen ausreichen.


## 5. Challenge: Random Cat

Neben Chucknorris Witzen wäre das Prinzip auch für Katzen Fotos cool. Dazu gibt es auch eine public API: https://cataas.com/cat mit folgendem Queryparameter bekommt man ein JSON zurück:
 https://cataas.com/cat?json=true

### 5.1 Neue Seite mit zufälligem Katzenbild
- Lege eine neue Seite in `/pages` an, die zufällige Katzenbilder laden kann
- Unter `/src` kannst du einen neuen Bereich anlegen, der dann alle nötigen Unterordner für diese fachliche Domäne zusammenhält. z.B. `/src/RandomCatPic` in diesem Ordner soll es dann wie in den anderen auch z.B. den `/components` Ordner geben.
- Im `/model` brauchen wir einen Datentyp `CatPic`, der das JSON von  https://cataas.com/cat?json=true abbilden kann


### 5.2 Favorisierte Katzen
- Auf der existierenden `favorites.tsx` soll es einen Tab (oder irgendwas ähnliches geben), damit man auch Katzenbilder-Favoriten sehen kann
- Ähnlich wie in Challenge 4 brauchen wir hier auch wieder eine State Liste mit Katzenbildern



## 6. Challenge: Eigene Witze
- Neben den Witzen von Chucknorris, wäre es ganz gut, wenn man auch eigene Witze über ein Textfeld eingeben könnte
- Diese können entweder gleich zu den Favoriten, oder auch in einen separaten State gespeichert werden
- Die eignen Witze können auch in der Favoriten-Liste angezeigt werden, sollen aber gekennzeichnet sein, bzw. sich durch z.b. ein Icon unterscheiden


## 7. Eigenes Firebase Projekt erstellen
- Firebase ist eine Teilmenge der Google-Cloud, extra aufbereitet um eine einfachere Cloudumgebung maßgeschneidert für App- und Webprojekte zu haben.
- Lies dich einfach mal ein, damit du eine Übersicht bekommt, was Firebase alles so kann: https://firebase.google.com/
- Anschließend kannst du dir ein Projekt erstellen
- Beim erstellen bekommst du die Credentials für das Web diese solltest du dir kopieren, die brauchen wir später (sind aber auch in den Projekteinstellungen einsehbar)
- Unter "Authentication" kannst du die Authentifizierung mit Email/Password aktivieren
- Unter `src/firebase` werden die Firebase Parameter über Environment Variablen geladen. Diese Variablen kannst du in `.env.test` ändern. Falls du bei dir ein `.env.local` hast, ändere auch hier die Variablen auf dein neues Projekt.
- In der `.firebaserc` musst du noch die Projekt-Id tauschen
- Das Ergebnis sollte sein, dass wenn du das Projekt wieder startest und einen neuen Chuck-Norris-Account erstellt, dass dieser dann unter "Authentication" in deinem Firebase-Projekt erscheint -->

```

```
