var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App2.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Profile from '@/pages/Profile';
import News from '@/pages/News';
import Main from "@/pages/Main";
export var App = function () {
    return (_jsx(_Fragment, { children: _jsxs(BrowserRouter, { children: [_jsxs("div", { children: [_jsx(Link, __assign({ to: '/' }, { children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" })), _jsx(Link, __assign({ to: '/profile' }, { children: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C" })), _jsx(Link, __assign({ to: '/news' }, { children: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438" }))] }), _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(Main, {}) }), _jsx(Route, { path: '/profile', element: _jsx(Profile, {}) }), _jsx(Route, { path: '/news', element: _jsx(News, {}) })] })] }) }));
};
