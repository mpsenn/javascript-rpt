export function setUp() {
  // any setup needed for each test
}

export function tearDown() {
  // any cleanup needed for each test
}

export function depend(a, ...b) {
  console.log(`DEPEND ${a} ${b}`);
}

export function install(a) {
  console.log(`INSTALL ${a}`);
}

export function remove(a) {
  console.log(`REMOVE ${a}`);
}

export function list() {
  console.log(`LIST`);
}
