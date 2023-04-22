---
categories:
  - Spring
tags:
  - ［@Validated］
date:
  - 2022-11-28 08:17:58
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.3368in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.3368in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=en-US>@</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#FFC000' lang=zh-CN>Validated</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>注解是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>JSR-303 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> Valid </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的变体，支持了分组验证的规范，因此使用此注解需要引入支持</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>JSR-303 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>校验框架。设计用于方便使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> JSR-303 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>支持，但不是特定于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> JS</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>R</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>-303 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>JSR-303 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> JAVA EE 6
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>中的一项子规范，叫做</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> Bean Validation</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，官方参考实现是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Hibernate
     Validator</span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt' lang=zh-CN>。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=en-US>@</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#FFC000' lang=zh-CN>Validated</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US><span
     style='mso-spacerun:yes'>  </span></span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>有以下参数：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.0034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.1131in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.0034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>value</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.1604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>指定一个或多个类的验证组以应用于由此注释启动的验证步骤，默认</span><span style='font-family:
  "Comic Sans MS"' lang=en-US> </span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>{}</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>，即当前注解类</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>JSR-303
  </span><span style='font-family:"Microsoft YaHei UI"'>将验证组定义为自定义注解，应用程序声明这些注解的唯一目的是将它们用作类型安全的组参数，如</span><span
  style='font-family:"Comic Sans MS"'> SpringValidatorAdapter </span><span
  style='font-family:"Microsoft YaHei UI"'>中所实现的那样。其他</span><span
  style='font-family:"Comic Sans MS"'> SmartValidator </span><span
  style='font-family:"Microsoft YaHei UI"'>实现也可能以其他方式支持类参数。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.5pt;color:#BFBFBF'>public class User {</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#BFBFBF'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
11.5pt;color:#BFBFBF'>@NotNull</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
11.5pt;color:#BFBFBF'>@Size(min = 4, max = 15)</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
11.5pt;color:#BFBFBF'>private String password;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#BFBFBF'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
11.5pt;color:#BFBFBF'>@NotBlank</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
11.5pt;color:#BFBFBF'>private String name;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#BFBFBF'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.5pt;color:#BFBFBF'>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.5pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.5pt'><span lang=zh-CN>public class </span><span lang=en-US>UserController</span><span
lang=zh-CN> {</span></p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
11.5pt'>...</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
11.5pt'>public void getUser(<span style='color:#FFC000'>@Validated</span> User
user) {</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:11.5pt'>...</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
11.5pt'>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.5pt'>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.5pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>可以与</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Spring MVC </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>处理程序方法参数一起使用。通过</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SmartValidator </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的验证提示概念提供支持，验证组类充当提示对象。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/validation/annotation/Validated.html"><span
style='font-family:"Comic Sans MS"'>https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/validation/annotation/Validated.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
