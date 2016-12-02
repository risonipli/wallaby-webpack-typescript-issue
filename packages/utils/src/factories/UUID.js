UUIDService.$inject = [];
function UUIDService() {
    var svc = {
        new: function () {
            function p8(s) {
                var p = (Math.random().toString(16) + '000000000').substr(2, 8);
                return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p;
            }
            return p8() + p8(true) + p8(true) + p8();
        },

        empty: function () {
            return '00000000-0000-0000-0000-000000000000';
        }
    };

    return svc;
}

exports.UUIDService = UUIDService;
