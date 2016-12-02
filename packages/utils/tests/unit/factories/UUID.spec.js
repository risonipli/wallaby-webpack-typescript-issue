describe('factory: UUID -', function () {

    beforeEach(function () {
        angular.mock.module('u-workflow.utils');
    });

    var uuid;
    beforeEach(angular.mock.inject(function (UUID) {
        uuid = UUID;
    }));

    describe('loading the factory', function () {
        it('should make the functions "new" and "empty" available', function () {
            // arrange

            // act

            // assert
            expect(uuid.new).toBeDefined();
            expect(uuid.empty).toBeDefined();
        });
    });

    describe('calling the "empty" function', function () {
        it('should return a UUID consisting of zeros only', function () {
            // arrange
            var u = uuid.empty();

            // act

            // assert
            expect(u).toBe('00000000-0000-0000-0000-000000000000');
        });
    });

    describe('calling the "new" function', function () {
        it('should always return a new well formed UUID', function () {
            // arrange
            var u1 = uuid.new();
            var u2 = uuid.new();
            var u3 = uuid.new();

            // act

            // assert
            expect(u1).toMatch(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/);
            expect(u2).toMatch(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/);
            expect(u3).toMatch(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/);
            expect(u1).not.toEqual(u2);
            expect(u1).not.toEqual(u3);
            expect(u2).not.toEqual(u3);
        });
    });
});
