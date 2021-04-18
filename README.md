# Personal Website

## Development

Gatsby can't handle ordering CSS imports well, so you need to import bootstrap
in `gatsby-browser-entry.js` as one of the first imports. After, running `gatsby build`,
but before `npm run deploy`, insert this at the top of the js file:

```
import 'bootstrap/dist/css/bootstrap.css';
```

