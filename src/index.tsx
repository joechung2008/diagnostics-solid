/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

render(() => <App />, document.getElementById("root")!);

reportWebVitals(console.log);
