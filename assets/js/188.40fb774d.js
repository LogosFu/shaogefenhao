(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{982:function(e,r,s){"use strict";s.r(r);var t=s(14),a=Object(t.a)({},(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[e._v("#")]),e._v(" 常用命令")]),e._v(" "),s("p",[e._v("docker pull 拉取镜像")]),e._v(" "),s("blockquote",[s("p",[e._v("docker pull userxy2015/ngnix")])]),e._v(" "),s("p",[e._v("docker images 查看所有的本地镜像")]),e._v(" "),s("blockquote",[s("p",[e._v("docker images")])]),e._v(" "),s("p",[e._v("docker rmi 删除不必要的镜像")]),e._v(" "),s("blockquote",[s("p",[e._v("docker rmi userxy2015/ngnix")])]),e._v(" "),s("p",[e._v("docker run 启动容器")]),e._v(" "),s("blockquote",[s("p",[e._v("docker run -p 8080:80 -d docker.io/nginx")])]),e._v(" "),s("ul",[s("li",[e._v("-p 参数为设置端口映射")]),e._v(" "),s("li",[e._v("-d 为后台运行 --daemon")])]),e._v(" "),s("p",[e._v("docker exec 进入容器")]),e._v(" "),s("blockquote",[s("p",[e._v("docker exec -it ngnix bash")])]),e._v(" "),s("p",[e._v("docker build 构建容器，在当前目录下加入一个 Dockerfile")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("FROM docker.io/nginx\nCOPY ./test.html /usr/share/nginx/htm/index.html\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("blockquote",[s("p",[e._v("docker build -t linksgo2011/frontend .")])]),e._v(" "),s("p",[e._v("-t 指的是给容器打一个标签，最后的 . 指出 dockerfile的位置")]),e._v(" "),s("p",[e._v("docker login 登录 docker hub")]),e._v(" "),s("blockquote",[s("p",[e._v("docker login 然后输入密码")])]),e._v(" "),s("p",[e._v("docker push 推 docker 镜像到仓库，需要提前建一个 linksgo2011/frontend 仓库。https://hub.docker.com/repository")]),e._v(" "),s("blockquote",[s("p",[e._v("docker push linksgo2011/frontend:latest")])]),e._v(" "),s("p",[e._v("如果之前的镜像已经存在，可以通过")]),e._v(" "),s("p",[e._v("docker tag 旧标签名 新标签名")]),e._v(" "),s("blockquote",[s("p",[e._v("docker frontend linksgo2011/frontend")])]),e._v(" "),s("p",[e._v("docker commit 将当前的容器提交为镜像，一般不常用")]),e._v(" "),s("blockquote",[s("p",[e._v("docker commit c9e5bb7a524f linksgo2011/frontend")])]),e._v(" "),s("p",[e._v("拷贝文件到 docker 容器")]),e._v(" "),s("blockquote",[s("p",[e._v("docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-")])]),e._v(" "),s("h2",{attrs:{id:"docker-的版本说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-的版本说明"}},[e._v("#")]),e._v(" docker 的版本说明")]),e._v(" "),s("p",[e._v("docker 仓库的版本约定为 用户/仓库/标签")]),e._v(" "),s("p",[e._v("例如 linksgo2011/fonrtend:01 标签的镜像推送时，会推送到 linksgo2011 下面的 fonrtend 中为 01 标签")]),e._v(" "),s("p",[e._v("如果在构建镜像时候，不指定最后的标签名称，会使用 latest 标签，并且每次会覆盖上一次的镜像。")]),e._v(" "),s("h2",{attrs:{id:"一些和-docker-相关的排错命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些和-docker-相关的排错命令"}},[e._v("#")]),e._v(" 一些和 docker 相关的排错命令")]),e._v(" "),s("p",[e._v("重启 docker daemon")]),e._v(" "),s("blockquote",[s("p",[e._v("sudo systemctl restart docker")])]),e._v(" "),s("h2",{attrs:{id:"docker-清理镜像和容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-清理镜像和容器"}},[e._v("#")]),e._v(" docker 清理镜像和容器")]),e._v(" "),s("blockquote",[s("p",[e._v("docker container prune")])]),e._v(" "),s("blockquote",[s("p",[e._v("docker image prune")])]),e._v(" "),s("h2",{attrs:{id:"用-ansible-操作-docker-时候需要使用-docker-for-python-的插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用-ansible-操作-docker-时候需要使用-docker-for-python-的插件"}},[e._v("#")]),e._v(" 用 ansible 操作 docker 时候需要使用 docker for Python 的插件")]),e._v(" "),s("p",[e._v("在目标机上需要有 docker、Python、以及 python 的docker 插件")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('- name: install certain python modules for docker\n  pip:\n    name: "{{ item.name }}"\n    version: "{{ item.version }}"\n    state: present\n  with_items:\n  - { name: docker, version: 2.0.0 }\n  \n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("http://www.it1352.com/647250.html")]),e._v(" "),s("h2",{attrs:{id:"清理-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清理-docker"}},[e._v("#")]),e._v(" 清理 docker")]),e._v(" "),s("p",[e._v("列出docker ID")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker ps -aq\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("停止所有容器")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker stop $(docker ps -aq)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("docker 内置的docker 镜像清理")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker image prune --force --all\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("删除所有停止的容器")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker container prune\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("docker 整体清理")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker system prune -a\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"docker-文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-文档"}},[e._v("#")]),e._v(" docker 文档")]),e._v(" "),s("p",[e._v("https://docs.docker.com/")])])}),[],!1,null,null,null);r.default=a.exports}}]);