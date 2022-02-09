(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1091:function(n,a,s){"use strict";s.r(a);var e=s(14),t=Object(e.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"测试数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试数据"}},[n._v("#")]),n._v(" 测试数据")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("SELECT * FROM `spring-boot-boilerplate`.user,department where department.id = user.department_id;CREATE TABLE `department` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',\n  `name` varchar(255) NOT NULL,\n  `pid` bigint(20) NOT NULL COMMENT 'parent department',\n  `enabled` bit(1) NOT NULL,\n  `createAt` datetime DEFAULT NULL,\n  `updateAt` datetime DEFAULT NULL,\n  PRIMARY KEY (`id`) USING BTREE\n) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;\n\nCREATE TABLE `user` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',\n  `avatar_id` bigint(20) DEFAULT NULL COMMENT '头像资源',\n  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',\n  `enabled` bit(1) DEFAULT NULL COMMENT '状态',\n  `password` varchar(255) DEFAULT NULL COMMENT '密码',\n  `username` varchar(255) DEFAULT NULL COMMENT '用户名',\n  `department_id` bigint(20) DEFAULT NULL,\n  `phone` varchar(255) DEFAULT NULL,\n  `createAt` datetime DEFAULT NULL,\n  `updateAt` datetime DEFAULT NULL,\n  PRIMARY KEY (`id`) USING BTREE,\n  UNIQUE KEY `unique_email` (`email`) USING BTREE,\n  UNIQUE KEY `unique_username` (`username`) USING BTREE\n) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br")])]),e("h2",{attrs:{id:"inner-join-和自然连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inner-join-和自然连接"}},[n._v("#")]),n._v(" inner join  和自然连接")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("SELECT * FROM `spring-boot-boilerplate`.user,department where department.id = user.department_id;\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("p",[n._v("这种是自然连接，和 join、inner join 效果一样。需要两张表都有数据，结果是两张表的集。")]),n._v(" "),e("h2",{attrs:{id:"left-join"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#left-join"}},[n._v("#")]),n._v(" left join")]),n._v(" "),e("h2",{attrs:{id:"right-join"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#right-join"}},[n._v("#")]),n._v(" right join")]),n._v(" "),e("p",[e("img",{attrs:{src:s(663),alt:""}})])])}),[],!1,null,null,null);a.default=t.exports},663:function(n,a,s){n.exports=s.p+"assets/img/diagram.dfd23ff2.png"}}]);