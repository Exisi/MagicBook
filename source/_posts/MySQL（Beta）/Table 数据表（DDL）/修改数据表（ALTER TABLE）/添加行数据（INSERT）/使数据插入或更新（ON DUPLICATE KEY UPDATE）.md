categories:
- MySQL
tags:
- DDL
- ON DUPLICATE KEY UPDATE
date:
- 2023-2-01 12:10:34
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.7409in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.7409in'>

<ul style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:0in'>
 <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
  margin-bottom:0in'>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果要插入的行会导致</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'>UNIQUE</span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>索引或</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'>PRIMARY KEY</span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中的值重复，则带有</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'>ON DUPLICATE KEY
      UPDATE</span><span style='font-family:"Microsoft YaHei UI";font-size:
      12.0pt'>子句的</span><span style='font-family:"Comic Sans MS";font-size:
      12.0pt'>INSERT</span><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt'>可以更新现有行。在</span><span style='font-family:"Comic Sans MS";
      font-size:12.0pt'>MySQL 8.0.19</span><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt'>及更高版本中，具有一个或多个可选列别名的行别名可以与</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'>ON DUPLICATE KEY
      UPDATE</span><span style='font-family:"Microsoft YaHei UI";font-size:
      12.0pt'>一起使用，以引用要插入的行。</span></li>
 </ul>
 <p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
 font-size:12.0pt'>&nbsp;</p>
 <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
  margin-bottom:0in'>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数据库中，如果在</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'>insert</span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句后面带上</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'>ON DUPLICATE KEY
      UPDATE </span><span style='font-family:"Microsoft YaHei UI";font-size:
      12.0pt'>子句，而要插入的行与表中现有记录的惟一索引或主键中产生重复值，那么就会发生旧行的更新；如果插入的行数据与现有表中记录的唯一索引或者主键不重复，则执行新纪录插入操作。</span></li>
 </ul>
 <p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>
 <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
  margin-bottom:0in'>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>即数据库中存在某个记录时，执行这个语句会更新，而不存在这条记录时，就会插入数据。并且可以在数据插入后对数据进行二次更新操作</span></li>
 </ul>
 <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
 style='font-weight:bold'>语法</span></p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'><span style='color:#2E75B5'>INSERT </span><span
 style='color:#D8D8D8'>[LOW_PRIORITY | HIGH_PRIORITY] [IGNORE]</span></p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'><span lang=zh-CN>[INTO] </span><span style='color:#70AD47'
 lang=zh-CN>&lt;tbl_name</span><span style='color:#70AD47' lang=en-US>&gt;</span></p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt;color:#D8D8D8'>[PARTITION (partition_name [, partition_name]
 ...)]</p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'><span lang=zh-CN>[(</span><span lang=en-US>&lt;</span><span
 lang=zh-CN>col</span><span lang=en-US>um</span><span lang=zh-CN>_name</span><span
 lang=en-US>&gt;</span><span lang=zh-CN> [, </span><span lang=en-US>&lt;</span><span
 lang=zh-CN>col</span><span lang=en-US>um</span><span lang=zh-CN>_name</span><span
 lang=en-US>&gt;</span><span lang=zh-CN>] ...)]</span></p>
 <p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
 12.0pt' lang=en-US>…</p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt;color:#D8D8D8'><span lang=zh-CN>[ON DUPLICATE KEY UPDATE </span><span
 lang=en-US>&lt;</span><span lang=zh-CN>col</span><span lang=en-US>um</span><span
 lang=zh-CN>_name</span><span lang=en-US>&gt;</span><span lang=zh-CN> = value</span><span
 lang=en-US> </span></p>
 <p style='margin-left:3.0in;font-family:"Comic Sans MS";font-size:
 12.0pt;color:#D8D8D8'><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
 lang=zh-CN>| [row_alias.]</span><span lang=en-US>&lt;</span><span lang=zh-CN>col</span><span
 lang=en-US>um</span><span lang=zh-CN>_name</span><span lang=en-US>&gt;</span></p>
 <p style='margin-left:3.0in;font-family:"Comic Sans MS";font-size:
 12.0pt;color:#D8D8D8'><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
 lang=zh-CN>| [tbl_name.]</span><span lang=en-US>&lt;</span><span lang=zh-CN>col</span><span
 lang=en-US>um</span><span lang=zh-CN>_name</span><span lang=en-US>&gt;</span></p>
 <p style='margin-left:3.0in;font-family:"Comic Sans MS";font-size:
 12.0pt;color:#D8D8D8'><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
 lang=zh-CN>| [row_alias.]col_alias</span><span lang=en-US>,</span></p>
 <p style='margin-left:3.0in;font-family:"Comic Sans MS";font-size:
 12.0pt;color:#D8D8D8'><span lang=en-US>[&lt;</span><span lang=zh-CN>col</span><span
 lang=en-US>um</span><span lang=zh-CN>_name</span><span lang=en-US>&gt;</span><span
 lang=zh-CN> = value</span><span lang=en-US> </span></p>
 <p style='margin-left:3.0in;font-family:"Comic Sans MS";font-size:
 12.0pt;color:#D8D8D8'><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
 lang=zh-CN>| [row_alias.]</span><span lang=en-US>&lt;</span><span lang=zh-CN>col</span><span
 lang=en-US>um</span><span lang=zh-CN>_name</span><span lang=en-US>&gt;</span></p>
 <p style='margin-left:3.0in;font-family:"Comic Sans MS";font-size:
 12.0pt;color:#D8D8D8'><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
 lang=zh-CN>| [tbl_name.]</span><span lang=en-US>&lt;</span><span lang=zh-CN>col</span><span
 lang=en-US>um</span><span lang=zh-CN>_name</span><span lang=en-US>&gt;</span></p>
 <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
  margin-bottom:0in'>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#D8D8D8'><span
      style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US><span
      style='mso-spacerun:yes'> </span></span><span style='font-family:"Comic Sans MS";
      font-size:12.0pt' lang=zh-CN>| [row_alias.]col_alias</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>],</span></li>
 </ul>
 <p style='margin-left:3.0in;font-family:"Comic Sans MS";font-size:
 12.0pt;color:#D8D8D8' lang=en-US>…</p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'><span style='color:#D8D8D8' lang=zh-CN>]</span><span
 lang=en-US>;</span></p>
 <p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
 font-size:12.0pt' lang=en-US>&nbsp;</p>
 <div style='direction:ltr'>
 <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
  border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
  1pt;margin-left:.3333in' title="" summary="">
  <tr>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:black;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
   color:white'><span style='font-weight:bold'>参数</span></p>
   </td>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:black;vertical-align:top;width:5.9972in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
   color:white'><span style='font-weight:bold'>说明</span></p>
   </td>
  </tr>
  <tr>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:white;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-family:"Comic Sans MS";font-size:11.5pt'
   lang=en-US>&lt;tbl_name&gt;</p>
   </td>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:white;vertical-align:top;width:5.9972in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据表名</p>
   </td>
  </tr>
  <tr>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:#E7E6E6;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-family:"Comic Sans MS";font-size:11.5pt'
   lang=en-US>&lt;colum_name&gt;</p>
   </td>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:#E7E6E6;vertical-align:top;width:5.9972in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据列名</p>
   </td>
  </tr>
  <tr>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:white;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-family:"Comic Sans MS";font-size:11.5pt'>row_alias</p>
   </td>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:white;vertical-align:top;width:5.9972in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据行别名</p>
   </td>
  </tr>
  <tr>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:#E7E6E6;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-family:"Comic Sans MS";font-size:11.5pt'>col_alias</p>
   </td>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:#E7E6E6;vertical-align:top;width:5.9972in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据列别名</p>
   </td>
  </tr>
  <tr>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:white;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-family:"Comic Sans MS";font-size:11.5pt'>LOW_PRIORITY</p>
   </td>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:white;vertical-align:top;width:6.0666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果您使用</span><span
   style='font-family:"Comic Sans MS"'> LOW_PRIORITY </span><span
   style='font-family:"Microsoft YaHei UI"'>修饰符，则</span><span style='font-family:
   "Comic Sans MS"'> INSERT </span><span style='font-family:"Microsoft YaHei UI"'>的执行会延迟，直到没有其他客户端正在从表中读取。这包括在现有客户端正在读取以及</span><span
   style='font-family:"Comic Sans MS"'> INSERT LOW_PRIORITY </span><span
   style='font-family:"Microsoft YaHei UI"'>语句正在等待时开始读取的其他客户端。因此，发出</span><span
   style='font-family:"Comic Sans MS"'> INSERT LOW_PRIORITY </span><span
   style='font-family:"Microsoft YaHei UI"'>语句的客户端可能要等待很长时间。</span></p>
   <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>LOW_PRIORITY
   </span><span style='font-family:"Microsoft YaHei UI"'>仅影响仅使用表级锁定的存储引擎（例如</span><span
   style='font-family:"Comic Sans MS"'> MyISAM</span><span style='font-family:
   "Microsoft YaHei UI"'>、</span><span style='font-family:"Comic Sans MS"'>MEMORY
   </span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
   style='font-family:"Comic Sans MS"'> MERGE</span><span style='font-family:
   "Microsoft YaHei UI"'>）。</span></p>
   <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
   style='font-weight:bold'>注</span></p>
   <p style='margin-left:.375in;font-size:11.5pt'><span
   style='font-family:"Comic Sans MS"'>LOW_PRIORITY </span><span
   style='font-family:"Microsoft YaHei UI"'>通常不应与</span><span style='font-family:
   "Comic Sans MS"'> MyISAM </span><span style='font-family:"Microsoft YaHei UI"'>表一起使用，因为这样做会禁用并发插入</span></p>
   </td>
  </tr>
  <tr>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:#E7E6E6;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-family:"Comic Sans MS";font-size:11.5pt'>HIGH_PRIORITY</p>
   </td>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:#E7E6E6;vertical-align:top;width:6.0125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果您指定</span><span
   style='font-family:"Comic Sans MS"'> HIGH_PRIORITY</span><span
   style='font-family:"Microsoft YaHei UI"'>，如果服务器是使用该选项启动的，它将覆盖</span><span
   style='font-family:"Comic Sans MS"'> --low-priority-updates </span><span
   style='font-family:"Microsoft YaHei UI"'>选项的效果。它还会导致不使用并发插入</span></p>
   <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
   style='font-weight:bold'>注</span></p>
   <p style='margin-left:.375in;font-size:11.5pt'><span
   style='font-family:"Comic Sans MS"'>HIGH_PRIORITY </span><span
   style='font-family:"Microsoft YaHei UI"'>仅影响仅使用表级锁定的存储引擎（例如</span><span
   style='font-family:"Comic Sans MS"'> MyISAM</span><span style='font-family:
   "Microsoft YaHei UI"'>、</span><span style='font-family:"Comic Sans MS"'>MEMORY
   </span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
   style='font-family:"Comic Sans MS"'> MERGE</span><span style='font-family:
   "Microsoft YaHei UI"'>）。</span></p>
   </td>
  </tr>
  <tr>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:white;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-family:"Comic Sans MS";font-size:11.5pt'>IGNORE</p>
   </td>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:white;vertical-align:top;width:6.0506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果使用</span><span
   style='font-family:"Comic Sans MS"'> IGNORE </span><span style='font-family:
   "Microsoft YaHei UI"'>修饰符，则在执行</span><span style='font-family:"Comic Sans MS"'>
   INSERT </span><span style='font-family:"Microsoft YaHei UI"'>语句时发生的可忽略错误将被忽略。如果没有</span><span
   style='font-family:"Comic Sans MS"'> IGNORE</span><span style='font-family:
   "Microsoft YaHei UI"'>，此类</span><span style='font-family:"Comic Sans MS"'>
   INSERT </span><span style='font-family:"Microsoft YaHei UI"'>语句将因错误而中止。</span></p>
   <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
   <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>例如，如果没有</span><span
   style='font-family:"Comic Sans MS"'> IGNORE</span><span style='font-family:
   "Microsoft YaHei UI"'>，复制表中现有</span><span style='font-family:"Comic Sans MS"'>
   UNIQUE </span><span style='font-family:"Microsoft YaHei UI"'>索引或</span><span
   style='font-family:"Comic Sans MS"'> PRIMARY KEY </span><span
   style='font-family:"Microsoft YaHei UI"'>值的行会导致重复键错误并且语句被中止。使用</span><span
   style='font-family:"Comic Sans MS"'> IGNORE</span><span style='font-family:
   "Microsoft YaHei UI"'>，该行将被丢弃并且不会发生错误。忽略的错误会生成警告。</span></p>
   <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>IGNORE
   </span><span style='font-family:"Microsoft YaHei UI"'>对插入，分区表有类似的影响，其中没有找到与给定值匹配的分区。</span></p>
   <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
   <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>使用</span><span
   style='font-family:"Comic Sans MS"'> INSERT IGNORE </span><span
   style='font-family:"Microsoft YaHei UI"'>时，对于包含不匹配值的行，插入操作会静默失败，但会插入匹配的行。使用</span><span
   style='font-family:"Comic Sans MS"'> IGNORE</span><span style='font-family:
   "Microsoft YaHei UI"'>，将无效值调整为最接近的值并插入；会产生警告，但语句不会中止。您可以使用</span><span
   style='font-family:"Comic Sans MS"'> mysql_info() C API </span><span
   style='font-family:"Microsoft YaHei UI"'>函数确定实际插入表中的行数。</span></p>
   <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
   <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>您可以使用</span><span
   style='font-family:"Comic Sans MS"'> REPLACE </span><span style='font-family:
   "Microsoft YaHei UI"'>而不是</span><span style='font-family:"Comic Sans MS"'>
   INSERT </span><span style='font-family:"Microsoft YaHei UI"'>来覆盖旧行。在处理包含重复旧行的唯一键值的新行时，</span><span
   style='font-family:"Comic Sans MS"'>REPLACE </span><span style='font-family:
   "Microsoft YaHei UI"'>与</span><span style='font-family:"Comic Sans MS"'>
   INSERT IGNORE </span><span style='font-family:"Microsoft YaHei UI"'>对应：新行替换旧行而不是被丢弃。</span></p>
   </td>
  </tr>
  <tr>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:#E7E6E6;vertical-align:top;width:2.0083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-family:"Comic Sans MS";font-size:11.5pt'>PARTITION
   (</p>
   <p style='margin-left:.375in;font-family:"Comic Sans MS";
   font-size:11.5pt'>partition_name </p>
   <p style='margin-left:.375in;font-family:"Comic Sans MS";
   font-size:11.5pt'>[, partition_name] </p>
   <p style='margin-left:.375in;font-family:"Comic Sans MS";
   font-size:11.5pt'>…</p>
   <p style='font-family:"Comic Sans MS";font-size:11.5pt'>)</p>
   </td>
   <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
   background-color:#E7E6E6;vertical-align:top;width:6.0666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
   <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>插入分区表时，您可以控制哪些分区和子分区接受新行。</span><span
   style='font-family:"Comic Sans MS"'> PARTITION </span><span
   style='font-family:"Microsoft YaHei UI"'>子句采用逗号分隔的表的一个或多个分区或子分区（或两者）的名称列表。</span></p>
   <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
   style='font-weight:bold'>注</span></p>
   <p style='margin-left:.375in;font-size:11.5pt'><span
   style='font-family:"Microsoft YaHei UI"'>如果给定</span><span style='font-family:
   "Comic Sans MS"'> INSERT </span><span style='font-family:"Microsoft YaHei UI"'>语句要插入的任何行与列出的分区之一不匹配，则</span><span
   style='font-family:"Comic Sans MS"'> INSERT </span><span style='font-family:
   "Microsoft YaHei UI"'>语句将失败，并出现错误</span><span style='font-family:"Comic Sans MS"'>
   Found a row not matching the given partition set</span></p>
   </td>
  </tr>
 </table>
 </div>
 <p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
 font-size:12.0pt'>&nbsp;</p>
 <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
  margin-bottom:0in'>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>下面两个语句会有相同的效果：</span></li>
 </ul>
 <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
 color:#70AD47'><span style='font-weight:bold'>示例</span></p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'><span style='color:#2E75B5'>INSERT INTO</span> table (a,b,c)
 </p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'><span style='color:#2E75B5'>VALUES</span> (1,2,3)<span
 style='mso-spacerun:yes'>  </span></p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'><span style='color:#2E75B5'>ON DUPLICATE KEY UPDATE</span>
 c=c+1;<span style='mso-spacerun:yes'>  </span></p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'><span style='mso-spacerun:yes'>  </span></p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'><span style='color:#2E75B5'>UPDATE</span> table <span
 style='color:#2E75B5'>SET</span> c=c+1 <span style='color:#2E75B5'>WHERE</span>
 a=1;</p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'>&nbsp;</p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'><span lang=zh-CN>Query OK, </span><span lang=en-US>1</span><span
 lang=zh-CN> rows affected (0.15 sec)</span></p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'>Records: 0<span style='mso-spacerun:yes'> 
 </span>Duplicates: 0<span style='mso-spacerun:yes'>  </span>Warnings: 0</p>
 <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
 color:#70AD47'><span style='font-weight:bold'>示例</span></p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'><span style='color:#2E75B5'>INSERT INTO</span> table (a,b,c)</p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'><span style='color:#2E75B5'>VALUES</span>
 (1,2,3),(4,5,6)<span style='mso-spacerun:yes'>  </span></p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'><span style='color:#2E75B5'>ON DUPLICATE KEY UPDATE</span>
 c=<span style='color:#2E75B5'>VALUES</span>(a)+<span style='color:#2E75B5'>VALUES</span>(b);
 </p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'>&nbsp;</p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'><span lang=zh-CN>Query OK, </span><span lang=en-US>1</span><span
 lang=zh-CN> rows affected (0.15 sec)</span></p>
 <p style='margin-left:.375in;font-family:"Comic Sans MS";
 font-size:12.0pt'>Records: 0<span style='mso-spacerun:yes'> 
 </span>Duplicates: 0<span style='mso-spacerun:yes'>  </span>Warnings: 0</p>
 <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
  margin-bottom:0in'>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-weight:bold;font-family:"Microsoft YaHei";font-size:12.0pt'>注</span></li>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Microsoft YaHei";font-size:12.0pt'>如果是插入操作，受到影响行的值为</span><span
       style='font-family:"Comic Sans MS";font-size:12.0pt'>1</span><span
       style='font-family:"Microsoft YaHei";font-size:12.0pt'>；如果更新操作，受到影响行的值为</span><span
       style='font-family:"Comic Sans MS";font-size:12.0pt'>2</span><span
       style='font-family:"Microsoft YaHei";font-size:12.0pt'>；如果更新的数据和已有的数据一样（就相当于没变，所有值保持不变），受到影响的行的值为</span><span
       style='font-family:"Comic Sans MS";font-size:12.0pt'>0</span></li>
  </ul>
 </ul>
 <p style='font-family:Calibri;font-size:12.0pt'>&nbsp;</p>
 <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>
 <p><cite style='font-size:12.0pt;color:#595959'><span
 style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
 "Comic Sans MS"'> &lt;</span><a
 href="https://dev.mysql.com/doc/refman/8.0/en/insert-on-duplicate.html"><span
 style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/insert-on-duplicate.html</span></a><span
 style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>
</ul>

</div>

</div>

</div>

<!--EndFragment-->
</body>