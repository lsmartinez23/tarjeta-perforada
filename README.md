# Tarjeta perforada IBM

Simulador interactivo de una tarjeta perforada IBM de 80 columnas con el código Hollerith.

- Escribe un texto y se perfora automáticamente.
- Haz clic en las posiciones para perforar a mano y ver qué carácter resulta.
- Tabla de referencia con todas las combinaciones (estándar IBM 029).

## Cómo funcionan las combinaciones

| Caracteres | Combinación |
|---|---|
| 0–9 | una perforación en su fila |
| A–I | zona 12 + 1 a 9 |
| J–R | zona 11 + 1 a 9 |
| S–Z | zona 0 + 2 a 9 |
| Símbolos | casi todos añaden la fila 8 (ej. `.` = 12-3-8) |
| Espacio | sin perforaciones |

Para usarlo, abre `index.html` en cualquier navegador.
