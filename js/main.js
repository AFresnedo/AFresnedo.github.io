//
// NOTE navbar (see materialze for setting options)
//

// sidebar activation, for navbar on mobile
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

// dropdown
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems);
});

//
// NOTE sections
//

// accordian container
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});
// insight reveal
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tap-target');
  var instances = M.TapTarget.init(elems);
});

//
// NOTE background
//

// parallax backdrop
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);
});
