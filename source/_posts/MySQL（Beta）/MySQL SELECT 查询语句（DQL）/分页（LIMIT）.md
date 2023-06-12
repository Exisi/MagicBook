categories:
- MySQL
tags:
- SELECT
- LIMIT
date:
- 2023-2-20 22:31:55
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:12.1215in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:12.1215in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>LIMIT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>子句限制查询结果显示的数量</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SELECT</span><span
style='color:#2E75B5' lang=en-US> </span><span lang=zh-CN>select_expr [,
select_expr] ...</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>FROM</span> table_references<span
style='mso-spacerun:yes'>  </span><span style='color:#D8D8D8'>[PARTITION
partition_list]</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US>[</span><span style='color:#2E75B5' lang=zh-CN>WHERE</span><span
lang=zh-CN> where_condition</span><span lang=en-US>]</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US>[</span><span style='color:#2E75B5' lang=zh-CN>GROUP
BY</span><span lang=zh-CN> {col_name | expr | position}, ... </span><span
style='color:#D8D8D8' lang=zh-CN>[WITH ROLLUP]</span><span lang=en-US>]</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US>[</span><span style='color:#2E75B5' lang=zh-CN>HAVING</span><span
lang=zh-CN> where_condition</span><span lang=en-US>]</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US>[</span><span style='color:#2E75B5' lang=zh-CN>ORDER
BY</span><span lang=zh-CN> {col_name | expr | position}</span><span lang=en-US>
</span><span lang=zh-CN>[ASC | DESC]</span><span style='color:#D8D8D8'
lang=zh-CN>,</span><span lang=zh-CN> ... </span><span style='color:#D8D8D8'
lang=zh-CN>[WITH ROLLUP]</span><span lang=en-US>]</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>LIMIT</span><span lang=zh-CN>
{[offset,] row_count | row_count OFFSET offset}</span><span lang=en-US>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.5187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:8.1395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.5187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>select_expr</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:8.1395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>包含选择列表，该列表指示要检索的列。指定列或表达式，或者可以使用</span><span style='font-family:
  "Comic Sans MS"' lang=zh-CN> *</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> </span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>必须至少有一个</span><span
  style='font-family:"Comic Sans MS"'>select_expr</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[FROM
  table_references </p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>[PARTITION </p>
  <p style='margin-left:.75in;font-size:11.5pt'><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>partition_name</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>，</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>[</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>partition_name</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>]</span></p>
  <p style='margin-left:.75in;font-family:"Comic Sans MS";
  font-size:11.5pt' lang=en-US>…</p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>]</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.2715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>指定语句作用到的数据表名</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:5.7673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>table_references</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.7673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>数据表名</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>[PARTITION
    </p>
    <p style='margin-left:.375in;font-size:10.5pt'><span
    style='font-family:"Comic Sans MS"'>partition_name</span><span
    style='font-family:"Microsoft YaHei UI"'>，</span></p>
    <p style='margin-left:.375in;font-family:"Comic Sans MS";
    font-size:10.5pt'><span lang=en-US>[</span><span lang=zh-CN>partition_name</span><span
    lang=en-US>]</span></p>
    <p style='margin-left:.375in;font-family:"Comic Sans MS";
    font-size:10.5pt' lang=en-US>…</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>]</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.8993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>SELECT
    </span><span style='font-family:"Microsoft YaHei UI"'>支持使用</span><span
    style='font-family:"Comic Sans MS"'> PARTITION </span><span
    style='font-family:"Microsoft YaHei UI"'>子句的显式分区选择，其中包含分区或子分区（或两者）列表，跟在</span><span
    style='font-family:"Comic Sans MS"'> table_reference </span><span
    style='font-family:"Microsoft YaHei UI"'>中的表名之后。在这种情况下，仅从列出的分区中选择行，而忽略表的任何其他分区</span></p>
    <div style='direction:ltr'>
    <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:
     ltr;border-collapse:collapse;border-style:solid;border-color:#A3A3A3;
     border-width:1pt;' title="" summary="">
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:1.4298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>属性</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:3.9118in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>描述</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:1.4298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'><span
      lang=zh-CN>partition_</span><span lang=en-US>name</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:3.9763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>要使用的分区或子分区的逗号分隔列表。此列表中的每个名称必须是指定表的现有分区或子分区的名称；如果未找到任何分区或子分区，则语句将失败并返回错误（分区</span><span
      style='font-family:"Comic Sans MS"'>'partition_name'</span><span
      style='font-family:"Microsoft YaHei UI"'>不存在）。</span><span
      style='font-family:"Comic Sans MS"'>partition_names</span><span
      style='font-family:"Microsoft YaHei UI"'>中命名的分区和子分区可以按任何顺序列出，并且可能重叠</span></p>
      </td>
     </tr>
    </table>
    </div>
    <p style='margin-left:.375in;font-family:"Comic Sans MS";
    font-size:10.5pt'>&nbsp;</p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.5187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[WHERE
  where_condition]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:8.2562in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>WHERE</span><span
  style='font-family:"Microsoft YaHei UI"'>子句（如果给定）指示行必须满足的条件才能被选择。</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果没有</span><span
  style='font-family:"Comic Sans MS"'>WHERE</span><span style='font-family:
  "Microsoft YaHei UI"'>子句，语句将选择所有行</span></p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:5.752in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>where_condition</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:5.752in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>其中</span><span
    style='font-family:"Comic Sans MS"'>condition</span><span style='font-family:
    "Microsoft YaHei UI"'>是一个表达式，对于要选择的每一行，其计算结果为</span><span style='font-family:
    "Comic Sans MS"'>true</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[GROUP BY
  {col_name | expr | position}, ... </p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>[WITH ROLLUP]]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.2715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>使用</span><span
  style='font-family:"Comic Sans MS"'>GROUPBY</span><span style='font-family:
  "Microsoft YaHei UI"'>时对任意列进行排序，可以使用列名、列别名或列位置在</span><span style='font-family:
  "Comic Sans MS"'>ORDER BY</span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
  style='font-family:"Comic Sans MS"'>GROUP BY</span><span style='font-family:
  "Microsoft YaHei UI"'>子句中引用为输出选择的列。列位置为整数，以</span><span style='font-family:
  "Comic Sans MS"'>1</span><span style='font-family:"Microsoft YaHei UI"'>开头：</span></p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:5.7673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>col_name</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.7673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>数据列名</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>expr</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.7673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>数据列别名</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>position</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.7673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>数据列索引</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>[WITH
    ROLLUP]</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.8368in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>将</span><span
    style='font-family:"Comic Sans MS"'>WITH ROLLUP</span><span
    style='font-family:"Microsoft YaHei UI"'>修饰符添加到</span><span
    style='font-family:"Comic Sans MS"'>GROUP BY</span><span style='font-family:
    "Microsoft YaHei UI"'>子句会导致查询生成另一个（超级聚合）行，添加了</span><span style='font-family:
    "Comic Sans MS"'>ROLLUP</span><span style='font-family:"Microsoft YaHei UI"'>后，查询将生成多行</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.5187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[HAVING
  where_condition]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:8.209in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>HAVING</span><span
  style='font-family:"Microsoft YaHei UI"'>子句与</span><span style='font-family:
  "Comic Sans MS"'>WHERE</span><span style='font-family:"Microsoft YaHei UI"'>子句一样，指定选择条件。</span><span
  style='font-family:"Comic Sans MS"'>WHERE</span><span style='font-family:
  "Microsoft YaHei UI"'>子句指定选择列表中列的条件，但不能引用聚合函数。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>HAVING</span><span
  style='font-family:"Microsoft YaHei UI"'>子句指定组的条件，通常由</span><span
  style='font-family:"Comic Sans MS"'>GROUP by</span><span style='font-family:
  "Microsoft YaHei UI"'>子句构成。查询结果仅包括满足</span><span style='font-family:"Comic Sans MS"'>HAVING</span><span
  style='font-family:"Microsoft YaHei UI"'>条件的组。（如果不存在</span><span
  style='font-family:"Comic Sans MS"'>GROUP BY</span><span style='font-family:
  "Microsoft YaHei UI"'>，则所有行隐式地形成一个聚合组。）</span></p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:5.5416in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>where_condition</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:5.5416in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>其中</span><span
    style='font-family:"Comic Sans MS"'>condition</span><span style='font-family:
    "Microsoft YaHei UI"'>是一个表达式，对于要选择的每一行，其计算结果为</span><span style='font-family:
    "Comic Sans MS"'>true</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>&nbsp;</p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
  style='font-weight:bold'>注</span></p>
  <p style='margin-left:.375in;font-size:11.5pt'><span
  style='font-family:"Comic Sans MS"'>HAVING</span><span style='font-family:
  "Microsoft YaHei UI"'>子句必须位于任何</span><span style='font-family:"Comic Sans MS"'>GROUP
  BY</span><span style='font-family:"Microsoft YaHei UI"'>子句之后和任何</span><span
  style='font-family:"Comic Sans MS"'>ORDER BY</span><span style='font-family:
  "Microsoft YaHei UI"'>子句之前</span></p>
  <p style='margin-left:.375in;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>如果</span><span style='font-family:
  "Comic Sans MS"'>HAVING</span><span style='font-family:"Microsoft YaHei UI"'>子句引用的列不明确，则会出现警告</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[ORDER BY
  {col_name | expr | position}</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='mso-spacerun:yes'>      </span>[ASC | DESC], ... [WITH ROLLUP]]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.2715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US><span style='mso-spacerun:yes'> </span></span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>ORDER BY</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>子句用于根据查询结果排序，默认为升序</span></p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:5.7673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>col_name</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.7673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>数据列名</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>expr</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.7673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>数据列别名</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>position</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.7673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>数据列索引</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>ASC |
    DESC</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.7673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>升序排序和降序排序</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>[WITH
    ROLLUP]</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.8368in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>将</span><span
    style='font-family:"Comic Sans MS"'>WITH ROLLUP</span><span
    style='font-family:"Microsoft YaHei UI"'>修饰符添加到</span><span
    style='font-family:"Comic Sans MS"'>GROUP BY</span><span style='font-family:
    "Microsoft YaHei UI"'>子句会导致查询生成另一个（超级聚合）行，添加了</span><span style='font-family:
    "Comic Sans MS"'>ROLLUP</span><span style='font-family:"Microsoft YaHei UI"'>后，查询将生成多行</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.5187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>LIMIT
  {[offset,] row_count </p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>| row_count OFFSET offset}</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:8.2465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>LIMIT
  </span><span style='font-family:"Microsoft YaHei UI"'>子句可用于限制</span><span
  style='font-family:"Comic Sans MS"'> SELECT </span><span style='font-family:
  "Microsoft YaHei UI"'>语句返回的行数。</span><span style='font-family:"Comic Sans MS"'>
  LIMIT </span><span style='font-family:"Microsoft YaHei UI"'>接受一个或两个数字参数，它们都必须是非负整数常量，但以下情况除外：</span></p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>在准备好的语句中，可以使用</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> LIMIT </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>指定参数？占位符标记。</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>在存储的程序中，可以使用整数值的例程参数或局部变量来指定</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> LIMIT </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>参数。</span></li>
  </ul>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:5.7423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>[offset,]</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.7423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>第一行的偏移量，初始行的偏移量为</span><span
    style='font-family:"Comic Sans MS"'> 0</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>row_count</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.7423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>最大行数</p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; </span><span style='color:#2E75B5'
lang=zh-CN>SELECT </span><span lang=en-US>name,age</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
lang=zh-CN>-&gt; </span><span style='color:#2E75B5' lang=zh-CN>FROM</span><span
lang=zh-CN> tb_student</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>    </span>-&gt; </span><span
style='color:#2E75B5' lang=en-US>LIMIT</span><span lang=en-US> 0, 5;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; </span><span style='color:#2E75B5'
lang=zh-CN>SELECT </span><span lang=en-US>name,age</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
lang=zh-CN>-&gt; </span><span style='color:#2E75B5' lang=zh-CN>FROM</span><span
lang=zh-CN> tb_student</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>    </span>-&gt; </span><span
style='color:#2E75B5' lang=en-US>LIMIT</span><span lang=en-US> 5;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+----------+--------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| name </span><span lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span lang=zh-CN>|</span><span
lang=en-US> score</span><span lang=zh-CN> |</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+----------+--------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| John<span style='mso-spacerun:yes'>     
</span>|<span style='mso-spacerun:yes'>   </span></span><span lang=en-US>2</span><span
lang=zh-CN>2 </span><span lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| Jim<span style='mso-spacerun:yes'>        </span>|</span><span
lang=en-US> </span><span lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span
lang=en-US>23</span><span lang=zh-CN> </span><span lang=en-US><span
style='mso-spacerun:yes'>   </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| Thomas<span style='mso-spacerun:yes'>  </span>| </span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span></span><span lang=en-US>25<span
style='mso-spacerun:yes'>   </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| Henry<span style='mso-spacerun:yes'>  </span></span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span></span><span lang=en-US>27</span><span
lang=zh-CN> </span><span lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| </span><span lang=en-US>S</span><span lang=zh-CN>e</span><span
lang=en-US>e</span><span lang=zh-CN>ry<span style='mso-spacerun:yes'>  </span></span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span></span><span lang=en-US>27</span><span
lang=zh-CN> </span><span lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+----------+--------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>4 rows in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>