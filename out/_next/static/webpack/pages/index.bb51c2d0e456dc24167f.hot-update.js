webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
false,

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
false,

/***/ "./node_modules/next/dist/client/route-loader.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
false,

/***/ "./node_modules/next/router.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.tsx\");\n/* harmony import */ var _components_Screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Screen */ \"./components/Screen.tsx\");\n\n\nvar _jsxFileName = \"/home/devavi/projects/countries/pages/index.tsx\";\n\n\n\n\nvar Home = function Home(_ref) {\n  var _this = this;\n\n  var countries = _ref.countries;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Screen__WEBPACK_IMPORTED_MODULE_3__[\"Screen\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Countries\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"], {\n      title: \"Countries\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: \"flex flex-wrap gap-4 p-4 pt-20\",\n      children: countries.map(function (country) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: \"flex-1 min-w-full sm:min-w-max max-w-full p-4 bg-blue-200 rounded-xl flex gap-2 hover:bg-blue-300 hover:shadow-md focus:outline-none focus:bg-blue-300 focus:shadow-2xl transform hover:scale-105\",\n          title: country.name,\n          href: \"/\".concat(country.alpha2Code),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"aside\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: country.flag,\n              alt: country.name,\n              className: \"w-10\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n            className: \"flex flex-col items-start\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              className: \"font-bold text-blue-900\",\n              children: country.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 15\n            }, _this), country.capital && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: [\"Capital -\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                className: \"text-blue-800\",\n                children: country.capital\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 17\n            }, _this), country.population ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n              children: [\"Population -\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                className: \"text-blue-800\",\n                children: new Intl.NumberFormat().format(country.population)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 17\n            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, _this)]\n        }, country.alpha2Code, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n};\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsImNvdW50cmllcyIsIm1hcCIsImNvdW50cnkiLCJuYW1lIiwiYWxwaGEyQ29kZSIsImZsYWciLCJjYXBpdGFsIiwicG9wdWxhdGlvbiIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQVFBLElBQU1BLElBQXlCLEdBQUcsU0FBNUJBLElBQTRCLE9BQXlCO0FBQUE7O0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3pELHNCQUNFLHFFQUFDLHlEQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLHFFQUFDLHlEQUFEO0FBQVEsV0FBSyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBUyxlQUFTLEVBQUMsZ0NBQW5CO0FBQUEsZ0JBQ0dBLFNBQVMsQ0FBQ0MsR0FBVixDQUFjLFVBQUNDLE9BQUQ7QUFBQSw0QkFDYjtBQUVFLG1CQUFTLEVBQUMsbU1BRlo7QUFHRSxlQUFLLEVBQUVBLE9BQU8sQ0FBQ0MsSUFIakI7QUFJRSxjQUFJLGFBQU1ELE9BQU8sQ0FBQ0UsVUFBZCxDQUpOO0FBQUEsa0NBTUU7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUVGLE9BQU8sQ0FBQ0csSUFBbEI7QUFBd0IsaUJBQUcsRUFBRUgsT0FBTyxDQUFDQyxJQUFyQztBQUEyQyx1QkFBUyxFQUFDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLGVBU0U7QUFBUyxxQkFBUyxFQUFDLDJCQUFuQjtBQUFBLG9DQUNFO0FBQUksdUJBQVMsRUFBQyx5QkFBZDtBQUFBLHdCQUF5Q0QsT0FBTyxDQUFDQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUdELE9BQU8sQ0FBQ0ksT0FBUixpQkFDQztBQUFBLHNDQUNZLEdBRFosZUFFRTtBQUFNLHlCQUFTLEVBQUMsZUFBaEI7QUFBQSwwQkFBaUNKLE9BQU8sQ0FBQ0k7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosRUFRR0osT0FBTyxDQUFDSyxVQUFSLGdCQUNDO0FBQUEseUNBQ2UsR0FEZixlQUVFO0FBQU0seUJBQVMsRUFBQyxlQUFoQjtBQUFBLDBCQUNHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxHQUF3QkMsTUFBeEIsQ0FBK0JSLE9BQU8sQ0FBQ0ssVUFBdkM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxnQkFRQyx1SkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUEsV0FDT0wsT0FBTyxDQUFDRSxVQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUNELENBMUNEOztLQUFNTCxJOztBQXFEU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUHJvcHNSZXN1bHQsIE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2NyZWVuXCI7XG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSBcIi4uL21vZGVscy9jb3VudHJ5L2NvdW50cnlcIjtcbmltcG9ydCB7IGdldEFsbENvdW50cmllcyB9IGZyb20gXCIuLi91dGlscy9nZXRBbGxDb3VudHJpZXNcIjtcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIGNvdW50cmllczogQXJyYXk8Q291bnRyeT47XG59XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlPEhvbWVQcm9wcz4gPSBmdW5jdGlvbiAoeyBjb3VudHJpZXMgfSkge1xuICByZXR1cm4gKFxuICAgIDxTY3JlZW4+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvdW50cmllczwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2YmFyIHRpdGxlPVwiQ291bnRyaWVzXCIgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC00IHAtNCBwdC0yMFwiPlxuICAgICAgICB7Y291bnRyaWVzLm1hcCgoY291bnRyeSkgPT4gKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBrZXk9e2NvdW50cnkuYWxwaGEyQ29kZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy1mdWxsIHNtOm1pbi13LW1heCBtYXgtdy1mdWxsIHAtNCBiZy1ibHVlLTIwMCByb3VuZGVkLXhsIGZsZXggZ2FwLTIgaG92ZXI6YmctYmx1ZS0zMDAgaG92ZXI6c2hhZG93LW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy1ibHVlLTMwMCBmb2N1czpzaGFkb3ctMnhsIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAgICAgdGl0bGU9e2NvdW50cnkubmFtZX1cbiAgICAgICAgICAgIGhyZWY9e2AvJHtjb3VudHJ5LmFscGhhMkNvZGV9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtjb3VudHJ5LmZsYWd9IGFsdD17Y291bnRyeS5uYW1lfSBjbGFzc05hbWU9XCJ3LTEwXCIgLz5cbiAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ibHVlLTkwMFwiPntjb3VudHJ5Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAge2NvdW50cnkuY2FwaXRhbCAmJiAoXG4gICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgQ2FwaXRhbCAte1wiIFwifVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTgwMFwiPntjb3VudHJ5LmNhcGl0YWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtjb3VudHJ5LnBvcHVsYXRpb24gPyAoXG4gICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgUG9wdWxhdGlvbiAte1wiIFwifVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7bmV3IEludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KGNvdW50cnkucG9wdWxhdGlvbil9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8PjwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9TY3JlZW4+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPEhvbWVQcm9wcz4gPSBhc3luYyAoKTogUHJvbWlzZTxcbiAgR2V0U3RhdGljUHJvcHNSZXN1bHQ8SG9tZVByb3BzPlxuPiA9PiB7XG4gIGNvbnN0IGNvdW50cmllcyA9IGF3YWl0IGdldEFsbENvdW50cmllcygpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGNvdW50cmllcyB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})