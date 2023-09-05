---
categories:
  - Spring
tags:
  - Hibernate Validator
  - ［@Valid］
  - ［@Valided］
date:
  - 2022-6-28 22:51:08
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.7944in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.7944in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Hibernate
     Validator</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>中</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>jakarta.validation</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>提供了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Valid</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>注解，用于与校验注解一起使用。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Spring
     Validation</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>验证框架对参数的验证机制提供了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Validated</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>，在检验</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>Controller</span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的入参是否符合规范时，使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Validated</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>或者</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#FFC000' lang=zh-CN>@Valid</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在基本验证功能上没有太多区别。但是在分组、注解地方、嵌套验证等功能上两个有所不同</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.1256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>注解</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.7812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>提供者</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.2902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>是否支持分组</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.2666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>标注位置</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.7687in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>嵌套校验</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.1256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>@Valid</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.7812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Hibernate
  validation</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.2902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>不支持</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.2666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>方法，</p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>类或对象中的变量，</p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>构造函数，</p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>方法或构造函数中接收输入值的变量，</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>类型使用，指在</span><span
  style='font-family:"Comic Sans MS"'>Java</span><span style='font-family:"Microsoft YaHei UI"'>程序中使用类型的方式，例如声明变量、方法返回类型、参数类型等。</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.6645in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>支持</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.1256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>@Validated</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.7812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=zh-CN>Spring</span><span lang=en-US> </span><span lang=zh-CN>Validation</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>支持</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.2666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>类型，</p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>方法，</p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>方法或构造函数中接收输入值的变量</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.6645in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>不支持</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Valid</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>注解无任何参数，而</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Validated</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>注解可以传入一个</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> Value </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>传入不同接口类用于分组校验</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Validated</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>不能在类的成员变量上使用，因此不支持嵌套校验</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin-top:0pt;margin-bottom:12pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#24292E'>&nbsp;</p>

<p style='margin-top:0pt;margin-bottom:12pt;font-size:13.5pt;color:#24292E'><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>使用</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> </span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=zh-CN>@Valid</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> / </span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=zh-CN>@Validated</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>校验参数</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:12pt;
     margin-bottom:12pt;color:#24292E'><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>@Valid</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>和</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>@Validated</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>必需使用在以</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>@RequestBody</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>接收参数的情况下。</span></li>
</ul>

<p style='margin-top:0pt;margin-bottom:12pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:12pt;color:#ED7D31' lang=en-US><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'>User.java</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>public class User {</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:#FFC000'>@NotNull</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@Size</span>(min = 4, max = 15)</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>private String password;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:#FFC000'>@NotBlank</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>private String name;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:#70AD47'><span style='mso-spacerun:yes'> </span>//
standard constructors / setters / getters / toString</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-top:0pt;margin-bottom:12pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:12pt;color:#ED7D31' lang=en-US><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'>MainController.java</span></li>
</ul>

<p style='margin-left:.75in;margin-top:0pt;margin-bottom:12pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#FFC000' lang=en-US>@Controller</p>

<p style='margin-left:.75in;margin-top:0pt;margin-bottom:12pt;font-family:"Comic Sans MS";
font-size:12.0pt' lang=en-US>Public class MainController(){</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@RequestMapping</span><span
style='font-family:"Comic Sans MS";color:black'>(</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;/test&quot;</span><span style='font-family:
"Comic Sans MS";color:black'>)</span><span style='font-family:"Microsoft YaHei UI";
color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>public</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
style='font-family:"Comic Sans MS"'>String</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
style='font-family:"Comic Sans MS"'>testValid(@Valid</span><span
style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
"Comic Sans MS"'>User</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
style='font-family:"Comic Sans MS"'>user,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
style='font-family:"Comic Sans MS"'>BindingResult</span><span style='font-family:
"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>result){</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black' lang=en-US><span
style='mso-spacerun:yes'>    </span>…</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS"'>return</span><span style='font-family:"Microsoft YaHei UI";
color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";color:maroon'>&quot;test&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black'>}</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>@RequestMapping</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>(</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;/test</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>1</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>)</span><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;&nbsp;&nbsp;&nbsp;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>public</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>String</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>testValid</span><span
style='font-family:"Comic Sans MS"' lang=en-US>ated</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>(@Valid</span><span
style='font-family:"Comic Sans MS"' lang=en-US>ated</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>User</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>user,</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>BindingResult</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>result){</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black' lang=en-US><span
style='mso-spacerun:yes'>    </span>…</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS"'>return</span><span style='font-family:"Microsoft YaHei UI";
color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";color:maroon'>&quot;test&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black'>}</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black' lang=en-US>}</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:12pt;color:#24292E'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>当请求时，就会对实体类参数是否为空进行验证</span></li>
</ul>

<p style='margin-left:.375in;margin-top:0pt;margin-bottom:12pt;font-family:
"Comic Sans MS";font-size:13.5pt;color:#24292E'>&nbsp;</p>

<p style='margin-top:0pt;margin-bottom:12pt;font-family:"Comic Sans MS";
font-size:13.5pt;color:#24292E'>&nbsp;</p>

<p style='margin-top:0pt;margin-bottom:12pt;font-size:13.5pt;color:#24292E'><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=zh-CN>@Valid</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> / </span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=zh-CN>@Validated</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>嵌套验证</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:12pt;color:#24292E'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:#24292E' lang=zh-CN>当一个实体类引用另一个实体类作为参数时，被引用的实体类的参数验证注解无法执行，因此需要</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292E'
     lang=en-US> </span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#FFC000' lang=zh-CN>@Valid</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:#24292E' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:#24292E'
     lang=zh-CN>注解在被引用的实体类参数上，</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>提示验证框架对嵌套的实体类也执行验证</span></li>
</ul>

<p style='margin-top:0pt;margin-bottom:12pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:12pt;color:#ED7D31' lang=en-US><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'>School.java</span></li>
</ul>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>public</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
style='font-family:"Comic Sans MS"'>class</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
style='font-family:"Comic Sans MS"'>User</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
style='font-family:"Comic Sans MS"'>{</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@Valid</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@NotNull</span><span
style='font-family:"Comic Sans MS";color:black'>(message</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Microsoft YaHei UI";color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:maroon'>&quot;uid</span><span style='font-family:"Microsoft YaHei UI";
color:maroon'>不能为空</span><span style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>)</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@Min</span><span
style='font-family:"Comic Sans MS";color:black'>(value</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Microsoft YaHei UI";color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:red'>1</span><span style='font-family:"Comic Sans MS";color:black'>,</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>message</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Microsoft YaHei UI";color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:maroon'>&quot;uid</span><span style='font-family:"Microsoft YaHei UI";
color:maroon'>必须为正整数</span><span style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>)</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>private</span><span style='font-family:
"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>int</span><span
style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
"Comic Sans MS"'>id;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@Valid</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@NotNull</span><span
style='font-family:"Comic Sans MS";color:black'>(message</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Microsoft YaHei UI";color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:maroon'>&quot;age</span><span style='font-family:"Microsoft YaHei UI";
color:maroon'>不能为空</span><span style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>)</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@Min</span><span
style='font-family:"Comic Sans MS";color:black'>(value</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Microsoft YaHei UI";color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:red'>1</span><span style='font-family:"Comic Sans MS";color:black'>,</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>message</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Microsoft YaHei UI";color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:maroon'>&quot;age</span><span style='font-family:"Microsoft YaHei UI";
color:maroon'>必须为正整数</span><span style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>)</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>private</span><span style='font-family:
"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>int</span><span
style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
"Comic Sans MS"'>age;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:#70AD47'>// standard constructors / setters / getters /
toString</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>}</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:12pt;color:#ED7D31' lang=en-US><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'>User.java</span></li>
</ul>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>public</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
style='font-family:"Comic Sans MS"'>class</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
style='font-family:"Comic Sans MS"'>User</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
style='font-family:"Comic Sans MS"'>{</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black' lang=en-US>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@NotNull</span><span
style='font-family:"Comic Sans MS";color:black'>(message</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Microsoft YaHei UI";color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:maroon'>&quot;uid</span><span style='font-family:"Microsoft YaHei UI";
color:maroon'>不能为空</span><span style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>)</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>private</span><span style='font-family:
"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>int</span><span
style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
"Comic Sans MS"'>uid;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@NotNull</span><span
style='font-family:"Comic Sans MS";color:black'>(message</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Microsoft YaHei UI";color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:maroon'>&quot;age</span><span style='font-family:"Microsoft YaHei UI";
color:maroon'>不能为空</span><span style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>)</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>private</span><span style='font-family:
"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>int</span><span
style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
"Comic Sans MS"'>age;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@NotNull</span><span
style='font-family:"Comic Sans MS";color:black'>(message</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Microsoft YaHei UI";color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:maroon'>&quot;age</span><span style='font-family:"Microsoft YaHei UI";
color:maroon'>不能为空</span><span style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>)</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>private</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=en-US>School school</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:#70AD47'>// standard constructors /
setters / getters / toString</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>}</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:12pt;color:#ED7D31' lang=en-US><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'>MainController.java</span></li>
</ul>

<p style='margin-left:.75in;margin-top:0pt;margin-bottom:12pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#FFC000' lang=en-US>@Controller</p>

<p style='margin-left:.75in;margin-top:0pt;margin-bottom:12pt;font-family:"Comic Sans MS";
font-size:12.0pt' lang=en-US>Public class MainController(){</p>

<p style='margin-left:.75in;margin-top:0pt;margin-bottom:12pt;font-family:"Comic Sans MS";
font-size:12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@RequestMapping</span><span
style='font-family:"Comic Sans MS";color:black'>(</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;/test&quot;</span><span style='font-family:
"Comic Sans MS";color:black'>)</span><span style='font-family:"Microsoft YaHei UI";
color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>public</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
style='font-family:"Comic Sans MS"'>String</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
style='font-family:"Comic Sans MS"'>testValid(@Valid</span><span
style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
"Comic Sans MS"'>User</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
style='font-family:"Comic Sans MS"'>user,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
style='font-family:"Comic Sans MS"'>BindingResult</span><span style='font-family:
"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>result){</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black' lang=en-US><span
style='mso-spacerun:yes'>    </span>…</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS"'>return</span><span style='font-family:"Microsoft YaHei UI";
color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";color:maroon'>&quot;test&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black'>}</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>@RequestMapping</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>(</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;/test</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>1</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>)</span><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;&nbsp;&nbsp;&nbsp;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>public</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>String</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>testValid</span><span
style='font-family:"Comic Sans MS"' lang=en-US>ated</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>(@Valid</span><span
style='font-family:"Comic Sans MS"' lang=en-US>ated</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>User</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>user,</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>BindingResult</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>result){</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black' lang=en-US><span
style='mso-spacerun:yes'>    </span>…</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS"'>return</span><span style='font-family:"Microsoft YaHei UI";
color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";color:maroon'>&quot;test&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black'>}</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>}</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:12pt'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>通过嵌套</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>@Valid</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>+</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>@Valid</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>或</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>@Valid</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>+</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>@Valid</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>ated </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>注解，请求执行时会同时对</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US> School </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> User </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中的参数进行非空和数值不为负数的验证</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Comic Sans MS"' lang=zh-CN>@Validated</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>分组验证</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>分组验证，就是将通过校验注解将字段分组，分别验证。校验注解都拥有一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> groups </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>属性，可以设置从属不同的类来确定分组，然后将类传入</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>@Validated</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>注解选择使用验证</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>首先，为了分组，可以创建两个类接口</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>public interface <span style='color:#5B9BD5'>BasicInfo</span> { }</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>public interface <span style='color:#8064A2'>AdvanceInfo</span> { }</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>通过校验注解设置为字段设置不同的分组类，使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Validated</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#FFC000' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>注解指定校验的组</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>User.java</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>public class User {</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@NotNull</span>(groups = <span
style='color:#5B9BD5'>BasicInfo</span>.class)</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@Size</span>(min = 4, max = 15,
groups = <span style='color:#5B9BD5'>BasicInfo</span>.class)</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>private String password;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@NotBlank</span>(groups = <span
style='color:#5B9BD5'>BasicInfo</span>.class)</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>private String name;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@Min</span>(value = 18, message =
<span style='color:#B43512'>&quot;Age should not be less than 18&quot;</span>,
groups = <span style='color:#8064A2'>AdvanceInfo</span>.class)</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>private int age;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@NotBlank</span>(groups = <span
style='color:#8064A2'>AdvanceInfo</span>.class)</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>private String phone;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#70AD47'>// standard constructors /
setters / getters / toString</span><span style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:12pt;color:#ED7D31' lang=en-US><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'>MainController.java</span></li>
</ul>

<p style='margin-left:.75in;margin-top:0pt;margin-bottom:12pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#FFC000' lang=en-US>@Controller</p>

<p style='margin-left:.75in;margin-top:0pt;margin-bottom:12pt;font-family:"Comic Sans MS";
font-size:12.0pt' lang=en-US>Public class MainController(){</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:#FFC000'>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt'><span style='color:#FFC000'>@Validated</span>(<span
style='color:#5B9BD5'>BasicInfo</span>.class) </p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@RequestMapping</span><span
style='font-family:"Comic Sans MS";color:black'>(</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;/test&quot;</span><span style='font-family:
"Comic Sans MS";color:black'>)</span><span style='font-family:"Microsoft YaHei UI";
color:black'>&nbsp;&nbsp;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>public</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>String</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>testValid</span><span
style='font-family:"Comic Sans MS"' lang=en-US>ated</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>(User</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>user,</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>BindingResult</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>result){</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt' lang=en-US><span style='mso-spacerun:yes'>   
</span>…</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS"'>return</span><span style='font-family:"Microsoft YaHei UI";
color:#B43512'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:#B43512'>&quot;test&quot;</span><span style='font-family:"Comic Sans MS"'>;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt'>}</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
