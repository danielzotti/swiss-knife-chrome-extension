import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  const onResetField = () => {
    setText('');
  };
  return (
    <div className="Casing">
      <div className="buttons-container">
        <button className="btn-reset" onClick={ onResetField }>
          <FontAwesomeIcon icon="backspace"/>&nbsp;<span>Empty field</span>
        </button>
        <span className="hint">Click on a textarea to copy the content in your clipboard</span>
      </div>
      <textarea placeholder="Insert text here" onChange={ onTextChange } value={ text } onClick={ onClick }></textarea>
      <textarea placeholder="UPPERCASE" value={ text?.toUpperCase() } onChange={ ()=> {}} onClick={ onClick }></textarea>
      <textarea placeholder="lowercase" value={ text?.toLowerCase() } onChange={ ()=> {}} onClick={ onClick }></textarea>
    </div>
  );
};
