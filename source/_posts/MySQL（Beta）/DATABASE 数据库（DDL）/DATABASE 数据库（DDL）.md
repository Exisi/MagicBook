categories:
- MySQL
tags:
- DDL
date:
- 2023-1-25 22:35:36
---

<body lang=zh-CN style='font-family:Calibri;font-size:11.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.2534in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.2534in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数据库</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>(DataBase)</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>：数据库是按照数据结构来组织、存储和管理数据的仓库</span></li>
</ul>

<p style='margin-left:.375in;font-family:SimSun;font-size:12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.3437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>语句</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.8965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.3437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#0070C0' lang=zh-CN>CREATE DATABAS</span><span style='color:
  #70AD47' lang=en-US> [</span><span style='color:#70AD47' lang=zh-CN>db_name</span><span
  style='color:#70AD47' lang=en-US>]</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.8965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>创建数据库</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.3437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#0070C0' lang=en-US>ALTER DATABASE</span><span style='color:
  #70AD47' lang=en-US> [</span><span style='color:#70AD47' lang=zh-CN>db_name</span><span
  style='color:#70AD47' lang=en-US>]</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.8965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>修改数据库</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.3437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#0070C0' lang=en-US>DROP DATABASE</span><span style='color:#70AD47'
  lang=en-US> [</span><span style='color:#70AD47' lang=zh-CN>db_name</span><span
  style='color:#70AD47' lang=en-US>]</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.8965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>删除数据库</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.3437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#0070C0' lang=en-US>USE</span><span style='color:#70AD47'
  lang=en-US> [</span><span style='color:#70AD47' lang=zh-CN>db_name</span><span
  style='color:#70AD47' lang=en-US>]</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.8965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>使用数据库</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.3437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#0070C0' lang=en-US>SHOW DATABASE</span><span style='color:#70AD47'
  lang=en-US> [</span><span style='color:#70AD47' lang=zh-CN>db_name</span><span
  style='color:#70AD47' lang=en-US>]</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.8965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>查看数据库</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.3437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#0070C0' lang=en-US>SHOW CREATE DATABASE </span><span
  style='color:#70AD47' lang=en-US>[</span><span style='color:#70AD47'
  lang=zh-CN>db_name</span><span style='color:#70AD47' lang=en-US>]</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#0070C0' lang=en-US>SHOW CREATE </span><span style='color:#2E75B5'
  lang=zh-CN>SCHEMA</span><span style='color:#0070C0' lang=en-US> </span><span
  style='color:#70AD47' lang=en-US>[</span><span style='color:#70AD47'
  lang=zh-CN>db_name</span><span style='color:#70AD47' lang=en-US>]</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.8965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>显示创建数据库语句</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:13.5pt'><span
style='font-weight:bold'>创建数据库</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>mysql</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中使用</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>CREATE
     DATABASE </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt' lang=zh-CN>语句创建数据库</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5'>CREATE DATABASE </span><span
style='font-family:"Comic Sans MS";color:#A5A5A5'>[IF NOT EXISTS] </span><span
style='font-family:"Comic Sans MS";color:#70AD47'>&lt;</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47'>数据库名</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>&gt;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>[</span><span style='font-family:"Comic Sans MS";
color:#BFBFBF'>[DEFAULT] </span><span style='font-family:"Comic Sans MS";
color:#2E75B5'>CHARACTER SET </span><span style='font-family:"Comic Sans MS";
color:#70AD47'>&lt;</span><span style='font-family:"Microsoft YaHei UI";
color:#70AD47'>字符集名</span><span style='font-family:"Comic Sans MS";color:#70AD47'>&gt;</span><span
style='font-family:"Comic Sans MS"'>] </span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>[</span><span style='font-family:"Comic Sans MS";
color:#BFBFBF'>[DEFAULT] </span><span style='font-family:"Comic Sans MS";
color:#2E75B5'>COLLATE </span><span style='font-family:"Comic Sans MS";
color:#70AD47'>&lt;</span><span style='font-family:"Microsoft YaHei UI";
color:#70AD47'>校对规则名</span><span style='font-family:"Comic Sans MS";color:#70AD47'>&gt;</span><span
style='font-family:"Comic Sans MS"'>];</span></p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.3541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.4361in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.3541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#70AD47'><span style='font-family:
  "Comic Sans MS"'>&lt;</span><span style='font-family:"Microsoft YaHei UI"'>数据库名</span><span
  style='font-family:"Comic Sans MS"'>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.4361in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>创建数据库的名称。</span><span
  style='font-family:"Comic Sans MS"'>MySQL </span><span style='font-family:
  "Microsoft YaHei UI"'>的数据存储区将以目录方式表示</span><span style='font-family:"Comic Sans MS"'>
  MySQL </span><span style='font-family:"Microsoft YaHei UI"'>数据库，因此数据库名称必须符合操作系统的文件夹命名规则，不能以数字开头，尽量要有实际意义。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.3541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>IF NOT
  EXISTS</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.4625in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>在创建数据库之前进行判断，只有该数据库目前尚不存在时才能执行操作。此选项可以用来避免数据库已经存在而重复创建的错误。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.3541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS";
  color:#BFBFBF' lang=zh-CN>[DEFAULT]</span><span style='font-family:"Comic Sans MS";
  color:#BFBFBF' lang=en-US> </span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>CHARACTER SET</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> </span><span style='font-family:"Comic Sans MS";color:#70AD47'
  lang=zh-CN>&lt;</span><span style='font-family:"Microsoft YaHei UI";
  color:#70AD47' lang=zh-CN>字符集名</span><span style='font-family:"Comic Sans MS";
  color:#70AD47' lang=zh-CN>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.4625in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>指定数据库的字符集。指定字符集的目的是为了避免在数据库中存储的数据出现乱码的情况。如果在创建数据库时不指定字符集，那么就使用系统的默认字符集。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.3541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS";
  color:#BFBFBF' lang=zh-CN>[DEFAULT]</span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN> COLLATE</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> </span><span style='font-family:"Comic Sans MS";color:#70AD47'
  lang=zh-CN>&lt;</span><span style='font-family:"Microsoft YaHei UI";
  color:#70AD47' lang=zh-CN>校对规则名</span><span style='font-family:"Comic Sans MS";
  color:#70AD47' lang=zh-CN>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.4361in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>指定字符集的默认校对规则</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; </span><span style='color:#2E75B5'
lang=en-US>CREATE</span><span style='color:#2E75B5' lang=zh-CN> </span><span
style='color:#2E75B5' lang=en-US>DATABASE</span><span lang=zh-CN> test_db;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>Query OK, 1 row affected (0.00 sec)</span><span
lang=en-US> </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>防止删除数据库时出错，可以加上</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>IF NOT
     EXISTS</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US> </span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; </span><span style='color:#2E75B5'
lang=en-US>CREATE</span><span style='color:#2E75B5' lang=zh-CN> </span><span
style='color:#2E75B5' lang=en-US>DATABASE </span><span style='color:#2E75B5'
lang=zh-CN>IF NOT EXISTS</span><span lang=zh-CN> test_db;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 1 row affected (0.00 sec)</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#0070C0'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:14.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:14.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:13.5pt'><span
style='font-weight:bold'>删除数据库</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>mysql</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> DROP
     DATABASE </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt' lang=zh-CN>语句删除数据库，需要有数据库</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> DROP </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>权限</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#0070C0' lang=zh-CN>DROP DATABASE</span><span
style='font-family:"Comic Sans MS";color:#0070C0' lang=en-US> </span><span
style='font-family:"Comic Sans MS";color:#BFBFBF' lang=en-US>[</span><span
style='font-family:"Comic Sans MS";color:#BFBFBF' lang=zh-CN>IF EXISTS</span><span
style='font-family:"Comic Sans MS";color:#BFBFBF' lang=en-US>]</span><span
style='font-family:"Comic Sans MS";color:#0070C0' lang=zh-CN> </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>&lt;</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>数据库名</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>&gt;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; </span><span lang=en-US>DROP</span><span
lang=zh-CN> </span><span lang=en-US>DATABASE</span><span lang=zh-CN> test_db;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 1 row affected (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>防止数据库不存在出错，可以加上</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>IF EXISTS</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; </span><span lang=en-US>DROP</span><span
lang=zh-CN> </span><span lang=en-US>DATABASE </span><span lang=zh-CN>IF EXISTS
test_db;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 1 row affected (0.00 sec)</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:13.5pt'><span
style='font-weight:bold'>使用数据库</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>mysql</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> USE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句使用和切换数据库</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#0070C0' lang=zh-CN>USE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>&lt;</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>数据库名</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>&gt;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; </span><span lang=en-US>USE</span><span
lang=zh-CN> </span><span lang=en-US>mydatabase</span><span lang=zh-CN>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Database changed</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:13.5pt'><span
style='font-weight:bold'>修改数据库</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数据库中只能对数据库使用的字符集和校对规则进行修改，数据库的这些特性都储存在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> db.opt </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>文件中</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ALTER DATABASE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用于更改数据库的全局特性，使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> ALTER DATABASE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>需要获得数据库</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> ALTER </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>权限。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5'>ALTER DATABASE </span><span
style='font-family:"Comic Sans MS";color:#A5A5A5'>[IF NOT EXISTS] </span><span
style='font-family:"Comic Sans MS";color:#70AD47'>&lt;</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47'>数据库名</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>&gt;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>[</span><span style='font-family:"Comic Sans MS";
color:#BFBFBF'>[DEFAULT] </span><span style='font-family:"Comic Sans MS";
color:#2E75B5'>CHARACTER SET </span><span style='font-family:"Comic Sans MS";
color:#70AD47'>&lt;</span><span style='font-family:"Microsoft YaHei UI";
color:#70AD47'>字符集名</span><span style='font-family:"Comic Sans MS";color:#70AD47'>&gt;</span><span
style='font-family:"Comic Sans MS"'>] </span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>[</span><span style='font-family:"Comic Sans MS";
color:#BFBFBF'>[DEFAULT] </span><span style='font-family:"Comic Sans MS";
color:#2E75B5'>COLLATE </span><span style='font-family:"Comic Sans MS";
color:#70AD47'>&lt;</span><span style='font-family:"Microsoft YaHei UI";
color:#70AD47'>校对规则名</span><span style='font-family:"Comic Sans MS";color:#70AD47'>&gt;</span><span
style='font-family:"Comic Sans MS"'>];</span></p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.3541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.4361in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.3541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#70AD47'><span style='font-family:
  "Comic Sans MS"'>&lt;</span><span style='font-family:"Microsoft YaHei UI"'>数据库名</span><span
  style='font-family:"Comic Sans MS"'>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.4361in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据库名称可以忽略，此时语句对应于默认数据库</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.3541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>IF NOT
  EXISTS</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.4625in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>在创建数据库之前进行判断，只有该数据库目前尚不存在时才能执行操作。此选项可以用来避免数据库已经存在而重复创建的错误。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.3541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS";
  color:#BFBFBF' lang=zh-CN>[DEFAULT]</span><span style='font-family:"Comic Sans MS";
  color:#BFBFBF' lang=en-US> </span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>CHARACTER SET</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> </span><span style='font-family:"Comic Sans MS";color:#70AD47'
  lang=zh-CN>&lt;</span><span style='font-family:"Microsoft YaHei UI";
  color:#70AD47' lang=zh-CN>字符集名</span><span style='font-family:"Comic Sans MS";
  color:#70AD47' lang=zh-CN>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.4625in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>指定数据库的字符集。指定字符集的目的是为了避免在数据库中存储的数据出现乱码的情况。如果在创建数据库时不指定字符集，那么就使用系统的默认字符集。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.3541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS";
  color:#BFBFBF' lang=zh-CN>[DEFAULT]</span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN> COLLATE</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> </span><span style='font-family:"Comic Sans MS";color:#70AD47'
  lang=zh-CN>&lt;</span><span style='font-family:"Microsoft YaHei UI";
  color:#70AD47' lang=zh-CN>校对规则名</span><span style='font-family:"Comic Sans MS";
  color:#70AD47' lang=zh-CN>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.4361in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>指定字符集的默认校对规则</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>使用命令行工具将数据库</span><span
style='font-family:"Comic Sans MS"'> test_db </span><span style='font-family:
"Microsoft YaHei UI"'>的指定字符集修改为</span><span style='font-family:"Comic Sans MS"'>
gb2312</span><span style='font-family:"Microsoft YaHei UI"'>，默认校对规则修改为</span><span
style='font-family:"Comic Sans MS"'> gb2312_unicode_ci</span><span
style='font-family:"Microsoft YaHei UI"'>，输入</span><span style='font-family:
"Comic Sans MS"'> SQL </span><span style='font-family:"Microsoft YaHei UI"'>语句与执行结果如下所示：</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; ALTER DATABASE test_db</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>-&gt; DEFAULT CHARACTER SET
gb2312</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>-&gt; DEFAULT COLLATE
gb2312_chinese_ci;</p>

<p style='font-family:"Comic Sans MS";font-size:14.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:14.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:14.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:13.5pt'><span
style='font-weight:bold'>查看数据库</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>mysql</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> DROP
     DATABASE </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt' lang=zh-CN>语句删除数据库</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#0070C0'>SHOW DATABASE</span><span
style='font-family:"Comic Sans MS";color:#BFBFBF'> [LIKE </span><span
style='font-family:"Comic Sans MS";color:#E84C22'>'</span><span
style='font-family:"Microsoft YaHei UI";color:#E84C22'>数据库名</span><span
style='font-family:"Comic Sans MS";color:#E84C22'>'</span><span
style='font-family:"Comic Sans MS";color:#BFBFBF'>]</span><span
style='font-family:"Comic Sans MS"'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>查看所有数据库</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; SHOW DATABASES; </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+-------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| Database </span><span lang=en-US><span
style='mso-spacerun:yes'>                   </span></span><span lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+-------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| information_schema</span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| mysql</span><span lang=en-US><span
style='mso-spacerun:yes'>                         </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'> </span>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>| performance_schema | </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| sakila</span><span lang=en-US><span
style='mso-spacerun:yes'>                         </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'> </span>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| </span><span lang=en-US>sys<span
style='mso-spacerun:yes'>                            </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'> </span>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| </span><span lang=en-US>mydatabase<span
style='mso-spacerun:yes'>               </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+-------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>6 row in set (0.22 sec) </p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>可以发现，在上面的列表中有
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US>5</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>个 默认的数据库，它们都是安装</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=zh-CN> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>时系统自动创建的，其各自功能如下：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.8618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>默认数据表</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.9277in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.8618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>information_schema</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.9277in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>主要存储了系统中的一些数据库对象信息，比如用户表信息、列信息、权限信息、字符集信息和分区信息等。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.8618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>mysql</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.9277in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>MySQL
  </span><span style='font-family:"Microsoft YaHei UI"'>的核心数据库，类似于</span><span
  style='font-family:"Comic Sans MS"'> SQL Server </span><span
  style='font-family:"Microsoft YaHei UI"'>中的</span><span style='font-family:
  "Comic Sans MS"'> master </span><span style='font-family:"Microsoft YaHei UI"'>表，主要负责存储数据库用户、用户访问权限等</span><span
  style='font-family:"Comic Sans MS"'> MySQL </span><span style='font-family:
  "Microsoft YaHei UI"'>自己需要使用的控制和管理信息。常用的比如在</span><span style='font-family:
  "Comic Sans MS"'> mysql </span><span style='font-family:"Microsoft YaHei UI"'>数据库的</span><span
  style='font-family:"Comic Sans MS"'> user </span><span style='font-family:
  "Microsoft YaHei UI"'>表中修改</span><span style='font-family:"Comic Sans MS"'>
  root </span><span style='font-family:"Microsoft YaHei UI"'>用户密码。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.8618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>performance_schema</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.9277in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>主要用于收集数据库服务器性能参数。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.8618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>sakila</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.977in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>MySQL
  </span><span style='font-family:"Microsoft YaHei UI"'>提供的样例数据库，该数据库共有</span><span
  style='font-family:"Comic Sans MS"'> 16 </span><span style='font-family:"Microsoft YaHei UI"'>张表，这些数据表都是比较常见的，在设计数据库时，可以参照这些样例数据表来快速完成所需的数据表。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.8618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>sys</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.9812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>MySQL
  5.7 </span><span style='font-family:"Microsoft YaHei UI"'>安装完成后会多一个</span><span
  style='font-family:"Comic Sans MS"'> sys </span><span style='font-family:
  "Microsoft YaHei UI"'>数据库。</span><span style='font-family:"Comic Sans MS"'>sys
  </span><span style='font-family:"Microsoft YaHei UI"'>数据库主要提供了一些视图，数据都来自于</span><span
  style='font-family:"Comic Sans MS"'> performation_schema</span><span
  style='font-family:"Microsoft YaHei UI"'>，主要是让开发者和使用者更方便地查看性能问题。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>mydatabase
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>则是我们自建的数据库，如果删除以上默认数据库，</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>mysql </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>可能会无法工作</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>模糊查看</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>mydatabase
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>数据库</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; SHOW DATABASES</span><span lang=en-US> LIKE </span><span
style='color:#E84C22' lang=en-US>'s%'</span><span lang=zh-CN>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+-------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| Database </span><span lang=en-US><span
style='mso-spacerun:yes'>                   </span></span><span lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+-------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| sakila</span><span lang=en-US><span
style='mso-spacerun:yes'>                         </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'> </span>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| </span><span lang=en-US>sys<span
style='mso-spacerun:yes'>                            </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'> </span>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+-------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>6 row in set (0.22 sec) </p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:13.5pt'><span
style='font-weight:bold'>显示创建数据库语句</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>mysql</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>SHOW
     CREATE DATABASE / </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>SCHEMA</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> [</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>db_name</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>] </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>用于显示创建命名数据库的</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US>CREATE DATABASE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的完整语句</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SHOW CREATE</span> {<span style='color:
#2E75B5'>DATABASE</span> | <span style='color:#2E75B5'>SCHEMA</span>} <span
style='color:#A5A5A5'>[IF NOT EXISTS]</span> db_name</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; SHOW CREATE DATABASE test\G</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>*************************** 1. row ***************************</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>       </span></span><span
lang=en-US><span style='mso-spacerun:yes'>    </span></span><span lang=zh-CN>Database:
test</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Create Database: CREATE DATABASE `test` /*!40100 DEFAULT CHARACTER SET
utf8mb4</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>     </span></span><span
lang=zh-CN>COLLATE utf8mb4_0900_ai_ci */ /*!80014 DEFAULT ENCRYPTION='N' */</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>




