(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{1222:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"一个测试基类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一个测试基类"}},[s._v("#")]),s._v(" 一个测试基类")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('@RunWith(SpringRunner.class)\n@ActiveProfiles(profiles = "test")\n@DataJpaTest\npublic abstract class BusinessBaseTest {\n\n    @Autowired\n    private Flyway flyway;\n\n    @Before\n    public void setUp() throws Exception {\n        flyway.clean();\n        flyway.migrate();\n    }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h2",{attrs:{id:"一些有用的注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些有用的注解"}},[s._v("#")]),s._v(" 一些有用的注解")]),s._v(" "),t("h3",{attrs:{id:"runwith-springrunner-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runwith-springrunner-class"}},[s._v("#")]),s._v(" RunWith(SpringRunner.class)")]),s._v(" "),t("p",[s._v("SpringRunner 启动了 Spring 上下文环境，但是没有启动 Spring boot 相关自动配置。")]),s._v(" "),t("h3",{attrs:{id:"datajpatest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#datajpatest"}},[s._v("#")]),s._v(" @DataJpaTest")]),s._v(" "),t("p",[s._v("自动配数据源相关的配置。")])])}),[],!1,null,null,null);a.default=e.exports}}]);