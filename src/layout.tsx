import {JSX, Suspense} from "solid-js";
import Nav from "~/components/Nav";

export default function Layout(props: {children: JSX.Element;} ) {
    return (
        <>
            <Nav/>
            <Suspense>{props.children}</Suspense>
        </>
    )
}