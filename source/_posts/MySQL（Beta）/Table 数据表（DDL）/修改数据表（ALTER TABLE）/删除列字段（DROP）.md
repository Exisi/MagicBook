---
categories:
  - MySQL
tags:
  - DDL
  - DROP
date:
  - 2023-1-29 14:53:55
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.5638in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.5638in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#0070C0'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#0070C0'
     lang=zh-CN>ALTER TABLE</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#0070C0' lang=en-US> … DROP </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'
     lang=zh-CN>语句用于删除列字段</span></li>
</ul>

<p style='margin-left:.375in;font-family:Calibri;font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DROP COLUMN </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>命令并不是物理上把字段删除，而只是简单地把它标记为对</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>操作不可见。随后对该表的插入和更新将在该字段存储一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> NULL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>因此，删除一个字段是很快的，但是它不会立即释放表在磁盘上的空间，因为被删除了的字段占据的空间还没有回收。这些空间将随着现有的行的更新而得到回收</span></li>
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
12.0pt'><span style='color:#2E75B5' lang=zh-CN>DROP</span><span lang=en-US> </span><span
style='color:#A5A5A5' lang=en-US>[</span><span style='color:#A5A5A5'
lang=zh-CN>COLUMN</span><span style='color:#A5A5A5' lang=en-US>]</span><span
lang=zh-CN> </span><span lang=en-US>&lt;</span><span lang=zh-CN>column_</span><span
lang=en-US>name&gt; ;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

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
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#444444' lang=zh-CN>mysql</span><span
style='color:#AB5656' lang=zh-CN>&gt; </span><span style='color:#0070C0'
lang=zh-CN>ALTER TABLE</span><span style='color:#0070C0' lang=en-US> </span><span
style='color:#444444' lang=zh-CN>students</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>-&gt; <span style='color:
blue'>drop</span><span style='color:#444444'> class;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#444444'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#444444'>Query OK, </span><span style='color:#880000'>0
</span><span style='color:blue'>rows</span><span style='color:#444444'>
affected (</span><span style='color:#880000'>0.07</span><span style='color:
#444444'> sec)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#444444'>Records: </span><span style='color:#880000'>0</span><span
style='color:#444444'><span style='mso-spacerun:yes'>  </span>Duplicates: </span><span
style='color:#880000'>0</span><span style='color:#444444'><span
style='mso-spacerun:yes'>  </span>Warnings: </span><span style='color:#880000'>0</span></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
