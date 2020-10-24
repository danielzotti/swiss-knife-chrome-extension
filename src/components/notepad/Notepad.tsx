import React, { useEffect, useRef } from 'react';
import './Notepad.scss';
import { getItemFromLocalStorage, setItemToLocalStorage } from '../../services/LocalStorage';

type Props = {
  // text?: string;
}

interface NotepaLocalStorage {
  notepad?: string;
}

export const Notepad = (props: Props) => {
  // const [text, setText] = useState(props.text);

  useEffect(() => {
    getItemFromLocalStorage('notepad', (val: string) => {
      setInnerHtml(val, contendEditable);
    });
    // if(chrome?.storage?.local) {
    //   hasLocalStorageAccess = true;
    //   chrome.storage.local.get(['notepad'], function(data: NotepaLocalStorage) {
    //     if(data?.notepad) {
    //       setInnerHtml(data?.notepad, contendEditable);
    //     }
    //   });
    // } else {
    //   try {
    //     let notepad = window.localStorage.getItem('notepad');
    //     setInnerHtml(notepad, contendEditable);
    //   } catch(e) {
    //     console.log('Error on saving data into localStorage', e);
    //   }
    // }
  });

  // let hasLocalStorageAccess = false;

  const contendEditable = useRef<HTMLDivElement>(null);

  const setInnerHtml = (val: string | null | undefined, ref: React.RefObject<HTMLDivElement>) => {
    (ref.current as any).innerHTML = val ? val : '';
  };

  const onKeyUp = (e: React.FormEvent<HTMLDivElement>) => {
    const val = (e.target as any)?.innerHTML;
    setItemToLocalStorage('notepad', val);
  };

  return (
    <div className="Notepad"
         contentEditable="true"
         ref={ contendEditable }
         suppressContentEditableWarning={ true }
         onKeyUp={ onKeyUp }>&nbsp;</div>
  );
};
