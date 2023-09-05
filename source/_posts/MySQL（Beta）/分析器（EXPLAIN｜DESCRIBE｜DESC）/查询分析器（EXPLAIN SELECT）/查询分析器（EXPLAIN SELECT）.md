---
categories:
  - MySQL
tags:
  - EXPLAIN SELECT
date:
  - 2023-4-24 19:24:20
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.2701in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.2701in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>E</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>XPLAIN </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>会为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> SELECT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句中使用的每个表返回一行信息。它按照</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在处理语句时读取它们的顺序列出输出中的表。这意味着</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>从第一个表中读取一行，然后在第二个表中找到匹配的行，然后在第三个表中，依此类推。当所有的表都被处理完后，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>将选择的列输出，并在表列表中回溯，直到找到一个有更多匹配行的表。从此表中读取下一行，然后继续处理下一个表</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> EXPLAIN </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的帮助下，我们可以看到应该在表的何处添加索引，通过扫描索引获取查找特定行来更快地执行语句。还可以使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> EXPLAIN </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>检查优化器是否以最佳顺序连接表，优化复杂的连接查询。</span></li>
</ul>

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
  background-color:white;vertical-align:top;width:2.7006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  background-color:white;vertical-align:top;width:5.2944in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>可解释语句，即增删改查</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> SQL </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>语句</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.7006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>connection_id</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.2944in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>命名连接中执行的语句的执行计划。</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#0077AA' lang=zh-CN>EXPLAIN SELECT </span><span
style='font-family:"Comic Sans MS";color:#ED7D31' lang=en-US>*</span><span
style='font-family:"Comic Sans MS";color:#0077AA' lang=zh-CN> FROM </span><span
style='font-family:"Comic Sans MS";color:black' lang=en-US>users</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN> </span><span
style='font-family:"Comic Sans MS";color:#0077AA' lang=zh-CN>WHERE </span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>uname </span><span
style='font-family:"Comic Sans MS";color:#A67F59' lang=zh-CN>Like </span><span
style='font-family:"Comic Sans MS";color:#669900' lang=zh-CN>'</span><span
style='font-family:"Microsoft YaHei UI";color:#669900' lang=zh-CN>张</span><span
style='font-family:"Comic Sans MS";color:#669900' lang=zh-CN>%'</span><span
style='font-family:"Comic Sans MS";color:#909090' lang=zh-CN>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>运行结果如下（</span><span style='font-family:
"Comic Sans MS";color:#2E75B5'>TRADITIONAL</span><span style='font-family:"Microsoft YaHei UI"'>）：</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS"'><span
style='font-size:10.5pt' lang=zh-CN>+----+---------------+----------+-------------+-------+-----------------+------------+----------+--------+-------+----------+---------------+<br>
| id</span><span style='font-size:10.5pt' lang=en-US> </span><span
style='font-size:10.5pt' lang=zh-CN><span style='mso-spacerun:yes'> </span>|
select_type </span><span style='font-size:10.5pt' lang=en-US><span
style='mso-spacerun:yes'> </span></span><span style='font-size:10.5pt'
lang=zh-CN>| table<span style='mso-spacerun:yes'>  </span></span><span
style='font-size:10.5pt' lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='font-size:10.5pt' lang=zh-CN><span style='mso-spacerun:yes'> </span>|
partitions</span><span style='font-size:10.5pt' lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span style='font-size:10.5pt'
lang=zh-CN>| type<span style='mso-spacerun:yes'>  </span>| possible_keys |
key<span style='mso-spacerun:yes'>   </span></span><span style='font-size:10.5pt'
lang=en-US><span style='mso-spacerun:yes'>      </span></span><span
style='font-size:10.5pt' lang=zh-CN><span style='mso-spacerun:yes'>  </span>|
key_len | ref </span><span style='font-size:10.5pt' lang=en-US><span
style='mso-spacerun:yes'>   </span></span><span style='font-size:10.5pt'
lang=zh-CN><span style='mso-spacerun:yes'> </span>| rows | filtered |
Extra<span style='mso-spacerun:yes'>     </span></span><span style='font-size:
10.5pt' lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='font-size:10.5pt' lang=zh-CN><span
style='mso-spacerun:yes'>  </span>|<br>
+----+---------------+----------+-------------+-------+-----------------+------------+----------+--------+-------+----------+---------------+<br>
|<span style='mso-spacerun:yes'>  </span>1 </span><span style='font-size:10.5pt'
lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='font-size:10.5pt' lang=zh-CN>| SIMPLE<span
style='mso-spacerun:yes'>      </span></span><span style='font-size:10.5pt'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='font-size:10.5pt' lang=zh-CN>| country | NULL<span
style='mso-spacerun:yes'>      </span></span><span style='font-size:10.5pt'
lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='font-size:10.5pt' lang=zh-CN><span style='mso-spacerun:yes'> </span>|
range | PRIMARY<span style='mso-spacerun:yes'>       </span>| PRIMARY | 12<span
style='mso-spacerun:yes'>      </span></span><span style='font-size:10.5pt'
lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='font-size:10.5pt' lang=zh-CN>| NULL |<span style='mso-spacerun:yes'>  
</span>17 </span><span style='font-size:10.5pt' lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span style='font-size:10.5pt'
lang=zh-CN>|<span style='mso-spacerun:yes'>   </span>100.00 | Using where
|<br>
+----+---------------+----------+-------------+-------+-----------------+------------+----------+--------+-------+----------+---------------+</span><span
style='font-size:12.0pt' lang=zh-CN><br>
1 row in set, 1 warning (0.00 sec)</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:black'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:black'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>通过查询分析器的结果，可得知上面的查询语句是一个普通查询，进行了范围查询（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>range</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>），没有使用任何索引，而是进行了全表扫描</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#BFBFBF'
lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>通过检查查询分析器给出的主要参数，可以很好的优化查询语句的速度：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.3256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>影响查询的参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:7.3534in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>select_type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:7.3722in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>查询类型</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>partitions</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.3722in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>匹配的分区。查询将从中匹配记录的分区。对于未分区的表，该值为</span><span
  style='font-family:"Comic Sans MS"'>NULL</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.3722in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>连接类型，描述了表是如何连接的。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>possible_keys</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.3722in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>可供选择的索引。指示</span><span
  style='font-family:"Comic Sans MS"'> MySQL </span><span style='font-family:
  "Microsoft YaHei UI"'>可以从中选择的索引来查找该表中的行。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>key</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.3722in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>实际选择的索引。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>key_len</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.3722in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>所选键的长度。</span><span
  style='font-family:"Comic Sans MS"'>key_len </span><span style='font-family:
  "Microsoft YaHei UI"'>的值使您能够确定</span><span style='font-family:"Comic Sans MS"'>
  MySQL </span><span style='font-family:"Microsoft YaHei UI"'>实际使用多部分键的多少部分。如果键列为</span><span
  style='font-family:"Comic Sans MS"'> NULL</span><span style='font-family:
  "Microsoft YaHei UI"'>，则</span><span style='font-family:"Comic Sans MS"'>
  key_len </span><span style='font-family:"Microsoft YaHei UI"'>列也为</span><span
  style='font-family:"Comic Sans MS"'> NULL</span><span style='font-family:
  "Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>ref</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.3722in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>与索引比较的列。</span><span
  style='font-family:"Comic Sans MS"'>ref</span><span style='font-family:"Microsoft YaHei UI"'>列显示将哪些列或常量与键列中命名的索引进行比较，以便从表中选择行。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>rows</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.3722in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>rows</span><span
  style='font-family:"Microsoft YaHei UI"'>列表示</span><span style='font-family:
  "Comic Sans MS"'>MySQL</span><span style='font-family:"Microsoft YaHei UI"'>认为执行查询必须检查的行数。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>filtered</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.3722in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>已筛选列表示按表条件筛选的表行的估计百分比。最大值为</span><span
  style='font-family:"Comic Sans MS"'>100</span><span style='font-family:"Microsoft YaHei UI"'>（最佳），这意味着没有对行进行筛选</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>e</span><span lang=zh-CN>xtra</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.3722in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>包含有关</span><span
  style='font-family:"Comic Sans MS"'> MySQL </span><span style='font-family:
  "Microsoft YaHei UI"'>如何解析查询的附加信息。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:black'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>对于查询分析的</span><span
     style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>连接类型（</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt' lang=en-US>type</span><span
     style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>），查询速度的优先级为：</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN>system </span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&gt; const </p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>&gt; eq_ref </p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>&gt; ref </p>

<p style='margin-left:2.25in;font-family:"Comic Sans MS";font-size:
12.0pt'>&gt; ref_or_null </p>

<p style='margin-left:2.625in;font-family:"Comic Sans MS";
font-size:12.0pt'>&gt; index_merge </p>

<p style='margin-left:3.0in;font-family:"Comic Sans MS";font-size:
12.0pt'>&gt; unique_subquery </p>

<p style='margin-left:3.375in;font-family:"Comic Sans MS";
font-size:12.0pt'>&gt; index_subquery </p>

<p style='margin-left:3.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&gt; range </p>

<p style='margin-left:4.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&gt; index </p>

<p style='margin-left:4.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>&gt; ALL</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:black'><span style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>要提示优化器使用与表在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SELECT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句中的命名顺序相对应的连接顺序，请以</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SELECT STRAIGHT_JOIN
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>而不是只是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SELECT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>开始该语句。但是，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>STRAIGHT_JOIN </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>可能会阻止使用索引，因为它禁用了半连接转换</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>对于</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt' lang=zh-CN>InnoDB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>表，</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt' lang=en-US>row </span><span
     style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>参数的值只是一个估计值，可能并不总是准确的。</span></li>
</ul>

</div>

</div>

</div>

<!--EndFragment-->
</body>
