import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';

export const homeCarousel = [
  trigger('homeCarousel', [
    transition('* => *', [
      style({
        opacity: 0.2
      }),
      animate('.4s', style({
        opacity: 1
      }))
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

export const navBarCollapse = [
  trigger('navBarCollapse', [
    state('true', style({
      height: '*'
    })),
    state('false', style({
      height: 0
    })),
    transition('false <=> true', [
      animate('.3s cubic-bezier(0.4, 0, 0.2, 1)')
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
