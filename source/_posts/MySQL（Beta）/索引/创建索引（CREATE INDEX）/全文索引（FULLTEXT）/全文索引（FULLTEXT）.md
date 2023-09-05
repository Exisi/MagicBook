---
categories:
  - MySQL
tags:
  - FULLTEXT
date:
  - 2023-3-14 10:14:12
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.2916in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.2916in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL 5.6</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;以前的版本，只有&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MyISAM</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;存储引擎支持全文索引</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL 5.6</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;及以后的版本，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MyISAM</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;和&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;存储引擎均支持全文索引</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL 5.7.6</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;中，提供了支持中文、日文和韩文（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>CJK</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>）的内置全文&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ngram </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>解析器，以及用于日文的可安装&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MeCab</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;全文解析器插件</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>全文索引只能用于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>InnoDB</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MyISAM</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>表，只能为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>CHAR</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>VARCHAR</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>TEXT</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>列创建。一个表只能建立一个全文索引（但可以指定多个字段）</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:black'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>全文索引创建速度慢，因为此时需要重建整张表，重建过程中，生成的临时文件是原表的数倍大小。而且在全文索引创建后对有全文索引的各种数据修改操作速度也会变慢</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>建立全文索引中有两项非常重要，一个是如何对文本进行分词，一是建立索引的数据结构。分词的方法基本上是二元分词法、最大匹配法和统计方法。索引的数据结构基本上采用倒排索引的结构。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>CREATE TABLE</span> t_user(</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US>name</span><span lang=zh-CN> </span><span lang=en-US>VARCHAR</span><span
lang=zh-CN>(</span><span lang=en-US>20</span><span lang=zh-CN>),</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>FULL TEXT</span><span
lang=en-US>(name)</span><span lang=zh-CN>,</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>…</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'> </span>);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>CREATE TABLE</span> t_user(</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US>name</span><span lang=zh-CN> </span><span lang=en-US>VARCHAR</span><span
lang=zh-CN>(</span><span lang=en-US>20</span><span lang=zh-CN>)</span><span
lang=en-US> </span><span style='color:#2E75B5' lang=en-US>FULL TEXT</span><span
lang=zh-CN>,</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>…</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'> </span>);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>Query OK, 0 rows affected (0.</span><span lang=en-US>5</span><span
lang=zh-CN> sec)</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#0070C0'>CREATE </span><span
style='color:#2E75B5'>FULL TEXT</span><span style='color:#0070C0'> INDEX </span>index_name</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS"'><span
style='font-size:12.0pt;color:#0070C0' lang=en-US>ON<span
style='mso-spacerun:yes'>  </span></span><span style='font-size:11.0pt'
lang=zh-CN>t_user</span><span style='font-size:12.0pt' lang=zh-CN>(</span><span
style='font-size:12.0pt' lang=en-US>name</span><span style='font-size:12.0pt'
lang=zh-CN>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>Query OK, 0 rows affected (0.0</span><span lang=en-US>5</span><span
lang=zh-CN> sec)</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS"'><span
style='font-size:12.0pt;color:#0070C0' lang=en-US>ALTER TABLE </span><span
style='font-size:11.0pt' lang=zh-CN>t_user</span><span style='font-size:12.0pt'
lang=en-US> </span><span style='font-size:12.0pt;color:#0070C0' lang=en-US>ADD </span><span
style='font-size:12.0pt;color:#2E75B5' lang=en-US>FULL TEXT </span><span
style='font-size:12.0pt' lang=en-US>index_name(</span><span style='font-size:
11.0pt' lang=en-US>name</span><span style='font-size:12.0pt' lang=en-US>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.15 sec)</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对于大型数据集，将数据加载到没有全文索引的表中然后创建索引要比将数据加载到具有现有全文索引的表中快得多</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:black'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'
     lang=zh-CN>全文索引是一个利用磁盘空间换取性能的方法，因此比模糊搜索（</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:black' lang=en-US>LIKE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'
     lang=zh-CN>）快</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:black' lang=en-US> N </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>倍，但是同时也容易导致磁盘资源的大量占用</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:black'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'
     lang=zh-CN>全文索引不区分大小写，全文索引找到的数据，可能和模糊查询（</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:#2E75B5' lang=en-US>LIKE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'
     lang=zh-CN>）的不一致</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:black'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对分区表不支持全文搜索</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:black'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>由多列组合而成的全文检索的索引必须使用相同的字符集与排序规则</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>&nbsp;</p>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'>来自</span><span
style='font-family:"Comic Sans MS"'> &lt;</span><a
href="https://www.cnblogs.com/yangyxd/p/15252691.html"><span style='font-family:
"Comic Sans MS"'>https://www.cnblogs.com/yangyxd/p/15252691.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
