---
categories:
  - MySQL
tags:
  - DQL
  - SELECT
date:
  - 2023-2-08 9:30:06
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:12.1215in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:12.1215in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SELECT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句用于从数据库中选择数据。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>返回的数据存储在一个临时的结果表中，称为结果集</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#2E75B5'>SELECT</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'><span style='mso-spacerun:yes'>    </span>[ALL | DISTINCT
| DISTINCTROW ]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'><span style='mso-spacerun:yes'>    </span>[HIGH_PRIORITY]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'><span style='mso-spacerun:yes'>    </span>[STRAIGHT_JOIN]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'><span style='mso-spacerun:yes'>   
</span>[SQL_SMALL_RESULT] [SQL_BIG_RESULT] [SQL_BUFFER_RESULT]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>select_expr [, select_expr]
...</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span><span style='color:#D8D8D8'>[into_option]</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>[FROM table_references<span
style='mso-spacerun:yes'>  </span>[PARTITION partition_list]]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>[WHERE where_condition]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>[GROUP BY {col_name | expr |
position}, ... [WITH ROLLUP]]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>[HAVING where_condition]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>    </span></span><span
style='color:#D8D8D8' lang=zh-CN>[WINDOW window_name AS (window_spec)</span><span
style='color:#D8D8D8' lang=en-US> </span><span style='color:#D8D8D8'
lang=zh-CN>[, window_name AS (window_spec)] ...]</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>[ORDER BY {col_name | expr |
position}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>      </span>[ASC | DESC], ... [WITH
ROLLUP]]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>[LIMIT {[offset,] row_count |
row_count OFFSET offset}]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'><span style='mso-spacerun:yes'>    </span>[into_option]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'><span style='mso-spacerun:yes'>    </span>[FOR {UPDATE |
SHARE}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'><span style='mso-spacerun:yes'>        </span>[OF
tbl_name [, tbl_name] ...]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'><span style='mso-spacerun:yes'>        </span>[NOWAIT |
SKIP LOCKED]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'><span style='mso-spacerun:yes'>      </span>| LOCK IN
SHARE MODE]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#D8D8D8' lang=zh-CN><span
style='mso-spacerun:yes'>    </span>[into_option]</span><span lang=en-US>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;' title="" summary="">
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
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>[</span><span lang=zh-CN>ALL | DISTINCT | DISTINCTROW</span><span
  lang=en-US>]</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:8.1395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>ALL</span><span
  style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
  "Comic Sans MS"'>DISTINCT</span><span style='font-family:"Microsoft YaHei UI"'>修饰符指定是否应返回重复的行。</span></p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>ALL</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>（默认值）</span></li>
  </ul>
  <p style='margin-left:.75in;font-family:"Microsoft YaHei UI";
  font-size:11.5pt'>指定应返回所有匹配的行，包括重复的行。</p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt' lang=zh-CN>DISTINCT</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt' lang=en-US>, </span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt' lang=zh-CN>DISTINCTROW</span></li>
  </ul>
  <p style='margin-left:.75in;font-family:"Microsoft YaHei UI";
  font-size:11.5pt'>指定从结果集中删除重复行。指定这两个修饰符是错误的。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='mso-spacerun:yes'> </span>[HIGH_PRIORITY]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.1597in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>HIGH_PRIORITY</span><span
  style='font-family:"Microsoft YaHei UI"'>赋予</span><span style='font-family:
  "Comic Sans MS"'>SELECT</span><span style='font-family:"Microsoft YaHei UI"'>比更新表的语句更高的优先级。您应该仅将其用于速度非常快且必须立即完成的查询。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>即使有更新语句等待表释放，在锁定表以进行读取时发出的</span><span
  style='font-family:"Comic Sans MS"'>SELECT HIGH_PRIORITY</span><span
  style='font-family:"Microsoft YaHei UI"'>查询也会运行。</span></p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
  style='font-weight:bold'>注</span></p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>这只影响只使用表级锁定的存储引擎（如</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>MyISAM</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>、</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>MEMORY</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>和</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>MERGE</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>）。</span></li>
  </ul>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>HIGH_PRIORITY</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>不能与作为</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>UNION</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>一部分的</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>SELECT</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>语句一起使用。</span></li>
  </ul>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.5187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[STRAIGHT_JOIN]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:8.209in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>STRAIGHT_JOIN
  </span><span style='font-family:"Microsoft YaHei UI"'>强制优化器按照它们在</span><span
  style='font-family:"Comic Sans MS"'> FROM </span><span style='font-family:
  "Microsoft YaHei UI"'>子句中列出的顺序连接表。如果优化器以非最佳顺序连接表，您可以使用它来加快查询速度。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>STRAIGHT_JOIN
  </span><span style='font-family:"Microsoft YaHei UI"'>也可以在</span><span
  style='font-family:"Comic Sans MS"'> table_references </span><span
  style='font-family:"Microsoft YaHei UI"'>列表中使用。</span></p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
  style='font-weight:bold'>注</span></p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>STRAIGHT_JOIN </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>不适用于优化器视为</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> const </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>或系统表的任何表。这样的表产生单行，在查询执行的优化阶段被读取，并且在查询执行继续之前，对其列的引用被替换为适当的列值。这些表首先出现在</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> EXPLAIN </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>显示的查询计划中。此例外可能不适用于在外部联接的</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> NULL </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>补充侧使用的</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> const </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>或系统表（即</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> LEFT JOIN </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>的右侧表或</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> RIGHT JOIN </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>的左侧表。</span></li>
  </ul>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[SQL_SMALL_RESULT]</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[SQL_BIG_RESULT]</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.1395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>SQL_BIG_RESULT</span><span
  style='font-family:"Microsoft YaHei UI"'>或</span><span style='font-family:
  "Comic Sans MS"'>SQL_SMALL_RESULT</span><span style='font-family:"Microsoft YaHei UI"'>可以与组一起使用或不同，以告诉优化器，结果集分别有许多行或小。
  对于</span><span style='font-family:"Comic Sans MS"'>SQL_BIG_RESULT</span><span
  style='font-family:"Microsoft YaHei UI"'>，如果创建了</span><span style='font-family:
  "Comic Sans MS"'>MySQL</span><span style='font-family:"Microsoft YaHei UI"'>，则直接使用基于磁盘的临时表，并且更喜欢排序使用</span><span
  style='font-family:"Comic Sans MS"'>elements the Group</span><span
  style='font-family:"Microsoft YaHei UI"'>上的键的临时表。</span></p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
  style='font-weight:bold'>注</span></p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>对于</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>SQL_SMALL_RESULT</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>，</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>MySQL</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>使用内存临时表来存储结果表，而不是使用排序。
       通常不需要。</span></li>
  </ul>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.5187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[SQL_BUFFER_RESULT]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:8.209in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>SQL_BUFFER_RESULT
  </span><span style='font-family:"Microsoft YaHei UI"'>强制将结果放入临时表中。这有助于</span><span
  style='font-family:"Comic Sans MS"'> MySQL </span><span style='font-family:
  "Microsoft YaHei UI"'>及早释放表锁，并有助于将结果集发送到客户端需要很长时间。此修饰符只能用于顶级</span><span
  style='font-family:"Comic Sans MS"'> SELECT </span><span style='font-family:
  "Microsoft YaHei UI"'>语句，不能用于子查询或后续</span><span style='font-family:"Comic Sans MS"'>
  UNION</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>select_expr</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.1395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>包含选择列表，该列表指示要检索的列。指定列或表达式，或者可以使用</span><span style='font-family:
  "Comic Sans MS"' lang=zh-CN> *</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> </span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>必须至少有一个</span><span
  style='font-family:"Comic Sans MS"'>select_expr</span></p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
  style='font-weight:bold'>注</span></p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>不推荐使用</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt' lang=en-US>*</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>号作为</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt' lang=en-US>SELECT</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>语句的查询列，使用</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt' lang=en-US>*</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>会消耗过多的内存，因此应该尽量避免使用</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt' lang=en-US>*</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>的方式进行全局查询，而且在实际使用中，这种方式并不利于</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt' lang=en-US>SQL</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>语句的维护</span></li>
  </ul>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.5187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[into_option]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:8.2715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>可选的</span><span style='font-family:"Comic Sans MS"' lang=en-US>
  SELECT INTO </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语句</span></p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:2.7666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:4.9472in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>说明</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.7666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>INTO
    OUTFILE 'file_name'</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>[CHARACTER
    SET charset_name]</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>export_options</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='mso-spacerun:yes'>        </span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='mso-spacerun:yes'>        </span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:5.0486in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>将选定的行写入文件，可以写入多行。可以指定列和行终止符以产生特定的输出格式</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <div style='direction:ltr'>
    <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:
     ltr;border-collapse:collapse;border-style:solid;border-color:#A3A3A3;
     border-width:1pt;' title="" summary="">
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:2.2944in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>参数</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:2.1965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>描述</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      vertical-align:top;width:2.2944in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>'file_name'</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      vertical-align:top;width:2.1965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt'>文件名，路径</p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:2.3138in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>[CHARACTER
      SET charset_name]</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:2.177in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt'>设置字符集</p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      vertical-align:top;width:2.2944in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>export_options</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      vertical-align:top;width:2.1965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt'>输出的可选参数</p>
      </td>
     </tr>
    </table>
    </div>
    <p style='margin-left:.375in;font-family:"Comic Sans MS";
    font-size:10.5pt'>&nbsp;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.7666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>INTO DUMPFILE</span><span lang=en-US> </span><span lang=zh-CN>'file_name'</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.05in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>将选定的行写入文件，只能写一行，并且输出中不存在任何格式</p>
    <div style='direction:ltr'>
    <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:
     ltr;border-collapse:collapse;border-style:solid;border-color:#A3A3A3;
     border-width:1pt;' title="" summary="">
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:.877in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>参数</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:3.6152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>描述</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:.8965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>'file_name'</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:3.5958in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt'>文件名，路径</p>
      </td>
     </tr>
    </table>
    </div>
    <p style='margin-left:.375in;font-family:"Comic Sans MS";
    font-size:10.5pt'>&nbsp;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.7666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>INTO
    var_name [, var_name] ...</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:5.0541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <div style='direction:ltr'>
    <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:
     ltr;border-collapse:collapse;border-style:solid;border-color:#A3A3A3;
     border-width:1pt;' title="" summary="">
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:.7826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>参数</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:3.7131in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>描述</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      vertical-align:top;width:.802in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>var_name</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      vertical-align:top;width:3.6944in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt'>变量名，列字段名按照在列清单和变量清单中的位置对应，将查询得到的值赋给对应位置的变量</p>
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
  background-color:#E7E6E6;vertical-align:top;width:3.5375in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=zh-CN>[WINDOW window_name AS (window_spec)</span><span lang=en-US> </span></p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>[, window_name AS (window_spec)] ...]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.252in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>WINDOW</span><span
  style='font-family:"Microsoft YaHei UI"'>子句（如果存在）定义了可由窗口函数引用的命名窗口</span></p>
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
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>window_name</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.7673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>命名窗口</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>window_spec</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:5.7673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>命名窗口别名</p>
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
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[ORDER BY
  {col_name | expr | position}</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='mso-spacerun:yes'>      </span>[ASC | DESC], ... [WITH ROLLUP]]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:8.2715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  background-color:#E7E6E6;vertical-align:top;width:3.5187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[LIMIT
  {[offset,] row_count </p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>| row_count OFFSET offset}]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.2465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
    vertical-align:top;width:1.9465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>row_count</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:5.7423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>最大行数</p>
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
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[FOR
  {UPDATE | SHARE}</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='mso-spacerun:yes'>        </span>[OF tbl_name [, tbl_name] ...]</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='mso-spacerun:yes'>        </span>[NOWAIT | SKIP LOCKED]</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='mso-spacerun:yes'>      </span>| LOCK IN SHARE MODE]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:8.243in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果将</span><span
  style='font-family:"Comic Sans MS"'> FOR UPDATE </span><span
  style='font-family:"Microsoft YaHei UI"'>与使用页锁或行锁的存储引擎一起使用，则查询检查的行将被写锁定，直到当前事务结束。</span></p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:2.1881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:5.4972in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.1881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>tbl_name</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:5.4972in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>数据表名</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.1881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>NOWAIT</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.5048in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>NOWAIT</span><span
    style='font-family:"Microsoft YaHei UI"'>导致</span><span style='font-family:
    "Comic Sans MS"'>FOR UPDATE</span><span style='font-family:"Microsoft YaHei UI"'>或</span><span
    style='font-family:"Comic Sans MS"'>FOR SHARE</span><span style='font-family:
    "Microsoft YaHei UI"'>查询立即执行，如果由于另一个事务持有锁而无法获得行锁，则返回错误。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.1881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>SKIP
    LOCKED</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:5.5659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>SKIP
    LOCKED </span><span style='font-family:"Microsoft YaHei UI"'>导致</span><span
    style='font-family:"Comic Sans MS"'> FOR UPDATE </span><span
    style='font-family:"Microsoft YaHei UI"'>或</span><span style='font-family:
    "Comic Sans MS"'> FOR SHARE </span><span style='font-family:"Microsoft YaHei UI"'>查询立即执行，排除结果集中被另一个事务锁定的行</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.1881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>LOCK IN
    SHARE MODE</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.4972in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>置共享锁，允许其他事务读取检查的行，但不能更新或删除它们</p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
  style='font-weight:bold'>注</span></p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>FOR SHARE </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>和</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> LOCK IN SHARE MODE
       </span><span style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>设置共享锁，允许其他事务读取检查的行，但不能更新或删除它们。</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> FOR SHARE </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>和</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> LOCK IN SHARE MODE
       </span><span style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>是等价的。但是，</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>FOR SHARE </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>与</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> FOR UPDATE </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>一样，支持</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> NOWAIT</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>、</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>SKIP LOCKED </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>和</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> OF tbl_name </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>选项。</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> FOR SHARE </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>是</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> LOCK IN SHARE MODE
       </span><span style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>的替代品，但</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> LOCK IN SHARE MODE
       </span><span style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>仍可用于向后兼容。</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>NOWAIT </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>和</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> SKIP LOCKED </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>选项对于基于语句的复制是不安全的。</span></li>
  </ul>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> sno</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>，</span><span
style='font-family:"Comic Sans MS"' lang=en-US>sname</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#2E75B5'>FROM</span> sc</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#2E75B5'>WHERE</span> score &gt; '80'</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/select.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/select.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
