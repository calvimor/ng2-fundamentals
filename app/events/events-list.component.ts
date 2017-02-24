import { Component, OnInit } from '@angular/core'
import { EventService } from './share/event.service'
import { ToastrService } from '../common/toastr.service'

@Component({    
    templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit {
    events:any[]

    constructor(private eventService: EventService, private toastr: ToastrService) {
      
    }
    handleEventClicked(data) {
        console.log('receive: ', data)
    }

    ngOnInit() {
      this.events = this.eventService.getEvents()
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName)
    }
}