(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{1196:function(a,s,e){"use strict";e.r(s);var t=e(14),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"打包-spring-boot-应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包-spring-boot-应用"}},[a._v("#")]),a._v(" 打包 Spring Boot 应用")]),a._v(" "),e("p",[a._v("推荐使用 Spring Boot 的 jar 包进行部署，自带容器对环境依赖。当然也可以打包成 war 格式，并部署到 Servlet3.0 或者早期的 Servlet2.0 的容器中。")]),a._v(" "),e("p",[a._v("使用 Maven 或者 Gradle 打包 jar 文件,一般在工程中使用 wapper 构建。")]),a._v(" "),e("p",[a._v("可以通过 Initializr 构建一个基本的 SPring Boot 项目练习， https://start.spring.io/")]),a._v(" "),e("h2",{attrs:{id:"使用-maven-构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-maven-构建"}},[a._v("#")]),a._v(" 使用 Maven 构建")]),a._v(" "),e("p",[a._v("在 Maven 的 pom.xml 文件中配置如下插件。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("\t<build>\n\t\t<plugins>\n            ...\n\t\t\t<plugin>\n\t\t\t\t<groupId>org.springframework.boot</groupId>\n\t\t\t\t<artifactId>spring-boot-maven-plugin</artifactId>\n\t\t\t</plugin>\n\t\t</plugins>\n\t</build>\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("p",[a._v("在工程目录下的命令行运行 "),e("code",[a._v("./mvnw clean package")])]),a._v(" "),e("blockquote",[e("p",[a._v("./mvnw clean package")])]),a._v(" "),e("p",[a._v("构建成功后可以看到下面的信息。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[INFO] --- maven-jar-plugin:3.1.2:jar (default-jar) @ spring-boot-boilerplate ---\n[INFO] Building jar: /Users/nlin/Downloads/spring-boot-boilerplate/target/spring-boot-boilerplate-0.0.1-SNAPSHOT.jar\n[INFO] \n[INFO] --- spring-boot-maven-plugin:2.2.1.RELEASE:repackage (repackage) @ spring-boot-boilerplate ---\n[INFO] Replacing main artifact with repackaged archive\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  4.237 s\n[INFO] Finished at: 2019-11-17T22:28:04+08:00\n[INFO] ------------------------------------------------------------------------\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br")])]),e("h3",{attrs:{id:"使用-gradle-构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-gradle-构建"}},[a._v("#")]),a._v(" 使用 gradle 构建")]),a._v(" "),e("p",[a._v("在 build.gradle 文件中有如下配置， org.springframework.boot 是用来运行和构建 Spring Boot 应用程序的，io.spring.dependency-management 是用来管理 Spring 项目各个依赖的版本，让其保持一致。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("plugins {\n    id 'org.springframework.boot' version '2.1.3.RELEASE'\n    id \"io.spring.dependency-management\" version \"1.0.3.RELEASE\"\n}\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("运行命令")]),a._v(" "),e("blockquote",[e("p",[a._v("./gradle clean package")])]),a._v(" "),e("p",[a._v("我的项目名称是 spring-boot-boilerplate，因此制品是 spring-boot-boilerplate-0.0.1-SNAPSHOT.jar")]),a._v(" "),e("h2",{attrs:{id:"使用-linux-命令-nohup-部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-linux-命令-nohup-部署"}},[a._v("#")]),a._v(" 使用 Linux 命令 nohup 部署")]),a._v(" "),e("p",[a._v("可以通过 "),e("code",[a._v("java -jar")]),a._v(" 来运行 jar 文件，但是关闭窗口后会挂断应用程序，因此可以使用 "),e("code",[a._v("nohup")]),a._v(" 来持续运行，需要注意的是使用 "),e("code",[a._v("nohup")]),a._v(" 需要修改日志文件的流向 log.txt。")]),a._v(" "),e("p",[a._v("但 "),e("code",[a._v("nohup")]),a._v(" 只是不挂断程序，不是指在后台运行，因此部署 Spring Boot 应用程序，还需要 "),e("code",[a._v("&")]),a._v("。"),e("code",[a._v("&")]),a._v(" 指后台运行。")]),a._v(" "),e("blockquote",[e("p",[a._v("nohup java -jar spring-boot-boilerplate-0.0.1-SNAPSHOT.jar > log.txt &")])]),a._v(" "),e("p",[a._v("这条需要在部署的服务器上运行，我们可以编写一个简单的 shell 脚本来完成。工作中，更多的是使用 ansible 脚本用于多台服务器批量操作。")]),a._v(" "),e("p",[a._v("先设置 ssh key，确保自己能使用 ssh 无密码能访问到目标服务器。然后通过 scp 拷贝文件到服务器。")]),a._v(" "),e("blockquote",[e("p",[a._v("scp spring-boot-boilerplate-0.0.1-SNAPSHOT.jar root@192.168.1.86:/home/workspace")])]),a._v(" "),e("p",[a._v("192.168.1.86 为一台内网服务器地址。")]),a._v(" "),e("p",[a._v("然后通过远程执行 shell 脚本命令启动")]),a._v(" "),e("blockquote",[e("p",[a._v("ssh root@192.168.1.86 'nohup java -jar /home/workspace/spring-boot-boilerplate-0.0.1-SNAPSHOT.jar > log.txt &'")])]),a._v(" "),e("p",[a._v("启动之前需要杀死之前运行的 java 程序，否则会端口被占用。根据端口杀死占用的进程")]),a._v(" "),e("blockquote",[e("p",[a._v("ssh root@192.168.1.86 'output="),e("eq",[e("span",{staticClass:"katex-error",staticStyle:{color:"#cc0000"},attrs:{title:"ParseError: KaTeX parse error: Expected &#x27;EOF&#x27;, got &#x27;&&#x27; at position 43: …| grep LISTEN) &̲& read num1 num…"}},[a._v("( netstat -apn | grep 8080 | grep LISTEN) && read num1 num2 num3 num4 num5  <<<")])]),a._v("{output//[^0-9]/ } && kill -9 $num5 || pwd'")],1)]),a._v(" "),e("h2",{attrs:{id:"通过注册服务运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过注册服务运行"}},[a._v("#")]),a._v(" 通过注册服务运行")]),a._v(" "),e("p",[a._v("上面的方法比较简单，但是有一个问题，部署之后如果服务器重启需要再次启动程序。可以将 "),e("code",[a._v("java -jar xxx.jar")]),a._v(" 这条命令作为服务注册到系统中，也可以方便的提供启动、销毁的方法供系统启动的时候使用。")]),a._v(" "),e("p",[a._v("可以使用 "),e("code",[a._v("systemd")]),a._v(" 的一系列方法，同时 ansible 等自动化工具也提供了非常方便的 API。")]),a._v(" "),e("p",[a._v("创建一个 service 文件")]),a._v(" "),e("blockquote",[e("p",[a._v("vim spring-boot-boilerplate.service")])]),a._v(" "),e("p",[a._v("然后添加配置。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("\n[Unit]\nDescription=spring-boot-boilerplate java application\nAfter=syslog.target\n\n[Service]\nExecStart=/usr/bin/nohup /usr/bin/java -jar /home/workspace/spring-boot-boilerplate.jar --spring.profiles.active=dev\nSuccessExitStatus=143\n\n[Install]\nWantedBy=multi-user.target\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br")])]),e("p",[a._v("ExecStart 填写 java 应用启动命令，当 "),e("code",[a._v("systemctl start")]),a._v(" 的时候会调用这个命令。注意依然需要使用 "),e("code",[a._v("nohup")]),a._v(" 保持后台运行。")]),a._v(" "),e("p",[a._v("配置完成后拷贝 service 文件到系统目录")]),a._v(" "),e("blockquote",[e("p",[a._v("mv spring-boot-boilerplate.service /usr/lib/systemd/system/spring-boot-boilerplate.service")])]),a._v(" "),e("p",[a._v("然后启动")]),a._v(" "),e("blockquote",[e("p",[a._v("systemctl start spring-boot-boilerplate")])]),a._v(" "),e("p",[a._v("可以通过 "),e("code",[a._v("systemctl status")]),a._v(" 查看状态，也能看到启动的日志，如果有错误这个时候能看到异常信息。")]),a._v(" "),e("blockquote",[e("p",[a._v("systemctl status spring-boot-boilerplate")])]),a._v(" "),e("p",[a._v("另外，不要忘记允许开机启动。")]),a._v(" "),e("blockquote",[e("p",[a._v("systemctl enable spring-boot-boilerplate")])]),a._v(" "),e("h2",{attrs:{id:"使用-docker-运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-运行"}},[a._v("#")]),a._v(" 使用 docker 运行")]),a._v(" "),e("p",[a._v("使用 docker 运行 Spring Boot 就非常简单了，编译完成 jar 文件之后，只需要编写一个 Dockerfile")]),a._v(" "),e("blockquote",[e("p",[a._v("vim Dockerfile")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('FROM openjdk:8-jdk-slim\nVOLUME /tmp\nADD target/spring-boot-boilerplate.jar app.jar\nENTRYPOINT ["java", "-jar", "/app.jar"]\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("cd 目录到当前目录下")]),a._v(" "),e("blockquote",[e("p",[a._v("docker build -t spring-boot-docker  .")])]),a._v(" "),e("p",[a._v("使用 docker 查看构建出来的镜像")]),a._v(" "),e("blockquote",[e("p",[a._v("docker images")])]),a._v(" "),e("p",[a._v("运行镜像，并将容器内端口（9999）映射到 8080")]),a._v(" "),e("blockquote",[e("p",[a._v("docker run -it -p 9999:8080 spring-boot-docker")])]),a._v(" "),e("p",[a._v("如果单体机器可以直接使用 "),e("code",[a._v("nohup")]),a._v(" 运行即可")]),a._v(" "),e("blockquote",[e("p",[a._v("nohup docker run -it -p 9999:8080 spring-boot-docker &")])]),a._v(" "),e("p",[a._v("如果需要部署集群，可以使用 swarm 和 kubernetes 构建弹性云系统。")]),a._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),e("ul",[e("li",[a._v("https://spring.io/guides/gs/spring-boot-docker/")]),a._v(" "),e("li",[a._v("https://m.jb51.net/article/146105.htm")])])])}),[],!1,null,null,null);s.default=r.exports}}]);