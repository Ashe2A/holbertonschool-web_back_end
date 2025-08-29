/* eslint-disable import/extensions */
import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();
handleResponseFromAPI(promise);
