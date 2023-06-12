categories:
- MySQL
tags:
- DDL
- RENAME TO
- MODIFY
- CHANGE
date:
- 2023-1-29 14:52:33
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.7291in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.7291in'>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Microsoft YaHei UI"' lang=zh-CN>修改列字段</span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=en-US> </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>名（</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>RENAME TO</span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>）</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#2E75B5'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#0070C0'
     lang=zh-CN>ALTER TABLE</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#0070C0' lang=en-US> … </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=en-US>RENAME … TO </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>语句只用于修改列字段名，如果目标表不存在，或者重命名目标表为已存在的表名称，系统均会返回异常</span></li>
</ul>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>可以加上</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>IF EXISTS</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0070C0' lang=zh-CN>ALTER TABLE</span><span
style='color:#0070C0' lang=en-US> </span><span style='color:#A5A5A5'
lang=en-US>[</span><span style='color:#A5A5A5' lang=zh-CN>IF EXISTS</span><span
style='color:#A5A5A5' lang=en-US>]</span><span style='color:#0070C0'
lang=zh-CN> </span><span style='color:#70AD47' lang=en-US>&lt;</span><span
style='color:#70AD47' lang=zh-CN>tbl_name</span><span style='color:#70AD47'
lang=en-US>&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0070C0' lang=en-US>RENAME </span><span
style='color:#A5A5A5' lang=en-US>[</span><span style='color:#A5A5A5'
lang=zh-CN>COLUMN</span><span style='color:#A5A5A5' lang=en-US>] </span><span
style='color:#70AD47' lang=en-US>&lt;old_</span><span style='color:#70AD47'
lang=zh-CN>tbl_name</span><span style='color:#70AD47' lang=en-US>&gt;</span><span
style='color:#0070C0' lang=en-US> TO </span><span style='color:#70AD47'
lang=en-US>&lt;new_</span><span style='color:#70AD47' lang=zh-CN>tbl_name</span><span
style='color:#70AD47' lang=en-US>&gt; </span><span lang=en-US>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47' lang=en-US>&nbsp;</p>

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
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;old_tbl_name&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>旧数据表名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.0333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;old_tbl_name&gt;&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>新数据表名</p>
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
style='color:#2E75B5' lang=en-US>RENAME TO</span><span lang=zh-CN> tb_</span><span
lang=en-US>test</span><span lang=zh-CN>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.1 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Records: 0<span style='mso-spacerun:yes'>  </span>Duplicates: 0<span
style='mso-spacerun:yes'>  </span>Warnings: 0</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>外部表的重命名</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; </span><span style='color:#2E75B5'
lang=zh-CN>ALTER</span><span style='color:#2E75B5' lang=en-US> FOREIGN</span><span
style='color:#2E75B5' lang=zh-CN> TABLE</span><span lang=zh-CN> tb_</span><span
lang=en-US>student</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>    </span>-&gt; </span><span
style='color:#2E75B5' lang=en-US>RENAME TO</span><span lang=zh-CN> tb_</span><span
lang=en-US>school</span><span lang=zh-CN>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.1 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Records: 0<span style='mso-spacerun:yes'>  </span>Duplicates: 0<span
style='mso-spacerun:yes'>  </span>Warnings: 0</p>

<p style='font-family:"Microsoft YaHei UI";font-size:13.5pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:13.5pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:13.5pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Microsoft YaHei UI"' lang=zh-CN>修改列字段</span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=en-US> </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>属性（</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>MODIFY</span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>）</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#0070C0'
     lang=zh-CN>ALTER TABLE</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#0070C0' lang=en-US> … </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=en-US>MOD</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#2E75B5' lang=zh-CN>IFY</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>语句用于更改改变表的列字段属性</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0070C0' lang=zh-CN>ALTER TABLE</span><span
style='color:#0070C0' lang=en-US> </span><span style='color:#A5A5A5'
lang=en-US>[</span><span style='color:#A5A5A5' lang=zh-CN>IF EXISTS</span><span
style='color:#A5A5A5' lang=en-US>]</span><span style='color:#0070C0'
lang=zh-CN> </span><span style='color:#70AD47' lang=en-US>&lt;</span><span
style='color:#70AD47' lang=zh-CN>tbl_name</span><span style='color:#70AD47'
lang=en-US>&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0070C0' lang=zh-CN>MODIFY</span><span
style='color:#0070C0' lang=en-US> </span><span style='color:#A5A5A5'
lang=en-US>[</span><span style='color:#A5A5A5' lang=zh-CN>COLUMN</span><span
style='color:#A5A5A5' lang=en-US>]</span><span style='color:#0070C0'
lang=zh-CN> </span><span lang=en-US>&lt;</span><span lang=zh-CN>column_</span><span
lang=en-US>name&gt; </span><span lang=zh-CN>column_definition</span><span
lang=en-US> </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A5A5A5' lang=zh-CN>[FIRST | AFTER column_name]</span><span
style='color:#70AD47' lang=en-US> </span><span lang=en-US>;</span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#A5A5A5'>&nbsp;</p>

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
12.0pt'><span style='mso-spacerun:yes'>    </span>-&gt; <span style='color:
#2E75B5'>MODIFY</span> name <span style='color:#E84C22'>VARCHAR</span>(30);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.15 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Records: 0<span style='mso-spacerun:yes'>  </span>Duplicates: 0<span
style='mso-spacerun:yes'>  </span>Warnings: 0</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>不设置</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>FIRST | AFTER column_name</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>时，默认在末尾插入列字段</span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#A5A5A5'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#A5A5A5'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Microsoft YaHei UI"' lang=zh-CN>修改列字段</span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=en-US> </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>名称</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>+</span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>属性（</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>CHANGE</span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>）</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#2E75B5'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#0070C0'
     lang=zh-CN>ALTER TABLE</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#0070C0' lang=en-US> … </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>CHANGE</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:black' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=zh-CN>语句可以在修改时更改表的名称和属性</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0070C0' lang=zh-CN>ALTER TABLE</span><span
style='color:#0070C0' lang=en-US> </span><span style='color:#A5A5A5'
lang=en-US>[</span><span style='color:#A5A5A5' lang=zh-CN>IF EXISTS</span><span
style='color:#A5A5A5' lang=en-US>]</span><span style='color:#0070C0'
lang=zh-CN> </span><span style='color:#70AD47' lang=en-US>&lt;</span><span
style='color:#70AD47' lang=zh-CN>tbl_name</span><span style='color:#70AD47'
lang=en-US>&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0070C0' lang=zh-CN>CHANGE</span><span
style='color:#0070C0' lang=en-US> </span><span style='color:#A5A5A5'
lang=en-US>[</span><span style='color:#A5A5A5' lang=zh-CN>COLUMN</span><span
style='color:#A5A5A5' lang=en-US>]</span><span style='color:#0070C0'
lang=zh-CN> </span><span lang=en-US>&lt;</span><span lang=zh-CN>old_col_name</span><span
lang=en-US>&gt;</span><span lang=zh-CN> </span><span style='color:#70AD47'
lang=en-US>&lt;</span><span style='color:#70AD47' lang=zh-CN>new_col_name</span><span
style='color:#70AD47' lang=en-US>&gt;</span><span lang=zh-CN> column_definition</span><span
lang=en-US> </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A5A5A5' lang=zh-CN>[FIRST | AFTER column_name]</span><span
style='color:#70AD47' lang=en-US> </span><span lang=en-US>;</span></p>

<p style='margin-left:.75in;font-family:Calibri;font-size:11.0pt'>&nbsp;</p>

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
  background-color:white;vertical-align:top;width:2.0333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>&lt;</span><span lang=zh-CN>old_col_name</span><span lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>旧列字段名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.0333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>&lt;</span><span lang=zh-CN>new_col_name</span><span lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>新列字段名</p>
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
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; <span style='color:#2E75B5'>ALTER TABLE</span> tb_emp1</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>    </span>-&gt; </span><span
style='color:#0070C0' lang=zh-CN>CHANGE</span><span style='color:#0070C0'
lang=en-US> </span><span style='color:#A5A5A5' lang=en-US>[</span><span
style='color:#A5A5A5' lang=zh-CN>COLUMN</span><span style='color:#A5A5A5'
lang=en-US>]</span><span style='color:#0070C0' lang=zh-CN> </span><span
lang=en-US>stu_num stuNo</span><span lang=zh-CN> </span><span style='color:
#E84C22' lang=en-US>INT </span><span style='color:#2E75B5' lang=en-US>NOT NULL
FIRST</span><span lang=zh-CN>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.15 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Records: 0<span style='mso-spacerun:yes'>  </span>Duplicates: 0<span
style='mso-spacerun:yes'>  </span>Warnings: 0</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
