import {ReactNode} from "react";

type TabProps = {
    children: ReactNode;
    title: string;
}

export const Tab = ({children}: TabProps) => {
    return <div className="Tab">{children}</div>;
};
