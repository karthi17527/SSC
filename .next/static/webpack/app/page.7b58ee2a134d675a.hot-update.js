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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ One; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_answer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/answer */ \"(app-pages-browser)/./src/app/answer.js\");\n/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/data */ \"(app-pages-browser)/./src/app/data.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _One_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./One.css */ \"(app-pages-browser)/./src/cmp/One.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nlet a = _app_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length;\nlet m = [];\nfunction One(props) {\n    _s();\n    const [op, setop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"i dont know\");\n    const proc = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n    if (props.index <= a) {\n        proc.current = true;\n    } else {\n        proc.current = false;\n    }\n    let an = props.index / 2 + 1;\n    if (props.time == 0) {}\n    const Validate = ()=>{\n        if (op == _app_answer__WEBPACK_IMPORTED_MODULE_2__[\"default\"][props.index]) {\n            alert(\"This answer is correct\");\n        }\n    };\n    const Result = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"result\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                console.log(_app_answer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n            ]\n        }, void 0, true);\n    };\n    if (proc.current == true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: _One_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"].content,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: props.time\n                }, void 0, false, {\n                    fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        props.index / 2 + 1,\n                        \"of \",\n                        (a + 1) / 2\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: _One_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"].img,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: \"/ssc_questions/\".concat(_app_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"][props.index]),\n                        width: 250,\n                        height: 250,\n                        alt: \"hello\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 37\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                setop(\"a\");\n                            },\n                            children: \"A\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                setop(\"b\");\n                            },\n                            children: \"B\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                setop(\"c\");\n                            },\n                            children: \"C\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                setop(\"d\");\n                            },\n                            children: \"D\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                Validate();\n                            },\n                            children: \"Check\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\timenext\\\\my-app\\\\src\\\\cmp\\\\One.jsx\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, this);\n    }\n}\n_s(One, \"iSdtoICHImA1U25F3t/r9vMg1A4=\");\n_c = One;\nvar _c;\n$RefreshReg$(_c, \"One\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jbXAvT25lLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUMwRDtBQUN4QjtBQUNKO0FBQ0E7QUFDQTtBQUM5QixJQUFJUSxJQUFFSCxpREFBSUEsQ0FBQ0ksTUFBTTtBQUNqQixJQUFJQyxJQUFFLEVBQUU7QUFDTyxTQUFTQyxJQUFJQyxLQUFLOztJQUMvQixNQUFNLENBQUNDLElBQUdDLE1BQU0sR0FBQ1gsK0NBQVFBLENBQUM7SUFDeEIsTUFBTVksT0FBS2IsNkNBQU1BLENBQUM7SUFDbEIsSUFBSVUsTUFBTUksS0FBSyxJQUFFUixHQUFFO1FBQ2ZPLEtBQUtFLE9BQU8sR0FBQztJQUNqQixPQUNJO1FBQ0FGLEtBQUtFLE9BQU8sR0FBQztJQUNqQjtJQUNBLElBQUlDLEtBQUcsTUFBT0YsS0FBSyxHQUFDLElBQUc7SUFDdkIsSUFBR0osTUFBTU8sSUFBSSxJQUFFLEdBQUUsQ0FDakI7SUFDQSxNQUFNQyxXQUFTO1FBQ2IsSUFBSVAsTUFBSVQsbURBQU0sQ0FBQ1EsTUFBTUksS0FBSyxDQUFDLEVBQUM7WUFDeEJLLE1BQU07UUFDVjtJQUNGO0lBQ0EsTUFBTUMsU0FBUTtRQUNaLHFCQUNFOzs4QkFDQSw4REFBQ0M7OEJBQUc7Ozs7OztnQkFDSEMsUUFBUUMsR0FBRyxDQUFDckIsbURBQU1BOzs7SUFJdkI7SUFDQSxJQUFJVyxLQUFLRSxPQUFPLElBQUUsTUFBSztRQUNyQixxQkFFRSw4REFBQ1M7WUFBSUMsV0FBV3BCLGdEQUFNQSxDQUFDcUIsT0FBTzs7OEJBQzlCLDhEQUFDTDs4QkFBSVgsTUFBTU8sSUFBSTs7Ozs7OzhCQUNmLDhEQUFDSTs7d0JBQUtYLE1BQU1JLEtBQUssR0FBQyxJQUFHO3dCQUFFO3dCQUFLUixDQUFBQSxJQUFFLEtBQUc7Ozs7Ozs7OEJBQ2pDLDhEQUFDa0I7b0JBQUlDLFdBQVdwQixnREFBTUEsQ0FBQ3NCLEdBQUc7OEJBQUUsNEVBQUN2QixtREFBS0E7d0JBQUN3QixLQUFLLGtCQUFvQyxPQUFsQnpCLGlEQUFJLENBQUNPLE1BQU1JLEtBQUssQ0FBQzt3QkFBSWUsT0FBTzt3QkFBS0MsUUFBUTt3QkFBS0MsS0FBSTs7Ozs7Ozs7Ozs7OEJBRTVHLDhEQUFDUDs7c0NBQ0QsOERBQUNROzRCQUFPQyxTQUFTO2dDQUFLckIsTUFBTTs0QkFBSTtzQ0FBRzs7Ozs7O3NDQUNuQyw4REFBQ29COzRCQUFPQyxTQUFTO2dDQUFLckIsTUFBTTs0QkFBSTtzQ0FBRzs7Ozs7O3NDQUNuQyw4REFBQ29COzRCQUFPQyxTQUFTO2dDQUFLckIsTUFBTTs0QkFBSTtzQ0FBRzs7Ozs7O3NDQUNuQyw4REFBQ29COzRCQUFPQyxTQUFTO2dDQUFLckIsTUFBTTs0QkFBSTtzQ0FBRzs7Ozs7O3NDQUNuQyw4REFBQ29COzRCQUFPQyxTQUFTO2dDQUFLZjs0QkFBVTtzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS3ZDO0FBQ0o7R0E3Q3dCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY21wL09uZS5qc3g/ODVlZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYW5zd2VyIGZyb20gJy4uL2FwcC9hbnN3ZXInXHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2FwcC9kYXRhJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL09uZS5jc3MnXHJcbmxldCBhPWRhdGEubGVuZ3RoXHJcbmxldCBtPVtdXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9uZShwcm9wcykge1xyXG4gIGNvbnN0IFtvcCxzZXRvcF09dXNlU3RhdGUoJ2kgZG9udCBrbm93JylcclxuICAgIGNvbnN0IHByb2M9dXNlUmVmKHRydWUpXHJcbiAgICBpZiAocHJvcHMuaW5kZXg8PWEpe1xyXG4gICAgICAgIHByb2MuY3VycmVudD10cnVlXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHByb2MuY3VycmVudD1mYWxzZVxyXG4gICAgfVxyXG4gICAgbGV0IGFuPShwcm9wcy5pbmRleC8yKSsxXHJcbiAgICBpZihwcm9wcy50aW1lPT0wKXtcclxuICAgIH1cclxuICAgIGNvbnN0IFZhbGlkYXRlPSgpPT57XHJcbiAgICAgIGlmIChvcD09YW5zd2VyW3Byb3BzLmluZGV4XSl7XHJcbiAgICAgICAgICBhbGVydCgnVGhpcyBhbnN3ZXIgaXMgY29ycmVjdCcpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IFJlc3VsdCA9KCk9PntcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGgxPnJlc3VsdDwvaDE+XHJcbiAgICAgICB7IGNvbnNvbGUubG9nKGFuc3dlcil9XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIGlmIChwcm9jLmN1cnJlbnQ9PXRydWUpe1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICA8aDE+e3Byb3BzLnRpbWV9PC9oMT5cclxuICAgICAgICA8aDE+eyhwcm9wcy5pbmRleC8yKSsxfW9mIHsoYSsxKS8yfTwvaDE+ICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ30+PEltYWdlIHNyYz17YC9zc2NfcXVlc3Rpb25zLyR7ZGF0YVtwcm9wcy5pbmRleF19YH0gd2lkdGg9ezI1MH0gaGVpZ2h0PXsyNTB9IGFsdD0naGVsbG8nLz48L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntzZXRvcCgnYScpfX0+QTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntzZXRvcCgnYicpfX0+QjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntzZXRvcCgnYycpfX0+QzwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntzZXRvcCgnZCcpfX0+RDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntWYWxpZGF0ZSgpfX0+Q2hlY2s8L2J1dHRvbj5cclxuICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PilcclxuXHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJhbnN3ZXIiLCJkYXRhIiwiSW1hZ2UiLCJzdHlsZXMiLCJhIiwibGVuZ3RoIiwibSIsIk9uZSIsInByb3BzIiwib3AiLCJzZXRvcCIsInByb2MiLCJpbmRleCIsImN1cnJlbnQiLCJhbiIsInRpbWUiLCJWYWxpZGF0ZSIsImFsZXJ0IiwiUmVzdWx0IiwiaDEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGVudCIsImltZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/cmp/One.jsx\n"));

/***/ })

});