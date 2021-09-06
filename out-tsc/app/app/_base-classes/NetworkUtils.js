import { __awaiter } from "tslib";
export const URL = '';
export function simpleGetRequest(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = URL + path;
        const res = yield fetch(url, { method: 'GET' });
        return (yield res.json());
    });
}
export function simplePostRequest(path, body) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = URL + path;
        const res = yield fetch(url, {
            method: 'POST',
            body: JSON.stringify(body)
        });
        const jsonRes = yield res.json();
        return isSuccessful(jsonRes.status);
    });
}
function isSuccessful(jsonResponse) {
    return jsonResponse.toString().substring(0, 1) === '2';
}
//# sourceMappingURL=NetworkUtils.js.map