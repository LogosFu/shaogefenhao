(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1017:function(s,e,t){"use strict";t.r(e);var n=t(14),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。通常都是些自动生成的文件，比如日志文件，或者编译过程中创建的临时文件等。我们可以创建一个名为 .gitignore 的文件，列出要忽略的文件模式。来看一个实际的例子：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ cat .gitignore\n*.[oa]\n*~\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("第一行告诉 Git 忽略所有以 .o 或 .a 结尾的文件。一般这类对象文件和存档文件都是编译过程中出现的，我们用不着跟踪它们的版本。第二行告诉 Git 忽略所有以波浪符（"),t("code",[s._v("~")]),s._v("）结尾的文件，许多文本编辑软件（比如 Emacs）都用这样的文件名保存副本。此外，你可能还需要忽略 log，tmp 或者 pid 目录，以及自动生成的文档等等。要养成一开始就设置好 .gitignore 文件的习惯，以免将来误提交这类无用的文件。")]),s._v(" "),t("p",[s._v("文件 .gitignore 的格式规范如下：")]),s._v(" "),t("ul",[t("li",[s._v("所有空行或者以注释符号 ＃ 开头的行都会被 Git 忽略。")]),s._v(" "),t("li",[s._v("可以使用标准的 glob 模式匹配。")]),s._v(" "),t("li",[s._v("匹配模式最后跟反斜杠（"),t("code",[s._v("/")]),s._v("）说明要忽略的是目录。")]),s._v(" "),t("li",[s._v("要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（"),t("code",[s._v("!")]),s._v("）取反。")])]),s._v(" "),t("p",[s._v("所谓的 glob 模式是指 shell 所使用的简化了的正则表达式。星号（"),t("code",[s._v("*")]),s._v("）匹配零个或多个任意字符；"),t("code",[s._v("[abc]")]),s._v(" 匹配任何一个列在方括号中的字符（这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）；问号（"),t("code",[s._v("?")]),s._v("）只匹配一个任意字符；如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如 "),t("code",[s._v("[0-9]")]),s._v(" 表示匹配所有 0 到 9 的数字）。")]),s._v(" "),t("p",[s._v("我们再看一个 .gitignore 文件的例子：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 此为注释 – 将被 Git 忽略\n*.a       # 忽略所有 .a 结尾的文件\n!lib.a    # 但 lib.a 除外\n/TODO     # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO\nbuild/    # 忽略 build/ 目录下的所有文件\ndoc/*.txt # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);