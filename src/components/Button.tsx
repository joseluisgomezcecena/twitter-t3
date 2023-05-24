import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type ButtonProps = {
    small?: boolean;
    gray?: boolean;
    className?: string;

}& DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export function Button({small, gray, className="",...props}:ButtonProps)
{
    const SizeClasses = small ? "px-2 py-1" : "px-4 py-2 font-bold";
    const ColorClasses = gray ? "text-gray-500 bg-gray-200 hover:bg-gray-300" : "text-white bg-blue-500 hover:bg-blue-600";

    return (
        <button className={`rounded-full text-white transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${SizeClasses} ${ColorClasses} {className}`} {...props}></button>
    );
}
