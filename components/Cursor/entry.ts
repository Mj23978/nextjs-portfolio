import Blobity from './Blobity';
module.exports = Blobity;

const autoStart = document.querySelector(
    'script[src^="https://cdn.blobity.dev/by.js"]'
) as HTMLScriptElement;
if (autoStart) {
    const url = new URL(autoStart.src);
    const params = url.searchParams;

    if (params.get('noAutoStart') === null) {
        // @ts-ignore
        window.blobity = new Blobity({});
    }
}
