chrome.contextMenus.create({
    id: "swiss-knife-counter",
    title: "Count words and letters",
    contexts: ["all"]
})
chrome.contextMenus.onClicked.addListener((info, tab) => {

    if (info.menuItemId === "swiss-knife-counter" && info.selectionText) {

        console.log("Hello from the service worker!", tab?.id);

        const text = info.selectionText;

        const letterCount = text.length;
        const wordCount = text.split(" ").length;

        chrome.scripting.executeScript({
            target: {tabId: tab!.id!},
            func: (letterCount, wordCount) => {
                alert(`The selected text contains 
- ${letterCount} letters
- ${wordCount} words`);
            },
            args: [letterCount, wordCount]
        });
    }
})
