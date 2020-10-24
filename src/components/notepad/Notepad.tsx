import React, { useEffect, useRef } from 'react';
import './Notepad.scss';
import { getItemFromLocalStorage, setItemToLocalStorage } from '../../services/LocalStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  // text?: string;
}

export const Notepad = (props: Props) => {
  // const [text, setText] = useState(props.text);

  useEffect(() => {
    getItemFromLocalStorage('notepad', (val: string) => {
      setInnerHtml(val, contendEditable);
    });
  });

  const contendEditable = useRef<HTMLDivElement>(null);

  const setInnerHtml = (val: string | null | undefined, ref: React.RefObject<HTMLDivElement>) => {
    (ref.current as any).innerHTML = val ? val : '';
  };

  const onKeyUp = (e: React.FormEvent<HTMLDivElement>) => {
    const val = (e.target as any)?.innerHTML;
    setItemToLocalStorage('notepad', val);
  };

  const onResetField = () => {
    setInnerHtml('', contendEditable);
    setItemToLocalStorage('notepad', '');
  };

  return (
    <div className="Notepad">
      <div className="buttons-container">
        <button className="btn-reset" onClick={ onResetField }>
          <FontAwesomeIcon icon="backspace"/>&nbsp;<span>Empty notes</span>
        </button>
      </div>
      <div className="notepad-content"
           contentEditable="true"
           ref={ contendEditable }
           suppressContentEditableWarning={ true }
           onKeyUp={ onKeyUp }>&nbsp;</div>
    </div>
  );
};
