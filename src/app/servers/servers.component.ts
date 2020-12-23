import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // Can select by attribute and class.  NOT by id and NOT by pseudo selectors
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was created";
  serverName = 'test server';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  // Changes the text below the Add Server button when it's clicked
  onCreateServer() {
    this.serverCreationStatus = "Server was created!";
  }

  // When anything is typed into the input element, show the typed text in a p tag.
  onUpdateServerName(event: Event) {
    console.log(event);
    // Since not all events have a value property, we need to specify that this is an Input element
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
