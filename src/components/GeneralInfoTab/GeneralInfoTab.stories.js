import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import GeneralInfoTab from './index';

storiesOf('complex/GeneralInfoTab', module)
  .add('Default', () => (
    <GeneralInfoTab 
      onEditClick={action('onEditClick')}

      shortInfo={{
        vehicle: {
          vehicleTitle: text('vehicleTitle', 'Mercedes Class V Extralong'),
          vehicleNote: text('vehicleNote', 'Sedan, MDG 4455, EuroRentCars'),
        },
        customer: {
          customerName: text('customerName', 'Konstantin Lewandowski'),
          customerNote: text('customerNote', 'Client, EuroRentCars, +39 483 747 38 74'),
        },
        time: {
          from: text('from', '22 Nov'),
          till: text('till', '22 Dec'),
          fromTime: text('fromTime', '11:00'),
          tillTime: text('tillTime', '10:00'),
          delta: number('delta', 30),
        },
      }}
      
      details={{
        fromPoint: {
          title: text('fromPoint/ title', 'Via giuliani padre reginaldo 10, 20125 Milano, Italy'),
          note: text('fromPoint/ note', ''),
        },
        toPoint: {
          title: text('toPoint/ title', 'Komsomolskaya Str. 23, Business 3 building. Moscow, 888992, Russia'),
          note: text('toPoint/ note', 'Plesae park car near green wall'),
        },
        deltaKm: number('delta Km', 1345),
        additionalInformation: text('additionalInformation', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. text('),
        attachments: [
          { title: '1photo.jpg', link: '' },
          { title: 'asdnmq.jpg', link: '' },
          { title: 'somere.jpg', link: '' },
          { title: '2photo.jpg', link: '' },
        ],
      }}

      paymentDetails={{
        dueToPay: number('dueToPay', 3000),
        prepayment: number('prepayment', 500),
        callbacks: {
          onFullPaymentDetailsClick: action('onFullPaymentDetailsClick'),
        },
      }}

      reservationHistory={{
        data: [
          { dateTime: '13.09.2019 | 14:35', action: 'Client paid 3 500 € - total rentaal amount' },
          { dateTime: '13.09.2019 | 15:00', action: 'Courier Mark started delivery' },
          { dateTime: '13.09.2019 | 17:00', action: 'Courier Mark put finish on delivery' },
          { dateTime: '13.09.2019 | 17:11', action: 'A bit more action' },
        ],
        callbacks: {
          onMoreClick: action('onMoreCick'),
        },
      }}

      drivers={[
        { name: 'Oleg Medvedev', info: 'Driver 1, +39 483 747 38 74' },
        { name: 'Driver 2', info: 'info' },
        { name: 'Driver 3', info: 'info' },
      ]}


      checks={{
        confirmation: {
          checked: boolean('confirmation', true),
          date: '18 Nov',
        },
        moneyTransaction: {
          checked: boolean('moneyTransaction', true),
          date: '19 Nov',
        },
        pickUp: {
          checked: boolean('pickUp', false),
          date: '22 Nov',
        },
        dropOff: {
          checked: boolean('dropOff', false),
          date: '22 Dec',
        },
        depositUnblock: {
          checked: boolean('depositUnblock', false),
          date: '22 Dec',
        },
        pickUpCourier: text('pickUpCourier', 'Vladimir'),
        dropOffCourier: text('dropOffCourier', ''),
        callbacks: {
          onChangeCourierClick: (stage) => action('onChangeCourierClick', stage),
          onCheck: (stage) => action('onCheck', stage),
        },
      }}
    />
  ));
