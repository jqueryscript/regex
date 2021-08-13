  // filter
function filterOnClass(baseClass, s) {
  let re = new RegExp(s.trim(), 'i');
  document.querySelectorAll('.' + baseClass).forEach(node => {
    let cNames = Array.from(node.classList);
    // Show all if search string is blank
    if (s.trim() == '') {
      node.classList.remove('hide');
    // Otherwise, filter
    } else if (cNames.some(cName => re.test(cName))) {
      node.classList.remove('hide');
    } else {
       node.classList.add('hide');
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  // copy
var clipboard = new ClipboardJS('.regex > button');
clipboard.on('success', function(e) {
var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
});

});
