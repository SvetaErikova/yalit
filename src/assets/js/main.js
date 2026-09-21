// ui
import '../../components/_ui/accordion/accordion.js';
import '../../components/_ui/copy_button/copy_button.js';
import '../../components/_ui/dropdown/dropdown.js';
import '../../components/_ui/is_cascade/is_cascade.js';
import '../../components/block/_ui/block--selection/block--selection.js';

// components
import '../../components/preloader/preloader.js'
import '../../components/header/header.js';
import '../../components/footer/footer.js';
import '../../components/scheme/scheme.js';
// import '../../components/menu/menu.js';
import '../../components/nav/nav.js';
import '../../components/popups/popups.js';
import '../../components/swiper/helpers.js';
import '../../components/swiper/swiper.js';
import '../../components/map/map.js';
import '../../components/gallery/gallery.js';
import '../../components/content/accomodation/accommodation.js';


// form
import '../../components/form/inputs/input_select/input_select.js';

// import '../../components/form/inputs/input_file/input_file.js';
// import "../../components/form/inputs/input_range/input_range.js";
// import "../../components/form/inputs/input_search/input_search.js";
// import "../../components/form/inputs/input_quantity/input_quantity.js";
import '../../components/form/inputs/input_tel/input_tel.js';
import '../../components/form/form.js';
import "../../components/form/inputs/input_date/input_date";


// import '../../components/booking/booking.js';
// content

import '../../components/content/reviews/review.js';
// import '../../components/transition/transition.js';

Fancybox.bind('.gallery *[data-fancybox]', {
  infinite: false,
  groupAll: false,
  hideScrollbar: false,
  startIndex: 0,
  contentClick: true,
  Images: {
    zoom: false,
  },
  Thumbs: {
    type: 'modern',
    minCount: 5,
  },
  Video: {
    autoplay: true,
  },
});

