var app;
(function (app) {
    var common;
    (function (common) {
        'use stricts';
        function checkmarkFilter() {
            return function (input) {
                return input ? '\u2713' : '\u2718';
            };
        }
        common.checkmarkFilter = checkmarkFilter;
        angular.module('app.common.filters', [])
            .filter('checkmark', checkmarkFilter);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
var app;
(function (app) {
    var phones;
    (function (phones) {
        'use strict';
        var PhoneList = (function () {
            function PhoneList(PhoneResource) {
                this.phones = PhoneResource.query();
                this.orderProp = 'age';
            }
            PhoneList.$inject = ['PhoneResource'];
            return PhoneList;
        })();
        phones.PhoneList = PhoneList;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
var app;
(function (app) {
    var phones;
    (function (phones) {
        'use strict';
        var PhoneDetail = (function () {
            function PhoneDetail($routeParams, PhoneResource) {
                var _this = this;
                this.phone = PhoneResource.get({ phoneId: $routeParams.phoneId }, function (data) {
                    _this.setImage(data.images[0]);
                });
            }
            PhoneDetail.prototype.setImage = function (imageUrl) {
                this.mainImageUrl = imageUrl;
            };
            PhoneDetail.$inject = ['$routeParams', 'PhoneResource'];
            return PhoneDetail;
        })();
        phones.PhoneDetail = PhoneDetail;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
var app;
(function (app) {
    var phones;
    (function (phones) {
        'use strict';
        var Phone = (function () {
            function Phone() {
            }
            return Phone;
        })();
        phones.Phone = Phone;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
var app;
(function (app) {
    var phones;
    (function (phones) {
        'use strict';
        function PhoneAnimation() {
            var animateUp = function (element, className, done) {
                if (className != 'active') {
                    return;
                }
                element.css({
                    position: 'absolute',
                    top: 500,
                    left: 0,
                    display: 'block'
                });
                jQuery(element).animate({
                    top: 0
                }, done);
                return function (cancel) {
                    if (cancel) {
                        element.stop();
                    }
                };
            };
            var animateDown = function (element, className, done) {
                if (className != 'active') {
                    return;
                }
                element.css({
                    position: 'absolute',
                    left: 0,
                    top: 0
                });
                jQuery(element).animate({
                    top: -500
                }, done);
                return function (cancel) {
                    if (cancel) {
                        element.stop();
                    }
                };
            };
            return {
                addClass: animateUp,
                removeClass: animateDown
            };
        }
        phones.PhoneAnimation = PhoneAnimation;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
var app;
(function (app) {
    var phones;
    (function (phones) {
        'use strict';
        PhoneResource.$inject = ['$resource'];
        function PhoneResource($resource) {
            return $resource('phones/:phoneId.json', {}, {
                query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
            });
        }
        phones.PhoneResource = PhoneResource;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
/// <reference path="../common/filters.ts"/>
/// <reference path="phone-list.ts"/>
/// <reference path="phone-detail.ts"/>
/// <reference path="phone.model.ts"/>
/// <reference path="phone.animations.ts"/>
/// <reference path="phone.services.ts"/>
var app;
(function (app) {
    var phones;
    (function (phones) {
        angular.module('app.phones', ['ngAnimate', 'ngResource'])
            .controller('PhoneList', phones.PhoneList)
            .controller('PhoneDetail', phones.PhoneDetail)
            .filter('CheckmarkFilter', app.common.checkmarkFilter)
            .animation('.phone', phones.PhoneAnimation)
            .factory('PhoneResource', phones.PhoneResource);
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="phones/phone.module.ts"/>
var app;
(function (app) {
    'use strict';
    angular.module('app', [
        'ngRoute',
        'app.common.filters',
        'app.phones'
    ])
        .config(appConfig);
    appConfig.$inject = ['$routeProvider'];
    function appConfig($routeProvider) {
        $routeProvider
            .when('/phones', {
            templateUrl: 'app/phones/phone-list.html',
            controller: 'PhoneList',
            controllerAs: 'vm'
        })
            .when('/phones/:phoneId', {
            templateUrl: 'app/phones/phone-detail.html',
            controller: 'PhoneDetail',
            controllerAs: 'vm'
        })
            .otherwise({
            redirectTo: '/phones'
        });
    }
})(app || (app = {}));
;
//# sourceMappingURL=app.js.map