categories:
- MySQL
tags:
- DDL
- ADD
date:
- 2023-1-29 14:51:23
---

<body lang=zh-CN style='font-family:Calibri;font-size:11.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:6.6972in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:6.6972in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>给表添加新的字段使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>ALTER TABLE </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=en-US>… </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>ADD</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#2E75B5' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>语句</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> ADD </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句增加一个字段，那么所有表中现有行都初始化为该字段的缺省值</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>(</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果没有声明</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DEFAULT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>子句，那么就是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> NULL)</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ALTER TABLE </span><span
style='color:#2E75B5' lang=en-US>&lt;</span><span style='color:#70AD47'
lang=zh-CN>tbl_name</span><span style='color:#70AD47' lang=en-US>&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ADD</span><span
style='color:#2E75B5' lang=en-US> </span><span style='color:#A5A5A5'
lang=en-US>[</span><span style='color:#A5A5A5' lang=zh-CN>COLUMN</span><span
style='color:#A5A5A5' lang=en-US>]</span><span style='color:#2E75B5'
lang=zh-CN> </span><span style='color:#2E75B5' lang=en-US>&lt;</span><span
lang=zh-CN>column_</span><span lang=en-US>name&gt; </span><span lang=zh-CN>column_definition
</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A5A5A5' lang=zh-CN>[FIRST | AFTER column_name]</span><span
style='color:#70AD47' lang=en-US> </span><span lang=en-US>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ALTER TABLE </span><span
style='color:#2E75B5' lang=en-US>&lt;</span><span style='color:#70AD47'
lang=zh-CN>tbl_name</span><span style='color:#70AD47' lang=en-US>&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ADD</span><span
style='color:#2E75B5' lang=en-US> </span><span style='color:#A5A5A5'
lang=en-US>[</span><span style='color:#A5A5A5' lang=zh-CN>COLUMN</span><span
style='color:#A5A5A5' lang=en-US>]</span><span style='color:#2E75B5'
lang=zh-CN> </span><span style='color:#2E75B5' lang=en-US>&lt;</span><span
lang=zh-CN>column_</span><span lang=en-US>name&gt;</span><span
style='color:#444444' lang=zh-CN> </span><span lang=zh-CN>column_definition </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A5A5A5' lang=zh-CN>[FIRST | AFTER </span><span
style='color:#A5A5A5' lang=en-US>&lt;</span><span style='color:#A5A5A5'
lang=zh-CN>column_name</span><span style='color:#A5A5A5' lang=en-US>&gt;</span><span
style='color:#A5A5A5' lang=zh-CN>]</span><span style='color:#A5A5A5'
lang=en-US> </span><span style='color:#444444' lang=zh-CN>,</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ADD </span><span
style='color:#2E75B5' lang=en-US>&lt;</span><span lang=zh-CN>column_</span><span
lang=en-US>name&gt;</span><span style='color:#444444' lang=zh-CN> </span><span
lang=zh-CN>column_definition </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A5A5A5' lang=zh-CN>[FIRST | AFTER </span><span
style='color:#A5A5A5' lang=en-US>&lt;</span><span style='color:#A5A5A5'
lang=zh-CN>column_name</span><span style='color:#A5A5A5' lang=en-US>&gt;</span><span
style='color:#A5A5A5' lang=zh-CN>]</span><span style='color:#A5A5A5'
lang=en-US> </span><span style='color:#444444' lang=zh-CN>;</span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#444444'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.0333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.1923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.0333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;tbl_name&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.1923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据表名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.0333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>&lt;</span><span lang=zh-CN>column_</span><span lang=en-US>name&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>列字段名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.0333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>column_definition</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.1923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>列字段属性，数据类型、约束条件</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.0333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>FIRST</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>在列字段的头部插入</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.0333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=zh-CN>AFTER</span><span lang=en-US> &lt;</span><span lang=zh-CN>column_name</span><span
  lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.1923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>在列字段后插入</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; <span style='color:#2E75B5'>ALTER TABLE</span> tb_emp1</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>    </span>-&gt; </span><span
style='color:#2E75B5' lang=zh-CN>ADD</span><span lang=zh-CN> COLUMN </span><span
lang=en-US>sNo</span><span lang=zh-CN> </span><span style='color:#E84C22'
lang=zh-CN>INT</span><span style='color:#E84C22' lang=en-US> </span><span
style='color:#5B9BD5' lang=en-US>FIRST</span><span lang=zh-CN>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.50 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Records: 0<span style='mso-spacerun:yes'>  </span>Duplicates: 0<span
style='mso-spacerun:yes'>  </span>Warnings: 0</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; <span style='color:#2E75B5'>ALTER TABLE</span> tb_emp1</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>    </span>-&gt; </span><span
style='color:#2E75B5' lang=zh-CN>ADD</span><span lang=zh-CN> COLUMN </span><span
lang=en-US>sNo</span><span lang=zh-CN> </span><span style='color:#E84C22'
lang=zh-CN>INT </span><span style='color:#5B9BD5' lang=en-US>FIRST</span><span
lang=en-US>,</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>    </span>-&gt; </span><span
style='color:#2E75B5' lang=zh-CN>ADD</span><span lang=zh-CN> COLUMN </span><span
lang=en-US>class</span><span lang=zh-CN> </span><span style='color:#E84C22'
lang=zh-CN>INT </span><span style='color:#5B9BD5' lang=zh-CN>AFTER </span><span
lang=en-US>sNo ;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>Query OK, 0 rows affected (0.</span><span lang=en-US>8</span><span
lang=zh-CN>0 sec)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Records: 0<span style='mso-spacerun:yes'>  </span>Duplicates: 0<span
style='mso-spacerun:yes'>  </span>Warnings: 0</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用一个非空缺省值增加一个字段或者改变一个字段的现有类型会重写整个表。对于大表来说，这个操作可能会花很长时间；并且它还临时需要两倍的磁盘空间</span></li>
</ul>

</div>

</div>

</div>

<!--EndFragment-->
</body>

