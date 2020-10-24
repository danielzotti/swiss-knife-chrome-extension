import React, { useCallback } from "react"

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

export const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <li>
      <button onClick={onClick}>{title}</button>
    </li>
  )
}
