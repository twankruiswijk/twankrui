import { hydrate } from 'react-dom';
import { RemixBrowser } from 'remix';
import { load } from 'fathom-client';

hydrate(<RemixBrowser />, document);

if (process.env.NODE_ENV !== 'development') {
  load('EOCGSHWX', {
    spa: 'history',
    excludedDomains: ['localhost'],
  });
}
