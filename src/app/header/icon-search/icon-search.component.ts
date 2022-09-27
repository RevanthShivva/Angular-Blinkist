import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { SearchIcon } from './Vector';


//import Blinkist from '../../assets/organisms/Blinklist 1.svg';

const THUMBUP_ICON = SearchIcon;
 

/**
 * @title SVG icons
 */
@Component({
  selector: 'icon-svg-example1',
  templateUrl: './icon-search.component.html',
})
export class IconSearchComponent {
 
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral('search', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
  }
}

