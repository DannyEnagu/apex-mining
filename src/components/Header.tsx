import Hero from "./Hero";
import Nav from "./nav";

export default function Header() {
    return (
        <header className="relative flex flex-col h-[85vh] border-b border-gray-800">
            {/* <div className="absolute bg-gradient-to-r from-transparent from-0% via-lime-300 via-20% to-transparent to-100% inset-0 w-[400px] left-[20%] -z-50 border"></div> */}
            <div className="absolute hero-gradient -z-50 inset-0"></div>
            <Nav />
            <Hero />
        </header>
    );
}