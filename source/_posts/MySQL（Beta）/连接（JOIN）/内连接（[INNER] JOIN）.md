categories:
- MySQL
tags:
- INNER JOIN
date:
- 2023-2-25 9:02:32
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:12.9909in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:12.9909in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>JOIN </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>等价于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> INNER
     JOIN</span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>，是简化的写法，</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>JOIN </span><span style='font-family:"Microsoft YaHei UI";
     font-size:11.0pt' lang=zh-CN>返回两个表中联结字段相等的行，即</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>得到的结果是两张表的交集。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in'><img
src="data:image/png;base64,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"
width=184 height=124></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>当至少有一个同属于两表的行符合联接条件时，内联接才返回行。
     内联接消除与另一个表中的任何行不匹配的行</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>table_reference</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#D8D8D8'>[INNER | CROSS] </span><span
style='color:#2E75B5'>JOIN </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>|</span><span lang=en-US> </span><span
style='color:#2E75B5' lang=zh-CN>STRAIGHT_JOIN</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>table_factor </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#D8D8D8' lang=zh-CN>[</span><span style='color:#D8D8D8'
lang=en-US> </span><span style='color:#2E75B5' lang=zh-CN>ON</span><span
style='color:#D8D8D8' lang=zh-CN> search_condition</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN>| USING (column_name [, column_name] ...)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#D8D8D8' lang=en-US>[WHERE where_</span><span
style='color:#D8D8D8' lang=zh-CN>condition</span><span style='color:#D8D8D8'
lang=en-US>]</span><span lang=en-US>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8' lang=en-US>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.3881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  vertical-align:top;width:4.3881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=zh-CN>table_reference</span><span lang=en-US>{</span></p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'><span lang=zh-CN>table_factor</span><span lang=en-US> </span><span
  lang=zh-CN>| joined_table</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>}</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:8.1395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.0736in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.5388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.093in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>table_factor</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.5201in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>表的引用语句</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.0736in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>joined_table</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.6083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>可以引用自身语句嵌套</p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.3881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=zh-CN>table_factor</span><span lang=en-US>{</span></p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>tbl_name </p>
  <p style='margin-left:.75in;font-family:"Comic Sans MS";
  font-size:11.5pt;color:white'>[PARTITION </p>
  <p style='margin-left:1.125in;font-size:11.5pt;color:white'><span
  style='font-family:"Comic Sans MS"'>partition_name</span><span
  style='font-family:"Microsoft YaHei UI"'>，</span></p>
  <p style='margin-left:1.125in;font-family:"Comic Sans MS";
  font-size:11.5pt;color:white'><span lang=en-US>[</span><span lang=zh-CN>partition_name</span><span
  lang=en-US>]</span></p>
  <p style='margin-left:1.125in;font-family:"Comic Sans MS";
  font-size:11.5pt;color:white' lang=en-US>…</p>
  <p style='margin-left:.75in;font-family:"Comic Sans MS";
  font-size:11.5pt;color:white' lang=en-US>]</p>
  <p style='margin-left:.75in;font-family:"Comic Sans MS";
  font-size:11.5pt;color:white'>[[AS] alias]</p>
  <p style='margin-left:.75in;font-family:"Comic Sans MS";
  font-size:11.5pt;color:white'>[</p>
  <p style='margin-left:1.125in;font-family:"Comic Sans MS";
  font-size:11.5pt;color:white'><span lang=zh-CN>index_hint</span><span
  lang=en-US>,</span></p>
  <p style='margin-left:1.125in;font-family:"Comic Sans MS";
  font-size:11.5pt;color:white'>[index_hint] </p>
  <p style='margin-left:1.125in;font-family:"Comic Sans MS";
  font-size:11.5pt;color:white'>…</p>
  <p style='margin-left:.75in;font-family:"Comic Sans MS";
  font-size:11.5pt;color:white'>]</p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>| <span style='color:white'>[LATERAL]</span> table_subquery<span
  style='color:white'> [AS]</span> alias <span style='color:white'>[(col_list)]</span></p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>| ( table_references )</p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt;color:white'>[</p>
  <p style='margin-left:.75in;font-family:"Comic Sans MS";
  font-size:11.5pt;color:white'>ON search_condition</p>
  <p style='margin-left:.75in;font-family:"Comic Sans MS";
  font-size:11.5pt;color:white'>| USING (column_name [, column_name] ...)</p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt;color:white'>]</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>}</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.2715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.6347in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:4.4541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.6347in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>table_factor</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.4541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>表的引用语句</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.6347in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
    background-color:#E7E6E6;vertical-align:top;width:4.5861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>SELECT
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
      background-color:black;vertical-align:top;width:2.5986in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
      background-color:white;vertical-align:top;width:2.6569in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
    font-size:11.5pt'>&nbsp;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.6347in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=en-US>[</span><span lang=zh-CN>[AS] alias]</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.4541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>为表的创建别名</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.6347in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>index_hint</span><span lang=en-US>{</span></p>
    <p style='margin-left:.375in;font-family:"Comic Sans MS";
    font-size:10.5pt'><span style='color:#2E75B5'>USE</span> {<span
    style='color:#2E75B5'>INDEX</span>|<span style='color:#2E75B5'>KEY</span>}</p>
    <p style='margin-left:.75in;font-family:"Comic Sans MS";
    font-size:10.5pt;color:white'>[FOR {JOIN|ORDER BY|GROUP BY}] </p>
    <p style='margin-left:.75in;font-family:"Comic Sans MS";
    font-size:10.5pt;color:white'>[</p>
    <p style='margin-left:1.125in;font-family:"Comic Sans MS";
    font-size:10.5pt;color:white'>index_name </p>
    <p style='margin-left:1.125in;font-family:"Comic Sans MS";
    font-size:10.5pt;color:white'><span lang=zh-CN>[,index_name]</span><span
    lang=en-US>,</span></p>
    <p style='margin-left:1.125in;font-family:"Comic Sans MS";
    font-size:10.5pt;color:white' lang=en-US>…</p>
    <p style='margin-left:.75in;font-family:"Comic Sans MS";
    font-size:10.5pt;color:white' lang=en-US>]</p>
    <p style='margin-left:.375in;font-family:"Comic Sans MS";
    font-size:10.5pt'>| {<span style='color:#2E75B5'>IGNORE</span>|<span
    style='color:#2E75B5'>FORCE</span>} {<span style='color:#2E75B5'>INDEX</span>|<span
    style='color:#2E75B5'>KEY</span>}</p>
    <p style='margin-left:.75in;font-family:"Comic Sans MS";
    font-size:10.5pt;color:white'>[FOR {JOIN|ORDER BY|GROUP BY}] </p>
    <p style='margin-left:.75in;font-family:"Comic Sans MS";
    font-size:10.5pt'><span lang=zh-CN>(index_name [, index_name]</span><span
    lang=en-US>,…)</span></p>
    <p style='margin-left:.375in;font-family:"Comic Sans MS";
    font-size:10.5pt' lang=en-US>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>}</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.4541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <div style='direction:ltr'>
    <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:
     ltr;border-collapse:collapse;border-style:solid;border-color:#A3A3A3;
     border-width:1pt' title="" summary="">
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:1.4298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>属性</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:1.6173in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>描述</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:1.4298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>index_name</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:1.6173in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt'>数据列在表中的索引</p>
      </td>
     </tr>
    </table>
    </div>
    <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.6347in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>[LATERAL]</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.4541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>派生表的前缀参数，表示允许派生表引用它所在的</span><span
    style='font-family:"Comic Sans MS"'>FROM</span><span style='font-family:
    "Microsoft YaHei UI"'>子句中的其他表。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.6347in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>table_subquery</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.4541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>子查询</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.6347in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>alias</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.4541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>别名</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.6347in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>[(col_list)]</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.4541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>列名集合</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.6347in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>table_references</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.4541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>table_reference</span><span
    style='font-family:"Microsoft YaHei UI"'>的集合</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.6347in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>search_condition</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.4541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>条件语句</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.6347in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>column_name</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.4541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>列名</p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#D8D8D8'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.3881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>search_condition</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:8.1395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>条件语句</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.3881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>column_name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.1395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据列名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.3881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>[WHERE where_</span><span lang=zh-CN>condition</span><span
  lang=en-US>]</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:8.1395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>WHERE</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>条件语句</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SELECT </span><span lang=en-US>id,name</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>FROM </span><span lang=en-US>student</span><span
lang=zh-CN> </span><span lang=en-US>s</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>INNER JOIN </span><span
lang=en-US>class c</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ON </span><span lang=en-US>s.id
= c.studentID;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:white'
  lang=en-US><span style='font-weight:bold'>id</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.8777in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:white'
  lang=en-US><span style='font-weight:bold'>name</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'
  lang=en-US>202213</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.8777in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>张三</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'
  lang=en-US>322342</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.8777in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>李四</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SELECT </span><span lang=en-US>id,name</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>FROM </span><span lang=en-US>student</span><span
lang=zh-CN> </span><span lang=en-US>s</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>INNER JOIN </span><span
lang=en-US>class c</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ON </span><span lang=en-US>s.id
= c.studentID</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> s.name</span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US> LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>%'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:white'
  lang=en-US><span style='font-weight:bold'>id</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.8777in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:white'
  lang=en-US><span style='font-weight:bold'>name</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'
  lang=en-US>202213</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.8777in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>张三</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>如果省略</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> ON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>条件，将会返回两张表的合并结果</span></li>
</ul>

</div>

</div>

</div>

<!--EndFragment-->
</body>