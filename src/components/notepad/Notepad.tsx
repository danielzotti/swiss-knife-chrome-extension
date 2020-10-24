import React, { useEffect, useState } from 'react';
import './Notepad.scss';
import { Debugger } from 'inspector';

declare var chrome: any;
type Props = {
  text?: string;
}
export const Notepad = (props: Props) => {
  const [text, setText] = useState(props.text);

  let hasLocalStorageAccess = false;

  useEffect(() => {
    if(chrome?.storage?.local) {
      hasLocalStorageAccess = true;
      chrome.storage.local.get(['notepad'], function(data: any) {
        if(data?.notepad) {
          console.log(data.notepad);
          setText(data.notepad);
        } else {
          console.log('NO DATA!');
        }
      });
    }
  });


  const onKeyUp = (e: React.FormEvent<HTMLDivElement>) => {
    const val = (e.target as any).innerHTML;
    console.log('CURRENT VALUE', e.target);
    setText(val);
    if(hasLocalStorageAccess) {
      chrome.storage.local.set({ notepad: val }, function(test: any) {
        console.log('Notepad updated with', test);
      });
    } else {
      console.log('NO LOCAL STORAGE ACCESS', val);
    }

  };

  const createHtml = () => {
    return { __html: 'Primo &middot; Secondo' };
  };

  return (
    <div className="Notepad"
         contentEditable="true"
         suppressContentEditableWarning={ true }
         // dangerouslySetInnerHTML={ createHtml() }
         onKeyUp={ onKeyUp }>{ text }</div>
  );
};
