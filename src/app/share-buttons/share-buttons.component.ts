import { Component } from '@angular/core';
import { ShareButtons } from '@ngx-share/core';


@Component({
  selector: 'app-share-buttons',
  templateUrl: './share-buttons.component.html',
  styleUrls: ['./share-buttons.component.scss']
})

export class ShareButtonsComponent {

  constructor(public share: ShareButtons) { }

}
