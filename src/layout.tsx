import {JSX, Suspense} from "solid-js";
import Header from "~/components/global/Header";
import Footer from "~/components/global/Footer";

export default function Layout(props: { children: JSX.Element; }) {
    return (
        <div class="flex min-h-screen w-full flex-col bg-primary-800 font-inter text-secondary-500">

            <Header />

            <Suspense>
                <main class="flex flex-col overflow-y-scroll flex-auto">
                    {props.children}
                </main>
            </Suspense>

            <Footer links={[]} />
        </div>
    )
}