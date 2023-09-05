---
categories:
  - MySQL
tags:
  - SELECT
  - REGEXP
  - RLIKE
  - NOT REGEXP
  - NOT RLIKE
date:
  - 2023-2-14 13:00:13
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.3944in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.3944in'>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.2006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>正则关键字</span></p>
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
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>REGEXP</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>字符串是否与正则表达式匹配</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.2006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>RLIKE</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>字符串是否与正则表达式匹配</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.2006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>NOT REGEXP</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>正则表达式的否定</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.2006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=zh-CN>NOT </span><span lang=en-US>LIKE</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.8604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>正则表达式的否定</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> REGEXP /
     RLIKE </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>关键字指定正则表达式的字符匹配模式。下表列出了</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>REGEXP</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>操作符中常用字符匹配列表</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> REGEXP </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> RLIKE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>关键字属于同义词，功能相同</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>exp <span style='color:#C00000'>REGEXP </span>pat</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>exp <span style='color:#C00000'>RLIKE </span>pat</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.9506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  vertical-align:top;width:.9506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  background-color:#E7E6E6;vertical-align:top;width:.9506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt;color:#70AD47'><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>#</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>查找</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>name</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>字段中包含</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>'ma'</span><span style='font-family:"Comic Sans MS"'
lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>字符串的所有数据</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span> name</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>FROM</span> person_tbl </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>WHERE</span> name <span style='color:#C00000'>REGEXP
</span><span style='color:#70AD47'>'ma'</span>;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span> name </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>FROM</span> person_tbl </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>WHERE</span><span lang=zh-CN>
name </span><span style='color:#C00000' lang=en-US>LIKE</span><span
style='color:#C00000' lang=zh-CN> </span><span style='color:#70AD47'
lang=zh-CN>'ma'</span><span lang=zh-CN>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt;color:#70AD47'><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>#</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>查找</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>name</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>字段中以</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-weight:
bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>‘</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>s</span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>’</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>开头的</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的所有数据</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span> name </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>FROM</span> person_tbl </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>WHERE</span> name <span style='color:#C00000'>REGEXP
</span><span style='color:#70AD47'>'^st'</span>;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#2E75B5'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span> name </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>FROM</span> person_tbl </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>WHERE</span><span lang=zh-CN>
name </span><span style='color:#C00000' lang=en-US>LIKE</span><span
style='color:#C00000' lang=zh-CN> </span><span style='color:#70AD47'
lang=zh-CN>'^st'</span><span lang=zh-CN>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt;color:#70AD47'><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>#</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>查找</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>name</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>字段中以</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>'ok'</span><span style='font-family:"Comic Sans MS"'
lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>为结尾的所有数据</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span> name </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>FROM</span> person_tbl </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>WHERE</span> name <span style='color:#C00000'>REGEXP
</span><span style='color:#70AD47'>'ok$'</span>;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span> name </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>FROM</span> person_tbl </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>WHERE</span><span lang=zh-CN>
name </span><span style='color:#C00000' lang=en-US>LIKE</span><span
style='color:#C00000' lang=zh-CN> </span><span style='color:#70AD47'
lang=zh-CN>'ok$'</span><span lang=zh-CN>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Microsoft YaHei UI"' lang=zh-CN>反向正则匹配（</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>NOT REGEXP /
NOT RLIKE</span><span style='font-weight:bold;font-family:"Microsoft YaHei UI"'
lang=zh-CN>）</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>NOT R</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>LIKE </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>/ NOT
     REGEXP </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt' lang=zh-CN>关键字与</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> REGEXP /<span style='mso-spacerun:yes'> 
     </span>RLIKE</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt' lang=zh-CN> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>相反，用于搜索字段中与正则相反匹配的内容</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US>exp</span><span style='color:#C00000' lang=en-US> NOT
REGEXP </span><span lang=zh-CN>pat</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US>exp </span><span style='color:#C00000' lang=en-US>NOT
RLIKE </span><span lang=zh-CN>pat</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt;color:#70AD47'><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>#</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>查找</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>name</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>字段中不包含</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>'ma'</span><span style='font-family:"Comic Sans MS"'
lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>字符串的所有数据</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span> name</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>FROM</span> person_tbl </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>WHERE</span><span lang=zh-CN>
name </span><span style='color:#C00000' lang=en-US>NOT </span><span
style='color:#C00000' lang=zh-CN>REGEXP </span><span style='color:#70AD47'
lang=zh-CN>'ma'</span><span lang=zh-CN>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span> name </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>FROM</span> person_tbl </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>WHERE</span><span lang=zh-CN>
name </span><span style='color:#C00000' lang=en-US>NOT LIKE</span><span
style='color:#C00000' lang=zh-CN> </span><span style='color:#70AD47'
lang=zh-CN>'ma'</span><span lang=zh-CN>;</span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
