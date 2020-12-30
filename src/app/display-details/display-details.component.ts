import { Component } from "@angular/core";

@Component({
    selector: "app-assignment2",
    templateUrl: "./display-details.component.html",
    styleUrls: ['./display-details.component.css']
})
export class DisplayDetails {
    displayStatus: string = 'block';
    numberOfButtonClicks = 0;
    buttonClicks = [];
    counter = 0;

    toggleParagraph() {
        this.displayStatus = this.displayStatus === 'none' ? 'block' : 'none';
        let now = new Date();
        this.buttonClicks.push({'clicked': now.getHours() + "hrs, " + now.getMinutes() + "mins, " + now.getSeconds() + "secs", 'id': ++this.numberOfButtonClicks});
        console.log(this.buttonClicks[this.numberOfButtonClicks - 1].clicked + " | " + this.buttonClicks[this.numberOfButtonClicks - 1].id);
    }
}