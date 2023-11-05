import { Component } from '@angular/core';
import { SwPush, SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-worker';

  constructor(swUpdate: SwUpdate, swPush: SwPush) {
    swUpdate.versionUpdates
      .pipe(filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY'))
      .subscribe(_event => {
        if (confirm('Есть новя версия, презагрузить страницу?')) {
          document.location.reload();
        }
      });

    Notification.requestPermission().then(permisionResult => {
      if (permisionResult === 'granted') {
        console.log('Can show notification');
      }
    })

    swPush.messages.subscribe(console.log);

    // {
    //   "notification": {
    //     "title": "Angular pro",
    //     "body": "Не забыть выключить утюг",
    //     "icon": "http://icon/url",
    //     "click_action": "http://navigation-link"
    //   }
    // }

    const serverPublicKey = '';
    swPush.requestSubscription({serverPublicKey}).then()

    // timer(1000 * 60 * 60 * 2).subscribe(() => {
    //   swUpdate.checkForUpdate().then(console.log);
    //   swUpdate.activateUpdate();
    // });
  }
}
