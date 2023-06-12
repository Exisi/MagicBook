categories:
- MySQL
tags:
- SELECT
- UNION
- UNION ALL
date:
- 2023-2-22 21:22:12
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.125in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.125in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>UNION </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#D8D8D8'
     lang=en-US>[DISTINCT] </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>操作符用于合并两个或多个</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=zh-CN> SELECT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句的结果集，不保留重复</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>UNION ALL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>操作符用于合并两个或多个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> SELECT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句的结果集，保留重复结果</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span> ...</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>UNION </span><span style='color:#D8D8D8'>[ALL
| DISTINCT]</span> SELECT ...</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>[UNION [ALL | DISTINCT] SELECT ...]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8' lang=en-US>…;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SELECT</span><span lang=zh-CN> *
</span><span style='color:#2E75B5' lang=en-US>FROM</span><span lang=zh-CN> </span><span
lang=en-US>user1</span><span lang=zh-CN> </span><span style='color:#2E75B5'
lang=en-US>WHERE</span><span lang=zh-CN> </span><span lang=en-US>id</span><span
lang=zh-CN> = </span><span lang=en-US>1</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#2E75B5'>UNION</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=zh-CN>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span style='font-family:
"Comic Sans MS"' lang=en-US>user2 </span><span style='font-family:"Comic Sans MS";
color:#2E75B5' lang=en-US>WHERE</span><span style='font-family:"Comic Sans MS"'
lang=zh-CN> name = </span><span style='font-family:"Comic Sans MS";color:#8064A2'
lang=zh-CN>'</span><span style='font-family:"Microsoft YaHei UI";color:#70AD47'
lang=zh-CN>张三</span><span style='font-family:"Comic Sans MS";color:#70AD47'
lang=zh-CN>'</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SELECT</span><span lang=zh-CN> *
</span><span style='color:#2E75B5' lang=en-US>FROM</span><span lang=zh-CN> </span><span
lang=en-US>user1</span><span lang=zh-CN> </span><span style='color:#2E75B5'
lang=en-US>WHERE</span><span lang=zh-CN> </span><span lang=en-US>id</span><span
lang=zh-CN> = </span><span lang=en-US>1</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#2E75B5'>UNION ALL </p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=zh-CN>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span style='font-family:
"Comic Sans MS"' lang=en-US>user2 </span><span style='font-family:"Comic Sans MS";
color:#2E75B5' lang=en-US>WHERE</span><span style='font-family:"Comic Sans MS"'
lang=zh-CN> name = </span><span style='font-family:"Comic Sans MS";color:#8064A2'
lang=zh-CN>'</span><span style='font-family:"Microsoft YaHei UI";color:#70AD47'
lang=zh-CN>张三</span><span style='font-family:"Comic Sans MS";color:#70AD47'
lang=zh-CN>'</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SELECT</span><span lang=zh-CN> *
</span><span style='color:#2E75B5' lang=en-US>FROM</span><span lang=zh-CN> </span><span
lang=en-US>user1</span><span lang=zh-CN> </span><span style='color:#2E75B5'
lang=en-US>WHERE</span><span lang=zh-CN> </span><span lang=en-US>id</span><span
lang=zh-CN> = </span><span lang=en-US>1</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#2E75B5'>UNION ALL </p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=zh-CN>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span style='font-family:
"Comic Sans MS"' lang=en-US>user2 </span><span style='font-family:"Comic Sans MS";
color:#2E75B5' lang=en-US>WHERE</span><span style='font-family:"Comic Sans MS"'
lang=zh-CN> name = </span><span style='font-family:"Comic Sans MS";color:#8064A2'
lang=zh-CN>'</span><span style='font-family:"Microsoft YaHei UI";color:#70AD47'
lang=zh-CN>张三</span><span style='font-family:"Comic Sans MS";color:#70AD47'
lang=zh-CN>'</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#2E75B5'>UNION ALL </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SELECT</span><span lang=zh-CN> *
</span><span style='color:#2E75B5' lang=en-US>FROM</span><span lang=zh-CN> </span><span
lang=en-US>user3 </span><span style='color:#2E75B5' lang=en-US>WHERE</span><span
lang=zh-CN> </span><span lang=en-US>age</span><span lang=zh-CN> = </span><span
lang=en-US>20</span><span lang=zh-CN>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>(<span style='color:#2E75B5'>SELECT</span> a <span style='color:#2E75B5'>FROM</span>
t1 <span style='color:#2E75B5'>WHERE</span> a=10 <span style='color:#2E75B5'>AND</span>
B=1)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#2E75B5'>UNION</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>(<span style='color:#2E75B5'>SELECT</span> a <span style='color:#2E75B5'>FROM</span>
t2 <span style='color:#2E75B5'>WHERE</span> a=11 <span style='color:#2E75B5'>AND</span>
B=2)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>ORDER BY</span> a <span style='color:#2E75B5'>LIMIT</span>
10;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注意</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>UNION </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>内部的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SELECT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句必须拥有相同数量的列。列也必须拥有相似的数据类型。同时，每条</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SELECT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句中的列的顺序必须相同，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>UNION </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>结果集中的列名总是等于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> UNION </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中第一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SELECT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句中的列名</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>UNION
     DISTINCT</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>的时候，由于向临时表中添加了唯一索引，插入的速度显然会因此而受到影响。如果确认进行</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>UNION</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>操作的两个集合中没有重复的选项，最有效的办法应该是使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>UNION ALL</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>UNION</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在进行表链接后会筛选掉重复的记录，所以在表链接后会对所产生的结果集进行排序运算，删除重复的记录再返回结果，而</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>UNION</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> ALL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>保留了重复，不会进行排序</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:11.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/union.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/union.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>