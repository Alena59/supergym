function setupVideo() {
  const video = document.querySelector('.video');
  const picture = video.querySelector('.video picture');
  const button = video.querySelector('.video__btn');

  // button.removeAttribute('href');
  // video.classList.add('is-active');

  button.addEventListener('click', () => {
    const iframe = createIframe();
    const videoBox = document.createElement('div');
    videoBox.classList.add('video__box');
    picture.remove();
    button.remove();
    video.appendChild(videoBox);
    videoBox.appendChild(iframe);
  });
}

function createIframe() {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iframe.setAttribute('allowfullscreen', 'allowfullscreen');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('frameborder', '0');
  iframe.style.zIndex = '10';
  // https://www.youtube.com/watch?v=9TZXsZItgdw

  return iframe;
}

export {setupVideo};
