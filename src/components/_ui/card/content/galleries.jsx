import { Card } from './card.jsx';
import { Button } from '../../button/button.jsx';

export const All_card_galleries = ({ group = 'content-gallery' }) => {
  return (
    <>
      <Card title={'Card heading'} image={'/assets/img/1.jpg'} fancybox={group}></Card>
      <Card title={'Card heading'} image={'/assets/img/2.jpg'} fancybox={group}></Card>
      <Card title={'Card heading'} image={'/assets/img/1.jpg'} fancybox={group}></Card>
      <Card title={'Card heading'} text={'description'} image={'/assets/img/2.jpg'} fancybox={group}></Card>
      <Card title={'Card heading'} image={'/assets/img/1.jpg'} fancybox={group}></Card>
    </>
  );
};
