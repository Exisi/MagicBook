---
categories:
  - MySQL
tags:
  - DQL
  - SELECT
  - LIKE
  - NOT LIKE
date:
  - 2023-2-11 17:10:13
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.9909in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.9909in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:11pt'><span style='font-family:"Comic Sans MS";font-size:
     12.0pt'>LIKE </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>关键字主要用于搜索匹配字段中的指定内容</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:11pt'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>使用</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>LIKE</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>，可以使用模式中的两个通配符如下：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.6923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:0pt;margin-bottom:11pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:white'><span style='font-weight:bold'>通配符</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.9562in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.0868in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>适用</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.6729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:0pt;margin-bottom:11pt;font-family:"Comic Sans MS";
  font-size:11.5pt' lang=en-US>%</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.9756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>匹配任意数量的字符，
  甚至零个字符。</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.2909in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>匹配模式</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:2.1486in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>A%</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.1486in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配开头</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>%A</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.1486in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配结尾</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>%A%</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.1486in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>匹配中间</p>
    </td>
   </tr>
  </table>
  </div>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.6729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:0pt;margin-bottom:11pt;font-family:"Comic Sans MS";
  font-size:11.5pt'>_</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.9562in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>只匹配一个字符</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.3013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>匹配模式</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:2.159in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>A_</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.159in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配两个字符，且开头为</span><span style='font-family:"Comic Sans MS"'
    lang=en-US>A</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>_A</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.159in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配两个字符，且结尾为</span><span style='font-family:"Comic Sans MS"'
    lang=en-US>A</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:.9798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>_A_</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.159in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>匹配三个字符，且中间为</span><span style='font-family:"Comic Sans MS"'
    lang=en-US>A</span></p>
    </td>
   </tr>
  </table>
  </div>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.6729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[ ]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.9562in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>匹配任意一个字符在正则中的字符</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>[ABC]<span style='mso-spacerun:yes'>  </span></span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>——</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>&gt; A, B, C, AB, AC, BC</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.6729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.0pt'>[^]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.9562in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>匹配任意一个字符不在正则中的字符</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>[ABC]<span style='mso-spacerun:yes'>  </span></span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>——</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>&gt; D, DE</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>要测试通配符的文字实例，请在其前面加上转义符。如果未指定</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ESCAPE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>字符，则假定为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>\</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，除非启用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>NO_BACKSLASH_ESCAPES
     SQL</span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>模式。在这种情况下，不使用转义字符。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>expr <span style='color:#2E75B5'>LIKE</span> pat [<span
style='color:#2E75B5'>ESCAPE</span> 'escape_char']</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.3583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.5701in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>pat</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.5701in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>匹配字段</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>escape_char</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.5701in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>排除转义字符，类似</span><span style='font-family:"Comic Sans MS"'
  lang=en-US>%_[]</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>等字符</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>%'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'%</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'%</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>%'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>_'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'_</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'_</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>_'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'[</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张李王</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>]'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'[</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张李王</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>]</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>四</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'[^</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张李王</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>]'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'[^</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张李王</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>]</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>四</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>如果不使用通配符，其等价于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> = </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>运算符</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>模糊搜索无法搜索</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> NULL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>值</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Microsoft YaHei UI"' lang=zh-CN>反向模糊查询（</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>NOT LIKE</span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>）</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>NOT </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>LIKE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>关键字与</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>LIKE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>相反，主要用于搜索字段中不匹配的指定内容</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>expr</span><span lang=en-US> </span><span
style='color:#2E75B5' lang=en-US>NOT</span><span lang=zh-CN> </span><span
style='color:#2E75B5' lang=zh-CN>LIKE</span><span lang=zh-CN> pat [</span><span
style='color:#2E75B5' lang=zh-CN>ESCAPE</span><span lang=zh-CN> 'escape_char']</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.3583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.5701in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>pat</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.5701in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>匹配字段</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>escape_char</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.5701in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>排除转义字符</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>NOT LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>%'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>NOT LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'%</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>NOT LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'%</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>%'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>NOT LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>_'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>NOT LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'_</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>NOT LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'_</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>_'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>NOT LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'[</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张李王</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>]'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>NOT LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'[</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张李王</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>]</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>四</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>NOT LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'[^</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张李王</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>]'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=en-US> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> name </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>NOT LIKE </span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'[^</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张李王</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>]</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>四</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=en-US>'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>;</span></p>

<p style='margin-top:0pt;margin-bottom:11pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#555555'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/string-comparison-functions.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/string-comparison-functions.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
