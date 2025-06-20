type ButtonProps = {
    className: string,
    onClick?: () => void,
    children: React.ReactNode
}

const Button = (props: ButtonProps) => {
    const { className, onClick, children } = props;
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;