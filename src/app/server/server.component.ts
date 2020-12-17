import { Component } from '@angular/core';   // Need to import Component for it to be recognized

// This is called a decorator.  Tells TypeScript that this is not a normal class; It's a component.
// Similar to Data annotations in C# .NET Framework
@Component({
    selector: 'app-server',  // Defines the HTML tag name that will be used to represent this component
    templateUrl: './server.component.html' // Points to the template page (HTML page of the component)
})
export class ServerComponent {  // export means that we want to use this class outside of this file

}