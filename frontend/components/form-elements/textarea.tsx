import React from "react";

interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	className?: string;
	labelClassName?: string;
	error?: string;
}

const Textarea: React.FC<TextareaProps> = ({
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
		<textarea
			className={`rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-2 resize-y min-h-[80px] text-base ${className} ${
				error ? "border-red-500" : ""
			}`}
			{...props}
		/>
		{error && <span className="text-xs text-red-500">{error}</span>}
	</div>
);

export default Textarea;
