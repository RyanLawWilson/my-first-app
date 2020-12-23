import { Component } from "@angular/core";

@Component({
    selector: "app-add-username",
    templateUrl: "./add-username.component.html",
    styleUrls: ["./add-username.component.css"]
})
export class AddUsernameComponent {
    username: string = "";
    usernameEmpty: boolean = true;

    resetUsername() {
        this.username = "";
        this.usernameEmpty = true;
        console.log("Clicked!");
    }

    isEmptyUsername() {
        if (this.username == "") {
            this.usernameEmpty = true;
        }
        else {
            this.usernameEmpty = false;
        }
    }
}