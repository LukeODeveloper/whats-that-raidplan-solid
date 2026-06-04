import {A} from "@solidjs/router";
import {FiPlus} from "solid-icons/fi";

export default function Header() {

    return (
        <header class="shrink-0 border-b border-b-secondary-700 w-full">
            <div class="py-6 px-3 max-w-7xl mx-auto text-secondary-300 flex justify-between items-center">
                <A class=" font-bold tracking-widest text-xl h-fit hover:text-accent-500 transition-colors duration-100"
                   href={"/"}>
                    WHATS THAT RAIDPLAN
                </A>
                <button
                    class="font-inter  text-lg md:border px-6 py-2 text-accent-500 hover:bg-white/15 cursor-pointer transition duration-100 tracking-wide">
                    <span class="hidden md:block">SUBMIT A PLAN</span>
                    <FiPlus class="inline-block md:hidden text-2xl"/>
                </button>
            </div>
        </header>

    )
}