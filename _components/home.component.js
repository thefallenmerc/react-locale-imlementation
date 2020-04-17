import React from 'react';
import {withLocale} from '../_contexts/locale.context';

function HomeComponent({ lang }) {
  return (
    <div className="Home">{lang.handle('hello')}</div>
  );
}

export const Home = withLocale(HomeComponent);