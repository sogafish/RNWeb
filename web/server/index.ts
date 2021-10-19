import express from 'express';
import React from 'react';
import { AppRegistry } from 'react-native-web';
import ReactDOMServer from 'react-dom/server';
import { ServerContainer } from '@react-navigation/native';
import { name as appName } from '../../app.json';

import App from '../../src/App';

const PORT = process.env.PORT || 3006;
AppRegistry.registerComponent(appName, () => App);
const app = express();

app.use(async (req, res) => {
  // const location = { pathName: req.path, search: req.params };
  const { element, getStyleElement } = AppRegistry.getApplication(appName);
  const serverContainer = React.createElement(ServerContainer, {
    location: {
      pathname: req.path,
      search: '',
    },
    children: element,
  });

  const html = ReactDOMServer.renderToString(serverContainer as JSX.Element);
  const css = ReactDOMServer.renderToStaticMarkup(getStyleElement());

  const document = `
    <!DOCTYPE html>
    <html style="height: 100%">
    <meta charset="utf-8">
    <meta httpEquiv="X-UA-Compatible" content="IE=edge">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"
    >
      ${css}
    <body style="min-height: 100%">
    <div id="root" style="display: flex; min-height: 100vh">
      ${html}
    </div>
  `;

  return res.send(document);
});

app.get('/', (_, res) => res.send('<p>this is Root</p>'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
