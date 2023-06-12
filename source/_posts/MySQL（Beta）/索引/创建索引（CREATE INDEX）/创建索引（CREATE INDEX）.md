categories:
- MySQL
tags:
- CREATE INDEX
date:
- 2023-3-10 11:04:12
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.7159in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.7159in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>通常，使用
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5' lang=zh-CN>CREATE TABLE </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>创建表时，会在表上创建对应的索引，或着使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=en-US>ALTER TABLE </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>…</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=en-US> ADD </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句完成对索引的创建</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>CREATE</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=en-US> INDEX </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句也可以用于创建索引，与前两种方法不同，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>CREATE</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> INDEX </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>需要为索引指定一个索引名</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>CREATE </span><span
style='color:#A5A5A5' lang=zh-CN>[UNIQUE | FULLTEXT | SPATIAL] </span><span
style='color:#2E75B5' lang=zh-CN>INDEX</span><span style='color:black'
lang=zh-CN> index_name<br>
</span><span style='color:#A5A5A5' lang=zh-CN>[USING {BTREE | HASH}]</span><span
style='color:black' lang=zh-CN><br>
</span><span style='color:#2E75B5' lang=zh-CN>ON </span><span style='color:
#70AD47' lang=en-US>&lt;</span><span style='color:#70AD47' lang=zh-CN>tbl_name</span><span
style='color:#70AD47' lang=en-US>&gt;</span><span style='color:black'
lang=zh-CN> </span><span style='color:#909090' lang=zh-CN>(</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>{col_name </span><span style='color:#A5A5A5'>[(length)]</span>
| (expr)} [ASC | DESC],</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>…</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>)</span><span style='color:black'><br>
</span><span style='color:#909090'>[index_option]</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'>[</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'><span style='mso-spacerun:yes'> </span>ALGORITHM [=]
{DEFAULT | INPLACE | COPY}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'>| LOCK [=] {DEFAULT | NONE | SHARED | EXCLUSIVE}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'>]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'>…</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.2125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:8.0402in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>index_name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:8.0402in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>索引名称</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>&lt;tbl_name&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.0402in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据表名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>col_name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:8.0402in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据列名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>(expr)</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.0972in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>从</span><span
  style='font-family:"Comic Sans MS"'> MySQL 8.0.17 </span><span
  style='font-family:"Microsoft YaHei UI"'>开始，</span><span style='font-family:
  "Comic Sans MS"'>key_part </span><span style='font-family:"Microsoft YaHei UI"'>规范的</span><span
  style='font-family:"Comic Sans MS"'> expr </span><span style='font-family:
  "Microsoft YaHei UI"'>可以采用</span><span style='font-family:"Comic Sans MS"'>
  (CAST json_expression AS type ARRAY) </span><span style='font-family:"Microsoft YaHei UI"'>的形式在</span><span
  style='font-family:"Comic Sans MS"'> JSON </span><span style='font-family:
  "Microsoft YaHei UI"'>列上创建多值索引。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>形式为</span><span
  style='font-family:"Comic Sans MS"'> (key_part1, key_part2, ...) </span><span
  style='font-family:"Microsoft YaHei UI"'>的索引规范创建具有多个键部分的索引。索引键值是通过连接给定键部分的值形成的。例如</span><span
  style='font-family:"Comic Sans MS"'> (col1, col2, col3) </span><span
  style='font-family:"Microsoft YaHei UI"'>指定一个多列索引，其索引键由</span><span
  style='font-family:"Comic Sans MS"'> col1</span><span style='font-family:
  "Microsoft YaHei UI"'>、</span><span style='font-family:"Comic Sans MS"'>col2 </span><span
  style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
  "Comic Sans MS"'> col3 </span><span style='font-family:"Microsoft YaHei UI"'>的值组成。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>key_part
  </span><span style='font-family:"Microsoft YaHei UI"'>规范可以以</span><span
  style='font-family:"Comic Sans MS"'> ASC </span><span style='font-family:
  "Microsoft YaHei UI"'>或</span><span style='font-family:"Comic Sans MS"'> DESC
  </span><span style='font-family:"Microsoft YaHei UI"'>结尾，以指定索引值是按升序还是降序存储。如果没有给出顺序说明符，则默认为升序。</span><span
  style='font-family:"Comic Sans MS"'> HASH </span><span style='font-family:
  "Microsoft YaHei UI"'>索引不允许使用</span><span style='font-family:"Comic Sans MS"'>
  ASC </span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
  style='font-family:"Comic Sans MS"'> DESC</span><span style='font-family:
  "Microsoft YaHei UI"'>。多值索引也不支持</span><span style='font-family:"Comic Sans MS"'>
  ASC </span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
  style='font-family:"Comic Sans MS"'> DESC</span><span style='font-family:
  "Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.2125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>index_type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:8.0402in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>某些存储引擎允许您在创建索引时指定索引类型</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>index_option</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.1722in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.5805in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:4.409in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>说明</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.5805in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>KEY_BLOCK_SIZE</span><span style='color:#979797'> [=]</span><span
    style='color:black'> value</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.409in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于</span><span
    style='font-family:"Comic Sans MS"'> MyISAM </span><span style='font-family:
    "Microsoft YaHei UI"'>表，</span><span style='font-family:"Comic Sans MS"'>KEY_BLOCK_SIZE
    </span><span style='font-family:"Microsoft YaHei UI"'>可选择指定用于索引键块的字节大小。该值被视为提示；如有必要，可以使用不同的尺寸。为单个索引定义指定的</span><span
    style='font-family:"Comic Sans MS"'> KEY_BLOCK_SIZE </span><span
    style='font-family:"Microsoft YaHei UI"'>值会覆盖表级</span><span
    style='font-family:"Comic Sans MS"'> KEY_BLOCK_SIZE </span><span
    style='font-family:"Microsoft YaHei UI"'>值。</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>InnoDB
    </span><span style='font-family:"Microsoft YaHei UI"'>表的索引级别不支持</span><span
    style='font-family:"Comic Sans MS"'> KEY_BLOCK_SIZE</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.5805in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>index_type</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.409in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>某些存储引擎允许您在创建索引时指定索引类型</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.5805in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>WITH PARSER</span><span style='color:black'>
    parser_name</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.4784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>此选项只能与</span><span
    style='font-family:"Comic Sans MS"'> FULLTEXT </span><span
    style='font-family:"Microsoft YaHei UI"'>索引一起使用。如果全文索引和搜索操作需要特殊处理，它会将解析器插件与索引相关联。</span><span
    style='font-family:"Comic Sans MS"'> InnoDB </span><span style='font-family:
    "Microsoft YaHei UI"'>和</span><span style='font-family:"Comic Sans MS"'>
    MyISAM </span><span style='font-family:"Microsoft YaHei UI"'>支持全文解析器插件。如果你有一个</span><span
    style='font-family:"Comic Sans MS"'> MyISAM </span><span style='font-family:
    "Microsoft YaHei UI"'>表和一个关联的全文解析器插件，你可以使用</span><span style='font-family:
    "Comic Sans MS"'> ALTER TABLE </span><span style='font-family:"Microsoft YaHei UI"'>将表转换为</span><span
    style='font-family:"Comic Sans MS"'> InnoDB</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.5805in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>COMMENT </span><span style='color:#669900'>'string'</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.4354in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>索引定义可以包括最多</span><span
    style='font-family:"Comic Sans MS"'> 1024 </span><span style='font-family:
    "Microsoft YaHei UI"'>个字符的可选注释。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>可以使用</span><span
    style='font-family:"Comic Sans MS"'> CREATE INDEX </span><span
    style='font-family:"Microsoft YaHei UI"'>语句的</span><span style='font-family:
    "Comic Sans MS"'> index_option COMMENT </span><span style='font-family:
    "Microsoft YaHei UI"'>子句为单个索引配置索引页的</span><span style='font-family:"Comic Sans MS"'>
    MERGE_THRESHOLD</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果在删除行或更新操作缩短行时索引页的页满百分比低于</span><span
    style='font-family:"Comic Sans MS"'> MERGE_THRESHOLD </span><span
    style='font-family:"Microsoft YaHei UI"'>值，</span><span style='font-family:
    "Comic Sans MS"'>InnoDB </span><span style='font-family:"Microsoft YaHei UI"'>会尝试将索引页与相邻索引页合并。默认</span><span
    style='font-family:"Comic Sans MS"'> MERGE_THRESHOLD </span><span
    style='font-family:"Microsoft YaHei UI"'>值为</span><span style='font-family:
    "Comic Sans MS"'> 50</span><span style='font-family:"Microsoft YaHei UI"'>，这是之前硬编码的值。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>MERGE_THRESHOLD
    </span><span style='font-family:"Microsoft YaHei UI"'>也可以使用</span><span
    style='font-family:"Comic Sans MS"'> CREATE TABLE </span><span
    style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
    "Comic Sans MS"'> ALTER TABLE </span><span style='font-family:"Microsoft YaHei UI"'>语句在索引级别和表级别定义</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.5805in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:black'>{</span><span style='color:#2E75B5'>VISIBLE</span>| <span
    style='color:#2E75B5'>INVISIBLE</span><span style='color:black'>}</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.409in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>指定索引可见性。默认情况下索引是可见的。优化器不使用不可见索引。索引可见性规范适用于主键以外的索引（显式或隐式）。想要查询更多的信息</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.5805in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>ENGINE_ATTRIBUTE </span><span style='color:#979797'>[=]
    </span><span style='color:#669900'>'string'</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.4784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>主要存储引擎的索引属性。这些选项保留供将来使用。</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>允许的值是包含有效</span><span
    style='font-family:"Comic Sans MS"'> JSON </span><span style='font-family:
    "Microsoft YaHei UI"'>文档或空字符串</span><span style='font-family:"Comic Sans MS"'>
    ('') </span><span style='font-family:"Microsoft YaHei UI"'>的字符串文字。无效的</span><span
    style='font-family:"Comic Sans MS"'> JSON </span><span style='font-family:
    "Microsoft YaHei UI"'>被拒绝</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>ENGINE_ATTRIBUTE
    </span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
    style='font-family:"Comic Sans MS"'> SECONDARY_ENGINE_ATTRIBUTE </span><span
    style='font-family:"Microsoft YaHei UI"'>值可以重复而不会出错。在这种情况下，使用最后指定的值。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>服务器不检查</span><span
    style='font-family:"Comic Sans MS"'> ENGINE_ATTRIBUTE </span><span
    style='font-family:"Microsoft YaHei UI"'>值，也不会在表的存储引擎更改时清除它们。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.5805in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>SECONDARY_ENGINE_ATTRIBUTE</span><span
    style='color:#979797'> [=] </span><span style='color:#669900'>'string'</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.4784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>主要存储引擎的索引属性。这些选项保留供将来使用。</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>允许的值是包含有效</span><span
    style='font-family:"Comic Sans MS"'> JSON </span><span style='font-family:
    "Microsoft YaHei UI"'>文档或空字符串</span><span style='font-family:"Comic Sans MS"'>
    ('') </span><span style='font-family:"Microsoft YaHei UI"'>的字符串文字。无效的</span><span
    style='font-family:"Comic Sans MS"'> JSON </span><span style='font-family:
    "Microsoft YaHei UI"'>被拒绝</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>ENGINE_ATTRIBUTE
    </span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
    style='font-family:"Comic Sans MS"'> SECONDARY_ENGINE_ATTRIBUTE </span><span
    style='font-family:"Microsoft YaHei UI"'>值可以重复而不会出错。在这种情况下，使用最后指定的值。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>服务器不检查</span><span
    style='font-family:"Comic Sans MS"'> SECONDARY_ENGINE_ATTRIBUTE </span><span
    style='font-family:"Microsoft YaHei UI"'>值，也不会在表的存储引擎更改时清除它们。</span></p>
    </td>
   </tr>
  </table>
  </div>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>CREATE INDEX </span><span
lang=en-US>age</span><span lang=zh-CN>_index </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ON </span><span lang=en-US>person</span><span
style='color:#909090' lang=zh-CN>(</span><span lang=en-US>age</span><span
style='color:#909090' lang=zh-CN>)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>Query OK, 0 rows affected (0.0</span><span lang=en-US>5</span><span
lang=zh-CN> sec)</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>CREATE INDEX </span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>不能用于创建主键索引（</span><span
style='font-family:"Comic Sans MS"' lang=en-US>P</span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>RIMARY KEY</span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>）</span></p>

<p style='font-family:Calibri;font-size:12.0pt'>&nbsp;</p>

<p style='font-family:Calibri;font-size:11.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt; </span><a
href="https://dev.mysql.com/doc/refman/8.0/en/create-index.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/create-index.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>