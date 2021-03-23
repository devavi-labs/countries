webpackHotUpdate_N_E("pages/[alpha2Code]",{

/***/ "./pages/[alpha2Code].tsx":
/*!********************************!*\
  !*** ./pages/[alpha2Code].tsx ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.tsx\");\n/* harmony import */ var _components_CardTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CardTitle */ \"./components/CardTitle.tsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.tsx\");\n/* harmony import */ var _components_Screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Screen */ \"./components/Screen.tsx\");\n/* harmony import */ var _components_Stat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Stat */ \"./components/Stat.tsx\");\n\n\n\nvar _jsxFileName = \"/home/devavi/projects/countries/pages/[alpha2Code].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar CountryPage = function CountryPage(_ref) {\n  _s();\n\n  var country = _ref.country;\n  var title = \"\".concat(country.name, \" - \").concat(country.alpha2Code);\n\n  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__[\"useInView\"])(),\n      ref = _useInView.ref,\n      inView = _useInView.inView,\n      entry = _useInView.entry;\n\n  console.log(inView, entry);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Screen__WEBPACK_IMPORTED_MODULE_6__[\"Screen\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__[\"Navbar\"], {\n      title: title,\n      img: inView ? undefined : country.flag\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: \"p-4 pt-20\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        ref: ref,\n        src: country.flag,\n        alt: country.name,\n        title: \"National flag of \".concat(country.name),\n        className: \"max-w-full sm:max-w-sm m-auto shadow-2xl transform hover:scale-105 cursor-pointer animate-fade-in\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex justify-around items-stretch flex-wrap gap-4 px-2 py-8 sm:px-8\",\n        children: [country.nativeName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n          title: \"Native name of \".concat(country.name),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CardTitle__WEBPACK_IMPORTED_MODULE_4__[\"CardTitle\"], {\n            title: \"Native Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Stat__WEBPACK_IMPORTED_MODULE_7__[\"Stat\"], {\n            stat: country.nativeName\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, this), country.capital && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n          title: \"Capital of \".concat(country.name),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CardTitle__WEBPACK_IMPORTED_MODULE_4__[\"CardTitle\"], {\n            title: \"Captial\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Stat__WEBPACK_IMPORTED_MODULE_7__[\"Stat\"], {\n            stat: country.capital\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, this), country.population ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n          title: \"Population in \".concat(country.name),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CardTitle__WEBPACK_IMPORTED_MODULE_4__[\"CardTitle\"], {\n            title: \"Population\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Stat__WEBPACK_IMPORTED_MODULE_7__[\"Stat\"], {\n            stat: new Intl.NumberFormat().format(country.population)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false), country.languages && country.languages.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n          title: \"Languages spoken in \".concat(country.name),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CardTitle__WEBPACK_IMPORTED_MODULE_4__[\"CardTitle\"], {\n            title: \"Languages\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Stat__WEBPACK_IMPORTED_MODULE_7__[\"Stat\"], {\n            stat: country.languages.map(function (_ref2) {\n              var name = _ref2.name,\n                  nativeName = _ref2.nativeName;\n              return \"\".concat(name, \" \").concat(nativeName !== name ? \"(\".concat(nativeName, \")\") : \"\");\n            }).join(\", \")\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }, this), country.currencies && country.currencies.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n          title: \"Currencies valid in \".concat(country.name),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CardTitle__WEBPACK_IMPORTED_MODULE_4__[\"CardTitle\"], {\n            title: \"Currencies\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Stat__WEBPACK_IMPORTED_MODULE_7__[\"Stat\"], {\n            stat: country.currencies.map(function (_ref3) {\n              var code = _ref3.code,\n                  name = _ref3.name,\n                  symbol = _ref3.symbol;\n              return \"\".concat(code, \" - \").concat(name, \" (\").concat(symbol, \")\");\n            }).join(\", \")\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }, this), country.region && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n          title: \"Region \".concat(country.name, \" lies in\"),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CardTitle__WEBPACK_IMPORTED_MODULE_4__[\"CardTitle\"], {\n            title: \"Region\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Stat__WEBPACK_IMPORTED_MODULE_7__[\"Stat\"], {\n            stat: country.region\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 13\n        }, this), country.subregion && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n          title: \"Sub - Region \".concat(country.name, \" lies in\"),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CardTitle__WEBPACK_IMPORTED_MODULE_4__[\"CardTitle\"], {\n            title: \"Sub - Region\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Stat__WEBPACK_IMPORTED_MODULE_7__[\"Stat\"], {\n            stat: country.subregion\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 13\n        }, this), country.altSpellings && country.altSpellings.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n          title: \"Alternative spellings of \".concat(country.name),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CardTitle__WEBPACK_IMPORTED_MODULE_4__[\"CardTitle\"], {\n            title: \"Alternative Spellings\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Stat__WEBPACK_IMPORTED_MODULE_7__[\"Stat\"], {\n            stat: country.altSpellings.join(\", \")\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 13\n        }, this), country.timezones && country.timezones.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n          title: \"Timezones in \".concat(country.name),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CardTitle__WEBPACK_IMPORTED_MODULE_4__[\"CardTitle\"], {\n            title: \"Timezones\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Stat__WEBPACK_IMPORTED_MODULE_7__[\"Stat\"], {\n            stat: country.timezones.join(\", \")\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, this);\n};\n\n_s(CountryPage, \"aMQlUcdZ4WoU8Lxc9LOCvLVkklE=\", false, function () {\n  return [react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__[\"useInView\"]];\n});\n\n_c = CountryPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"CountryPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2FscGhhMkNvZGVdLnRzeD8yNjA2Il0sIm5hbWVzIjpbIkNvdW50cnlQYWdlIiwiY291bnRyeSIsInRpdGxlIiwibmFtZSIsImFscGhhMkNvZGUiLCJ1c2VJblZpZXciLCJyZWYiLCJpblZpZXciLCJlbnRyeSIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJmbGFnIiwibmF0aXZlTmFtZSIsImNhcGl0YWwiLCJwb3B1bGF0aW9uIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCIsImxhbmd1YWdlcyIsImxlbmd0aCIsIm1hcCIsImpvaW4iLCJjdXJyZW5jaWVzIiwiY29kZSIsInN5bWJvbCIsInJlZ2lvbiIsInN1YnJlZ2lvbiIsImFsdFNwZWxsaW5ncyIsInRpbWV6b25lcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsSUFBTUEsV0FBdUMsR0FBRyxTQUExQ0EsV0FBMEMsT0FBdUI7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDckUsTUFBTUMsS0FBSyxhQUFNRCxPQUFPLENBQUNFLElBQWQsZ0JBQXdCRixPQUFPLENBQUNHLFVBQWhDLENBQVg7O0FBRHFFLG1CQUV0Q0MsNkVBQVMsRUFGNkI7QUFBQSxNQUU3REMsR0FGNkQsY0FFN0RBLEdBRjZEO0FBQUEsTUFFeERDLE1BRndELGNBRXhEQSxNQUZ3RDtBQUFBLE1BRWhEQyxLQUZnRCxjQUVoREEsS0FGZ0Q7O0FBR3JFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWixFQUFvQkMsS0FBcEI7QUFDQSxzQkFDRSxxRUFBQyx5REFBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQSxrQkFBUU47QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMseURBQUQ7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ZXRTdGF0aWNQYXRocyxcbiAgR2V0U3RhdGljUGF0aHNSZXN1bHQsXG4gIEdldFN0YXRpY1Byb3BzLFxuICBHZXRTdGF0aWNQcm9wc1Jlc3VsdCxcbiAgTmV4dFBhZ2UsXG59IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IHsgQ2FyZFRpdGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFRpdGxlXCI7XG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCB7IFNjcmVlbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1NjcmVlblwiO1xuaW1wb3J0IHsgU3RhdCB9IGZyb20gXCIuLi9jb21wb25lbnRzL1N0YXRcIjtcbmltcG9ydCB7IEV4dGVuZGVkQ291bnRyeSB9IGZyb20gXCIuLi9tb2RlbHMvY291bnRyeS9leHRlbmRlZENvdW50cnlcIjtcbmltcG9ydCB7IGdldEFsbENvdW50cnlDb2RlcyB9IGZyb20gXCIuLi91dGlscy9nZXRBbGxDb3VudHJ5Q29kZXNcIjtcbmltcG9ydCB7IGdldENvdW50cnkgfSBmcm9tIFwiLi4vdXRpbHMvZ2V0Q291bnRyeVwiO1xuXG5pbnRlcmZhY2UgQ291bnRyeVBhZ2VQcm9wcyB7XG4gIGNvdW50cnk6IEV4dGVuZGVkQ291bnRyeTtcbn1cblxuY29uc3QgQ291bnRyeVBhZ2U6IE5leHRQYWdlPENvdW50cnlQYWdlUHJvcHM+ID0gZnVuY3Rpb24gKHsgY291bnRyeSB9KSB7XG4gIGNvbnN0IHRpdGxlID0gYCR7Y291bnRyeS5uYW1lfSAtICR7Y291bnRyeS5hbHBoYTJDb2RlfWA7XG4gIGNvbnN0IHsgcmVmLCBpblZpZXcsIGVudHJ5IH0gPSB1c2VJblZpZXcoKTtcbiAgY29uc29sZS5sb2coaW5WaWV3LCBlbnRyeSk7XG4gIHJldHVybiAoXG4gICAgPFNjcmVlbj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2YmFyIHRpdGxlPXt0aXRsZX0gaW1nPXtpblZpZXcgPyB1bmRlZmluZWQgOiBjb3VudHJ5LmZsYWd9IC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwLTQgcHQtMjBcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIHNyYz17Y291bnRyeS5mbGFnfVxuICAgICAgICAgIGFsdD17Y291bnRyeS5uYW1lfVxuICAgICAgICAgIHRpdGxlPXtgTmF0aW9uYWwgZmxhZyBvZiAke2NvdW50cnkubmFtZX1gfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LWZ1bGwgc206bWF4LXctc20gbS1hdXRvIHNoYWRvdy0yeGwgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBjdXJzb3ItcG9pbnRlciBhbmltYXRlLWZhZGUtaW5cIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmQgaXRlbXMtc3RyZXRjaCBmbGV4LXdyYXAgZ2FwLTQgcHgtMiBweS04IHNtOnB4LThcIj5cbiAgICAgICAgICB7Y291bnRyeS5uYXRpdmVOYW1lICYmIChcbiAgICAgICAgICAgIDxDYXJkIHRpdGxlPXtgTmF0aXZlIG5hbWUgb2YgJHtjb3VudHJ5Lm5hbWV9YH0+XG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGl0bGU9XCJOYXRpdmUgTmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxTdGF0IHN0YXQ9e2NvdW50cnkubmF0aXZlTmFtZX0gLz5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtjb3VudHJ5LmNhcGl0YWwgJiYgKFxuICAgICAgICAgICAgPENhcmQgdGl0bGU9e2BDYXBpdGFsIG9mICR7Y291bnRyeS5uYW1lfWB9PlxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRpdGxlPVwiQ2FwdGlhbFwiIC8+XG4gICAgICAgICAgICAgIDxTdGF0IHN0YXQ9e2NvdW50cnkuY2FwaXRhbH0gLz5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtjb3VudHJ5LnBvcHVsYXRpb24gPyAoXG4gICAgICAgICAgICA8Q2FyZCB0aXRsZT17YFBvcHVsYXRpb24gaW4gJHtjb3VudHJ5Lm5hbWV9YH0+XG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGl0bGU9XCJQb3B1bGF0aW9uXCIgLz5cbiAgICAgICAgICAgICAgPFN0YXQgc3RhdD17bmV3IEludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KGNvdW50cnkucG9wdWxhdGlvbil9IC8+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+PC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Y291bnRyeS5sYW5ndWFnZXMgJiYgY291bnRyeS5sYW5ndWFnZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8Q2FyZCB0aXRsZT17YExhbmd1YWdlcyBzcG9rZW4gaW4gJHtjb3VudHJ5Lm5hbWV9YH0+XG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGl0bGU9XCJMYW5ndWFnZXNcIiAvPlxuICAgICAgICAgICAgICA8U3RhdFxuICAgICAgICAgICAgICAgIHN0YXQ9e2NvdW50cnkubGFuZ3VhZ2VzXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAoeyBuYW1lLCBuYXRpdmVOYW1lIH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgYCR7bmFtZX0gJHtuYXRpdmVOYW1lICE9PSBuYW1lID8gYCgke25hdGl2ZU5hbWV9KWAgOiBcIlwifWBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Y291bnRyeS5jdXJyZW5jaWVzICYmIGNvdW50cnkuY3VycmVuY2llcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxDYXJkIHRpdGxlPXtgQ3VycmVuY2llcyB2YWxpZCBpbiAke2NvdW50cnkubmFtZX1gfT5cbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0aXRsZT1cIkN1cnJlbmNpZXNcIiAvPlxuICAgICAgICAgICAgICA8U3RhdFxuICAgICAgICAgICAgICAgIHN0YXQ9e2NvdW50cnkuY3VycmVuY2llc1xuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgKHsgY29kZSwgbmFtZSwgc3ltYm9sIH0pID0+IGAke2NvZGV9IC0gJHtuYW1lfSAoJHtzeW1ib2x9KWBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Y291bnRyeS5yZWdpb24gJiYgKFxuICAgICAgICAgICAgPENhcmQgdGl0bGU9e2BSZWdpb24gJHtjb3VudHJ5Lm5hbWV9IGxpZXMgaW5gfT5cbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0aXRsZT1cIlJlZ2lvblwiIC8+XG4gICAgICAgICAgICAgIDxTdGF0IHN0YXQ9e2NvdW50cnkucmVnaW9ufSAvPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2NvdW50cnkuc3VicmVnaW9uICYmIChcbiAgICAgICAgICAgIDxDYXJkIHRpdGxlPXtgU3ViIC0gUmVnaW9uICR7Y291bnRyeS5uYW1lfSBsaWVzIGluYH0+XG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGl0bGU9XCJTdWIgLSBSZWdpb25cIiAvPlxuICAgICAgICAgICAgICA8U3RhdCBzdGF0PXtjb3VudHJ5LnN1YnJlZ2lvbn0gLz5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtjb3VudHJ5LmFsdFNwZWxsaW5ncyAmJiBjb3VudHJ5LmFsdFNwZWxsaW5ncy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxDYXJkIHRpdGxlPXtgQWx0ZXJuYXRpdmUgc3BlbGxpbmdzIG9mICR7Y291bnRyeS5uYW1lfWB9PlxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRpdGxlPVwiQWx0ZXJuYXRpdmUgU3BlbGxpbmdzXCIgLz5cbiAgICAgICAgICAgICAgPFN0YXQgc3RhdD17Y291bnRyeS5hbHRTcGVsbGluZ3Muam9pbihcIiwgXCIpfSAvPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2NvdW50cnkudGltZXpvbmVzICYmIGNvdW50cnkudGltZXpvbmVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPENhcmQgdGl0bGU9e2BUaW1lem9uZXMgaW4gJHtjb3VudHJ5Lm5hbWV9YH0+XG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGl0bGU9XCJUaW1lem9uZXNcIiAvPlxuICAgICAgICAgICAgICA8U3RhdCBzdGF0PXtjb3VudHJ5LnRpbWV6b25lcy5qb2luKFwiLCBcIil9IC8+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9TY3JlZW4+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgZnVuY3Rpb24gKCk6IFByb21pc2U8R2V0U3RhdGljUGF0aHNSZXN1bHQ+IHtcbiAgY29uc3QgY291bnRyeUNvZGVzID0gYXdhaXQgZ2V0QWxsQ291bnRyeUNvZGVzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogY291bnRyeUNvZGVzLm1hcCgoeyBhbHBoYTJDb2RlIH0pID0+ICh7XG4gICAgICBwYXJhbXM6IHsgYWxwaGEyQ29kZSB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPENvdW50cnlQYWdlUHJvcHM+ID0gYXN5bmMgKHtcbiAgcGFyYW1zLFxufSk6IFByb21pc2U8R2V0U3RhdGljUHJvcHNSZXN1bHQ8Q291bnRyeVBhZ2VQcm9wcz4+ID0+IHtcbiAgY29uc3QgY291bnRyeSA9IGF3YWl0IGdldENvdW50cnkocGFyYW1zLmFscGhhMkNvZGUudG9TdHJpbmcoKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBjb3VudHJ5IH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudHJ5UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[alpha2Code].tsx\n");

/***/ })

})