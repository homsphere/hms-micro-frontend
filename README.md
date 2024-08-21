# HMS Micro Frontend

Architecture with several independent projects and global navigation.  
This project is a test, to understand the way it will be possible to create multiple frontend sharing some components and logic, use SSO authentication, etc.

### Conclusion

Module-federation is a nice and elegant way of sharing isolated component, using nextjs config. The isolated component have his own and unique server, logic.
Trying to share complexe component with router, etc. I not the way this technologie works, for my point of view.
This type of feature could be done with a reverse proxy who listen routes and dispatch redirection.

## Stack

- NX monorepo
- Module-federation (webpack) [documentation](https://module-federation.io/)
- Nextjs Version 14 - pages-router (module-federation restricition)
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
