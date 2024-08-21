# HMS Micro Frontend

Architecture with several independent projects and global navigation.  
This project is a test, to understand the way it will be possible to create multiple frontend sharing some components and logic, use SSO authentication, etc.

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
