export const IFRAME_ID = 'bookmarkletView';
export function addIframe() {
    let iframe = document.createElement('iframe');
    iframe.name = IFRAME_ID; 
    iframe.id = IFRAME_ID;
    iframe.style['width'] = '100%';
    iframe.style['height'] = '70%';
    iframe.style['resize'] = 'vertical';
    //iframe.style['display'] = 'none';
    document.body.innerHTML = iframe.outerHTML + document.body.innerHTML;
}

export function addFocusIframeListener(element: HTMLElement){
    element.addEventListener('click', () => {
        //const iframe = document.getElementById(IFRAME_ID);
        //iframe.style['display'] = 'block';
        window.location.href = "#" + IFRAME_ID;
    });
}