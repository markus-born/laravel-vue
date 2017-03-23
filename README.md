# Autodiler 

Baziran je na templejtu vue-hackernews-2.0 koji u sebi uključuje Vue 2.0 + vue-router + vuex, sa SSR server-side rendering.

> Napomena: Aplikacija je još uvijek u razvoju

## Osobine

- Server Side Rendering
  - Vue + vue-router + vuex working together
  - Server-side data pre-fetching
  - Client-side state & DOM hydration
- Single-file Vue Components
  - Hot-reload in development
  - CSS extraction for production
- Real-time List Updates with FLIP Animation

## Build Setup

**Potrebno je da imate Node.js 6+**

``` bash
# install dependencies
npm install # or yarn

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# serve in production mode
npm start
```