import Hero from "./Hero";
import Nav from "./nav";

export default function Header() {
    return (
        <header className="flex flex-col h-[85vh] border-b border-gray-800">
            <Nav />
            <Hero />
        </header>
    );
}