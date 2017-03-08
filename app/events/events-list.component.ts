import { Component, OnInit } from '@angular/core'
import { EventService } from './share/event.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./index";

@Component({    
    templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit {
    events:IEvent[]

    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
      
    }
    handleEventClicked(data) {
        console.log('receive: ', data)
    }

    ngOnInit() {
      /*//Before --
        this.eventService.getEvents().subscribe(events => {
          this.events = events
      })*/
      this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName)
    }
}