/* eslint-disable import/extensions */
export default function loadBalancer(chinaDownload, USDownload) {
  if (chinaDownload instanceof Promise) {
    throw new Error('You must promise you\'re going to download from China.');
  }

  if (USDownload instanceof Promise) {
    throw new Error('You must promise you\'re going to download from the US.');
  }

  return Promise.race([chinaDownload, USDownload]);
}
