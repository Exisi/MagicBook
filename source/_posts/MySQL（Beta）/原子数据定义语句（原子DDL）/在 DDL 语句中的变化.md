---
categories:
  - MySQL
tags:
  - DDL
date:
  - 2023-1-25 16:32:12
---

<body lang=zh-CN style='font-family:Calibri;font-size:11.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.6902in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.6902in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果所有命名表都使用原子</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DDL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>支持的存储引擎，则操作是完全原子的。该语句要么成功删除所有表，要么回滚。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对于使用支持原子</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DDL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的存储引擎的表，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>CREATE TABLE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ALTER TABLE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>RENAME TABLE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>TRUNCATE TABLE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>CREATE TABLE SPACE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DROP TABLE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>操作要么完全提交，要么在服务器运行期间停止时回滚。在早期的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>版本中，这些操作的中断可能会导致存储引擎、数据字典和二进制日志之间的差异，或者留下孤立文件。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>DROP TABLE</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果所有命名表都使用原子</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DDL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>支持的存储引擎，则</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DROP TABLE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>操作是完全原子的。该语句要么成功删除所有表，要么回滚。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果命名表不存在，并且无论存储引擎如何，都不会进行任何更改，则</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DROP TABLE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>将失败并显示错误。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对于删除多个表的操作，不使用原子</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DDL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>支持的存储引擎的表会在使用原子</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DDL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>支持的存储引擎的表之前删除。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>以下示例演示了这种行为更改，其中</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DROP TABLE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句因命名表不存在而失败：</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>CREATE TABLE</span><span style='color:black'> t1 </span><span
style='color:#909090'>(</span><span style='color:black'>c1 </span><span
style='color:#834689'>INT</span><span style='color:#909090'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>DROP TABLE</span><span style='color:black'> t1</span><span
style='color:#909090'>,</span><span style='color:black'> t2</span><span
style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#555555'>ERROR 1051 (42S02)</span><span
style='color:#979797'>:</span><span style='color:#555555'> Unknown table
'test.t2'</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>SHOW TABLES</span><span style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#979797' lang=en-US>+------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#979797'>|</span><span style='color:#555555'>
Tables_in_test </span><span style='color:#979797'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#979797' lang=en-US>+------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#979797'>|</span><span style='color:#555555'>
t1<span style='mso-spacerun:yes'>                      </span></span><span
style='color:#979797'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#979797' lang=en-US>+------------------+</p>

<p style='margin-left:.75in;font-family:SimSun;font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在引入原子</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DDL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>之前，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DROP TABLE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>会为不存在但对确实存在的命名表成功执行的命名表报告错误</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>CREATE TABLE</span><span style='color:black'> t1 </span><span
style='color:#909090'>(</span><span style='color:black'>c1 </span><span
style='color:#834689'>INT</span><span style='color:#909090'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>DROP TABLE</span><span style='color:black'> t1</span><span
style='color:#909090'>,</span><span style='color:black'> t2</span><span
style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#555555'>ERROR 1051 (42S02)</span><span
style='color:#979797'>:</span><span style='color:#555555'> Unknown table
'test.t2'</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>SHOW TABLES</span><span style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#979797' lang=en-US>+------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#979797'>|</span><span style='color:#555555'>
Tables_in_test </span><span style='color:#979797'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#979797' lang=en-US>+------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#979797'>|</span><span style='color:#555555'>
t1<span style='mso-spacerun:yes'>                     </span></span><span
style='color:#979797'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#979797' lang=en-US>+------------------+</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>由于原子</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>DDL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的这种变化，在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MySQL 8.0</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>副本上复制</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MySQL 5.7</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>复制源服务器上部分完成的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>DROP TABLE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句时会失败。若要避免此失败情况，请在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> DROP
     TABLE </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>语句中使用语法，以防止不存在的表发生错误，请使用</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>I</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>F EXISTS</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>从文件系统中删除数据库目录是最后发生的，并且不是原子操作的一部分。如果由于文件系统错误或服务器停止而导致删除数据库目录失败，则不会回滚</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DROP DATABASE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>事务。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对于不使用支持原子</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DDL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的存储引擎的表，表删除发生在原子</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DROP table</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DROP</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数据库事务之外。这样的表删除会单独写入二进制日志，这将存储引擎、数据字典和二进制日志之间的差异限制为在中断删除表或删除数据库操作的情况下最多一个表。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>CREATE TABLE ... SELECT</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>从</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL 8.0.21 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>开始，在支持</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> atomic DDL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的存储引擎上，当使用基于行的复制时，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>CREATE TABLE ...
     SELECT </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt'>语句将作为一个事务记录在二进制日志中。以前，它被记录为两个事务，一个用于创建表，另一个用于插入数据。两个事务之间或插入数据时的服务器故障可能会导致空表的复制。随着原子</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DDL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>支持的引入，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>CREATE TABLE ...
     SELECT </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt'>语句现在对于基于行的复制是安全的，并且允许与基于</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> GTID </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>的复制一起使用。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在同时支持原子</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DDL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和外键约束的存储引擎上，当使用基于行的复制时，不允许在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CREATE TABLE ...
     SELECT </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt'>语句中创建外键。但是可以在其后使用</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> ALTER TABLE </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>添加外键约束。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>当</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CREATE TABLE ...
     SELECT </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt'>作为原子操作应用时，在插入数据时会在表上持有元数据锁，从而防止在操作期间并发访问表。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>DROP VIEW</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果命名视图不存在并且不进行任何更改，则</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DROP VIEW </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>失败。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>此示例演示了行为的变化，其中</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DROP VIEW </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句失败，因为命名视图不存在：</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>CREATE VIEW</span><span style='color:black'> test</span><span
style='color:#909090'>.</span><span style='color:black'>viewA </span><span
style='color:#0077AA'>AS SELECT </span><span style='color:#A67F59'>* </span><span
style='color:#0077AA'>FROM</span><span style='color:black'> t</span><span
style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>DROP VIEW</span><span style='color:black'> test</span><span
style='color:#909090'>.</span><span style='color:black'>viewA</span><span
style='color:#909090'>,</span><span style='color:black'> test</span><span
style='color:#909090'>.</span><span style='color:black'>viewB</span><span
style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#555555'>ERROR 1051 (42S02)</span><span
style='color:#979797'>:</span><span style='color:#555555'> Unknown table
'test.viewB'</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>SHOW FULL TABLES IN</span><span style='color:black'> test
</span><span style='color:#0077AA'>WHERE</span><span style='color:black'>
TABLE_TYPE </span><span style='color:#A67F59'>LIKE </span><span
style='color:#669900'>'VIEW'</span><span style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#979797' lang=en-US>+-------------------+--------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#979797'>|</span><span style='color:#555555'>
Tables_in_test<span style='mso-spacerun:yes'>  </span></span><span
style='color:#979797'>|</span><span style='color:#555555'> Table_type </span><span
style='color:#979797'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#979797' lang=en-US>+-------------------+--------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#979797'>|</span><span style='color:#555555'>
viewA<span style='mso-spacerun:yes'>                 </span></span><span
style='color:#979797'>|</span><span style='color:#555555'> VIEW<span
style='mso-spacerun:yes'>         </span></span><span style='color:#979797'>|</span></p>

<p style='margin-left:.375in;font-family:Consolas;font-size:12.0pt;
color:#979797' lang=en-US>+--------------+-----------+</p>

<p style='margin-left:.375in;font-family:Consolas;font-size:12.0pt;
color:#979797' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在引入原子</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DDL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>之前，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DROP VIEW</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>为不存在的命名视图返回一个错误，但为存在的命名视图返回一个成功的错误：</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>CREATE VIEW</span><span style='color:black'> test</span><span
style='color:#909090'>.</span><span style='color:black'>viewA </span><span
style='color:#0077AA'>AS SELECT </span><span style='color:#A67F59'>* </span><span
style='color:#0077AA'>FROM</span><span style='color:black'> t</span><span
style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>DROP VIEW</span><span style='color:black'> test</span><span
style='color:#909090'>.</span><span style='color:black'>viewA</span><span
style='color:#909090'>,</span><span style='color:black'> test</span><span
style='color:#909090'>.</span><span style='color:black'>viewB</span><span
style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#555555'>ERROR 1051 (42S02)</span><span
style='color:#979797'>:</span><span style='color:#555555'> Unknown table
'test.viewB'</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>SHOW FULL TABLES IN</span><span style='color:black'> test
</span><span style='color:#0077AA'>WHERE</span><span style='color:black'>
TABLE_TYPE </span><span style='color:#A67F59'>LIKE </span><span
style='color:#669900'>'VIEW'</span><span style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555' lang=en-US>Empty set (0.00 sec)</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>由于这种行为变化，在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL 5.7 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>复制源服务器上部分完成的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DROP VIEW </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>操作在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL 8.0 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>副本上复制时会失败。要避免这种失败情况，请在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DROP VIEW </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句中使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> IF EXISTS </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语法来防止不存在的视图发生错误。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt' lang=en-US><span
style='font-weight:bold'>CREATE USER</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>不再允许部分执行账户管理报表。帐户管理语句要么对所有指定用户成功，要么回滚并且在发生错误时无效。在早期的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>版本中，命名多个用户的帐户管理语句可能对某些用户成功而对其他用户失败。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>此示例演示了行为的更改，其中第二个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CREATE USER </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句返回错误但失败，因为它不能为所有命名用户成功。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>CREATE USER</span><span style='color:black'> userA</span><span
style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>CREATE USER</span><span style='color:black'> userA</span><span
style='color:#909090'>,</span><span style='color:black'> userB</span><span
style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#555555'>ERROR 1396 (HY000)</span><span
style='color:#979797'>:</span><span style='color:#555555'> Operation CREATE
USER failed for 'userA'@'%'</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>SELECT User FROM</span><span style='color:black'> mysql</span><span
style='color:#909090'>.</span><span style='color:#0077AA'>user WHERE User </span><span
style='color:#A67F59'>LIKE </span><span style='color:#669900'>'user%'</span><span
style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#979797' lang=en-US>+--------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#979797'>|</span><span style='color:#555555'>
User<span style='mso-spacerun:yes'>   </span></span><span style='color:#979797'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#979797' lang=en-US>+--------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#979797'>|</span><span style='color:#555555'>
userA </span><span style='color:#979797'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#979797' lang=en-US>+--------+</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在引入原子</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DDL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>之前，第二个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CREATE USER </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句为不存在的命名用户返回错误，但为确实存在的命名用户返回错误：</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>CREATE USER</span><span style='color:black'> userA</span><span
style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>CREATE USER</span><span style='color:black'> userA</span><span
style='color:#909090'>,</span><span style='color:black'> userB</span><span
style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#555555'>ERROR 1396 (HY000)</span><span
style='color:#979797'>:</span><span style='color:#555555'> Operation CREATE
USER failed for 'userA'@'%'</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>SELECT User FROM</span><span style='color:black'> mysql</span><span
style='color:#909090'>.</span><span style='color:#0077AA'>user WHERE User </span><span
style='color:#A67F59'>LIKE </span><span style='color:#669900'>'user%'</span><span
style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#979797' lang=en-US>+--------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#979797'>|</span><span style='color:#555555'>
User<span style='mso-spacerun:yes'>   </span></span><span style='color:#979797'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#979797' lang=en-US>+--------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#979797'>|</span><span style='color:#555555'>
userA </span><span style='color:#979797'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#979797'>|</span><span style='color:#555555'>
userB </span><span style='color:#979797'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#979797' lang=en-US>+--------+</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>由于这种行为变化，在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL 8.0 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>副本上复制时，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL 5.7 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>复制源服务器上部分完成的帐户管理语句会失败。为避免这种失败情况，请在帐户管理语句中酌情使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> IF EXISTS </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> IF NOT EXISTS </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语法，以防止与命名用户相关的错误。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/atomic-ddl.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/atomic-ddl.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
