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
  serverName = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created!";
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    // Since not all events have a value property, we need to specify that this is an Input element
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
