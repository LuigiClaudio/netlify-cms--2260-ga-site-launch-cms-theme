import { init } from 'netlify-cms-app';
import config from './config';

if (process.env.NODE_ENV === 'development') {
    config.local_backend = true;
    config.display_url = 'http://localhost:8000';
}

init({ config });
