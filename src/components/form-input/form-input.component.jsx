import "./form-input.styles.scss";

const FormInput = ({ labelText, ...otherProps }) => {
  return (
    <div className="group">
      <label
        className={`${
          otherProps.value.length > 0 ? "shrink" : ""
        } form-input-label`}
      >
        {labelText}
      </label>
      <input className="form-input" {...otherProps} />
    </div>
  );
};

export default FormInput;
