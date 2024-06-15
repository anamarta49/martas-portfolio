import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
    
    transition('* <=> *', [        
        query(':enter, :leave', 
             style({ position: 'absolute', width: "70vw"}), 
             { optional: true }),
        
        group([
             query(':enter', [
                 style({ transform: 'translateX(100%)', opacity: 0 }), 
                 animate('0.9s cubic-bezier(.35, 0, .25, 1)', 
                 style({ transform: 'translateX(0%)', opacity: 1}))
             ], { optional: true }),
             query(':leave', [
                 style({ transform: 'translateX(0%)'}),
                 animate('0.6s cubic-bezier(.35, 0, .25, 1)', 
                 style({ transform: 'translateX(-100%)', opacity: 0 }))
                 ], { optional: true }),
         ])
   ]),

]);
