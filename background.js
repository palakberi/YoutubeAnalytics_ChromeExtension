chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchAnalytics") {
      fetchAnalytics(request.videoId).then(response => sendResponse(response));
      return true; 
    }
  });
  
  async function fetchAnalytics(videoId) {
    const apiKey = ''; 
    const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.items[0].statistics;
  }
  
