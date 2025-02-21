import PrimaryButtonBackground from "@/public/svg/PrimaryButtonBackground";
import Image from "next/image";

interface ButtonProps {
    className?: string; 
    onClick?: () => void; 
    isLoading?: boolean; 
    children: React.ReactNode; 
    disabled?: boolean; 
    withoutWidth?: boolean; 
    [key: string]: any; 
}

export const Button: React.FC<ButtonProps> = ({
    className = "",
    onClick,
    isLoading = false,
    children,
    disabled: propDisabled = false,
    withoutWidth = false,
    ...props
}) => {
    const isDisabled = isLoading || propDisabled;

    return (
        <div
            className={`flex justify-center items-center relative rounded-2xl gap-2 font-bold cursor-pointer group
                h-[6.3ex] w-[20ex] text-white
                ${className}`}
        >
            <PrimaryButtonBackground className="absolute top-0 fill-[#40683C] group-hover:rotate-180 group-hover:fill-secondary " />

            <button
                {...props}
                disabled={isDisabled}
                onClick={!isDisabled ? onClick : undefined}
                className={`w-full h-full z-10 flex justify-center items-center text-xl transition-opacity duration-300 px-1 py-2 ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            >
                {isLoading ? "Loading..." : children}
            </button>
        </div>
    );
};

export default Button;