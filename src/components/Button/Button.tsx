import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

type Props = {
  variants?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
};

function Button({
  variants = "primary",
  className,
  onClick,
  disabled = false,
  fullWidth = false,
  children,
}: Props) {
  // Kết hợp class từ các variant và className người dùng truyền vào
  const buttonClass = cx("button", variants, className, {
    disabled,
    fullWidth,
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
