// Get data from the link
export function getUrlAbout() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
  // console.log(hashes)
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split("=");
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}