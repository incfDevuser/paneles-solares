## ¿Cómo funciona?

El algoritmo principal está en la función `calculatePanels`, que toma como parámetros:
- `panelWidth`: ancho del panel solar
- `panelHeight`: alto del panel solar
- `roofWidth`: ancho del techo
- `roofHeight`: alto del techo

El cálculo se realiza en dos pasos:
1. **Cálculo directo:** Se calcula cuántos paneles caben horizontal y verticalmente usando división entera (`Math.floor`).
2. **Cálculo de espacio sobrante:** Si sobra espacio, se calcula si es posible colocar paneles adicionales rotando los paneles en el área sobrante.

El resultado es el número máximo de paneles completos que se pueden instalar.

## Créditos
Hecho por Martin, 2025.
