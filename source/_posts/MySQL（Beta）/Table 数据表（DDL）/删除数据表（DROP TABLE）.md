categories:
- MySQL
tags:
- DDL
- TRUNCATE
date:
- 2023-2-07 9:37:26
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.484in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.484in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DROP TABLE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用于删除一个或多个表。您必须有每个表的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DROP</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>权限。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对与不存在的表，使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>IF EXISTS</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用于防止错误发生。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>DROP </span><span
style='color:#A5A5A5' lang=zh-CN>[TEMPORARY] </span><span style='color:#2E75B5'
lang=zh-CN>TABLE </span><span style='color:#A5A5A5' lang=zh-CN>[IF EXISTS]</span><span
style='color:#A5A5A5' lang=en-US> </span><span lang=zh-CN>tbl_name </span><span
style='color:#A5A5A5' lang=zh-CN>[, tbl_name]</span><span lang=zh-CN> …</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'>[RESTRICT | CASCADE]</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#444444' lang=zh-CN>mysql</span><span
style='color:#AB5656' lang=zh-CN>&gt; </span><span style='color:#0070C0'
lang=en-US>DROP</span><span style='color:#0070C0' lang=zh-CN> TABLE</span><span
style='color:#0070C0' lang=en-US> </span><span style='color:#2E75B5'
lang=en-US>IF EXISTS </span><span style='color:#444444' lang=zh-CN>students</span><span
style='color:#444444' lang=en-US> ;</span></p>

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

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果对表进行了分区，则该语句将删除表定义、其所有分区、存储在这些分区中的所有数据以及与删除的表关联的所有分区定义。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>删除表也会删除该表的所有触发器</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/drop-table.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/drop-table.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>


