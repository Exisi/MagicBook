---
categories:
  - MyBatis
date:
  - 2022-11-27 7:46:51
tags:
  - ［@MapKey］
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.6784in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.6784in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@Mapkey
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
     color:black'>注解指定封装</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:black'> map </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black'>时使用对象的哪个属性来作为</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:black'> key</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>，一般情况下使用主键就可以，或者唯一索引，确保</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'> key </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>不会重复。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@Mapkey
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
     color:black'>注解有以下属性：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>value</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定作为</span><span
  style='font-family:"Comic Sans MS"'> Map </span><span style='font-family:
  "Microsoft YaHei UI"'>的</span><span style='font-family:"Comic Sans MS"'> key </span><span
  style='font-family:"Microsoft YaHei UI"'>值的对象属性名。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>interface </span><span lang=en-US>User</span><span lang=zh-CN>Mapper(</span><span
lang=en-US>){</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@MapKey</span>(value = &quot;id&quot;)</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>Map&lt;Integer, User&gt; </span><span lang=en-US>getData</span><span
lang=zh-CN>Map();</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>interface </span><span lang=en-US>User</span><span lang=zh-CN>Mapper(</span><span
lang=en-US>){</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@MapKey</span>(value = &quot;id&quot;)</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>Map&lt;Integer, Map&lt;String, Object&gt;&gt; </span><span
lang=en-US>getData</span><span lang=zh-CN>Map();</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
