// import { StrictMode } from 'react';
// import {
//   type RenderToPipeableStreamOptions,
//   renderToPipeableStream,
//   renderToString,
// } from 'react-dom/server';
// import { StaticRouter } from 'react-router';
// import { Router } from './router';

// export function render(_url: string, options?: RenderToPipeableStreamOptions) {
//   return renderToPipeableStream(
//     <StrictMode>
//       <StaticRouter location={_url}>
//         <Router />
//       </StaticRouter>
//     </StrictMode>,
//     options,
//   )
// }
// Libraries imports
import React from 'react';
import {
  type RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from 'react-dom/server'; // Server-side rendering module from react-dom library.
import { StaticRouter } from 'react-router';
// App level imports
import { Router } from './router';
// import Error, { ErrorProps } from './components/Error';

export function render(path: string, options?: RenderToPipeableStreamOptions) {

  const location = `/${path}`;

  try {
    return renderToPipeableStream(
      // The renderToString method, is used to convert React components to an HTML string, 
      // which can be sent to the client for initial rendering.
      <React.StrictMode>
        <StaticRouter basename="/" location={location}>
          <Router />
        </StaticRouter>
      </React.StrictMode>,
      options,
    );
  } catch (error) {
    console.error('Error rendering page:', error)
    // return renderToPipeableStream(<Error statusCode={500} />, options);
  }
}
