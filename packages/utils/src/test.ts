import 'string.prototype.startswith';
import './index.ts';
import 'angular-mocks';

requireAll((<any>require).context('../tests/', true, /spec.js$/));
requireAll((<any>require).context('../tests/', true, /spec.ts$/));
function requireAll(r: any): any {
    r.keys().forEach(r);
}
