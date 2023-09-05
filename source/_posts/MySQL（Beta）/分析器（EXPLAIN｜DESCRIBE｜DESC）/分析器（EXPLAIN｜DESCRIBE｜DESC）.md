---
categories:
  - MySQL
date:
  - 2023-4-22 21:04:20
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.459in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.459in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>分析器提供有关</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如何执行语句的信息</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>DESC</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#2E75B5' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>/</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=zh-CN>DESCRIBE</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=en-US> </span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt' lang=en-US>/</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=zh-CN>EXPLAIN </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句是同义词，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>DESC</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>是</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=zh-CN>DESCRIBE</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>的缩写，仅适用于在语句的开头。在实践中，不同语句用于区分特定场景下的描述，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>DESCRIBE</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=en-US> </span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US>/ </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>DESC </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>关键字更多地用于获取表结构信息，而 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>EXPLAIN </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>用于获取查询执行计划</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>分析器适用于 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>SELECT</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>DELETE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>INSERT</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>REPLACE
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>UPDATE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句。在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL 8.0.19 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>及更高版本中，它还适用于 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>TABLE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:black'><span style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>{</span><span style='color:#0077AA'>EXPLAIN </span><span
style='color:#A67F59'>| </span><span style='color:#0077AA'>DESCRIBE </span><span
style='color:#A67F59'>| </span><span style='color:#0077AA'>DESC</span><span
style='color:black'>}</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black' lang=zh-CN>tbl_name </span><span
style='color:#BFBFBF' lang=zh-CN>[col_name | wild]</span><span
style='color:#BFBFBF' lang=en-US>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:black'><span style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>{</span><span style='color:#0077AA'>EXPLAIN </span><span
style='color:#A67F59'>| </span><span style='color:#0077AA'>DESCRIBE </span><span
style='color:#A67F59'>| </span><span style='color:#0077AA'>DESC</span><span
style='color:black'>}</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#BFBFBF' lang=zh-CN>[FORMAT = TRADITIONAL</span><span
style='color:#BFBFBF' lang=en-US> </span><span style='color:#BFBFBF'
lang=zh-CN>| JSON</span><span style='color:#BFBFBF' lang=en-US> </span><span
style='color:#BFBFBF' lang=zh-CN>| TREE]</span><span style='color:black'
lang=zh-CN><br>
{explainable_stmt </span><span style='color:#A67F59' lang=zh-CN>| </span><span
style='color:#0077AA' lang=zh-CN>FOR CONNECTION </span><span style='color:black'
lang=zh-CN>connection_id}</span><span style='color:black' lang=en-US>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:black'><span style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>{</span><span style='color:#0077AA'>EXPLAIN </span><span
style='color:#A67F59'>| </span><span style='color:#0077AA'>DESCRIBE </span><span
style='color:#A67F59'>| </span><span style='color:#0077AA'>DESC</span><span
style='color:black'>}</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA' lang=zh-CN>ANALYZE </span><span
style='color:#909090' lang=zh-CN>[</span><span style='color:#0077AA'
lang=zh-CN>FORMAT </span><span style='color:#A67F59' lang=zh-CN>= </span><span
style='color:#0077AA' lang=zh-CN>TREE</span><span style='color:#909090'
lang=zh-CN>] </span><span style='color:black' lang=zh-CN>select_statement</span><span
style='color:black' lang=en-US>;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.7006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.2944in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.7006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>tbl_name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.2944in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:black'>数据表名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.7006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>col_name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.2944in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:black'>数据列名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.7006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>wild</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.3166in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>一个模式字符串。它可以包含</span><span
  style='font-family:"Comic Sans MS"'> SQL % </span><span style='font-family:
  "Microsoft YaHei UI"'>和</span><span style='font-family:"Comic Sans MS"'> _ </span><span
  style='font-family:"Microsoft YaHei UI"'>通配符。</span></p>
  <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在这种情况下，该语句仅显示名称与字符串匹配的列的输出。除非它包含空格或其他特殊字符，否则无需将字符串括在引号内</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.7006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:black'>explainable_stmt: {<br>
    <span style='mso-spacerun:yes'>    </span></span><span style='color:#0077AA'>SELECT</span><span
  style='color:black'> statement<br>
    <span style='mso-spacerun:yes'>  </span></span><span style='color:#A67F59'>|
  </span><span style='color:#0077AA'>TABLE</span><span style='color:black'>
  statement<br>
    <span style='mso-spacerun:yes'>  </span></span><span style='color:#A67F59'>|
  </span><span style='color:#0077AA'>DELETE</span><span style='color:black'>
  statement<br>
    <span style='mso-spacerun:yes'>  </span></span><span style='color:#A67F59'>|
  </span><span style='color:#0077AA'>INSERT</span><span style='color:black'>
  statement<br>
    <span style='mso-spacerun:yes'>  </span></span><span style='color:#A67F59'>|
  </span><span style='color:#0077AA'>REPLACE</span><span style='color:black'>
  statement<br>
    <span style='mso-spacerun:yes'>  </span></span><span style='color:#A67F59'>|
  </span><span style='color:#0077AA'>UPDATE</span><span style='color:black'>
  statement<br>
    }</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.2944in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>可解释语句，即增删改查</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> SQL </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>语句</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.7006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>connection_id</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.2944in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>命名连接中执行的语句的执行计划。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.7006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>select_statement</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.2944in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>查询语句</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>当 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>EXPLAIN
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>与可解释的语句一起使用时，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>会显示来自优化器的有关语句执行计划的信息。也就是说，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>解释了它将如何处理该语句，包括有关表如何连接以及连接顺序的信息。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>当 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>EXPLAIN
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>与 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>FOR
     CONNECTION</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'>
     connection_id </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>一起使用而不是可解释的语句时，它显示在命名连接中执行的语句的执行计划</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>对于可解释的语句，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>EXPLAIN</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>会生成额外的执行计划信息，这些信息可以使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>SHOW WARNINGS</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>显示。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>同时，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>DESC</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#2E75B5' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>/</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=zh-CN>DESCRIBE</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=en-US> </span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt' lang=en-US>/</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=zh-CN>EXPLAIN </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>也是 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>SHOW COLUMNS</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=en-US> FROM</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>的快捷方式，这些语句都可以用于显示表的列信息</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>DESCRIBE</span><span style='color:black'>
City</span><span style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>DESC </span><span style='color:black'>City;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>EXPLAIN </span><span style='color:black'>City;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SHOW COLUMNS</span><span
style='color:#2E75B5' lang=en-US> FROM </span><span style='color:black'
lang=zh-CN>City;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>+-------------+-----------+------+-------+----------+-------------------+<br>
| Field<span style='mso-spacerun:yes'>     </span></span><span lang=en-US><span
style='mso-spacerun:yes'>   </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| Type<span style='mso-spacerun:yes'>  
</span></span><span lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'> </span>| Null | Key</span><span
lang=en-US> </span><span lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|
Default | Extra<span style='mso-spacerun:yes'>               </span></span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>|<br>
+-------------+-----------+------+-------+----------+-------------------+<br>
| Id<span style='mso-spacerun:yes'>        </span></span><span lang=en-US><span
style='mso-spacerun:yes'>    </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| int(11) </span><span lang=en-US><span
style='mso-spacerun:yes'>   </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| NO<span style='mso-spacerun:yes'>   </span>|
PRI</span><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'> </span>| NULL<span
style='mso-spacerun:yes'>    </span>| auto_increment |<br>
| Name<span style='mso-spacerun:yes'>     </span></span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>  </span>| char(35) | NO<span
style='mso-spacerun:yes'>   </span>|<span style='mso-spacerun:yes'>   </span></span><span
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>  </span></span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>|<span
style='mso-spacerun:yes'>       </span></span><span lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>  </span>|<span
style='mso-spacerun:yes'>                    </span></span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>     </span>|<br>
| Country</span><span lang=en-US> </span><span lang=zh-CN><span
style='mso-spacerun:yes'>    </span>| char(3) </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| NO<span style='mso-spacerun:yes'>   </span>|
UNI </span><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
lang=zh-CN>|<span style='mso-spacerun:yes'>       </span></span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>      </span>|<span
style='mso-spacerun:yes'>                        </span></span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>|<br>
| District </span><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| char(20) | YES | MUL
</span><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
lang=zh-CN>|<span style='mso-spacerun:yes'>        </span></span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>     </span>|<span
style='mso-spacerun:yes'>                   </span></span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>    </span></span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>|<br>
| Population</span><span lang=en-US> </span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| int(11)<span style='mso-spacerun:yes'> 
</span></span><span lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
lang=zh-CN>| NO<span style='mso-spacerun:yes'>  </span>|<span
style='mso-spacerun:yes'>    </span></span><span lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| 0<span style='mso-spacerun:yes'>          
</span>|<span style='mso-spacerun:yes'>                       </span></span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>  </span>|<br>
+-------------+-----------+------+-------+----------+-------------------+</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#2E75B5'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>DESCRIBE
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
     color:black'>语句是为了与</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:black'> Oracle </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black'>兼容。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#2E75B5'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>EXPLAIN</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:black' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=zh-CN>对于检查涉及分区表的查询很有用</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>EXPLAIN
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>需要执行解释语句所需的相同特权。此外，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>EXPLAIN
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>还需要任何已解释视图的
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5'>SHOW VIEW </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>权限。 </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5'>EXPLAIN</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'> ... </span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:#2E75B5'>FOR CONNECTION </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果指定的连接属于不同的用户，则还需要</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>
     PROCESS </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt'>权限</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>EXPLAIN
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的帮助下，可以看到应该在表的何处添加索引，以便通过使用索引查找行来更快地执行语句。还可以使用
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5'>EXPLAIN </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>检查优化器是否以最佳顺序连接表。要提示优化器使用与表在 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>SELECT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句中的命名顺序相对应的连接顺序，请以使用
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5'>SELECT STRAIGHT_JOIN</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/explain.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/explain.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
