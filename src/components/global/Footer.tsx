import type {Link} from "~/schema/components/link"
import {For} from "solid-js";
import {A} from "@solidjs/router";

type footerData = {
    links: Link[]
}

export default function Footer(props: footerData) {
    return (
        <footer class="shrink-0 bg-primary-900 border-t  border-t-secondary-700  w-full">
            <div class="max-w-7xl text-lg tracking-widest mx-auto  flex justify-end py-7 gap-4">
                <For each={props.links}>
                    {(link, index) => (
                        <A class="hover:text-accent-500 transition duration-100" href={link.href}>{link.label}</A>
                    )}
                </For>
            </div>
        </footer>

    )
}