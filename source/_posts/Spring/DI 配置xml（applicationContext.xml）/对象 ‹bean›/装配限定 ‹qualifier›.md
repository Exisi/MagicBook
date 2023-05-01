---
categories:
  - Spring
tags:
  - ‹qualifier›
date:
  - 2022-11-28 7:46:34
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.3395in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.3395in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;qualifier&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>标签用于限定</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的装配范围，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>B</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ean</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>定义可以提供限定，以与字段或参数上的注释相匹配，从而实现细粒度的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>autowire</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>候选解析。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;qualifier&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>标签有以下参数：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.3583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>value</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.3583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#24292E'><span style='font-family:
  "Microsoft YaHei UI"' lang=zh-CN>限定要装配</span><span style='font-family:"Comic Sans MS"'
  lang=en-US>bean</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>的别名</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.3583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>装配限定的接口，默认为</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> o</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>rg.springframework.beans.factory.annotation.Qualifier</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.5pt'>&lt;bean id=<span style='color:#B43512'>&quot;myDao&quot;</span> class=<span
style='color:#B43512'>&quot;com.example.MyDaoImpl&quot;</span> /&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.5pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.5pt'>&lt;bean id=<span style='color:#B43512'>&quot;myService&quot;</span>
class=<span style='color:#B43512'>&quot;com.example.MyService&quot;</span>&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.5pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
11.5pt'><span lang=zh-CN>&lt;qualifier value=</span><span style='color:#B43512'
lang=zh-CN>&quot;myDao&quot; </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>type=</span><span
style='color:#B43512' lang=zh-CN>&quot;org.springframework.beans.factory.annotation.Qualifier&quot;</span><span
lang=zh-CN>/&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
11.5pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
11.5pt'><span lang=zh-CN>&lt;property name=</span><span style='color:#B43512'
lang=zh-CN>&quot;</span><span style='color:#B43512' lang=en-US>my</span><span
style='color:#B43512' lang=zh-CN>Dao&quot;</span><span lang=zh-CN> ref=</span><span
style='color:#B43512' lang=zh-CN>&quot;</span><span style='color:#B43512'
lang=en-US>my</span><span style='color:#B43512' lang=zh-CN>Dao&quot;</span><span
lang=zh-CN> /&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
11.5pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.5pt'>&lt;/bean&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://www.cnblogs.com/wade-luffy/p/6068478.html"><span
style='font-family:"Comic Sans MS"'>https://www.cnblogs.com/wade-luffy/p/6068478.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
