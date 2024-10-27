import {FormEvent, RefObject, useEffect, useRef} from 'react';
import './Notepad.scss';
import { getItemFromLocalStorage, setItemToLocalStorage } from '../../services/LocalStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const notepadDefaultValue = 'Welcome to <b>Swiss Knife - Notepad</b>!&nbsp;<div><br></div><div><b><u>COMMANDS</u></b>:</div><div>- Ctrl+B for <b>bold</b></div><div>- Ctrl+U for <u>underline</u><br></div><div>- Ctrl+I for&nbsp;<i>italic</i></div><div><br></div><div>Text will be automatically saved every time a key is pressed.</div>';

export const Notepad = () => {

  const notepadKey = 'Notepad__text';

  useEffect(() => {
    getItemFromLocalStorage(notepadKey, (val: string | null) => {
      setInnerHtml(val === null ? notepadDefaultValue : val, contendEditable);
    });
  });

  const contendEditable = useRef<HTMLDivElement>(null);

  const setInnerHtml = (val: string | null | undefined, ref: RefObject<HTMLDivElement>) => {
    (ref.current as HTMLDivElement).innerHTML = val ? val : '';
  };

  const onKeyUp = (e: FormEvent<HTMLDivElement>) => {
    const val = (e.target as HTMLDivElement)?.innerHTML;
    setItemToLocalStorage(notepadKey, val);
  };

  const onResetField = () => {
    setInnerHtml('', contendEditable);
    setItemToLocalStorage(notepadKey, '');
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
