import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    template: `
    <h1>New Event</h1>
    <hr />
    <div class="col-md-6">
        <h3>[Create Event Form will go here]</h3>
        <br />
        <button class="btn btn-primary" type="submit">Save</button>
        <button class="btn btn-default" type="button" (click)="cancel()">Cancel</button>
    </div>
    `
})
export class CreateEventComponent {
    constructor(private router: Router) {

    }

    cancel() {
        this.router.navigate(['/events'])
    }
}