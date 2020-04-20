import 'react-weui/build/packages/react-weui.css';
import './static/font/iconfont.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
     html, body, div, span, applet, object,
iframe, h1, h2, h3, h4, h5, h6, p,
blockquote, pre, a, abbr, acronym,
address, big, cite, code, del, dfn,
em, img, ins, kbd, q, s, samp, small,
strike, strong, sub, sup, tt, var, b,
i, u, center, dl, dt, dd, ol, ul, li,
fieldset, form, label, legend, table,
caption, tbody, tfoot, thead, tr, th,
td, article, aside, canvas, details,
embed, fieldset, figure, figcaption,
footer, header, hgroup, menu, nav,
output, ruby, section, summary, time,
mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font: inherit;
}
html{
    overflow-x:hidden;
}
html,body{
    background: #efefef;
}
*, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.forward-enter {
  transform: translateX(100%);
}

.forward-enter-active {
  transform: translateX(0);
  transition: transform 500ms;
}

.forward-exit {
  transform: translateX(0);
}

.forward-exit-active {
  transform: translateX(-100%);
  transition: transform 500ms;
}

.back-enter {
  transform: translateX(-100%);
}

.back-enter-active {
  transform: translateX(0);
  transition: transform 500ms;
}

.back-exit {
  transform: translateX(0);
}

.back-exit-active {
  transform: translate(100%);
  transition: transform 500ms;
}
`