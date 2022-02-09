(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1282:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_01-问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01-问题"}},[s._v("#")]),s._v(" 01 问题")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("有个问题：\n一个系统为不同用户群体提供服务，并区分了不同的端。\n例如：\n1 在线课堂系统分老师用户，学生用户，对应了老师端，学生端。\n2 医疗系统分医生用户，患者用户，对应了医生端，患者端。\n\n如果这类系统有且只有一个用户中心，提供用户信息。一个用户可以登陆不同的端。\n比如一个医生既可以以医生的身份登录医生端，也可以以患者的身份登录患者端。\n在具体业务中保存用户id的时候该如何存储呢。如果只存一个简单的用户id，如何区分这个数据归属谁呢。\n比如有一个订单服务，医生可以在医生端下单买一些医用辅助用品，患者可以买药品。buyer字段如果是用户id，就无法区分同一个用户在不同身份下的订单。如果想做同一个用户不同身份数据的逻辑隔离一般怎么处理的？\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"_02-分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02-分析"}},[s._v("#")]),s._v(" 02 分析")]),s._v(" "),n("p",[s._v("该问题的矛盾:")]),s._v(" "),n("blockquote",[n("p",[s._v("系统追求统一的数据复用（用户）和用户身份差异难以被统一之间的矛盾。")])]),s._v(" "),n("p",[s._v("使用应用和服务分离的思路进行处理：")]),s._v(" "),n("ol",[n("li",[s._v("将用户和身份分离，用户指能在系统中登录的凭证，由用户上下文提供；不同的身份在不同的上下文中出现（医患、师生）")]),s._v(" "),n("li",[s._v("这种场景非常多间，常见一些大的企业有多种业务线希望统一用户中心，那么只需要提供通用的用户中心，然后将各个场景设计为应用即可")])]),s._v(" "),n("p",[s._v("恰当的比喻就是一个人有身份证，作为国家公民，有公安系统统一维护，关键的属性很少，只有身份证号码、姓名、性别等有限的信息。当该公民需要使用身份证去上学、就医时，会通过身份证绑定学生证、就医卡等应用信息。")]),s._v(" "),n("h2",{attrs:{id:"_03-方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_03-方案"}},[s._v("#")]),s._v(" 03 方案")]),s._v(" "),n("p",[s._v("参考的方案如下（由于背景信息有限仅供参考，由阎华老师提供）：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(833),alt:"阎华老师提供"}})])])}),[],!1,null,null,null);a.default=e.exports},833:function(s,a,t){s.exports=t.p+"assets/img/image-20211118155025835.89233c2f.png"}}]);