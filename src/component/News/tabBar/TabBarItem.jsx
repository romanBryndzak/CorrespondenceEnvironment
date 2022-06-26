import React from 'react';
import classNames from "classnames";
import "./TabBarItem.css"
import PropTypes from "prop-types";

const TabBarItem = ({children, className, label, activeTab, ...args}) => {

    const classes = classNames(
        'tab-bar-item',
        className,
        {active: activeTab === label}
    );

    return (
        <div
            {...args}
            className={classes}
        >
            {children}
        </div>
    );
};
TabBarItem.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    activeTab: PropTypes.string,
};

TabBarItem.defaultProps = {
    label: "",
    children: null,
    className: "",
    activeTab: "",
}

export default TabBarItem;