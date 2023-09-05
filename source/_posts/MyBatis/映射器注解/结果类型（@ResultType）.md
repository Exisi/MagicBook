---
categories:
  - MyBatis
date:
  - 2021-3-27 7:45:32
tags:
  - ［@ResultType］
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.8638in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.8638in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@ResultType
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>注解用于指定查询结果的类型。它可以被用于返回单个对象、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Map </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> List </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>等类型的结果。通常情况下，我们可以在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Mapper </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>接口方法上使用 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@ResultType
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>注解</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

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
  background-color:black;vertical-align:top;width:3.5444in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>value</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.5444in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>映射返回结果类型的对应</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> Class </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>类名</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>public</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>interface</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=en-US>Person</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>Mapper</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>{</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@Select</span><span
style='color:black'>(</span><span style='color:maroon'>&quot;select&nbsp;*&nbsp;from&nbsp;person&nbsp;where&nbsp;id&nbsp;=&nbsp;#{id}&quot;</span><span
style='color:black'>)</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#FFC000'><span lang=zh-CN>@ResultType</span><span
lang=en-US>(Person.class)</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>Person&nbsp;selectPersonById(Integer&nbsp;id);</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000' lang=zh-CN>@Select</span><span lang=zh-CN>(</span><span
style='color:#B43512' lang=zh-CN>&quot;select </span><span style='color:#B43512'
lang=en-US>count</span><span style='color:#B43512' lang=zh-CN>(*) </span><span
style='color:#B43512' lang=en-US>from</span><span style='color:#B43512'
lang=zh-CN> </span><span style='color:#B43512' lang=en-US>person</span><span
style='color:#B43512' lang=zh-CN>&quot;</span><span lang=zh-CN>)</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@ResultType</span>(Integer.class)</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>int getUserCount();</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
