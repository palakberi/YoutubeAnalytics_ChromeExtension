document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "getVideoId" }, response => {
        const videoId = response.videoId;
        chrome.runtime.sendMessage({ action: "fetchAnalytics", videoId }, analytics => {
          document.getElementById('analytics').innerHTML = `
            <p>Views: ${analytics.viewCount}</p>
            <p>Likes: ${analytics.likeCount}</p>
            <p>Comments: ${analytics.commentCount}</p>
          `;
        });
      });
    });
  });
  