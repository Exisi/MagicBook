---
categories:
  - MyBatis
date:
  - 2023-3-27 7:47:01
tags:
  - ［@Param］
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.4416in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.4416in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#FFC000'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Param</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#FFC000' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=zh-CN>用于将</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'
     lang=en-US> SQL </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>中指定</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:black' lang=zh-CN> #{} </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'
     lang=zh-CN>或</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:black' lang=zh-CN> ${} </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>的变量的一个或多个参数传递给映射器方法。使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'
     lang=en-US> </span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#FFC000' lang=zh-CN>@Param</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:#FFC000' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'
     lang=zh-CN>对属性命名后，就能根据属性得到参数值，然后将参数值传入对应的</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:black' lang=en-US> SQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'
     lang=zh-CN>语句中</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#FFC000'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#FFC000'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Param</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#FFC000' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=zh-CN>注解有以下参数：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.8597in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.6951in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.8597in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>value</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.6951in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>对应</span><span style='font-family:"Comic Sans MS"' lang=en-US> SQL
  </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语句中的变量名</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>当使用了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Param</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>注解来声明参数时，可以指定</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=zh-CN> #{} </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> ${} </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的方式对应的参数，这在方法有多参数的时候很有效</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>interface </span><span lang=en-US>User</span><span lang=zh-CN>Mapper(</span><span
lang=en-US>){</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000' lang=zh-CN>@Select</span><span lang=zh-CN>(</span><span
style='color:#B43512' lang=zh-CN>&quot;select </span><span style='color:#B43512'
lang=en-US>classid</span><span style='color:#B43512' lang=zh-CN> from table
where userid = ${userid}&quot;</span><span lang=zh-CN>)</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public int select</span><span lang=en-US>ClassId</span><span
lang=zh-CN>(</span><span style='color:#FFC000' lang=zh-CN>@Param</span><span
lang=zh-CN>(</span><span style='color:#B43512' lang=zh-CN>&quot;userid&quot;</span><span
lang=zh-CN>) int userid);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>可以用于设置参数的别名，映射到相应的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>SQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句中</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>interface </span><span lang=en-US>User</span><span lang=zh-CN>Mapper(</span><span
lang=en-US>){</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000' lang=zh-CN>@Select</span><span lang=zh-CN>(</span><span
style='color:#B43512' lang=zh-CN>&quot;select </span><span style='color:#B43512'
lang=en-US>classid</span><span style='color:#B43512' lang=zh-CN> from table
where userid = ${userid}&quot;</span><span lang=zh-CN>)</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public int select</span><span lang=en-US>ClassId</span><span
lang=zh-CN>(</span><span style='color:#FFC000' lang=zh-CN>@Param</span><span
lang=zh-CN>(</span><span style='color:#B43512' lang=zh-CN>&quot;userid&quot;</span><span
lang=zh-CN>) int </span><span lang=en-US>id</span><span lang=zh-CN>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>不使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Param</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#FFC000' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>注解时，参数只能有一个，并且是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Javabean</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>。在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>SQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句里可以引用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>JavaBean</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的属性，而且只能引用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>JavaBean</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的属性</span></li>
</ul>

</div>

</div>

</div>

<!--EndFragment-->
</body>
