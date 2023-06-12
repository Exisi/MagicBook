categories:
- MySQL
tags:
- DROP INDEX
date:
- 2023-3-30 12:14:12
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.7159in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.7159in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>DROP INDEX</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>从</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>tbl_name</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>表中删除名为</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>INDEX_name</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的索引。此语句映射到</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ALTER</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>TABLE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句以删除索引。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>DROP INDEX</span> index_name </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>ON </span><span style='color:#70AD47' lang=en-US>&lt;</span><span
style='color:#70AD47' lang=zh-CN>tbl_name</span><span style='color:#70AD47'
lang=en-US>&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'>[</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'>ALGORITHM [=] {DEFAULT | INPLACE | COPY}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'><span lang=en-US>| </span><span lang=zh-CN>LOCK [=]
{DEFAULT | NONE | SHARED | EXCLUSIVE}</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'>...</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'>]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'>&nbsp;</p>

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
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>要删除主键，索引名称始终为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>primary</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，必须将其指定为带引号的标识符，因为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>primary</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>是保留字：</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>DROP INDEX </span><span style='color:#909090'>`</span><span
style='color:#0077AA'>PRIMARY</span><span style='color:#909090'>` </span><span
style='color:#0077AA'>ON</span> t<span style='color:#909090'>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>可以给出</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> ALGORITHM </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> LOCK </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>子句来影响表复制方法和在修改表的索引时读取和写入表的并发级别。它们与</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> ALTER TABLE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句具有相同的含义。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>NDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表的可变宽度列上的索引被联机删除；也就是说，没有任何表复制。该表未被锁定以防止来自其他</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> NDB Cluster API </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>节点的访问，尽管在操作期间它被锁定以防止同一</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> API </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>节点上的其他操作。只要服务器确定可以这样做，它就会自动完成；您不必使用任何特殊的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语法或服务器选项来使其发生。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL NDB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>集群支持使用标准</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL Server</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中支持的相同</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ALGORITHM=INPLACE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语法进行在线操作</span></li>
</ul>

</div>

</div>

</div>

<!--EndFragment-->
</body>