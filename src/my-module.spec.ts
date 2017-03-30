import { MyModule } from './my-module';
import { UtilsUserModule } from 'utils_user';
import { UtilsModule } from 'utils';

describe("my-module", () => {
    it("should have name", () => {
        const name = 'my-module';
        const myModule = new MyModule(name);

        expect(myModule.name).toEqual(name);
    });

    it("should have id 5", () => {
        const name = 'my-module';
        const uuser = new UtilsModule(5);
        const myModule = new MyModule(name, uuser);

        expect(myModule.utils.id).toEqual(5);
    })

    it("should have id 1000", () => {
        const name = 'my-module';
        const uuser = new UtilsUserModule('super');
        const myModule = new MyModule(name, uuser);

        expect(myModule.utils.id).toEqual(1000);
    })
});
