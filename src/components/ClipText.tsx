
interface ClipTextProps {
    children?: React.ReactNode;
}

export default function ClipText({ children }: ClipTextProps) {
    return (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-white">
            {children}
        </span>
    );
}