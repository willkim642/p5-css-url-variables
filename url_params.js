//REFERENCE: https://www.sitepoint.com/get-url-parameters-with-javascript/
function getParams(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    //const num = urlParams.get('number');
    const clr = urlParams.get('color');
    return clr;
}

function setParams(href, clr){
    href += `?color=${clr}`;
    return href;
}
