---
categories:
  - Spring
tags:
  - ‹meta›
date:
  - 2022-6-28 7:47:36
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.9055in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.9055in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&lt;meta&gt;
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>标签用于添加额外的附加数据，以提供需要的时候获取</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>对</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&lt;meta&gt;
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>标签存储的数据可以通过</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>BeanDefinition</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>getAttribute()</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>方法来获取值</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&lt;meta&gt;
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>标签包含以下参数</span></li>
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
  background-color:black;vertical-align:top;width:2.577in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>key</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.577in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#24292E'>附加数据的键</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>value</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.577in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#24292E'>附加数据的值</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>application.xml</span></li>
</ul>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.7083in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:7.1506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;?xml</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>version</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;1.0&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>encoding</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;UTF-8&quot;</span><span
  style='font-family:"Comic Sans MS";color:blue'>?&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;beans</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>xmlns</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;http://www.springframework.org/schema/beans&quot;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>xmlns:xsi</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>xsi:schemaLocation</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;http://www.springframework.org/schema/beans</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>&nbsp;</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt'><a
  href="http://www.springframework.org/schema/beans/spring-beans.xsd"><span
  style='color:maroon'>http://www.springframework.org/schema/beans/spring-beans.xsd</span></a><span
  style='color:maroon'>&quot;</span><span style='color:blue'>&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;bean</span><span
  style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>id</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;userService&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>class</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;com.exi.service.impl.UserServiceImpl&quot;</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=en-US> </span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>s</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=en-US>cope</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;singleton&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>/&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt'><span style='color:blue'>&lt;bean id=</span><span
  style='color:#B43512'>&quot;book&quot;</span><span style='color:blue'> class=</span><span
  style='color:#B43512'>&quot;domain.SimpleBook&quot;</span><span
  style='color:blue'>&gt;</span></p>
  <p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt'><span style='color:blue'>&lt;meta key=</span><span
  style='color:#B43512'>&quot;test_key&quot;</span><span style='color:blue'>
  value=</span><span style='color:#B43512'>&quot;test_value&quot;</span><span
  style='color:blue'>/&gt;</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:blue'>&lt;/beans&gt;</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#C00000'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>SpringTest.java</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>BeanDefinition bd;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>String&nbsp;beanCategoriesExpression&nbsp;=&nbsp;(String)bd.getAttribute(</span><span
style='color:#C00000' lang=en-US>&quot;</span><span style='color:#C00000'
lang=zh-CN>metaKey</span><span style='color:#C00000' lang=en-US>&quot;</span><span
lang=en-US>)</span><span lang=zh-CN>;</span></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
