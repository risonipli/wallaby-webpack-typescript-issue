import * as angular from 'angular';

export interface IDecoratedQService extends angular.IQService {
    earlyExit(): { then: (...args: any[]) => void };
}

export class EarlyExitDecoratorConfig {
    static $inject = ['$provide'];

    constructor($provide: angular.auto.IProvideService) {
        $provide.decorator('$q', ['$delegate', (delegate: IDecoratedQService): IDecoratedQService => {
            delegate.earlyExit = () => {
                return {
                    then: angular.noop
                };
            };
            return delegate;
        }]);
    }
}
