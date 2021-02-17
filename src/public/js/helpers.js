/**
 * Retrive the value of cookie from the browser's cookies
 * @param {String} name - The name of the cookie to retrive
 * 
 * @return {String | null} The value of the cookie if exist, `null` otherwise
 */
export function getCookie(name) {
  let value = null;
  if (document.cookie && document.cookie.length) {
    let cookies = document.cookie.split(';');
    for(let cookie of cookies) {
      cookie = cookie.trim();
      let [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        value = cookieValue;
        break;
      }
    }
  }
  return value;
}