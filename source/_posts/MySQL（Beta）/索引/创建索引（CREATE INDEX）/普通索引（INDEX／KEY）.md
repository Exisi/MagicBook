categories:
- MySQL
tags:
- INDEX
- KEY
date:
- 2023-3-13 19:04:12
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.9784in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.9784in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>普通索引是最基本的索引类型，基于普通字段建立的索引，没有任何限制，允许重复和空值</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>普通索引的作用主要是提高对数据的访问速度，因此，应该只为那些最经常出现在查询条件（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>where</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>）和排序（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>order by</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>）中的数据列创建普通索引</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>CREATE TABLE </span><span
lang=en-US>p</span><span lang=zh-CN>ersons(</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>id INT(10),</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0070C0' lang=en-US>INDEX</span><span lang=zh-CN>(id),</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>…</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'> </span>);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>CREATE TABLE </span><span
lang=en-US>p</span><span lang=zh-CN>ersons(</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>id INT(10)</span><span lang=en-US> </span><span
style='color:#0070C0' lang=en-US>INDEX</span><span lang=zh-CN>,</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>…</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'> </span>);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.5 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Records: 0<span style='mso-spacerun:yes'>  </span>Duplicates: 0<span
style='mso-spacerun:yes'>  </span>Warnings: 0</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#0070C0'>CREATE INDEX </span>index_name</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#0070C0'>ON </span><span
style='mso-spacerun:yes'> </span>result(studnetNo, subjectNo);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.15 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Records: 0<span style='mso-spacerun:yes'>  </span>Duplicates: 0<span
style='mso-spacerun:yes'>  </span>Warnings: 0</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#0070C0'>ALTER TABLE</span> result <span
style='color:#0070C0'>ADD INDEX </span>index_name(studnetNo, subjectNo);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

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