import { Component } from '@angular/core';

@Component( {
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverName: string = 'My Server 1';
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverName;
    }
}