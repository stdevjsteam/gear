import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

export const homeCarousel = [
  trigger('homeCarousel', [
    transition('* <=> *', [
      style({opacity: 0}),
      animate('750ms ease-in', style({opacity: 1}))
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
