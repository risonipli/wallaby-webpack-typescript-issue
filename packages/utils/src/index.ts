import * as angular from 'angular';
import 'angular-translate';

import { EarlyExitDecoratorConfig } from './decorators/EarlyExitDecoratorConfig';
let uuid = require('./factories/UUID.js');

angular.module('u-workflow.utils', ['pascalprecht.translate'])
    .config(EarlyExitDecoratorConfig)
    .factory('UUID', uuid.UUIDService);
