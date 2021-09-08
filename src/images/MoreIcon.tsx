import * as React from 'react';
import {SvgXml} from 'react-native-svg';

function MoreIcon({fill}: {fill: string}) {
  const xml = `<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="10" r="3" stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="18" cy="4" r="3" stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="4.00002" cy="17" r="3" transform="rotate(-163 4.00002 17)" stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="18" cy="17" r="3" stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  return <SvgXml xml={xml} width="21" height="20" />;
}

export default MoreIcon;
