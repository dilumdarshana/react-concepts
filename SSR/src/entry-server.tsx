// Libraries imports
import React from 'react';
import ReactDOMServer from 'react-dom/server'; // Server-side rendering module from react-dom library.
import { StaticRouter } from 'react-router';
// App level imports
import { Router } from './router';
import Error, { ErrorProps } from './components/Error';

interface IRenderProps extends ErrorProps {
  path: string
  statusCode?: number
}

export function render({ path, statusCode }: IRenderProps) {
  if (statusCode) {
    return ReactDOMServer.renderToString(<Error statusCode={statusCode} />)
  }
  const location = `/${path}`;

  try {
    const html = ReactDOMServer.renderToString(
      // The renderToString method, is used to convert React components to an HTML string, 
      // which can be sent to the client for initial rendering.
      <React.StrictMode>
        <StaticRouter basename="/" location={location}>
          <Router />
        </StaticRouter>
      </React.StrictMode>
    );

    return { html };
  } catch (error) {
    console.error('Error rendering page:', error)
    return { html: ReactDOMServer.renderToString(<Error statusCode={500} />) };
  }
}
