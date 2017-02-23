//this page will be access throw route like events/1
import { Component } from '@angular/core'
import { EventService } from '../share/event.service'

@Component({
    templateUrl: '/app/events/events-details/event-details.component.html',
    styles: [`
        .container { padding: 0 20px 0 20px;
        .event-image { height: 100px; } }
    `]
})
export class EventDetailsComponent {
    event: any
    
    constructor(private eventService: EventService) {}

    ngOnInit() {
        this.event = this.eventService.getEvent(1)
    }
}