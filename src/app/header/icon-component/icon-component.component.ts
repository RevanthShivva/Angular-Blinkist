import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { BlinkistIcon } from './Blinklist 1';


//import Blinkist from '../../assets/organisms/Blinklist 1.svg';

const THUMBUP_ICON = BlinkistIcon;
 

/**
 * @title SVG icons
 */
@Component({
  selector: 'icon-svg-example',
  templateUrl: './icon-component.component.html',
})
export class IconComponentComponent {
 
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral('blinkist', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
  }
}

