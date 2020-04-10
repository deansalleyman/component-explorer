(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1003:function(module,exports,__webpack_require__){var map={"./1-Button.stories.js":1004,"./2-Example.stories.js":1019,"./3-Header.stories.js":1028,"./4-HomePage.stories.js":1029};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1003},1004:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"text",(function(){return text})),__webpack_require__.d(__webpack_exports__,"emoji",(function(){return emoji}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(56),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(187);__webpack_exports__.default={title:"Button",info:{text:"\n          description or documentation about my component, supports markdown\n\n          ~~~js\n          <Button>Click Here</Button>\n          ~~~\n        "}};var text=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},"Hello Button")};text.displayName="text";var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"),emoji=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},_ref)};emoji.displayName="emoji",text.__docgenInfo={description:"",methods:[],displayName:"text"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/1-Button.stories.js"]={name:"text",docgenInfo:text.__docgenInfo,path:"src/stories/1-Button.stories.js"}),emoji.__docgenInfo={description:"",methods:[],displayName:"emoji"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/1-Button.stories.js"]={name:"emoji",docgenInfo:emoji.__docgenInfo,path:"src/stories/1-Button.stories.js"})},1019:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"standard",(function(){return standard})),__webpack_require__.d(__webpack_exports__,"darkView",(function(){return darkView})),__webpack_require__.d(__webpack_exports__,"startTen",(function(){return startTen})),__webpack_require__.d(__webpack_exports__,"extraText",(function(){return extraText})),__webpack_require__.d(__webpack_exports__,"changeStyling",(function(){return changeStyling}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(56),_components_example__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(90),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(41);__webpack_exports__.default={title:"Example",decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs]};var standard=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_example__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked"),styles:{backgroundColor:"#33ACFF",padding:"10px"}})};standard.displayName="standard";var darkView=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_example__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked"),styles:{backgroundColor:"#2B376D",color:"#FFFFFF",padding:"10px"}})};darkView.displayName="darkView";var startTen=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_example__WEBPACK_IMPORTED_MODULE_2__.a,{start:10,styles:{backgroundColor:"#33ACFF",padding:"10px"}})};startTen.displayName="startTen";var extraText=function(){var buttonValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Button text","Click me with extra long copy","PANASKY");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_example__WEBPACK_IMPORTED_MODULE_2__.a,{buttonText:buttonValue,styles:{backgroundColor:"#33ACFF",padding:"10px"}})};extraText.displayName="extraText";var changeStyling=function(){var backgroundColor=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("Color","#33ACFF","PANASKY"),padding=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Padding",10);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_example__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked"),styles:{backgroundColor:backgroundColor,padding:"".concat(padding,"px")}})};changeStyling.displayName="changeStyling",standard.__docgenInfo={description:"",methods:[],displayName:"standard"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/2-Example.stories.js"]={name:"standard",docgenInfo:standard.__docgenInfo,path:"src/stories/2-Example.stories.js"}),darkView.__docgenInfo={description:"",methods:[],displayName:"darkView"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/2-Example.stories.js"]={name:"darkView",docgenInfo:darkView.__docgenInfo,path:"src/stories/2-Example.stories.js"}),startTen.__docgenInfo={description:"",methods:[],displayName:"startTen"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/2-Example.stories.js"]={name:"startTen",docgenInfo:startTen.__docgenInfo,path:"src/stories/2-Example.stories.js"}),extraText.__docgenInfo={description:"",methods:[],displayName:"extraText"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/2-Example.stories.js"]={name:"extraText",docgenInfo:extraText.__docgenInfo,path:"src/stories/2-Example.stories.js"}),changeStyling.__docgenInfo={description:"",methods:[],displayName:"changeStyling"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/2-Example.stories.js"]={name:"changeStyling",docgenInfo:changeStyling.__docgenInfo,path:"src/stories/2-Example.stories.js"})},1028:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"standard",(function(){return standard})),__webpack_require__.d(__webpack_exports__,"LightHeader",(function(){return LightHeader})),__webpack_require__.d(__webpack_exports__,"ChangeLogo",(function(){return ChangeLogo}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_components_header__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(56),__webpack_require__(116)),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(41),_assets_images_Logo_Default_png__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(142),_assets_images_Logo_Default_png__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_assets_images_Logo_Default_png__WEBPACK_IMPORTED_MODULE_4__),_assets_images_default_logo_6_png__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(444),_assets_images_default_logo_6_png__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_assets_images_default_logo_6_png__WEBPACK_IMPORTED_MODULE_5__);__webpack_exports__.default={title:"Header",decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs]};var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__.a,{image:_assets_images_Logo_Default_png__WEBPACK_IMPORTED_MODULE_4___default.a}),standard=function(){return _ref};standard.displayName="standard";var _ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__.a,{image:_assets_images_default_logo_6_png__WEBPACK_IMPORTED_MODULE_5___default.a}),LightHeader=function(){return _ref2};LightHeader.displayName="LightHeader";var ChangeLogo=function(){var value=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.files)("Images",".xlsx, .pdf, .png, .jpg",_assets_images_Logo_Default_png__WEBPACK_IMPORTED_MODULE_4___default.a,"GROUP-ID1");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__.a,{image:value})};ChangeLogo.displayName="ChangeLogo",standard.__docgenInfo={description:"",methods:[],displayName:"standard"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/3-Header.stories.js"]={name:"standard",docgenInfo:standard.__docgenInfo,path:"src/stories/3-Header.stories.js"}),LightHeader.__docgenInfo={description:"",methods:[],displayName:"LightHeader"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/3-Header.stories.js"]={name:"LightHeader",docgenInfo:LightHeader.__docgenInfo,path:"src/stories/3-Header.stories.js"}),ChangeLogo.__docgenInfo={description:"",methods:[],displayName:"ChangeLogo"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/3-Header.stories.js"]={name:"ChangeLogo",docgenInfo:ChangeLogo.__docgenInfo,path:"src/stories/3-Header.stories.js"})},1029:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"standard",(function(){return standard}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(56),_components_example__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(90),_components_header__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(116),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(187),__webpack_require__(41)),_assets_images_Logo_Default_png__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(142),_assets_images_Logo_Default_png__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_assets_images_Logo_Default_png__WEBPACK_IMPORTED_MODULE_6__);__webpack_require__(33);__webpack_exports__.default={title:"Home Page",decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.withKnobs]};var standard=function(){var backgroundColor=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.color)("Color","#33ACFF","PANASKY"),padding=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.number)("Padding",10),buttonValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("Button text","Accounts","PANASKY"),titleValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("Home Page","Home Page","PANASKY"),headerLogo=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.files)("Logo Image",".xlsx, .pdf, .png, .jpg",_assets_images_Logo_Default_png__WEBPACK_IMPORTED_MODULE_6___default.a,"PANASKY"),backgroundStyling=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.object)("Background styling",{backgroundColor:"#CCCCCC",padding:"10px"},"PANASKY");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"App",style:backgroundStyling},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header",{className:"App-header"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__.a,{image:headerLogo}),titleValue),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:"main"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_example__WEBPACK_IMPORTED_MODULE_2__.a,{buttonText:buttonValue,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked"),styles:{backgroundColor:backgroundColor,padding:"".concat(padding,"px")}})))};standard.displayName="standard",standard.__docgenInfo={description:"",methods:[],displayName:"standard"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/4-HomePage.stories.js"]={name:"standard",docgenInfo:standard.__docgenInfo,path:"src/stories/4-HomePage.stories.js"})},116:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0);var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(56),_emotion_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(33);var _ref={name:"fatd6e-Header",styles:"height:100px;width:100px;;label:Header;"},_ref2={name:"fatd6e-Header",styles:"height:100px;width:100px;;label:Header;"};function Header(props){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked"),css:_ref},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{css:_ref2,src:props.image,alt:""}))}Header.displayName="Header",Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{image:{type:{name:"any"},required:!1,description:"Image encoded via webpack in data base 64 format"}}},__webpack_exports__.a=Header,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/header.js"]={name:"Header",docgenInfo:Header.__docgenInfo,path:"src/components/header.js"})},142:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Logo-Default.84f34a35.png"},444:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/default-logo_6.d57cd61b.png"},447:function(module,exports,__webpack_require__){__webpack_require__(448),__webpack_require__(639),module.exports=__webpack_require__(640)},466:function(module,exports){},640:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(642);var _storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(253),storybook_addon_rtl__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(442);Object(storybook_addon_rtl__WEBPACK_IMPORTED_MODULE_2__.initializeRTL)();var withPropsTable=__webpack_require__(986).withPropsTable;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(withPropsTable),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(__webpack_require__(1003),module)}.call(this,__webpack_require__(641)(module))},646:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":342,"./nestedObjectAssign.js":342};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=646},90:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_deansalleyman_server_panasonic_react_component_explorer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(445),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_emotion_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(33);var _ref={name:"1cxty4q-Example",styles:"width:810px;;label:Example;"};function Example(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.start||0),_useState2=Object(_Users_deansalleyman_server_panasonic_react_component_explorer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),count=_useState2[0],setCount=_useState2[1];return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){document.title="You clicked ".concat(count," times")})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{css:props.styles||{}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",null,"You clicked ",count," times"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:function onClick(){return setCount(count+1)},css:_ref},props.buttonText||"Click me"))}Example.displayName="Example",Example.__docgenInfo={description:"",methods:[],displayName:"Example",props:{count:{type:{name:"number"},required:!1,description:"Initial start counter"},styles:{type:{name:"object"},required:!1,description:"CSS Style object"},buttonText:{type:{name:"string"},required:!1,description:"Button Text"}}},__webpack_exports__.a=Example,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/example.js"]={name:"Example",docgenInfo:Example.__docgenInfo,path:"src/components/example.js"})}},[[447,1,2]]]);
//# sourceMappingURL=main.97731c4e981ce1ecba49.bundle.js.map