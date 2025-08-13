<img src="./docs/logo.png">

# Start 🚀

Die Angular Chuck Norris Challenge ist dein erster Einstieg in die Angular Webapp Entwicklung. Erledige alle Challenges, damit Chuck Norris stolz auf dich ist! Im Rahmen des Projekts wirst du das Frontend einer 404 Not-Found Seite gestalten, mehr über das Global-State-Management und reaktive Programmierung in Angular erfahren, selbst eine Katzenbild-API anbinden und als Bonus Aufgabe deine Daten in einer selbst aufgesetzen, externen Datenbank speichern.

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

### Ⅱ.Ⅰ. Offiziell ist am Besten - Angular Doku

Für jedes Framework und jede Sprache gibt es eine offiziele Dokumentation, so auch für Angular.

Bei Angular gibt es sogar ein interaktives Mini-Browser Tutorial. Schließe dieses [Tutorial](https://next.angular.dev/tutorials/learn-angular) ab.

Lese dir zum Einstieg außderdem folgende Angular-Artikel durch.

- Aufbau der Angular Komponenten: https://next.angular.dev/essentials/components
- Services
- Signals

### Ⅱ.Ⅱ. Schön muss es sein - Angular Material

Angular Material Guide

### Ⅱ.Ⅲ. TypeScript

TypeScript Guide

### Ⅱ.Ⅳ. HTML

HTML Guide

### Ⅱ.Ⅴ. CSS und SCSS

CSS und SCSS Guide

Geschafft! Das war aber eine Menge Input. Jetzt wird programmiert! Mache mit der [Ⅲ. Challenge](#ⅲ-challenge-️) weiter.

# Ⅲ. Challenge 🎖️ - Los geht's!

### Ⅲ.Ⅰ. Chuck Norris macht keine Fehler

Im Gegensatz zu Chuck Norris, dürfen wir Entwickler auch mal Fehler machen. Versuche im Browser eine Seite zu öffnen die es in unserer WebApp noch nicht gibt. Z.B. [[http://localhost:4200/diese-seite-gibts-ganz-bestimmt](http://localhost:4200/diese-seite-gibts-ganz-bestimmt)].

Was siehst du?

Eine leere seite mit Header und Footer? Wie langweilig! In unserem src/pages/ Ordner fehlt noch eine Not-Found Seite.

1. Sieh dir einmal bekannte Not-Found Seiten im Internet an:
2. In Angular kannst du ganz leicht aus der Kommandozeile neue Komponenten generieren. Öffne die Commandozeile im Projektordner angular-chuck-norris.
   Führe nun den Befehl `npx ng generate component ../pages/not-found` aus. Im src/pages Ordner sollte nun eine neue Angular Komponente im Unterordner not-found erscheinen.

Angular kommt standardmäßig mit einem WebApp Pfadaufbau. Dieser kann in der Datei [app.routes.ts](./src/app/app.routes.ts) angepasst werden.

Füge nun in in der Kommentierten Stelle die Not-Found Komponente hinzu. Vergesse nicht sie wie die anderen Seiten zu importieren.

```bash
  // {
  //   path: '**',
  //     component: ... , // Add error page
  // },
```

### Ⅲ.Ⅱ. Schönheit ist nicht alles - aber auch wichtig

"Es gibt keinen Schönheitswettbewerb mit Chuck Norris, denn alle wissen, dass er der einzige Gewinner wäre."

Passe nun die error.html Datei an und gestalte Sie ein bisschen. Besuche nochmal die nicht-existierende Seite. Füge auch etwas CSS hinzu. Du kannst es einfach in die SCSS Datei Schreiben. Jedes gültige CSS ist auch SCSS aber nicht andersherum.

# Ⅳ. Challenge 🎖️ - Lieblingswitz

### Ⅳ.Ⅰ. Ansehen

In der Folgenden Challenge wirst du Angular Services verstehen und am Beispiel des bereits implementierten favourite-chuck-jokes Services ansehen. Im Anschluss erstellst du einen Komponente in der du neue, eigene Witze eingeben kannst. Dabei kommst du weiter mit dem Design System Angular Materials in Berührung. Später wirst du auch den Verwendungszweck von Angular Signals verstehen indem du wieder Witze aus der Tabelle löschst.

- Sieh dir nun die Chuck Norris Witze Favorisieren Funktion einmal an. Gibst du einen Witz ein und klickst auf favorisieren, dann erscheint er in der Seite der Favoriten.
- Das macht das Global State Management über sogenannte Services in Angular möglich.
- Sieh dir den Programmcode zur chuck-jokes-card Komponente, zum favourite-chuck-jokes Service und die updateChucksJokeTableData Methode der page favourites einmal genauer an und versuche ihn zu verstehen.

Die Methode lädt die in favourite-chuck-jokes Service gespeicherten Witze jedes mal bei Öffnen der Favouritesseite in die Tabelle. Probiere es gerne selbst aus und generiere und favorisiere so viele Chuck Norris Witze wie du willst!

### Ⅳ.Ⅱ. Witze-Wettbewerb

Damit du mit Chuck Norris in Konkurrenz treten kannst, wirst du nun auch eine Eigene-Witze Funktion mit Inputfeld implementiern.

- Erstelle analog zur Komponente ChuckJokesCardComponent in `src/components/chuck-jokes-card/` eine neue OwnJokesCardComponent.
- Das kannst du wieder mit `ng generate component (ort)` aus der Konsole machen.
- Binde die Komponente in die `src/pages/jokes/` Seiten Komponente ein.
- Kannst du analog zur ChuckJokesCardComponent die GenerationCardComponent im HTML der OwnJokesCardComponent wiederverwenden?
  Diese Wiederverwenung ist die Angular Content Projection. Diese Techik ist bereits etwas komplexer zu verstehen. Hier die offiziele Dokumentation [Tutorial Content Projection](https://angular.dev/guide/components/content-projection).
- Füge in die neue OwnJokesCardComponent einen Angular Mat-Input und einen Favorisieren Angular Mat-Button auf der Witze Seite unterhalb der Chuck's Witze Komponente hinzu.
- Hilfreiche Dokus dazu findest du hier zu [Mat-Input](https://material.angular.dev/components/input/overview) und hier zum [Mat-Button](https://material.angular.dev/components/button/overview).

### 4.3. Services in Angular

Nun hast du ein Frontend mit Eingabefeld und Button. Im Folgenden implementierst du die Favorisieren Funktion auch für eigene Witze. Auf der Mat-Button Doku erfährst du wie du bei Klick auf den Button eine Methode aufrufst.

Du willst die Daten auf der Seite Witze and die Seite Favoriten weitergeben. Diese globale Weitergabe nennt sich Global State Management und ist in verschiedenen Frameworks unterschiedlich aufgebaut. In Angular geht dies über Services. Sieh dir gerne dazu hier weiter die offzielle Dokumentation an oder schließe das [Angular Services Tutorial](https://angular.dev/tutorials/first-app/09-services) ab.

- Sieh dir den FavouriteChuckJokesSevice und seine Verwendung in ChuckJokesCardComponent und der Favourites Seite genauer an.
- Implementiere nun auch einen FavouriteOwnJokesService. Das geht auch über den `ng generate` Befehl.
- Der Service soll auch nur über die öffentlichen add, remove und getAll Methoden verwendbar sein.
- Füge in der OwnJokesCardComponent eine neue Methode für das favorisieren hinzu. Gebe den neuen, eigenen Witz über die add Methode an den Service.
- Passe die Favoriten Seite so an, dass im Konstruktor nun auch deine Eigenen Witze mitgeladen werden. Dazu kannst du eine neue Methode updateOwnJokesTableData erstellen.

### 4.4. Echt peinlich: Unlustiger Witz

Du hast einen peinlichen Witz hinzugefügt? Hoffentlich sehen das nicht Toni, Maxi oder Tobi. In der Tabelle gibt es bereits einen Löschen Button. Aber dessen Funktion ist in der `deleteRow` Methode leider noch nicht implementiert.

- Implementiere die deleteRow Methode und greife auf die remove Methoden deiner Services FavouriteChuckJokesSevice und FavouriteOwnJokesService zu.
- Merkst du dass, die Löschung in der Tabelle erst aktualisiert wird, wenn du auf eine andere Seite z.B. "Start" und wieder zurück wechselst?

### 4.5. Die Macht der Signals

Die Tabellendaten aktualisieren sich nur bei einem neuen Aufruf der Favoriten Seite. Der Grund dafür ist, dass die Tabellendaten immer nur im Konstruktur einmalig beim Laden der Komponente aktualsiert werden. Um dies eleganter zu gestalten, gibt es in Angular die Verwendung des reaktiven Programmierstils. Das geht mit sogenannten Signals.

- Implementiere nun das Datenobjekt `tableData` der Favouriten Seite als Signal
- Du musst auch die bisherigen Methoden updateChucksJokesTableData und updateOwnJokesTableData anpassen

Nun sollten die Daten bei Klick auf den Löschen Button, unmittelbar auch aus der Tabelle verschwinden. Herzlichen Glückwunsch, du hast diese Challenge geschafft!
Wenn du es nicht erwarten kannst Bilder von süßen Katzen zu sehen, dann mache direkt mit der Ⅴ. Challenge weiter.

# Ⅴ. Challenge 🎖️ - Achtung Süße Katzenbilder!

### Ⅴ.Ⅰ. Ansehen

Ansehen & Verstehen der Chuck Norris API

### Ⅴ.Ⅱ.

Anbinden der Katzen API

### Ⅴ.Ⅲ.

Favorisieren der Katzen in weiterer Tabelle auf der. Favoriten Seite.

FavouriteCats Tabelle erstellen. FavouriteCats Service. Entweder URLs oder Bilder selbst speichern?

# Ⅵ. Challenge 🎖️ - Nur `Speicher`bares ist Wahres

### Ⅵ.Ⅰ.

Anbinden des Eigenen Firebase Projekts credentials

### Ⅵ.Ⅱ.

Speicherung der Tabellendaten zum Benutzer in der Firebase API. ...
