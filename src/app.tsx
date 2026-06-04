import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import Layout  from "~/layout";
import "./app.css";

export default function App() {
  return (
    <Router root={props => (<Layout>{props.children}</Layout>)}>
      <FileRoutes />
    </Router>
  );
}
