import { Component } from '@angular/core';
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  Facebook = faFacebook;
  Twitter = faTwitter;
  Insta = faInstagram;
}
