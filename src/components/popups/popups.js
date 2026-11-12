PopupManager.register("popup_for_cascade", {
  additional_close_controls: true,
  is_block_scroll: true,
});
PopupManager.register("popup_for_hotels_select", {
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
PopupManager.register('popup_for_room_advantages',
  {
    is_block_scroll: true,
    close_controls: true,
  },
  {
    on_open: (popup_element, params) => {

      let block_to_clone = params.block;
      let block_content = block_to_clone.cloneNode(true);
      popup_element.querySelector('.popup__content').append(block_content);

    },
    on_close: (popup_element, params) => {
      setTimeout(() => {
        popup_element.querySelector('.accommodation--info').remove()
      }, 100)
    }

  }
);
PopupManager.register(
  "popup_for_filters",
  {
    additional_close_controls: true,
    is_block_scroll: true
  },
  {
    on_open: (popup_element, params) => {
      let filters = document.querySelector(".popup--filters");
      let block_to_clone = params.block;
      let block_content = block_to_clone.cloneNode(true);
      filters.appendChild(block_content);
    },
    on_close: (popup_element, params) => {
      setTimeout(() => {
        popup_element.querySelector(".popup--filters").innerHTML = "";
      }, 110);
    }
  }
);

// PopupManager.register(
//   "popup_for_menu",
//   {
//     additional_close_controls: false,
//     is_block_scroll: false,
//   },
//   {
//     on_open: (popup_element) => {
//       if (window.matchMedia("(min-width: 769px)").matches) {
//         setTimeout(()=>{
//           drawLogo(popup_element);
//         }, 500)
//       }
//     },
//     on_close: (popup_element) => {
//       popup_element.querySelectorAll(".menu--mobile_item").forEach((item) => {
//         item.classList.remove("is-open");
//       });
//     },
//   },
// );


PopupManager.register('popup_for_confirmation',
  {
    is_block_scroll: true,
    close_controls: true,
  },
  {
    on_open: (popup, params) => {
      let title_container = popup.querySelector('.popup--title'),
        text_container = popup.querySelector('.popup--content_wrapper p');

      if( title_container ) title_container.innerHTML = params.title ?? 'Действие выполнено';
      if( text_container ) text_container.innerHTML = params.text ?? '';
    },
  }
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
      if (b.dataset.openpopup === "popup_for_filters") {
        let block_to_clone = b.parentElement.querySelector(".filter");
        if (block_to_clone) {
          PopupManager.open(b.dataset.openpopup, {block: block_to_clone});
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
//
// PopupManager.open('popup_for_confirmation', { title: 'Произошла ошибка', text: 'Попробуйте обновить страницу или попробовать позже'})
