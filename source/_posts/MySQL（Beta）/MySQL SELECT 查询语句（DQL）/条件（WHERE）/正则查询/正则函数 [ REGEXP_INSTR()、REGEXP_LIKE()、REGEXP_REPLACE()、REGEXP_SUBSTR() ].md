---
categories:
  - MySQL
tags:
  - SELECT
  - REGEXP_INSTR()
  - REGEXP_LIKE()
  - REGEXP_REPLACE()
  - REGEXP_SUBSTR()
date:
  - 2023-2-15 14:30:13
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.6944in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.6944in'>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.2006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>正则函数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.2006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>REGEXP_INSTR()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>子字符串匹配正则表达式的起始索引</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.2006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>REGEXP_LIKE()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>字符串是否与正则表达式匹配</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.2006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>REGEXP_REPLACE()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>替换与正则表达式匹配的子字符串</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.2006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>REGEXP_SUBSTR()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>返回与正则表达式匹配的子字符串</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold' lang=zh-CN>REGEXP_INSTR</span><span style='font-weight:
bold' lang=en-US>()</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>返回与模式</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>pat</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>指定的正则表达式匹配的字符串</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>expr</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的子字符串的起始索引，如果不匹配，则返回</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>0</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>。如果</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>expr</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>pat</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>NULL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，则返回值为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>NULL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>。字符索引从</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>1</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>开始。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#C00000'>REGEXP_INSTR</span>(expr, pat[, pos[,
occurrence[, return_option[, match_type]]]])</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:7.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>exp</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>匹配的字符</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>pat</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.1958in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>字符匹配模式，以下模式</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数类型</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>作用</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>适用</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>str</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配包含指定的字符串的文本</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>aa<span style='mso-spacerun:yes'>    </span>-&gt;<span
    style='mso-spacerun:yes'>   </span>aa </p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>[ ]</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配包含指定的字符串的文本</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US><span style='color:black'>[</span><span style='color:#C00000'>ab</span><span
    style='color:black'>]</span><span style='color:#C00000'><span
    style='mso-spacerun:yes'>  </span></span>-&gt;<span
    style='mso-spacerun:yes'>  </span><span style='color:#C00000'>a</span>, <span
    style='color:#C00000'>b</span>, <span style='color:#C00000'>ab</span>, <span
    style='color:#C00000'>b</span>c, <span style='color:#C00000'>a</span>c</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>[^ ]</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配不在括号中的任何字符</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US><span style='color:black'>[</span><span style='color:#C00000'>ab</span><span
    style='color:black'>]</span><span style='color:#C00000'><span
    style='mso-spacerun:yes'>  </span></span>-&gt;<span
    style='mso-spacerun:yes'>  </span>c, cde</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>^</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配字符串的开始位置</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>^</span><span style='color:#C00000' lang=zh-CN>a</span><span
    lang=en-US><span style='mso-spacerun:yes'>  </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span style='color:#C00000'
    lang=en-US>a</span><span lang=en-US>bc</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>$</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配字符串的结束位置</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#C00000' lang=en-US>C</span><span lang=zh-CN>$</span><span
    lang=en-US><span style='mso-spacerun:yes'>  </span>-&gt;<span
    style='mso-spacerun:yes'>  </span>AB</span><span style='color:#C00000'
    lang=en-US>C</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>.</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配任何一个字符，包括回车、换行等。</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=en-US>b</span><span style='color:#C00000' lang=en-US>.</span><span
    lang=en-US>t<span style='mso-spacerun:yes'>  </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>b</span><span
    style='color:#C00000' lang=zh-CN>i</span><span lang=zh-CN>t</span><span
    lang=en-US>, </span><span lang=zh-CN>b</span><span style='color:#C00000'
    lang=zh-CN>a</span><span lang=zh-CN>t</span><span lang=en-US>, </span><span
    lang=zh-CN>b</span><span style='color:#C00000' lang=zh-CN>u</span><span
    lang=zh-CN>t</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>*</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>0</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>个或</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> n </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>次，在它之前必须有内容</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#C00000' lang=en-US>f</span><span lang=zh-CN>*</span><span
    lang=en-US>n<span style='mso-spacerun:yes'>  </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span style='color:#C00000'
    lang=en-US>fa</span><span lang=en-US>n, </span><span style='color:#C00000'
    lang=en-US>f</span><span lang=en-US>n, </span><span style='color:#C00000'
    lang=en-US>a</span><span lang=en-US>n</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>+</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>1</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>个或</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> n </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>次，在它之前也必须有内容</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.925in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>b</span><span style='color:#C00000' lang=zh-CN>a</span><span
    lang=zh-CN>+</span><span lang=en-US><span style='mso-spacerun:yes'> 
    </span>-&gt;<span style='mso-spacerun:yes'>  </span>b</span><span
    style='color:#C00000' lang=en-US>a</span><span lang=en-US>, b</span><span
    style='color:#C00000' lang=en-US>are</span><span lang=en-US>, b</span><span
    style='color:#C00000' lang=en-US>ay</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>?</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>0</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>个或</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> 1 </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>次</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>s</span><span style='color:#C00000' lang=zh-CN>a</span><span
    lang=zh-CN>?</span><span lang=en-US><span style='mso-spacerun:yes'> 
    </span>-&gt;<span style='mso-spacerun:yes'>  </span>s</span><span
    style='color:#C00000' lang=en-US>a</span><span lang=en-US>, s</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>{n}</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> n </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>次</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#C00000' lang=zh-CN>b</span><span style='color:#4F4F4F'
    lang=zh-CN>{2}</span><span lang=en-US><span style='mso-spacerun:yes'>  
    </span>-&gt;<span style='mso-spacerun:yes'>  </span></span><span
    style='color:#C00000' lang=zh-CN>bb</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>{n,}</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> n </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>次或着更多次</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>b</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=zh-CN>{2</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=en-US>,} </span><span style='font-family:"Comic Sans MS"'
    lang=en-US><span style='mso-spacerun:yes'> </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bb</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=en-US>, </span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=zh-CN>b</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bb</span><span style='font-family:"Microsoft YaHei UI";
    color:#4F4F4F' lang=zh-CN>，</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=zh-CN>b</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bbb</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>{n,m}</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>配前面的一个字符出现最</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> n </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>～</span><span style='font-family:"Comic Sans MS"' lang=en-US> m</span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>次</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>b</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=zh-CN>{</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=en-US>3,7} </span><span style='font-family:"Comic Sans MS"'
    lang=en-US><span style='mso-spacerun:yes'> </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bbb</span><span style='font-family:"Microsoft YaHei UI";
    color:#4F4F4F' lang=zh-CN>，</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bbbb</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=en-US>bbb</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt' lang=en-US>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>pos</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:7.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>表达式中开始搜索的位置。如果省略，默认值为</span><span
  style='font-family:"Comic Sans MS"'>1</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>occurrence</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>要搜索匹配项的出现次数。如果省略，默认值为</span><span
  style='font-family:"Comic Sans MS"'>1</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2527in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>return_option</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:7.9777in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>返回哪种类型的位置。如果此值为</span><span
  style='font-family:"Comic Sans MS"'> 0</span><span style='font-family:"Microsoft YaHei UI"'>，则</span><span
  style='font-family:"Comic Sans MS"'> REGEXP_INSTR() </span><span
  style='font-family:"Microsoft YaHei UI"'>返回匹配的子字符串的第一个字符的位置。如果此值为</span><span
  style='font-family:"Comic Sans MS"'> 1</span><span style='font-family:"Microsoft YaHei UI"'>，则</span><span
  style='font-family:"Comic Sans MS"'> REGEXP_INSTR() </span><span
  style='font-family:"Microsoft YaHei UI"'>返回匹配子字符串之后的位置。如果省略，则默认值为</span><span
  style='font-family:"Comic Sans MS"'> 0</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>match_type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.1013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>指定如何执行匹配的字符串。</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>c</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>区分大小写的匹配。</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>i</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>不区分大小写的匹配。</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>m</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>多行模式。识别字符串中的行终止符。默认行为是仅在字符串表达式的开头和结尾匹配行终止符。</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>n</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>字符匹配行终止符。默认为</span><span style='font-family:"Comic Sans MS"'
    lang=zh-CN> .</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>匹配到在一行的末尾停止。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>u</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>仅</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>
    Unix </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的行尾。只有换行符被</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN> .</span><span
    style='font-family:"Comic Sans MS"' lang=en-US>,^</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>和</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN> $ </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>匹配运算符识别为以行结尾的行。</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; <span style='color:#2E75B5'>SELECT </span><span
style='color:#C00000'>REGEXP_INSTR</span>('dog cat dog', 'dog');</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+----------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| REGEXP_INSTR('dog cat dog', 'dog')</span><span
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+----------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>|<span
style='mso-spacerun:yes'>                                </span></span><span
lang=en-US><span style='mso-spacerun:yes'>                            </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'>  </span>1 |</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+----------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; <span style='color:#2E75B5'>SELECT </span><span
style='color:#C00000'>REGEXP_INSTR</span>('dog cat dog', 'dog', 2);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+----------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>| REGEXP_INSTR('dog cat dog', 'dog', 2) |</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+----------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>|<span
style='mso-spacerun:yes'>                                  </span></span><span
lang=en-US><span style='mso-spacerun:yes'>                         </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'>   </span>9 |</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+----------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; <span style='color:#2E75B5'>SELECT </span><span
style='color:#C00000'>REGEXP_INSTR</span>('aa aaa aaaa', 'a{2}');</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+----------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| REGEXP_INSTR('aa aaa aaaa', 'a{2}')</span><span
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+----------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>|<span
style='mso-spacerun:yes'>                                </span></span><span
lang=en-US><span style='mso-spacerun:yes'>                           </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'>   </span>1 |</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+----------------------------------------------+</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>REGEXP_LIKE()</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果字符串</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> expr </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>与模式</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> pat </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>指定的正则表达式匹配，则返回</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> 1</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，否则返回</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> 0</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。如果</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> expr </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> pat </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> NULL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，则返回值为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> NULL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#C00000'>REGEXP_LIKE</span>(expr, pat[, match_type])</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:7.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>exp</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>匹配的字符</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>pat</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.1958in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>字符匹配模式，以下模式</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>模式</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>作用</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>适用</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>str</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配包含指定的字符串的文本</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>aa<span style='mso-spacerun:yes'>    </span>-&gt;<span
    style='mso-spacerun:yes'>   </span>aa </p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>[ ]</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配包含指定的字符串的文本</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US><span style='color:black'>[</span><span style='color:#C00000'>ab</span><span
    style='color:black'>]</span><span style='color:#C00000'><span
    style='mso-spacerun:yes'>  </span></span>-&gt;<span
    style='mso-spacerun:yes'>  </span><span style='color:#C00000'>a</span>, <span
    style='color:#C00000'>b</span>, <span style='color:#C00000'>ab</span>, <span
    style='color:#C00000'>b</span>c, <span style='color:#C00000'>a</span>c</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>[^ ]</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配不在括号中的任何字符</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US><span style='color:black'>[</span><span style='color:#C00000'>ab</span><span
    style='color:black'>]</span><span style='color:#C00000'><span
    style='mso-spacerun:yes'>  </span></span>-&gt;<span
    style='mso-spacerun:yes'>  </span>c, cde</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>^</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配字符串的开始位置</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>^</span><span style='color:#C00000' lang=zh-CN>a</span><span
    lang=en-US><span style='mso-spacerun:yes'>  </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span style='color:#C00000'
    lang=en-US>a</span><span lang=en-US>bc</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>$</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配字符串的结束位置</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#C00000' lang=en-US>C</span><span lang=zh-CN>$</span><span
    lang=en-US><span style='mso-spacerun:yes'>  </span>-&gt;<span
    style='mso-spacerun:yes'>  </span>AB</span><span style='color:#C00000'
    lang=en-US>C</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>.</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配任何一个字符，包括回车、换行等。</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=en-US>b</span><span style='color:#C00000' lang=en-US>.</span><span
    lang=en-US>t<span style='mso-spacerun:yes'>  </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>b</span><span
    style='color:#C00000' lang=zh-CN>i</span><span lang=zh-CN>t</span><span
    lang=en-US>, </span><span lang=zh-CN>b</span><span style='color:#C00000'
    lang=zh-CN>a</span><span lang=zh-CN>t</span><span lang=en-US>, </span><span
    lang=zh-CN>b</span><span style='color:#C00000' lang=zh-CN>u</span><span
    lang=zh-CN>t</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>*</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>0</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>个或</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> n </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>次，在它之前必须有内容</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#C00000' lang=en-US>f</span><span lang=zh-CN>*</span><span
    lang=en-US>n<span style='mso-spacerun:yes'>  </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span style='color:#C00000'
    lang=en-US>fa</span><span lang=en-US>n, </span><span style='color:#C00000'
    lang=en-US>f</span><span lang=en-US>n, </span><span style='color:#C00000'
    lang=en-US>a</span><span lang=en-US>n</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>+</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>1</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>个或</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> n </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>次，在它之前也必须有内容</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.925in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>b</span><span style='color:#C00000' lang=zh-CN>a</span><span
    lang=zh-CN>+</span><span lang=en-US><span style='mso-spacerun:yes'> 
    </span>-&gt;<span style='mso-spacerun:yes'>  </span>b</span><span
    style='color:#C00000' lang=en-US>a</span><span lang=en-US>, b</span><span
    style='color:#C00000' lang=en-US>are</span><span lang=en-US>, b</span><span
    style='color:#C00000' lang=en-US>ay</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>?</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>0</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>个或</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> 1 </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>次</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>s</span><span style='color:#C00000' lang=zh-CN>a</span><span
    lang=zh-CN>?</span><span lang=en-US><span style='mso-spacerun:yes'> 
    </span>-&gt;<span style='mso-spacerun:yes'>  </span>s</span><span
    style='color:#C00000' lang=en-US>a</span><span lang=en-US>, s</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>{n}</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> n </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>次</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#C00000' lang=zh-CN>b</span><span style='color:#4F4F4F'
    lang=zh-CN>{2}</span><span lang=en-US><span style='mso-spacerun:yes'>  
    </span>-&gt;<span style='mso-spacerun:yes'>  </span></span><span
    style='color:#C00000' lang=zh-CN>bb</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>{n,}</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> n </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>次或着更多次</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>b</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=zh-CN>{2</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=en-US>,} </span><span style='font-family:"Comic Sans MS"'
    lang=en-US><span style='mso-spacerun:yes'> </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bb</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=en-US>, </span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=zh-CN>b</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bb</span><span style='font-family:"Microsoft YaHei UI";
    color:#4F4F4F' lang=zh-CN>，</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=zh-CN>b</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bbb</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>{n,m}</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>配前面的一个字符出现最</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> n </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>～</span><span style='font-family:"Comic Sans MS"' lang=en-US> m</span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>次</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>b</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=zh-CN>{</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=en-US>3,7} </span><span style='font-family:"Comic Sans MS"'
    lang=en-US><span style='mso-spacerun:yes'> </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bbb</span><span style='font-family:"Microsoft YaHei UI";
    color:#4F4F4F' lang=zh-CN>，</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bbbb</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=en-US>bbb</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt' lang=en-US>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>match_type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:8.1013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>指定如何执行匹配的字符串。</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>c</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>区分大小写的匹配。</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>i</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>不区分大小写的匹配。</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>m</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>多行模式。识别字符串中的行终止符。默认行为是仅在字符串表达式的开头和结尾匹配行终止符。</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>n</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>字符匹配行终止符。默认为</span><span style='font-family:"Comic Sans MS"'
    lang=zh-CN> .</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>匹配到在一行的末尾停止。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>u</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>仅</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>
    Unix </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的行尾。只有换行符被</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN> .</span><span
    style='font-family:"Comic Sans MS"' lang=en-US>,^</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>和</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN> $ </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>匹配运算符识别为以行结尾的行。</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; <span style='color:#2E75B5'>SELECT </span><span
style='color:#C00000'>REGEXP_LIKE</span>('CamelCase', 'CAMELCASE');</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+---------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| REGEXP_LIKE('CamelCase', 'CAMELCASE')</span><span
lang=en-US> </span><span lang=zh-CN><span style='mso-spacerun:yes'> </span>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+---------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>|<span
style='mso-spacerun:yes'>                                     </span></span><span
lang=en-US><span
style='mso-spacerun:yes'>                                </span></span><span
lang=zh-CN>1 |</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+---------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; <span style='color:#2E75B5'>SELECT</span><span
style='color:#C00000'> REGEXP_LIKE</span>('CamelCase', 'CAMELCASE' COLLATE
utf8mb4_0900_as_cs);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+----------------------------------------------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>| REGEXP_LIKE('CamelCase', 'CAMELCASE' COLLATE utf8mb4_0900_as_cs) |</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+----------------------------------------------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>|<span
style='mso-spacerun:yes'>                                                               
</span></span><span lang=en-US><span
style='mso-spacerun:yes'>                                                        </span></span><span
lang=zh-CN>0 |</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+----------------------------------------------------------------------------------------+</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> match_type </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中指定了指定矛盾选项的字符，则最右边的优先。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>默认情况下，正则表达式操作在确定字符类型和执行比较时使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> expr </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> pat </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>参数的字符集和排序规则。如果参数具有不同的字符集或排序规则，则适用强制规则。可以使用显式排序指示符指定参数以更改比较行为。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#70AD47'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>match_type
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
     color:black'>可以用</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:black'> c </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black'>或</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:black'> i </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black'>字符指定以覆盖默认的区分大小写。例外：如果任一参数是二进制字符串，则参数以区分大小写的方式作为二进制字符串处理，即使</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>
     match_type </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black'>包含</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:black'> i </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black'>字符。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:11.0pt;color:#70AD47'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:11.0pt;color:#70AD47'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:11.0pt;color:#70AD47'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt;color:black'><span
style='font-weight:bold'>REGEXP_REPLACE()</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:black'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用替换字符串</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> repl </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>替换字符串</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> expr </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中匹配由模式</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> pat </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>指定的正则表达式的匹配项，并返回结果字符串。如果</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> expr</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>pat </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> repl </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> NULL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，则返回值为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> NULL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>REGEXP_REPLACE(expr, pat, repl[, pos[, occurrence[,
match_type]]])</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:7.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>exp</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>匹配的字符</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>pat</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.1958in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>字符匹配模式，以下模式</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>模式</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>作用</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>适用</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>str</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配包含指定的字符串的文本</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>aa<span style='mso-spacerun:yes'>    </span>-&gt;<span
    style='mso-spacerun:yes'>   </span>aa </p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>[ ]</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配包含指定的字符串的文本</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US><span style='color:black'>[</span><span style='color:#C00000'>ab</span><span
    style='color:black'>]</span><span style='color:#C00000'><span
    style='mso-spacerun:yes'>  </span></span>-&gt;<span
    style='mso-spacerun:yes'>  </span><span style='color:#C00000'>a</span>, <span
    style='color:#C00000'>b</span>, <span style='color:#C00000'>ab</span>, <span
    style='color:#C00000'>b</span>c, <span style='color:#C00000'>a</span>c</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>[^ ]</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配不在括号中的任何字符</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US><span style='color:black'>[</span><span style='color:#C00000'>ab</span><span
    style='color:black'>]</span><span style='color:#C00000'><span
    style='mso-spacerun:yes'>  </span></span>-&gt;<span
    style='mso-spacerun:yes'>  </span>c, cde</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>^</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配字符串的开始位置</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>^</span><span style='color:#C00000' lang=zh-CN>a</span><span
    lang=en-US><span style='mso-spacerun:yes'>  </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span style='color:#C00000'
    lang=en-US>a</span><span lang=en-US>bc</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>$</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配字符串的结束位置</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#C00000' lang=en-US>C</span><span lang=zh-CN>$</span><span
    lang=en-US><span style='mso-spacerun:yes'>  </span>-&gt;<span
    style='mso-spacerun:yes'>  </span>AB</span><span style='color:#C00000'
    lang=en-US>C</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>.</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配任何一个字符，包括回车、换行等。</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=en-US>b</span><span style='color:#C00000' lang=en-US>.</span><span
    lang=en-US>t<span style='mso-spacerun:yes'>  </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>b</span><span
    style='color:#C00000' lang=zh-CN>i</span><span lang=zh-CN>t</span><span
    lang=en-US>, </span><span lang=zh-CN>b</span><span style='color:#C00000'
    lang=zh-CN>a</span><span lang=zh-CN>t</span><span lang=en-US>, </span><span
    lang=zh-CN>b</span><span style='color:#C00000' lang=zh-CN>u</span><span
    lang=zh-CN>t</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>*</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>0</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>个或</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> n </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>次，在它之前必须有内容</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#C00000' lang=en-US>f</span><span lang=zh-CN>*</span><span
    lang=en-US>n<span style='mso-spacerun:yes'>  </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span style='color:#C00000'
    lang=en-US>fa</span><span lang=en-US>n, </span><span style='color:#C00000'
    lang=en-US>f</span><span lang=en-US>n, </span><span style='color:#C00000'
    lang=en-US>a</span><span lang=en-US>n</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>+</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>1</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>个或</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> n </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>次，在它之前也必须有内容</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.925in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>b</span><span style='color:#C00000' lang=zh-CN>a</span><span
    lang=zh-CN>+</span><span lang=en-US><span style='mso-spacerun:yes'> 
    </span>-&gt;<span style='mso-spacerun:yes'>  </span>b</span><span
    style='color:#C00000' lang=en-US>a</span><span lang=en-US>, b</span><span
    style='color:#C00000' lang=en-US>are</span><span lang=en-US>, b</span><span
    style='color:#C00000' lang=en-US>ay</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>?</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>0</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>个或</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> 1 </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>次</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>s</span><span style='color:#C00000' lang=zh-CN>a</span><span
    lang=zh-CN>?</span><span lang=en-US><span style='mso-spacerun:yes'> 
    </span>-&gt;<span style='mso-spacerun:yes'>  </span>s</span><span
    style='color:#C00000' lang=en-US>a</span><span lang=en-US>, s</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>{n}</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> n </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>次</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#C00000' lang=zh-CN>b</span><span style='color:#4F4F4F'
    lang=zh-CN>{2}</span><span lang=en-US><span style='mso-spacerun:yes'>  
    </span>-&gt;<span style='mso-spacerun:yes'>  </span></span><span
    style='color:#C00000' lang=zh-CN>bb</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>{n,}</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> n </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>次或着更多次</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>b</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=zh-CN>{2</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=en-US>,} </span><span style='font-family:"Comic Sans MS"'
    lang=en-US><span style='mso-spacerun:yes'> </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bb</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=en-US>, </span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=zh-CN>b</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bb</span><span style='font-family:"Microsoft YaHei UI";
    color:#4F4F4F' lang=zh-CN>，</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=zh-CN>b</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bbb</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>{n,m}</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>配前面的一个字符出现最</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> n </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>～</span><span style='font-family:"Comic Sans MS"' lang=en-US> m</span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>次</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>b</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=zh-CN>{</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=en-US>3,7} </span><span style='font-family:"Comic Sans MS"'
    lang=en-US><span style='mso-spacerun:yes'> </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bbb</span><span style='font-family:"Microsoft YaHei UI";
    color:#4F4F4F' lang=zh-CN>，</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bbbb</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=en-US>bbb</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt' lang=en-US>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>pos</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:7.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>表达式中开始搜索的位置。如果省略，默认值为</span><span
  style='font-family:"Comic Sans MS"'>1</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>occurrence</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>要替换匹配项的哪个匹配项。如果省略，默认值为</span><span
  style='font-family:"Comic Sans MS"'>0</span><span style='font-family:"Microsoft YaHei UI"'>（表示“替换所有引用”）。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>match_type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:8.1013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>指定如何执行匹配的字符串。</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>c</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>区分大小写的匹配。</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>i</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>不区分大小写的匹配。</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>m</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>多行模式。识别字符串中的行终止符。默认行为是仅在字符串表达式的开头和结尾匹配行终止符。</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>n</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>字符匹配行终止符。默认为</span><span style='font-family:"Comic Sans MS"'
    lang=zh-CN> .</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>匹配到在一行的末尾停止。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>u</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>仅</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>
    Unix </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的行尾。只有换行符被</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN> .</span><span
    style='font-family:"Comic Sans MS"' lang=en-US>,^</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>和</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN> $ </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>匹配运算符识别为以行结尾的行。</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>mysql&gt; </span><span style='color:#2E75B5'>SELECT
</span><span style='color:#C00000'>REGEXP_REPLACE</span><span style='color:
black'>('a b c', 'b', 'X');</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>+-------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'><span lang=zh-CN>| REGEXP_REPLACE('a b c', 'b', 'X')</span><span
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>+-------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'><span lang=zh-CN>| a X c<span
style='mso-spacerun:yes'>                          </span></span><span
lang=en-US><span style='mso-spacerun:yes'>                      </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'>   </span>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>+-------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>mysql&gt; </span><span style='color:#2E75B5'>SELECT
</span><span style='color:#C00000'>REGEXP_REPLACE</span><span style='color:
black'>('abc def ghi', '[a-z]+', 'X', 1, 3);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>+------------------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'><span lang=zh-CN>| REGEXP_REPLACE('abc def ghi', '[a-z]+',
'X', 1, 3)</span><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'> </span>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>+------------------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'><span lang=zh-CN>| abc def X<span
style='mso-spacerun:yes'>                                          </span></span><span
lang=en-US><span style='mso-spacerun:yes'>                          </span></span><span
lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>+------------------------------------------------------------+</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:black'><span style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:black'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL 8.0.17 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>之前，该函数返回的结果使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> UTF-16 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>字符集；在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL 8.0.17 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>及更高版本中，使用搜索匹配的表达式的字符集和排序规则。
     （错误</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'>
     #94203</span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、错误</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> #29308212</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>）</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:13.5pt;color:black'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt;color:black'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt;color:black'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt;color:black'><span
style='font-weight:bold'>REGEXP_SUBSTR()</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>返回与模式</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> pat </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>指定的正则表达式匹配的字符串</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> expr </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的子字符串，如果没有匹配则返回</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> NULL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。如果</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> expr </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> pat </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> NULL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，则返回值为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> NULL</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>REGEXP_SUBSTR(expr, pat[, pos[, occurrence[, match_type]]])</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:7.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>exp</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>匹配的字符</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>pat</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.1958in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>字符匹配模式，以下模式</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>模式</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>作用</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>适用</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>str</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配包含指定的字符串的文本</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>aa<span style='mso-spacerun:yes'>    </span>-&gt;<span
    style='mso-spacerun:yes'>   </span>aa </p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>[ ]</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配包含指定的字符串的文本</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US><span style='color:black'>[</span><span style='color:#C00000'>ab</span><span
    style='color:black'>]</span><span style='color:#C00000'><span
    style='mso-spacerun:yes'>  </span></span>-&gt;<span
    style='mso-spacerun:yes'>  </span><span style='color:#C00000'>a</span>, <span
    style='color:#C00000'>b</span>, <span style='color:#C00000'>ab</span>, <span
    style='color:#C00000'>b</span>c, <span style='color:#C00000'>a</span>c</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>[^ ]</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配不在括号中的任何字符</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US><span style='color:black'>[</span><span style='color:#C00000'>ab</span><span
    style='color:black'>]</span><span style='color:#C00000'><span
    style='mso-spacerun:yes'>  </span></span>-&gt;<span
    style='mso-spacerun:yes'>  </span>c, cde</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>^</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配字符串的开始位置</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>^</span><span style='color:#C00000' lang=zh-CN>a</span><span
    lang=en-US><span style='mso-spacerun:yes'>  </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span style='color:#C00000'
    lang=en-US>a</span><span lang=en-US>bc</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>$</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配字符串的结束位置</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#C00000' lang=en-US>C</span><span lang=zh-CN>$</span><span
    lang=en-US><span style='mso-spacerun:yes'>  </span>-&gt;<span
    style='mso-spacerun:yes'>  </span>AB</span><span style='color:#C00000'
    lang=en-US>C</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>.</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配任何一个字符，包括回车、换行等。</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=en-US>b</span><span style='color:#C00000' lang=en-US>.</span><span
    lang=en-US>t<span style='mso-spacerun:yes'>  </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>b</span><span
    style='color:#C00000' lang=zh-CN>i</span><span lang=zh-CN>t</span><span
    lang=en-US>, </span><span lang=zh-CN>b</span><span style='color:#C00000'
    lang=zh-CN>a</span><span lang=zh-CN>t</span><span lang=en-US>, </span><span
    lang=zh-CN>b</span><span style='color:#C00000' lang=zh-CN>u</span><span
    lang=zh-CN>t</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>*</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>0</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>个或</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> n </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>次，在它之前必须有内容</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#C00000' lang=en-US>f</span><span lang=zh-CN>*</span><span
    lang=en-US>n<span style='mso-spacerun:yes'>  </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span style='color:#C00000'
    lang=en-US>fa</span><span lang=en-US>n, </span><span style='color:#C00000'
    lang=en-US>f</span><span lang=en-US>n, </span><span style='color:#C00000'
    lang=en-US>a</span><span lang=en-US>n</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>+</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>1</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>个或</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> n </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>次，在它之前也必须有内容</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.925in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>b</span><span style='color:#C00000' lang=zh-CN>a</span><span
    lang=zh-CN>+</span><span lang=en-US><span style='mso-spacerun:yes'> 
    </span>-&gt;<span style='mso-spacerun:yes'>  </span>b</span><span
    style='color:#C00000' lang=en-US>a</span><span lang=en-US>, b</span><span
    style='color:#C00000' lang=en-US>are</span><span lang=en-US>, b</span><span
    style='color:#C00000' lang=en-US>ay</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>?</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>0</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>个或</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> 1 </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>次</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    lang=zh-CN>s</span><span style='color:#C00000' lang=zh-CN>a</span><span
    lang=zh-CN>?</span><span lang=en-US><span style='mso-spacerun:yes'> 
    </span>-&gt;<span style='mso-spacerun:yes'>  </span>s</span><span
    style='color:#C00000' lang=en-US>a</span><span lang=en-US>, s</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>{n}</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> n </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>次</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#C00000' lang=zh-CN>b</span><span style='color:#4F4F4F'
    lang=zh-CN>{2}</span><span lang=en-US><span style='mso-spacerun:yes'>  
    </span>-&gt;<span style='mso-spacerun:yes'>  </span></span><span
    style='color:#C00000' lang=zh-CN>bb</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>{n,}</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>配前面的一个字符出现</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> n </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>次或着更多次</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>b</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=zh-CN>{2</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=en-US>,} </span><span style='font-family:"Comic Sans MS"'
    lang=en-US><span style='mso-spacerun:yes'> </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bb</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=en-US>, </span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=zh-CN>b</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bb</span><span style='font-family:"Microsoft YaHei UI";
    color:#4F4F4F' lang=zh-CN>，</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=zh-CN>b</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bbb</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>{n,m}</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>配前面的一个字符出现最</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> n </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>～</span><span style='font-family:"Comic Sans MS"' lang=en-US> m</span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>次</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>b</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=zh-CN>{</span><span style='font-family:"Comic Sans MS";
    color:#4F4F4F' lang=en-US>3,7} </span><span style='font-family:"Comic Sans MS"'
    lang=en-US><span style='mso-spacerun:yes'> </span>-&gt;<span
    style='mso-spacerun:yes'>  </span></span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bbb</span><span style='font-family:"Microsoft YaHei UI";
    color:#4F4F4F' lang=zh-CN>，</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=zh-CN>bbbb</span><span style='font-family:"Comic Sans MS";
    color:#C00000' lang=en-US>bbb</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt' lang=en-US>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>pos</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:7.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>表达式中开始搜索的位置。如果省略，默认值为</span><span
  style='font-family:"Comic Sans MS"'>1</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>occurrence</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>要搜索的匹配项。如果省略，默认为</span><span
  style='font-family:"Comic Sans MS"'> 1</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>match_type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:8.1013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>指定如何执行匹配的字符串。</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>c</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>区分大小写的匹配。</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>i</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>不区分大小写的匹配。</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>m</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>多行模式。识别字符串中的行终止符。默认行为是仅在字符串表达式的开头和结尾匹配行终止符。</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>n</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>字符匹配行终止符。默认为</span><span style='font-family:"Comic Sans MS"'
    lang=zh-CN> .</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>匹配到在一行的末尾停止。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>u</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:6.8756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>仅</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>
    Unix </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的行尾。只有换行符被</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN> .</span><span
    style='font-family:"Comic Sans MS"' lang=en-US>,^</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>和</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN> $ </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>匹配运算符识别为以行结尾的行。</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; <span style='color:#2E75B5'>SELECT </span><span
style='color:#C00000'>REGEXP_SUBSTR</span>('abc def ghi', '[a-z]+');</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| REGEXP_SUBSTR('abc def ghi', '[a-z]+')</span><span
lang=en-US> </span><span lang=zh-CN><span style='mso-spacerun:yes'> </span>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| abc<span
style='mso-spacerun:yes'>                                </span></span><span
lang=en-US><span style='mso-spacerun:yes'>                         </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'>    </span>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; <span style='color:#2E75B5'>SELECT </span><span
style='color:#C00000'>REGEXP_SUBSTR</span>('abc def ghi', '[a-z]+', 1, 3);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+-----------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>| REGEXP_SUBSTR('abc def ghi', '[a-z]+', 1, 3) |</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+-----------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| ghi<span
style='mso-spacerun:yes'>                                          </span></span><span
lang=en-US><span style='mso-spacerun:yes'>                          </span></span><span
lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+-----------------------------------------------------+</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:black'><span style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL 8.0.17 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>之前，该函数返回的结果使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> UTF-16 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>字符集；在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL 8.0.17 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>及更高版本中，使用搜索匹配的表达式的字符集和排序规则。
     （错误</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'>
     #94203</span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、错误</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> #29308212</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>）</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/regexp.html#function_regexp-instr"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/regexp.html#function_regexp-instr</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
