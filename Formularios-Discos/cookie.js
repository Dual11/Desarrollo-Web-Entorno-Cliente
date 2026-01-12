

/**
 * @param {string} nombre
 * @param {string|number} valor
 * @param {number} [dias=30]
 */
function setCookie(nombre, valor, dias = 30) {
    let expires = "";
    if (dias) {
        const date = new Date();
        date.setTime(date.getTime() + (dias * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = nombre + "=" + (valor || "") + expires + "; path=/; SameSite=Lax";
}

/**
 * @param {string} nombre
 * @returns {string|null}
 */
function getCookie(nombre) {
    const name = nombre + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

/**
 *
 * @param {string} nombre
 */
function deleteCookie(nombre) {
    document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}