import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Image.css"

const Image = ({src, alt, className, circle, width, height, ...args}) => {

    const classes = classNames(
        className,
        {circle}
    );

    if (!src) {
        src = "https://via.placeholder.com/100x100"
    }
    // const Circle = circle ? { borderRadius: "50%" } : null;

    return (
        < img src={src} alt={alt} width={width} height={height}
              className={classes} {...args}
            //style={Circle}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    //circle: PropTypes.bool,
    onClick: PropTypes.func,
}
Image.defaultProps = {
    src: "",
    alt: "image name",
    className: "",
    width: 100,
    height: 100,
    //circle: false,
    onClick: null,
}

export default Image;