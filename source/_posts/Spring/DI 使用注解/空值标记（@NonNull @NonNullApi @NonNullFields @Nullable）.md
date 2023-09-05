---
categories:
  - Spring
tags:
  - ［@NonNull］
  - ［@NonNullApi］
  - ［@NonNullFields］
  - ［@Nullable］
date:
  - 2022-6-28 08:17:56
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.6687in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.6687in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>空值标记</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>用于标记代码中的变量、参数、方法或类是否可以为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>null</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>。它本身并不能校验空值，而是提供了一种编译时检查的机制，可以在代码编译时检测到可能存在的空指针异常，并在代码编写期间高亮警告。可以帮助开发人员更早地发现潜在的空指针异常问题</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中有以下空值标记注解，注解均无参数</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.7083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>校验注解</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.3881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.7083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>@NonNull</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.3881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指示的目标对象不能为</span><span
  style='font-family:"Comic Sans MS"'> null</span><span style='font-family:
  "Microsoft YaHei UI"'>，用于注解方法，参数以及变量。</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>如果为</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>null</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>则会抛出</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>NullPointerException</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>异常。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.7083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>@NonNullApi</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.3881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定的参数和方法返回值默认不能为</span><span
  style='font-family:"Comic Sans MS"'> null</span><span style='font-family:
  "Microsoft YaHei UI"'>，用于包（</span><span style='font-family:"Comic Sans MS"'>Package</span><span
  style='font-family:"Microsoft YaHei UI"'>）级别注解</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>在文</span><span style='font-family:微软雅黑' lang=zh-CN>件</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>package-info.java</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:微软雅黑' lang=zh-CN>中使用</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.7083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>@NonNullFields</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.3881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指示的变量不能为</span><span
  style='font-family:"Comic Sans MS"'> null</span><span style='font-family:
  "Microsoft YaHei UI"'>，用于包（</span><span style='font-family:"Comic Sans MS"'>Package</span><span
  style='font-family:"Microsoft YaHei UI"'>）级别注解</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>在文件</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>package-info.java</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>中使用</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.7083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>@Nullable</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.3881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指示的目标对象可以为</span><span
  style='font-family:"Comic Sans MS"'> null</span><span style='font-family:
  "Microsoft YaHei UI"'>，可用于注解方法，参数以及变量 。</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>若是与</span><span
  style='font-family:"Comic Sans MS"'> @NonNullApi </span><span
  style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
  "Comic Sans MS"'> @NonNullFields </span><span style='font-family:"Microsoft YaHei UI"'>共用，会被覆盖</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>public class User(){</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.75in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"' lang=en-US>//</span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>标记属性不可以为空</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#FFC000'>@NonNull</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>private String </span><span lang=en-US>name</span><span
lang=zh-CN>;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin-left:.75in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"' lang=en-US>//</span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>标记参数不可以为</span><span style='font-family:"Comic Sans MS"'
lang=en-US> null</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>boolean</span><span lang=en-US> </span><span lang=zh-CN>isBlank(</span><span
style='color:#FFC000' lang=zh-CN>@NonNull </span><span lang=en-US>String name</span><span
lang=zh-CN>){<br>
<span style='mso-spacerun:yes'>    </span>return</span><span lang=en-US> name
== null</span><span lang=zh-CN>;<br>
}</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"' lang=en-US>//</span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>标记返回值不可以为</span><span style='font-family:"Comic Sans MS"'
lang=en-US> null</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#FFC000'>@NonNull</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>String </span><span lang=en-US>getName(){</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt' lang=en-US>return name;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>public class User(){</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.75in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"' lang=en-US>//</span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>标记属性不可以为空</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#FFC000'>@Nullable</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>private String </span><span lang=en-US>name</span><span
lang=zh-CN>;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin-left:.75in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"' lang=en-US>//</span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>标记参数不可以为</span><span style='font-family:"Comic Sans MS"'
lang=en-US> null</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>boolean</span><span lang=en-US> </span><span lang=zh-CN>isBlank(</span><span
style='color:#FFC000' lang=zh-CN>@Nullable </span><span lang=en-US>String name</span><span
lang=zh-CN>){<br>
<span style='mso-spacerun:yes'>    </span>return</span><span lang=en-US> name
== null</span><span lang=zh-CN>;<br>
}</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"' lang=en-US>//</span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>标记返回值不可以为</span><span style='font-family:"Comic Sans MS"'
lang=en-US> null</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#FFC000'>@Nullable</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>String </span><span lang=en-US>getName(){</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt' lang=en-US>return name;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@NonNullApi</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#FFC000' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=en-US> </span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#FFC000' lang=zh-CN>@NonNullFields</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>注解，首先需要新建文件（文件名</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=zh-CN>package-info.java</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>）</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"' lang=en-US>//</span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>参数和方法返回值默认不能为</span><span style='font-family:
"Comic Sans MS"' lang=zh-CN> null</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#FFC000'>@NonNullApi</p>

<p style='margin-left:.375in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"' lang=en-US>//</span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>所有变量不能为</span><span style='font-family:"Comic Sans MS"'
lang=zh-CN> null</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#FFC000'>@NonNullFields</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>package sfw.xumt.springdemo;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>import org.springframework.lang.NonNullApi;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>import org.springframework.lang.NonNullFields;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&nbsp;</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
