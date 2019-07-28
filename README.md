# Monorepo Example
Example of showing lerna monorepo with parcel. Managed with yarn workspaces. This also shows the experimental decorators and relative path.

![](https://i.imgur.com/l6UEvsj.png)

## Getting Started

The package uses yarn to bootstrap. The another-component is the main component for the example, however react-mobx is standalone as well. That's why you will find two .babelrc in different folders. 

You can install all packages with either yarn or lerna. You should check package.json to see how they are constructed.

```sh
yarn install
yarn run bootstrap # runs lerna bootstrap
yarn run start # runs the start script with some lerna config
```

## Explanation

### Components
The react-mobx is marked as `"source": true` in package.json to indicate parcel that it's another component and it should use babel config from the another-component folder. The babel config on react-mobx folder is ignored when you run another-component.

```json
{
  "name": "@monorepo-example/react-mobx",
  "version": "1.0.0",
  "source": true
}
```

### Relative Path
As for relative path, the following alias takes care of it in respective package. This allows us to write `src/containers/App` instead of `../../../containers/App`. There are few other path related patterns on parcel documentation on [module resolution](https://parceljs.org/module_resolution.html) page.

```json
"alias": {
    "src/**": "./$1"
}
```

### VSCode Intellisense
The jsconfig.json file helps vsCode understand and navigate easily.
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "src/*": ["./*"]
    }
  }
}
```