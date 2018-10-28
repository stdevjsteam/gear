import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';

export const homeCarousel = [
  trigger('homeCarousel', [
    transition('* <=> *', [
      state('in', style({opacity: 1})),
      style({opacity: 0.4}),
      animate('600ms ease-in-out', style({opacity: 1}))
    ])
  ])
];

export const carouselLike = [
  trigger('routeAnimation', [
    transition('left => *', [
      style({transform: 'translateX(-100%)'}),
      animate('350ms ease', style({transform: 'translateX(0%)'}))
    ]),
    transition('rigth => *', [
      style({transform: 'translateX(100%)'}),
      animate('350ms ease', style({transform: 'translateX(0%)'}))
    ])
  ])
];

export const listStagger = [
  trigger('listStagger', [
    transition('* <=> *', [
      query(':enter',
        [
          style({opacity: 0, transform: 'translateY(-15px)'}),
          stagger('50ms',
            animate('500ms ease-out',
              style({opacity: 1, transform: 'translateY(0px)'})))
        ], {optional: true})
    ])
  ])
];
