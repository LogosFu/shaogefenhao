(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{1007:function(s,n,a){"use strict";a.r(n);var t=a(14),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("1、下拉菜单的制作方法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("                $('#nav .nav >li').mouseover(function(){\n                    $(this).children('ul').show();\n                }).mouseout(function(){\n                    $(this).children('ul').hide();\n                })\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("2、输入框的文字提示")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    var tmp;  \n    $('.user').focus(function(){\n        tmp = $(this).val();\n        if($(this).val() == '用户名')\n          $(this).val('');\n    }).blur(function(){\n        if($(this).val() == '')\n          $(this).val(tmp);\n    })\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("说明：1、如果不输入还是会显示为提示字符")]),s._v(" "),a("p",[s._v("如果输入了就不会再消失")]),s._v(" "),a("p",[s._v("3、一个技巧，显示当前的菜单状态")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<script type="text/javascript">\n    var key = "home";  //使用<php? echo $key; >\n    $("#"+key).addClass(\'active\');\n<\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("4、文本框加减,如果使用了html5 的number直接就可以了")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('                $(function(){\n                //获得文本框对象\n                var t = $("#text_box");\n                //数量增加操作\n                $("#add").click(function(){        \n                    t.val(parseInt(t.val())+1)\n                    if (parseInt(t.val())!=1){\n                        $(\'#text_box\').attr(\'disabled\',false);\n                    }\n                })    \n                //数量减少操作\n                $("#min").click(function(){\n                    t.val(parseInt(t.val())-1);\n                    if (parseInt(t.val()) <=0){\n                        //节点操作\n                        t.val(1);\n                    }\n                })\n            })\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("5、unload请求一次数据")]),s._v(" "),a("p",[s._v("2中方法")]),s._v(" "),a("p",[s._v("1、设置ajax为同步")]),s._v(" "),a("p",[s._v("2、使用open window会浏览器拦截，")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("        var i = new Image(1,1); \n        i.src='url';\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面这种方法很巧妙")]),s._v(" "),a("p",[s._v("智能浮动的jquery 插件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('        $.fn.smartFloat = function() {\n            var position = function(element) {\n                var top = element.position().top, pos = element.css("position");\n                $(window).scroll(function() {\n                    var scrolls = $(this).scrollTop();\n                    if (scrolls > top) {\n                        if (window.XMLHttpRequest) {\n                            element.css({\n                                position: "fixed",\n                                top: 0\n                            });    \n                        } else {\n                            element.css({\n                                top: scrolls\n                            });    \n                        }\n                    }else {\n                        element.css({\n                            position: "absolute",\n                            top: top\n                        });    \n                    }\n                });\n            };\n            return $(this).each(function() {\n                position($(this));                         \n            });\n        };\n        $(".sp-list").smartFloat();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[s._v("获取radio值的方法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var` `ck = $(``\"input[name='ck']:checked\"``).val()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("多文件文件上传的插件")]),s._v(" "),a("p",[s._v("官方demo")]),s._v(" "),a("p",[s._v("http://blueimp.github.io/jQuery-File-Upload/")]),s._v(" "),a("p",[s._v("5、自适应内容宽度")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("(function ($) {\n  var loadImg = function (url, fn) {\n    var img = new Image();\n    img.src = url;\n    if (img.complete) {\n      fn.call(img);\n    } else {\n      img.onload = function () {\n        fn.call(img);\n        img.onload = null;\n      };    \n    };\n  };\n\n  $.fn.imgAutoSize = function (padding) {\n    var maxWidth = this.innerWidth() - (padding || 0);\n    return this.find('img').each(function (i, img) {\n      loadImg(this.src, function () {\n        if (this.width > maxWidth) {\n          var height = maxWidth / this.width * this.height,\n            width = maxWidth;\n          img.width = width;\n          img.maxHeight = height;\n        };\n      });\n    });\n  };\n})(jQuery);    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("6、一个相当简单的语音搜索技巧")]),s._v(" "),a("input",{staticClass:"text",attrs:{type:"text",name:"value_2",id:"value_2","x-webkit-speech":""}}),s._v(" "),a("p",[s._v("就可以实现语音搜索，当然只是web-kit浏览器")])])}),[],!1,null,null,null);n.default=e.exports}}]);