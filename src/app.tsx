import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import Layout  from "~/layout";
import "./app.css";

export default function App() {
  return (
    <Router root={props => (<Layout>{props.children}</Layout>)}>
      <FileRoutes />
    </Router>
  );
}
