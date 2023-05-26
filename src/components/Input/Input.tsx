import { useEffect, useRef, useState } from "react";
import eyeIcon from "assets/icons/eye_open.svg";
import eyeHideIcon from "assets/icons/eye_closed.svg";
import ngnIcon from "assets/icons/ngn_flag.svg";
import infoIcon from "assets/icons/info.svg";
import uploadIcon from "assets/icons/upload_icon.svg";
import "./Input.scss";

type InputProps = {
  label: string;
  type: any;
  placeholder?: string;
  toggleVisibility?: () => void;
  infoIconClick?: () => void;
  secure?: boolean;
  required?: boolean;
  value?: string | any;
  onChange?: any;
  onChangeCapture?: any;
  style?: any;
  id?:string;
  withFlag?: boolean;
  withInfo?: boolean;
  leftIcon?: string;
  readonly?: any;
};

const Input = (props: InputProps) => {
  const [visible, setVisible] = useState(false);
  const [isFileType, setIsFileType] = useState(false);
  const [labelStyle, setLabelStyle] = useState("#484646");

  const {
    label,
    type,
    id,
    secure,
    required,
    value,
    onChange,
    onChangeCapture,
    withFlag,
    withInfo,
    readonly,
    infoIconClick,
    leftIcon = ngnIcon,
  } = props;

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const inputRef: any = useRef(null);

  const handleFileClick = () => {
    // 👇️ open file input box on click of other element
    inputRef?.current?.click();
  };

  const setInputType = () => {
    let inputType = type;
    if (secure) {
      if (visible) {
        inputType = "text";
      }
    }

    return inputType;
  };

  useEffect(() => {
    if (type === "file") {
      setIsFileType(true);
    }
  }, []);

  return (
    <div className="form-group">
      <label style={{ color: labelStyle }} className="capitalize">
        {label}
      </label>
      <div className={`input-wrapper ${withFlag ? "ngn-icon" : ""}`}>
        {secure && (
          <img
            onClick={toggleVisibility}
            className="vector-img"
            src={visible ? eyeIcon : eyeHideIcon}
            alt="vector-img"
          />
        )}
        {/* To be refactored - withFlag */}
        {withFlag && (
          <img
            className="ngn-icon ngn-icon-show"
            src={leftIcon}
            alt="ngnIcon"
          />
        )}

        {withInfo && (
          <img
            className="info-icon info-icon-show"
            src={infoIcon}
            alt="infoIcon"
            onClick={infoIconClick}
          />
        )}
        <input
          {...props}
          ref={inputRef}
          id={id}
          onChangeCapture={onChangeCapture}
          type={setInputType()}
          required={required}
          value={value}
          readOnly={readonly}
          onChange={onChange}
          className={`${isFileType ? "file-input" : ""}`}
          onFocus={() => setLabelStyle("#2bd9c7")}
          onBlur={() => setLabelStyle("#484646")}
        />
        {isFileType && (
          <div className="file" onClick={handleFileClick}>
            <img src={uploadIcon} alt="uploadIcon" />
            <p>Upload image</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
