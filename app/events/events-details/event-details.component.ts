//this page will be access throw route like events/1
import { Component } from '@angular/core'
import { EventService } from '../share/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from "../index";

@Component({
    templateUrl: '/app/events/events-details/event-details.component.html',
    styles: [`
        .container { padding: 0 20px 0 20px; }
        .event-image { height: 100px; } 
    `]
})
export class EventDetailsComponent {
    event: IEvent
    
    constructor(private eventService: EventService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }
}