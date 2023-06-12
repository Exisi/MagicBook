categories:
- MySQL
tags:
- DDL
date:
- 2023-1-29 14:49:46
---

<body lang=zh-CN style='font-family:Calibri;font-size:11.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:11.8972in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:11.8972in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>CREATE TABLE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用给定名称创建一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> table</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。您必须具有该</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> table </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>CREATE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>特权。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>默认情况下，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>table </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>是使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>存储引擎在默认数据库中创建的。如果该</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> table </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>存在，没有默认数据库或该数据库不存在，则会发生错误。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> table </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的数量没有限制。基础文件系统可能会对</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> table </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>示</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> table </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的文件数量有所限制。各个存储引擎可能会强加特定于引擎的约束。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> InnoDB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>允许多达</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> 40 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>亿张表</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI"'><span style='font-weight:
bold;font-size:13.5pt' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='font-weight:bold;font-size:12.0pt' lang=zh-CN>语法</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#333333' lang=zh-CN>CREATE </span><span
style='font-family:"Comic Sans MS";color:#A5A5A5' lang=zh-CN>[TEMPORARY]</span><span
style='font-family:"Comic Sans MS";color:#333333' lang=zh-CN> TABLE </span><span
style='font-family:"Comic Sans MS";color:#A5A5A5' lang=zh-CN>[IF NOT EXISTS]</span><span
style='font-family:"Comic Sans MS";color:#333333' lang=zh-CN> tbl_name</span><span
style='font-family:SimSun;color:#333333' lang=en-US> </span><span
style='font-family:"Comic Sans MS";color:#333333' lang=zh-CN>(</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>create_definition,</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>…</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#333333' lang=zh-CN>)</span><span lang=en-US>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'>[table_options]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'>[partition_options]</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#333333'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.6256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:9.8076in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[TEMPORARY]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:9.8076in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>TEMPORARYtable
  </span><span style='font-family:"Microsoft YaHei UI"'>仅在当前会话中可见，并且在关闭会话时会自动删除</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[IF NOT
  EXISTS]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:9.8076in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>仅在</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS";color:#333333' lang=zh-CN>tbl_name</span><span
  style='font-family:"Comic Sans MS";color:#333333' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI";color:#333333' lang=zh-CN>不存在时间创建</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>create_definition</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:9.8076in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>添加变量参数</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[table_options]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:9.8076in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>可选参数：</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>值</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.2791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>AUTO_INCREMENT</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>value</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.2791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>字段自增</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>AVG_ROW_LENGTH</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>value</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.3076in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>table
    </span><span style='font-family:"Microsoft YaHei UI"'>的平均行长的近似值。您仅需要为具有可变大小行的大型</span><span
    style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
    "Microsoft YaHei UI"'>设置此选项</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>[DEFAULT] CHARACTER SET</span><span lang=en-US> </span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>charset_name</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.2791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>设置默认字符集</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>[DEFAULT]
    COLLATE</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>collation_name</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.2791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>设置默认校验规则</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>CHECKSUM</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>0 | 1</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.2791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>是否对表中的数据进行逐行较验和计算</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>COMMENT</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>'string'</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.2791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>添加注释，最多</span><span
    style='font-family:"Comic Sans MS"'> 2048 </span><span style='font-family:
    "Microsoft YaHei UI"'>个字符</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>COMPRESSION
    </p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>'ZLIB' |
    'LZ4' | 'NONE'</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.3076in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>用于</span><span
    style='font-family:"Comic Sans MS"'>InnoDB</span><span style='font-family:
    "Microsoft YaHei UI"'>个</span><span style='font-family:"Comic Sans MS"'>
    table </span><span style='font-family:"Microsoft YaHei UI"'>的页面级压缩的压缩算法</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>CONNECTION</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>'connect_string'</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.2791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>FEDERATEDtable
    </span><span style='font-family:"Microsoft YaHei UI"'>的连接字符串</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>{DATA |
    INDEX} DIRECTORY</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>'absolute
    path to directory'</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.3381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>指定数据文件存储路径</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>创建</span><span
    style='font-family:"Comic Sans MS"'>MyISAMtable </span><span
    style='font-family:"Microsoft YaHei UI"'>时，它们指定分别放置</span><span
    style='font-family:"Comic Sans MS"'>MyISAMtable </span><span
    style='font-family:"Microsoft YaHei UI"'>的数据文件和索引文件的位置。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>与</span><span
    style='font-family:"Comic Sans MS"'>InnoDBtable </span><span
    style='font-family:"Microsoft YaHei UI"'>不同，</span><span style='font-family:
    "Comic Sans MS"'>MySQL </span><span style='font-family:"Microsoft YaHei UI"'>不会创建与数据库名称相对应的子目录。在指定的目录中创建文件。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>DELAY_KEY_WRITE</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>0 | 1</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.3631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>是否在表关闭之前，将对表的</span><span
    style='font-family:"Comic Sans MS"'>update</span><span style='font-family:
    "Microsoft YaHei UI"'>操作指跟新数据到磁盘，而不更新索引到磁盘，把对索引的更改记录在内存</span></p>
    <p style='font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'>如果要在关闭</span><span
    style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
    "Microsoft YaHei UI"'>之前延迟</span><span style='font-family:"Comic Sans MS"'>
    table </span><span style='font-family:"Microsoft YaHei UI"'>的键更新，请将其设置为</span><span
    style='font-family:"Comic Sans MS"'> 1</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>ENCRYPTION</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>'Y' |
    'N'</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.3763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>是否加密，</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>将</span><span
    style='font-family:"Comic Sans MS"'>ENCRYPTION</span><span
    style='font-family:"Microsoft YaHei UI"'>选项设置为</span><span
    style='font-family:"Comic Sans MS"'>'Y'</span><span style='font-family:
    "Microsoft YaHei UI"'>以对在</span><span style='font-family:"Comic Sans MS"'>file-per-tabletable
    </span><span style='font-family:"Microsoft YaHei UI"'>空间中创建的</span><span
    style='font-family:"Comic Sans MS"'>InnoDBtable </span><span
    style='font-family:"Microsoft YaHei UI"'>启用页面级数据加密。选项值不区分大小写。 </span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>InnoDBtable
    </span><span style='font-family:"Microsoft YaHei UI"'>空间加密功能引入了</span><span
    style='font-family:"Comic Sans MS"'>ENCRYPTION</span><span
    style='font-family:"Microsoft YaHei UI"'>选项</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>ENGINE</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>engine_name</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.2791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>存储引擎</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>INSERT_METHOD</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>NO |
    FIRST | LAST</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.368in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>表的插入的方式</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>如果要将数据插入</span><span style='font-family:"Comic Sans MS"'
    lang=zh-CN>MERGE</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>table</span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>，则必须用</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN>INSERT_METHOD</span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>指定应将行插入到的</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN> table</span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>。 </span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>INSERT_METHOD</span><span
    style='font-family:"Microsoft YaHei UI"'>是仅对</span><span style='font-family:
    "Comic Sans MS"'>MERGEtable </span><span style='font-family:"Microsoft YaHei UI"'>有用的选项。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>使用</span><span
    style='font-family:"Comic Sans MS"'>FIRST</span><span style='font-family:
    "Microsoft YaHei UI"'>或</span><span style='font-family:"Comic Sans MS"'>LAST</span><span
    style='font-family:"Microsoft YaHei UI"'>的值可将插入内容移到第一个或最后一个</span><span
    style='font-family:"Comic Sans MS"'> table</span><span style='font-family:
    "Microsoft YaHei UI"'>，或使用</span><span style='font-family:"Comic Sans MS"'>NO</span><span
    style='font-family:"Microsoft YaHei UI"'>的值可防止插入</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>KEY_BLOCK_SIZE</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>value</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.4118in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于</span><span
    style='font-family:"Comic Sans MS"'>MyISAM</span><span style='font-family:
    "Microsoft YaHei UI"'>个</span><span style='font-family:"Comic Sans MS"'>
    table</span><span style='font-family:"Microsoft YaHei UI"'>，</span><span
    style='font-family:"Comic Sans MS"'>KEY_BLOCK_SIZE(</span><span
    style='font-family:"Microsoft YaHei UI"'>可选</span><span style='font-family:
    "Comic Sans MS"'>)</span><span style='font-family:"Microsoft YaHei UI"'>以字节为单位指定用于索引键块的大小。该值被视为提示；如有必要，可以使用其他大小。为单个索引定义指定的</span><span
    style='font-family:"Comic Sans MS"'>KEY_BLOCK_SIZE</span><span
    style='font-family:"Microsoft YaHei UI"'>值将覆盖</span><span style='font-family:
    "Comic Sans MS"'> table </span><span style='font-family:"Microsoft YaHei UI"'>级</span><span
    style='font-family:"Comic Sans MS"'>KEY_BLOCK_SIZE</span><span
    style='font-family:"Microsoft YaHei UI"'>的值。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>MAX_ROWS</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>value</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.2791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>计划在</span><span
    style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
    "Microsoft YaHei UI"'>中存储的最大行数</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>MIN_ROWS</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>value</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.2791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>计划在</span><span
    style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
    "Microsoft YaHei UI"'>中存储的最小行数</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>PACK_KEYS</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>0 | 1 |
    DEFAULT</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.4118in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>仅对</span><span
    style='font-family:"Comic Sans MS"'>MyISAM</span><span style='font-family:
    "Microsoft YaHei UI"'>个</span><span style='font-family:"Comic Sans MS"'>
    table </span><span style='font-family:"Microsoft YaHei UI"'>生效。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果要使用较小的索引，请将此选项设置为</span><span
    style='font-family:"Comic Sans MS"'> 1</span><span style='font-family:SimSun'>。</span><span
    style='font-family:"Microsoft YaHei UI"'>这通常会使更新速度变慢，读取速度也会加快。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>将选项设置为</span><span
    style='font-family:"Comic Sans MS"'> 0 </span><span style='font-family:
    "Microsoft YaHei UI"'>将禁用所有键打包。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>将其设置为</span><span
    style='font-family:"Comic Sans MS"'>DEFAULT</span><span style='font-family:
    "Microsoft YaHei UI"'>会告诉存储引擎仅打包长</span><span style='font-family:"Comic Sans MS"'>CHAR</span><span
    style='font-family:"Microsoft YaHei UI"'>，</span><span style='font-family:
    "Comic Sans MS"'>VARCHAR</span><span style='font-family:"Microsoft YaHei UI"'>，</span><span
    style='font-family:"Comic Sans MS"'>BINARY</span><span style='font-family:
    "Microsoft YaHei UI"'>或</span><span style='font-family:"Comic Sans MS"'>VARBINARY</span><span
    style='font-family:"Microsoft YaHei UI"'>列。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>如果不使用</span><span style='font-family:"Comic Sans MS"'
    lang=en-US>PACK_KEYS</span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>，则默认值为打包字符串，但不打包数字。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>如果您使用</span><span style='font-family:"Comic Sans MS"'
    lang=en-US>PACK_KEYS=1</span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>，数字也会被打包</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>ROW_FORMAT</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>DEFAULT</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>DYNAMIC</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>FIXED</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>COMPRESSED</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>REDUNDANT</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>COMPACT</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.2791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>显式定义表的行格式</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>STATS_AUTO_RECALC</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>DEFAULT
    | 0 | 1</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.4118in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定是否自动重新计算持久统计信息。值</span><span
    style='font-family:"Comic Sans MS"'> DEFAULT </span><span style='font-family:
    "Microsoft YaHei UI"'>导致</span><span style='font-family:"Comic Sans MS"'>
    table </span><span style='font-family:"Microsoft YaHei UI"'>的持久统计设置由</span><span
    style='font-family:"Comic Sans MS"'> innodb_stats_auto_recalc </span><span
    style='font-family:"Microsoft YaHei UI"'>设置确定。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>值</span><span
    style='font-family:"Comic Sans MS"'> 1 </span><span style='font-family:
    "Microsoft YaHei UI"'>会导致在</span><span style='font-family:"Comic Sans MS"'>
    10% </span><span style='font-family:"Microsoft YaHei UI"'>的表数据发生更改时重新计算统计信息。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>STATS_PERSISTENT</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>DEFAULT
    | 0 | 1</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.375in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定是否为</span><span
    style='font-family:"Comic Sans MS"'> InnoDB </span><span style='font-family:
    "Microsoft YaHei UI"'>表启用持久统计。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>值</span><span
    style='font-family:"Comic Sans MS"'> DEFAULT </span><span style='font-family:
    "Microsoft YaHei UI"'>导致表的持久统计信息设置由</span><span style='font-family:"Comic Sans MS"'>
    innodb_stats_persistent </span><span style='font-family:"Microsoft YaHei UI"'>设置确定。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>值</span><span
    style='font-family:"Comic Sans MS"'> 1 </span><span style='font-family:
    "Microsoft YaHei UI"'>启用表的持久统计信息，而值</span><span style='font-family:"Comic Sans MS"'>
    0 </span><span style='font-family:"Microsoft YaHei UI"'>禁用该功能。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9527in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>STATS_SAMPLE_PAGES</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>value</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.3381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>指定在为索引列计算基数和其他统计信息时要采样的索引页数</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>TABLESPACE </span><span lang=en-US><span
    style='mso-spacerun:yes'> </span></span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=en-US>(</span><span lang=zh-CN>STORAGE</span><span lang=en-US>)</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>tablespace_name</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>DISK |
    MEMORY</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.4118in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>可用于在现有的常规</span><span
    style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
    "Microsoft YaHei UI"'>空间，每</span><span style='font-family:"Comic Sans MS"'>
    table </span><span style='font-family:"Microsoft YaHei UI"'>文件</span><span
    style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
    "Microsoft YaHei UI"'>空间或系统</span><span style='font-family:"Comic Sans MS"'>
    table </span><span style='font-family:"Microsoft YaHei UI"'>空间中创建</span><span
    style='font-family:"Comic Sans MS"'> table</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定的常规</span><span
    style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
    "Microsoft YaHei UI"'>空间在使用</span><span style='font-family:"Comic Sans MS"'>TABLESPACE</span><span
    style='font-family:"Microsoft YaHei UI"'>子句之前必须存在</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'
    lang=en-US>S</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>TORAGE</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>将</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN> table </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>分配给</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN> NDB </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>群集磁盘数据</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN> table </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>空间，</span><span
    style='font-family:"Comic Sans MS"' lang=en-US>S</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN>TORAGE </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>选项仅与</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN>NDBtable </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>一起使用</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.934in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>UNION</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>(tbl_name[,tbl_name]...)</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.3312in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>用于访问一个相同的</span><span
    style='font-family:"Comic Sans MS"'>MyISAMtable </span><span
    style='font-family:"Microsoft YaHei UI"'>的集合。仅适用于合并多个</span><span
    style='font-family:"Comic Sans MS"'> table</span></p>
    </td>
   </tr>
  </table>
  </div>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.6256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>[</span><span lang=zh-CN>partition_options</span><span lang=en-US>]</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:9.9402in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'>可用于控制用</span><span
  style='font-family:"Comic Sans MS"'>CREATE TABLE</span><span
  style='font-family:"Microsoft YaHei UI"'>创建的</span><span style='font-family:
  "Comic Sans MS"'> table </span><span style='font-family:"Microsoft YaHei UI"'>的分区</span></p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.4854in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:6.2715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.4854in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>PARTITION BY</span><span lang=en-US> </span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&nbsp;</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:6.4034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>包含用于确定分区的函数；该函数返回一个整数值，范围是</span><span
    style='font-family:"Comic Sans MS"'> 1 </span><span style='font-family:
    "Microsoft YaHei UI"'>到</span><span style='font-family:"Comic Sans MS"'>
    num </span><span style='font-family:"Microsoft YaHei UI"'>，其中</span><span
    style='font-family:"Comic Sans MS"'> num *</span><span style='font-family:
    "Microsoft YaHei UI"'>是分区数。 </span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>(</span><span
    style='font-family:"Microsoft YaHei UI"'>一个</span><span style='font-family:
    "Comic Sans MS"'> table </span><span style='font-family:"Microsoft YaHei UI"'>可能包含的用户定义的分区的最大数量为</span><span
    style='font-family:"Comic Sans MS"'> 1024</span><span style='font-family:
    "Microsoft YaHei UI"'>；该分区的最大数量包括了子分区的数</span></p>
    <div style='direction:ltr'>
    <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:
     ltr;border-collapse:collapse;border-style:solid;border-color:#A3A3A3;
     border-width:1pt' title="" summary="">
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:2.1618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>子句</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:4.059in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>描述</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      vertical-align:top;width:2.1618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'><span
      lang=zh-CN>[LINEAR]</span><span lang=en-US> </span><span lang=zh-CN>HASH(expr)</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      vertical-align:top;width:4.1229in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>散列一个或多个列以创建用于放置和定位行的键。</span><span
      style='font-family:"Comic Sans MS"'> * expr *</span><span
      style='font-family:"Microsoft YaHei UI"'>是使用一个或多个</span><span
      style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
      "Microsoft YaHei UI"'>列的</span><span style='font-family:"Comic Sans MS"'>
      table </span><span style='font-family:"Microsoft YaHei UI"'>达式。这可以是产生单个整数值的任何有效</span><span
      style='font-family:"Comic Sans MS"'> MySQLtable </span><span
      style='font-family:"Microsoft YaHei UI"'>达式</span><span style='font-family:
      "Comic Sans MS"'>(</span><span style='font-family:"Microsoft YaHei UI"'>包括</span><span
      style='font-family:"Comic Sans MS"'> MySQL </span><span style='font-family:
      "Microsoft YaHei UI"'>函数</span><span style='font-family:"Comic Sans MS"'>)</span></p>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>&nbsp;</p>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>您不得将</span><span
      style='font-family:"Comic Sans MS"'>VALUES LESS THAN</span><span
      style='font-family:"Microsoft YaHei UI"'>或</span><span style='font-family:
      "Comic Sans MS"'>VALUES IN</span><span style='font-family:"Microsoft YaHei UI"'>子句与</span><span
      style='font-family:"Comic Sans MS"'>PARTITION BY HASH</span><span
      style='font-family:"Microsoft YaHei UI"'>一起使用。</span></p>
      <p style='font-size:9.5pt'><span style='font-family:"Comic Sans MS"'>PARTITION
      BY HASH</span><span style='font-family:"Microsoft YaHei UI"'>使用</span><span
      style='font-family:"Comic Sans MS"'>*</span><span style='font-family:
      "Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>expr</span><span
      style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
      style='font-family:"Comic Sans MS"'>*</span><span style='font-family:
      "Microsoft YaHei UI"'>的余数除以分区数</span><span style='font-family:"Comic Sans MS"'>(</span><span
      style='font-family:"Microsoft YaHei UI"'>即模数</span><span
      style='font-family:"Comic Sans MS"'>)</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:2.1618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'><span
      lang=zh-CN>[LINEAR]</span><span lang=en-US> </span><span lang=zh-CN>KEY(column_list)</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:4.1284in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>这类似于</span><span
      style='font-family:"Comic Sans MS"'>HASH</span><span style='font-family:
      "Microsoft YaHei UI"'>，除了</span><span style='font-family:"Comic Sans MS"'>
      MySQL </span><span style='font-family:"Microsoft YaHei UI"'>提供散列功能以保证均匀的数据分布。</span><span
      style='font-family:"Comic Sans MS"'> * column_list *</span><span
      style='font-family:"Microsoft YaHei UI"'>参数只是一个</span><span
      style='font-family:"Comic Sans MS"'> 1 </span><span style='font-family:
      "Microsoft YaHei UI"'>或多个</span><span style='font-family:"Comic Sans MS"'>
      table </span><span style='font-family:"Microsoft YaHei UI"'>列的列</span><span
      style='font-family:"Comic Sans MS"'> table(</span><span style='font-family:
      "Microsoft YaHei UI"'>最多</span><span style='font-family:"Comic Sans MS"'>
      16 </span><span style='font-family:"Microsoft YaHei UI"'>个</span><span
      style='font-family:"Comic Sans MS"'>)</span></p>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>&nbsp;</p>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于按键分区的</span><span
      style='font-family:"Comic Sans MS"'> table</span><span style='font-family:
      "Microsoft YaHei UI"'>，可以通过使用</span><span style='font-family:"Comic Sans MS"'>LINEAR</span><span
      style='font-family:"Microsoft YaHei UI"'>关键字来采用线性分区。这与由</span><span
      style='font-family:"Comic Sans MS"'>HASH</span><span style='font-family:
      "Microsoft YaHei UI"'>分区的</span><span style='font-family:"Comic Sans MS"'>
      table </span><span style='font-family:"Microsoft YaHei UI"'>具有相同的效果。也就是说，使用</span><span
      style='font-family:"Comic Sans MS"'>&amp;</span><span style='font-family:
      "Microsoft YaHei UI"'>运算符而不是模数来找到分区号</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      vertical-align:top;width:2.1618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'><span
      lang=zh-CN>[LINEAR]</span><span lang=en-US> </span><span lang=zh-CN>RANGE(expr)</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      vertical-align:top;width:4.125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>在这种情况下，</span><span
      style='font-family:"Comic Sans MS"'>* expr *</span><span
      style='font-family:"Microsoft YaHei UI"'>使用一组</span><span
      style='font-family:"Comic Sans MS"'>VALUES LESS THAN</span><span
      style='font-family:"Microsoft YaHei UI"'>运算符显示值的范围。使用范围分区时，必须使用</span><span
      style='font-family:"Comic Sans MS"'>VALUES LESS THAN</span><span
      style='font-family:"Microsoft YaHei UI"'>定义至少一个分区。您不能将</span><span
      style='font-family:"Comic Sans MS"'>VALUES IN</span><span
      style='font-family:"Microsoft YaHei UI"'>与范围分区一起使用</span></p>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>&nbsp;</p>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于由</span><span
      style='font-family:"Comic Sans MS"'>RANGE</span><span style='font-family:
      "Microsoft YaHei UI"'>分区的</span><span style='font-family:"Comic Sans MS"'>
      table</span><span style='font-family:"Microsoft YaHei UI"'>，必须将</span><span
      style='font-family:"Comic Sans MS"'>VALUES LESS THAN</span><span
      style='font-family:"Microsoft YaHei UI"'>与整数</span><span
      style='font-family:"Comic Sans MS"'> Literals </span><span
      style='font-family:"Microsoft YaHei UI"'>值或计算结果为单个整数值的</span><span
      style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
      "Microsoft YaHei UI"'>达式一起使用</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:2.1694in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'><span
      lang=zh-CN>RANGE</span><span lang=en-US> </span><span lang=zh-CN>COLUMNS(column_list)</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:4.0993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Comic Sans MS"'>RANGE</span><span
      style='font-family:"Microsoft YaHei UI"'>上的此变体有助于使用多个列上的范围条件</span><span
      style='font-family:"Comic Sans MS"'>(</span><span style='font-family:
      "Microsoft YaHei UI"'>即具有诸如</span><span style='font-family:"Comic Sans MS"'>WHERE
      a = 1 AND b &lt; 10</span><span style='font-family:"Microsoft YaHei UI"'>或</span><span
      style='font-family:"Comic Sans MS"'>WHERE a = 1 AND b = 10 AND c &lt; 10</span><span
      style='font-family:"Microsoft YaHei UI"'>之类的条件</span><span
      style='font-family:"Comic Sans MS"'>)</span><span style='font-family:
      "Microsoft YaHei UI"'>对查询进行分区修剪。它使您可以通过使用</span><span style='font-family:
      "Comic Sans MS"'>COLUMNS</span><span style='font-family:"Microsoft YaHei UI"'>子句中的列列</span><span
      style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
      "Microsoft YaHei UI"'>和每个</span><span style='font-family:"Comic Sans MS"'>PARTITION
      ... VALUES LESS THAN (value_list)</span><span style='font-family:"Microsoft YaHei UI"'>分区定义子句中的一组列值来指定多列中的值范围。</span><span
      style='font-family:"Comic Sans MS"'> (</span><span style='font-family:
      "Microsoft YaHei UI"'>在最简单的情况下，此集合由单个列组成</span><span style='font-family:
      "Comic Sans MS"'>.)* column_list </span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
      style='font-family:"Comic Sans MS"'> value_list *</span><span
      style='font-family:"Microsoft YaHei UI"'>中可以引用的最大列数为</span><span
      style='font-family:"Comic Sans MS"'> 16.</span></p>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>&nbsp;</p>
      <p style='font-size:9.5pt'><span style='font-family:"Comic Sans MS"'>COLUMNS</span><span
      style='font-family:"Microsoft YaHei UI"'>子句中使用的</span><span
      style='font-family:"Comic Sans MS"'>* column_list *</span><span
      style='font-family:"Microsoft YaHei UI"'>只能包含列名；列</span><span
      style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
      "Microsoft YaHei UI"'>中的每一列必须是以下</span><span style='font-family:"Comic Sans MS"'>
      MySQL </span><span style='font-family:"Microsoft YaHei UI"'>数据类型之一</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:2.1618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'><span
      lang=zh-CN>[LINEAR]</span><span lang=en-US> </span><span lang=zh-CN>LIST(expr)</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:4.1076in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>基于具有有限的可能值集</span><span
      style='font-family:"Comic Sans MS"'>(</span><span style='font-family:
      "Microsoft YaHei UI"'>例如</span><span style='font-family:"Comic Sans MS"'>
      State </span><span style='font-family:"Microsoft YaHei UI"'>或国家</span><span
      style='font-family:"Comic Sans MS"'>/locale </span><span
      style='font-family:"Microsoft YaHei UI"'>代码</span><span style='font-family:
      "Comic Sans MS"'>)</span><span style='font-family:"Microsoft YaHei UI"'>的</span><span
      style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
      "Microsoft YaHei UI"'>列分配分区时，此功能很有用。在这种情况下，可以将与某个</span><span
      style='font-family:"Comic Sans MS"'> State </span><span style='font-family:
      "Microsoft YaHei UI"'>或国家</span><span style='font-family:"Comic Sans MS"'>/locale
      </span><span style='font-family:"Microsoft YaHei UI"'>有关的所有行分配给单个分区，或者可以为某个</span><span
      style='font-family:"Comic Sans MS"'> State </span><span style='font-family:
      "Microsoft YaHei UI"'>或国家</span><span style='font-family:"Comic Sans MS"'>/locale
      </span><span style='font-family:"Microsoft YaHei UI"'>的某个组保留一个分区。它类似于</span><span
      style='font-family:"Comic Sans MS"'>RANGE</span><span style='font-family:
      "Microsoft YaHei UI"'>，不同之处在于仅</span><span style='font-family:"Comic Sans MS"'>VALUES
      IN</span><span style='font-family:"Microsoft YaHei UI"'>可以用于指定每个分区的允许值</span></p>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>&nbsp;</p>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>您不能将</span><span
      style='font-family:"Comic Sans MS"'>VALUES LESS THAN</span><span
      style='font-family:"Microsoft YaHei UI"'>与</span><span style='font-family:
      "Comic Sans MS"'>PARTITION BY LIST</span><span style='font-family:"Microsoft YaHei UI"'>结合使用</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:2.1618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'><span
      lang=zh-CN>LIST</span><span lang=en-US> </span><span lang=zh-CN>COLUMNS(column_list)</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:4.1284in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Comic Sans MS"'>LIST</span><span
      style='font-family:"Microsoft YaHei UI"'>上的此变体使用多个列上的比较条件</span><span
      style='font-family:"Comic Sans MS"'>(</span><span style='font-family:
      "Microsoft YaHei UI"'>即具有</span><span style='font-family:"Comic Sans MS"'>WHERE
      a = 5 AND b = 5</span><span style='font-family:"Microsoft YaHei UI"'>或</span><span
      style='font-family:"Comic Sans MS"'>WHERE a = 1 AND b = 10 AND c = 5</span><span
      style='font-family:"Microsoft YaHei UI"'>之类的条件</span><span
      style='font-family:"Comic Sans MS"'>)</span><span style='font-family:
      "Microsoft YaHei UI"'>来简化查询的分区修剪。它使您可以通过使用</span><span style='font-family:
      "Comic Sans MS"'>COLUMNS</span><span style='font-family:"Microsoft YaHei UI"'>子句中的列列</span><span
      style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
      "Microsoft YaHei UI"'>和每个</span><span style='font-family:"Comic Sans MS"'>PARTITION
      ... VALUES IN (value_list)</span><span style='font-family:"Microsoft YaHei UI"'>分区定义子句中的一组列值来指定多列中的值。</span></p>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>&nbsp;</p>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>关于</span><span
      style='font-family:"Comic Sans MS"'>LIST COLUMNS(column_list)</span><span
      style='font-family:"Microsoft YaHei UI"'>中使用的列列</span><span
      style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
      "Microsoft YaHei UI"'>和</span><span style='font-family:"Comic Sans MS"'>VALUES
      IN(value_list)</span><span style='font-family:"Microsoft YaHei UI"'>中使用的值列</span><span
      style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
      "Microsoft YaHei UI"'>的数据类型的规则分别与</span><span style='font-family:"Comic Sans MS"'>RANGE
      COLUMNS(column_list)</span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
      style='font-family:"Comic Sans MS"'>VALUES LESS THAN(value_list)</span><span
      style='font-family:"Microsoft YaHei UI"'>中使用的列列</span><span
      style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
      "Microsoft YaHei UI"'>的数据类型相同，除了</span><span style='font-family:"Comic Sans MS"'>VALUES
      IN</span><span style='font-family:"Microsoft YaHei UI"'>子句</span><span
      style='font-family:"Comic Sans MS"'>MAXVALUE</span><span
      style='font-family:"Microsoft YaHei UI"'>不允许，您可以使用</span><span
      style='font-family:"Comic Sans MS"'>NULL</span><span style='font-family:
      "Microsoft YaHei UI"'>。</span></p>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>&nbsp;</p>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>与</span><span
      style='font-family:"Comic Sans MS"'>PARTITION BY LIST</span><span
      style='font-family:"Microsoft YaHei UI"'>一起使用时，与</span><span
      style='font-family:"Comic Sans MS"'>PARTITION BY LIST COLUMNS</span><span
      style='font-family:"Microsoft YaHei UI"'>一起用于</span><span
      style='font-family:"Comic Sans MS"'>VALUES IN</span><span
      style='font-family:"Microsoft YaHei UI"'>的值列</span><span
      style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
      "Microsoft YaHei UI"'>之间有一个重要区别。与</span><span style='font-family:"Comic Sans MS"'>PARTITION
      BY LIST COLUMNS</span><span style='font-family:"Microsoft YaHei UI"'>一起使用时，</span><span
      style='font-family:"Comic Sans MS"'>VALUES IN</span><span
      style='font-family:"Microsoft YaHei UI"'>子句中的每个元素都必须是一组</span><span
      style='font-family:"Comic Sans MS"'>*</span><span style='font-family:
      "Microsoft YaHei UI"'>列值；每个集合中的值数必须与</span><span style='font-family:"Comic Sans MS"'>COLUMNS</span><span
      style='font-family:"Microsoft YaHei UI"'>子句中使用的列数相同，并且这些值的数据类型必须与列的数据类型匹配</span><span
      style='font-family:"Comic Sans MS"'>(</span><span style='font-family:
      "Microsoft YaHei UI"'>并以相同的</span><span style='font-family:"Comic Sans MS"'>
      Sequences </span><span style='font-family:"Microsoft YaHei UI"'>出现</span><span
      style='font-family:"Comic Sans MS"'>)</span><span style='font-family:
      "Microsoft YaHei UI"'>。在最简单的情况下，集合由单个列组成。</span><span style='font-family:
      "Comic Sans MS"'> * column_list </span><span style='font-family:"Microsoft YaHei UI"'>和组成</span><span
      style='font-family:"Comic Sans MS"'> value_list *</span><span
      style='font-family:"Microsoft YaHei UI"'>的元素中可以使用的最大列数为</span><span
      style='font-family:"Comic Sans MS"'> 16.</span></p>
      </td>
     </tr>
    </table>
    </div>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.4854in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>[PARTITIONS
    num]</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:6.2805in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>可以选择使用</span><span
    style='font-family:"Comic Sans MS"'>PARTITIONS num</span><span
    style='font-family:"Microsoft YaHei UI"'>子句指定分区的数量，其中</span><span
    style='font-family:"Comic Sans MS"'>* num </span><span style='font-family:
    "Microsoft YaHei UI"'>是分区的数量。如果此子句和</span><span style='font-family:"Comic Sans MS"'>*</span><span
    style='font-family:"Microsoft YaHei UI"'>都使用了任何</span><span
    style='font-family:"Comic Sans MS"'>PARTITION</span><span style='font-family:
    "Microsoft YaHei UI"'>子句，则</span><span style='font-family:"Comic Sans MS"'>num
    *</span><span style='font-family:"Microsoft YaHei UI"'>必须等于使用</span><span
    style='font-family:"Comic Sans MS"'>PARTITION</span><span style='font-family:
    "Microsoft YaHei UI"'>子句声明的任何分区的总数</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.4854in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>[SUBPARTITION BY</span><span lang=en-US>]</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:6.4034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>分区可以可选地划分为多个子分区。这可以通过使用可选的</span><span
    style='font-family:"Comic Sans MS"'>SUBPARTITION BY</span><span
    style='font-family:"Microsoft YaHei UI"'>子句来指示。可以通过</span><span
    style='font-family:"Comic Sans MS"'>HASH</span><span style='font-family:
    "Microsoft YaHei UI"'>或</span><span style='font-family:"Comic Sans MS"'>KEY</span><span
    style='font-family:"Microsoft YaHei UI"'>进行分区。这些都可以是</span><span
    style='font-family:"Comic Sans MS"'>LINEAR</span><span style='font-family:
    "Microsoft YaHei UI"'>。这些工作方式与先前针对等效分区类型所述的方式相同。</span><span
    style='font-family:"Comic Sans MS"'> (</span><span style='font-family:"Microsoft YaHei UI"'>无法通过</span><span
    style='font-family:"Comic Sans MS"'>LIST</span><span style='font-family:
    "Microsoft YaHei UI"'>或</span><span style='font-family:"Comic Sans MS"'>RANGE</span><span
    style='font-family:"Microsoft YaHei UI"'>进行子分区</span><span
    style='font-family:"Comic Sans MS"'>.)</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>可以使用</span><span
    style='font-family:"Comic Sans MS"'>SUBPARTITIONS</span><span
    style='font-family:"Microsoft YaHei UI"'>关键字后跟一个整数值来指示子分区的数量</span></p>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>&nbsp;</p>
    <div style='direction:ltr'>
    <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:
     ltr;border-collapse:collapse;border-style:solid;border-color:#A3A3A3;
     border-width:1pt' title="" summary="">
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:2.1618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>子句</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:4.059in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>描述</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      vertical-align:top;width:2.1618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'><span
      lang=zh-CN>[LINEAR]</span><span lang=en-US> </span><span lang=zh-CN>HASH(expr)</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      vertical-align:top;width:4.1229in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>散列一个或多个列以创建用于放置和定位行的键。</span><span
      style='font-family:"Comic Sans MS"'> * expr *</span><span
      style='font-family:"Microsoft YaHei UI"'>是使用一个或多个</span><span
      style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
      "Microsoft YaHei UI"'>列的</span><span style='font-family:"Comic Sans MS"'>
      table </span><span style='font-family:"Microsoft YaHei UI"'>达式。这可以是产生单个整数值的任何有效</span><span
      style='font-family:"Comic Sans MS"'> MySQLtable </span><span
      style='font-family:"Microsoft YaHei UI"'>达式</span><span style='font-family:
      "Comic Sans MS"'>(</span><span style='font-family:"Microsoft YaHei UI"'>包括</span><span
      style='font-family:"Comic Sans MS"'> MySQL </span><span style='font-family:
      "Microsoft YaHei UI"'>函数</span><span style='font-family:"Comic Sans MS"'>)</span></p>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>&nbsp;</p>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>您不得将</span><span
      style='font-family:"Comic Sans MS"'>VALUES LESS THAN</span><span
      style='font-family:"Microsoft YaHei UI"'>或</span><span style='font-family:
      "Comic Sans MS"'>VALUES IN</span><span style='font-family:"Microsoft YaHei UI"'>子句与</span><span
      style='font-family:"Comic Sans MS"'>PARTITION BY HASH</span><span
      style='font-family:"Microsoft YaHei UI"'>一起使用。</span></p>
      <p style='font-size:9.5pt'><span style='font-family:"Comic Sans MS"'>PARTITION
      BY HASH</span><span style='font-family:"Microsoft YaHei UI"'>使用</span><span
      style='font-family:"Comic Sans MS"'>*</span><span style='font-family:
      "Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>expr</span><span
      style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
      style='font-family:"Comic Sans MS"'>*</span><span style='font-family:
      "Microsoft YaHei UI"'>的余数除以分区数</span><span style='font-family:"Comic Sans MS"'>(</span><span
      style='font-family:"Microsoft YaHei UI"'>即模数</span><span
      style='font-family:"Comic Sans MS"'>)</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:2.1618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'><span
      lang=zh-CN>[LINEAR]</span><span lang=en-US> </span><span lang=zh-CN>KEY(column_list)</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:4.1284in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>这类似于</span><span
      style='font-family:"Comic Sans MS"'>HASH</span><span style='font-family:
      "Microsoft YaHei UI"'>，除了</span><span style='font-family:"Comic Sans MS"'>
      MySQL </span><span style='font-family:"Microsoft YaHei UI"'>提供散列功能以保证均匀的数据分布。</span><span
      style='font-family:"Comic Sans MS"'> * column_list *</span><span
      style='font-family:"Microsoft YaHei UI"'>参数只是一个</span><span
      style='font-family:"Comic Sans MS"'> 1 </span><span style='font-family:
      "Microsoft YaHei UI"'>或多个</span><span style='font-family:"Comic Sans MS"'>
      table </span><span style='font-family:"Microsoft YaHei UI"'>列的列</span><span
      style='font-family:"Comic Sans MS"'> table(</span><span style='font-family:
      "Microsoft YaHei UI"'>最多</span><span style='font-family:"Comic Sans MS"'>
      16 </span><span style='font-family:"Microsoft YaHei UI"'>个</span><span
      style='font-family:"Comic Sans MS"'>)</span></p>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>&nbsp;</p>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于按键分区的</span><span
      style='font-family:"Comic Sans MS"'> table</span><span style='font-family:
      "Microsoft YaHei UI"'>，可以通过使用</span><span style='font-family:"Comic Sans MS"'>LINEAR</span><span
      style='font-family:"Microsoft YaHei UI"'>关键字来采用线性分区。这与由</span><span
      style='font-family:"Comic Sans MS"'>HASH</span><span style='font-family:
      "Microsoft YaHei UI"'>分区的</span><span style='font-family:"Comic Sans MS"'>
      table </span><span style='font-family:"Microsoft YaHei UI"'>具有相同的效果。也就是说，使用</span><span
      style='font-family:"Comic Sans MS"'>&amp;</span><span style='font-family:
      "Microsoft YaHei UI"'>运算符而不是模数来找到分区号</span></p>
      </td>
     </tr>
    </table>
    </div>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.5048in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>[(partition_definition
    [, partition_definition] ...)]</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:6.384in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>每个分区可以使用</span><span
    style='font-family:"Comic Sans MS"'>* partition_definition *</span><span
    style='font-family:"Microsoft YaHei UI"'>子句单独定义</span></p>
    <div style='direction:ltr'>
    <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:
     ltr;border-collapse:collapse;border-style:solid;border-color:#A3A3A3;
     border-width:1pt' title="" summary="">
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:2.0784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>子句</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:4.1423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>描述</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:2.0784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>PARTITION
      partition_name</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:4.1423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt'>指定分区的逻辑名</p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:2.0784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>VALUES</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:4.1909in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于范围分区，每个分区必须包含</span><span
      style='font-family:"Comic Sans MS"'>VALUES LESS THAN</span><span
      style='font-family:"Microsoft YaHei UI"'>子句；对于列</span><span
      style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
      "Microsoft YaHei UI"'>分区，必须为每个分区指定一个</span><span style='font-family:"Comic Sans MS"'>VALUES
      IN</span><span style='font-family:"Microsoft YaHei UI"'>子句。这用于确定哪些行要存储在此分区中。</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:2.0784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>[STORAGE]
      ENGINE</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:4.1423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>分区处理程序为</span><span
      style='font-family:"Comic Sans MS";color:#333333'>PARTITION</span><span
      style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
      "Comic Sans MS";color:#333333'>SUBPARTITION</span><span style='font-family:
      "Microsoft YaHei UI"'>接受</span><span style='font-family:"Comic Sans MS";
      color:#333333'>[STORAGE] ENGINE</span><span style='font-family:"Microsoft YaHei UI"'>选项。当前，唯一可以使用此方法的方法是将所有分区或所有子分区设置为同一存储引擎，并且尝试为同一</span><span
      style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
      "Microsoft YaHei UI"'>中的分区或子分区设置不同的存储引擎将产生错误</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:2.0784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>COMMENT</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:4.1423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>可选的</span><span
      style='font-family:"Comic Sans MS"'>COMMENT</span><span style='font-family:
      "Microsoft YaHei UI"'>子句可用于指定描述分区的字符串</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:2.0784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'><span
      lang=zh-CN>DATA </span><span lang=en-US>| </span><span lang=zh-CN>INDEX
      DIRECTORY</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:4.2118in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Comic Sans MS"'>DATA
      DIRECTORY</span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
      style='font-family:"Comic Sans MS"'>INDEX DIRECTORY</span><span
      style='font-family:"Microsoft YaHei UI"'>可用于指示目录，该分区的数据和索引将分别存储在该目录中。</span><span
      style='font-family:"Comic Sans MS"'> data_dir</span><span
      style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
      "Comic Sans MS"'>index_dir</span><span style='font-family:"Microsoft YaHei UI"'>都必须是绝对系统路径名</span></p>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'
      lang=en-US>&nbsp;</p>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>从</span><span
      style='font-family:"Comic Sans MS"'> MySQL 5.7.17 </span><span
      style='font-family:"Microsoft YaHei UI"'>开始，您必须具有</span><span
      style='font-family:"Comic Sans MS"'>FILE</span><span style='font-family:
      "Microsoft YaHei UI"'>特权才能使用</span><span style='font-family:"Comic Sans MS"'>DATA
      DIRECTORY</span><span style='font-family:"Microsoft YaHei UI"'>或</span><span
      style='font-family:"Comic Sans MS"'>INDEX DIRECTORY</span><span
      style='font-family:"Microsoft YaHei UI"'>分区选项</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:2.0784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>MAX_ROWS</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:4.1423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt'>指定要存储在分区中的最大行数</p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:2.0784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>MIN_ROWS</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:4.1423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt'>指定要存储在分区中的最小行数</p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:2.0784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>TABLESPACE</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:4.1423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>可用于为分区指定</span><span
      style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
      "Microsoft YaHei UI"'>空间。受</span><span style='font-family:"Comic Sans MS"'>
      NDB </span><span style='font-family:"Microsoft YaHei UI"'>群集支持。对于</span><span
      style='font-family:"Comic Sans MS"'>InnoDB</span><span style='font-family:
      "Microsoft YaHei UI"'>个</span><span style='font-family:"Comic Sans MS"'>
      table</span><span style='font-family:"Microsoft YaHei UI"'>，可以通过指定</span><span
      style='font-family:"Comic Sans MS"'> TABLESPACE``</span><span
      style='font-family:"Microsoft YaHei UI"'>来为分区指定每</span><span
      style='font-family:"Comic Sans MS"'> table </span><span style='font-family:
      "Microsoft YaHei UI"'>文件</span><span style='font-family:"Comic Sans MS"'>
      table </span><span style='font-family:"Microsoft YaHei UI"'>空间。所有分区必须属于同一存储引擎</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:2.0784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>subpartition_definition</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:4.2118in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>分区定义可以选择包含一个或多个</span><span
      style='font-family:"Comic Sans MS"'>* subpartition_definition </span><span
      style='font-family:"Microsoft YaHei UI"'>子句。每一个都至少由</span><span
      style='font-family:"Comic Sans MS"'>SUBPARTITION name</span><span
      style='font-family:"Microsoft YaHei UI"'>组成，其中</span><span
      style='font-family:"Comic Sans MS"'> name *</span><span style='font-family:
      "Microsoft YaHei UI"'>是该子分区的标识符。除了用</span><span style='font-family:"Comic Sans MS"'>SUBPARTITION</span><span
      style='font-family:"Microsoft YaHei UI"'>替换</span><span style='font-family:
      "Comic Sans MS"'>PARTITION</span><span style='font-family:"Microsoft YaHei UI"'>关键字之外，子分区定义的语法与分区定义的语法相同。</span></p>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'>&nbsp;</p>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>子分区必须由</span><span
      style='font-family:"Comic Sans MS"'>HASH</span><span style='font-family:
      "Microsoft YaHei UI"'>或</span><span style='font-family:"Comic Sans MS"'>KEY</span><span
      style='font-family:"Microsoft YaHei UI"'>完成，并且只能在</span><span
      style='font-family:"Comic Sans MS"'>RANGE</span><span style='font-family:
      "Microsoft YaHei UI"'>或</span><span style='font-family:"Comic Sans MS"'>LIST</span><span
      style='font-family:"Microsoft YaHei UI"'>分区上进行</span></p>
      </td>
     </tr>
    </table>
    </div>
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
12.0pt'><span style='color:#2E75B5'>CREATE TABLE</span> tb_emp1(</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>id </span><span style='color:#B43512' lang=zh-CN>INT</span><span
lang=zh-CN>(11)</span><span lang=en-US> </span><span style='color:#2E75B5'
lang=en-US>PRIMARY KEY NOT NULL</span><span lang=zh-CN>,</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>name</span><span style='color:#B43512' lang=zh-CN>
VARCHAR</span><span lang=zh-CN>(25)</span><span lang=en-US> </span><span
style='color:#2E75B5' lang=en-US>NOT NULL</span><span lang=zh-CN>,</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>deptId </span><span style='color:#B43512' lang=zh-CN>INT</span><span
lang=zh-CN>(11)</span><span lang=en-US> </span><span style='color:#2E75B5'
lang=en-US>NOT NULL</span><span lang=zh-CN>,</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>salary </span><span style='color:#B43512' lang=zh-CN>FLOAT</span><span
lang=en-US> </span><span style='color:#2E75B5' lang=en-US>NOT NULL</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>);</span><span style='color:#2E75B5' lang=zh-CN>ENGINE</span><span
lang=en-US> </span><span lang=zh-CN>=</span><span lang=en-US> </span><span
lang=zh-CN>InnoDB </span><span style='color:#2E75B5' lang=zh-CN>DEFAULT CHARSET</span><span
lang=en-US> </span><span lang=zh-CN>=</span><span lang=en-US> </span><span
lang=zh-CN>utf8;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.37 sec)</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数据表没有创建主键，那么</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>会自动创建一个以行号为准的隐藏主键</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'>来自</span><span
style='font-family:"Comic Sans MS"'>&lt; </span><a
href="https://www.docs4dev.com/docs/zh/mysql/5.7/reference/create-table.html"><span
style='font-family:"Comic Sans MS"'>https://www.docs4dev.com/docs/zh/mysql/5.7/reference/create-table.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt;</span></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>

