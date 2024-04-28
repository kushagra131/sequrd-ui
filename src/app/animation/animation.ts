import {
  animate,
  animateChild,
  animation,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const cardEnterAnimation = animation([
  style({
    opacity: 0,
    height: '0%',
    width: '0%',
  }),
  animate(
    '1500ms 500ms cubic-bezier(0.35, 0, 0.25, 1)',
    keyframes([
      style({
        opacity: 0.1,
        height: '4.8%',
        width: '7.5%',
        background: '#673ab7',
      }),
      style({
        opacity: 0.2,
        height: '9.6%',
        width: '15%',
        background: '#673ab7',
      }),
      style({
        opacity: 0.3,
        height: '14.4%',
        width: '22.5%',
        background: '#673ab7',
      }),
      style({
        opacity: 0.4,
        height: '19.2%',
        width: '30%',
        background: '#673ab7',
      }),
      style({
        opacity: 0.5,
        height: '24%',
        width: '37.5%',
        background: '#673ab7',
      }),
      style({
        opacity: 0.6,
        height: '28.8%',
        width: '45%',
        background: '#673ab7',
      }),
      style({
        opacity: 0.7,
        height: '33.6%',
        width: '52.5%',
        background: '#673ab7',
      }),
      style({
        opacity: 0.8,
        height: '38.4%',
        width: '60%',
        background: '#673ab7',
      }),
      style({
        opacity: 0.9,
        height: '43.2%',
        width: '67.5%',
        background: '#673ab7',
      }),
      style({
        opacity: 1,
        height: '*',
        width: '*',
        background: '*',
      }),
    ])
  ),
]);

export const cardTitleAnimation = animation([
  style({ opacity: 0, transform: 'translateX(-100)' }),
  animate(
    '2000ms cubic-bezier(0.35, 0, 0.25, 1)',
    style({ opacity: 1, transform: 'none' })
  ),
]);

export const slideInRouteAnimation = trigger('routeAnimations', [
  transition('HomePage <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      })],
      { optional: true }
    ),
    query(':enter', [ style({ left: '-100%' }) ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':enter', [ 
        animate('1000ms ease', 
        style({ left: '0%' })) ], 
        { optional: true }
      ),
      query(':leave', [ 
        animate('500ms ease-in', 
        style({ left: '100%' })) ], 
        { optional: true }
      ),
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      })],
      { optional: true }
    ),
    query(':enter', [ style({ left: '-100%' }) ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':enter', [ 
        animate('1000ms ease', 
        style({ left: '0%' })) ], 
        { optional: true }
      ),
      query(':leave', [ 
        animate('500ms ease-in', 
        style({ left: '100%', opacity: 0 })) ],
        { optional: true }
      ),
    ]),
  ]),
]);
