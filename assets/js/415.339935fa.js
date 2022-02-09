(window.webpackJsonp=window.webpackJsonp||[]).push([[415],{1243:function(v,_,l){"use strict";l.r(_);var a=l(14),t=Object(a.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("ul",[l("li",[l("p",[v._v("文体：议论文")])]),v._v(" "),l("li",[l("p",[v._v("解决的问题：反思软件设计过程中的问题")])]),v._v(" "),l("li",[l("p",[v._v("提纲")]),v._v(" "),l("ul",[l("li",[v._v("能用软件大于牛×的软件")]),v._v(" "),l("li",[v._v("统一业务模型")]),v._v(" "),l("li",[v._v("设计大于编码")]),v._v(" "),l("li",[v._v("保持简单")]),v._v(" "),l("li",[v._v("统一语言")]),v._v(" "),l("li",[v._v("聚焦核心域")]),v._v(" "),l("li",[v._v("各司其职")]),v._v(" "),l("li",[v._v("少即是多")]),v._v(" "),l("li",[v._v("保持克制")])])]),v._v(" "),l("li",[l("p",[v._v("保持敬畏")])])]),v._v(" "),l("hr"),v._v(" "),l("p",[v._v("有人说，程序员不是在代码屎山上，就是在前往屎山的路上。作为码农经历过大多数程序员相似的悲哀：")]),v._v(" "),l("ul",[l("li",[v._v("需求永无止境，永远在救火，成为了一名出色的救火队员")]),v._v(" "),l("li",[v._v("填着前人的坑，同时挖着自己的坑，骂着前面的人 SB，也知道会被后面的人骂 SB")]),v._v(" "),l("li",[v._v("明知道做出来的软件没什么用户使用，也要把功能写完，犹如西西弗斯的石头")])]),v._v(" "),l("p",[v._v("软件设计者和程序员有着截然不同的视角，不幸的是在我的职业生涯中参与的大部分软件产品都不算成功，也算是一些教训：")]),v._v(" "),l("h2",{attrs:{id:"能用软件大于牛×的软件"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#能用软件大于牛×的软件"}},[v._v("#")]),v._v(" 能用软件大于牛×的软件")]),v._v(" "),l("p",[v._v("每一个有追求的程序员都曾经做过写出惊世骇俗软件梦，用着厉害的技术，有着最完美的设计，以及最优雅的代码。")]),v._v(" "),l("p",[v._v("我写过 C++、PHP、Nodejs、前端和 Java。虽然出活儿最快的时候是使用 PHP 的日子，但不免处于鄙视链的最低端。当我们想要构建 win32 的桌面程序时，第一个想到的 C++ 这种厉害的技术。在 MFC 的折磨下软件非常不稳定且效率很低，转向了 C# 才做出了第一个可以使用的版本。")]),v._v(" "),l("p",[v._v("我待过一个 ”吓人“ 的项目组，用着最流行的技术，做着吓人支付平台和智能物流项目，最终结局也很吓人。")]),v._v(" "),l("p",[v._v("久而久之，每次听到中台、事件硕源、整洁架构、函数式编程这些高大上的词汇一起出现时，不是敬仰而是警觉。当一个陌生的小众语言和一套高大上的架构模式一起出现在一个项目上时，这个项目意味着危机四伏。")]),v._v(" "),l("h2",{attrs:{id:"统一的业务模型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#统一的业务模型"}},[v._v("#")]),v._v(" 统一的业务模型")]),v._v(" "),l("p",[v._v("”来了一个厉害的产品经理，用得一手 axure 出神入化 “ 。（axure 是一种绘制原型图的工具）\n在一个创业团队，老板花了大价钱招了一个大厂的产品经理，高兴的手舞足蹈。开发人员对此并没有多感冒，他们深知找到一个能把业务研究透彻的产品经理有多难。")]),v._v(" "),l("p",[v._v("在职业生涯中，有经验的程序员见过各种产品经理。我说两个典型的例子：")]),v._v(" "),l("p",[v._v("有一个产品经理把原型图绘制的非常精细，醉心于交互逻辑的优化的产品经理。在我写前端代码时候，甚至坐到我旁边告诉我这个弹窗如何设计才足够优雅，应该使用哪种非线性动画。我们的应用场景中，客户端被允许离线使用，但是网络恢复后上报数据可能存在冲突。我告诉他分布式系统必须做出取舍，但他认为这是团队技术不行无法满足他天才的创意。这和通过手机壳颜色更换系统主题的需求一样荒谬。")]),v._v(" "),l("p",[v._v("另外一个产品经理会和团队通过黑板讨论，有时候甚至只是通过 A4 纸绘制交互图，但是会把整个系统的逻辑形成闭环，在程序员实现时如果遇到困难还会做一些交互上的调整。")]),v._v(" "),l("p",[v._v("逻辑上自洽的业务模型比繁复精美的交互设计重要得多，没有统一的业务模型会导致需求像一块块无法完成的拼图一样，永远凌乱不堪。模型是一个很模糊的词汇，实际工作中我们曾使用过一个简单的结构表达业务模型：")]),v._v(" "),l("ul",[l("li",[v._v("角色。有哪些类型的用户使用我们的系统，交互内在逻辑不一样才被认为是一种角色，而不仅仅是权限的多少。")]),v._v(" "),l("li",[v._v("用例。某个角色能完成那些操作，一个用例的前提是特定的角色的行为。角色 + 操作 = 用例，用例会对系统状态造成改变。")]),v._v(" "),l("li",[v._v("流程。流程是指的角色和用例粒度下的事件序列，比如下单会发生那些事件，这些事件的序列是什么，可以用流程图来表达。")])]),v._v(" "),l("h2",{attrs:{id:"设计大于编码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#设计大于编码"}},[v._v("#")]),v._v(" 设计大于编码")]),v._v(" "),l("p",[v._v("编程的本质是对现实世界的建模，软件是现实在计算机世界中的投影。我喜欢把编程领域的人分为三类：")]),v._v(" "),l("ol",[l("li",[v._v("极客。关注于编码实现，研究的是怎么样高效的实现需求，喜欢研究各种语言和各种工程上的奇巧淫技。")]),v._v(" "),l("li",[v._v("计算机科学爱好者。关注于计算机科学，喜欢计算机领域基础的东西，算法、编译器、操作系统、计算机网络等。")]),v._v(" "),l("li",[v._v("软件工程师。专注于设计软件，匹配业务需要，喜欢架构和软件建模。对于需求的到来能拿捏的准，那些需求会对系统造成破坏，做出取舍。")])]),v._v(" "),l("p",[v._v("在软件团队中老板最喜欢软件工程师一类，最不喜欢极客，他们往往有着高级的头衔和影响力，但是玩起来技术来不顾项目的死活。如果一个项目被极客绑架，那么大概率死的非常优雅。")]),v._v(" "),l("h2",{attrs:{id:"保持简单"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#保持简单"}},[v._v("#")]),v._v(" 保持简单")]),v._v(" "),l("p",[v._v("把事情搞复杂的很容易，但是把事情变简单是一件很难得事情，毕竟万物不变是熵增。")]),v._v(" "),l("p",[v._v("当一个项目使用了多种编程语言、模式和新技术时，对于新人上手理解是非常困难的，这种困难直接导致生产效率降低。一个项目的简单性体现在几个方面：")]),v._v(" "),l("ul",[l("li",[v._v("新人上手的难度，能否快速容易的了解一个项目然后投入开发。")]),v._v(" "),l("li",[v._v("添加一个新功能的步骤，能否在尽量少的情况下添加一个功能。我见到的一个反模式是添加一个功能需求修改多层代码、文档、每个环境的数据库、配置中心、代码评审，添加一个新功能的成本极高。")]),v._v(" "),l("li",[v._v("部署的难度，能否快速搭建一套新的环境，并快速部署。这意味着基础设施足够简单，如果发生基础设施替换的需要，能快速完成。")])]),v._v(" "),l("p",[v._v("保持简单的关键在于，不要引入当前的不需要的技术：")]),v._v(" "),l("ul",[l("li",[v._v("微服务对于小项目来说意义不大，但是会带来分布式系统的复杂问题。")]),v._v(" "),l("li",[v._v("没有多产品的情况下，单点登录意义并不大。")]),v._v(" "),l("li",[v._v("用户量不大的情况下，监控、扩容等运维能力需求并不高。")]),v._v(" "),l("li",[v._v("不引入难以理解的设计模式，追求过度的 ”优雅“")]),v._v(" "),l("li",[v._v("不引入潮流的技术，比如 GraphQL 等性价比低的技术")])]),v._v(" "),l("p",[v._v("保持简单可以降低开发、运维成本，查理芒格说过保持简单是他投资的一种理念，我想对于项目管理来说也是一样。")]),v._v(" "),l("blockquote",[l("p",[v._v("凡事往简单处想,往认真处行。 -- 查理芒格")])]),v._v(" "),l("h2",{attrs:{id:"统一语言"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#统一语言"}},[v._v("#")]),v._v(" 统一语言")]),v._v(" "),l("p",[v._v("软件开发过程中伴随着无休无止的争吵，尤其是一些典型意义的名词，这些名词意味着领域模型。")]),v._v(" "),l("p",[v._v("《领域驱动一书》将统一语言放到了第一章，强调了统一语言的重要性。语言的不统给业务方和开发者之间的交流，带来了巨大的鸿沟。")]),v._v(" "),l("p",[v._v("巴别塔是《圣经·旧约·创世记》中的神话，描述了人类联合起来兴建希望能通往天堂的高塔。为了阻止人类的计划，上帝让人类说不同的语言，使人类相互之间不能沟通，计划因此失败，人类自此各散东西。")]),v._v(" "),l("p",[v._v("人类非常喜欢制造术语，产品经理、开发人员的专业话术每年都在变化，麻烦的地方在于有可能相同的名词有不同的定义。")]),v._v(" "),l("p",[v._v("商品和产品、订单和账单、组织和租户，这些些概念上很微妙的术语非常用于让人争吵。这个问题没有解决办法，毕竟人类对于名词的争议是自古以来的传统，无论是从西方的泰勒斯和东方的公孙龙开始，已经争论了几千年了。")]),v._v(" "),l("p",[v._v("制订一套常用的术语规范，在组织内部达成一致还是很必要的。移动公司有一套集团术语规范，华为这种体量的公司也是天天把拉通、对齐挂在嘴边。")]),v._v(" "),l("h2",{attrs:{id:"聚焦核心域"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#聚焦核心域"}},[v._v("#")]),v._v(" 聚焦核心域")]),v._v(" "),l("p",[v._v("领域驱动设计中，聚焦核心域是一件非常重要的事情。")]),v._v(" "),l("p",[v._v("创业团队犯过的一个普遍毛病就是失去了焦点，待过两个类似的项目：")]),v._v(" "),l("ol",[l("li",[v._v("在一家公司做收银软件，后来客户提到有货品、财务管理的需求。产品经理立马开足马力，设计了一套 ERP 系统，投入了一半的人力进行开发。收银软件和 ERP 差距非常大，领域知识也完全不同，开发成熟的难度非常大，最终导致失败。")]),v._v(" "),l("li",[v._v("一家传统公司的电商部门，本来做了一个电商系统，领导觉得电商系统都需要有支付系统，这里的支付指的类似于支付宝这样的支付平台。慢慢的资源从电商倾斜到支付，导致电商系统支持粒度大大降低。")])]),v._v(" "),l("p",[v._v("领域驱动设计将待分析的业务问题分为三类：")]),v._v(" "),l("ol",[l("li",[v._v("核心域。直接解决用户痛点，赖以生存的产品，具有优势竞争的内容。")]),v._v(" "),l("li",[v._v("支撑域。用来辅助支撑核心域，很重要但是不如核心域，无法直接产生市场价值，例如单点登录。")]),v._v(" "),l("li",[v._v("通用域。能在市场上购买到的通用技术组件，比如短信通道、活体检测等。")])]),v._v(" "),l("p",[v._v("聚焦核心域才能将优势兵力聚焦，形成局部优势。")]),v._v(" "),l("blockquote",[l("p",[v._v("聋者善视,瞎者善听,绝利一源,用师十倍。 --《阴符经》")])]),v._v(" "),l("h2",{attrs:{id:"各司其职"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#各司其职"}},[v._v("#")]),v._v(" 各司其职")]),v._v(" "),l("p",[v._v("两个产品经理或两个技术总监同时存在时，事情会变得极其微妙。")]),v._v(" "),l("p",[v._v("老是听见吵架的人互相说对方没有逻辑，指责对方诡辩，谁也不服谁。有意思的是往往两个厉害的人合起来做事产出不一定好，还不如单独完成的任务。原因是软件开发要求人的思维具备系统性，而每个人的思维方式不同，往往难以合到一起。")]),v._v(" "),l("p",[v._v("如果用几何比喻思维模型，有些人是三角形、有些人是方形、有些人是圆形。这些形状都没法拿来拼成一块完整的图像。")]),v._v(" "),l("p",[v._v("关键的角色往往只需要一个，责任和权利融于一身。当关键的角色出现多个时，就会陷入无休止的权利斗争和甩锅行为。对于软件开发来说：")]),v._v(" "),l("ul",[l("li",[v._v("一个产品经理或者 BA 负责业务的模型的建立")]),v._v(" "),l("li",[v._v("一个技术经理负责技术的架构和决策")]),v._v(" "),l("li",[v._v("一个设计经理，负责设计系统的建立，保持设计交互的一致性")])]),v._v(" "),l("h2",{attrs:{id:"少即是多"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#少即是多"}},[v._v("#")]),v._v(" 少即是多")]),v._v(" "),l("p",[v._v("当一个项目出现为危机时，需要的不是加人，加人会造成项目管理环境继续恶化。《人月神话》中说过：")]),v._v(" "),l("ul",[l("li",[v._v("由于次序上的限制,任务无法分解时,人手的添加对进度没有帮助。")]),v._v(" "),l("li",[v._v("不管多少个母亲,孕育一个生命都需要10个月。")]),v._v(" "),l("li",[v._v("对于任务可以分解，但子任务之间需要沟通和交流的任务，必须在计划中考虑沟通的工作量。")])]),v._v(" "),l("p",[v._v("人少好沟通，船小好调头。这也是创业公司更多的是特种小队作战，而非大兵团的策略。对于创业公司来说，只需要少量靠谱的人即可。你。虽然经常把软件开发比喻成搬砖，但是这个类比并不恰当。一个优秀程序员的产出数倍于一般的程序员，而且并不包括一些隐含的产出和影响。")]),v._v(" "),l("h2",{attrs:{id:"保持克制"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#保持克制"}},[v._v("#")]),v._v(" 保持克制")]),v._v(" "),l("p",[v._v("克制是软件工程师的美德。克制表现在几个方面：")]),v._v(" "),l("ul",[l("li",[v._v("需求上克制，不过度交互，造成业务极其复杂")]),v._v(" "),l("li",[v._v("技术选型上克制，使用成熟的技术，而非盲目追新")]),v._v(" "),l("li",[v._v("设计上克制，不过度设使用设计模式，为新人带来理解上的困难")])]),v._v(" "),l("p",[v._v("最可怕的是 “软件架构原教旨主义者”。分层是为了隔离差异，如果没有差异不需要分层。任何技术都是手段，而非目的。")]),v._v(" "),l("p",[v._v("一个普通项目有 4 - 5 层样板代码，标准的 DDD 架构，这种项目几乎无法阅读。")]),v._v(" "),l("ul",[l("li",[v._v("整洁代码原教旨主义者，")]),v._v(" "),l("li",[v._v("DDD 原教旨主义者，不正确的充血模型真的有问题。")]),v._v(" "),l("li",[v._v("Restful 原")]),v._v(" "),l("li",[v._v("面向对象/函数式编程原教旨主义者")]),v._v(" "),l("li",[v._v("Redux 原教旨主义者")])]),v._v(" "),l("p",[v._v("技术教徒是一个可怕的群体，编程界的毕达哥拉斯学派，毕达哥拉斯学派看不惯别人的做法就把别人扔海里。")]),v._v(" "),l("h2",{attrs:{id:"保持敬畏"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#保持敬畏"}},[v._v("#")]),v._v(" 保持敬畏")]),v._v(" "),l("p",[v._v('"这个很简单，都能做，没啥问题"。')]),v._v(" "),l("p",[v._v("刘慈欣在 《三体》中有一句名言，“生存的最大障碍不是弱小和无知,而是傲慢”。在软件团队中，如果出现了对什么都觉得很简单的成员，大概率不是遇到了天才，而是碰到了愣头青。")]),v._v(" "),l("p",[v._v("我们都有过这种错觉，产品经理说想加一个小功能，实际上会折腾到翻天覆地。需求往往是一个冰山，大头在需求背后的东西。产生这种想法的本质原因是没有意识到 demo 和产品之间的巨大鸿沟。")]),v._v(" "),l("p",[v._v("曾经和同事讨论过一个通过配置下发来操控客户端行为的需求，客户觉得很简单预计 3 天搞定。吓得我不敢说话，当我们继续分析时，发现需要考虑的问题还很多：")]),v._v(" "),l("ul",[l("li",[v._v("是否需要一个控制界面交给管理员使用，并纳入权限体系？")]),v._v(" "),l("li",[v._v("是否需要审计？")]),v._v(" "),l("li",[v._v("配置下发后如何保证下发成功？")]),v._v(" "),l("li",[v._v("是否需要上报当前客户端的配置状态？")]),v._v(" "),l("li",[v._v("传输是否需要加密和鉴权？")])]),v._v(" "),l("p",[v._v("另外一种情况是对系统整体没有概念，往往一个需求进来会破坏系统的整体性。因此，一个会合理拒绝产品经历的开发者才是真正负责人的开发者，而不是接下来，一次一次补锅。")]),v._v(" "),l("h2",{attrs:{id:"写在最后"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[v._v("#")]),v._v(" 写在最后")]),v._v(" "),l("p",[v._v("计算机科学、软件设计、编码，这是三个完全不同的维度。对大部分团队来说，计算机科学已经被开源框架、库承包了，编码是每一个程序员最基本的能力，而软件设计能力最难验证。")]),v._v(" "),l("p",[v._v("软件设计能力的缺失，让一家家软件公司变成了软件作坊，代码变成一个大泥球。不得不找更聪明的程序员来解决它，但是这些复杂性对经验的提升并没有多少帮助，每天困在别人挖的坑和自己挖的坑中无法自拔。")]),v._v(" "),l("p",[v._v("而尤其是那些酷爱新技术，对设计模式误入歧途的人挖出来的坑尤其复杂难解，忘记了所有的技术都只是手段，而非目的。")])])}),[],!1,null,null,null);_.default=t.exports}}]);