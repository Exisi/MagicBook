categories:
- MySQL
tags:
- DDL
- DEFAULT
date:
- 2023-1-29 14:55:43
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.8388in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.8388in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>默认值约束用来指定某列的默认值。在表中插入一条新记录时，如果没有为某个字段赋值，系统就会自动为这个字段插入默认值</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>默认值约束通常用在已经设置了非空约束的列，这样能够防止数据表在录入数据时出现错误。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>ALTER TABLE</span><span
lang=zh-CN> </span><span style='color:#2E75B5' lang=en-US>&lt;</span><span
style='color:#70AD47' lang=zh-CN>tbl_name</span><span style='color:#70AD47'
lang=en-US>&gt; </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>MODIFY</span><span lang=zh-CN> </span><span
style='color:#2E75B5' lang=en-US>&lt;</span><span lang=zh-CN>column_</span><span
lang=en-US>name&gt;</span><span lang=zh-CN> column_definition</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#2E75B5'>DEFUALT </span><span
style='color:#70AD47'>&quot;default value&quot;;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>ALTER TABLE</span><span
lang=zh-CN> </span><span style='color:#2E75B5' lang=en-US>&lt;</span><span
style='color:#70AD47' lang=zh-CN>tbl_name</span><span style='color:#70AD47'
lang=en-US>&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>CHANGE</span><span lang=zh-CN> </span><span
style='color:#2E75B5' lang=en-US>&lt;</span><span lang=zh-CN>column_</span><span
lang=en-US>name&gt; &lt;new_</span><span lang=zh-CN>column_</span><span
lang=en-US>name&gt;</span><span lang=zh-CN> column_definition</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#2E75B5'>DEFUALT </span><span
style='color:#70AD47'>&quot;default value&quot;;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>ALTER TABLE</span><span
lang=zh-CN> </span><span style='color:#2E75B5' lang=en-US>&lt;</span><span
style='color:#70AD47' lang=zh-CN>tbl_name</span><span style='color:#70AD47'
lang=en-US>&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>ALTER</span><span lang=zh-CN> </span><span
style='color:#2E75B5' lang=en-US>&lt;</span><span lang=zh-CN>column_</span><span
lang=en-US>name&gt; </span><span style='color:#2E75B5' lang=en-US>SET DEFUALT </span><span
style='color:#70AD47' lang=en-US>&quot;default value&quot;;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47' lang=en-US>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.8791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  background-color:white;vertical-align:top;width:1.8791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>&lt;tal</span><span lang=zh-CN>_name</span><span lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.468in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据表名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.8791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#2E75B5' lang=en-US>&lt;</span><span lang=zh-CN>column_</span><span
  lang=en-US>name&gt;</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>&lt;new_</span><span lang=zh-CN>column_</span><span lang=en-US>name&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.468in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据表列名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.8791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>column_definition</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.468in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据列定义</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; <span style='color:#2E75B5'>ALTER TABLE</span> tb_dept3</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>    </span>-&gt; </span><span
style='color:#2E75B5' lang=zh-CN>CHANGE</span><span lang=zh-CN> location</span><span
lang=en-US> </span><span lang=zh-CN>location </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>-&gt; VARCHAR(50) <span
style='color:#2E75B5'>DEFAULT</span> 'Shanghai';</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.15 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Records: 0<span style='mso-spacerun:yes'>  </span>Duplicates: 0<span
style='mso-spacerun:yes'>  </span>Warnings: 0</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; <span style='color:#2E75B5'>ALTER TABLE</span> tb_dept3</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>    </span>-&gt; </span><span
style='color:#2E75B5' lang=en-US>MODIFY</span><span lang=zh-CN> location </span><span
style='color:#2E75B5' lang=zh-CN>DEFAULT</span><span lang=zh-CN> 'Shanghai';</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.15 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Records: 0<span style='mso-spacerun:yes'>  </span>Duplicates: 0<span
style='mso-spacerun:yes'>  </span>Warnings: 0</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; <span style='color:#2E75B5'>ALTER TABLE</span> tb_dept3</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>    </span>-&gt; </span><span
style='color:#2E75B5' lang=zh-CN>ALTER</span><span lang=zh-CN> location </span><span
style='color:#2E75B5' lang=en-US>SET </span><span style='color:#2E75B5'
lang=zh-CN>DEFAULT</span><span lang=zh-CN> 'Shanghai';</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

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
