categories:
- MySQL
tags:
- DDL
- PRIMARY KEY
date:
- 2023-1-29 14:56:14
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.1562in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.1562in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>主键约束用于唯一的标识表中的某一条记录</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>ALTER TABLE</span><span
lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span lang=en-US>&lt;</span><span
style='color:#70AD47' lang=zh-CN>tbl_name</span><span style='color:#70AD47'
lang=en-US>&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>ADD</span><span lang=zh-CN> </span><span
style='color:#D8D8D8' lang=en-US>[CONSTRAINT [symbol]]</span><span lang=zh-CN> </span><span
style='color:#2E75B5' lang=en-US>PRIMARY KEY </span><span style='color:#D8D8D8'
lang=zh-CN>[index_name]</span><span style='color:#D8D8D8' lang=en-US> </span><span
lang=zh-CN>(</span><span lang=en-US>&lt;</span><span lang=zh-CN>column_name</span><span
lang=en-US>&gt;, …);<span style='mso-spacerun:yes'>  </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.7041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.468in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:white'><span style='font-weight:
  bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>描述</span><span
  style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> </span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.7041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>[symbol]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.468in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>约束名，非字符串</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.7041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>&lt;</span><span lang=zh-CN>tbl_name</span><span lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.468in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据表名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.7041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[index_name]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.468in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据列在表中的索引</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.7041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>&lt;</span><span lang=zh-CN>column_name</span><span lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.468in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据表列名</p>
  </td>
 </tr>
</table>

</div>

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

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>ALTER TABLE</span><span
lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span lang=en-US>temp
</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>ADD</span><span lang=zh-CN> </span><span
style='color:#2E75B5' lang=en-US>PRIMARY KEY</span><span lang=zh-CN>(</span><span
lang=en-US>id,name</span><span lang=zh-CN>)</span><span lang=en-US>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.15 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Records: 0<span style='mso-spacerun:yes'>  </span>Duplicates: 0<span
style='mso-spacerun:yes'>  </span>Warnings: 0</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:7pt;
     margin-bottom:7pt;line-height:19pt'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>数据库主键用完后分两种情况：</span></li>
 <ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
  0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
  font-style:normal'>
  <li value=1 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:
      normal;font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>有主键，报</span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:
      bold;font-style:normal;font-weight:bold;font-family:"Microsoft YaHei UI";
      font-size:12.0pt'>主键冲突</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>无主键，</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'>InnDB </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>会自动生成一个全局的</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'> row_id</span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。它到达最大值后会从</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'> 0 </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>开始算，遇到</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'> row_id </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>一样时，新数据覆盖</span><span
      style='font-weight:bold;font-family:"Microsoft YaHei UI";font-size:12.0pt'>旧数据</span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。所以，我们还是尽量给表设置主键</span></li>
 </ol>
</ul>

</div>

</div>

</div>

<!--EndFragment-->
</body>
