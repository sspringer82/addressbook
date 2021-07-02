# Aufgabe 11 - Debouncing

- Implementiert eine Filtermöglichkeit für die Liste
  - Fügt ein Eingabefeld ein
  - Speichert den Wert des Eingabefelds in einen lokalen State
  - Implementiert einen Effect-Hook, der auf die Änderung des Suchfelds reagiert
  - Setzt einen Timeout und kommuniziert mit dem Server
  - Die Cleanup Routine des Effect hooks cancelt den Timeout
