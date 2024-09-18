import Link from "next/link";

export default function DeskTopNav() {
    return (
        <nav className="hidden md:block pb-8 pt-12 containerWidth mx-auto">
            <ul className="flex items-center gap-8">
                <li>
                    <Link href="/">
                        <span>Product & Services</span>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <span>How it Works</span>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <span>Features</span>
                    </Link>
                </li>
                <li className="mx-auto">
                    <Link href="/">
                        <span>Logo</span>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <span>Testimonial</span>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <span>Investor Regulations</span>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}