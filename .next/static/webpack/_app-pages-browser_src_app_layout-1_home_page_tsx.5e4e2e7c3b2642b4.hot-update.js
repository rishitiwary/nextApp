"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_app_layout-1_home_page_tsx",{

/***/ "(app-pages-browser)/./src/components/search-box/SearchInputWithCategory.tsx":
/*!***************************************************************!*\
  !*** ./src/components/search-box/SearchInputWithCategory.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchInputWithCategory; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ \"(app-pages-browser)/./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _component_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @component/Box */ \"(app-pages-browser)/./src/components/Box.tsx\");\n/* harmony import */ var _component_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @component/Card */ \"(app-pages-browser)/./src/components/Card.tsx\");\n/* harmony import */ var _component_icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @component/icon/Icon */ \"(app-pages-browser)/./src/components/icon/Icon.tsx\");\n/* harmony import */ var _component_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @component/MenuItem */ \"(app-pages-browser)/./src/components/MenuItem.tsx\");\n/* harmony import */ var _component_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @component/Typography */ \"(app-pages-browser)/./src/components/Typography.tsx\");\n/* harmony import */ var _component_text_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @component/text-field */ \"(app-pages-browser)/./src/components/text-field/index.tsx\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styled */ \"(app-pages-browser)/./src/components/search-box/styled.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _utils_api_apiList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @utils/__api__/apiList */ \"(app-pages-browser)/./src/utils/__api__/apiList.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction SearchInputWithCategory() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_12__.useSearchParams)();\n    const initialQuery = searchParams.get(\"query\") || \"\";\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialQuery);\n    const [resultList, setResultList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const locationResponse = localStorage.getItem(\"locationResponse\");\n    const storeCode = !!locationResponse && JSON.parse(locationResponse).storecode;\n    const [page, setPageNo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    //call api for storing data into database through api\n    const handleSearch = async (value)=>{\n        try {\n            if (storeCode) {\n                const response = await (0,axios__WEBPACK_IMPORTED_MODULE_13__[\"default\"])({\n                    url: \"\".concat(_utils_api_apiList__WEBPACK_IMPORTED_MODULE_11__[\"default\"].GLOBAL_SEARCH, \"?q=\").concat(value, \"&page=\").concat(page),\n                    method: \"GET\",\n                    headers: {\n                        storecode: storeCode\n                    }\n                });\n                setResultList(response.data.data.suggestions);\n                return response;\n            }\n        } catch (error) {\n            console.log(\"Error in handleAddToCart:\", error);\n            throw error; // Re-throw to handle it in the calling function\n        }\n    };\n    const search = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()((e)=>{\n        var _e_target;\n        const value = (_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.value;\n        if (!value) {\n            setResultList([]);\n        } else {\n            handleSearch(value);\n        }\n    }, 200);\n    const hanldeSearch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        setQuery(event.target.value);\n        event.persist();\n        search(event);\n    }, []);\n    const handleDocumentClick = ()=>setResultList([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"click\", handleDocumentClick);\n        return ()=>window.removeEventListener(\"click\", handleDocumentClick);\n    }, []);\n    const selectOption = (item)=>{\n        setQuery(item); // Set the selected option to the query state\n        setResultList([]); // Clear the results list after selection\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        position: \"relative\",\n        flex: \"1 1 0\",\n        maxWidth: \"670px\",\n        mx: \"auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_icon_Icon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"search-icon\",\n                        size: \"18px\",\n                        children: \"search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rishikanttiwary/Desktop/grozep/website/nextApp/src/components/search-box/SearchInputWithCategory.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_text_field__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        fullwidth: true,\n                        onChange: hanldeSearch,\n                        className: \"search-field\",\n                        placeholder: \"Search and hit enter...\",\n                        value: query\n                    }, void 0, false, {\n                        fileName: \"/Users/rishikanttiwary/Desktop/grozep/website/nextApp/src/components/search-box/SearchInputWithCategory.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rishikanttiwary/Desktop/grozep/website/nextApp/src/components/search-box/SearchInputWithCategory.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            !!resultList.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                position: \"absolute\",\n                top: \"100%\",\n                py: \"0.5rem\",\n                width: \"100%\",\n                boxShadow: \"large\",\n                zIndex: 99,\n                children: resultList.map((item, index)=>{\n                    var _item_name;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/product/search?query=\".concat((_item_name = item.name) === null || _item_name === void 0 ? void 0 : _item_name.toLowerCase()),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_MenuItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Typography__WEBPACK_IMPORTED_MODULE_8__.Span, {\n                                fontSize: \"14px\",\n                                onClick: ()=>selectOption(item.name),\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"/Users/rishikanttiwary/Desktop/grozep/website/nextApp/src/components/search-box/SearchInputWithCategory.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 17\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/Users/rishikanttiwary/Desktop/grozep/website/nextApp/src/components/search-box/SearchInputWithCategory.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 15\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/rishikanttiwary/Desktop/grozep/website/nextApp/src/components/search-box/SearchInputWithCategory.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/rishikanttiwary/Desktop/grozep/website/nextApp/src/components/search-box/SearchInputWithCategory.tsx\",\n                lineNumber: 121,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rishikanttiwary/Desktop/grozep/website/nextApp/src/components/search-box/SearchInputWithCategory.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n} // const categories = [\n //   \"All Categories\",\n //   \"Car\",\n //   \"Clothes\",\n //   \"Electronics\",\n //   \"Laptop\",\n //   \"Desktop\",\n //   \"Camera\",\n //   \"Toys\"\n // ];\n // const dummySearchResult = [\"Macbook Air 13\", \"Ksus K555LA\", \"Acer Aspire X453\", \"iPad Mini 3\"];\n_s(SearchInputWithCategory, \"jcfXRb0xuS+6JVQZY1V+hcI1bn0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_12__.useSearchParams\n    ];\n});\n_c = SearchInputWithCategory;\nvar _c;\n$RefreshReg$(_c, \"SearchInputWithCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC1ib3gvU2VhcmNoSW5wdXRXaXRoQ2F0ZWdvcnkudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeUQ7QUFDNUI7QUFDSztBQUVEO0FBRUU7QUFDSztBQUVHO0FBQ0U7QUFDQztBQUNQO0FBQ2I7QUFDbUI7QUFDSztBQUNuQyxTQUFTZTs7SUFDdEIsTUFBTUMsZUFBZUYsaUVBQWVBO0lBQ3BDLE1BQU1HLGVBQWVELGFBQWFFLEdBQUcsQ0FBQyxZQUFZO0lBQ2xELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHbEIsK0NBQVFBLENBQUNlO0lBQ25DLE1BQU0sQ0FBQ0ksWUFBWUMsY0FBYyxHQUFHcEIsK0NBQVFBLENBQVcsRUFBRTtJQUN6RCxNQUFNcUIsbUJBQW1CQyxhQUFhQyxPQUFPLENBQUM7SUFFOUMsTUFBTUMsWUFBbUIsQ0FBQyxDQUFDSCxvQkFBb0JJLEtBQUtDLEtBQUssQ0FBQ0wsa0JBQWtCTSxTQUFTO0lBQ3JGLE1BQU0sQ0FBQ0MsTUFBS0MsVUFBVSxHQUFDN0IsK0NBQVFBLENBQUM7SUFHOUIscURBQXFEO0lBQ3JELE1BQU04QixlQUFlLE9BQU9DO1FBRTFCLElBQUk7WUFDRixJQUFJUCxXQUFXO2dCQUNiLE1BQU1RLFdBQVcsTUFBTXRCLGtEQUFLQSxDQUFDO29CQUMzQnVCLEtBQUssR0FBOEJGLE9BQTNCcEIsMkRBQU9BLENBQUN1QixhQUFhLEVBQUMsT0FBbUJOLE9BQWRHLE9BQU0sVUFBYSxPQUFMSDtvQkFDakRPLFFBQVE7b0JBQ1JDLFNBQVM7d0JBQ1BULFdBQVdIO29CQUNiO2dCQUNGO2dCQUVBSixjQUFjWSxTQUFTSyxJQUFJLENBQUNBLElBQUksQ0FBQ0MsV0FBVztnQkFDNUMsT0FBT047WUFDVDtRQUNGLEVBQUUsT0FBT08sT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUMsNkJBQTZCRjtZQUN6QyxNQUFNQSxPQUFPLGdEQUFnRDtRQUMvRDtJQUNGO0lBR0YsTUFBTUcsU0FBU3hDLHNEQUFRQSxDQUFDLENBQUN5QztZQUNUQTtRQUFkLE1BQU1aLFNBQVFZLFlBQUFBLEVBQUVDLE1BQU0sY0FBUkQsZ0NBQUFBLFVBQVVaLEtBQUs7UUFFN0IsSUFBSSxDQUFDQSxPQUFNO1lBQ1RYLGNBQWMsRUFBRTtRQUVsQixPQUNLO1lBRUhVLGFBQWFDO1FBQ2Y7SUFDRixHQUFHO0lBRUgsTUFBTWMsZUFBZS9DLGtEQUFXQSxDQUFDLENBQUNnRDtRQUVoQzVCLFNBQVM0QixNQUFNRixNQUFNLENBQUNiLEtBQUs7UUFDM0JlLE1BQU1DLE9BQU87UUFFYkwsT0FBT0k7SUFDVCxHQUFHLEVBQUU7SUFFTCxNQUFNRSxzQkFBc0IsSUFBTTVCLGNBQWMsRUFBRTtJQUVsRHJCLGdEQUFTQSxDQUFDO1FBQ1JrRCxPQUFPQyxnQkFBZ0IsQ0FBQyxTQUFTRjtRQUNqQyxPQUFPLElBQU1DLE9BQU9FLG1CQUFtQixDQUFDLFNBQVNIO0lBQ25ELEdBQUcsRUFBRTtJQUVMLE1BQU1JLGVBQWUsQ0FBQ0M7UUFDcEJuQyxTQUFTbUMsT0FBTyw2Q0FBNkM7UUFDN0RqQyxjQUFjLEVBQUUsR0FBRyx5Q0FBeUM7SUFDOUQ7SUFJQSxxQkFDRSw4REFBQ2pCLHNEQUFHQTtRQUFDbUQsVUFBUztRQUFXQyxNQUFLO1FBQVFDLFVBQVM7UUFBUUMsSUFBRzs7MEJBQ3hELDhEQUFDaEQsZ0RBQWVBOztrQ0FDZCw4REFBQ0osNERBQUlBO3dCQUFDcUQsV0FBVTt3QkFBY0MsTUFBSztrQ0FBTzs7Ozs7O2tDQUkxQyw4REFBQ25ELDZEQUFTQTt3QkFDUm9ELFNBQVM7d0JBQ1RDLFVBQVVoQjt3QkFDVmEsV0FBVTt3QkFDVkksYUFBWTt3QkFDWi9CLE9BQU9kOzs7Ozs7Ozs7Ozs7WUFxQlYsQ0FBQyxDQUFDRSxXQUFXNEMsTUFBTSxrQkFDbEIsOERBQUMzRCx1REFBSUE7Z0JBQUNrRCxVQUFTO2dCQUFXVSxLQUFJO2dCQUFPQyxJQUFHO2dCQUFTQyxPQUFNO2dCQUFPQyxXQUFVO2dCQUFRQyxRQUFROzBCQUNyRmpELFdBQVdrRCxHQUFHLENBQUMsQ0FBQ2hCLE1BQUtpQjt3QkFDaUJqQjt5Q0FBckMsOERBQUNwRCxpREFBSUE7d0JBQUNzRSxNQUFNLHlCQUFrRCxRQUF6QmxCLGFBQUFBLEtBQUttQixJQUFJLGNBQVRuQixpQ0FBQUEsV0FBV29CLFdBQVc7a0NBQ3pELDRFQUFDbkUsMkRBQVFBO3NDQUNQLDRFQUFDQyx1REFBSUE7Z0NBQUNtRSxVQUFTO2dDQUFPQyxTQUFTLElBQU12QixhQUFhQyxLQUFLbUIsSUFBSTswQ0FBSW5CLEtBQUttQixJQUFJOzs7Ozs7MkJBRDNERjs7Ozs7dUJBRHFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVbEYsRUFFQSx1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsY0FBYztDQUNkLFdBQVc7Q0FDWCxLQUFLO0NBRUwsa0dBQWtHO0dBaEkxRXpEOztRQUNERCw2REFBZUE7OztLQURkQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L1NlYXJjaElucHV0V2l0aENhdGVnb3J5LnRzeD9jNGQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuaW1wb3J0IEJveCBmcm9tIFwiQGNvbXBvbmVudC9Cb3hcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIkBjb21wb25lbnQvTWVudVwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQGNvbXBvbmVudC9DYXJkXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCJAY29tcG9uZW50L2ljb24vSWNvblwiO1xyXG5pbXBvcnQgRmxleEJveCBmcm9tIFwiQGNvbXBvbmVudC9GbGV4Qm94XCI7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQGNvbXBvbmVudC9NZW51SXRlbVwiO1xyXG5pbXBvcnQgeyBTcGFuIH0gZnJvbSBcIkBjb21wb25lbnQvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAY29tcG9uZW50L3RleHQtZmllbGRcIjtcclxuaW1wb3J0IFN0eWxlZFNlYXJjaEJveCBmcm9tIFwiLi9zdHlsZWRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYXBpTGlzdCBmcm9tIFwiQHV0aWxzL19fYXBpX18vYXBpTGlzdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaElucHV0V2l0aENhdGVnb3J5KCkge1xyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpXHJcbiAgY29uc3QgaW5pdGlhbFF1ZXJ5ID0gc2VhcmNoUGFyYW1zLmdldCgncXVlcnknKSB8fCAnJztcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKGluaXRpYWxRdWVyeSk7XHJcbiAgY29uc3QgW3Jlc3VsdExpc3QsIHNldFJlc3VsdExpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICBjb25zdCBsb2NhdGlvblJlc3BvbnNlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2F0aW9uUmVzcG9uc2UnKTtcclxuIFxyXG4gIGNvbnN0IHN0b3JlQ29kZTpzdHJpbmcgPSAhIWxvY2F0aW9uUmVzcG9uc2UgJiYgSlNPTi5wYXJzZShsb2NhdGlvblJlc3BvbnNlKS5zdG9yZWNvZGU7XHJcbiAgY29uc3QgW3BhZ2Usc2V0UGFnZU5vXT11c2VTdGF0ZSgxKTtcclxuXHJcblxyXG4gICAgLy9jYWxsIGFwaSBmb3Igc3RvcmluZyBkYXRhIGludG8gZGF0YWJhc2UgdGhyb3VnaCBhcGlcclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICh2YWx1ZTpzdHJpbmcpID0+IHtcclxuICAgICAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHN0b3JlQ29kZSkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgIHVybDogYCR7YXBpTGlzdC5HTE9CQUxfU0VBUkNIfT9xPSR7dmFsdWV9JnBhZ2U9JHtwYWdlfWAsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBzdG9yZWNvZGU6IHN0b3JlQ29kZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZXRSZXN1bHRMaXN0KHJlc3BvbnNlLmRhdGEuZGF0YS5zdWdnZXN0aW9ucyk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBoYW5kbGVBZGRUb0NhcnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IGVycm9yOyAvLyBSZS10aHJvdyB0byBoYW5kbGUgaXQgaW4gdGhlIGNhbGxpbmcgZnVuY3Rpb25cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gIGNvbnN0IHNlYXJjaCA9IGRlYm91bmNlKChlKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0Py52YWx1ZTtcclxuXHJcbiAgICBpZiAoIXZhbHVlKXtcclxuICAgICAgc2V0UmVzdWx0TGlzdChbXSk7XHJcbiAgICAgIFxyXG4gICAgfSBcclxuICAgIGVsc2Uge1xyXG4gICAgIFxyXG4gICAgICBoYW5kbGVTZWFyY2godmFsdWUpO1xyXG4gICAgfVxyXG4gIH0sIDIwMCk7XHJcblxyXG4gIGNvbnN0IGhhbmxkZVNlYXJjaCA9IHVzZUNhbGxiYWNrKChldmVudDogYW55KSA9PiB7XHJcbiAgXHJcbiAgICBzZXRRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgZXZlbnQucGVyc2lzdCgpO1xyXG4gIFxyXG4gICAgc2VhcmNoKGV2ZW50KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURvY3VtZW50Q2xpY2sgPSAoKSA9PiBzZXRSZXN1bHRMaXN0KFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRG9jdW1lbnRDbGljayk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEb2N1bWVudENsaWNrKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdE9wdGlvbiA9IChpdGVtOiBzdHJpbmcpID0+IHtcclxuICAgIHNldFF1ZXJ5KGl0ZW0pOyAvLyBTZXQgdGhlIHNlbGVjdGVkIG9wdGlvbiB0byB0aGUgcXVlcnkgc3RhdGVcclxuICAgIHNldFJlc3VsdExpc3QoW10pOyAvLyBDbGVhciB0aGUgcmVzdWx0cyBsaXN0IGFmdGVyIHNlbGVjdGlvblxyXG4gIH07XHJcblxyXG5cclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiBmbGV4PVwiMSAxIDBcIiBtYXhXaWR0aD1cIjY3MHB4XCIgbXg9XCJhdXRvXCI+XHJcbiAgICAgIDxTdHlsZWRTZWFyY2hCb3g+XHJcbiAgICAgICAgPEljb24gY2xhc3NOYW1lPVwic2VhcmNoLWljb25cIiBzaXplPVwiMThweFwiPlxyXG4gICAgICAgICAgc2VhcmNoXHJcbiAgICAgICAgPC9JY29uPlxyXG5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBmdWxsd2lkdGhcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5sZGVTZWFyY2h9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtZmllbGRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYW5kIGhpdCBlbnRlci4uLlwiXHJcbiAgICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgIFxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHsvKiA8TWVudVxyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2F0ZWdvcnktZHJvcGRvd25cIlxyXG4gICAgICAgICAgaGFuZGxlcj17XHJcbiAgICAgICAgICAgIDxGbGV4Qm94IGNsYXNzTmFtZT1cImRyb3Bkb3duLWhhbmRsZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e2NhdGVnb3J5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8SWNvbiB2YXJpYW50PVwic21hbGxcIj5jaGV2cm9uLWRvd248L0ljb24+XHJcbiAgICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICAgIH0+XHJcbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aXRlbX0gb25DbGljaz17aGFuZGxlQ2F0ZWdvcnlDaGFuZ2UoaXRlbSl9PlxyXG4gICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9NZW51PiAqL31cclxuICAgICAgPC9TdHlsZWRTZWFyY2hCb3g+XHJcblxyXG4gICAgICB7ISFyZXN1bHRMaXN0Lmxlbmd0aCAmJiAoXHJcbiAgICAgICAgPENhcmQgcG9zaXRpb249XCJhYnNvbHV0ZVwiIHRvcD1cIjEwMCVcIiBweT1cIjAuNXJlbVwiIHdpZHRoPVwiMTAwJVwiIGJveFNoYWRvdz1cImxhcmdlXCIgekluZGV4PXs5OX0+XHJcbiAgICAgICAgICB7cmVzdWx0TGlzdC5tYXAoKGl0ZW0saW5kZXgpID0+IChcclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0L3NlYXJjaD9xdWVyeT0ke2l0ZW0ubmFtZT8udG9Mb3dlckNhc2UoKX1gfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8U3BhbiBmb250U2l6ZT1cIjE0cHhcIiBvbkNsaWNrPXsoKSA9PiBzZWxlY3RPcHRpb24oaXRlbS5uYW1lKX0+e2l0ZW0ubmFtZX08L1NwYW4+XHJcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gY29uc3QgY2F0ZWdvcmllcyA9IFtcclxuLy8gICBcIkFsbCBDYXRlZ29yaWVzXCIsXHJcbi8vICAgXCJDYXJcIixcclxuLy8gICBcIkNsb3RoZXNcIixcclxuLy8gICBcIkVsZWN0cm9uaWNzXCIsXHJcbi8vICAgXCJMYXB0b3BcIixcclxuLy8gICBcIkRlc2t0b3BcIixcclxuLy8gICBcIkNhbWVyYVwiLFxyXG4vLyAgIFwiVG95c1wiXHJcbi8vIF07XHJcblxyXG4vLyBjb25zdCBkdW1teVNlYXJjaFJlc3VsdCA9IFtcIk1hY2Jvb2sgQWlyIDEzXCIsIFwiS3N1cyBLNTU1TEFcIiwgXCJBY2VyIEFzcGlyZSBYNDUzXCIsIFwiaVBhZCBNaW5pIDNcIl07XHJcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsImRlYm91bmNlIiwiQm94IiwiQ2FyZCIsIkljb24iLCJNZW51SXRlbSIsIlNwYW4iLCJUZXh0RmllbGQiLCJTdHlsZWRTZWFyY2hCb3giLCJheGlvcyIsImFwaUxpc3QiLCJ1c2VTZWFyY2hQYXJhbXMiLCJTZWFyY2hJbnB1dFdpdGhDYXRlZ29yeSIsInNlYXJjaFBhcmFtcyIsImluaXRpYWxRdWVyeSIsImdldCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJyZXN1bHRMaXN0Iiwic2V0UmVzdWx0TGlzdCIsImxvY2F0aW9uUmVzcG9uc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVDb2RlIiwiSlNPTiIsInBhcnNlIiwic3RvcmVjb2RlIiwicGFnZSIsInNldFBhZ2VObyIsImhhbmRsZVNlYXJjaCIsInZhbHVlIiwicmVzcG9uc2UiLCJ1cmwiLCJHTE9CQUxfU0VBUkNIIiwibWV0aG9kIiwiaGVhZGVycyIsImRhdGEiLCJzdWdnZXN0aW9ucyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsImUiLCJ0YXJnZXQiLCJoYW5sZGVTZWFyY2giLCJldmVudCIsInBlcnNpc3QiLCJoYW5kbGVEb2N1bWVudENsaWNrIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWxlY3RPcHRpb24iLCJpdGVtIiwicG9zaXRpb24iLCJmbGV4IiwibWF4V2lkdGgiLCJteCIsImNsYXNzTmFtZSIsInNpemUiLCJmdWxsd2lkdGgiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwibGVuZ3RoIiwidG9wIiwicHkiLCJ3aWR0aCIsImJveFNoYWRvdyIsInpJbmRleCIsIm1hcCIsImluZGV4IiwiaHJlZiIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImZvbnRTaXplIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/search-box/SearchInputWithCategory.tsx\n"));

/***/ })

});