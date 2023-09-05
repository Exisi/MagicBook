---
categories:
  - MySQL
tags:
  - DDL
  - TRUNCATE
date:
  - 2023-2-06 13:07:20
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.3145in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.3145in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#111111'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:#111111'
     lang=zh-CN>使用</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#E83E8C' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:black' lang=zh-CN>TRUNCATE TABLE</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#E83E8C'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:#111111' lang=zh-CN>可将表中所有记录清空，并将部分结构进行重置（如自增字段会恢复至初始值）</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#111111'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>TRUNCATE TABLE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>完全清空表。它需要</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DROP </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>权限。从逻辑上讲，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>TRUNCATE TABLE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>类似于删除所有行的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DELETE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句，或一系列</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DROP TABLE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CREATE TABLE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>为了实现高性能，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>TRUNCATE TABLE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>绕过了删除数据的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DML </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>方法。因此，它不会导致</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> ON DELETE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>触发器触发，它不能对具有父子外键关系的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> InnoDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表执行，也不能像</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DML </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>操作那样回滚。但是，如果服务器在操作期间停止，则使用支持原子</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DDL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的存储引擎的表上的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> TRUNCATE TABLE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>操作要么完全提交，要么回滚</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#111111'><span style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>TRUNCATE</span><span style='color:#111111'>
[TABLE] tbl_name</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#444444'>mysql</span><span style='color:#AB5656'>&gt;
</span><span style='color:#2E75B5'>TRUNCATE</span><span style='color:#444444'>
temp;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.03 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; </span><span lang=en-US>SELECT</span><span
lang=zh-CN> * </span><span lang=en-US>FROM</span><span lang=zh-CN>
temp;<br>
Empty set (0.00 sec)</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#111111'><span style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>尽管</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> TRUNCATE TABLE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>类似于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DELETE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，但它被归类为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DDL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句而不是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DML </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句。它在以下方面与</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DELETE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>不同：</span></li>
 <ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
  0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
  font-style:normal'>
  <li value=1 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:
      normal;font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>截断操作删除并重新创建表，这比逐行删除要快得多，尤其是对于大型表。</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>截断操作会导致隐式提交，因此无法回滚。</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果会话持有活动表锁，则无法执行截断操作。</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果引用该表的其他表存在任何</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'> FOREIGN KEY </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>约束，则对于</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'> InnoDB </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表或</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'> NDB </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表，</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'>TRUNCATE TABLE </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>将失败。允许在同一个表的列之间进行外键约束。</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>截断操作不会为已删除的行数返回有意义的值。通常的结果是“</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'>0 </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>行受影响”，这应该被解释为“没有信息”。</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>只要表定义有效，即使数据或索引文件已损坏，也可以使用</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'> TRUNCATE TABLE </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>将表重新创建为空表。</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>任何</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'> AUTO_INCREMENT </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>值都会重置为其起始值。即使对于通常不重用序列值的</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'> MyISAM </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'> InnoDB </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>也是如此。</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>当与分区表一起使用时，</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'>TRUNCATE TABLE </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>保留分区；也就是说，数据和索引文件被删除并重新创建，而分区定义不受影响。</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'>TRUNCATE TABLE </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句不调用</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'> ON DELETE </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>触发器。</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>支持截断损坏的</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'> InnoDB </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表。</span></li>
 </ol>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/truncate-table.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/truncate-table.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
