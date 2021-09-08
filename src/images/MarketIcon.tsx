import * as React from 'react';
import {SvgXml} from 'react-native-svg';

function MarketIcon({fill}: {fill: string}) {
  const xml = `<svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.5192 18.0213C24.5192 18.3606 24.5192 18.9678 24.5192 19.75C24.4231 21.0962 23.3654 22.0577 22.1154 22.0577H0.865387L9.90385 13.0971C10.1923 12.8086 10.6731 12.7125 11.0577 12.9048L16.1538 15.2125C16.5385 15.4048 17.0192 15.3086 17.3077 15.0202L24.5192 8.48169C24.5192 11.6787 24.5192 13.0649 24.5192 14.6634" stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.865387 14.9557L9.51923 6.76561C9.80769 6.47714 10.2885 6.38099 10.6731 6.5733L15.2885 8.68868C15.7692 8.88099 16.25 8.78484 16.6346 8.49638L23.3654 2.34253" stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.3846 1.18866H23.75C24.1346 1.18866 24.4231 1.47712 24.4231 1.95789V5.51558" stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  return <SvgXml xml={xml} width="23" height="20" />;
}

export default MarketIcon;
