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

## Create new Component Mapping
1. Install the builder.io/dev-tool
```js
npm i @builder.io/dev-tools@latest --save
```
2. In Figma, select the component to map.
3. Open the Builder Figma Plugin and go to the Design System tab.
4. The Design tab displays unmapped components along with a CLI command that maps all components listed. Copy the command by clicking on the copy icon.
```js
npx builder.io@latest figma generate 9ca66...
```
5. When you are prompted, select the local component you want to map. If you have a lot of components, filter for a particular component by starting to type its name.6. In the prompt that opens in Figma, grant access to the Builder CLI by clicking the Allow access button.
6. Inspect the suggested mapper function and request any changes. For example, "Provide a better default value for the subtitle". Press Enter for Devtools to generate another mapper function with your recommendations.
7.  When you are satisfied with the suggestion, respond to the prompt question of "How does the mapping look?" with "good".
8.  At the prompt for where to save the new mappings, specify the location you'd like.
9.  Open your new mapper file and edit your mapper() function if needed.
    
    We are mapping our Helix components to Figma designs to ensure seamless integration with Builder.io. For example, we map the @procore/core-react Button component to the corresponding button in our Figma designs. 
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
10.  Repeat for all components.


## Importing Figma Designs to Builder
1. In your Figma file, select the frame(s) you'd like to import into Builder.
2. In Figma, open the Builder plugin by clicking on Resources in the toolbar and going to the Plugins tab.
3. Click the Generate Code button.
4. This workflow launches a Builder fiddle with your content, which you can copy and paste into another Builder document or save as a template.
5. In Builder fiddle select develop tab, Click Generate Code but to start generating.
6. After the code generation is complete, click the "Sync Code" button to execute the synchronization command.
  ```js
  npx builder.io@latest add e35116ee
  ```
7. Run this command in your root folder of your project. This will create required file in Components folder.


