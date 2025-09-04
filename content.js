chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getVideoId") {
      const videoId = window.location.search.split('v=')[1];
      sendResponse({ videoId });
    }
  });
  