(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{1090:function(a,t,e){"use strict";e.r(t);var n=e(14),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"mysql-建表的一些细节"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-建表的一些细节"}},[a._v("#")]),a._v(" MySQL 建表的一些细节")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("CREATE TABLE `role`  (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',\n  `readable_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '可读名称',\n  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '名称',\n  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',\n  `create_at` datetime NULL DEFAULT NULL,\n  `update_at` datetime NULL DEFAULT NULL,\n  PRIMARY KEY (`id`) USING BTREE\n) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("ul",[e("li",[a._v("ENGINE 使用 InnoDB")]),a._v(" "),e("li",[a._v("ROW_FORMAT，Compact行记录是在MySQL 5.0时被引入的，其设计目标是能高效存放数据。简单来说，如果一个页中存放的行数据越多，其性能就越高。")]),a._v(" "),e("li",[a._v("CHARACTER SET 为 utf8")]),a._v(" "),e("li",[a._v("COLLATE 排序使用 utf8_general_ci")])])])}),[],!1,null,null,null);t.default=s.exports}}]);