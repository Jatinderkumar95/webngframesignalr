import { Component } from '@angular/core';
import { ConnectionTransport, ConnectionTransports, IConnectionOptions, SignalR } from 'ng2-signalr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webngframesignalr';
  



  /**
   *
   */
  constructor(private _signalR: SignalR) {
    this.someFunction();
    
  }

  someFunction() {
    var options: IConnectionOptions = {
       hubName: 'ChatSampleHub'};
       //transport:[ConnectionTransports.webSockets, ConnectionTransports.longPolling] };
    // maybe hub details needed
    this._signalR.connect(options).then((c) => {
      //do stuff
    });
  }
}
