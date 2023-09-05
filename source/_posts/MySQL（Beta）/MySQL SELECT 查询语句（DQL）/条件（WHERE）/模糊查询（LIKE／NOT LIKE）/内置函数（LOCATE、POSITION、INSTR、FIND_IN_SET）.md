---
categories:
  - MySQL
tags:
  - LOCATE
  - POSITION
  - INSTR
  - FIND_IN_SET
date:
  - 2023-2-12 12:10:13
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.8159in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.8159in'>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.2604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>函数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.0923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.2604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN>LOCATE</span><span
  lang=en-US>(</span><span lang=zh-CN>substr,str</span><span lang=en-US>)</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.1479in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>返回字符串</span><span
  style='font-family:"Comic Sans MS"'> str</span><span style='font-family:"Microsoft YaHei UI"'>中字符串</span><span
  style='font-family:"Comic Sans MS"'>substr</span><span style='font-family:
  "Microsoft YaHei UI"'>的第一个出现位置，若</span><span style='font-family:"Comic Sans MS"'>substr
  </span><span style='font-family:"Microsoft YaHei UI"'>不在</span><span
  style='font-family:"Comic Sans MS"'>str</span><span style='font-family:"Microsoft YaHei UI"'>中，则返回值为</span><span
  style='font-family:"Comic Sans MS"'>0</span><span style='font-family:"Microsoft YaHei UI"'>，不区分大小写</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.2798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=zh-CN>LOCATE</span><span lang=en-US>(</span><span lang=zh-CN>substr,
  str, [pos]</span><span lang=en-US>)</span><span lang=zh-CN> </span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>返回字符串</span><span
  style='font-family:"Comic Sans MS"'>str</span><span style='font-family:"Microsoft YaHei UI"'>中子字符串</span><span
  style='font-family:"Comic Sans MS"'>substr</span><span style='font-family:
  "Microsoft YaHei UI"'>的第一个出现位置</span><span style='font-family:"Comic Sans MS"'>,
  </span><span style='font-family:"Microsoft YaHei UI"'>起始位置在</span><span
  style='font-family:"Comic Sans MS"'>pos</span><span style='font-family:"Microsoft YaHei UI"'>，若</span><span
  style='font-family:"Comic Sans MS"'>substr </span><span style='font-family:
  "Microsoft YaHei UI"'>不在</span><span style='font-family:"Comic Sans MS"'>str</span><span
  style='font-family:"Microsoft YaHei UI"'>中，则返回值为</span><span
  style='font-family:"Comic Sans MS"'>0</span><span style='font-family:"Microsoft YaHei UI"'>，不区分大小写</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.2604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>POSITION(substr
  IN str)</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.1006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>返回字符串</span><span
  style='font-family:"Comic Sans MS"'>str</span><span style='font-family:"Microsoft YaHei UI"'>中子字符串</span><span
  style='font-family:"Comic Sans MS"'>substr</span><span style='font-family:
  "Microsoft YaHei UI"'>的第一个出现位置。，若</span><span style='font-family:"Comic Sans MS"'>substr
  </span><span style='font-family:"Microsoft YaHei UI"'>不在</span><span
  style='font-family:"Comic Sans MS"'>str</span><span style='font-family:"Microsoft YaHei UI"'>中，则返回值为</span><span
  style='font-family:"Comic Sans MS"'>0</span><span style='font-family:"Microsoft YaHei UI"'>，不区分大小写</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.2604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>INSTR(str,substr)</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.1611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>查找到的字符串的位置。如果没有查找到，返回</span><span
  style='font-family:"Comic Sans MS"'>0</span><span style='font-family:"Microsoft YaHei UI"'>。不区分大小写</span></p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
  style='font-weight:bold'>注</span></p>
  <p style='margin-left:.375in;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>如果</span><span style='font-family:
  "Comic Sans MS"'>start</span><span style='font-family:"Microsoft YaHei UI"'>的值为负数，则代表从右往左进行查找，但是位置数据仍然从左向右计算。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.2604in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>FIND_IN_SET(str,strlist)</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.0923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>s</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>trlist</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>是一个由一些被</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>(</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>‘</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>,</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>’</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>)</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>符号分开的自链组成的字符串</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果</span><span
  style='font-family:"Comic Sans MS"'>str</span><span style='font-family:"Microsoft YaHei UI"'>不在</span><span
  style='font-family:"Comic Sans MS"'>strlist </span><span style='font-family:
  "Microsoft YaHei UI"'>或</span><span style='font-family:"Comic Sans MS"'>strlist
  </span><span style='font-family:"Microsoft YaHei UI"'>为空字符串，则返回值为</span><span
  style='font-family:"Comic Sans MS"'> 0</span><span style='font-family:"Microsoft YaHei UI"'>。不区分大小写</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>通过内置函数</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>LOCATE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>POSITION</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>INSTR</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>进行匹配，相当于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Java</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>str.contains()</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>方法，返回的是匹配内容在字符串中的位置，效率和可用性上都优于通配符匹配。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>LOCATE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>POSITION</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>INSTR </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>函数可以用于代替</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> LIKE %A% </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>模糊搜索方式，速度会相对比后者快，但是不区分字符串大小写</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=zh-CN>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span style='font-family:
"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span style='font-family:
"Comic Sans MS";color:#2E75B5' lang=zh-CN> </span><span style='font-family:
"Comic Sans MS";color:#C00000' lang=zh-CN>INSTR</span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>(`</span><span style='font-family:"Comic Sans MS"'
lang=en-US>user</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>Name`,
</span><span style='font-family:"Comic Sans MS";color:#70AD47' lang=zh-CN>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=zh-CN>'</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>) &gt; 0;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=zh-CN>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM </span><span
style='font-family:"Comic Sans MS"' lang=en-US>user</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span style='font-family:
"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span style='font-family:
"Comic Sans MS"' lang=zh-CN> </span><span style='font-family:"Comic Sans MS";
color:#C00000' lang=zh-CN>LOCATE</span><span style='font-family:"Comic Sans MS"'
lang=zh-CN>(</span><span style='font-family:"Comic Sans MS";color:#70AD47'
lang=zh-CN>'</span><span style='font-family:"Microsoft YaHei UI";color:#70AD47'
lang=zh-CN>张</span><span style='font-family:"Comic Sans MS";color:#70AD47'
lang=zh-CN>'</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>, `</span><span
style='font-family:"Comic Sans MS"' lang=en-US>user</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>Name`) &gt; 0;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=zh-CN>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM </span><span
style='font-family:"Comic Sans MS"' lang=en-US>user</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span style='font-family:
"Comic Sans MS";color:#2E75B5' lang=en-US>WHERE</span><span style='font-family:
"Comic Sans MS";color:#C00000' lang=zh-CN> POSITION</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>( </span><span style='font-family:
"Comic Sans MS";color:#70AD47' lang=zh-CN>'</span><span style='font-family:
"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>张</span><span style='font-family:
"Comic Sans MS";color:#70AD47' lang=zh-CN>'</span><span style='font-family:
"Comic Sans MS"' lang=zh-CN> IN `</span><span style='font-family:"Comic Sans MS"'
lang=en-US>user</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>Name`)
&gt; 0;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如上，三种内置函数默认都是：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&gt; 0</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，所以下列</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> &gt; 0 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>可加可不加，加上可读性更好。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>MySQL</span><span style='font-family:"Microsoft YaHei UI"'>中的角标从左往右是从</span><span
style='font-family:"Comic Sans MS"'>1</span><span style='font-family:"Microsoft YaHei UI"'>开始的，因此在</span><span
style='font-family:"Comic Sans MS"'>MySQL</span><span style='font-family:"Microsoft YaHei UI"'>中角标为</span><span
style='font-family:"Comic Sans MS"'>0</span><span style='font-family:"Microsoft YaHei UI"'>时说明不存在。</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold' lang=zh-CN>LOCATE</span><span style='font-weight:bold'
lang=en-US>()</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN><span
     style='mso-spacerun:yes'> </span>LOCATE</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US>() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>函数可以指定寻找</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>str</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>出现的位置，相比</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> LIKE %A% </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>模糊搜索方式更灵活</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#C00000' lang=zh-CN>LOCATE</span><span lang=en-US>(</span><span
lang=zh-CN>substr,str</span><span lang=en-US>)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>返回</span><span style='font-family:
"Comic Sans MS"'> substr </span><span style='font-family:"Microsoft YaHei UI"'>在</span><span
style='font-family:"Comic Sans MS"'> str </span><span style='font-family:"Microsoft YaHei UI"'>中第一次出现的位置。如果</span><span
style='font-family:"Comic Sans MS"'> substr </span><span style='font-family:
"Microsoft YaHei UI"'>在</span><span style='font-family:"Comic Sans MS"'> str </span><span
style='font-family:"Microsoft YaHei UI"'>中不存在，返回值为</span><span
style='font-family:"Comic Sans MS"'> 0</span><span style='font-family:"Microsoft YaHei UI"'>，如果</span><span
style='font-family:"Comic Sans MS"'>substr </span><span style='font-family:
"Microsoft YaHei UI"'>在</span><span style='font-family:"Comic Sans MS"'> str </span><span
style='font-family:"Microsoft YaHei UI"'>中存在，返回值为：</span><span
style='font-family:"Comic Sans MS"'>substr </span><span style='font-family:
"Microsoft YaHei UI"'>在</span><span style='font-family:"Comic Sans MS"'> str</span><span
style='font-family:"Microsoft YaHei UI"'>中第一次出现的位置。 </span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#C00000' lang=zh-CN>LOCATE</span><span lang=en-US>(</span><span
lang=zh-CN>substr, str, [pos]</span><span lang=en-US>)</span><span lang=zh-CN> </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>从位置</span><span style='font-family:
"Comic Sans MS"'>pos</span><span style='font-family:"Microsoft YaHei UI"'>开始的字符串</span><span
style='font-family:"Comic Sans MS"'>str</span><span style='font-family:"Microsoft YaHei UI"'>中第一次出现子字符串</span><span
style='font-family:"Comic Sans MS"'>substr</span><span style='font-family:"Microsoft YaHei UI"'>的位置。
如果</span><span style='font-family:"Comic Sans MS"'>substr</span><span
style='font-family:"Microsoft YaHei UI"'>不在</span><span style='font-family:
"Comic Sans MS"'>str</span><span style='font-family:"Microsoft YaHei UI"'>中，则返回</span><span
style='font-family:"Comic Sans MS"'>0</span><span style='font-family:"Microsoft YaHei UI"'>。
如果</span><span style='font-family:"Comic Sans MS"'>substr</span><span
style='font-family:"Microsoft YaHei UI"'>或</span><span style='font-family:"Comic Sans MS"'>str</span><span
style='font-family:"Microsoft YaHei UI"'>为</span><span style='font-family:"Comic Sans MS"'>NULL</span><span
style='font-family:"Microsoft YaHei UI"'>，则返回</span><span style='font-family:
"Comic Sans MS"'>NULL</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT </span><span style='color:#C00000'>LOCATE</span>('<span
style='color:#70AD47'>a'</span>, <span style='color:#70AD47'>'banana'</span>);<span
style='mso-spacerun:yes'>       </span>-- 2<br>
<span style='color:#2E75B5'>SELECT </span><span style='color:#C00000'>LOCATE</span>('a',
<span style='color:#70AD47'>'banana'</span>, 3);<span
style='mso-spacerun:yes'>    </span>-- 4<br>
<span style='color:#2E75B5'>SELECT </span><span style='color:#C00000'>LOCATE</span>('z',
<span style='color:#70AD47'>'banana'</span>);<span
style='mso-spacerun:yes'>       </span>-- 0<br>
<span style='color:#2E75B5'>SELECT </span><span style='color:#C00000'>LOCATE</span>(10,
<span style='color:#70AD47'>'banana'</span>);<span
style='mso-spacerun:yes'>        </span>-- 0<br>
<span style='color:#2E75B5'>SELECT </span><span style='color:#C00000'>LOCATE</span>(<span
style='color:#C00000'>NULL</span> , <span style='color:#70AD47'>'banana'</span>);<span
style='mso-spacerun:yes'>     </span>-- null<br>
<span style='color:#2E75B5'>SELECT </span><span style='color:#C00000'>LOCATE</span>('a'
, <span style='color:#C00000'>NULL</span> );<span
style='mso-spacerun:yes'>         </span>-- null</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=zh-CN>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span style='font-family:
"Comic Sans MS"' lang=en-US>app_info</span><span style='font-family:"Comic Sans MS"'
lang=zh-CN> </span><span style='font-family:"Comic Sans MS";color:#2E75B5'
lang=en-US>WHERE</span><span style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span
style='font-family:"Comic Sans MS";color:#C00000' lang=zh-CN>LOCATE</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>(</span><span style='font-family:
"Comic Sans MS";color:#70AD47' lang=zh-CN>'</span><span style='font-family:
"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>网</span><span style='font-family:
"Comic Sans MS";color:#70AD47' lang=zh-CN>'</span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>, `appName`) &gt; 0;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>LOCATE</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>关键字进行模糊匹配</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>, </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>从第二个字符开始匹配</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&quot;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>网</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&quot;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，则</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&quot;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>网易云音乐、网易有道翻译</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&quot;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>等数据就被过滤了</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=zh-CN>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span style='font-family:
"Comic Sans MS"' lang=en-US>app_info</span><span style='font-family:"Comic Sans MS"'
lang=zh-CN> </span><span style='font-family:"Comic Sans MS";color:#2E75B5'
lang=en-US>WHERE</span><span style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span
style='font-family:"Comic Sans MS";color:#C00000' lang=zh-CN>LOCATE</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>(</span><span style='font-family:
"Comic Sans MS";color:#70AD47' lang=zh-CN>'</span><span style='font-family:
"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>网</span><span style='font-family:
"Comic Sans MS";color:#70AD47' lang=zh-CN>'</span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>, `appName`, 2) &gt; 0;</span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>POSITION()</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>POSITION</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>函数和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>LOCATE</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>函数作用相同。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#C00000'>POSITION</span>(substr IN substr)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>返回字符串</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>str</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中子字符串</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>substr</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的第一个出现位置。，若</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>substr </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>不在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>str</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中，则返回值为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>0</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，不区分大小写</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=zh-CN>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span style='font-family:
"Comic Sans MS"' lang=en-US>app_info</span><span style='font-family:"Comic Sans MS"'
lang=zh-CN> </span><span style='font-family:"Comic Sans MS";color:#2E75B5'
lang=en-US>WHERE</span><span style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span
style='font-family:"Comic Sans MS";color:#C00000' lang=zh-CN>POSITION</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>( </span><span style='font-family:
"Comic Sans MS";color:#70AD47' lang=zh-CN>'</span><span style='font-family:
"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>网</span><span style='font-family:
"Comic Sans MS";color:#70AD47' lang=zh-CN>'</span><span style='font-family:
"Comic Sans MS"' lang=zh-CN> IN `appName`)</span><span style='font-family:"Comic Sans MS"'
lang=en-US> &gt; 0 </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>;</span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>INSTR()</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>INSTR(</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>) </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>函数和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>LOCATE</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>函数作用相同，区别是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>INSTR(</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>) </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>函数的参数的顺序相反</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#C00000'>INSTR</span>(str,substr) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>返回字符串</span><span style='font-family:
"Comic Sans MS"'>str</span><span style='font-family:"Microsoft YaHei UI"'>中第一次出现子字符串</span><span
style='font-family:"Comic Sans MS"'>substr</span><span style='font-family:"Microsoft YaHei UI"'>的位置。
如果</span><span style='font-family:"Comic Sans MS"'> substr </span><span
style='font-family:"Microsoft YaHei UI"'>在</span><span style='font-family:"Comic Sans MS"'>
str </span><span style='font-family:"Microsoft YaHei UI"'>中不存在，返回值为</span><span
style='font-family:"Comic Sans MS"'> 0</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=zh-CN>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> * </span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>FROM</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span style='font-family:
"Comic Sans MS"' lang=en-US>app_info</span><span style='font-family:"Comic Sans MS"'
lang=zh-CN> </span><span style='font-family:"Comic Sans MS";color:#2E75B5'
lang=en-US>WHERE </span><span style='font-family:"Comic Sans MS";color:#C00000'
lang=zh-CN>INSTR</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>(`appName`,
</span><span style='font-family:"Comic Sans MS";color:#70AD47' lang=zh-CN>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>网</span><span
style='font-family:"Comic Sans MS";color:#70AD47' lang=zh-CN>'</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>)</span><span style='font-family:
"Comic Sans MS"' lang=en-US> &gt; 0 </span><span style='font-family:"Comic Sans MS"'
lang=zh-CN>;</span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold' lang=zh-CN>FIND_IN_SET</span><span style='font-weight:
bold' lang=en-US>()</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>FIND_IN_SET</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>函数用于查询用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>(</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>‘</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>,</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>’</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>)</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>符号分开字符串</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#C00000'>FIND_IN_SET</span>(str,strlist)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=en-US>s</span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>trlist</span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>是一个由一些被</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>(</span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>‘</span><span style='font-family:"Comic Sans MS"'
lang=zh-CN>,</span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>’</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>)</span><span style='font-family:
"Comic Sans MS"' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>符号分开的自链组成的字符串，如果</span><span style='font-family:"Comic Sans MS"'
lang=zh-CN>str</span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>不在</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>strlist </span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>或</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>strlist </span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>为空字符串，则返回值为</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> 0</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SELECT </span><span
style='color:#C00000' lang=zh-CN>FIND_IN_SET</span><span lang=zh-CN>(</span><span
style='color:#70AD47' lang=zh-CN>&quot;A&quot;</span><span lang=zh-CN>,</span><span
lang=en-US> </span><span style='color:#70AD47' lang=zh-CN>&quot;a&quot;</span><span
lang=zh-CN>)</span><span lang=en-US> </span><span lang=zh-CN>;</span><span
lang=en-US> </span><span lang=zh-CN>-- </span><span lang=en-US>1</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SELECT </span><span
style='color:#C00000' lang=zh-CN>FIND_IN_SET</span><span lang=zh-CN>(</span><span
style='color:#70AD47' lang=zh-CN>&quot;A&quot;</span><span lang=zh-CN>,</span><span
lang=en-US> </span><span style='color:#70AD47' lang=zh-CN>&quot;A&quot;</span><span
lang=zh-CN>) ;</span><span lang=en-US> </span><span lang=zh-CN>-- </span><span
lang=en-US>1</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SELECT </span><span
style='color:#C00000' lang=zh-CN>FIND_IN_SET</span><span lang=zh-CN>(</span><span
style='color:#70AD47' lang=zh-CN>&quot;A&quot;</span><span lang=zh-CN>,</span><span
lang=en-US> </span><span style='color:#70AD47' lang=zh-CN>&quot;AB&quot;</span><span
lang=zh-CN>)</span><span lang=en-US> </span><span lang=zh-CN>;</span><span
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>-- </span><span
lang=en-US>0</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SELECT </span><span
style='color:#C00000' lang=zh-CN>FIND_IN_SET</span><span lang=zh-CN>(</span><span
style='color:#70AD47' lang=zh-CN>&quot;A&quot;</span><span lang=zh-CN>,</span><span
lang=en-US> </span><span style='color:#70AD47' lang=zh-CN>&quot;AB,qw&quot;</span><span
lang=zh-CN>) ;</span><span lang=en-US> </span><span lang=zh-CN>-- </span><span
lang=en-US>0</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SELECT </span><span
style='color:#C00000' lang=zh-CN>FIND_IN_SET</span><span lang=zh-CN>(</span><span
style='color:#C00000' lang=zh-CN>NULL</span><span lang=zh-CN>,</span><span
lang=en-US> </span><span style='color:#70AD47' lang=zh-CN>&quot;AB&quot;</span><span
lang=zh-CN>) ;</span><span lang=en-US> </span><span lang=zh-CN>-- </span><span
lang=en-US>null</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SELECT</span><span lang=zh-CN> *
</span><span style='color:#2E75B5' lang=en-US>FROM</span><span lang=zh-CN> </span><span
lang=en-US>app_info</span><span lang=zh-CN> </span><span style='color:#2E75B5'
lang=en-US>WHERE </span><span style='color:#C00000' lang=zh-CN>FIND_IN_SET</span><span
lang=zh-CN>(</span><span style='color:#70AD47' lang=zh-CN>'</span><span
style='color:#70AD47' lang=en-US>b</span><span style='color:#70AD47'
lang=zh-CN>'</span><span lang=zh-CN>,</span><span lang=en-US> describe</span><span
lang=zh-CN>) ;</span><span lang=en-US> </span><span lang=zh-CN>-- </span><span
lang=en-US>describe:'a,b,c,d'<span style='mso-spacerun:yes'>   </span>--&gt; 1</span></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
