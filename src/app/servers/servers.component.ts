import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer = false;
  serverCreationStatus = "no server was created";
  serverName = "";

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {

  }

  onCreateServer() {
      this.serverCreationStatus='server is now created! The new name is ' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}
