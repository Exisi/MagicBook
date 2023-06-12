categories:
- MySQL
tags:
- PRIMARY KEY
date:
- 2023-3-11 21:04:12
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.25in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.25in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>设定为主键约束（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>PRIMARY
     KEY</span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>）后，自动会为主键列创建主键索引，主键索引列值唯一非空。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>CREATE TABLE</span> t_user(</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>id INT(10),</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>PRIMARY</span> KEY(id),</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>…</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'> </span>);</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>CREATE TABLE</span> t_user(</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>id INT(10)</span><span lang=en-US> </span><span
style='color:#2E75B5' lang=zh-CN>PRIMARY KEY</span><span lang=zh-CN>,</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>…</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'> </span>);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>Query OK, 0 rows affected (0.0</span><span lang=en-US>5</span><span
lang=zh-CN> sec)</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>ALTER TABLE</span><span
lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span lang=en-US>temp
</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>ADD</span><span lang=zh-CN> </span><span
style='color:#2E75B5' lang=en-US>PRIMARY KEY</span><span lang=zh-CN>(</span><span
lang=en-US>id</span><span lang=zh-CN>)</span><span lang=en-US>;</span><span
lang=zh-CN> </span><span lang=en-US><span style='mso-spacerun:yes'> </span></span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.15 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Records: 0<span style='mso-spacerun:yes'>  </span>Duplicates: 0<span
style='mso-spacerun:yes'>  </span>Warnings: 0</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Comic Sans MS"' lang=zh-CN>InnoDB</span><span style='font-weight:
bold;font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-weight:
bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>中的主键</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表中主键是必须存在的</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>存储引擎的表，记录默认会按照一定的顺序保存，如果有明确定义的主键，则按照主键顺序保存。如果没有主键，但是有唯一索引，那么就是按照唯一索引的顺序保存。如果既没有主键又没有唯一索引，那么表中会自动生成一个内部列，按照这个列的顺序保存。</span></li>
</ul>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:7pt;
     margin-bottom:7pt;color:#111111'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>建立主键索引的数据类型必须是有序的，若表的主键不是顺序的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>id</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，而是无规律数据，比如字符串，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>无法加单的把一行记录插入到索引的最后，而是需要找一个合适的位置（已有数据的中间位置），甚至产生大量的页分裂并且移动大量数据，在寻找合适位置进行插入时，目标页可能不在内存中，这就导致了大量的随机</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>IO</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>操作，影响插入效率。除此之外，大量的页分裂会导致大量的内存碎片。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表尽量自己指定主键，当表中同时有几个列都是唯一的，都可以作为主键时，要选择最常作为访问条件的列作为主键，提高查询的效率。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表的普通索引都会保存主键的键值，所以主键要尽可能选择较短的数据类型，可以有效地减少索引的磁盘占用，提高索引的缓存效果</span></li>
</ul>

<p style='margin-left:.375in;font-family:SimSun;font-size:12.0pt'>&nbsp;</p>

<p style='font-family:SimSun;font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Comic Sans MS"' lang=zh-CN>MyISAM</span><span style='font-weight:
bold;font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-weight:
bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>中的主键</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MyISAM</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中允许没有主键的表存在</span></li>
</ul>

</div>

</div>

</div>

<!--EndFragment-->
</body>