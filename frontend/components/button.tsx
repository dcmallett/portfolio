import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	type = "button",
	role,
	className = "",
	children,
	...props
}) => (
	<button
		type={type}
		role={role}
		className={`px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition ${className}`}
		{...props}
	>
		{children}
	</button>
);

export default Button;
