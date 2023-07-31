const { expect, it } = require("@jest/globals");
const manager = require("./index");

beforeEach(() => manager.setUp());
afterEach(() => manager.tearDown());

it("requires cleanly", () => {
  expect(manager).toBeTruthy();
});

describe("install", () => {
  it("installs one package", () => {
    manager.install("apple");
    const list = manager.list();
    expect(list).toMatchObject(["apple"]);
  });
});

describe("depend", () => {
  it("remembers dependencies", () => {
    manager.depend("apple", "banana");
    manager.install("apple");
    const list = manager.list();
    expect(list).toEqual(expect.arrayContaining(["apple", "banana"]));
    expect(list).toHaveLength(2);
  });

  it("doesn't install a dependency twice", () => {
    manager.depend("apple", "banana");
    manager.install("banana");

    // some hasty implementations will install banana twice with this command
    manager.install("apple");

    const list = manager.list();
    expect(list).toEqual(expect.arrayContaining(["apple", "banana"]));
    expect(list).toHaveLength(2);
  });

  it("supports multiple dependencies", () => {
    manager.depend("apple", "banana", "carrot");
    manager.install("apple");
    const list = manager.list();
    expect(list).toEqual(expect.arrayContaining(["apple", "banana", "carrot"]));
    expect(list).toHaveLength(3);
  });
});

describe("remove", () => {
  it("removes packages", () => {
    manager.install("apple");
    manager.install("banana");
    manager.remove("banana");
    const list = manager.list();
    expect(list).toMatchObject(["apple"]);
  });

  it("won't remove a required package", () => {
    manager.depend("apple", "banana", "carrot");
    manager.install("apple");
    manager.remove("banana");
    const list = manager.list();
    expect(list).toEqual(expect.arrayContaining(["apple", "banana", "carrot"]));
    expect(list).toHaveLength(3);
  });
});

describe("gotchas", () => {
  it("remembers user-required packages", () => {
    manager.depend("apple", "banana", "carrot");
    manager.install("banana");
    manager.install("apple");
    manager.remove("apple");

    // the user remove apple, but not banana. They still would like to have banana installed
    const list = manager.list();
    expect(list).toEqual(expect.arrayContaining(["banana", "carrot"]));
    expect(list).toHaveLength(2);
  });
});
