declare var chrome: any;

export const isInChrome = () => {
  return (window as any).chrome;
};
export const isInChromeExtension = () => {
  return isInChrome() && !!chrome?.storage?.local;
};

export const setItemToLocalStorage = (key: string, val: string) => {
  if(isInChromeExtension()) {
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
  if(isInChromeExtension()) {
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

