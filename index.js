function setUp() {
  // any setup needed for each test
}

function tearDown() {
  // any cleanup needed for each test
}

// Remembers a package dependency -- a depends on b
// All depend() calls happen before all other function calls
function depend(a, ...b) {
  console.log(`DEPEND ${a} ${b}`);
  // TODO unimplemented
}

// Installs 'a' and all its dependencies
function install(a) {
  console.log(`INSTALL ${a}`);
  // TODO unimplemented
}

// Removes 'a' and all its dependencies
function remove(a) {
  console.log(`REMOVE ${a}`);
  // TODO unimplemented
}

// Returns an array of all installed packages
function list() {
  console.log(`LIST`);
  // TODO unimplemented
  return ["first", "second"];
}

module.exports = {
  setUp,
  tearDown,
  depend,
  install,
  remove,
  list,
};
