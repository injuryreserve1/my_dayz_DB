import type { ButtonHTMLAttributes, ReactNode } from "react";
import cls from "./Button.module.css"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

const Button = (props: Props) => {
    const {children, ...otherProps} = props;
    return (
        <button className={cls.Button} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;