(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{1109:function(v,_,p){"use strict";p.r(_);var t=p(14),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,p=v._self._c||_;return p("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[p("p",[v._v("在ThoughWorks有一句流传甚广的话 —— “在ThoughtWorks需要有拥抱随时准备变化的心态“，因为我们践行敏捷、我们有各种各样的客户，而商机稍纵即逝。作为普通的developer来讲，最明显的感受是不会像其他互联网公司一样长期待在一个项目，有足够的时间了解项目的上下文和背景。我们的项目周期足够短，甚至有时候几周都算很正常，项目的频繁切换对developer的要求就是需要快速了解一个新的项目。")]),v._v(" "),p("p",[v._v("这是我在ThoughtWorks几年间一直思考的一个问题，借博客大赛把我的一些想法发出来，这篇文章主要写给公司的新同学，另外权当抛砖引玉，欢迎进一步讨论。")]),v._v(" "),p("p",[p("strong",[v._v("了解团队")])]),v._v(" "),p("p",[v._v("工作之前觉得项目上的”事“应该更重要，随着工作的时间越长，越能体会”人“对项目成功的决定作用更大。虽然有时候我们调侃某某项目坑“还是”不坑“，但是实际上了项目才知道，一个项目”坑“还是”不坑“取决于谁来做这个项目，因此我把这段放到了最前面。")]),v._v(" "),p("p",[v._v("站会应该是第一次接触到团队几乎所有人，在第一次站会的时候就应该去了解团队里面的所有的角色，以便在后面的工作中找到合适的人去开卡、desk check、关卡，需要注意不是所有的项目都有“全明星阵容”，往往有时候很多角色是兼任的，例如PM兼BA，BA兼UX等。")]),v._v(" "),p("p",[v._v("可以主动询问是否项目中有相关的on boarding的check list 快速了解一个这个团队的工作方式，每个项目的工作习惯有一定的差异，工作on boarding的文档可以快速的了解这些，例如需要怎么开卡、是否需要做desk check，提交代码时的comment规范是怎样的。")]),v._v(" "),p("p",[v._v("另外，主动寻找一个合适的人一起pair，一起pair来了解一个新的项目在ThoughtWorks是非常常规的操作，在刚到项目会给新人一些时间设置环境，熟悉代码，这个时候能熟练地老手一起pair几天可以说事半功倍。")]),v._v(" "),p("p",[v._v("还有一个重要的Tip就是，学会快速记住其他人的名字，这会让你更方便的融入团队和得到尊重。")]),v._v(" "),p("p",[p("strong",[v._v("了解业务")])]),v._v(" "),p("p",[v._v("作为一个developer需要对业务整体的了解才能对单个故事卡有足够的理解，否则单个故事卡就是横看成岭侧成峰了。当然最直观的做法就是去找BA聊聊业务，不过在找BA之前比较好的建议是先找QA要一下测试或者UAT环境的地址和账号，作为一个普通用户的角色使用一遍，这样会从用户的角度有一个初步的认识。")]),v._v(" "),p("p",[v._v("在和BA过业务的时，BA 会把原型图拿出来，这个时候再结合之前自己对应用使用的印象来了解业务背后的逻辑。因为应不是所有的业务逻辑都能在原型图上得到体现，在实现过程中也会对最初的设计做一些小的调整。还有就是结合现有的功能看原型图，可以知道哪些已经开发完成哪些还在开发中，这样后面在自己开发过程中可以参考已经实现了的功能或代码。关于原型图另外一个Tip就是很多项目为了保持项目风格统一，会给出一个style guide来指定一个基本的样式规则，例如间距、字体、颜色等。")]),v._v(" "),p("p",[v._v("有时间可以整体过一下卡墙，看下项目工作到那个阶段和状态。很难有足够的时间细致的看完所有的故事卡，需要整体有一个映像即可，但是需要注意的是有些跨功能需求很重要但没有在故事卡上表现，因为跨功能需求是一些共同的、默认的需求，例如对表单进行验证、分页等，如果不注意这一点在开卡时可能会忽略，但是QA测试中会覆盖相应需求。")]),v._v(" "),p("p",[v._v("其他了解项目业务的方式还有阅读项目Inception报告和Wiki文档（如果有的话），Inception 报告的信息来自于Inception期间从客户得来的第一手资料。有时候会觉得有些很奇怪的需求（比如使用奇怪的存储媒介Excel而不是数据库，用户业务人员需要直接修改资料等），但是往往是因为一些既定背景下妥协的产物，这样就能理解客户的真实意图了。")]),v._v(" "),p("p",[p("strong",[v._v("了解项目架构")])]),v._v(" "),p("p",[v._v("工程师习惯往往是第一时间打开代码，但是随着项目越来越规范化，一般来说都会被分成多个代码仓库。如果直接读代码有时候会很难整理理解项目的结构。如果项目提供了一些架构图、流程图可以拿来参考，如果没有我们也可以通过一些方法了解了解项目的架构然后尝试自己画一些图形来帮助自己了解项目。")]),v._v(" "),p("p",[p("strong",[v._v("使用C4模型表现项目架构和依赖关系")])]),v._v(" "),p("p",[v._v("C4模型是一种层层递进展开的方式来描述项目结构（系统-容器-组件-类），避免把在绘制图形的时候把不同层级的实体放到一起，造成架构图看起来非常混乱。为了表达项目依赖关系，我们可以系统一级（即以每个系统为单位）；表达自身项目架构，用容器这一级。")]),v._v(" "),p("p",[v._v("例如：")]),v._v(" "),p("p",[p("img",{attrs:{src:"know-a-project-quickly/12577-20200412120333286.png",alt:"img"}})]),v._v(" "),p("p",[v._v("图片来源 https://c4model.com/#examples")]),v._v(" "),p("p",[v._v("这个例子中虚线外部可以表达为系统之间的依赖关系，虚线内部为当前系统展开的各个组成部分。如果很复杂可以画在两个图中表现，当然系统中的每个部分可以进一步放大。")]),v._v(" "),p("p",[v._v("通过查看代码仓库中的配置文件可以很容易解项目的依赖情况，因为规范的项目都会把第三方依赖的信息放到配置文件中，便于根据不同的环境切换，不会硬编码到业务代码中。")]),v._v(" "),p("p",[v._v("考虑技术架构需要考虑：")]),v._v(" "),p("ul",[p("li",[v._v("技术栈和第三方包依赖")]),v._v(" "),p("li",[v._v("依赖服务的调用关系")]),v._v(" "),p("li",[v._v("认证和授权服务")])]),v._v(" "),p("p",[p("strong",[v._v("使用E-R模型表现数据库关系结构")])]),v._v(" "),p("p",[v._v("E-R图也称实体-关系图，关系型数据库的灵魂在数据模式之间的关系，通过这种方式达到数据的完整性、一致性、正确性。为了降低冗余和提高一致性就需要合理的拆分多个数据表。如果数据库比较大就很难理解实体之间的关系。因为我们可以使用实体-关系图来表现数据库的关系结构，一般来说实体-关系图也会画出属性，但是如果属性较多或者想重点体现关系我们可以也可以省略属性。")]),v._v(" "),p("p",[p("img",{attrs:{src:"know-a-project-quickly/12603-20200412120332515.gif",alt:"img"}})]),v._v(" "),p("p",[p("img",{attrs:{src:"know-a-project-quickly/12606-20200412120332870.jpeg",alt:"img"}})]),v._v(" "),p("p",[v._v("图片来源：https://www.aliyun.com/jiaocheng/1112566.html")]),v._v(" "),p("p",[p("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/3a41bf9e73ebf05eaac1e9ecf837cdda/xmlnote/4B54EC1BE5774F39B6B9AE5327B4DFA0/12603",alt:"img"}})]),v._v(" "),p("p",[p("strong",[v._v("使用时序图表现关键逻辑")])]),v._v(" "),p("p",[v._v("如果遇到单个业务流程比较复杂，例如下单流程。前后端可能会发生多次API的调用情况，这种情况下使用UML的时序图就非常清晰了。")]),v._v(" "),p("p",[p("img",{attrs:{src:"know-a-project-quickly/12613-20200412120332807.png",alt:"img"}})]),v._v(" "),p("p",[v._v("图片无对应项目，仅作为案例展示")]),v._v(" "),p("p",[p("strong",[v._v("再谈了解代码")])]),v._v(" "),p("p",[v._v("阅读代码时除了查看通常的代码逻辑之外，最好着重看下项目的配置相关的代码。例如Spring boot中使用@Config注解下的类，每个项目的不同点通常在这里，如果不清楚一些Bean的配置方式，往往会被一些简单的问题坑到。通常来说一些拦截器、过滤器都会放到配置相关的代码附近。对全局的配置多一些了解就可以避开一些奇怪的问题。")]),v._v(" "),p("p",[v._v("另外项目中的打包流程也很值得一看，比如gradle的build文件，前端的webpack相关的脚本。")]),v._v(" "),p("p",[v._v("有一些项目会有一个技术债务清单或者图表，了解下技术债务能避开一些重复的工作，因为有一些代码可能会被重构或弃用，我们没有必要再在这些代码之上做修改。")]),v._v(" "),p("p",[p("strong",[v._v("了解DevOps")])]),v._v(" "),p("p",[p("strong",[v._v("项目中DeveOps的check list")])]),v._v(" "),p("p",[v._v("项目中的DeveOps工作很琐碎，但是如果了解这些信息，对上线、调试都有很多帮助，这里不一一展开，只是提供了一个清单说明一般的项目都会有那些DeveOps相关的内容。")]),v._v(" "),p("ul",[p("li",[p("p",[v._v("Dev、QA、UAT、Prod等多环境")])]),v._v(" "),p("li",[p("p",[v._v("CI/CD")])]),v._v(" "),p("li",[p("p",[v._v("代码仓库")])]),v._v(" "),p("li",[p("p",[v._v("Artificts 的存储")])]),v._v(" "),p("li",[p("p",[v._v("密匙管理")])]),v._v(" "),p("li",[p("p",[v._v("部署脚本")])]),v._v(" "),p("li",[p("p",[v._v("安全扫描工具")])]),v._v(" "),p("li",[p("ul",[p("li",[v._v("Findbugs")]),v._v(" "),p("li",[v._v("Sonarqube")])])]),v._v(" "),p("li",[p("p",[v._v("定时任务")])]),v._v(" "),p("li",[p("p",[v._v("备份")])]),v._v(" "),p("li",[p("p",[v._v("日志")])])]),v._v(" "),p("p",[p("strong",[v._v("使用网络拓扑图表现部署情况")])]),v._v(" "),p("p",[v._v("当我们遇到一些线上问题，想要进行调试，或者准备上线的时候。需要知道网络和服务器相关的情况，这个时候可以通过网络拓扑图来描述应用的部署情况。")]),v._v(" "),p("p",[p("img",{attrs:{src:"know-a-project-quickly/12620-20200412120332735.png",alt:"img"}})]),v._v(" "),p("p",[p("strong",[v._v("了解项目进展")])]),v._v(" "),p("p",[v._v("我把了解项目这部分放到了最后，因为在团队中有PM和Teach Lead 对项目整理方面更为关心。随着对项目的了解，了解一些项目管理方面的情况也必不可少，至少了解一些重要的时间点很必要。")]),v._v(" "),p("ul",[p("li",[v._v("Release 时间 - 顾名思义，上线发布的时间")]),v._v(" "),p("li",[v._v("UAT 时间 - 上线前在UAT环境做准备的时间")]),v._v(" "),p("li",[v._v("Code freeze 时间 - 锁定代码或者创建新的分支不再提交新的功能，但是可以继续修改缺陷")]),v._v(" "),p("li",[v._v("Show case 时间 - 给客户演示阶段性成果的时间")])]),v._v(" "),p("p",[v._v("这些时间点串起来基本上就是一个项目的Flight plan。")]),v._v(" "),p("p",[v._v("在项目管理中，干系人管理作为很重要的一部分，因为客户方往往不可能只会接触一个人。声音大的、要求多的不一定最终拍板，经常不出现的也有可能是能做出重要决定的人。但对developer来说如果需要和客户其他系统对接，最重要的是找到几类人：")]),v._v(" "),p("ul",[p("li",[v._v("技术对接人")]),v._v(" "),p("li",[v._v("UAT或上线验收的人")])]),v._v(" "),p("p",[p("strong",[v._v("总结")])]),v._v(" "),p("p",[v._v("这边文章基本上属于check list 类型的“水”文，但是还是决定发出来。交付时间就是实打实的金钱，如果做到让新成员快速上手最重要的还是要团队的敏捷实践做的足够好、代码足够规范、文档足够完善。尽量避免在人员的切换带来的上下文丢失，团队交流也不能只是口口相传，更不能让某些关键的信息成为“单点故障”，应该及时的传递到整个团队。")]),v._v(" "),p("p",[p("strong",[v._v("附录")])]),v._v(" "),p("ol",[p("li",[v._v("https://c4model.com/ 用于软件架构的C4模型")]),v._v(" "),p("li",[v._v("https://www.gliffy.com/ 一款在线绘图工具（国际）")]),v._v(" "),p("li",[v._v("https://processon.com/ 一款在线绘图工具（国内）")])])])}),[],!1,null,null,null);_.default=e.exports}}]);