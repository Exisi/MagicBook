categories:
- MySQL
tags:
- Descending Indexes
date:
- 2023-4-4 15:04:30
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5027in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5027in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MySQL8.0</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>版本中支持了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>降序索引（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Descending
     Indexes</span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt' lang=zh-CN>）</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>功能，升序索引可用的所有数据类型都支持降序索引，现在我们可以在定义索引时指定索引列的排序方式</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>只有</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>存储引擎才支持降序索引，但有以下限制：</span></li>
 <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
  margin-bottom:0in'>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>I</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>nnoDB SQL
      </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
      lang=zh-CN>解析器不使用降序索引。对于</span><span style='font-family:"Comic Sans MS";
      font-size:12.0pt' lang=zh-CN> InnoDB </span><span style='font-family:
      "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>全文搜索，这意味着索引表的</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>
      FTS_DOC_ID </span><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt' lang=zh-CN>列上所需的索引不能定义为降序索引。</span></li>
 </ul>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果索引包含降序索引键列或主键包含降序索引列，则二级索引不支持更改缓冲。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'>CREATE TABLE user (</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'><span style='mso-spacerun:yes'>  </span>id int(11) NOT
NULL AUTO_INCREMENT,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'><span style='mso-spacerun:yes'>  </span>name varchar(50)
NOT NULL,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'><span style='mso-spacerun:yes'>  </span>age int(11) NOT
NULL,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'><span style='mso-spacerun:yes'>  </span>PRIMARY KEY (id),</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span
style='color:#2E75B5' lang=zh-CN>KEY</span><span lang=zh-CN> `name_age_idx`
(name,</span><span lang=en-US> </span><span lang=zh-CN>age</span><span
lang=en-US> </span><span style='color:#2E75B5' lang=en-US>DESC</span><span
lang=zh-CN>)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'>)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span> * <span style='color:#2E75B5'>FROM</span>
user</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ORDER BY</span><span lang=zh-CN>
name</span><span style='color:#C00000' lang=en-US> ASC</span><span lang=zh-CN>,
age</span><span lang=en-US> </span><span style='color:#C00000' lang=en-US>DESC</span><span
lang=zh-CN>;</span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>调整后索引的列顺序和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>order by</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>子句顺序完全一致，并且所有列的排序方向都一样，查询可以使用索引排序</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DISTINCT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>可以使用任何包含匹配列的索引，包括降序键部分。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>具有降序键部分的索引不用于调用聚合函数但没有</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> GROUP BY </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>子句的查询的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MIN()/MAX() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>优化。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>BTREE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>支持降序索引，但</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> HASH </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>索引、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> FULLTEXT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SPATIAL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>索引不支持降序索引。因此为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> HASH</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>FULLTEXT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SPATIAL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>索引显式指定</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> ASC </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DESC </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>指示符会导致错误。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/descending-indexes.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/descending-indexes.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>