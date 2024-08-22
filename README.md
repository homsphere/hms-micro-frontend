# HMS Micro Frontend

Architecture with several independent projects and global navigation.  
This project is a test, to understand the way it will be possible to create multiple frontend sharing some components and logic, use SSO authentication, etc.

### Conclusion

Module-federation is a nice and elegant way of sharing isolated component, using nextjs config or webpack config for pure react.  
The isolated component have his own and unique server, logic.  
Nx offer a nice and easy way to setup a module federation project using the cli. (have a look to souce below, nx documentation...). This Nx solution is only for react app and not nextjs application.
Trying to share complexe component with router, etc. I not the way this technologie works, for my point of view.
This type of feature could be done with a reverse proxy who listen routes and dispatch redirection.

### Branches

- main : micro service base with nextjs
- use-webpack-module-federation / use-webpack-module-federation-pages-router : tests with webpack module federation and nextjs
- react-nx-monorepo-micro-service : nx micro frontend out of the box solution with react apps only.

## Stack

- NX monorepo
- Nextjs Version 14 - app-router
- pure CSS

## Run tasks

To run the dev server for apps, use:

```sh
npx nx serve main-app
npx nx serve sub-app-1
npx nx serve sub-app-2
```

You can now access each application via its specific port:

main-app: http://localhost:3000  
sub-app-1: http://localhost:3001  
sub-app-2: http://localhost:3002

## Sources :

- https://medium.com/the-hamato-yogi-chronichels/lets-build-micro-frontends-with-nextjs-and-module-federation-b48c2c916680
- https://github.com/vercel/examples/tree/main/solutions/microfrontends
- https://alibek.dev/micro-frontends-with-nextjs-and-module-federation
- https://nx.dev/concepts/module-federation/faster-builds-with-module-federation
- https://nx.dev/recipes/angular/module-federation-with-ssr
- https://github.com/module-federation/module-federation-examples/tree/master
- https://dev.to/omher/building-react-app-with-module-federation-and-nextjsreact-1pkh
- https://github.com/nrwl/react-module-federation
- https://github.com/brunos3d/nextjs-nx-module-federation

## ChatGPT

- https://chatgpt.com/share/a1d3ba5b-ca5c-4d89-80ac-565e0484b626
- https://chatgpt.com/share/06eaa683-f714-4fff-b9d5-7b3302302569
