const video = document.querySelector('.video');

function setupVideo() {
  if (video) {
    const button = video.querySelector('.video__btn');
    button.addEventListener('click', () => {
      const iframe = createIframe();
      const videoBox = document.createElement('div');
      videoBox.classList.add('video__box');
      button.remove();
      video.appendChild(videoBox);
      videoBox.appendChild(iframe);
    });
  }
}


function createIframe() {
  let iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iframe.setAttribute('allowfullscreen', 'allowfullscreen');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('frameborder', '0');
  iframe.style.zIndex = '10';

  return iframe;
}

export {setupVideo};
