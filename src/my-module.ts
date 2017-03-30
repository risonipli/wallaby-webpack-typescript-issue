import { UtilsModule } from 'utils';
import { UtilsUserModule } from 'utils_user';

export class MyModule {
    constructor (public name: string, public utils?: UtilsModule | UtilsUserModule) {}
};
