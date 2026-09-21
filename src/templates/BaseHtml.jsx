import clsx from "clsx";
import { Preloader } from '../components/preloader/preloader-comp.jsx';
import { Transition } from '../components/transition/transition.jsx';

export default function BaseHtml({ children, meta, colorMode = '', className }) {
	return (
		<html lang="ru">
    <head>
      <meta charSet="UTF-8"/>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description}/>
      <link rel="stylesheet" href="/assets/css/libs.min.css"/>
      <link rel="stylesheet" href="/assets/css/main.css"/>
      <link rel="icon" type="image/png" href="/assets/favicon/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/assets/favicon/favicon.svg" />
      <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />

      <meta name="viewport" content="width=device-width,initial-scale=1"/>
    </head>
    <body class={clsx( colorMode, className)}>
    <Preloader />
    <Transition/>

    {children}
    <script src="/assets/js/main.libs.js"></script>
    <script src="/assets/js/main.js"></script>
    </body>
    </html>
  );
}
