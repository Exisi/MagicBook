---
categories:
  - MySQL
tags:
  - DDL
  - DELETE FROM
date:
  - 2023-2-04 10:06:24
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5909in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5909in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DELETE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>是从表中删除行的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DML</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DELETE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句可以以</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>with</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>子句开头，以定义可在中访问的公共表表达式</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>DELETE </span><span style='color:#D8D8D8'>[LOW_PRIORITY]
[QUICK] [IGNORE] </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA' lang=zh-CN>FROM </span><span
style='color:#70AD47' lang=en-US>&lt;</span><span style='color:#70AD47'
lang=zh-CN>tbl_name</span><span style='color:#70AD47' lang=en-US>&gt;</span><span
style='color:black' lang=zh-CN> </span><span style='color:#909090' lang=zh-CN>[[</span><span
style='color:#0077AA' lang=zh-CN>AS</span><span style='color:#909090'
lang=zh-CN>] </span><span style='color:black' lang=zh-CN>tbl_alias</span><span
style='color:#909090' lang=zh-CN>] </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>[PARTITION (partition_name [, partition_name] ...)] </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>[WHERE where_condition] </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>[ORDER BY ...]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>[LIMIT row_count]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.1194in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;tbl_name&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.1194in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据表名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>tbl</span><span lang=zh-CN>_alias</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.1194in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据表别名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>where_condition</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.1194in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>判断条件</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>row_count</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.1194in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>分页值</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>LOW_PRIORITY</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.1888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果您使用</span><span
  style='font-family:"Comic Sans MS"'> LOW_PRIORITY </span><span
  style='font-family:"Microsoft YaHei UI"'>修饰符，则</span><span style='font-family:
  "Comic Sans MS"'> INSERT </span><span style='font-family:"Microsoft YaHei UI"'>的执行会延迟，直到没有其他客户端正在从表中读取。这包括在现有客户端正在读取以及</span><span
  style='font-family:"Comic Sans MS"'> INSERT LOW_PRIORITY </span><span
  style='font-family:"Microsoft YaHei UI"'>语句正在等待时开始读取的其他客户端。因此，发出</span><span
  style='font-family:"Comic Sans MS"'> INSERT LOW_PRIORITY </span><span
  style='font-family:"Microsoft YaHei UI"'>语句的客户端可能要等待很长时间。</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>LOW_PRIORITY
  </span><span style='font-family:"Microsoft YaHei UI"'>仅影响仅使用表级锁定的存储引擎（例如</span><span
  style='font-family:"Comic Sans MS"'> MyISAM</span><span style='font-family:
  "Microsoft YaHei UI"'>、</span><span style='font-family:"Comic Sans MS"'>MEMORY
  </span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
  style='font-family:"Comic Sans MS"'> MERGE</span><span style='font-family:
  "Microsoft YaHei UI"'>）。</span></p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
  style='font-weight:bold'>注</span></p>
  <p style='margin-left:.375in;font-size:11.5pt'><span
  style='font-family:"Comic Sans MS"'>LOW_PRIORITY </span><span
  style='font-family:"Microsoft YaHei UI"'>通常不应与</span><span style='font-family:
  "Comic Sans MS"'> MyISAM </span><span style='font-family:"Microsoft YaHei UI"'>表一起使用，因为这样做会禁用并发插入</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>QUICK</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.1888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>QUICK</span><span
  style='font-family:"Microsoft YaHei UI"'>修饰符影响是否合并索引叶以执行删除操作。</span><span
  style='font-family:"Comic Sans MS"'>DELETE QUICK</span><span
  style='font-family:"Microsoft YaHei UI"'>最适用于删除行的索引值被稍后插入的行的类似索引值替换的应用程序。在这种情况下，将重用删除值留下的孔。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>当删除的值导致跨越一系列索引值的索引块填充不足时，</span><span
  style='font-family:"Comic Sans MS"'>DELETE QUICK</span><span
  style='font-family:"Microsoft YaHei UI"'>没有用处，新的插入将再次发生。在这种情况下，使用</span><span
  style='font-family:"Comic Sans MS"'>QUICK</span><span style='font-family:
  "Microsoft YaHei UI"'>可能会导致索引中没有回收的浪费空间</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>IGNORE</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.1888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果使用</span><span
  style='font-family:"Comic Sans MS"'> IGNORE </span><span style='font-family:
  "Microsoft YaHei UI"'>修饰符，则在执行</span><span style='font-family:"Comic Sans MS"'>
  INSERT </span><span style='font-family:"Microsoft YaHei UI"'>语句时发生的可忽略错误将被忽略。如果没有</span><span
  style='font-family:"Comic Sans MS"'> IGNORE</span><span style='font-family:
  "Microsoft YaHei UI"'>，此类</span><span style='font-family:"Comic Sans MS"'>
  INSERT </span><span style='font-family:"Microsoft YaHei UI"'>语句将因错误而中止。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>例如，如果没有</span><span
  style='font-family:"Comic Sans MS"'> IGNORE</span><span style='font-family:
  "Microsoft YaHei UI"'>，复制表中现有</span><span style='font-family:"Comic Sans MS"'>
  UNIQUE </span><span style='font-family:"Microsoft YaHei UI"'>索引或</span><span
  style='font-family:"Comic Sans MS"'> PRIMARY KEY </span><span
  style='font-family:"Microsoft YaHei UI"'>值的行会导致重复键错误并且语句被中止。使用</span><span
  style='font-family:"Comic Sans MS"'> IGNORE</span><span style='font-family:
  "Microsoft YaHei UI"'>，该行将被丢弃并且不会发生错误。忽略的错误会生成警告。</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>IGNORE
  </span><span style='font-family:"Microsoft YaHei UI"'>对插入，分区表有类似的影响，其中没有找到与给定值匹配的分区。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>使用</span><span
  style='font-family:"Comic Sans MS"'> INSERT IGNORE </span><span
  style='font-family:"Microsoft YaHei UI"'>时，对于包含不匹配值的行，插入操作会静默失败，但会插入匹配的行。使用</span><span
  style='font-family:"Comic Sans MS"'> IGNORE</span><span style='font-family:
  "Microsoft YaHei UI"'>，将无效值调整为最接近的值并插入；会产生警告，但语句不会中止。您可以使用</span><span
  style='font-family:"Comic Sans MS"'> mysql_info() C API </span><span
  style='font-family:"Microsoft YaHei UI"'>函数确定实际插入表中的行数。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>您可以使用</span><span
  style='font-family:"Comic Sans MS"'> REPLACE </span><span style='font-family:
  "Microsoft YaHei UI"'>而不是</span><span style='font-family:"Comic Sans MS"'>
  INSERT </span><span style='font-family:"Microsoft YaHei UI"'>来覆盖旧行。在处理包含重复旧行的唯一键值的新行时，</span><span
  style='font-family:"Comic Sans MS"'>REPLACE </span><span style='font-family:
  "Microsoft YaHei UI"'>与</span><span style='font-family:"Comic Sans MS"'>
  INSERT IGNORE </span><span style='font-family:"Microsoft YaHei UI"'>对应：新行替换旧行而不是被丢弃。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>PARTITION
  (</p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>partition_name </p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>[, partition_name] </p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>…</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>)</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.1437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>插入分区表时，您可以控制哪些分区和子分区接受新行。</span><span
  style='font-family:"Comic Sans MS"'> PARTITION </span><span style='font-family:
  "Microsoft YaHei UI"'>子句采用逗号分隔的表的一个或多个分区或子分区（或两者）的名称列表。</span></p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
  style='font-weight:bold'>注</span></p>
  <p style='margin-left:.375in;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>如果给定</span><span style='font-family:
  "Comic Sans MS"'> INSERT </span><span style='font-family:"Microsoft YaHei UI"'>语句要插入的任何行与列出的分区之一不匹配，则</span><span
  style='font-family:"Comic Sans MS"'> INSERT </span><span style='font-family:
  "Microsoft YaHei UI"'>语句将失败，并出现错误</span><span style='font-family:"Comic Sans MS"'>
  Found a row not matching the given partition set</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>DELETE FROM</span> Person </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>WHERE</span><span lang=zh-CN>
LastName = 'Wilson'</span><span lang=en-US>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/delete.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/delete.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
