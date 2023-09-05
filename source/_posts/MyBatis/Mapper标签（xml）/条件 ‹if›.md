---
categories:
  - MyBatis
tags:
  - ‹if›
date:
  - 2023-3-27 7:29:20
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5277in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5277in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;if&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>通常用于在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>SQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句中添加条件语句。它可以根据传入的参数动态判断是否需要添加条件语句。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;select id=&quot;findUsers&quot; parameterType=&quot;map&quot;
resultType=&quot;User&quot;&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>SELECT * FROM users</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>WHERE 1=1</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512' lang=en-US>&lt;if test=&quot;name != null&quot;&gt;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>AND name = #{name}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512' lang=en-US>&lt;/if&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512' lang=en-US>&lt;if test=&quot;age != null&quot;&gt;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>AND age = #{age}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>&lt;</span><span style='color:#B43512' lang=en-US>/if&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/select&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#ED7D31' lang=en-US>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.5798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.3305in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.5798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt' lang=en-US>test</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.3305in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>&lt;if&gt; </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>标签的表达式，一般用于判断传递的参数是否存在</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#ED7D31'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>在这个例子中，</span><span style='font-family:
"Comic Sans MS"'>&lt;if&gt;</span><span style='font-family:"Microsoft YaHei UI"'>元素分别用于判断是否需要添加</span><span
style='font-family:"Comic Sans MS"'>name</span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
style='font-family:"Comic Sans MS"'>age</span><span style='font-family:"Microsoft YaHei UI"'>条件。如果</span><span
style='font-family:"Comic Sans MS"'>name</span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
style='font-family:"Comic Sans MS"'>age</span><span style='font-family:"Microsoft YaHei UI"'>都不为</span><span
style='font-family:"Comic Sans MS"'>null</span><span style='font-family:"Microsoft YaHei UI"'>，则会生成如下的</span><span
style='font-family:"Comic Sans MS"'>SQL</span><span style='font-family:"Microsoft YaHei UI"'>语句：</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'> </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>SELECT * FROM users WHERE 1=1AND name = #{name} AND age = #{age}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'> </span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>如果只有</span><span style='font-family:
"Comic Sans MS"'>name</span><span style='font-family:"Microsoft YaHei UI"'>不为</span><span
style='font-family:"Comic Sans MS"'>null</span><span style='font-family:"Microsoft YaHei UI"'>，则会生成如下的</span><span
style='font-family:"Comic Sans MS"'>SQL</span><span style='font-family:"Microsoft YaHei UI"'>语句：</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>SELECT * FROM users WHERE 1=1AND name = #{name}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'> </span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>如果只有</span><span style='font-family:
"Comic Sans MS"'>age</span><span style='font-family:"Microsoft YaHei UI"'>不为</span><span
style='font-family:"Comic Sans MS"'>null</span><span style='font-family:"Microsoft YaHei UI"'>，则会生成如下的</span><span
style='font-family:"Comic Sans MS"'>SQL</span><span style='font-family:"Microsoft YaHei UI"'>语句：</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'> </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>SELECT * FROM users WHERE 1=1AND age = #{age}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'> </span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>如果</span><span style='font-family:
"Comic Sans MS"'>name</span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
style='font-family:"Comic Sans MS"'>age</span><span style='font-family:"Microsoft YaHei UI"'>都为</span><span
style='font-family:"Comic Sans MS"'>null</span><span style='font-family:"Microsoft YaHei UI"'>，则会生成如下的</span><span
style='font-family:"Comic Sans MS"'>SQL</span><span style='font-family:"Microsoft YaHei UI"'>语句：</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>SELECT</span><span lang=en-US> </span><span
lang=zh-CN>*</span><span lang=en-US> </span><span lang=zh-CN>FROM</span><span
lang=en-US> </span><span lang=zh-CN>users WHERE1=1</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#24292F' lang=zh-CN>&lt;if&gt;</span><span
style='font-family:"Comic Sans MS";color:#24292F' lang=en-US> </span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>元素只有在</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>test</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>表达式的结果为</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>true</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>时才会生效。如果</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>test</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>表达式的结果为</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>false</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>，则</span><span
style='font-family:"Comic Sans MS";color:#24292F' lang=zh-CN>&lt;if&gt;</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>元素会被忽略。</span></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
