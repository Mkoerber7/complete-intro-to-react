import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'Game of thrones', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'The Wire', color: 'peru' }),
    ce(MyTitle, { title: 'King of the Hill', color: 'teal' }),
    ce(MyTitle, { title: 'Silicon Valley', color: 'crimson' })
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));

