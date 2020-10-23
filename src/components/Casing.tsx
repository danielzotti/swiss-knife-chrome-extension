import React, { useState } from 'react';

type Props = {
  text?: string;
}
export const Casing = (props: Props) => {
  const [text, setText] = useState(props.text);

  const onTextChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  return (
    <>
      <textarea placeholder="Insert text here" onChange={ onTextChange } value={ text }></textarea>
      <textarea disabled placeholder="UPPERCASE" value={ text?.toUpperCase() }></textarea>
      <textarea disabled placeholder="lowercase" value={ text?.toLowerCase() }></textarea>
    </>
  );
};
