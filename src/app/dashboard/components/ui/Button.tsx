import { Button, ButtonProps } from "primereact/button";



export default function CustomButton({ label, className, onClick }: ButtonProps) {
    return (
        <Button
            label={label}
            className={`!bg-[#CFFF24] !border-[#CFFF24] !text-[#010202] !py-2 !text-sm ${className}`}
            onClick={onClick}
        />
    );
}
