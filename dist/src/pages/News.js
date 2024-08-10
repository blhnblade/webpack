import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { sum } from '@/helpers/sum';
var News = function () {
    return (_jsxs("div", { children: [_jsx("div", { children: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438" }), _jsx("div", { children: sum(1, 2) }), _jsxs("div", { children: ["PLATFORM = ", __PLATFORM__] }), __IS_DEV__, __IS_DEV__ ?
                _jsx("div", { children: "development mode" })
                :
                    _jsx("div", { children: "production mode" })] }));
};
export default News;
