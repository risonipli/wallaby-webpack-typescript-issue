import * as angular from 'angular';
import { IDecoratedQService } from '../../../src/decorators/EarlyExitDecoratorConfig';

describe('factory: EarlyExit -', () => {
    let $q: IDecoratedQService;
    beforeEach(() => {
        angular.mock.module('u-workflow.utils');
    });

    beforeEach(angular.mock.inject((_$q_: IDecoratedQService) => {
        $q = _$q_;
    }));

    it('should return an empty function on property "then"', () => {
        // arrange

        // act
        let r = $q.earlyExit();

        // assert
        expect(r.then).toBe(angular.noop);
    });

});
