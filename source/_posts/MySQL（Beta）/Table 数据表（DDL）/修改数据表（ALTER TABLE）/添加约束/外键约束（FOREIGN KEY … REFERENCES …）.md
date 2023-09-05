---
categories:
  - MySQL
tags:
  - DDL
  - FOREIGN KEY
date:
  - 2023-1-29 14:58:24
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.3701in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.3701in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>支持外键，允许跨表交叉引用相关数据，外键约束有助于保持相关数据的一致性。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>外键关系涉及一个包含初始列值的父表，以及一个包含引用父列值的列值的子表。在子表上定义了外键约束</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ALTER TABLE </span><span
style='color:#70AD47' lang=en-US>&lt;a_</span><span style='color:#70AD47'
lang=zh-CN>tbl_name</span><span style='color:#70AD47' lang=en-US>&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#D8D8D8'><span style='mso-spacerun:yes'>    </span></span><span
style='color:#2E75B5'>ADD</span><span style='color:#D8D8D8'> [CONSTRAINT
[symbol]] </span><span style='color:#2E75B5'>FOREIGN KEY</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS"'><span
style='font-size:12.0pt;color:#D8D8D8' lang=zh-CN><span
style='mso-spacerun:yes'>    </span>[index_name]</span><span style='font-size:
12.0pt' lang=zh-CN> (</span><span style='font-size:12.0pt' lang=en-US>&lt;</span><span
style='font-size:12.0pt' lang=zh-CN>col</span><span style='font-size:11.0pt'
lang=zh-CN>umn</span><span style='font-size:12.0pt' lang=zh-CN>_name</span><span
style='font-size:12.0pt' lang=en-US>&gt;</span><span style='font-size:12.0pt'
lang=zh-CN>, ...)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS"'><span
style='font-size:12.0pt;color:#D8D8D8' lang=zh-CN><span
style='mso-spacerun:yes'>    </span></span><span style='font-size:12.0pt;
color:#2E75B5' lang=zh-CN>REFERENCES </span><span style='font-size:12.0pt;
color:#70AD47' lang=en-US>&lt;b_</span><span style='font-size:12.0pt;
color:#70AD47' lang=zh-CN>tbl_name</span><span style='font-size:12.0pt;
color:#70AD47' lang=en-US>&gt;</span><span style='font-size:12.0pt' lang=zh-CN>
(</span><span style='font-size:12.0pt' lang=en-US>&lt;</span><span
style='font-size:12.0pt' lang=zh-CN>col</span><span style='font-size:11.0pt'
lang=zh-CN>umn</span><span style='font-size:12.0pt' lang=zh-CN>_name</span><span
style='font-size:12.0pt' lang=en-US>&gt;</span><span style='font-size:12.0pt'
lang=zh-CN>,...)</span><span style='font-size:12.0pt' lang=en-US>;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'><span style='mso-spacerun:yes'>    </span>[ON DELETE
reference_option]</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'><span style='mso-spacerun:yes'>    </span>[ON UPDATE
reference_option]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.5541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:7.352in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:white'><span style='font-weight:
  bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>描述</span><span
  style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> </span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.5541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>[symbol]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.352in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>约束名，非字符串</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.5541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>&lt;a_</span><span lang=zh-CN>tbl_name</span><span lang=en-US>&gt;</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>&lt;b_</span><span lang=zh-CN>tbl_name</span><span lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.352in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据表名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.5541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>&lt;</span><span lang=zh-CN>column_name</span><span lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:7.352in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据表列名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.5541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>reference_option</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.4847in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>参照动作</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.2194in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>属性</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:5.7069in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.2194in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>RESTRICT</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.7763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>拒绝父表的删除或更新操作。指定</span><span
    style='font-family:"Comic Sans MS"'> RESTRICT</span><span style='font-family:
    "Microsoft YaHei UI"'>（或</span><span style='font-family:"Comic Sans MS"'>
    NO ACTION</span><span style='font-family:"Microsoft YaHei UI"'>）与省略</span><span
    style='font-family:"Comic Sans MS"'> ON DELETE </span><span
    style='font-family:"Microsoft YaHei UI"'>或</span><span style='font-family:
    "Comic Sans MS"'> ON UPDATE </span><span style='font-family:"Microsoft YaHei UI"'>子句相同。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.2194in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>CASCADE</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.7298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>从父表中删除或更新行，并自动删除或更新子表中匹配的行。支持</span><span
    style='font-family:"Comic Sans MS"'> ON DELETE CASCADE </span><span
    style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
    "Comic Sans MS"'> ON UPDATE CASCADE</span><span style='font-family:"Microsoft YaHei UI"'>。在两个表之间，不要定义多个作用于父表或子表中的同一列的</span><span
    style='font-family:"Comic Sans MS"'> ON UPDATE CASCADE </span><span
    style='font-family:"Microsoft YaHei UI"'>子句</span></p>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'><span
    style='font-weight:bold'>注</span></p>
    <p style='margin-left:.375in;font-size:10.5pt'><span
    style='font-family:"Microsoft YaHei UI"'>如果在外键关系中的两个表上都定义了</span><span
    style='font-family:"Comic Sans MS"'> FOREIGN KEY </span><span
    style='font-family:"Microsoft YaHei UI"'>子句，使这两个表都成为父表和子表，则必须为另一个</span><span
    style='font-family:"Comic Sans MS"'> FOREIGN KEY </span><span
    style='font-family:"Microsoft YaHei UI"'>子句定义</span><span style='font-family:
    "Comic Sans MS"'> ON UPDATE CASCADE </span><span style='font-family:"Microsoft YaHei UI"'>或</span><span
    style='font-family:"Comic Sans MS"'> ON DELETE CASCADE </span><span
    style='font-family:"Microsoft YaHei UI"'>子句，以便进行级联操作成功。如果仅为一个</span><span
    style='font-family:"Comic Sans MS"'> FOREIGN KEY </span><span
    style='font-family:"Microsoft YaHei UI"'>子句定义了</span><span
    style='font-family:"Comic Sans MS"'> ON UPDATE CASCADE </span><span
    style='font-family:"Microsoft YaHei UI"'>或</span><span style='font-family:
    "Comic Sans MS"'> ON DELETE CASCADE </span><span style='font-family:"Microsoft YaHei UI"'>子句，则级联操作将失败并出现错误</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.2194in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>SET NULL</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.7069in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>从父表中删除或更新行，并将子表中的一个或多个外键列设置为</span><span
    style='font-family:"Comic Sans MS"'>NULL</span><span style='font-family:
    "Microsoft YaHei UI"'>。同时支持</span><span style='font-family:"Comic Sans MS"'>ON
    DELETE SET NULL</span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
    style='font-family:"Comic Sans MS"'>ON UPDATE SET NULL</span><span
    style='font-family:"Microsoft YaHei UI"'>子句</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.2194in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>NO
    ACTION</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.7437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>来自标准</span><span
    style='font-family:"Comic Sans MS"'> SQL </span><span style='font-family:
    "Microsoft YaHei UI"'>的关键字。在</span><span style='font-family:"Comic Sans MS"'>
    MySQL </span><span style='font-family:"Microsoft YaHei UI"'>中，相当于</span><span
    style='font-family:"Comic Sans MS"'> RESTRICT</span><span style='font-family:
    "Microsoft YaHei UI"'>。如果引用的表中存在相关的外键值，</span><span style='font-family:
    "Comic Sans MS"'>MySQL Server </span><span style='font-family:"Microsoft YaHei UI"'>将拒绝对父表的删除或更新操作。一些数据库系统有延迟检查，</span><span
    style='font-family:"Comic Sans MS"'>NO ACTION </span><span
    style='font-family:"Microsoft YaHei UI"'>是延迟检查。在</span><span
    style='font-family:"Comic Sans MS"'> MySQL </span><span style='font-family:
    "Microsoft YaHei UI"'>中，外键约束是立即检查的，所以</span><span style='font-family:"Comic Sans MS"'>
    NO ACTION </span><span style='font-family:"Microsoft YaHei UI"'>与</span><span
    style='font-family:"Comic Sans MS"'> RESTRICT </span><span
    style='font-family:"Microsoft YaHei UI"'>相同</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.2263in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>SET
    DEFAULT</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.7in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>此操作被</span><span
    style='font-family:"Comic Sans MS"'> MySQL </span><span style='font-family:
    "Microsoft YaHei UI"'>解析器识别，但</span><span style='font-family:"Comic Sans MS"'>
    InnoDB </span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
    style='font-family:"Comic Sans MS"'> NDB </span><span style='font-family:
    "Microsoft YaHei UI"'>都拒绝包含</span><span style='font-family:"Comic Sans MS"'>
    ON DELETE SET DEFAULT </span><span style='font-family:"Microsoft YaHei UI"'>或</span><span
    style='font-family:"Comic Sans MS"'> ON UPDATE SET DEFAULT </span><span
    style='font-family:"Microsoft YaHei UI"'>子句的表定义</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:12.0pt;color:#D8D8D8'>&nbsp;</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; <span style='color:#2E75B5'>ALTER TABLE</span> tb_emp2</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>-&gt; <span style='color:
#2E75B5'>ADD CONSTRAINT</span> fk_tb_dept1</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>-&gt; <span style='color:
#2E75B5'>FOREIGN KEY</span>(deptId)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>-&gt; <span style='color:
#2E75B5'>REFERENCES</span> tb_dept1(id);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (1.38 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Records: 0<span style='mso-spacerun:yes'>  </span>Duplicates: 0<span
style='mso-spacerun:yes'>  </span>Warnings: 0</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:11.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
