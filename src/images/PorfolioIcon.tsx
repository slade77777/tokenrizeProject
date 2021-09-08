import * as React from 'react';
import {SvgXml} from 'react-native-svg';

function PortfolioIcon({fill}: {fill: string}) {
  const xml = `<svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.3 19.6V21.3C25.3 22.7 24.1 23.9 22.7 23.9H3.39999C1.99999 23.9 0.799988 22.7 0.799988 21.3V19.6" stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.799988 15.4V10.1" stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.3 15.4V10.1" stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.3 18.8V21.3C25.3 22.7 24.1 23.9 22.7 23.9H20.3C20.4 21.1 22.6 18.9 25.3 18.8Z" stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.799988 18.8V21.3C0.799988 22.7 1.99999 23.9 3.39999 23.9H5.79999C5.69999 21.1 3.59999 18.9 0.799988 18.8Z" stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.3 10.1C25.3 12.3 23.5 14.1 21.3 14.1H14.4V13.6C14.4 12.9 13.8 12.3 13.1 12.3C12.4 12.3 11.8 12.9 11.8 13.6V14H4.79999C2.59999 14 0.799988 12.2 0.799988 10V9.30001C0.799988 8.30001 1.39999 7.30001 2.39999 7.00001C2.69999 6.80001 2.99999 6.70001 3.39999 6.70001H22.8C23.1 6.70001 23.4 6.80001 23.7 6.90001C24.7 7.30001 25.3 8.20001 25.3 9.20001V10.1Z" stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.3 6.7H8C8 3.9 10.3 1.5 13.2 1.5C16.1 1.5 18.3 3.9 18.3 6.7Z" stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4 13.7V14.8C14.4 15.5 13.8 16.1 13.1 16.1C12.4 16.1 11.8 15.5 11.8 14.8V13.7C11.8 13 12.4 12.4 13.1 12.4C13.8 12.4 14.4 12.9 14.4 13.7Z" stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  return <SvgXml xml={xml} width="26" height="22" />;
}

export default PortfolioIcon;
