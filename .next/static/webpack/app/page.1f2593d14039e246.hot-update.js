"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/cmp/One.jsx":
/*!*************************!*\
  !*** ./src/cmp/One.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ One; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_answer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/answer */ \"(app-pages-browser)/./src/app/answer.js\");\n/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/data */ \"(app-pages-browser)/./src/app/data.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _One_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./One.module.css */ \"(app-pages-browser)/./src/cmp/One.module.css\");\n/* harmony import */ var _One_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_One_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nlet a = _app_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length;\nlet m = [];\nfunction One(props) {\n    _s();\n    const [op, setop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"i dont know\");\n    const proc = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n    if (props.index <= a) {\n        proc.current = true;\n    } else {\n        proc.current = false;\n    }\n    let an = props.index / 2 + 1;\n    if (props.time == 0) {}\n    const Validate = ()=>{\n        if (op == _app_answer__WEBPACK_IMPORTED_MODULE_2__[\"default\"][props.index]) {\n            alert(\"This answer is correct\");\n        }\n    };\n    const Result = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"result\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                console.log(_app_answer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n            ]\n        }, void 0, true);\n    };\n    if (proc.current == true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_One_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: props.time\n                }, void 0, false, {\n                    fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        props.index / 2 + 1,\n                        \"of \",\n                        (a + 1) / 2\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_One_module_css__WEBPACK_IMPORTED_MODULE_5___default().img),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: \"/ssc_questions/\".concat(_app_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"][props.index]),\n                        width: 250,\n                        height: 250,\n                        alt: \"hello\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 37\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                setop(\"a\");\n                            },\n                            className: (_One_module_css__WEBPACK_IMPORTED_MODULE_5___default().start),\n                            children: \"A\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                setop(\"b\");\n                            },\n                            className: (_One_module_css__WEBPACK_IMPORTED_MODULE_5___default().start),\n                            children: \"B\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                setop(\"c\");\n                            },\n                            className: (_One_module_css__WEBPACK_IMPORTED_MODULE_5___default().start),\n                            children: \"C\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                setop(\"d\");\n                            },\n                            className: (_One_module_css__WEBPACK_IMPORTED_MODULE_5___default().start),\n                            children: \"D\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                Validate();\n                            },\n                            className: (_One_module_css__WEBPACK_IMPORTED_MODULE_5___default().start),\n                            children: \"Check\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, this);\n    }\n}\n_s(One, \"iSdtoICHImA1U25F3t/r9vMg1A4=\");\n_c = One;\nvar _c;\n$RefreshReg$(_c, \"One\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jbXAvT25lLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDMEQ7QUFDeEI7QUFDSjtBQUNBO0FBQ087QUFDckMsSUFBSVEsSUFBRUgsaURBQUlBLENBQUNJLE1BQU07QUFDakIsSUFBSUMsSUFBRSxFQUFFO0FBQ08sU0FBU0MsSUFBSUMsS0FBSzs7SUFDL0IsTUFBTSxDQUFDQyxJQUFHQyxNQUFNLEdBQUNYLCtDQUFRQSxDQUFDO0lBQ3hCLE1BQU1ZLE9BQUtiLDZDQUFNQSxDQUFDO0lBQ2xCLElBQUlVLE1BQU1JLEtBQUssSUFBRVIsR0FBRTtRQUNmTyxLQUFLRSxPQUFPLEdBQUM7SUFDakIsT0FDSTtRQUNBRixLQUFLRSxPQUFPLEdBQUM7SUFDakI7SUFDQSxJQUFJQyxLQUFHLE1BQU9GLEtBQUssR0FBQyxJQUFHO0lBQ3ZCLElBQUdKLE1BQU1PLElBQUksSUFBRSxHQUFFLENBQ2pCO0lBQ0EsTUFBTUMsV0FBUztRQUNiLElBQUlQLE1BQUlULG1EQUFNLENBQUNRLE1BQU1JLEtBQUssQ0FBQyxFQUFDO1lBQ3hCSyxNQUFNO1FBQ1Y7SUFDRjtJQUNBLE1BQU1DLFNBQVE7UUFDWixxQkFDRTs7OEJBQ0EsOERBQUNDOzhCQUFHOzs7Ozs7Z0JBQ0hDLFFBQVFDLEdBQUcsQ0FBQ3JCLG1EQUFNQTs7O0lBSXZCO0lBQ0EsSUFBSVcsS0FBS0UsT0FBTyxJQUFFLE1BQUs7UUFDckIscUJBRUUsOERBQUNTO1lBQUlDLFdBQVdwQixnRUFBYzs7OEJBQzlCLDhEQUFDZ0I7OEJBQUlYLE1BQU1PLElBQUk7Ozs7Ozs4QkFDZiw4REFBQ0k7O3dCQUFLWCxNQUFNSSxLQUFLLEdBQUMsSUFBRzt3QkFBRTt3QkFBS1IsQ0FBQUEsSUFBRSxLQUFHOzs7Ozs7OzhCQUNqQyw4REFBQ2tCO29CQUFJQyxXQUFXcEIsNERBQVU7OEJBQUUsNEVBQUNELG1EQUFLQTt3QkFBQ3dCLEtBQUssa0JBQW9DLE9BQWxCekIsaURBQUksQ0FBQ08sTUFBTUksS0FBSyxDQUFDO3dCQUFJZSxPQUFPO3dCQUFLQyxRQUFRO3dCQUFLQyxLQUFJOzs7Ozs7Ozs7Ozs4QkFFNUcsOERBQUNQOztzQ0FDRCw4REFBQ1E7NEJBQU9DLFNBQVM7Z0NBQUtyQixNQUFNOzRCQUFJOzRCQUFJYSxXQUFXcEIsOERBQVk7c0NBQUU7Ozs7OztzQ0FDN0QsOERBQUMyQjs0QkFBT0MsU0FBUztnQ0FBS3JCLE1BQU07NEJBQUk7NEJBQUdhLFdBQVdwQiw4REFBWTtzQ0FBRTs7Ozs7O3NDQUM1RCw4REFBQzJCOzRCQUFPQyxTQUFTO2dDQUFLckIsTUFBTTs0QkFBSTs0QkFBR2EsV0FBV3BCLDhEQUFZO3NDQUFFOzs7Ozs7c0NBQzVELDhEQUFDMkI7NEJBQU9DLFNBQVM7Z0NBQUtyQixNQUFNOzRCQUFJOzRCQUFHYSxXQUFXcEIsOERBQVk7c0NBQUU7Ozs7OztzQ0FDNUQsOERBQUMyQjs0QkFBT0MsU0FBUztnQ0FBS2Y7NEJBQVU7NEJBQUdPLFdBQVdwQiw4REFBWTtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS2hFO0FBQ0o7R0E3Q3dCSTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY21wL09uZS5qc3g/ODVlZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYW5zd2VyIGZyb20gJy4uL2FwcC9hbnN3ZXInXHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2FwcC9kYXRhJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL09uZS5tb2R1bGUuY3NzJ1xyXG5sZXQgYT1kYXRhLmxlbmd0aFxyXG5sZXQgbT1bXVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPbmUocHJvcHMpIHtcclxuICBjb25zdCBbb3Asc2V0b3BdPXVzZVN0YXRlKCdpIGRvbnQga25vdycpXHJcbiAgICBjb25zdCBwcm9jPXVzZVJlZih0cnVlKVxyXG4gICAgaWYgKHByb3BzLmluZGV4PD1hKXtcclxuICAgICAgICBwcm9jLmN1cnJlbnQ9dHJ1ZVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBwcm9jLmN1cnJlbnQ9ZmFsc2VcclxuICAgIH1cclxuICAgIGxldCBhbj0ocHJvcHMuaW5kZXgvMikrMVxyXG4gICAgaWYocHJvcHMudGltZT09MCl7XHJcbiAgICB9XHJcbiAgICBjb25zdCBWYWxpZGF0ZT0oKT0+e1xyXG4gICAgICBpZiAob3A9PWFuc3dlcltwcm9wcy5pbmRleF0pe1xyXG4gICAgICAgICAgYWxlcnQoJ1RoaXMgYW5zd2VyIGlzIGNvcnJlY3QnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBSZXN1bHQgPSgpPT57XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxoMT5yZXN1bHQ8L2gxPlxyXG4gICAgICAgeyBjb25zb2xlLmxvZyhhbnN3ZXIpfVxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBpZiAocHJvYy5jdXJyZW50PT10cnVlKXtcclxuICAgICAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgPGgxPntwcm9wcy50aW1lfTwvaDE+XHJcbiAgICAgICAgPGgxPnsocHJvcHMuaW5kZXgvMikrMX1vZiB7KGErMSkvMn08L2gxPiAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWd9PjxJbWFnZSBzcmM9e2Avc3NjX3F1ZXN0aW9ucy8ke2RhdGFbcHJvcHMuaW5kZXhdfWB9IHdpZHRoPXsyNTB9IGhlaWdodD17MjUwfSBhbHQ9J2hlbGxvJy8+PC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT57c2V0b3AoJ2EnKX0gfSBjbGFzc05hbWU9e3N0eWxlcy5zdGFydH0+QTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntzZXRvcCgnYicpfX0gY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnR9PkI8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT57c2V0b3AoJ2MnKX19IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJ0fT5DPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e3NldG9wKCdkJyl9fSBjbGFzc05hbWU9e3N0eWxlcy5zdGFydH0+RDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntWYWxpZGF0ZSgpfX0gY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnR9PkNoZWNrPC9idXR0b24+XHJcbiAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pXHJcblxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiYW5zd2VyIiwiZGF0YSIsIkltYWdlIiwic3R5bGVzIiwiYSIsImxlbmd0aCIsIm0iLCJPbmUiLCJwcm9wcyIsIm9wIiwic2V0b3AiLCJwcm9jIiwiaW5kZXgiLCJjdXJyZW50IiwiYW4iLCJ0aW1lIiwiVmFsaWRhdGUiLCJhbGVydCIsIlJlc3VsdCIsImgxIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbnQiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/cmp/One.jsx\n"));

/***/ })

});