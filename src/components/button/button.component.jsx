import "./button.styles.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <button className={`button-container "inverted"`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
