---
categories:
  - Spring
tags:
  - ‹alias›
date:
  - 2022-6-28 7:47:40
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.693in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.693in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;alias&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用于给已经存在的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>bean</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>定义一个别名。它的作用是让我们可以通过不同的名称来引用同一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>bean</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，从而提高代码的可读性和可维护性。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&lt;alias&gt;
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>有以下属性</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.8465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.3618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.8465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.3618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>定义别名的</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>bean</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的名称。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.8465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>alias</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.3618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>为</span><span
  style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
  "Microsoft YaHei UI"'>定义的别名。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:blue'>&lt;bean id=</span><span style='color:#B43512'>&quot;userService&quot;</span><span
style='color:blue'> class=</span><span style='color:#B43512'>&quot;com.example.UserService&quot;</span><span
style='color:blue'>/&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:blue'>&lt;alias name=</span><span style='color:#B43512'>&quot;userService</span><span
style='color:blue'>&quot; alias=</span><span style='color:#B43512'>&quot;userServiceImpl&quot;</span><span
style='color:blue'>/&gt;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>&lt;alias&gt;</span><span style='font-family:
"Microsoft YaHei UI"'>标签只能对已经存在的</span><span style='font-family:"Comic Sans MS"'>bean</span><span
style='font-family:"Microsoft YaHei UI"'>进行重命名，并且不能创建新的</span><span
style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>实例</span></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
