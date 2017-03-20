## Electron-Compile + RealmJS


1. Clone this repo
2. run `npm install`. It will probably rebuild `realm-js` which could take a while. **Luckily this is only done once.**
3. Start the project by `npm run start`

This uses [electron-compile](https://github.com/electron/electron-compile) to minimize the amount of 

## Important TypeScript Usage

This project comes with support for TypeScript but electron-compile has a bug that does not allow for `default exports` at the moment. 

So this is fine:

```typescript
export class App extends React.Component<{}, {}> {
}
```

This is not fine and will cause a runtime error:
```typescript
export default class App extends React.Component<{}, {}> {
}
```

I have noted this as an issue and created a pull request with [electron-compilers](https://github.com/electron/electron-compilers) which is a dependency. 

## Caveats
This works on Mac, Linux, and Windows but Realm Mobile Platform's syncing capabilities only work on Mac at the moment. 
