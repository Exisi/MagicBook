---
categories:
  - Spring
tags:
  - ‹property›
date:
  - 2022-11-28 7:40:23
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.0548in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.0548in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;property&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>标签用于自动注入</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>bean</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中实体类对象的成员变量</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;property&gt;</span><span
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
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>变量名称</p>
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
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292E'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>会调用类中的</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>set</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>方法，在</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>set</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>方法中可以完成属性赋值</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:4.8583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:green'><span
  style='font-family:"Comic Sans MS"'>&lt;!--</span><span style='font-family:
  "Microsoft YaHei UI"'>简单类型</span><span style='font-family:"Comic Sans MS"'>set</span><span
  style='font-family:"Microsoft YaHei UI"'>注入</span><span style='font-family:
  "Comic Sans MS"'>--&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;bean</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>id</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;mySchool&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;com.bjpowernode.ba02.School&quot;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;property</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>name</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;name&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>value</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>北京大学</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;property</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>name</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;address&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>value</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>北京的海淀区</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:5.093in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:green'><span
  style='font-family:"Comic Sans MS"'>&lt;!--</span><span style='font-family:
  "Microsoft YaHei UI"'>引用类型</span><span style='font-family:"Comic Sans MS"'>set</span><span
  style='font-family:"Microsoft YaHei UI"'>注入</span><span style='font-family:
  "Comic Sans MS"'>--&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;bean</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>id</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;myStudent&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;com.bjpowernode.ba02.Student&quot;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;property</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>name</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;name&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>value</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>李四</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;property</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>name</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;age&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>value</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;22&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>&lt;!--</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>引用类型的赋值</span><span
  style='font-family:"Comic Sans MS";color:green'>--&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;property</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>name</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;school&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>ref</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;mySchool&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>&lt;!--setSchool(mySchool)--&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;property&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>标签有以下子标签，其中</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;array&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;list&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
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
  <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>
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
  <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>
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
  <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>
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
    background-color:black;vertical-align:top;width:.843in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>属性</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.1104in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.843in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>bean</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.1104in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
    background-color:black;vertical-align:top;width:.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>属性</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.0666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>bean</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.0666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>被引用</span><span
    style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
    "Microsoft YaHei UI"'>的名称</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>parent</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.0666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&lt;meta/&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.0916in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>附加信息</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;null&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.0916in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>表示</span><span
  style='font-family:"Comic Sans MS"'> Java </span><span style='font-family:
  "Microsoft YaHei UI"'>空值。必要的，因为一个空的“值”标签将解析为一个空字符串，除非特殊的</span><span
  style='font-family:"Comic Sans MS"'> PropertyEditor </span><span
  style='font-family:"Microsoft YaHei UI"'>这样做，否则不会将其解析为空值</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#ED7D31'
lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>applicationContext.xml</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:4.375in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
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
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;property</span><span
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
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&gt;&lt;/property&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>
  </td>
 </tr>
</table>

</div>

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
style='font-family:"Comic Sans MS";color:blue'>&lt;property</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>name</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;size&quot;</span><span style='font-family:
"Comic Sans MS";color:blue'>&gt;</span></p>

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
font-size:12.0pt;color:blue'>&lt;/property&gt;</p>

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
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;property</span><span
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
font-size:12.0pt;color:blue'>&lt;/property&gt;</p>

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
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;property</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>name</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>software</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:blue'><span lang=zh-CN>&lt;</span><span
lang=en-US>set</span><span lang=zh-CN>&gt;</span></p>

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
"Comic Sans MS";font-size:12.0pt;color:blue'><span lang=zh-CN>&lt;/</span><span
lang=en-US>set</span><span lang=zh-CN>&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;/property&gt;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
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
style='font-family:"Comic Sans MS";color:blue'>&lt;property</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>name</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;price&quot;</span><span style='font-family:
"Comic Sans MS";color:blue'>&gt;</span></p>

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

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
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

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;/property&gt;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>

<p style='margin-top:5pt;margin-bottom:5pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'>&lt;bean id=</span><span
style='color:#B43512'>&quot;exampleBean&quot;</span><span style='color:blue'>
class=</span><span style='color:#B43512'>&quot;examples.ExampleBean&quot;</span><span
style='color:blue'>&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'>&lt;property name=</span><span
style='color:#B43512'>&quot;beanOne&quot;</span><span style='color:blue'>&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt'><span style='color:blue'>&lt;ref bean=</span><span
style='color:#B43512;background:#F2DCDB'>&quot;anotherExampleBean&quot;</span><span
style='color:blue'>/&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;/property&gt;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&nbsp;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'>&lt;property name=</span><span
style='color:#B43512'>&quot;beanTwo&quot;</span><span style='color:blue'> ref=</span><span
style='color:#B43512;background:#DBE5F1'>&quot;yetAnotherBean&quot;</span><span
style='color:blue'>/&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'>&lt;property name=</span><span
style='color:#B43512'>&quot;integerProperty&quot;</span><span style='color:
blue'> value=</span><span style='color:#B43512'>&quot;1&quot;</span><span
style='color:blue'>/&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&nbsp;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'>&lt;bean id=</span><span
style='color:#B43512;background:#F2DCDB'>&quot;anotherExampleBean&quot;</span><span
style='color:blue'> class=</span><span style='color:#B43512'>&quot;examples.AnotherBean&quot;</span><span
style='color:blue'>/&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'>&lt;bean id=</span><span
style='color:#B43512;background:#DBE5F1'>&quot;yetAnotherBean&quot;</span><span
style='color:blue'> class=</span><span style='color:#B43512'>&quot;examples.YetAnotherBean&quot;</span><span
style='color:blue'>/&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#6DA845'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:5pt;
     margin-bottom:5pt;color:#ED7D31' lang=en-US><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>Entitytest.java</span></li>
</ul>

<p style='margin-top:5pt;margin-bottom:5pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:#FFC000'>@Test</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>public</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:#8000FF'>void</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>test(){</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>config=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;applicationContext.xml&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>ApplicationContext</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>ctx</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Microsoft YaHei UI";color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>new</span><span style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>ClassPathXmlApplicationContext(config);</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>Student</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>student</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Microsoft YaHei UI";color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:black'>(Student)</span><span style='font-family:"Microsoft YaHei UI";
color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";color:black'>ctx.getBean(</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;student&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>);</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>System.out.println(</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>S</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>tudent</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US> </span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US> </span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>+student);</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:black' lang=en-US><span
style='mso-spacerun:yes'>    </span></span><span style='font-family:"Comic Sans MS";
color:black' lang=zh-CN>Size</span><span style='font-family:"Microsoft YaHei UI";
color:black' lang=zh-CN>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:black' lang=zh-CN>size</span><span style='font-family:"Microsoft YaHei UI";
color:black' lang=zh-CN>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:black' lang=zh-CN>=</span><span style='font-family:"Microsoft YaHei UI";
color:black' lang=zh-CN>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:black' lang=zh-CN>(Size)</span><span style='font-family:"Microsoft YaHei UI";
color:black' lang=zh-CN>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:black' lang=zh-CN>ctx.getBean(</span><span style='font-family:"Comic Sans MS";
color:maroon' lang=zh-CN>&quot;size&quot;</span><span style='font-family:"Comic Sans MS";
color:black' lang=zh-CN>);</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>System.out.println(</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;Size</span><span
style='font-family:"Microsoft YaHei UI";color:maroon'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:maroon'>=</span><span
style='font-family:"Microsoft YaHei UI";color:maroon'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>+size);</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>Mobile</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>mobile</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Microsoft YaHei UI";color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:black'>(Mobile)</span><span style='font-family:"Microsoft YaHei UI";
color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";color:black'>ctx.getBean(</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;mobile&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>);</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>System.out.println(</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;Mobile</span><span
style='font-family:"Microsoft YaHei UI";color:maroon'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:maroon'>=</span><span
style='font-family:"Microsoft YaHei UI";color:maroon'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>+mobile);</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>Price</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>price</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Microsoft YaHei UI";color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:black'>(Price)</span><span style='font-family:"Microsoft YaHei UI";
color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";color:black'>ctx.getBean(</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;price&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>);</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>System.out.println(</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;Price</span><span
style='font-family:"Microsoft YaHei UI";color:maroon'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:maroon'>=</span><span
style='font-family:"Microsoft YaHei UI";color:maroon'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>+price);</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
color:black'><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
style='font-family:"Comic Sans MS"'>}</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果：</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=en-US>Student = { name</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>：张三</span><span
style='font-family:"Comic Sans MS"' lang=en-US> }</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=en-US>Size = { size</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>：</span><span
style='font-family:"Comic Sans MS"' lang=en-US>[4.7,5.5,5.8] }</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>Mobile = { app: [appStore,weChat,camera] }</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>Price = { price:{key:4.7,value:5288},</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>{key:5.5,value:6288},</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>{key:5.8,value:7288} }</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
