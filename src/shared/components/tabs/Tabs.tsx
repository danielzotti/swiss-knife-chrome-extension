import {ReactElement, useEffect, useState} from 'react';
import {TabTitle} from './TabTitle';
import './Tabs.scss';
import {getItemFromLocalStorage, setItemToLocalStorage} from '../../../services/LocalStorage';

type TabsProps = {
    scope: string;
    children: ReactElement[];
}

export const Tabs = ({scope, children}: TabsProps) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabKey = `${scope}__tabIndex`

    useEffect(() => {
        getItemFromLocalStorage(tabKey, (tabIndexString) => {
            let tabIndex = 0;
            if (tabIndexString) {
                tabIndex = !isNaN(parseInt(tabIndexString, 10)) ? parseInt(tabIndexString, 10) : 0;
            }
            setActiveTab(tabIndex);
        });
    });

    const onActiveTabChanged = (tabIndex: number) => {
        setActiveTab(tabIndex);
        setItemToLocalStorage(tabKey, tabIndex.toString());
    };

    return (
        <div className="Tabs">
            <ul className="tabs__list">
                {children.map((item, index) => (
                    <TabTitle
                        key={index}
                        title={item.props.title}
                        index={index}
                        isActive={index === activeTab}
                        setActiveTab={onActiveTabChanged}
                    />
                ))}
            </ul>
            <div className="tabs__content">
                <div className="tabs__content-inner">
                    {children[activeTab]}
                </div>
            </div>
        </div>
    );
};
