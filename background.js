// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'start-login') {
//     console.log('Extension started.');
//     chrome.tabs.create({ url: "https://dashboard.razorpay.com/?screen=sign_in" }, (tab) => {
//       console.log('Razorpay login page opened.');
//       chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         files: ['content.js']
//       });
//     });
//   }
// });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'start-login') {
    console.log('Extension started.');
    
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        files: ['content.js']
      }, () => {
        console.log('Automation script executed on current page.');
      });
    });
  }
});
