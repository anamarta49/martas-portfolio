import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
    
    transition('* <=> *', [        
        query(':enter, :leave', 
             style({ position: 'fixed',  width: '70vw'}), 
             { optional: true }),
        group([
             query(':enter', [
                 style({ transform: 'translateX(150%)', opacity: 0 }), 
                 animate('0.9s ease-in-out', 
                 style({ transform: 'translateX(0%)', opacity: 1}))
             ], { optional: true }),
             query(':leave', [
                 style({ transform: 'translateX(0%)'}),
                 animate('0.8s ease-in-out', 
                 style({ transform: 'translateX(-120%)', opacity: 0 }))
                 ], { optional: true }),
         ])
   ]),
]);
