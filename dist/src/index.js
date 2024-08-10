import { jsx as _jsx } from "react/jsx-runtime";
import { App } from "./components/App";
import { createRoot } from 'react-dom/client';
var root = document.querySelector('#root');
var container = createRoot(root);
container.render(_jsx(App, {}));
