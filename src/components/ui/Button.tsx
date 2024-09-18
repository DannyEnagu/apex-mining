import { Button, ButtonProps } from "primereact/button";

interface ApexButtonProps extends ButtonProps {
    iconClass?: string;
}

export default function ApexButton({
    children,
    className = "",
    outlined,
    icon = "pi-external-link",
    iconClass = "",
    ...props
}: ApexButtonProps) {
  return (
    <Button
      className={`${outlined ? '!bg-transparent !text-white': '!bg-[#CFFF24] !text-[#010202]'} md:!px-3 md:!py-3 md:!pl-5 md:!text-lg md:!font-light font-semibold !text-sm !px-1 !py-1 !pl-3 !rounded-full !border-[#CFFF24]  items-center gap-5 -z-10 ${className}`}
      iconPos="right"
      {...props}
    >
      {children}
      <span className={`border flex items-center justify-center w-[30px] h-[30px] rounded-full ${iconClass}`}>
        <i className={`pi ${icon} ${iconClass}`}></i>
      </span>
    </Button>
  );
}