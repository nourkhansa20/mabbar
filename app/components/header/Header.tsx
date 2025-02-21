
export const Header = ({ children, className }: { children: React.ReactNode, className?: any }) => {
    return (
        <h1 className={`text-3xl lg:text-[7ex] w-fit h-fit font-bold ${className}`} >
            {children}
        </h1>
    );
};

export const OutlineHeader = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="font-outline-2 mx-2">
            {children}
        </span>
    );
};