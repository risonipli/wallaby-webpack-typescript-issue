requireAll((<any>require).context('./packages', true, /test.ts$/));
function requireAll(r: any): any {
    r.keys().forEach(r);
}
