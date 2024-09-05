document.getElementById('start-login').addEventListener('click', () => {
    console.log('Start Login button clicked.');
    chrome.runtime.sendMessage({ action: 'start-login' });
  });
  