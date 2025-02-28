import App from "./App.svelte";  // ✅ Corrected path
import "./app.css";  // ✅ Corrected path

const app = new App({
  target: document.getElementById("app"),
});

export default app;
