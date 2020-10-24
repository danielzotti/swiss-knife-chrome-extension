import React, { useState } from 'react';
import './Casing.scss';

type Props = {
  text?: string;
}
export const Casing = (props: Props) => {
  const [text, setText] = useState(props.text);

  const onTextChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  const onClick = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e.currentTarget.select();
    e.currentTarget.setSelectionRange(0, 99999);
    document.execCommand('copy');
  };

  return (
    <div className="Casing">
      <textarea placeholder="Insert text here" onChange={ onTextChange } value={ text } onClick={ onClick }></textarea>
      <textarea placeholder="UPPERCASE" defaultValue={ text?.toUpperCase() } onClick={ onClick }></textarea>
      <textarea placeholder="lowercase" defaultValue={ text?.toLowerCase() } onClick={ onClick }></textarea>
    </div>
  );
};
