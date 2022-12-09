const Manager = require("../lib/Manager.js");

describe('Manager', () => {
    describe('init', () => {
        it('should return an manager\'s name', () => {
            const manager = new Manager('Connor', 1, 'connorcho22@gmail.com', '1');

        expect(manager.name).toEqual('Connor');
        });

        it('should return an manager\'s id', () => {
            const manager = new Manager('Connor', 1, 'connorcho22@gmail.com', '1');

        expect(manager.id).toEqual(1);
        });

        it('should return an manager\'s email', () => {
            const manager = new Manager('Connor', 1, 'connorcho22@gmail.com', '1');

        expect(manager.email).toEqual('connorcho22@gmail.com');
        });

        it('should return an manager\'s office number', () => {
            const manager = new Manager('Connor', 1, 'connorcho22@gmail.com', '1');

        expect(manager.officeNumber).toEqual('1');
        });

        it('should return an manager\'s role', () => {
            const manager = new Manager('Connor', 1, 'connorcho22@gmail.com', '1');

        expect(manager.getRole()).toEqual('Manager');
        });
    })
})