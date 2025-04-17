/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./next-themes.tsx":
/*!*************************!*\
  !*** ./next-themes.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),\n/* harmony export */   useTheme: () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    theme: 'light',\n    setTheme: (theme)=>{},\n    resolvedTheme: 'light'\n});\nconst useTheme = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);\nconst ThemeProvider = ({ children, defaultTheme = 'light', enableSystem = false })=>{\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultTheme);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ThemeProvider.useEffect\": ()=>{\n            const root = window.document.documentElement;\n            root.classList.remove('light', 'dark');\n            root.classList.add(theme);\n        }\n    }[\"ThemeProvider.useEffect\"], [\n        theme\n    ]);\n    const resolvedTheme = theme === 'system' ? 'light' : theme;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            setTheme,\n            resolvedTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/akash/projects3/tappcard_landing/version 2/version2cor/tappcard-landing/next-themes.tsx\",\n        lineNumber: 24,\n        columnNumber: 7\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25leHQtdGhlbWVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2dGO0FBRTlFLE1BQU1LLDZCQUFlSixvREFBYUEsQ0FBQztJQUNqQ0ssT0FBTztJQUNQQyxVQUFVLENBQUNELFNBQW1CO0lBQzlCRSxlQUFlO0FBQ2pCO0FBRU8sTUFBTUMsV0FBVyxJQUFNUCxpREFBVUEsQ0FBQ0csY0FBYztBQUVoRCxNQUFNSyxnQkFBZ0IsQ0FBQyxFQUFFQyxRQUFRLEVBQUVDLGVBQWUsT0FBTyxFQUFFQyxlQUFlLEtBQUssRUFBRTtJQUN0RixNQUFNLENBQUNQLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUNTO0lBRW5DUixnREFBU0E7bUNBQUM7WUFDUixNQUFNVSxPQUFPQyxPQUFPQyxRQUFRLENBQUNDLGVBQWU7WUFDNUNILEtBQUtJLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFNBQVM7WUFDL0JMLEtBQUtJLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDZDtRQUNyQjtrQ0FBRztRQUFDQTtLQUFNO0lBRVYsTUFBTUUsZ0JBQWdCRixVQUFVLFdBQVcsVUFBVUE7SUFFckQscUJBQ0UsOERBQUNELGFBQWFnQixRQUFRO1FBQUNDLE9BQU87WUFBRWhCO1lBQU9DO1lBQVVDO1FBQWM7a0JBQzVERzs7Ozs7O0FBR1AsRUFBRSIsInNvdXJjZXMiOlsiL1VzZXJzL2FrYXNoL3Byb2plY3RzMy90YXBwY2FyZF9sYW5kaW5nL3ZlcnNpb24gMi92ZXJzaW9uMmNvci90YXBwY2FyZC1sYW5kaW5nL25leHQtdGhlbWVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4gIFxuICBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICB0aGVtZTogJ2xpZ2h0JyxcbiAgICBzZXRUaGVtZTogKHRoZW1lOiBzdHJpbmcpID0+IHt9LFxuICAgIHJlc29sdmVkVGhlbWU6ICdsaWdodCcsXG4gIH0pO1xuICBcbiAgZXhwb3J0IGNvbnN0IHVzZVRoZW1lID0gKCkgPT4gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICBcbiAgZXhwb3J0IGNvbnN0IFRoZW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgZGVmYXVsdFRoZW1lID0gJ2xpZ2h0JywgZW5hYmxlU3lzdGVtID0gZmFsc2UgfSkgPT4ge1xuICAgIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoZGVmYXVsdFRoZW1lKTtcbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJvb3QgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodCcsICdkYXJrJyk7XG4gICAgICByb290LmNsYXNzTGlzdC5hZGQodGhlbWUpO1xuICAgIH0sIFt0aGVtZV0pO1xuICBcbiAgICBjb25zdCByZXNvbHZlZFRoZW1lID0gdGhlbWUgPT09ICdzeXN0ZW0nID8gJ2xpZ2h0JyA6IHRoZW1lO1xuICBcbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0aGVtZSwgc2V0VGhlbWUsIHJlc29sdmVkVGhlbWUgfX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH07XG4gICJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUaGVtZUNvbnRleHQiLCJ0aGVtZSIsInNldFRoZW1lIiwicmVzb2x2ZWRUaGVtZSIsInVzZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsImNoaWxkcmVuIiwiZGVmYXVsdFRoZW1lIiwiZW5hYmxlU3lzdGVtIiwicm9vdCIsIndpbmRvdyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./next-themes.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"(pages-dir-node)/./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../next-themes */ \"(pages-dir-node)/./next-themes.tsx\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.css */ \"(pages-dir-node)/./styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"TappCard - Your digital business card\"\n                    }, void 0, false, {\n                        fileName: \"/Users/akash/projects3/tappcard_landing/version 2/version2cor/tappcard-landing/pages/_app.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/akash/projects3/tappcard_landing/version 2/version2cor/tappcard-landing/pages/_app.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/akash/projects3/tappcard_landing/version 2/version2cor/tappcard-landing/pages/_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n                attribute: \"class\",\n                defaultTheme: \"dark\",\n                enableSystem: false,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/akash/projects3/tappcard_landing/version 2/version2cor/tappcard-landing/pages/_app.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/akash/projects3/tappcard_landing/version 2/version2cor/tappcard-landing/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM2QjtBQUNrQjtBQUN4QjtBQUV2QixTQUFTRSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQy9DLHFCQUNFOzswQkFDRSw4REFBQ0osa0RBQUlBOztrQ0FDSCw4REFBQ0s7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFFaEMsOERBQUNQLHVEQUFhQTtnQkFBQ1EsV0FBVTtnQkFBUUMsY0FBYTtnQkFBT0MsY0FBYzswQkFDakUsNEVBQUNSO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2FrYXNoL3Byb2plY3RzMy90YXBwY2FyZF9sYW5kaW5nL3ZlcnNpb24gMi92ZXJzaW9uMmNvci90YXBwY2FyZC1sYW5kaW5nL3BhZ2VzL19hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICcuLi9uZXh0LXRoZW1lcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy5jc3MnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VGFwcENhcmQgLSBZb3VyIGRpZ2l0YWwgYnVzaW5lc3MgY2FyZDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIGF0dHJpYnV0ZT1cImNsYXNzXCIgZGVmYXVsdFRoZW1lPVwiZGFya1wiIGVuYWJsZVN5c3RlbT17ZmFsc2V9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyAiXSwibmFtZXMiOlsiSGVhZCIsIlRoZW1lUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiYXR0cmlidXRlIiwiZGVmYXVsdFRoZW1lIiwiZW5hYmxlU3lzdGVtIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();