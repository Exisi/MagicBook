---
categories:
  - Spring
  - Spring MVC
tags:
  - SSM
date:
  - 2022-6-28 14:51:04
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:11.1187in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:11.1187in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果要统一处理项目的异常，就需要分析产生异常的类别，针对相同逻辑的异常进一步处理，项目的异常可以大概分为以下类别：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>类别</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.668in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>异常类</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.1423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.7263in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>处理方案</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt'>业务异常</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.668in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt'>BusinessException</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.1423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt'>规范的用户行为产生的异常</p>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt'>不规范的用户行为操作产生的异常</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt'>发送对应消息传递给用户，提醒规范操作</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt'>系统异常</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.668in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt'>SystemException</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt'>项目运行过程中可预计且无法避免的异常</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.8381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt'>记录日志</p>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt'>发送固定消息传递给用户，安抚用户</p>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt'>发送特定消息给运维人员，提醒维护</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt'>其他异常</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.668in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt'>Exception</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.1423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt'>编程人员未预期到的异常</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.8381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt'>记录日志</p>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt'>发送固定消息传递给用户，安抚用户</p>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt'>发送特定消息给运维人员，提醒维护</p>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt'>（纳入预期范围内）</p>
  </td>
 </tr>
</table>

</div>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>为了清晰的定义异常，首先需要自定义相关的异常类，自定义异常类建议继承</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>RuntimeException</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>。因为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>RuntimeException</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>是一种非检查型异常，所以在程序中抛出这种异常时不需要显式地声明或捕获它们。</span></li>
</ul>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>这意味着，如果自定义的异常类继承了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>RuntimeException</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，那么在程序中抛出该异常时就不需要使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>try-catch</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>块来捕获它，而可以直接将其抛出进行异常处理，这样可以使代码更加简洁、易读。</span></li>
</ul>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>SystemException</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>.java</span></li>
</ul>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.7083in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:6.9486in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>SystemException</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>extends</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>RuntimeException{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>private</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ResultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>SystemException(ResultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt'><span style='color:blue' lang=zh-CN>super</span><span
  style='color:black' lang=zh-CN>(resultCode</span><span style='color:black'
  lang=en-US>.getMsg()</span><span style='color:black' lang=zh-CN>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>this</span><span
  style='font-family:"Comic Sans MS";color:black'>.resultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>SystemException(</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>message,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ResultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>super</span><span
  style='font-family:"Comic Sans MS";color:black'>(message);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>this</span><span
  style='font-family:"Comic Sans MS";color:black'>.resultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>SystemException(</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>message,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Throwable</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>cause,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ResultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>super</span><span
  style='font-family:"Comic Sans MS";color:black'>(message,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>cause);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>this</span><span
  style='font-family:"Comic Sans MS";color:black'>.resultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ResultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>getResultCode()</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>void</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>setResultCode(ResultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>this</span><span
  style='font-family:"Comic Sans MS";color:black'>.resultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>}</p>
  </td>
 </tr>
</table>

</div>

<p style='margin:0in;margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:blue'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>BusinessException</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>.java</span></li>
</ul>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.7083in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:7.0263in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>BusinessException</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>extends</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>RuntimeException</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>private</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ResultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>BusinessException(ResultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt'><span style='color:blue' lang=zh-CN>super</span><span
  style='color:black' lang=zh-CN>(resultCode</span><span style='color:black'
  lang=en-US>.getMsg()</span><span style='color:black' lang=zh-CN>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>this</span><span
  style='font-family:"Comic Sans MS";color:black'>.resultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>BusinessException(</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>message,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ResultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>super</span><span
  style='font-family:"Comic Sans MS";color:black'>(message);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>this</span><span
  style='font-family:"Comic Sans MS";color:black'>.resultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>BusinessException(</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>message,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Throwable</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>cause,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ResultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>super</span><span
  style='font-family:"Comic Sans MS";color:black'>(message,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>cause);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>this</span><span
  style='font-family:"Comic Sans MS";color:black'>.resultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ResultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>getResultCode()</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>void</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>setResultCode(ResultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>this</span><span
  style='font-family:"Comic Sans MS";color:black'>.resultCode</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resultCode;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>}</p>
  </td>
 </tr>
</table>

</div>

<p style='margin:0in;margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>同时需要将具体异常对应的错误码添加到枚举类，具体业务的异常可以自定义，以下业务异常和系统异常的错误码示例</span></li>
</ul>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:4.9347in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>enum</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Code</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:green'><span
  style='font-family:"Comic Sans MS"' lang=en-US><span
  style='mso-spacerun:yes'>    </span>//</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>其他错误码</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt;color:black' lang=en-US>…</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=en-US><span
  style='mso-spacerun:yes'>   </span></span><span style='font-family:"Comic Sans MS";
  color:green' lang=zh-CN>/**</span><span style='font-family:"Microsoft YaHei UI";
  color:green' lang=zh-CN>&nbsp;业务错误&nbsp;</span><span style='font-family:"Comic Sans MS";
  color:green' lang=zh-CN>*/</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>BUSINESS_ERROR(</span><span
  style='font-family:"Comic Sans MS";color:red'>40001</span><span
  style='font-family:"Comic Sans MS";color:black'>,</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>业务错误</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>),</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>/**</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>&nbsp;业务超时错误&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>*/</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>BUSINESS_TIMEOUT_ERROR(</span><span
  style='font-family:"Comic Sans MS";color:red'>40002</span><span
  style='font-family:"Comic Sans MS";color:black'>,</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>业务超时错误</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>),</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>/**</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>&nbsp;业务未知错误&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>*/</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>BUSINESS_UNKNOW_ERROR(</span><span
  style='font-family:"Comic Sans MS";color:red'>40003</span><span
  style='font-family:"Comic Sans MS";color:black'>,</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>业务未知错误</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>),</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>/**</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>&nbsp;系统错误&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>*/</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>SYSTEM_ERROR(</span><span
  style='font-family:"Comic Sans MS";color:red'>50001</span><span
  style='font-family:"Comic Sans MS";color:black'>,</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>系统错误</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>),</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>/**</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>&nbsp;系统超时错误&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>*/</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>SYSTEM_TIMEOUT_ERROR(</span><span
  style='font-family:"Comic Sans MS";color:red'>50002</span><span
  style='font-family:"Comic Sans MS";color:black'>,</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>系统超时错误</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>),</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>/**</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>&nbsp;系统未知错误&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>*/</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>SYSTEM_UNKNOW_ERROR(</span><span
  style='font-family:"Comic Sans MS";color:red'>50004</span><span
  style='font-family:"Comic Sans MS";color:black'>,</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>系统未知错误</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:black' lang=en-US><span
  style='mso-spacerun:yes'>    </span></span><span style='font-family:"Comic Sans MS";
  color:green' lang=en-US>//get</span><span style='font-family:"Microsoft YaHei UI";
  color:green' lang=zh-CN>方法和构造方法</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>}</p>
  </td>
 </tr>
</table>

</div>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> S</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>pring</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中，统一处理异常有</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>2</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>种方式，使用
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#FFC000' lang=zh-CN>@ExceptionHandler</span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@ControllerAdvice</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>（</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#FFC000' lang=zh-CN>@RestControlleradvice</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>）
     注解或自定义实现</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US> </span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt' lang=zh-CN>HandlerExceptionResolver</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>接口</span></li>
</ul>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin:0in;margin-left:.75in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>1. </span><span style='font-family:"Microsoft YaHei UI"'>注解方式</span></p>

<p style='margin:0in;margin-left:1.125in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>@ExceptionHandler </span><span
style='font-family:"Comic Sans MS"' lang=en-US>+ </span><span style='font-family:
"Comic Sans MS";color:#FFC000' lang=zh-CN>@</span><span style='font-family:
"Comic Sans MS";color:#FFC000' lang=en-US>C</span><span style='font-family:
"Comic Sans MS";color:#FFC000' lang=zh-CN>ontroller</span><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=en-US>A</span><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>dvice</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>（</span><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>@</span><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=en-US>R</span><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>est</span><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=en-US>C</span><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>ontroller</span><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=en-US>A</span><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>dvice</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>）</span></p>

<p style='margin:0in;margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;margin-left:.75in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>2. </span><span style='font-family:"Microsoft YaHei UI"'>接口方式</span></p>

<p style='margin:0in;margin-left:1.125in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>实现</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>HandlerExceptionResolver </span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>接口</span></p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:13.5pt'><span
style='font-weight:bold'>注解方式</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>定义好特定的错误处理类后，只需要在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#FFC000' lang=en-US>Rest</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#FFC000' lang=zh-CN>ControllerAdvice</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>注解的类下集中处理错误，这时我们可以根据错误添加一些错误处理方案，并对错误内容进行数据的封装，把错误返回给前端</span></li>
</ul>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:7.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:#FFC000'><span lang=zh-CN>@</span><span lang=en-US>Rest</span><span
  lang=zh-CN>ControllerAdvice</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>GlobalExceptionAdvice</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@ExceptionHandler</span><span
  style='font-family:"Comic Sans MS";color:black'>(BusinessException.</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Comic Sans MS";color:black'>)</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>@ResponseStatus</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>(HttpStatus.</span><span
  style='font-family:"Comic Sans MS";color:black' lang=en-US>BAD_REQUEST</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>)</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result&lt;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Comic Sans MS";color:black'>&gt;</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>doBusinessException(BusinessException</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ex)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result.fail(ex.getResultCode(),</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ex.getMessage(),</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>null);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@ExceptionHandler</span><span
  style='font-family:"Comic Sans MS";color:black'>(SystemException.</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Comic Sans MS";color:black'>)</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@ResponseStatus</span><span
  style='font-family:"Comic Sans MS";color:black'>(HttpStatus.INTERNAL_SERVER_ERROR)</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result&lt;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Comic Sans MS";color:black'>&gt;</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>doSystemException(SystemException</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ex)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>//</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>记录日志</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>//</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>发送特定消息给运维人员，提醒维护</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result.fail(ex.getResultCode(),</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ex.getMessage(),</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>null);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@ExceptionHandler</span><span
  style='font-family:"Comic Sans MS";color:black'>(Exception.</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Comic Sans MS";color:black'>)</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@ResponseStatus</span><span
  style='font-family:"Comic Sans MS";color:black'>(HttpStatus.INTERNAL_SERVER_ERROR)</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result&lt;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Comic Sans MS";color:black'>&gt;</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>doOtherException(Exception</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ex)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>//</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>记录日志</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>//</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>发送特定消息给运维人员，提醒维护</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result.fail(ResultCode.</span><span
  style='font-family:"Comic Sans MS";color:#8064A2'>SYSTEM_UNKNOW_ERROR</span><span
  style='font-family:"Comic Sans MS";color:black'>,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ex.getMessage(),</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>null);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>}</p>
  </td>
 </tr>
</table>

</div>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
13.5pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:5pt;
     margin-bottom:5pt'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>当发生错误时，只需要在</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US> Controller </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>层中抛出异常到</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>GlobalExceptionAdvice</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>就完成了异常处理，以下以模拟实际错误为例</span></li>
</ul>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:9.9784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:#FFC000'>@RestController</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'><span style='color:#FFC000'>@RequestMapping</span><span
  style='color:black'>(</span><span style='color:maroon'>&quot;/books&quot;</span><span
  style='color:black'>)</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>BookController</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:Arial;font-size:12.0pt;
  color:black'>​</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@Resource</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>private</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>BookService</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>bookService;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Microsoft YaHei UI";
  font-size:12.0pt;color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@PostMapping</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result&lt;&gt;</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>save(</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@RequestBody</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Book</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>book)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>//</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>模拟业务异常，包装成自定义异常</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>if(book.name</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>==</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;Spring</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>实战&nbsp;第</span><span
  style='font-family:"Comic Sans MS";color:maroon'>5</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>版</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>){</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>throw</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>new</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>BusinessException(</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon' lang=zh-CN>数据已存在，请勿重复提交</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>,</span><span
  style='font-family:"Comic Sans MS";color:black' lang=en-US> Result</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>Code.</span><span
  style='font-family:"Comic Sans MS";color:#8064A2' lang=zh-CN>BUSINESS_ERROR</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>//</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>模拟系统异常，将可能出现的异常进行包装，转换成自定义异常</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>try{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>int</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>i</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:red'>1</span><span style='font-family:
  "Comic Sans MS";color:black'>/</span><span style='font-family:"Comic Sans MS";
  color:red'>0</span><span style='font-family:"Comic Sans MS";color:black'>;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>}</span><span
  style='font-family:"Comic Sans MS";color:blue'>catch</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>(Exception</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>e){</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>throw</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>new</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>SystemException(</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon' lang=zh-CN>服务器访问超时，请重试</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>,</span><span
  style='font-family:"Comic Sans MS";color:black' lang=en-US> Result</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>CodeCode.</span><span
  style='font-family:"Comic Sans MS";color:#8064A2' lang=zh-CN>SYSTEM_TIMEOUT_ERROR</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>boolean</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>flag</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>bookService.save(book);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>if</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>(!flag){</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result.fail(ResultCode.</span><span
  style='font-family:"Comic Sans MS";color:#8064A2'>INTERNAL_SERVER_ERROR</span><span
  style='font-family:"Comic Sans MS";color:black'>,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ResultCode.</span><span
  style='font-family:"Comic Sans MS";color:#8064A2'>INTERNAL_SERVER_ERROR</span><span
  style='font-family:"Comic Sans MS";color:black'>.getMsg(),</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>flag);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result.success(flag);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>}</p>
  </td>
 </tr>
</table>

</div>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin:0in;margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>接口数据返回如下：</p>

<p style='margin:0in;margin-left:.375in'><img
src="data:image/png;base64,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"
width=631 height=134></p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:13.5pt'><span
style='font-weight:bold'>接口方式</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>SpringMVC</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中提供的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>HandlerExceptionResolver</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>接口可以实现全局异常处理器，通过实现此接口可以对异常进行处理</span></li>
</ul>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:10.7875in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:#FFC000'>@Component</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>GlobalExceptionHandler</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>implements</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>HandlerExceptionResolver</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@Override</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ModelAndView</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>resolveException(HttpServletRequest</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>request,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>HttpServletResponse</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>response,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Object</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>handler,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Exception</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ex)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>response.setContentType(MediaType.APPLICATION_JSON_VALUE);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>response.setCharacterEncoding(</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;UTF-8&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>response.setHeader(</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;Cache-Control&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;no-cache,</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon'>must-revalidate&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result&lt;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Comic Sans MS";color:black'>&gt;</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>result;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>if</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>(ex</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>instanceof</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>BusinessException)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt;color:black'><span lang=en-US><span
  style='mso-spacerun:yes'>    </span></span><span lang=zh-CN>response.setStatus(HttpStatus.</span><span
  lang=en-US>BAD_REQUEST</span><span lang=zh-CN>.value());</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>result</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>new</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result&lt;&gt;(ResultCode.</span><span
  style='font-family:"Comic Sans MS";color:#8064A2'>BUSINESS_ERROR</span><span
  style='font-family:"Comic Sans MS";color:black'>,ex.getMessage(),null);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>else</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>if</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>(ex</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>instanceof</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>SystemException)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt;color:black'><span lang=en-US><span
  style='mso-spacerun:yes'>    </span></span><span lang=zh-CN>response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());</span><span
  lang=en-US><span style='mso-spacerun:yes'>   </span></span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>result</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>new</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result&lt;&gt;(ResultCode.</span><span
  style='font-family:"Comic Sans MS";color:#8064A2'>SYSTEM_ERROR</span><span
  style='font-family:"Comic Sans MS";color:black'>,ex.getMessage(),null);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>else</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt;color:black'><span lang=en-US><span
  style='mso-spacerun:yes'>    </span></span><span lang=zh-CN>response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>result</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>new</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result&lt;&gt;(ResultCode.</span><span
  style='font-family:"Comic Sans MS";color:#8064A2'>INTERNAL_SERVER_ERROR</span><span
  style='font-family:"Comic Sans MS";color:black'>,</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>未知错误</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>,null);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>try</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ObjectMapper</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>objectMapper</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>new</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ObjectMapper();</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>objectMapper.writeValue(response.getWriter(),</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
  "Comic Sans MS"'>result);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>new</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ModelAndView();</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>}</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>catch</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>(IOException</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>e)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>e.printStackTrace();</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>null;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>}</p>
  </td>
 </tr>
</table>

</div>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:5pt;
     margin-bottom:5pt'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>当发生错误时，只需要在</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US> Controller </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>层中抛出异常就完成了异常处理，以下以模拟实际错误为例</span></li>
</ul>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:9.9784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:#FFC000'>@RestController</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'><span style='color:#FFC000'>@RequestMapping</span><span
  style='color:black'>(</span><span style='color:maroon'>&quot;/books&quot;</span><span
  style='color:black'>)</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>BookController</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:Arial;font-size:12.0pt;
  color:black'>​</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@Resource</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>private</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>BookService</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>bookService;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Microsoft YaHei UI";
  font-size:12.0pt;color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@PostMapping</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result&lt;&gt;</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>save(</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@RequestBody</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Book</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>book)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>//</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>模拟业务异常，包装成自定义异常</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>if(book.name</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>==</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;Spring</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>实战&nbsp;第</span><span
  style='font-family:"Comic Sans MS";color:maroon'>5</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>版</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>){</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>throw</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>new</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>BusinessException(</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon' lang=zh-CN>数据已存在，请勿重复提交</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>,</span><span
  style='font-family:"Comic Sans MS";color:black' lang=en-US> Result</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>Code.</span><span
  style='font-family:"Comic Sans MS";color:#8064A2' lang=zh-CN>BUSINESS_ERROR</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>//</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>模拟系统异常，将可能出现的异常进行包装，转换成自定义异常</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>try{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>int</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>i</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:red'>1</span><span style='font-family:
  "Comic Sans MS";color:black'>/</span><span style='font-family:"Comic Sans MS";
  color:red'>0</span><span style='font-family:"Comic Sans MS";color:black'>;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>}</span><span
  style='font-family:"Comic Sans MS";color:blue'>catch</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>(Exception</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>e){</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>throw</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>new</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>SystemException(</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon' lang=zh-CN>服务器访问超时，请重试</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>,</span><span
  style='font-family:"Comic Sans MS";color:black' lang=en-US> Result</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>CodeCode.</span><span
  style='font-family:"Comic Sans MS";color:#8064A2' lang=zh-CN>SYSTEM_TIMEOUT_ERROR</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>boolean</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>flag</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>bookService.save(book);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>if</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>(!flag){</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result.fail(ResultCode.</span><span
  style='font-family:"Comic Sans MS";color:#8064A2'>INTERNAL_SERVER_ERROR</span><span
  style='font-family:"Comic Sans MS";color:black'>,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ResultCode.</span><span
  style='font-family:"Comic Sans MS";color:#8064A2'>INTERNAL_SERVER_ERROR</span><span
  style='font-family:"Comic Sans MS";color:black'>.getMsg(),</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>flag);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result.success(flag);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>}</p>
  </td>
 </tr>
</table>

</div>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin:0in;margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>接口数据返回如下：</p>

<p style='margin:0in;margin-left:.375in'><img
src="data:image/png;base64,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"
width=631 height=134></p>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin:0in;margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>实现</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>HandlerExceptionResolver</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>接口处理全局异常的方式并不被推荐，很明显这种处理方式不够灵活，异常全部写在一个方法中，同时需要对所有异常进行判断，难以对代码进行维护和扩展，代码耦合度高</span></p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='margin:0in;font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://juejin.cn/post/7159555171616292871"><span style='font-family:
"Comic Sans MS"'>https://juejin.cn/post/7159555171616292871</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
