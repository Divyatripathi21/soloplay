const hideSidebar = () => {
  const sidebar = document.getElementById('related');
  const mastheadAd = document.querySelector('.ytp-ad-module');
  const playerContainer = document.getElementById('primary');

  if (sidebar) sidebar.style.display = 'none';
  if (mastheadAd) mastheadAd.style.display = 'none';

  if (playerContainer) {
    playerContainer.style.margin = '33px 0px 0px 420px';
    playerContainer.style.maxWidth = '800px';
  }
};

const showSidebar = () => {
  const sidebar = document.getElementById('related');
  const playerContainer = document.getElementById('primary');

  if (sidebar) sidebar.style.display = 'block';

  if (playerContainer) {
    playerContainer.style.margin = '';
    playerContainer.style.maxWidth = '';
  }
};

const showComments = () => {
  const comments = document.getElementById('comments');
  if (comments) comments.style.display = 'block';
};

const hideComments = () => {
  const comments = document.getElementById('comments');
  if (comments) comments.style.display = 'none';
};

const hideThumbnails = () => {
  const thumbnails = document.querySelectorAll('ytd-compact-video-renderer:not([watch-feed-big-thumbs]) ytd-thumbnail.ytd-compact-video-renderer');
  thumbnails.forEach(thumbnail => {
    thumbnail.style.marginRight = '8px';
    thumbnail.style.height = '94px';
    thumbnail.style.width = '0px';
  });
};

const showThumbnails = () => {
  const thumbnails = document.querySelectorAll('ytd-compact-video-renderer:not([watch-feed-big-thumbs]) ytd-thumbnail.ytd-compact-video-renderer');
  thumbnails.forEach(thumbnail => {
    thumbnail.style.marginRight = '';
    thumbnail.style.height = '';
    thumbnail.style.width = '';
  });
};

const blurThumbnails = () => {
  const thumbnails = document.querySelectorAll('#related .ytd-thumbnail');
  thumbnails.forEach(thumbnail => {
    thumbnail.style.filter = 'blur(8px)';
  });
};

const unblurThumbnails = () => {
  const thumbnails = document.querySelectorAll('#related .ytd-thumbnail');
  thumbnails.forEach(thumbnail => {
    thumbnail.style.filter = '';
  });
};



const showShort = () => {
  const shorts = document.querySelector('#scroll-outer-container.yt-horizontal-list-renderer');
  console.log(shorts);
  if (shorts) {
    shorts.style.display = 'block';
  }
}
const element = document.querySelector('#scroll-outer-container.yt-horizontal-list-renderer');
console.log(element); // Check if the correct element is selected

const hideShort = () => {
  const shorts = document.querySelector('#scroll-outer-container.yt-horizontal-list-renderer');
  console.log(shorts);
  if (shorts) {
    shorts.style.display = 'none';
  }
}






chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "hideSidebar") hideSidebar();
  if (request.action === "showSidebar") showSidebar();
  if (request.action === "showComments") showComments();
  if (request.action === "hideComments") hideComments();
  if (request.action === "hideThumbnails") hideThumbnails();
  if (request.action === "showThumbnails") showThumbnails();
  if (request.action === "blurThumbnails") blurThumbnails();
  if (request.action === "unblurThumbnails") unblurThumbnails();
  if (request.action === "showShort") showShort();
  if (request.action === "hideShort") hideShort();
  sendResponse({status: "done"});
});


// window.addEventListener('yt-navigate-finish', hideSidebar);
// document.addEventListener('DOMContentLoaded', hideSidebar);