---
categories:
  - MyBatis
tags:
  - ‹include›
date:
  - 2021-3-27 7:29:37
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.8798in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.8798in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;include&gt; </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>标签是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MyBatis </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>中用于复用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SQL </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>片段的标签。通过</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> &lt;include&gt; </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>标签，可以将一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SQL </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>片段定义在一个单独的文件中，然后在其他</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SQL </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>语句中引用该文件中的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SQL </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>片段，从而实现</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SQL </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>片段的复用。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt;color:#6DA845'><span
style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&lt;sql id=&quot;select&quot;&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>select</span><span lang=en-US> * </span><span
lang=zh-CN>from </span><span lang=en-US>User</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&lt;/sql&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#0070C0' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'><span lang=zh-CN>&lt;select id=&quot;select</span><span
lang=en-US>Users</span><span lang=zh-CN>List&quot;
parameterType=&quot;map&quot; resultType=&quot;String&quot;&gt;</span></p>

<p style='margin-left:.75in;margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#0070C0' lang=zh-CN>&lt;include
refid=&quot;</span><span lang=en-US>select</span><span style='color:#0070C0'
lang=zh-CN>&quot;/&gt; </span><span style='color:#333333' lang=en-US>where
id=#{id}</span></p>

<p style='margin-left:.375in;margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'><span lang=zh-CN>&lt;/select&gt;</span><span
lang=en-US> </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#0070C0' lang=en-US>&nbsp;</p>

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
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'><span
  style='mso-spacerun:yes'> </span>refid</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.3465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>sql</span><span style='font-family:"Microsoft YaHei"' lang=zh-CN>片段</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>对应的</span><span
  style='font-family:"Microsoft YaHei UI"' lang=en-US>id</span></p>
  </td>
 </tr>
</table>

</div>

</div>

</div>

</div>

<!--EndFragment-->
</body>
