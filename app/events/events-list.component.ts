import { Component, OnInit } from '@angular/core'
import { EventService } from './share/event.service'

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit {
    events:any[]

    constructor(private eventService: EventService) {
      
    }
    handleEventClicked(data) {
        console.log('receive: ', data)
    }

    ngOnInit() {
      this.events = this.eventService.getEvents()
    }
}