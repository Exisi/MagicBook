categories:
- MySQL
tags:
- DDL
- ADD CONSTRAINT
date:
- 2023-1-29 16:05:24
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.2902in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.2902in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ADD CONSTRAINT</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>是一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>命令，用于向</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数据库中的现有表添加约束时定义约束名</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>ALTER TABLE</span> table_name </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ADD CONSTRAINT</span><span
lang=en-US> [symbol] </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>[</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS"'><span
style='font-size:12.0pt' lang=en-US>PRIMARY KEY(</span><span style='font-size:
11.0pt;color:#70AD47' lang=zh-CN>col_name</span><span style='font-size:12.0pt'
lang=en-US>) | </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS"'><span
style='font-size:12.0pt' lang=en-US>FOREIGN KEY(</span><span style='font-size:
11.0pt;color:#70AD47' lang=zh-CN>col_name</span><span style='font-size:12.0pt'
lang=en-US>)<span style='mso-spacerun:yes'>  </span>| </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS"'><span
style='font-size:12.0pt' lang=en-US>UNIQUE(</span><span style='font-size:11.0pt;
color:#70AD47' lang=zh-CN>col_name</span><span style='font-size:12.0pt'
lang=en-US>) | </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS"'><span
style='font-size:12.0pt' lang=en-US>CHECK(</span><span style='font-size:11.0pt;
color:#70AD47' lang=zh-CN>col_name</span><span style='font-size:12.0pt'
lang=en-US>) </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>];</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.7041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.468in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:white'><span style='font-weight:
  bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>描述</span><span
  style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> </span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.7041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>[symbol]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.468in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>约束名，非字符串</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.7041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'>col_name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.468in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据表列名</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"' lang=en-US>#</span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>为主键约束添加约束名</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ALTER TABLE</span><span
lang=en-US> </span><span lang=zh-CN>tb_emp1</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ADD CONSTRAINT </span><span
lang=en-US>c</span><span lang=zh-CN>st_</span><span lang=en-US>primary</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>PRIMARY KEY</span><span
lang=zh-CN>(id);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"' lang=en-US>#</span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>为外键约束添加约束名</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ALTER TABLE</span><span
lang=en-US> </span><span lang=zh-CN>tb_emp1</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ADD CONSTRAINT</span><span
lang=zh-CN> cst_</span><span lang=en-US>foreign</span><span lang=zh-CN> </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>FOREIGN KEY</span><span
lang=zh-CN>(id) </span><span style='color:#2E75B5' lang=zh-CN>REFERENCES</span><span
lang=zh-CN> tb_emp2(sid);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"' lang=en-US>#</span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>为唯一约束添加约束名</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ALTER TABLE</span><span
lang=en-US> </span><span lang=zh-CN>tb_emp1</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ADD CONSTRAINT</span><span
lang=zh-CN> cst_</span><span lang=en-US>unique</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>UNIQUE</span><span lang=zh-CN>(id);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"' lang=en-US>#</span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>为检查约束添加约束名</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ALTER TABLE</span><span
lang=en-US> </span><span lang=zh-CN>tb_emp1</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ADD CONSTRAINT</span><span
lang=zh-CN> cst_</span><span lang=en-US>check</span><span lang=zh-CN> </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>CHECK</span><span lang=zh-CN>(id</span><span
lang=en-US>&gt;5</span><span lang=zh-CN>)</span><span lang=en-US>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>如果未定义</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>
     CONSTRAINT </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>符号子句，或者在</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> CONSTRAINT </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>关键字后未包含</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> [symbol]</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，则会自动生成约束名称</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>CONSTRAINT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>符号值（如果已定义）在数据库中必须是唯一的。重复符号会导致错误</span></li>
</ul>

</div>

</div>

</div>

<!--EndFragment-->
</body>
