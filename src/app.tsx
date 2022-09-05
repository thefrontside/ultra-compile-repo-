import useAsset from "ultra/hooks/use-asset.js";
import { Inspector } from './inspector/components/Inspector/Inspector.tsx';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>basic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={useAsset("./favicon.ico")} />
        <link rel="stylesheet" href={useAsset("./index.css")} />
      </head>
      <body>
        <main>
          <Inspector />
        </main>
      </body>
    </html>
  );
}
