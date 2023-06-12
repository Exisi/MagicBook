---
categories:
- MySQL
tags:
- DDL
date:
- 2023-1-29 14:34:22
---

<body lang=zh-CN style='font-family:Calibri;font-size:11.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.4625in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.4625in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>要查看在涉及</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> InnoDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>存储引擎的原子</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DDL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>操作期间写入</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> mysql.innodb_ddl_log
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数据字典表的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DDL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>日志，请启用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>
     innodb_print_ddl_logs </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>以让</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> MySQL </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>将</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> DDL </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>日志写入</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> stderr</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>。根据主机操作系统和</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> MySQL </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>配置，</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>stderr </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>可能是错误日志、终端或控制台窗口</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>将</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DDL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>日志写入</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> mysql.innodb_ddl_log
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表以支持</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DDL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>操作的重做和回滚。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> mysql.innodb_ddl_log
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表是一个隐藏的数据字典表，它位于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> mysql.ibd </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数据字典表空间中。与其他隐藏数据字典表一样，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mysql.innodb_ddl_log </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表不能在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的非调试版本中直接访问。 </span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'><span
     style='mso-spacerun:yes'> </span>mysql.innodb_ddl_log </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表的结构对应于以下定义：</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#0077AA'>CREATE TABLE</span><span
style='color:black'> mysql</span><span style='color:#909090'>.</span><span
style='color:black'>innodb_ddl_log </span><span style='color:#909090'>(</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:black'><span style='mso-spacerun:yes'> 
</span>id </span><span style='color:#834689'>BIGINT </span><span
style='color:#0077AA'>UNSIGNED </span><span style='color:#A67F59'>NOT </span><span
style='color:#990055'>NULL </span><span style='color:#0077AA'>AUTO_INCREMENT
PRIMARY KEY</span><span style='color:#909090'>,</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:black'><span style='mso-spacerun:yes'> 
</span>thread_id </span><span style='color:#834689'>BIGINT </span><span
style='color:#0077AA'>UNSIGNED </span><span style='color:#A67F59'>NOT </span><span
style='color:#990055'>NULL</span><span style='color:#909090'>,</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:black'><span style='mso-spacerun:yes'> 
</span></span><span style='color:#0077AA'>type </span><span style='color:#834689'>INT
</span><span style='color:#0077AA'>UNSIGNED </span><span style='color:#A67F59'>NOT
</span><span style='color:#990055'>NULL</span><span style='color:#909090'>,</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:black'><span style='mso-spacerun:yes'> 
</span>space_id </span><span style='color:#834689'>INT </span><span
style='color:#0077AA'>UNSIGNED</span><span style='color:#909090'>,</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:black'><span style='mso-spacerun:yes'> 
</span>page_no </span><span style='color:#834689'>INT </span><span
style='color:#0077AA'>UNSIGNED</span><span style='color:#909090'>,</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:black'><span style='mso-spacerun:yes'> 
</span>index_id </span><span style='color:#834689'>BIGINT </span><span
style='color:#0077AA'>UNSIGNED</span><span style='color:#909090'>,</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:black'><span style='mso-spacerun:yes'> 
</span>table_id </span><span style='color:#834689'>BIGINT </span><span
style='color:#0077AA'>UNSIGNED</span><span style='color:#909090'>,</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:black'><span style='mso-spacerun:yes'> 
</span>old_file_path </span><span style='color:#834689'>VARCHAR</span><span
style='color:#909090'>(</span><span style='color:#990055'>512</span><span
style='color:#909090'>) </span><span style='color:#0077AA'>COLLATE</span><span
style='color:black'> UTF8_BIN</span><span style='color:#909090'>,</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:black'><span style='mso-spacerun:yes'> 
</span>new_file_path </span><span style='color:#834689'>VARCHAR</span><span
style='color:#909090'>(</span><span style='color:#990055'>512</span><span
style='color:#909090'>) </span><span style='color:#0077AA'>COLLATE</span><span
style='color:black'> UTF8_BIN</span><span style='color:#909090'>,</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:black'><span style='mso-spacerun:yes'> 
</span></span><span style='color:#0077AA'>KEY</span><span style='color:#909090'>(</span><span
style='color:black'>thread_id</span><span style='color:#909090'>)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090' lang=en-US>);</p>

<p style='margin-left:.375in;font-family:SimSun;font-size:12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.3909in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>字段</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.2812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3909in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>id</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.2812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>DDL </span><span style='font-family:"Microsoft YaHei UI"'>日志记录的唯一标识符。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3909in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>thread_id</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.3506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>为每条</span><span style='font-family:"Comic Sans MS"'>DDL</span><span
  style='font-family:"Microsoft YaHei UI"'>日志记录分配一个</span><span
  style='font-family:"Comic Sans MS"'>thread_id</span><span style='font-family:
  "Microsoft YaHei UI"'>，用于重放和删除属于特定</span><span style='font-family:"Comic Sans MS"'>DDL</span><span
  style='font-family:"Microsoft YaHei UI"'>操作的</span><span style='font-family:
  "Comic Sans MS"'>DDL</span><span style='font-family:"Microsoft YaHei UI"'>日志。涉及多个数据文件操作的</span><span
  style='font-family:"Comic Sans MS"'> DDL </span><span style='font-family:
  "Microsoft YaHei UI"'>操作会生成多个</span><span style='font-family:"Comic Sans MS"'>
  DDL </span><span style='font-family:"Microsoft YaHei UI"'>日志记录。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3909in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.2812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>DDL </span><span style='font-family:"Microsoft YaHei UI"'>操作类型。类型包括</span><span
  style='font-family:"Comic Sans MS"'> FREE</span><span style='font-family:
  "Microsoft YaHei UI"'>（删除索引树）、</span><span style='font-family:"Comic Sans MS"'>DELETE</span><span
  style='font-family:"Microsoft YaHei UI"'>（删除文件）、</span><span
  style='font-family:"Comic Sans MS"'>RENAME</span><span style='font-family:
  "Microsoft YaHei UI"'>（重命名文件）或</span><span style='font-family:"Comic Sans MS"'>
  DROP</span><span style='font-family:"Microsoft YaHei UI"'>（从</span><span
  style='font-family:"Comic Sans MS"'> mysql.innodb_dynamic_metadata </span><span
  style='font-family:"Microsoft YaHei UI"'>数据字典表中删除元数据）。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3909in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>space_id</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.2812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>表空间</span><span style='font-family:"Comic Sans MS"'> ID</span><span
  style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3909in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>page_no</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.2812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:black'>包含分配信息的页面；例如，索引树根页面。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3909in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>index_id</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.2812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>索引</span><span style='font-family:"Comic Sans MS"'> ID</span><span
  style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3909in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>table_id</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.2812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>表</span><span style='font-family:"Comic Sans MS"'>ID</span><span
  style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3909in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>old_file_path</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.3506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>旧的表空间文件路径。由创建或删除表空间文件的</span><span style='font-family:
  "Comic Sans MS"'> DDL </span><span style='font-family:"Microsoft YaHei UI"'>操作使用；也由重命名表空间的</span><span
  style='font-family:"Comic Sans MS"'> DDL </span><span style='font-family:
  "Microsoft YaHei UI"'>操作使用。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3909in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>new_file_path</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.2812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>新的表空间文件路径。由重命名表空间文件的</span><span style='font-family:
  "Comic Sans MS"'> DDL </span><span style='font-family:"Microsoft YaHei UI"'>操作使用。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>本例演示了如何启用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>innodb_print_ddl_logs</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，以查看为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>CREATE TABLE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>操作而写入</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>strderr</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ddl</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>日志</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>SET GLOBAL</span><span style='color:black'>
innodb_print_ddl_logs</span><span style='color:#A67F59'>=</span><span
style='color:#990055'>1</span><span style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#A67F59'>mysql&gt; </span><span
style='color:#0077AA'>CREATE TABLE</span><span style='color:black'> t1 </span><span
style='color:#909090'>(</span><span style='color:black'>c1 </span><span
style='color:#834689'>INT</span><span style='color:#909090'>) </span><span
style='color:#0077AA'>ENGINE </span><span style='color:#A67F59'>=</span><span
style='color:black'> InnoDB</span><span style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black' lang=en-US>[Note] [000000] InnoDB: DDL log insert : [DDL
record: DELETE SPACE, id=18, thread_id=7,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black' lang=en-US>space_id=5, old_file_path=./test/t1.ibd]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black' lang=en-US>[Note] [000000] InnoDB: DDL log delete : by id
18</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black' lang=en-US>[Note] [000000] InnoDB: DDL log insert : [DDL
record: REMOVE CACHE, id=19, thread_id=7,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black' lang=en-US>table_id=1058, new_file_path=test/t1]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black' lang=en-US>[Note] [000000] InnoDB: DDL log delete : by id
19</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black' lang=en-US>[Note] [000000] InnoDB: DDL log insert : [DDL
record: FREE, id=20, thread_id=7,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black' lang=en-US>space_id=5, index_id=132, page_no=4]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black' lang=en-US>[Note] [000000] InnoDB: DDL log delete : by id
20</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black' lang=en-US>[Note] [000000] InnoDB: DDL log post ddl : begin
for thread id : 7</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black' lang=en-US>[Note] [000000] InnoDB: DDL log post ddl : end
for thread id : 7</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/atomic-ddl.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/atomic-ddl.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

<p><cite style='font-family:"Microsoft YaHei UI";font-size:9.0pt;
color:#70AD47'>&nbsp;</cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
