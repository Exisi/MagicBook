categories:
- MySQL
tags:
- DDL
- UPDATE
date:
- 2023-2-03 9:06:24
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5909in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5909in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对于单表语法，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>UPDATE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句使用新值更新命名表中现有行的列。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SET</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>子句指示要修改的列及其应给定的值。每个值都可以作为表达式给定，也可以使用关键字</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DEFAULT</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>将列显式设置为其默认值。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果给定</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>WHERE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>子句，则指定标识要更新哪些行的条件。如果没有</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>WHERE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>子句，则更新所有行。如果指定了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ORDER BY</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>子句，则按指定的顺序更新行。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>LIMIT</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>子句限制可以更新的行数。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对于多表语法，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>UPDATE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>更新</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>table_references</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中指定的每个表中满足条件的行。每个匹配行更新一次，即使它多次匹配条件。对于多表语法，不能使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ORDER BY</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>LIMIT</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对于分区表，此语句的单表形式和多表形式都支持将</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>PARTITION</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>子句用作表引用的一部分。此选项采用一个或多个分区或子分区（或两者）的列表。只检查列出的分区（或子分区）是否匹配，不在这些分区或子分区中的行不会更新，无论它是否满足</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>where_condition</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>UPDATE </span><span style='color:#D8D8D8'>[LOW_PRIORITY]
[IGNORE]</span> table_reference</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SET </span><span lang=en-US>&lt;</span><span
lang=zh-CN>col</span><span lang=en-US>um</span><span lang=zh-CN>_name</span><span
lang=en-US>&gt;</span><span lang=zh-CN> = value</span><span lang=en-US>,[&lt;</span><span
lang=zh-CN>col</span><span lang=en-US>um</span><span lang=zh-CN>_name</span><span
lang=en-US>&gt;</span><span lang=zh-CN> = value</span><span lang=en-US>], … ;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>[WHERE where_condition]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>[ORDER BY ...]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>[LIMIT row_count]</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>UPDATE </span><span style='color:#D8D8D8'>[LOW_PRIORITY]
[IGNORE]</span> table_reference</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>   </span></span><span
style='color:#2E75B5' lang=zh-CN>SET </span><span lang=en-US>&lt;</span><span
lang=zh-CN>col</span><span lang=en-US>um</span><span lang=zh-CN>_name</span><span
lang=en-US>&gt;</span><span lang=zh-CN> = value</span><span lang=en-US>,[&lt;</span><span
lang=zh-CN>col</span><span lang=en-US>um</span><span lang=zh-CN>_name</span><span
lang=en-US>&gt;</span><span lang=zh-CN> = value</span><span lang=en-US>], … ;</span></p>

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
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>table_reference</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.1194in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>参照的数据表</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;tbl_name&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.1194in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据表名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;colum_name&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.1194in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据列名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>where_condition</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.1194in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>判断条件</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>row_count</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.1194in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>分页值</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>LOW_PRIORITY</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.1888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#2E75B5'>UPDATE</span> student</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SET</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name = </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张三</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#2E75B5'>UPDATE</span> student</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SET</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name = </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张三</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#2E75B5'>WHERE</span> id = <span
style='color:#70AD47'>'001'</span>;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/update.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/update.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
