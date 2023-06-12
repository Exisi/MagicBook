categories:
- MySQL
tags:
- Generated Column
date:
- 2023-4-9 18:34:30
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.3291in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.3291in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>5.7</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>引入了</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:#24292E'>生成列（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292E'>Generated
     Column</span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
     color:#24292E'>）</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>，虚拟列是由数据库中的某一列由其他列计算而得。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>生成列可以模拟函数索引：使用生成列定义函数表达式并对其进行索引。这对于处理无法直接索引的类型的列很有用，例如</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>列，而其中对于存储生成列（</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt' lang=zh-CN>Stored
     Generated Column</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>），这种方法的缺点是值被存储了两次；一次作为生成列的值，一次在索引中。因此默认情况下使用虚拟生成列（</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt' lang=en-US>V</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt' lang=zh-CN>irtual
     Generated Column</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>）作为生成列进行索引</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果生成列被索引，优化器会识别与列定义匹配的查询表达式，并在查询执行期间适当地使用列中的索引，即使查询不直接按名称引用列也是如此。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MySQL 5.7</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中，支持两种</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:#24292E'
     lang=zh-CN>生成</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>列</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.2236in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>虚拟列</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.05in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>名称</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.5083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.2236in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>V</span><span lang=zh-CN>irtual Generated Column</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.05in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>虚拟生成列</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.627in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>只将</span><span
  style='font-family:"Comic Sans MS"'>Generated Column</span><span
  style='font-family:"Microsoft YaHei UI"'>保存在数据字典中（表的元数据），并不会将这一列数据持久化到磁盘上</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>MySQL 5.7</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>中，不指定</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>Generated
  Column</span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的类型，默认是</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>V</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>irtual Generated Column</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.2236in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Stored
  Generated Column</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.05in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>存储生成列</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.5368in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>将</span><span
  style='font-family:"Comic Sans MS"'>Generated Column</span><span
  style='font-family:"Microsoft YaHei UI"'>持久化到磁盘上，而不是每次读取的时候计算所得。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>存储生成列（</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt'>Stored Generated
     Column</span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>）的外键约束不能使用
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5'>CASCADE</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:#2E75B5'>、</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5'>SET NULL </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt'>或 </span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:#2E75B5'>SET DEFAULT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>作为 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>ON
     UPDATE </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt'>引用操作，也不能使用 </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5'>SET NULL </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt'>或 </span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:#2E75B5'>SET DEFAULT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>作为 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>ON
     DELETE </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt'>引用操作。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>存储生成列（</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt'>Stored Generated
     Column</span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>）的引用列上的外键约束不能使用
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5'>CASCADE</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>、</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5'>SET NULL </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt'>或 </span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:#2E75B5'>SET DEFAULT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>作为 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>ON
     UPDATE </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt'>或 </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5'>ON DELETE </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>引用操作。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>存储生成列（</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt'>Stored Generated
     Column</span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>）可用作物化缓存，用于动态计算成本高昂的复杂条件。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>虚拟生成列（</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt' lang=en-US>V</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt' lang=zh-CN>irtual
     Generated Column</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>）被外键约束引用。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>虚拟生成列（</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt' lang=en-US>V</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt' lang=zh-CN>irtual
     Generated Column</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>）可用作简化和统一查询的一种方式。一个复杂的条件可以定义为一个生成的列，并从表上的多个查询中引用，以确保它们都使用完全相同的条件。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>允许在表中混合
     虚拟生成列（</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US>V</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt' lang=zh-CN>irtual Generated Column</span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>） 和 存储生成列（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Stored
     Generated Column</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>）。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>col_name data_type </span><span
style='color:#BFBFBF'>[GENERATED ALWAYS] </span><span style='color:#0077AA'>AS </span><span
style='color:#909090'>(</span><span style='color:black'>expr</span><span
style='color:#909090'>)</span><span style='color:black'><br>
</span><span style='color:#BFBFBF'><span style='mso-spacerun:yes'> 
</span>[VIRTUAL | STORED] [NOT NULL | NULL]<br>
<span style='mso-spacerun:yes'>  </span>[UNIQUE [KEY]] [[PRIMARY]
KEY]<br>
<span style='mso-spacerun:yes'>  </span>[COMMENT 'string']</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.5951in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>col_name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.5951in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据列名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>data_type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.5951in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据列类型</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>GENERATED
  ALWAYS</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.5951in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>指定生成的是一个虚拟列，以使列的生成性质更加明确。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>(</span><span lang=zh-CN>expr</span><span lang=en-US>)</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.5951in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>并定义用于计算列值的表达式。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>VIRTUAL</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.6208in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>不存储列值，但在读取行时，在任何</span><span
  style='font-family:"Comic Sans MS"'> BEFORE </span><span style='font-family:
  "Microsoft YaHei UI"'>触发器之后立即对其进行评估。虚拟列不占用存储空间。如果未指定任何关键字，则默认值为</span><span
  style='font-family:"Comic Sans MS"'>VIRTUAL</span><span style='font-family:
  "Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>STORED</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.5951in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>列值在插入或更新行时被评估和存储。存储列确实需要存储空间并且可以被索引。</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果生成列使用 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#C00000'>TIMESTAMP
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数据类型，则忽略</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>
     explicit_defaults_for_timestamp </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>的设置。在这种情况下，如果禁用此变量，则不会将 </span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:#2E75B5'>NULL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>转换为 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#C00000'>CURRENT_TIMESTAMP</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL 8.0.22 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>及更高版本中，如果该列也声明为 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>NOT
     NULL</span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，则尝试插入
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5'>NULL </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>会被显式拒绝并返回</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> ER_BAD_NULL_ERROR</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>生成的列表达式</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> (</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>expr</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>) </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>必须遵守以下规则。如果表达式包含不允许的构造，则会发生错误。</span></li>
</ul>

<p><cite style='margin-left:.375in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</cite></p>

<ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
 0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
 font-style:normal'>
 <li value=1 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>生成的列表达式允许使用文字、确定性内置函数和运算符。如果给定表中相同的数据，多个调用产生相同的结果，而与连接的用户无关，则函数是确定的。但是不允许使用不确定且未通过此定义的函数，例如：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt;color:#C00000'
     lang=zh-CN>CONNECTION_ID</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>()</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>、</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt;color:#C00000' lang=zh-CN>CURRENT_USER</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US>()</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>、</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt;color:#C00000' lang=zh-CN>NOW</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US>()</span></li>
</ol>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
 0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
 font-style:normal'>
 <li value=2 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>生成的列表达式不允许使用存储函数和可加载函数。</span></li>
</ol>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
 0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
 font-style:normal'>
 <li value=3 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>生成的列表达式不允许使用存储过程和函数参数。</span></li>
</ol>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
 0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
 font-style:normal'>
 <li value=4 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>生成的列表达式不允许使用变量（系统变量、用户定义的变量和存储的程序本地变量）。</span></li>
</ol>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
 0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
 font-style:normal'>
 <li value=5 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>生成的列表达式不允许使用子查询。</span></li>
</ol>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
 0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
 font-style:normal'>
 <li value=6 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>生成的列定义可以引用其他生成的列，但只能引用表定义中较早出现的列。生成的列定义可以引用表中的任何基列（非生成的），无论其定义发生在更早或更晚。</span></li>
</ol>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
 0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
 font-style:normal'>
 <li value=7 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>AUTO_INCREMENT</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>属性不能在生成的列定义中使用，且</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US> </span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=zh-CN>AUTO_INCREMENT</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>列不能用作生成的列定义中的基列，因为自增的列是不确定的</span></li>
</ol>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>生成的列表达式</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> (</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>expr</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>) </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>求值导致截断或为函数提供了不正确的输入，那么</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>CREATE TABLE</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句将终止并返回错误，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>DDL</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>操作将被拒绝。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>生成列允许使用列名和别名表达式两种方法匹配</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'>CREATE TABLE t1 (</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#BFBFBF'>first_name VARCHAR(10),<br>
last_name VARCHAR(10),</span><span style='color:black'><br>
</span><span style='color:black;background:#DBE5F1'>full_name </span><span
style='color:#834689'>VARCHAR</span><span style='color:#909090'>(</span><span
style='color:#990055'>255</span><span style='color:#909090'>) </span><span
style='color:#0077AA'>AS </span><span style='color:#909090'>(</span><span
style='color:#DD4A68;background:#F2DCDB'>CONCAT</span><span style='color:#909090;
background:#F2DCDB'>(</span><span style='color:black;background:#F2DCDB'>first_name</span><span
style='color:#909090;background:#F2DCDB'>,</span><span style='color:#669900;
background:#F2DCDB'>' '</span><span style='color:#909090;background:#F2DCDB'>,</span><span
style='color:black;background:#F2DCDB'>last_name</span><span style='color:#909090;
background:#F2DCDB'>)</span><span style='color:#909090'>)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'>);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>SELECT </span><span style='color:black;
background:#DBE5F1'>full_name </span><span style='color:#0077AA'>FROM</span><span
style='color:black'> t1</span><span style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA' lang=zh-CN>SELECT </span><span
style='color:#DD4A68;background:#F2DCDB' lang=zh-CN>CONCAT</span><span
style='color:#909090;background:#F2DCDB' lang=zh-CN>(</span><span
style='color:black;background:#F2DCDB' lang=zh-CN>first_name</span><span
style='color:#909090;background:#F2DCDB' lang=zh-CN>,</span><span
style='color:#669900;background:#F2DCDB' lang=zh-CN>' '</span><span
style='color:#909090;background:#F2DCDB' lang=zh-CN>,</span><span
style='color:black;background:#F2DCDB' lang=zh-CN>last_name</span><span
style='color:#909090;background:#F2DCDB' lang=zh-CN>)</span><span
style='color:#909090' lang=en-US> </span><span style='color:#0077AA'
lang=zh-CN>FROM</span><span style='color:black' lang=zh-CN> t1</span><span
style='color:#909090' lang=zh-CN>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>避免写出表达式的一种方法是在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> t1 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>上创建一个视图</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> v1</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，这通过使应用程序能够直接选择</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> full_name </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>而无需使用表达式来简化应用程序</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>CREATE VIEW</span><span style='color:black'>
v1 </span><span style='color:#0077AA'>AS</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>SELECT </span><span style='color:#A67F59'>*</span><span
style='color:#909090'>, </span><span style='color:#DD4A68'>CONCAT</span><span
style='color:#909090'>(</span><span style='color:black'>first_name</span><span
style='color:#909090'>,</span><span style='color:#669900'>' '</span><span
style='color:#909090'>,</span><span style='color:black'>last_name</span><span
style='color:#909090'>) </span><span style='color:#0077AA'>AS</span><span
style='color:black'> full_name </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>FROM</span><span style='color:black'> t1</span><span
style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>SELECT</span><span style='color:black'>
full_name </span><span style='color:#0077AA'>FROM</span><span style='color:
black'> v1</span><span style='color:#909090'>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对于 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>INSERT</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>REPLACE
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>UPDATE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，如果生成列被显式插入、替换或更新，则唯一允许的值为
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5'>DEFAULT</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MySQL</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中允许按生成列进行分区</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>触发器不能使用 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>NEW</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>.col_name </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>或使用 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>OLD</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>.col_name </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>来引用生成列。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>视图中生成列被认为是可更新的，因为它可以分配给它。但是，如果显式更新此类列，则唯一允许的值为
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5'>DEFAULT</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>。</span></li>
</ul>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/create-table-generated-columns.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/create-table-generated-columns.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>