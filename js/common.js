// (mobile) sitemap click
const mMenu = document.querySelector('.m-menu');
mMenu.addEventListener('click', () => {
	mMenu.classList.toggle('active');
});


// scroll 했을 때, .header.main fixed  
const html = document.querySelector('html');
const headerMain = html.querySelector('.header.main');

let lastScroll = 0; 
window.addEventListener('scroll', () => {
	let scrollHeight = html.scrollTop;
		if (scrollHeight > 112) {
      if (scrollHeight > lastScroll) {
        headerMain.style.display = 'block';
        headerMain.classList.add('fix');
      } else {
        headerMain.style.display = 'none';
      }
    } else {
      headerMain.style.display = 'block';
      headerMain.classList.remove('fix');
	}

	lastScroll = scrollHeight;
});


// header
// (pc) gnb menu click lnb hover & active
const gnb = document.querySelector('.gnb');
const lnbBg = document.querySelector('.lnb-bg');

gnb.addEventListener('mouseenter', () => {
	gnb.classList.add('hover');
	lnbBg.classList.add('active');
});
gnb.addEventListener('mouseleave', () => {
	gnb.classList.remove('hover');
	lnbBg.classList.remove('active');
});


// (mobile) footer : info open & close
const mFooterInfo = document.querySelector('.m-footer-info');
const footInfoBtn = mFooterInfo.querySelector('.footer-info-btn');
	
footInfoBtn.addEventListener('click', () => {
	mFooterInfo.classList.toggle('active');
});

