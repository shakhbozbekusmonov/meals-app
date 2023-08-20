import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
}

const Button: FC<ButtonProps> = ({ children, text = "btn", ...rest }) => {
    return (
        <button {...rest}>
            {text}
            {children}
        </button>
    );
};

export default Button;
