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
    {/*<Preloader />*/}
    {/*<Transition/>*/}

    {children}
    <svg style="position: absolute" viewBox="0 0 32 32" width="0" height="0">
      <defs>
        <linearGradient id="active_stars" x1="0" x2="100%" y1="0" y2="0">
          <stop offset="0%" stop-color=""></stop>
          <stop offset="100%" stop-color=""></stop>
        </linearGradient>
        <mask id="stars-mask">
          <use xlink:href="#star" x="0"></use>
          <use xlink:href="#star" x="32"></use>
          <use xlink:href="#star" x="64"></use>
          <use xlink:href="#star" x="96"></use>
          <use xlink:href="#star" x="128"></use>
        </mask>
        <symbol viewBox="0 0 18 18" id="star">
          <path fill="#fff" stroke="none" d="M7.98261,12.5601l-4.347,2.655c-0.108,0.066,-0.234,0.098,-0.36,0.092c-0.127,-0.006,-0.249,-0.049,-0.351,-0.124c-0.102,-0.075,-0.18,-0.179,-0.223,-0.298c-0.043,-0.119,-0.05,-0.249,-0.019,-0.372l1.26,-5.018l-3.653,-2.844c-0.102,-0.079,-0.178,-0.187,-0.218,-0.31c-0.039,-0.122,-0.041,-0.254,-0.005,-0.378c0.037,-0.123,0.11,-0.233,0.21,-0.314c0.099,-0.082,0.222,-0.131,0.35,-0.142l4.781,-0.394l1.995,-4.649c0.049,-0.115,0.131,-0.214,0.236,-0.283c0.105,-0.069,0.228,-0.105,0.353,-0.105c0.126,0,0.248,0.037,0.353,0.106c0.104,0.069,0.186,0.168,0.235,0.283l1.978,4.648l4.813,0.395c0.128,0.011,0.25,0.06,0.35,0.141c0.1,0.081,0.173,0.191,0.21,0.314c0.037,0.124,0.035,0.255,-0.004,0.378c-0.039,0.123,-0.114,0.231,-0.216,0.31l-3.669,2.844l1.257,5.021c0.031,0.123,0.024,0.253,-0.018,0.372c-0.043,0.12,-0.121,0.224,-0.223,0.299c-0.102,0.075,-0.225,0.119,-0.351,0.124c-0.127,0.006,-0.253,-0.026,-0.361,-0.092l-4.363,-2.66v0.001z"></path>
        </symbol>
      </defs>
    </svg>

    <script src="/assets/js/main.libs.js"></script>
    <script src="/assets/js/main.js"></script>
    </body>
    </html>
  );
}
