// /* Кнопка скопировать номер */

const copyToClipboard = (content, el) => {
	if (window.isSecureContext && navigator.clipboard) {
		navigator.clipboard.writeText(content);
	} else {
		unsecuredCopyToClipboard(content, el);
	}
};

const unsecuredCopyToClipboard = (text, parentEl) => {
	const textArea = document.createElement("textarea");
	textArea.value = text;
	parentEl.appendChild(textArea);
	textArea.focus();
	textArea.select();
	try {
		document.execCommand("copy");
	} catch (err) {
		console.error("Unable to copy to clipboard", err);
	}
	parentEl.removeChild(textArea);
};

let activateCopyButtons = (block) => {
	let copy_buttons = block.querySelectorAll(".js_copy_button");

	copy_buttons.forEach((b) => {
		b.addEventListener("click", (e) => {
			let text = b.dataset.copy;
			copyToClipboard(text, e.currentTarget.parentNode);

			PopupManager.open("popup_for_notification", {
				title: b.dataset.notification_title,
				text: "",
				type: "success",
				autoClose: 3000,
			});
			b.classList.add("is_copying");

			setTimeout(() => {
				PopupManager.close("popup_for_notification");
				// b.classList.remove('is_copying')
			}, 1400);
		});
	});
};

activateCopyButtons(document);


function initImageTextSliders(block){
  let imageText_swiper = block.querySelectorAll('.js-imageTextSwiper');

  imageText_swiper.forEach(block => {

    let slider_controls = document.createElement('div');
    slider_controls.classList.add('slider_controls');

    let swiper_nav_prev = document.createElement('div');
    swiper_nav_prev.classList.add('swiper-button-prev');
    slider_controls.append(swiper_nav_prev);

    let swiper_nav_next = document.createElement('div');
    swiper_nav_next.classList.add('swiper-button-next');
    slider_controls.append(swiper_nav_next);

    const swiper = new Swiper(block, {
      createElements: true,
      freeMode: false,
      grabCursor: true,
      simulateTouch: true,
      allowTouchMove: true,
      touchStartPreventDefault: false,
      zoom: false,
      slidesPerView: 1,
      mousewheel: {
        forceToAxis: true,
      },
      slideClass: 'block_image_text',
      navigation: {
        nextEl: swiper_nav_next,
        prevEl: swiper_nav_prev,
      },
      on: {
        init: function (swiper) {
          if ( swiper.slides.length < swiper.params.slidesPerView ) {
            swiper.disable()
          }
        }
      }
    });
    block.append(slider_controls);
  })
}

initImageTextSliders(document);
