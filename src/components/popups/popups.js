PopupManager.register("popup_for_cascade", {
  additional_close_controls: true,
  is_block_scroll: true,
});
PopupManager.register(
  "popup_for_form",
  {
    is_block_scroll: true,
    additional_close_controls: true,
  },
  {
    on_close: (popup_element, params) => {
      popup_element.querySelector("form").reset();
    },
  },
);
PopupManager.register('popup_for_review',
  {
    is_block_scroll: true,
    close_controls: true,
  },
  {
    on_open: (popup_element, params) => {
      let block_to_clone = params.block.querySelector('.review_description.is_cascade');
      let block_content = block_to_clone.cloneNode(true);
      popup_element.querySelector('.popup_content-wrapper').append(block_content);

    },
    on_close: (popup_element, params) => {
      setTimeout(() => {
        popup_element.querySelector('.popup_content-wrapper').innerHTML = '';
      }, 100)
    }
  }
);

PopupManager.register(
  "popup_for_cookies",
  {
    additional_close_controls: false,
    is_block_scroll: false,
  },
  {
    on_close: (popup_element, params) => {
      sessionStorage.setItem("cookie", "shown");
    },
  },
);

PopupManager.register(
  "popup_for_contacts",
  {
    additional_close_controls: false,
    is_block_scroll: false,
  },
  {
    on_close: (popup_element, params) => {
    },
  },
);

PopupManager.register(
  "popup_for_menu",
  {
    additional_close_controls: false,
    is_block_scroll: false,
  },
  {
    on_open: (popup_element) => {
      if (window.matchMedia("(min-width: 769px)").matches) {
        setTimeout(()=>{
          drawLogo(popup_element);
        }, 500)
      }
    },
    on_close: (popup_element) => {
      popup_element.querySelectorAll(".menu--mobile_item").forEach((item) => {
        item.classList.remove("is-open");
      });
    },
  },
);


PopupManager.register(
	"popup_for_confirmation",
	{
		additional_close_controls: true,
		is_block_scroll: false,
	},
	{
		on_open: (popup_element, params = {}) => {
			const text = popup_element.querySelector(".popup--content_wrapper p");
			const title = popup_element.querySelector(".popup--title");
			const popup_type = params.type || "";
			title.textContent = params.title || "";
			text.innerHTML = params.text || "";
			title.classList.toggle("is_hidden", !params.title);

			if (popup_type) {
				popup_element.classList.add(popup_type);
			}

			popup_element.popup_confirmation_timeout = setTimeout(() => {
				PopupManager.close("popup_for_confirmation");
			}, 5000);
		},
		on_close: (popup_element) => {
			setTimeout(() => {
				const text = popup_element.querySelector(".popup--content_wrapper p");
				const title = popup_element.querySelector(".popup--title");
				title.textContent = "";
				text.innerHTML = "";
					popup_element.classList.remove(popup_element.dataset.popupType);
			}, 110);
		},
	},
);

// Add event Listeners to open Popups

function activatePopupButtons(block) {
  let open_popup_buttons = block.querySelectorAll("[data-openpopup]");
  open_popup_buttons.forEach((b) => {
    b.addEventListener("click", (e) => {
      e.preventDefault();
       if (b.dataset.openpopup === "popup_for_room_advantages") {
        let block_to_clone = b.previousElementSibling;
        if (block_to_clone) {
          PopupManager.open(b.dataset.openpopup, {block: block_to_clone})
        }
      }
      else if (b.dataset.openpopup === "popup_for_review") {
        let block_to_clone = b.closest('.review');
        if (block_to_clone) {
          PopupManager.open(b.dataset.openpopup, {block: block_to_clone})
        }
      }
      else {
        PopupManager.open(b.dataset.openpopup);
      }
    });
  });
}

activatePopupButtons(document);
window.activatePopupButtons = activatePopupButtons;

window.addEventListener('load', () => {
  if (sessionStorage.getItem('cookie') !== 'shown' && localStorage.getItem('cookie') !== 'shown') {
    PopupManager.open('popup_for_cookies');
    document.querySelector('[data-accept]').addEventListener('click', function () {
      sessionStorage.setItem('cookie', 'shown');
      localStorage.setItem('cookie', 'shown');
    })
  }
});
// PopupManager.open('popup_for_cookies');
// PopupManager.open('popup_for_confirmation', { title: 'Произошла ошибка', text: 'Попробуйте обновить страницу или попробовать позже', type: 'error' })

function drawLogo(){
  gsap.fromTo(".popup-menu__background-svg path",
    {
      drawSVG: "0%"
    },
    {
      drawSVG: "100%",
      duration: 2,
      ease: "power2.inOut"
    });
}
