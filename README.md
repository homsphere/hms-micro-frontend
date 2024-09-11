# HMS Micro Frontend

Architecture with several independent projects and global navigation.  
This project is a test, to understand the way it will be possible to create multiple frontend sharing some components and logic, use SSO authentication, etc.

## NextJS Multi-zones solution

This branch using the Nextjs multi-zones feature.  
Multi-Zones are an approach to micro-frontends that separate a large application on a domain into smaller Next.js applications that each serve a set of paths.

### Run tasks

To run the dev server for apps, use :

```
npm serve-all
```

## Auth0 Universal login widget

This project implemente the auth0 widget.  
The Widget is customized using the auth0 CLI. it's connected to the Homsphere dev tenant.
The application is declared in the auth0 dashboard. The name is :  
 `hms-micro-frontend`

### Auth0 acces

Go to :  
https://manage.auth0.com/dashboard

## Sources :

- https://nextjs.org/docs/pages/building-your-application/deploying/multi-zones
- https://solutions-microfrontends.vercel.app/
- https://vercel.com/templates/next.js/microfrontends

## ChatGPT :

- https://chatgpt.com/share/ae0944db-1ca8-4d69-9d93-f57182017644
