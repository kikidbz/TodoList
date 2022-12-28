import classNames from "classnames";

const Button = (props) => (
  <button
    {...props}
    className={classNames(
      "px-3 py-2 font-semibold rounded-lg",
      props.className
    )}
  />
);

export default Button;
