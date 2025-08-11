(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/Testing/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ServicePage = ()=>{
    _s();
    const [animate, setAnimate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containers = [
        {
            id: 1,
            title: 'App Development',
            content: 'This is the full content of container 1',
            bg: "violet-800",
            text: "white",
            src: "/serviceImg1.png"
        },
        {
            id: 2,
            title: 'Website Development',
            content: 'This is the full content of container 2',
            bg: "amber-50",
            text: "black",
            src: "/serviceImg2.png"
        },
        {
            id: 3,
            title: 'UI/UX Design',
            content: 'This is the full content of container 3 This is the full content of container 3',
            bg: "blue-200",
            text: "black",
            src: "/serviceImg3.png"
        },
        {
            id: 4,
            title: 'Digital Marketing',
            content: 'This is the full content of container 4',
            bg: "salmon-500",
            text: "white",
            src: "/serviceImg4.png"
        },
        {
            id: 5,
            title: 'GPS Tracking',
            content: 'This is the full content of container 5',
            bg: "blue-900",
            text: "white",
            src: "/serviceImg5.png"
        }
    ];
    const bgColors = {
        "violet-800": "bg-violet-900",
        "amber-50": "bg-amber-50",
        "blue-200": "bg-blue-300",
        "salmon-500": "bg-orange-400",
        "blue-900": "bg-blue-900"
    };
    const textColors = {
        white: "text-white",
        black: "text-black"
    };
    const imagePaths = [
        '/serviceimg1.jpg',
        '/serviceimg2.jpg',
        '/serviceimg3.jpg',
        '/serviceimg4.jpg',
        '/serviceimg5.jpg'
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServicePage.useEffect": ()=>{
            const timer = setTimeout({
                "ServicePage.useEffect.timer": ()=>{
                    setAnimate(true);
                }
            }["ServicePage.useEffect.timer"], 100); // Delay for 100ms before starting the animation
            return ({
                "ServicePage.useEffect": ()=>clearTimeout(timer)
            })["ServicePage.useEffect"]; // Cleanup the timer on unmount
        }
    }["ServicePage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen overflow-hidden w-full ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-1/4  flex flex-col justify-center items-center overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-5xl font-bold text-blue-700 mb-2 transform transition-transform duration-1000 ".concat(animate ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"),
                            children: "Services"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Testing/page.js",
                            lineNumber: 42,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-5xl font-bold text-black-600 transform transition-transform duration-1000 delay-300 ".concat(animate ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"),
                            children: "We Provide"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Testing/page.js",
                            lineNumber: 46,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Testing/page.js",
                    lineNumber: 41,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " h-3/4 bg-blue-900 ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full    ",
                        children: containers.map((container, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex overflow-hidden transition-all duration-300     ".concat(index < 4 ? 'h-16 hover:h-38 cursor-pointer' : 'h-38'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: " p-2 w-2/3 ".concat(textColors[container.text], " ").concat(bgColors[container.bg]),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 font-bold text-xl  ",
                                                    children: container.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Testing/page.js",
                                                    lineNumber: 64,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-3 pb-3 ",
                                                    children: container.content
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Testing/page.js",
                                                    lineNumber: 66,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Testing/page.js",
                                            lineNumber: 63,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Testing/page.js",
                                        lineNumber: 62,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1/3 overflow-hidden ".concat(textColors[container.text], " ").concat(bgColors[container.bg], "  p-4"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full h-30 transition-all duration-300 group-hover:h-69  ",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: container.src,
                                                alt: "Example",
                                                fill: true,
                                                className: "object-contain "
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Testing/page.js",
                                                lineNumber: 73,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Testing/page.js",
                                            lineNumber: 72,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Testing/page.js",
                                        lineNumber: 71,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, container.id, true, {
                                fileName: "[project]/src/app/Testing/page.js",
                                lineNumber: 55,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/Testing/page.js",
                        lineNumber: 53,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/Testing/page.js",
                    lineNumber: 52,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Testing/page.js",
            lineNumber: 40,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_s(ServicePage, "z07FJ1oDfa7+qdGd0fWFFN4Jr94=");
_c = ServicePage;
const __TURBOPACK__default__export__ = ServicePage;
var _c;
__turbopack_context__.k.register(_c, "ServicePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_Testing_page_a94c260b.js.map