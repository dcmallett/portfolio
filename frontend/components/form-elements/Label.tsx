import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	className?: string;
	children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({
	className = "",
	children,
	...props
}) => (
	<label
		className={`block text-sm font-medium text-gray-700 ${className}`}
		{...props}
	>
		{children}
	</label>
);

export default Label;
