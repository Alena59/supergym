function setupVideo() {
  const video = document.querySelector('.video');
  // const link = video.querySelector('.video__link');
  const button = video.querySelector('.video__btn');

  // button.removeAttribute('href');
  // video.classList.add('is-active');

  button.addEventListener('click', () => {
    const iframe = createIframe();

    // link.remove();
    button.remove();
    video.appendChild(iframe);
  });
}

function createIframe() {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?rel=0&showinfo=0&autoplay=1');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.classList.add('video__poster');
  iframe.style.zIndex = '10';

  return iframe;
}

export {setupVideo};
