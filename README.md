# Bug

- Install dependencies for Yarn with `yarn install`
- Build project once with `yarn build`
- Build project again with `yarn build` right after

Second build fails with

```
The "path" argument must be of type string. Received an instance of Buffer
```

Every other build behaves this way. This problem only occurs with Yarn Berry in PnP mode.
