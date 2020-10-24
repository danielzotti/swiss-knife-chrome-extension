import React, { ReactElement, useState } from "react"
import { TabTitle } from "./TabTitle"

type Props = {
  children: ReactElement[]
}

export const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div>
      <ul>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </div>
  )
}
