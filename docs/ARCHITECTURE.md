# Architecture and Design Decisions

In diesem Dokument werden die Architektur und die wichtigsten Designentscheidungen der Bewerbungsaufgabe „Vehicle Fleet Scheduler - Interaktive Fahrzeugplanung mit Gantt-Chart“ näher beschrieben. 

## Datenstruktur
Die Trennung von **vehicles** und **bookings** macht die Datenstruktur übersichtlicher und erleichtert spätere Erweiterungen/Änderungen sowie eine einfachere Änderung von einzelnen Buchungen. 
Durch die Trennung entstehen auch keine redundanten Informationen.

## Vorgangsweise
### Erstellung Mockup
Als ersten Schritt habe ich ein grobes Mockup erstellt, um das UI zu planen. Dadurch sollten die Wichtigsten Design Entscheidungen und Position von benötigten Elementen festgelegt werden und die spätere Entwicklung erleichtert und beschleunigt werden.
### Architekturentscheidung & Technologie-Stack
 - Ich habe mich für React mit Vite entschieden, da ich die Umsetzung des Schedulers als **Single Page Application (SPA)** vorgesehen habe. Dies bietet den Vorteil von **schnellerer Ladezeit**, da verhältnismäßig kleine Komponenten wie zur Darstellung von Infos zu Buchungen oder Fahrzeugen sehr gut über ein Modal gelöst werden können.
 Daher ist kein Routing erforderlich, wodurch Vite in diesem Zusammenhang mit einer kleinen Bundle-Größe und einer schnellen Entwicklungsumgebung überzeugt.
- Diese Vorgehensweise bietet meiner Meinung nach eine flüssige User Experience, da kein vollständiges Neuladen der Seite erforderlich ist.
### Priorisierung der Kernfunktionalität
   - Fokus auf Basisfaktoren der Applikation - Darstellung der Fahrzeuge mit dazugehörigen Buchungen
### Datenstruktur & Modularität
   - Trennung von vehicles und bookings, um eine skalierbare Architektur zu gewährleisten und einzelne Bereiche neu zu rendern/aktualisieren
   - Verwendung von TypeScript zur Vermeidung von Laufzeitfehlern und Sicherstellung der Datenintegrität
   - Das Frontend wurde mit einen modularen Komponentenaufbau umgesetzt, wodurch besonderer Wert auf Wartbarkeit, Wiederverwendbarkeit und Erweiterbarkeit gelegt wurde. Hierfür wurden React Hooks verwendet.
### UI/UX-Ansatz
- Durchgängige Nutzung von MUI-Komponenten für ein konsistentes und ansprechendes Design
- Klare visuelle Unterscheidung der Buchungstypen (Balken im Gantt-Chartt) im Gantt-Chart, sodass Nutzer Buchungen auf einen Blick erkennen kann

## Libraries
Neben MUI habe ich nur date-fns eingebunden, um die Anzahl der Abhängigkeiten möglichst gering zu halten. Zu viele Libraries hätten die Wartung erschwert und unnötige Abhängigkeiten geschaffen.

Für die Berechnung und Formatierung von Datumswerten war date-fns sinnvoll, da diese schnell komplex und fehleranfällig werden. Zudem wird eine solche Library auch für den MUI DatePicker benötigt. Ich habe date-fns statt moment.js gewählt, da es leichtgewichtiger ist.

## Noch offene Punkte
Viele der Anforderungen konnten im gegebenen Zeitrahmen nicht oder nur teilweise umgesetzt werden. Zudem gibt es noch Optimierungspotenzial in Bereichen wie UI/UX, Performance und allgemeiner Code-Qualität.
