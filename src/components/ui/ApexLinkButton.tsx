import Link from "next/link";

interface ApexLinkButtonProps {
  label?: string;
  iconClass?: string;
  icon?: string;
  outlined?: boolean;
  className?: string;
  children?: React.ReactNode;
  href: string;
}

export default function ApexLinkButton({
    label,
    children,
    className = "",
    outlined = false,
    icon = "pi-external-link",
    iconClass = "",
    href,
}: ApexLinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${outlined ? 'bg-transparent text-white border border-[#CFFF24]': 'bg-[#CFFF24] text-[#010202]'} md:px-3 md:py-3 md:pl-5 md:text-lg md:font-light font-semibold text-sm px-1 py-1 pl-3 rounded-full inline-flex justify-between items-center gap-5 -z-10 ${className}`}
    >
      <span>
        {label ? label : children}
      </span>
      <span className={`border flex items-center justify-center w-[30px] h-[30px] rounded-full ${iconClass}`}>
        <i className={`pi ${icon} ${iconClass}`}></i>
      </span>
    </Link>
  );
}