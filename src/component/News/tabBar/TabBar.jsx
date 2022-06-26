import React, {Component, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TabBarNav from './TabBarNav';

import './TabBar.css';

const TabBar = ({children, className, vertical, ...attrs}) => {

    const [activeTab, setTab] = useState('');

    const classes = classNames(
        'tab-bar',
        className,
        {vertical},
    )

    const setActiveTab = activeT => {
        if (activeTab !== activeT) {
            setTab(activeT);
        }
    };

    useEffect(() => {
        setTab(children[2].props.label);
    }, [])

    const getChildrenLabels = children => children.map(({props}) => {return props.label});

    const renderTabs = () => {

        return getChildrenLabels(children).map(navLabel => {
            return (
                <TabBarNav
                    key={navLabel}
                    navLabel={navLabel}
                    className={classNames({active: activeTab === navLabel})}
                    onChangeActiveTab={setActiveTab}
                />
            )
        });
    }

    return (
        <div className={classes} {...attrs}>
            <div className="tab-bar-nav">
                {renderTabs()}
            </div>
            <div className="tab-container">
                {React.Children.map(children, child => React.cloneElement(child, {activeTab}))}
            </div>
        </div>
    );
}

TabBar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    vertical: PropTypes.bool,
};

TabBar.defaultProps = {
    children: null,
    className: '',
    vertical: false,
};


// class TabBar extends Component {
//     static propTypes = {
//         children: PropTypes.node,
//         className: PropTypes.string,
//         vertical: PropTypes.bool,
//     };
//
//     static defaultProps = {
//         children: null,
//         className: '',
//         vertical: false,
//     };
//
//     state = {
//         activeTab: null,
//     }
//
//     componentDidMount() {
//         const { children = [] } = this.props;
//
//         const activeTab = this.getChildrenLabels(children)[0];
//
//         this.setActiveTab(activeTab);
//     }
//
//     getChildrenLabels = children => children.map(({ props }) => props.label)
//
//     setActiveTab = activeTab => {
//         const { activeTab: currentTab } = this.state;
//
//         if (currentTab !== activeTab) {
//             this.setState({
//                 activeTab,
//             });
//         }
//     }
//
//     renderTabs = () => {
//
//         const { children = [] } = this.props;
//         const { activeTab } = this.state;
//
//         return this.getChildrenLabels(children).map(navLabel => (
//             <TabBarNav
//                 key={navLabel}
//                 navLabel={navLabel}
//                 className={classNames({ active: activeTab === navLabel })}
//                 onChangeActiveTab={this.setActiveTab}
//             />
//         ));
//     }
//
//     render() {
//         const { activeTab } = this.state;
//         const {children, className, vertical, ...attrs} = this.props;
//         console.log(children, className, vertical, attrs)
//         const classes = classNames(
//             'tab-bar',
//             className,
//             { vertical },
//         );
//
//         return (
//             <div className={classes} {...attrs}>
//                 <div className="tab-bar-nav">
//                     {this.renderTabs()}
//                 </div>
//                 <div className="tab-container">
//                     {React.Children.map(children, child => React.cloneElement(child, { activeTab }))}
//                 </div>
//             </div>
//         );
//     }
// }

export default TabBar;