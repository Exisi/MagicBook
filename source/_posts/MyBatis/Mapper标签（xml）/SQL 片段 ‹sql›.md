---
categories:
  - MyBatis
tags:
  - ‹sql›
date:
  - 2021-3-27 7:29:35
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.7055in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.7055in'>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>&lt;sql&gt; </span><span style='font-family:
"Microsoft YaHei"'>，用于定义可重用的</span><span style='font-family:"Comic Sans MS"'>
SQL </span><span style='font-family:"Microsoft YaHei"'>片段，可以将一些常用的</span><span
style='font-family:"Comic Sans MS"'> SQL </span><span style='font-family:"Microsoft YaHei"'>片段定义为变量，便于在多个</span><span
style='font-family:"Comic Sans MS"'> SQL </span><span style='font-family:"Microsoft YaHei"'>语句中重复使用。</span></p>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt;color:#70AD47'><span
style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#0070C0' lang=en-US>&lt;sql id=&quot;select&quot;&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>select</span><span lang=en-US> * </span><span
style='color:#333333' lang=zh-CN>from </span><span style='color:#333333'
lang=en-US>User</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#0070C0' lang=en-US>&lt;/sql&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#0070C0' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'><span lang=zh-CN>&lt;select id=&quot;select</span><span
lang=en-US>Users</span><span lang=zh-CN>List&quot;
parameterType=&quot;map&quot; resultType=&quot;String&quot;&gt;</span></p>

<p style='margin-left:.75in;margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#0070C0' lang=zh-CN>&lt;include
refid=&quot;</span><span style='color:#0070C0' lang=en-US>select</span><span
style='color:#0070C0' lang=zh-CN>&quot;/&gt; </span><span style='color:#333333'
lang=en-US>where id=#{id}</span></p>

<p style='margin-left:.375in;margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'><span lang=zh-CN>&lt;/select&gt;</span><span
lang=en-US> </span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#0070C0'
lang=en-US>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.5583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.3465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.5583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>id</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.3465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>命名空间的唯一标识符，一般是</span><span
  style='font-family:"Comic Sans MS"'> dao </span><span style='font-family:
  "Microsoft YaHei UI"'>中对应的方法名</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.5583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>databaseId</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.4159in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>取值</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>oracle</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>、</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>mysql</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>等，表示</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>sql</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语句的数据库类型。</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>元素内部可通过</span><span
  style='font-family:"Comic Sans MS"'>&lt;if test=&quot;_databaseId =
  'oracle'&quot;&gt;</span><span style='font-family:"Microsoft YaHei UI"'>来为特定数据库指定不同的</span><span
  style='font-family:"Comic Sans MS"'>sql</span><span style='font-family:"Microsoft YaHei UI"'>语句</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.5583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>lang</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.3465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>用于指定</span><span
  style='font-family:"Comic Sans MS"'> SQL </span><span style='font-family:
  "Microsoft YaHei UI"'>片段的语言类型</span></p>
  </td>
 </tr>
</table>

</div>

</div>

</div>

</div>

<!--EndFragment-->
</body>
