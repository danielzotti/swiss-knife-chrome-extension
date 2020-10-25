declare var chrome: any;

export const setItemToLocalStorage = (key: string, val: string) => {
  if(chrome?.storage?.local) {
    const data: any = {};
    data[key] = val;
    chrome.storage.local.set(data);
  } else {
    try {
      window.localStorage.setItem(key, val);
    } catch(e) {
      console.log('Error on saving data into localStorage', e);
    }
  }
};

export const getItemFromLocalStorage = (key: string, cb: (val: string | null) => void) => {
  if(chrome?.storage?.local) {
    chrome.storage.local.get([key], function(data: any) {
      return cb(data[key]);
    });
  } else {
    try {
      const val = window.localStorage.getItem(key);
      return cb(val);
    } catch(e) {
      console.log('Error on getting data from localStorage', e);
    }
  }
};
