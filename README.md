# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Component Mapping
We are mapping our Helix components to Figma designs to ensure seamless integration with Builder.io. For example, we map the @procore/core-react Button component to the corresponding button in our Figma designs. This mapping ensures that when the design is imported into Builder.io, the correct component is used in the generated code. By establishing these mappings, we ensure that the design system components are accurately represented in both the design phase and the final code, streamlining the workflow between design and development while maintaining consistency across the project.
```js
import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Button } from "@procore/core-react";
import { ButtonVariant } from "@procore/core-react/dist/Button/Button.types";

interface FigmaCustomButtonProps extends BaseFigmaProps {
  variant?: string;
}

figmaMapping({
  componentKey: "a195f34c7d00609fb46322a05056278c6290bce0",
  mapper(figma: FigmaCustomButtonProps) {
    const buttonVariant = figma.variant as ButtonVariant;
    return <Button variant={buttonVariant}>{figma.$children}</Button>;
  },
});
```
