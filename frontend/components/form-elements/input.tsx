import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	className?: string;
	labelClassName?: string;
	error?: string;
};

const Input: React.FC<InputProps> = ({
	label,
	className = "",
	labelClassName = "",
	error,
	...props
}) => (
	<div className="flex flex-col gap-1">
		{label && (
			<label className={`text-sm font-medium text-gray-700 ${labelClassName}`}>
				{label}
			</label>
		)}
		<input
			className={`w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${className} ${
				error ? "border-red-500" : ""
			}`}
			{...props}
		/>
		{error && <span className="text-xs text-red-500">{error}</span>}
	</div>
);

export default Input;
