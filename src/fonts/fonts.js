import { createGlobalStyle } from 'styled-components';

import moonlight from './MoonLight.otf';
import MetroBold from './Metropolis-Bold.otf';
import MetroLight from './Metropolis-Light.otf';

export default createGlobalStyle`
    @font-face {
        font-family: "moonlight";
        src: url(${moonlight}) format('opentype');
        font-weight: 300;
        font-style:normal;
    }

    @font-face {
        font-family: "MetroBold";
        src: local('MetroBold'), 
        url(${MetroBold}) format('otf');
        font-weight: 300;
        font-style:normal;
    }

    @font-face {
        font-family: "MetroLight";
        src: local('MetroLight'), 
        url(${MetroLight}) format('otf');
        font-weight: 300;
        font-style:normal;
    }
`