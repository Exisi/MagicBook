---
categories:
  - Spring
tags:
  - ‹constructor-arg›
date:
  - 2022-6-28 7:43:36
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.1923in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.1923in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292E'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&lt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>constructor-arg</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>标签通过实体类对象中的有参构造给对象传递成员变量的值</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292E'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292E'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&lt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>constructor-arg</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&gt; </span><span
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
  background-color:black;vertical-align:top;width:1.9104in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.9104in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>根据变量名称传值</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>index</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.9104in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>根据名称顺序传值</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.9104in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>根据变量类型传值</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>value</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.9104in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>变量赋值</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>ref</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.9229in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>引用已有的数据类型赋值</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#24292E'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292E'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>调用类中的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>有参构造</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>方法，
     在创建对象的同时，给属性赋值</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
color:green'><span style='font-family:"Comic Sans MS"'>&lt;!--</span><span
style='font-family:"Microsoft YaHei UI"'>构造注入，使用</span><span style='font-family:
"Comic Sans MS"'>name</span><span style='font-family:"Microsoft YaHei UI"'>属性</span><span
style='font-family:"Comic Sans MS"'>--&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;bean</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>id</span><span style='font-family:
"Comic Sans MS";color:black'>=</span><span style='font-family:"Comic Sans MS";
color:maroon'>&quot;myStudent&quot;</span><span style='font-family:"Microsoft YaHei UI";
color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";color:blue'>class</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;com.bjpowernode.ba03.Student&quot;</span><span
style='font-family:"Comic Sans MS";color:blue'>&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;constructor-arg</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>name</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;myage&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>value</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;22&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;constructor-arg</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>name</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;myname&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>value</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:maroon'>李四</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;constructor-arg</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>name</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;mySchool&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>ref</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;mySchool&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
color:green'><span style='font-family:"Comic Sans MS"'>&lt;!--</span><span
style='font-family:"Microsoft YaHei UI"'>构造注入，使用</span><span style='font-family:
"Comic Sans MS"'>index</span><span style='font-family:"Microsoft YaHei UI"'>，参数的位置，构造方法参数从左往右位置是</span><span
style='font-family:"Comic Sans MS"'>0,1,2--&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;bean</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>id</span><span style='font-family:
"Comic Sans MS";color:black'>=</span><span style='font-family:"Comic Sans MS";
color:maroon'>&quot;myStudent2&quot;</span><span style='font-family:"Microsoft YaHei UI";
color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";color:blue'>class</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;com.bjpowernode.ba03.Student&quot;</span><span
style='font-family:"Comic Sans MS";color:blue'>&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;constructor-arg</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>index</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;1&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>value</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;28&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;constructor-arg</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>index</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;0&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>value</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:maroon'>张三</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;constructor-arg</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>index</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;2&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>ref</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;mySchool&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
color:green'><span style='font-family:"Comic Sans MS"'>&lt;!--</span><span
style='font-family:"Microsoft YaHei UI"'>构造注入，省略</span><span style='font-family:
"Comic Sans MS"'>index</span><span style='font-family:"Microsoft YaHei UI"'>属性</span><span
style='font-family:"Comic Sans MS"'>--&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;bean</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>id</span><span style='font-family:
"Comic Sans MS";color:black'>=</span><span style='font-family:"Comic Sans MS";
color:maroon'>&quot;myStudent3&quot;</span><span style='font-family:"Microsoft YaHei UI";
color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";color:blue'>class</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;com.bjpowernode.ba03.Student&quot;</span><span
style='font-family:"Comic Sans MS";color:blue'>&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;constructor-arg</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>value</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;</span><span style='font-family:"Microsoft YaHei UI";
color:maroon'>张峰</span><span style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;constructor-arg</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>value</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;28&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>/&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;constructor-arg</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>ref</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;mySchool&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&lt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>constructor-arg</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>有以下子标签，其中</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;array&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;list&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;set&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>标签可以相互嵌套使用</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>子标签</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.0916in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;value&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.0916in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>用于迭代列表或数组数据</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;array&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.2236in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数组标签</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>属性</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>merge</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>使用父</span><span
    style='font-family:"Comic Sans MS"'>/</span><span style='font-family:"Microsoft YaHei UI"'>子</span><span
    style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
    "Microsoft YaHei UI"'>时启用</span><span style='font-family:"Comic Sans MS"'>/</span><span
    style='font-family:"Microsoft YaHei UI"'>禁用集合合并。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>value-type</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>嵌套值的默认</span><span
    style='font-family:"Comic Sans MS"'>Java</span><span style='font-family:
    "Microsoft YaHei UI"'>类型。必须是完全限定的类名</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.0215in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>子标签</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:4.0145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>说明</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.0215in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&lt;value&gt;</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.0145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>用于迭代列表或数组数据</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.0215in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&lt;ref/&gt;</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.0145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>使用引用数据</p>
    <div style='direction:ltr'>
    <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:
     ltr;border-collapse:collapse;border-style:solid;border-color:#A3A3A3;
     border-width:1pt' title="" summary="">
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>属性</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:2.2381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>描述</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'
      lang=en-US>bean</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:2.2381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>被引用</span><span
      style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
      "Microsoft YaHei UI"'>的名称</span></p>
      </td>
     </tr>
    </table>
    </div>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.0215in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&lt;idref&gt;</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.084in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>此工厂或外部工厂（父工厂或包含的工厂）中的另一个</span><span
    style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
    "Microsoft YaHei UI"'>的</span><span style='font-family:"Comic Sans MS"'>id</span><span
    style='font-family:"Microsoft YaHei UI"'>。虽然可以使用常规的“</span><span
    style='font-family:"Comic Sans MS"'>value</span><span style='font-family:
    "Microsoft YaHei UI"'>”元素来获得相同的效果，但使用</span><span style='font-family:"Comic Sans MS"'>idref</span><span
    style='font-family:"Microsoft YaHei UI"'>表示</span><span style='font-family:
    "Comic Sans MS"'>Spring</span><span style='font-family:"Microsoft YaHei UI"'>容器应该检查该值是否实际对应于</span><span
    style='font-family:"Comic Sans MS"'>bean id</span></p>
    <div style='direction:ltr'>
    <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:
     ltr;border-collapse:collapse;border-style:solid;border-color:#A3A3A3;
     border-width:1pt' title="" summary="">
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>属性</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:2.2381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>描述</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'
      lang=en-US>bean</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:2.2381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>被引用</span><span
      style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
      "Microsoft YaHei UI"'>的名称</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'
      lang=en-US>parent</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:2.2381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>父工厂中被引用</span><span
      style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
      "Microsoft YaHei UI"'>的名称</span></p>
      </td>
     </tr>
    </table>
    </div>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.0215in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&lt;null&gt;</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.052in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>表示</span><span
    style='font-family:"Comic Sans MS"'> Java </span><span style='font-family:
    "Microsoft YaHei UI"'>空值。必要的，因为一个空的“值”标签将解析为一个空字符串，除非特殊的</span><span
    style='font-family:"Comic Sans MS"'> PropertyEditor </span><span
    style='font-family:"Microsoft YaHei UI"'>这样做，否则不会将其解析为空值</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;list&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.2027in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>列表数据</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>属性</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.9652in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>merge</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.9652in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>使用父</span><span
    style='font-family:"Comic Sans MS"'>/</span><span style='font-family:"Microsoft YaHei UI"'>子</span><span
    style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
    "Microsoft YaHei UI"'>时启用</span><span style='font-family:"Comic Sans MS"'>/</span><span
    style='font-family:"Microsoft YaHei UI"'>禁用集合合并。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>value-type</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.9652in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>嵌套值的默认</span><span
    style='font-family:"Comic Sans MS"'>Java</span><span style='font-family:
    "Microsoft YaHei UI"'>类型。必须是完全限定的类名</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>子标签</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:4.1395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>说明</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&lt;value&gt;</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.1395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>用于迭代列表或数组数据</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&lt;ref/&gt;</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.1395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>使用引用数据</p>
    <div style='direction:ltr'>
    <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:
     ltr;border-collapse:collapse;border-style:solid;border-color:#A3A3A3;
     border-width:1pt' title="" summary="">
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>属性</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:2.2381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>描述</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'
      lang=en-US>bean</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:2.2381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>被引用</span><span
      style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
      "Microsoft YaHei UI"'>的名称</span></p>
      </td>
     </tr>
    </table>
    </div>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&lt;idref&gt;</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.209in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>此工厂或外部工厂（父工厂或包含的工厂）中的另一个</span><span
    style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
    "Microsoft YaHei UI"'>的</span><span style='font-family:"Comic Sans MS"'>id</span><span
    style='font-family:"Microsoft YaHei UI"'>。虽然可以使用常规的“</span><span
    style='font-family:"Comic Sans MS"'>value</span><span style='font-family:
    "Microsoft YaHei UI"'>”元素来获得相同的效果，但使用</span><span style='font-family:"Comic Sans MS"'>idref</span><span
    style='font-family:"Microsoft YaHei UI"'>表示</span><span style='font-family:
    "Comic Sans MS"'>Spring</span><span style='font-family:"Microsoft YaHei UI"'>容器应该检查该值是否实际对应于</span><span
    style='font-family:"Comic Sans MS"'>bean id</span></p>
    <div style='direction:ltr'>
    <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:
     ltr;border-collapse:collapse;border-style:solid;border-color:#A3A3A3;
     border-width:1pt' title="" summary="">
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>属性</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:2.2381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>描述</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'
      lang=en-US>bean</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:2.2381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>被引用</span><span
      style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
      "Microsoft YaHei UI"'>的名称</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'
      lang=en-US>parent</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:2.2381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>父工厂中被引用</span><span
      style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
      "Microsoft YaHei UI"'>的名称</span></p>
      </td>
     </tr>
    </table>
    </div>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&lt;null&gt;</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.1979in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>表示</span><span
    style='font-family:"Comic Sans MS"'> Java </span><span style='font-family:
    "Microsoft YaHei UI"'>空值。必要的，因为一个空的“值”标签将解析为一个空字符串，除非特殊的</span><span
    style='font-family:"Comic Sans MS"'> PropertyEditor </span><span
    style='font-family:"Microsoft YaHei UI"'>这样做，否则不会将其解析为空值</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;set&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.2027in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>set</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>集合数据</span></p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>属性</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.9652in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>merge</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.9652in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>使用父</span><span
    style='font-family:"Comic Sans MS"'>/</span><span style='font-family:"Microsoft YaHei UI"'>子</span><span
    style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
    "Microsoft YaHei UI"'>时启用</span><span style='font-family:"Comic Sans MS"'>/</span><span
    style='font-family:"Microsoft YaHei UI"'>禁用集合合并。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>value-type</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.9652in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>嵌套值的默认</span><span
    style='font-family:"Comic Sans MS"'>Java</span><span style='font-family:
    "Microsoft YaHei UI"'>类型。必须是完全限定的类名</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>子标签</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:4.1243in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>说明</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&lt;value&gt;</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.1243in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>用于迭代列表或数组数据</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&lt;ref/&gt;</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.1243in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>使用引用数据</p>
    <div style='direction:ltr'>
    <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:
     ltr;border-collapse:collapse;border-style:solid;border-color:#A3A3A3;
     border-width:1pt' title="" summary="">
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>属性</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:2.2381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>描述</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'
      lang=en-US>bean</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:2.2381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>被引用</span><span
      style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
      "Microsoft YaHei UI"'>的名称</span></p>
      </td>
     </tr>
    </table>
    </div>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&lt;idref&gt;</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.1291in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>此工厂或外部工厂（父工厂或包含的工厂）中的另一个</span><span
    style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
    "Microsoft YaHei UI"'>的</span><span style='font-family:"Comic Sans MS"'>id</span><span
    style='font-family:"Microsoft YaHei UI"'>。虽然可以使用常规的“</span><span
    style='font-family:"Comic Sans MS"'>value</span><span style='font-family:
    "Microsoft YaHei UI"'>”元素来获得相同的效果，但使用</span><span style='font-family:"Comic Sans MS"'>idref</span><span
    style='font-family:"Microsoft YaHei UI"'>表示</span><span style='font-family:
    "Comic Sans MS"'>Spring</span><span style='font-family:"Microsoft YaHei UI"'>容器应该检查该值是否实际对应于</span><span
    style='font-family:"Comic Sans MS"'>bean id</span></p>
    <div style='direction:ltr'>
    <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:
     ltr;border-collapse:collapse;border-style:solid;border-color:#A3A3A3;
     border-width:1pt' title="" summary="">
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>属性</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:2.2381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>描述</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'
      lang=en-US>bean</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:2.2381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>被引用</span><span
      style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
      "Microsoft YaHei UI"'>的名称</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'
      lang=en-US>parent</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:2.2381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-size:9.5pt'><span style='font-family:"Microsoft YaHei UI"'>父工厂中被引用</span><span
      style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
      "Microsoft YaHei UI"'>的名称</span></p>
      </td>
     </tr>
    </table>
    </div>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&lt;null&gt;</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.193in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>表示</span><span
    style='font-family:"Comic Sans MS"'> Java </span><span style='font-family:
    "Microsoft YaHei UI"'>空值。必要的，因为一个空的“值”标签将解析为一个空字符串，除非特殊的</span><span
    style='font-family:"Comic Sans MS"'> PropertyEditor </span><span
    style='font-family:"Microsoft YaHei UI"'>这样做，否则不会将其解析为空值</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;map&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.2027in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>map</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>集合数据</span></p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>属性</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.9652in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>merge</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.9652in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>使用父</span><span
    style='font-family:"Comic Sans MS"'>/</span><span style='font-family:"Microsoft YaHei UI"'>子</span><span
    style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
    "Microsoft YaHei UI"'>时启用</span><span style='font-family:"Comic Sans MS"'>/</span><span
    style='font-family:"Microsoft YaHei UI"'>禁用集合合并。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>value-type</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.9652in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>嵌套值的默认</span><span
    style='font-family:"Comic Sans MS"'>Java</span><span style='font-family:
    "Microsoft YaHei UI"'>类型。必须是完全限定的类名</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>key-type</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.9652in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>嵌套条目键的默认</span><span
    style='font-family:"Comic Sans MS"'> Java </span><span style='font-family:
    "Microsoft YaHei UI"'>类型。必须是完全限定的类名。</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&nbsp;</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>子标签</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.1034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>说明</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&lt;entry&gt;</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.1034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>用于迭代</span><span style='font-family:"Comic Sans MS"' lang=en-US>&lt;map&gt;</span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>数据</span></p>
    <div style='direction:ltr'>
    <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:
     ltr;border-collapse:collapse;border-style:solid;border-color:#A3A3A3;
     border-width:1pt' title="" summary="">
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>属性</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:1.752in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>描述</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'
      lang=en-US>key</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:white;vertical-align:top;width:1.752in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt'>数据的对应的键名</p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'
      lang=en-US>value</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:1.752in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt'>数据的值</p>
      </td>
     </tr>
    </table>
    </div>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;ref/&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.0916in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>使用引用数据</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:.8777in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>属性</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.0715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.8777in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>bean</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.0715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>被引用</span><span
    style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
    "Microsoft YaHei UI"'>的名称</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;idref&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.1243in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>此工厂或外部工厂（父工厂或包含的工厂）中的另一个</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>的</span><span
  style='font-family:"Comic Sans MS"'>id</span><span style='font-family:"Microsoft YaHei UI"'>。虽然可以使用常规的“</span><span
  style='font-family:"Comic Sans MS"'>value</span><span style='font-family:
  "Microsoft YaHei UI"'>”元素来获得相同的效果，但使用</span><span style='font-family:"Comic Sans MS"'>idref</span><span
  style='font-family:"Microsoft YaHei UI"'>表示</span><span style='font-family:
  "Comic Sans MS"'>Spring</span><span style='font-family:"Microsoft YaHei UI"'>容器应该检查该值是否实际对应于</span><span
  style='font-family:"Comic Sans MS"'>bean id</span></p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:.893in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>属性</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.0979in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.893in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>bean</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.0979in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>被引用</span><span
    style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
    "Microsoft YaHei UI"'>的名称</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.893in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>parent</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.0979in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>父工厂中被引用</span><span
    style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
    "Microsoft YaHei UI"'>的名称</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>&lt;p</span><span lang=zh-CN>rops</span><span lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.0916in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>注入实体对象</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>子标签</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.1034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>说明</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=en-US>&lt;p</span><span lang=zh-CN>rop</span><span lang=en-US>&gt;</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.1034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>实体对象</p>
    <div style='direction:ltr'>
    <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:
     ltr;border-collapse:collapse;border-style:solid;border-color:#A3A3A3;
     border-width:1pt' title="" summary="">
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>属性</span></p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:black;vertical-align:top;width:1.752in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt;
      color:white'><span style='font-weight:bold'>描述</span></p>
      </td>
     </tr>
     <tr>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Comic Sans MS";font-size:9.5pt'
      lang=en-US>key</p>
      </td>
      <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
      background-color:#E7E6E6;vertical-align:top;width:1.752in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
      <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt'>属性项对应的键名</p>
      </td>
     </tr>
    </table>
    </div>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#ED7D31'
  lang=en-US>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;null&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.0916in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>表示</span><span
  style='font-family:"Comic Sans MS"'> Java </span><span style='font-family:
  "Microsoft YaHei UI"'>空值。必要的，因为一个空的“值”标签将解析为一个空字符串，除非特殊的</span><span
  style='font-family:"Comic Sans MS"'> PropertyEditor </span><span
  style='font-family:"Microsoft YaHei UI"'>这样做，否则不会将其解析为空值</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#ED7D31' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>applicationContext.xml</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;bean</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>id</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>student</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>class</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;com.bcu.entity.</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>Student</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&gt;</span></p>

<p style='margin-left:.75in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=en-US>constructor-arg</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>name</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>name</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>value</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:maroon' lang=zh-CN>张三</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&gt;&lt;/</span><span
style='font-family:"Comic Sans MS";color:blue' lang=en-US>constructor-arg</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:blue'>&lt;/bean&gt;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;bean</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>id</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>size</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>class</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;com.bcu.entity.</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>Size</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=en-US>constructor-arg</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>name</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;size&quot;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:blue'>&lt;array&gt;</p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'>&lt;value&gt;</span><span
style='color:black'>4.7</span><span style='color:blue'>&lt;/value&gt;</span></p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'>&lt;value&gt;</span><span
style='color:black'>5.5</span><span style='color:blue'>&lt;/value&gt;</span></p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'>&lt;value&gt;</span><span
style='color:black'>5.8</span><span style='color:blue'>&lt;/value&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:blue'>&lt;/array&gt;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'><span lang=zh-CN>&lt;/</span><span lang=en-US>constructor-arg</span><span
lang=zh-CN>&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;bean</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>id</span><span style='font-family:
"Comic Sans MS";color:black'>=</span><span style='font-family:"Comic Sans MS";
color:maroon'>&quot;mobile&quot;</span><span style='font-family:"Microsoft YaHei UI";
color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";color:blue'>class</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;com.bcu.entity.Mobile&quot;</span><span
style='font-family:"Comic Sans MS";color:blue'>&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=en-US>constructor-arg</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>name</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>a</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>pps&quot;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:blue'>&lt;list&gt;</p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'>&lt;value&gt;</span><span
style='color:black'>appStore</span><span style='color:blue'>&lt;/value&gt;</span></p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'>&lt;value&gt;</span><span
style='color:black'>weChat</span><span style='color:blue'>&lt;/value&gt;</span></p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'>&lt;value&gt;</span><span
style='color:black'>camera</span><span style='color:blue'>&lt;/value&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:blue'>&lt;/list&gt;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'><span lang=zh-CN>&lt;/</span><span lang=en-US>constructor-arg</span><span
lang=zh-CN>&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;bean</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>id</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;mobile&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>class</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;com.bcu.entity.</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>Computer</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=en-US>constructor-arg</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>name</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>software</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:blue'>&lt;list&gt;</p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue' lang=zh-CN>&lt;value&gt;</span><span
style='color:black' lang=en-US>ps</span><span style='color:blue' lang=zh-CN>&lt;/value&gt;</span></p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue' lang=zh-CN>&lt;value&gt;</span><span
style='color:black' lang=en-US>idea</span><span style='color:blue' lang=zh-CN>&lt;/value&gt;</span></p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue' lang=zh-CN>&lt;value&gt;</span><span
style='color:black' lang=en-US>pycharm</span><span style='color:blue'
lang=zh-CN>&lt;/value&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:blue'>&lt;/list&gt;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'><span lang=zh-CN>&lt;/</span><span lang=en-US>constructor-arg</span><span
lang=zh-CN>&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>

<p style='margin-top:5pt;margin-bottom:5pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;bean</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>id</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>price</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>class</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;com.bcu.entity.</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>Price</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=en-US>constructor-arg</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>name</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;price&quot;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:blue'>&lt;map&gt;</p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;entry</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>key</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;4.7&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>value</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;5288&quot;</span><span
style='font-family:"Comic Sans MS";color:blue'>&gt;&lt;/entry&gt;</span></p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;entry</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>key</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;5.5&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>value</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;6288&quot;</span><span
style='font-family:"Comic Sans MS";color:blue'>&gt;&lt;/entry&gt;</span></p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;entry</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>key</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;5.8&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>value</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;7288&quot;</span><span
style='font-family:"Comic Sans MS";color:blue'>&gt;&lt;/entry&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:blue'>&lt;/map&gt;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;/</span><span
style='font-family:"Comic Sans MS";color:blue' lang=en-US>constructor-arg</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'>&lt;bean id=</span><span
style='color:#B43512'>&quot;person&quot;</span><span style='color:blue'> class=</span><span
style='color:#B43512'>&quot;com.example.Person&quot;</span><span
style='color:blue'>&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'><span style='mso-spacerun:yes'> 
</span>&lt;constructor-arg&gt;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt'><span style='color:blue'>&lt;ref bean=</span><span
style='color:#B43512'>&quot;address&quot;</span><span style='color:blue'>/&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'><span style='mso-spacerun:yes'> 
</span>&lt;/constructor-arg&gt;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&nbsp;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'>&lt;bean id=</span><span
style='color:#B43512'>&quot;address&quot;</span><span style='color:blue'>
class=</span><span style='color:#B43512'>&quot;com.example.Address&quot;</span><span
style='color:blue'>/&gt;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果主要使用构造函数注入，则可能会创建无法解决的循环依赖方案。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>如果</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>A </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>类通过构造函数注入需要</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> B </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>类的实例，而</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> B </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>类通过构造函数注入需要</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> A </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>类的实例。如果为将类</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> A </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> B </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>相互注入而配置了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> bean</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，则</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> Spring
     IoC </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>容器会在运行时检测到此循环引用，并抛出</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> BeanCurrentlyInCreationException</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>。解决方案是修改某些类的代码，使这些类由设置器而不是构造函数来配置。或者，避免构造函数注入，而仅使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> setter </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>注入。尽管不建议这样做，但是可以使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> setter </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>注入配置循环依赖关系</span></li>
</ul>

</div>

</div>

</div>

<!--EndFragment-->
</body>
