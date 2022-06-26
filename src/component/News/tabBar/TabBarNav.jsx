import React from 'react';
import classNames from "classnames";
import "./TabBarNav.css"
import PropTypes from "prop-types";

const TabBarNav = ({navLabel, className, onChangeActiveTab, ...args}) => {

    const classes = classNames(
        'nav-item',
        className,
    );

    const onClick = (navLabel) => {
        onChangeActiveTab(navLabel)
    };

    return (
        <button
            {...args}
            className={classes}
            onClick={() => onClick(navLabel)}
        >
            {navLabel}
        </button>
    );
};
TabBarNav.propTypes = {
    navLabel: PropTypes.string,
    className: PropTypes.string,
    onChangeActiveTab: PropTypes.func,

};

TabBarNav.defaultProps = {
    navLabel: "",
    className: "",
    onChangeActiveTab: () => {}
}

export default TabBarNav;