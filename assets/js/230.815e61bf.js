(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{1031:function(e,t,l){"use strict";l.r(t);var v=l(14),a=Object(v.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h2",{attrs:{id:"队列"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[e._v("#")]),e._v(" 队列")]),e._v(" "),l("p",[e._v("java 中队列分为单项队列和双向队列")]),e._v(" "),l("ul",[l("li",[e._v("单项队列 Queue 接口\n"),l("ul",[l("li",[e._v("队列通常 FIFO （先进先出）")]),e._v(" "),l("li",[e._v("优先级队列和堆栈 LIFO （后进先出）")])])]),e._v(" "),l("li",[e._v("双向队列 Deque (Double ended queue)\n"),l("ul",[l("li",[e._v("是一种具有队列和栈性质的数据结构")]),e._v(" "),l("li",[e._v("可以两头操作")])])])]),e._v(" "),l("p",[e._v("ArrayDeque 是通过数组实现的双向队列。ArrayDeque不是线程安全的。\nArrayDeque不可以存取null元素，因为系统根据某个位置是否为null来判断元素的存在。 当作为栈使用时，性能比Stack好；当作为队列使用时，性能比LinkedList好。")]),e._v(" "),l("p",[e._v("常用的方法有:")]),e._v(" "),l("h3",{attrs:{id:"添加元素"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#添加元素"}},[e._v("#")]),e._v(" 添加元素")]),e._v(" "),l("ul",[l("li",[e._v("addFirst(E e)在数组前面添加元素")]),e._v(" "),l("li",[e._v("addLast(E e)在数组后面添加元素")]),e._v(" "),l("li",[e._v("offerFirst(E e) 在数组前面添加元素，并返回是否添加成功")]),e._v(" "),l("li",[e._v("offerLast(E e) 在数组后天添加元素，并返回是否添加成功")])]),e._v(" "),l("h3",{attrs:{id:"删除元素"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#删除元素"}},[e._v("#")]),e._v(" 删除元素")]),e._v(" "),l("p",[e._v("removeFirst()删除第一个元素，并返回删除元素的值,如果元素为null，将抛出异常\npollFirst()删除第一个元素，并返回删除元素的值，如果元素为null，将返回null\nremoveLast()删除最后一个元素，并返回删除元素的值，如果为null，将抛出异常\npollLast()删除最后一个元素，并返回删除元素的值，如果为null，将返回null\nremoveFirstOccurrence(Object o) 删除第一次出现的指定元素\nremoveLastOccurrence(Object o) 删除最后一次出现的指定元素")]),e._v(" "),l("h3",{attrs:{id:"获取元素"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#获取元素"}},[e._v("#")]),e._v(" 获取元素")]),e._v(" "),l("ul",[l("li",[e._v("getFirst() 获取第一个元素,如果没有将抛出异常")]),e._v(" "),l("li",[e._v("getLast() 获取最后一个元素，如果没有将抛出异常")])]),e._v(" "),l("h3",{attrs:{id:"队列操作"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#队列操作"}},[e._v("#")]),e._v(" 队列操作")]),e._v(" "),l("ul",[l("li",[e._v("add(E e) 在队列尾部添加一个元素")]),e._v(" "),l("li",[e._v("offer(E e) 在队列尾部添加一个元素，并返回是否成功")]),e._v(" "),l("li",[e._v("remove() 删除队列中第一个元素，并返回该元素的值，如果元素为null，将抛出异常(其实底层调用的是removeFirst())")]),e._v(" "),l("li",[e._v("poll()  删除队列中第一个元素，并返回该元素的值,如果元素为null，将返回null(其实调用的是pollFirst())")]),e._v(" "),l("li",[e._v("element() 获取第一个元素，如果没有将抛出异常")]),e._v(" "),l("li",[e._v("peek() 获取第一个元素，如果返回null")])]),e._v(" "),l("h3",{attrs:{id:"栈操作"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#栈操作"}},[e._v("#")]),e._v(" 栈操作")]),e._v(" "),l("ul",[l("li",[e._v("push(E e) 栈顶添加一个元素")]),e._v(" "),l("li",[e._v("pop(E e) 移除栈顶元素,如果栈顶没有元素将抛出异常")])]),e._v(" "),l("h3",{attrs:{id:"通用操作"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#通用操作"}},[e._v("#")]),e._v(" 通用操作")]),e._v(" "),l("ul",[l("li",[e._v("size() 获取队列中元素个数")]),e._v(" "),l("li",[e._v("isEmpty() 判断队列是否为空")]),e._v(" "),l("li",[e._v("iterator() 迭代器，从前向后迭代")]),e._v(" "),l("li",[e._v("descendingIterator() 迭代器，从后向前迭代")]),e._v(" "),l("li",[e._v("contain(Object o) 判断队列中是否存在该元素")]),e._v(" "),l("li",[e._v("toArray() 转成数组")]),e._v(" "),l("li",[e._v("clear() 清空队列")]),e._v(" "),l("li",[e._v("clone() 克隆(复制)一个新的队列")])]),e._v(" "),l("h2",{attrs:{id:"参考资料"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),l("ul",[l("li",[e._v("ArrayDeque类的使用详解 https://blog.csdn.net/skh2015java/article/details/74840513")])])])}),[],!1,null,null,null);t.default=a.exports}}]);