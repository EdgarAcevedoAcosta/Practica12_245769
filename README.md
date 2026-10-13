# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.


Responder: ¿en qué se convirtió cada etiqueta del JSX? en un elemento de html
Responder: si React es «sólo una biblioteca», ¿quién traduce el JSX? creo que lo traduce el js por que es como una extensión del javascript
 ¿qué hace createRoot y qué hace render? el createRoot crea una ruta para que el react administre el dom dentro de un elemneto de html, y el render crea un componente react dentro de la carpeta raiz
 ¿por qué el nombre de un componente empieza con mayúscula? para que lo identifique como un componente y no una etiqueta de html
 ¿cuál es la diferencia entre escribir semestre="8" y semestre={8}? que una escribe un string (el primero) y el otro es un numero o algo especifico 
 
