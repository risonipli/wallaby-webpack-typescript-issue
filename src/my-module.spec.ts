import { MyModule } from './my-module';

describe("my-module", () => {
    it("should have name", () => {
        const name = 'my-module';
        const myModule = new MyModule(name);

        expect(myModule.name).toEqual(name);
    });
});
