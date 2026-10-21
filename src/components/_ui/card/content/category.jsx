import { Card } from './card.jsx';
import { Button } from '../../button/button.jsx';

export const All_card_galleries = () => {
  return (
    <>
      <Card title={'Card heading'} image={'/assets/img/1.jpg'} action={
                                                                  <Button type="filled-secondary" icon="icon-ic-uniq-arrow-right" />}></Card>
      <Card title={'Card heading'} image={'/assets/img/1.jpg'} action={
                                                                  <Button type="filled-secondary" icon="icon-ic-uniq-arrow-right" />}></Card>
      <Card title={'Card heading'} image={'/assets/img/1.jpg'} action={
                                                                  <Button type="filled-secondary" icon="icon-ic-uniq-arrow-right" />}></Card>
      <Card title={'Card heading'} image={'/assets/img/1.jpg'} action={
                                                                  <Button type="filled-secondary" icon="icon-ic-uniq-arrow-right" />}></Card>
      <Card title={'Card heading'} image={'/assets/img/1.jpg'} action={
                                                                  <Button type="filled-secondary" icon="icon-ic-uniq-arrow-right" />}></Card>
    </>
  );
};
