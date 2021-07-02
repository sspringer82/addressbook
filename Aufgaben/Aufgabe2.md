# Aufgabe 2 - Tree Shaking

- Implementiert je eine Funktion
  - getFullname(address: Address): string => `${address.firstname} ${address.lastname}`
  - getContact(address: Address): string => `${address.firstname} ${address.lastname} <${address.email}>`
- Implementiert das
  - als zwei separate Funktionen
  - als Utility-Klasse mit zwei statischen Methoden
- Bindet die Funktionen in die ListItem-Komponente ein und prüft die Auswirkungen auf das Tree Shaking
