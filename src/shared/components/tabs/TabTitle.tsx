type TabTitleProps = {
    title: string
    index: number
    setActiveTab: (index: number) => void
    isActive: boolean
}

export const TabTitle = ({title, setActiveTab, index, isActive}: TabTitleProps) => {

    const onClick = () => {
        if (!isActive) {
            setActiveTab(index);
        }
    };

    return (
        <li className={isActive ? 'active' : undefined}>
            <button onClick={onClick}>{title}</button>
        </li>
    );
};
