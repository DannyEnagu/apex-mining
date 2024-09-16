import DeskTopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Nav() {
    return (
        <nav>
            <div>
                <MobileNav />
                <DeskTopNav />
            </div>
        </nav>
    );
}