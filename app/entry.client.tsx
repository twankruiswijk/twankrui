import { hydrateRoot } from 'react-dom/client';
import { RemixBrowser } from 'remix';
import { load } from 'fathom-client';

hydrateRoot(document, <RemixBrowser />);

if (process.env.NODE_ENV !== 'development') {
  load('EOCGSHWX', {
    spa: 'history',
    excludedDomains: ['localhost'],
  });
}
