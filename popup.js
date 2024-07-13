document.getElementById('toggle-sidebar').addEventListener('change', (event) => {
  const action = event.target.checked ? "hideSidebar" : "showSidebar";
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: action});
  });
});

document.getElementById('toggle-comments').addEventListener('change', (event) => {
  const action = event.target.checked ? "hideComments" : "showComments";
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: action});
  });
});

document.getElementById('toggle-hide-thumbnails').addEventListener('change', (event) => {
  const action = event.target.checked ? "hideThumbnails" : "showThumbnails";
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: action});
  });
});

document.getElementById('toggle-blur-thumbnails').addEventListener('change', (event) => {
  const action = event.target.checked ? "blurThumbnails" : "unblurThumbnails";
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: action});
  });
});


document.getElementById('toggle-short').addEventListener('change', (event) => {
  const action = event.target.checked ? "hideShort" : "showShort";
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: action});
  });
});
