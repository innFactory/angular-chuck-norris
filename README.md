![Project Logo](./docs/logo_readme.png)

# Start 🚀

Die Angular Chuck Norris Challenge ist dein erster Einstieg in die Angular Webapp Entwicklung. Erledige alle Challenges, damit Chuck Norris stolz auf dich ist! Im Rahmen des Projekts wirst du das Frontend einer 404 Not-Found Seite gestalten, mehr über das Global-State-Management und reaktive Programmierung in Angular erfahren, selbst eine Katzenbild-API anbinden und als Bonus Aufgabe deine Daten in einer selbst aufgesetzen, externen Datenbank speichern.

---

# Ⅰ. Challenge 🎖️ - Start

### Ⅰ.Ⅰ. GitHub Account

Jeder geschriebene Programmcode muss auch gespeichert und weitergegeben werden können. GitHub ist eine übergreifende Entwicklerplattform die das ermöglicht und auch dieses Projekt speichert.

Erstelle dir, falls du noch keinen hast, zunächst einen eigenen GitHub Account auf [https://github.com/](https://github.com/). Dieser wird dich bei der innFacotory und in deinem späteren Entwickler-Leben noch lange begleiten 🤩.

Du wirst später nicht nur deinen Programmcode mit Anderen Kollegen in Projekten teilen (=publish), sondern in sogennanten Code-Reviews gegenseitig den Code überprüfen und verbessern. Dies musst du beim Angular Chuck Norris Projekt aber nicht machen.

### Ⅰ.Ⅱ. Entwickeln aus der Entwicklungsumgebung

Softwareentwickler benötigen einen Ort an dem sie den Programmcode ansehen, schreiben und verändern können.

Dieser Ort ist die sogennante Entwicklungsumgebung, auf englisch Integrated Development Environment, abgekürzt IDE. Für die Angular Chuck Norris App benutzen du als IDE am Besten VS Code.

1. Installiere dir [Visual Studio Code](https://code.visualstudio.com/).
2. Öffne VS Code. Wenn du Lust hast, mache dich mit diesem [Tutorial](https://code.visualstudio.com/docs/getstarted/getting-started) in VS Code etwas vertraut.

### Ⅰ.Ⅲ. Webapp kopieren

In GitHub online gespeicherte Software muss zum Bearbeiten erst lokal auf deinem PC kopiert (=clone) werden. Das geht ganz einfach mit VS Code.

VS Code kommt standardmäßig mit einer Anbidung für GitHub, dem "Source Control Management". Öffne den Tab des Source Control und wähle "Clone Repository". Gebe nun die URL des Repositories `https://github.com/innFactory/angular-chuck-norris` ein und wähle einen beliebigen Speicherort auf deinem PC.

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

Nun musst du dir die Abhängigkeiten bzw. Dependencies nur noch installieren. Keine Sorge, die sind in der Datei `package.json` bereits vollständig aufgelistet und können ohne weiteres über einen Konsolenbefehl installiert werden.

Gebe in die Konsole `npm install` ein und und warte bis alle erfolgreich heruntergeladen sind. Ein neuer Ordner `node_modules`, wird nun im Projekt automatisch erstellt.

### Ⅰ.Ⅵ. WebApp starten

Nun kannst du das Webprojekt aus der Konsole starten mit `npm start`.

Öffne den Browser auf [http://localhost:4200](http://localhost:4200) und du solltest die WebApp sehen.

### Ⅰ.Ⅶ. Einstieg in die App

Jede Angular Komponente in deiner WebApp besteht aus einem Logik-, einem Struktur- und einem Stylingteil. Sehe dir exemplarisch einmal die Home-Page Komponente genauer an. Navigiere in in den Pfad `src -> pages -> home` und sehe dir die Datein an.

| Datei     | Function                |
| --------- | ----------------------- |
| home.ts   | Logikteil in TypeScript |
| home.html | Strukturteil in HTML    |
| home.scss | Stylingteil in SCSS     |

Fühle dich nicht überfordert von all den verschiedenen Sprachen und Frameworks. Du bekommst eine Schritt für Schritt Einführung in die Angular Welt.

### Ⅰ.Ⅷ. Kennenlernen mit Chuck Norris

Im Browser siehst du die Vorstellung von Chuck Norris. Die Struktur ist in der Markupsprache HTML verfasst.
Sieh dir die Struktur in der Homepage [home.html](./src/pages/home/home.html) einmal genauer an. Der Text `..Ich bin Chuck Norris, ein Kampfsportler und Schauspieler..` ist in einem HTML `<p>` Paragraph Element eingeschlossen bzw. gewrapped.

Recherchiere auf diesem Wikipedia Eintrag über [Chuck Norris selbst-erfundenen Kampfkünste](https://en.wikipedia.org/wiki/Chuck_Norris#Martial_arts_knowledge) und füge in der `home.html` Datei weitere Fakten über Chuck Norris hinzu. Die Änderungen erscheinen beim Speichern automatisch im Browser.

---

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

---

# Ⅲ. Challenge 🎖️ - Los geht's!

### Ⅲ.Ⅰ. Chuck Norris macht keine Fehler

Im Gegensatz zu Chuck Norris, dürfen wir Entwickler auch mal Fehler machen. Versuche im Browser eine Seite zu öffnen die es in unserer Webapp noch nicht gibt z.B. [http://localhost:4200/diese-seite-gibts-ganz-bestimmt](http://localhost:4200/diese-seite-gibts-ganz-bestimmt). Was siehst du? Eine leere Seite nur mit Header und Footer? Wie langweilig! In unserem `src/pages/` Ordner fehlt noch eine Not-Found Seite.

- Sieh dir einmal bekannte Not-Found Seiten aus dem Internet an:
  - https://www.innfactory.de/jkajejsd
  - https://www.youtube.com/awefawe
  - https://www.amazon.com/ajsdsfl/jfasldk
  - https://www.chess.com/kfajes
- In Angular erstellst du neue Komponenten am Besten aus der Kommandozeile.
- Öffne die Konsole und führe nun den Befehl `npx ng generate component ../pages/not-found` aus. Im src/pages Ordner sollte nun eine neue Angular Komponente NotFoundComponent erscheinen.
- Angular kommt standardmäßig mit einem WebApp Pfadaufbau. Dieser kann in der Datei [app.routes.ts](./src/app/app.routes.ts) angepasst werden.

  Füge nun in in der Kommentierten Stelle die Not-Found Komponente hinzu. Vergesse nicht sie wie die anderen Seiten zu importieren.

  ```bash
    // {
    //   path: '**',
    //     component: ... , // Add error page
    // },
  ```

### Ⅲ.Ⅱ. Schönheit ist nicht alles - aber auch wichtig

> "Es gibt keinen Schönheitswettbewerb mit Chuck Norris, denn alle wissen, dass er der einzige Gewinner wäre."

Passe nun die Not Found Komponente an und gestalte Sie mit HTML und CSS. Besuche nochmal die Seite. Sei gern kreativ und lasse dir etwas mit Bildern, Text oder sogar CSS Keyframe Animationen einfallen.

Glückwunsch! Du hast soeben deine erste nützliche Komponente in Angular entwickelt. Kannst du Chuck Norris aber auch im Witze-Duell schlagen?

---

# Ⅳ. Challenge 🎖️ - Lieblingswitz

### Ⅳ.Ⅰ. Ansehen

In der Folgenden Challenge wirst du das Konzept der Angular Services am Beispiel des bereits implementierten FavouriteChuckJokesSevice kennenlernen. Im Anschluss erstellst du eine Komponente, mit der du neue, eigene Witze eingeben kannst. Dabei kommst du auch mit der Angular Komponenten Bibliothek "Angular Material" in Berührung. Später wirst du auch den Verwendungszweck von Angular Signals verstehen, indem du wieder Witze aus der Tabelle löschst.

- Sieh dir nun die Chuck Norris Witze Favorisieren Funktion einmal an. Gibst du einen Witz ein und klickst auf "FAVORISIEREN", erscheint er in der Favoriten Seite.
- Das macht das Global State Management über sogenannte Services in Angular möglich.
- Sieh dir den Programmcode zur ChuckJokesCard Komponente, zum FavouriteChuckJokesSevice Service und die updateChucksJokeTableData Methode der Favoriten Seite einmal genauer an und versuche ihn zu verstehen.

Die Methode lädt die in FavouriteChuckJokesSevice Service gespeicherten Witze jedes mal bei Öffnen der Favouritesseite in die Tabelle. Probiere es gerne selbst aus und generiere und sammle so viele Chuck Norris Witze wie du willst!

### Ⅳ.Ⅱ. Witze-Wettbewerb

Damit du mit Chuck Norris in Konkurrenz treten kannst, wirst du nun auch eine Eigene-Witze Funktion mit Inputfeld implementiern.

- Erstelle passend zur Komponente ChuckJokesCardComponent eine neue OwnJokesCardComponent.
- Füge die Komponente dem HTML der Jokes Seite hinzu.
- Kannst du analog zur ChuckJokesCardComponent die GenerationCardComponent im HTML der OwnJokesCardComponent wiederverwenden?
  Diese Wiederverwenung ist die Angular Content Projection. Dessen Syntax ist bereits etwas komplexer und du musst sie noch nicht ganz verstehen.
  Hier die offiziele Dokumentation [Tutorial Content Projection](https://angular.dev/guide/components/content-projection).
- Füge in die neue OwnJokesCardComponent einen Material Input und einen Material Favorisieren Button auf der Witze Seite unterhalb der Chuck's Witze Komponente hinzu.
- Hilfreiche Dokus dazu findest du hier zu [Mat-Input](https://material.angular.dev/components/input/overview) und hier zum [Mat-Button](https://material.angular.dev/components/button/overview).

### Ⅳ.Ⅲ. Services in Angular

Nun hast du ein Frontend mit Eingabefeld und Button. Im Folgenden implementierst du die Favorisieren Funktion auch für eigene Witze, um sie in die Tabelle der Favoriten weiterzugeben. Diese globale Weitergabe nennt sich Global State Management und ist in verschiedenen Frameworks unterschiedlich aufgebaut. In Angular geht dies über Services. Sieh dir gerne dazu hier weiter die offzielle Dokumentation an oder schließe das [Angular Services Tutorial](https://angular.dev/tutorials/first-app/09-services) ab.

- Sieh dir den FavouriteChuckJokesSevice und seine Verwendung in ChuckJokesCardComponent und der Favourites Seite genauer an.
- Implementiere nun auch einen FavouriteOwnJokesService. Das geht auch über den `npx ng generate service` Befehl.
- Der Service soll auch nur über die öffentlichen add, remove und getAll Methoden verwendbar sein.
- Füge in der OwnJokesCardComponent eine neue Methode für das favorisieren hinzu. Gebe den neuen, eigenen Witz über die add Methode an den Service.
- Passe die Favoriten Seite so an, dass im Konstruktor nun auch deine Eigenen Witze mitgeladen werden. Dazu kannst du eine neue Methode updateOwnJokesTableData erstellen.

### Ⅳ.Ⅳ. Echt peinlich: Unlustiger Witz

Nun werden wir die Favoriten Tabelle erweitern. Du hast versehentlich einen peinlichen Witz hinzugefügt? Hoffentlich sehen das nicht Toni, Maxi oder Tobi! In der Tabelle gibt es bereits einen Löschen Button. Aber dessen Funktion ist in der `deleteRow` Methode in `src/pages/favourites` leider noch nicht implementiert.

- Implementiere die deleteRow Methode und greife auf die remove Methoden deiner Services FavouriteChuckJokesSevice und FavouriteOwnJokesService zu.
- Merkst du, dass die Löschung in der Tabelle erst aktualisiert wird, wenn du auf den aktualsieren Button klickst, oder auf eine andere Seite z.B. "Start" und wieder zurückwechselst?

### Ⅳ.Ⅴ. Die Macht der Signals

Die Tabellendaten aktualisieren sich nur manuell. Der Grund dafür ist, dass irgendjemand dem Datenobjekt `tableData` mitteilen muss, dass sich die Witze der Services geändert haben. Um dies eleganter zu gestalten, gibt es in Angular die Verwendung des reaktiven Programmierstils. Das geht mit sogenannten Signals.

- Lies dir den Eintrag über Signals in der offiziellen Angular Dokumentation durch.
- Sieh dir den bisher nicht verwendeten FavouriteChuckJokesSignalSevice an. Bemerkst du die wesentlichen Unterschiede zum FavouriteChuckJokesSevice?
  Das private Datenobjekt `data`, ein schreibbares Signal vom Typ `WriteableSignal`, ist nun eine Funktion und auf dessen Inhalt wird mit `data()` zugegriffen.
  Zusätzlich gibt es das neue, öffentliche Datenobjekt `$data`. Es ist nur ein unveränderbares, berechnetes (=computed) Signal vom Typ `Signal`.
- Importiere zunächst an allen Stellen statt des bisherigen FavouriteChuckJokesSevice den bisher noch nicht verwendeten FavouriteChuckJokesSignalSevice.
- Jetzt wird es interessant: Anstatt `tableData` im Konstruktor mit den Services zu aktualisieren, wird es sich in Zukunft als "computed" Signal von selbst berechnen.
- Entferne den Programmcode für den constructor und die update Funktionen aus der Favoriten Seite.
- Entferne die aktuelle `tableData` Zuweisung und erstelle Sie als computed. Hier eine Vorlage dafür:

  ```
  protected tableData = computed<FavouritesTableRow[]>(() => {
    const data: FavouritesTableRow[] = [];

    // Hier musst du nun data mit dem Signal $data aus dem FavouriteChuckJokesSignalSevice befüllen

    return data;
  }
  ```

- Da `tableData` nun ein Signal ist, musst du nun überall dort, wo es bisher verwendet wird anstelle des Zugriffs `tableData` nun mit `tableData()` benutzen.

Wenn alles implementiert ist, aktualisieren sich die Tabellendaten nun, bei Klick auf den Löschen Button, von selbst. Allerdings werden jetzt die eigenen Witze nicht mehr angezeigt. So gewinnst du leider keinen Wettbewerb.. 🤷‍♂️

### Ⅳ.Ⅵ. Hello Signal-Service World

- Erstelle nun auch einen neuen FavouriteOwnJokesSignalService. Die Methoden add, remove und getAll müssen etwas anders implementiert werden. Orientiere dich dabei einfach am FavouriteChuckJokesSignalSevice.
- Tausche auch den vorherigen Service überall durch den neuen Signal Service aus.
- Ergänze nun das `tableData` Signal der Favoriten Seite auch mit dem $data Signal aus deinem neuen FavouriteOwnJokesSignalService.

Probiere es gleich im Browser aus. Absofort berechnet sich das `tableData` Datenobjekt, bei jeglicher Veränderung des Eigenen und des Chucks Witze Signal Services von selbst neu. Die Tabelle aktualisiert sich im Frontend damit automatisch.

### Ⅳ.Ⅶ. Sauberkeit ist die halbe Miete

Der "Tabelle aktualisieren" Button wird jetzt nicht mehr benötigt. Es folgt den Best Practices als Entwickler, immer unbenutzen Programmcode oder veraltete Features direkt zu entfernen um das Projekt simpel und verständlich zu halten.

- Entferne nun den "Tabelle aktualisieren" Button und seine Funktion. Er wird nicht mehr benötigt.

Herzlichen Glückwunsch, du hast diese Challenge geschafft! Das muss gefeiert werden 🥳!

Suche zum Abschluss der Challenge im Internet z.B. auf [https://witze.net/flachwitz-witze](https://witze.net/flachwitz-witze) nach den peinlichsten Flachwitzen und füge Sie als eigene Witze hinzu. Natürlich kannst du sie nun auch schnellstmöglich wieder löschen, bevor andere sie lesen.

Wenn du es jetzt aber nicht mehr abwarten kannst Bilder von süßen Katzen zu sehen, dann mache direkt mit der [Ⅴ. Challenge](#ⅴ-challenge-️---achtung-süße-katzenbilder) weiter..

---

# Ⅴ. Challenge 🎖️ - Achtung Süße Katzenbilder!

### Ⅴ.Ⅰ. Ansehen

Ansehen & Verstehen der Chuck Norris API

### Ⅴ.Ⅱ.

Anbinden der Katzen API

### Ⅴ.Ⅲ.

Favorisieren der Katzen in weiterer Tabelle auf der. Favoriten Seite.

FavouriteCats Tabelle erstellen. FavouriteCats Service. Entweder URLs oder Bilder selbst speichern?

---

# Ⅵ. Challenge 🎖️ - Nur `Speicher`bares ist Wahres

### Ⅵ.Ⅰ. Benutzer hinzufügen

In der Angular Chuck Norris Webapp ist bereits eine Datenbank in Google Firebase mit Besitzer innFactory GmbH angebunden.

Registriere dich nun mit deiner innFactory E-Mail und einem neuen Passwort und melde dich an. Das machst du über das Benutzer-Icon im Header -> Registrieren. Damit wurde ein neuer Benutzer in Firebase angelegt.

### Ⅵ.Ⅱ. Datenbank Synchronisierung

In dem Projekt ist bereits ein FirestoreDatabaseService Implementiert. Füge dessen `addJoke` und `removeJoke` einfach zu den `add` und `remove` Methoden des FavouriteChuckJokesSignalService an.

Fertig! Bei Favorisierung wird nun der Witz in der Datenbank gespeichert. Und bei An- und Abmeldung wieder geladen.

### Ⅵ.Ⅲ. Sicherung eigener Witze

Damit nun auch deine eigenen Witze verewigt werden, muss..

- neuer database service

- verwendung

- ergänzung bei login

- löschung bei logout

### Ⅵ.Ⅳ. Eigene Datenbank

Jetzt wird es tricky.

- Erstellen FirebaseProjekt

- Einstellungen in environment.ts

- Tabelle users hinzufügen

- Testen Chuck Norris Witze & Eigene

### Ⅵ.Ⅴ. Katzen-Transferaufgabe

Kommen wir nun zur Letzen Challenge.

- Erstellen cats tabelle in Firebase

- neuer cat database service

- laden bei login

- löschen bei logout

Glückwunsch! Du hast alle Challenges gemeistert.
