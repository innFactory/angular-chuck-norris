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
  protected tableData = computed<JokeTableRow[]>(() => {
    const data: JokeTableRow[] = [];

    // Hier musst du nun data mit dem Signal $data aus dem FavouriteChuckJokesSignalSevice befüllen

    return data;
  }
  ```

- Da `tableData` nun ein Signal ist, musst du nun überall dort, wo es bisher verwendet wird anstelle des Zugriffs `tableData` nun mit `tableData()` benutzen.

Wenn alles implementiert ist, aktualisieren sich die Tabellendaten nun, bei Klick auf den Löschen Button, von selbst. Allerdings werden jetzt die eigenen Witze nicht mehr angezeigt. So gewinnst du leider keinen Wettbewerb.. 🤷‍♂️

### Ⅳ.Ⅵ. Hello Signal-Service World

- Erstelle nun auch einen neuen FavouriteOwnJokesSignalService. Die Methoden add, remove und getAll müssen etwas anders implementiert werden. Orientiere dich dabei einfach am FavouriteChuckJokesSignalSevice.
- Die Methode setFromDatabase() kannst du bis Challenge Ⅵ erstmal ignorieren.
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

### Ⅴ.Ⅰ. Neue Katzen Seite

Nun wird das Projekt um eine Katzen Seite erweitert. Sie wird zufällig neue Katzenbilder aus dem Web laden, die du dann auch favorisieren kannst.

- Erstelle im `pages` Ordner eine neue Komponente "cats".
- Erweitere die Router Datei um einen neuen "cats" Pfad der auf die neue Komponente verweist. Du solltest sie im Browser öffnen können.
- Damit die Seite auch per Header aufrufbar ist, musst du sie in der Navigation Komponente im HTML erweitern.
- Damit ist die Seite fertig konfiguriert 🎉

### Ⅴ.Ⅱ. Implementierung der Katzen Seite

Die Katzenseite beinhaltet ein Bild und zwei Buttons z.B. "NEU" und "FAVORISIEREN" um die Katze später neu zu generieren und zu favoriseren. Die Funktionalität implementierst du erst später. Du kannst wie bei den Witzen die GenerationCard Komponente wiederverwenden. Verwende als Bild für jetzt das "cat-placeholder.png" unter "public/". Als Komponente verwendest du einfach ein HTML "<img/>".

- Tipp: In der Header Komponente gibt es bereits ein Bild, das du als Beispiel verwenden kannst. Ansonsten sie dir die HTML Dokumentation auf [developer.mozilla.org](developer.mozilla.org) an.

### Ⅴ.Ⅲ. Ansehen der Chuck Norris Witze API

Eine Programmierschnittstelle auch kurz API ermöglicht in der Softwareentwicklung den einfachen Zugriff auf externen Programmcode. Mit den Chuck Norris Witzen ist bereits eine online API implementiert.

- Sieh dir den JokeApiService im Projekt an. Die URL zur API befindet sich in der `app.constants.ts` Datei.
- Rufe die API per Link im Browser auf [https://api.chucknorris.io/jokes/random](https://api.chucknorris.io/jokes/random). Was siehst du?
- Das ist die JSON Datei der API
- Aktualisiere die Seite neu. Was verändert sich?
- Der HTTP Zugriff auf die API erfolgt in Angular 20 vorzugsweise mit dem HttpClient und Rsjx Observables. Lies dir die offiziele Dokumentation zu den beiden durch.
- Verstehst du den Zugriff auf den Service und die reaktive Resource in der ChuckJokesCard Komponente?
- Da TypeScript empfiehlt alle Datenobjekte zu typisieren, ist auch die JSON Rückgabe typisiert. Das Modell siehst du in "src/models/chuck-norris-joke".

### Ⅴ.Ⅲ. Anbindung an die Katzen API

Bei Klick auf den "NEU" Button soll in Zukunft ein zufälliges Katzenbild geladen werden. Dazu kannst du die Katzen API aus dem Web benutzen. Sie liefert dir jeweils eine neue Katzenbild URL, die du dann im "src" Attribut des Bildes verwendest.

- Sieh dir die JSON der Katzen API im Browser an [https://cataas.com/cat?json=true](https://cataas.com/cat?json=true).
- Du kannst auch den Inhalt des "url" keys einmal im Browser öffnen. Du siehst jeweils eine neue zufällige Katze.
- Erstelle nun einen CatApiService analog zum JokeApiService. Greife auf die reaktive Resource zu. Du kannst dich wieder an der ChuckJokesCard orientieren.
- Du musst die JSON Rückgabe typisieren. Dazu erstellst du eine neue Datei unter "src/models/" und exportierst den Typen z.B. einfach "CatData".
- Implementiere eine neue "urlCatPicture" Methode in der Cats Seite, die jeweils die URL des CatApiService zurückgibt.
- Implemenitere eine "fetchNewCat" Methode, die die Resource neu lädt. Rufe sie über den "NEU" Button auf.
- Verwende anstelle des "cat-placeholder.png" Bildes nun die zufällige URL.
- Auf das "src" Attribut des HTML "<img/>" greifst du mit eckigen Klammern zu. So gibst du in Angular HTML dynamische, sich verändernde Attribute an.

```
  <img [src]="urlCatPicture" />
```

Super, du hast soeben erfolgreich eine API angebunden. Bei Klick auf den "NEU" Button sollte jeweils ein neues Katzenbild erscheinen. Wie niedlich!

### Ⅴ.Ⅳ. Katzen Contest

Du hast es vielleicht schon erraten 😄.. Im Anschluss wirst du analog zur Witzetabelle eine neue Katzentabelle erstellen. Dort erscheinen dann die favorisierten Katzen.

- Implementiere eine neue CatsTable Komponente. Kopiere einige Teile der JokesTable Komponente. Der Syntax hierfür ist komplex. Du kannst die Tabellen Syntax auch in der Angular Material Dokumentation nachlesen.
- Binde die CatsTable Komponente auch in die Favourites Seite ein. Sie wird nun auch auf der Seite sichtbar.
- Durch die Signal Aufgaben kennst du dich bereits mit dem FavouriteChuckJokesSignalService aus. Erstelle nun einen neuen FavouriteCatsSignalService.
  Er speichert anstelle von "JokeData" Daten vom Typen "CatData".
- Nun musst du auch in der CatsTable Komponente die Tabellendaten als "computed" berechnen, damit sich die favorisierten oder gelöschten Katzen URLs reaktiv aktualisieren.

---

# Ⅵ. Challenge 🎖️ - Nur `Speicher`bares ist Wahres

### Ⅵ.Ⅰ. Übersicht

Die Angular Chuck Norris Webapp verfügt bereits über weitreichende Features! Du hast bereits zwei externe online APIs angebunden. Auf der Startseite werden Chuck Norris selbst erfundenen Kampfkünste dargestellt 😎. Es gibt die Möglichkeit Witze und Katzen zu favorisieren und zu löschen. Sogar eigene Witze können nun von dir hinzugefügt werden. Durch die reaktive Programmierung werden die Änderungen unmittelbar in den Tabellen aktualisiert. Durch die Verwendung von Services auf die von überall aus zugregriffen werden kann, folgst du den Best Practices der Modularisierung!

Einen großen Nachteil hat unsere App bisher noch. Klickst du den "Aktualiseren" Button im Browser, gehen alle favorisierten Witze und Katzen für den Benutzer verloren. Wie schön wäre es, wenn du über Wochen und Monate die Besten Witze speichern und die Liste damit erweitern könntest.

Für einen solchen externen Speicherort verwendet man am Besten eine externe online Datenbank. Im Folgenden wirst du dich erst in einer bereits in der App integrierten Datenbank anmelden. Später wirst du das Projekt mit einer selbsterstellten, kostenosen Google Firebase Datenbank verknüpfen.

### Ⅵ.Ⅰ. Benutzer hinzufügen

Im Projekt ist bereits eine externe Datenbank in Google Firebase und Firestore mit Besitzer innFactory GmbH angebunden.

- Sieh dir die Konfiguration gerne an.
  In der "package.json" sind die `@angular/fire` und `@firebase` angegeben.
  In der "src/app/app.config.ts" sind die Firebase und Firestore Abhängigkeiten anwendungsweit konfiguriert.
  In "environments/" ist die Webapp mit dem Firebaseprojekt verknüpft und autorisiert.
  Im JokeDatabaseService erfolgt schlussendlich der Zugriff.
- Erstelle dir ganz einfach in der App einen neuen Benutzer und melde dich damit an.
  Klicke auf den Benutzer Icon im Header und auf Registrieren.
  Verwende am Besten deine innFactory E-Mail. Im Hintergrund wird ein neuer Benutzer in Firebase angelegt.
  Merke dir am Besten deine Anmeldedaten.

### Ⅵ.Ⅱ. Datenbank Synchronisierung

Als nächstes werden wir die Chuck Norris Witze jeweils beim favorisieren an die Datenbank weitergeben.

- Benutze dazu den JokeDatabaseService
- Hänge die `add` und `remove` Methodenaufrufe des JokeDatabaseService ohne sie zu verändern einfach denjenigen des FavouriteChuckJokesSignalService am Ende an.
  Den Witz bzw. die ID in den Methoden musst du natürlich weitergeben.
- Melde dich erneut über das Benutzer Icon an.
- Wenn du nun Chuck Norris Witze favorisierst, werden sie nun automatisch der Datenbank hinzugefügt.
- Melde dich nun ab und lade die Seite im Browser neu, sodass die Favoriten verschwinden. Melde dich nun erneut an. Die Witze sollten wieder erscheinen.

Nicht schlecht! Du hast die bestehende externe Datenbank erfolgreich angebunden 👨‍💻.

### Ⅵ.Ⅲ. Sicherung eigener Witze

Damit nun auch deine eigenen Witze verewigt werden, kannst du ebenfalls den JokeDatabaseService in deinem FavouriteOwnJokesSignalService verwenden. Allerdings müssen beide noch ein wenig angepasst werden.

- Hänge die `add` und `remove` Methodenaufrufe des JokeDatabaseService auch an diejenigen des FavouriteOwnJokesSignalService
- Aktuell wird immer `CREATOR_CHUCK` als Ersteller benutzt. Erweitere die JokeDatabaseService Methode `add` um einen Parameter Ersteller (creator) und benutze diesen stattdessen.
- Jetzt kannst du den Ersteller auch jeweils passend im FavouriteOwnJokesSignalService und FavouriteChuckJokesSignalService übergeben.
- Fast geschafft. Aktuell werden im Projekt bei Anmeldung die Witze geladen und bei Abmeldung wieder entfernt. Das musst du nun für die eigenen Witze auch anpassen.
  1. Kopiere die Methode setFromDatabase() aus dem FavouriteChuckJokesSignalService in den eigenen. Tausche die Kontante `PREFIX_ID_CHUCK_JOKES` jeweils durch `PREFIX_ID_OWN_JOKES` aus.
  2. Passe die Methode loadJokesFromDatabase() der Login Komponente "src/security/login/" an.
     Neben der `const chuckJokeTableData: JokeData[]` brauchst du auch eine `const ownJokeTableData: JokeData[]`.
     Diese Befüllst du dann beim Ersteller `CREATOR_OWN`.
     Im Anschluss fügst du der Login Komponente du deinen FavouriteOwnJokesSignalService mit `inject()` hinzu.
     Nun musst du noch dessen setFromDatabase() ansprechen und die `ownJokeTableData` übergeben.
  3. Erweitere die `logout` Methode der Menu Komponente und setze bei erfolgreichem Lgout die Witze des FavouriteOwnJokesSignalService mit `setFromDatabase([])` auf einen leeren Datensatz.

Fertig! Nun werden auch deine eigenen Witze in der Datenbank gespeichert. Teste es gleich einmal aus. Melde dich wieder ab und lade die Seite im Browser neu, sodass die Favoriten verschwinden. Melde dich nun erneut an. Deine eigenen Witze sollten nun auch wieder erscheinen. Auch das Löschen sollte funktionieren.

### Ⅵ.Ⅳ. Eigene Datenbank

Bisher bist du nur mit der _Frontend_ Entwicklung in Berührung gekommen und dem anbinden einer externen API. Im Folgenden wirst du ein eigenes Google Firebase Backend Projekt erstellen und an die Angular Chuck Norris Webapp anbinden.

- Melde dich auf [https://console.firebase.google.com/](https://console.firebase.google.com/) mit einem bestehenden Google Konto an, oder erstelle ein neues Google Konto mit deiner innFactory E-Mail.
- Klicke auf "Neues Firebase-Projekt erstellen" und gib z.B. "angular-chuck-norris" als Projektnamen ein. Du musst weder Gemini noch das Entwicklerprogramm oder Google Analytics aktivieren.
- Navigiere nach Projektübersicht -> Projekteinstellungen -> Allgemein. Unter Meine Apps klickst du auf das "</>" Symbol für Web um Firebase zu einer Webapp hinzuzufügen.
- Benutze als Alias auch den Projektnamen "angular-chuck-norris" und klicke auf App registrieren.
- Du erhälst eine Übersicht zum Setup. Das wurde aber schon fertig eingestellt. Kopiere dir nur den Inhalt mit folgendem Schema heraus:
  ```
    apiKey: '...',
    authDomain: 'angular-chuck-norris.firebaseapp.com',
    projectId: 'angular-chuck-norris',
    storageBucket: 'angular-chuck-norris.firebasestorage.app',
    messagingSenderId: '...',
    appId: '...',
  ```
  - Füge diesen Inhalt nun in die "src/environments/environment.development.ts" Datei in das `firebase` Attribut ein.
- Stoppe den laufenden Angular Client im Terminal mit "Cmd + C" oder durch eingabe von "q" + Enter für quit.
- Starte den Client neu mit `npm start`
- In der Browser Konsole sollten keine Fehler wie z.B. 'auth/invalid-api-key' erscheinen.

Nun ist die App erfolgreich mit Firebase verbunden. Beim Registrieren oder Anmelden erhältst du aber noch einen "❌ ... fehlgeschlagen" Hinweis.

### Ⅵ.Ⅴ. Datenbank Konfiguration

Die Authentifizierung per E-Mail und Passwort muss im Firebase Projekt aktiviert werden.

- Navigiere im Firebase Hauptmenü im Reiter links nach Entwickeln -> Authentication und klicke auf den "Los gehts" Button.
- Bei Anmeldemethode aktivierst du E-Mail-Adresse/Passwort. "E-Mail-Link" kannst du deaktiviert lassen. Bestätige die Konfiguration mit Speichern.
- Jetzt sollte die Registrierung und Anmeldung unmittelbar funktionieren. Unter Authentication -> Nutzer kannst du den neu erstellten Benutzer sehen.

Damit nun auch die Datenbank-Speicherung funktioniert, musst du in Firebase noch Firestore Datenbanken aktivieren.

- Navigiere im Firebase Hauptmenü im Reiter links nach Entwickeln -> Firestore Database und klicke auf den "Datenbank erstellen" Button. Wähle einen Standort in Europa.
- Wähle die Option "Im Produktionsmodus starten" und bestätige mit dem "Erstellen" Button.
- Navigiere nun im Reiter oben auf Regeln. Du siehst bereits voreingestellte Zugriffsregeln die du nun entfernst. Folgende Regeln kannst du komplett kopieren und einfügen. Du musst nichts weiter anpassen.

  ```
  rules_version = '1';

  service cloud.firestore {
    match /databases/{database}/documents {

      // Only read, create for signed in users
      match /users/{userID} {
        allow delete: if false;
        allow read, create: if isSignedIn() && isAllowedToChangeTable(userID);

        // Only read, create, delete in table with userID equals email
        match /jokes/{jokeID} {
          allow delete, create, read, update: if isSignedIn() && isAllowedToChangeTable(userID);
        }

        // Only read, create, delete in table with userID equals email
        match /cats/{catID} {
          allow delete, create, read, update: if isSignedIn() && isAllowedToChangeTable(userID);
        }
      }
    }

    function isSignedIn() {
      return request.auth != null;
    }

    function isAllowedToChangeTable(userID) {
      return request.auth.token.email == userID;
    }

  }
  ```

- Klicke auf den "Veröffentlichen" Button

Fertig! Du hast deine eigene Datenbank mit Benutzer Authentifizierung richtig erstellt und konfiguriert 🎉. Teste es direkt einmal aus. Nun solltest du eigene Witze und Chuck Norris Witze ganz einfach favorisieren können, dich ab- und anmelden und sie erscheinen erneut. Chuck Norris ist stolz auf dich .. und die innFactory auch 😎!

### Ⅵ.Ⅵ. Katzen-Transferaufgabe

Kommen wir nun zur Letzen Challenge.

- Erstellen cats tabelle in Firebase

- neuer cat database service

- laden bei login

- löschen bei logout

Glückwunsch! Du hast alle Challenges gemeistert.
