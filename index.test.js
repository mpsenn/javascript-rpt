const {expect, jest, test} = require('@jest/globals');
const manager = require('./index');

beforeEach(() => manager.setUp());
afterEach(() => manager.tearDown());

test('manager imported', () => {
    expect(manager).toBeTruthy();
});

describe('install', () => {
    test('sanity install', () => {
        manager.install('apple');
        const list = manager.list();
        expect(list).toMatchObject(['apple']);
    });
});

describe('depend', () => {
    test('sanity depend', () => {
        manager.depend('apple', 'banana');
        manager.install('apple');
        const list = manager.list().sort();
        expect(list).arrayContaining(['apple', 'banana']);
        expect(list).toHaveLength(2);
    })
});

describe('remove', () => {
    test('sanity remove', () => {
        manager.install('apple');
        manager.install('banana');
        manager.remove('banana');
        const list = manager.list();
        expect(list).toMatchObject(['apple']);
    });
});

describe('gotchas', () => {
    test('no gotchas', () => {

    });
});
