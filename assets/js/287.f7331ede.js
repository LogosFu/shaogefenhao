(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{1089:function(t,l,e){"use strict";e.r(l);var n=e(14),i=Object(n.a)({},(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("ol",[e("li",[t._v("所有表一定要设计一个主键。因为你不设主键的情况下，innodb也会帮你生成一个隐藏列，作为自增主键。")]),t._v(" "),e("li",[t._v("如果不涉及分布式系统，和未来分库分表需求，使用自增主键，否则使用 UUID。")]),t._v(" "),e("li",[t._v("主键不应该有任何业务含义。因为任何有业务含义的列都有改变的可能性,主键一旦带上了业务含义，那么主键就有可能发生变更。")]),t._v(" "),e("li",[t._v("枚举字段不使用 "),e("strong",[t._v("enum")]),t._v("  使用 tinyint 代替。避免操作陷阱，以及未来拓展方便。")]),t._v(" "),e("li",[t._v("如果货币单位是分，可以用"),e("code",[t._v("Int")]),t._v("类型，如果坚持用元，用"),e("code",[t._v("Decimal")]),t._v("。float、double 存在精度问题。")]),t._v(" "),e("li",[t._v("时间字段统一使用 datetime。 避免 timestamp 的时间范围问题，以及时区问题，datetime 使用的 8 个字节存储的空间满足开发中基本所有需求。")]),t._v(" "),e("li",[t._v("不允许使用 blob 类型，不建议使用 text 类型。mysql 在排序、关联的时候无法对改字段使用内存临时表，造成查询缓慢的问题。同时也会造成 binlog 过大，主从同步缓慢的问题。")]),t._v(" "),e("li",[t._v("可选字段定义为 "),e("strong",[t._v("NOT NULL")]),t._v("。Mysql难以优化引用可空列查询，它会使索引、索引统计和值更加复杂。可空列需要更多的存储空间，还需要mysql内部进行特殊处理。并且查询有陷阱，需要使用 is null 这种方式查询，另外 count 等聚合函数会自动忽略。")])])])}),[],!1,null,null,null);l.default=i.exports}}]);