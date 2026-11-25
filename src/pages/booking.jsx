import { metaPages } from '../shared/meta-pages.js';
import BookingLayout from '../layouts/BookingLayout.jsx';
import { Block } from '../components/block/block.jsx';

export default function Home() {
  return <BookingLayout meta={metaPages.booking} >
    <Block title={'Бронирование'}></Block>
  </BookingLayout>;
}
