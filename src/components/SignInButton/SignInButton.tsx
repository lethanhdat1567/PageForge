import classNames from "classnames/bind";
import styles from "./SignInButton.module.scss";

const cx = classNames.bind(styles);

function SignInButton() {
  return (
    <button className={cx("sign-in-button")}>
      <span className={cx("background-overlay")} />
      <span className={cx("background-gradient")} />
      <div className={cx("button-content")}>
        <span className={cx("select-none")}>Sign up free</span>
        <svg viewBox="0 0 20 20" fill="currentColor" className={cx("icon")}>
          <path
            clipRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </button>
  );
}

export default SignInButton;
