---
categories:
  - Spring
tags:
  - ‹props›
date:
  - 2022-11-28 7:41:34
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.8076in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.8076in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&lt;p</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>rops</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>是</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&lt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>property</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>下的子标签，是用来为</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&lt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>property</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>注入</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>properties</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>实体对象而使用的。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>每个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> &lt;props&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>可以嵌套多个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> &lt;prop&gt; ,
     &lt;prop&gt; </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>内部只能是字符串</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
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
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>&lt;p</span><span lang=zh-CN>rop</span><span lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.1034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>实体对象</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
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
    <p style='font-family:"Microsoft YaHei UI";font-size:9.5pt'>属性项对应的键名</p>
    </td>
   </tr>
  </table>
  </div>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Person</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>.java</span></li>
</ul>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.7083in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:3.6458in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'><span style='color:blue'>class</span><span
  style='color:black'>&nbsp;Person{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'><span style='color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='color:blue'>private</span><span style='color:black'>&nbsp;Properties&nbsp;props;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Microsoft YaHei";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'><span style='color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='color:blue'>public</span><span style='color:black'>&nbsp;</span><span
  style='color:#8000FF'>void</span><span style='color:black'>&nbsp;setProps(Properties&nbsp;props)&nbsp;&nbsp;&nbsp;&nbsp;{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'><span style='color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='color:blue'>this</span><span style='color:black'>.props&nbsp;=&nbsp;props;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>&nbsp;&nbsp;&nbsp;&nbsp;}</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>}</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>&nbsp;</p>
  </td>
 </tr>
</table>

</div>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>applicationContext.xml</span></li>
</ul>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.7083in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:3.118in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;bean</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>id</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;test&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;Person&quot;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;property</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>name</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;props&quot;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;props&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;prop</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>key</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;ages&quot;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&gt;</span><span
  style='font-family:"Comic Sans MS";color:black'>18</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;/prop&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;prop</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>key</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;stature&quot;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&gt;</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>张三</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;/prop&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;/props&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;/property&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>
  </td>
 </tr>
</table>

</div>

</div>

</div>

</div>

<!--EndFragment-->
</body>
