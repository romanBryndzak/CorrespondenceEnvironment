import React from 'react';
import classNames from "classnames";
import "./Button.css"
import PropTypes from "prop-types";

const Button = ({children, onClick, className, disabled, active, ...args}) => {
    const classes = classNames(
        'btn',
        className,
        {active}
    );

    const onClickAction = (e) => {
       return disabled ? e.preventDefault() : onClick(e);
    }

    const Tag = args.href ? "a" : "button"

    return (
        <Tag
            {...args}
            className={classes}
            disabled={disabled}
            onClick={onClickAction}
        >
            {children}
        </Tag>
    );
};
Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
};

Button.defaultProps = {
    children: "Default button",
    onClick: () => {},
    className: "",
    disabled: false,
    active: false
}

export default Button;