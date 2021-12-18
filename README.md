# TheMoviedb simple web app

you can look demo version
[Demo Version](https://themoviedb-webapp.netlify.app)

## Instalation

use package manager NPM for install and running app

```bash
npm i
npm run start
```

## If Error

if web app have error module export you can change tsconfig file

```json
    "resolveJsonModule": true,
-   "isolatedModules": true,
+   "isolatedModules": false,
    "noEmit": true,
```
