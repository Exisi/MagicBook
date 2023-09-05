---
categories:
  - MySQL
tags:
  - ALL
  - SOME
  - ANY
date:
  - 2023-3-2 12:14:02
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.9479in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.9479in'>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Comic Sans MS"' lang=en-US>ANY(SOME) &amp; </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>子查询</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> </span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>SOME </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> ANY </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的一个别名，两者功能相同</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ANY</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>(SOME) </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>运算符是一个逻辑运算符，它将值与子查询返回的一组值进行比较。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> ANY</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>运算符必须以比较运算符：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&gt;=</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;=</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>=</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>开头，后跟子查询</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.2993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>条件</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.5166in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>表示含义</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#C7254E'><span style='font-family:
  "Comic Sans MS"'>= ANY (</span><span style='font-family:"Microsoft YaHei UI"'>…</span><span
  style='font-family:"Comic Sans MS"'>)</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.5166in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>列中的值必须与集合中的一个或多个值匹配，以评估为</span><span style='font-family:"Microsoft YaHei UI";
  color:#333344' lang=en-US> </span><span style='font-family:"Comic Sans MS";
  color:#C7254E' lang=zh-CN>true</span><span style='font-family:"Microsoft YaHei UI";
  color:#333344' lang=zh-CN>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#C7254E'><span style='font-family:
  "Comic Sans MS"'>!= ANY (</span><span style='font-family:"Microsoft YaHei UI"'>…</span><span
  style='font-family:"Comic Sans MS"'>)</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.5166in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>列中的值不能与集合中的一个或多个值匹配以评估为</span><span style='font-family:"Microsoft YaHei UI";
  color:#333344' lang=en-US> </span><span style='font-family:"Comic Sans MS";
  color:#C7254E' lang=zh-CN>true</span><span style='font-family:"Microsoft YaHei UI";
  color:#333344' lang=zh-CN>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#C7254E'><span style='font-family:
  "Comic Sans MS"'>&gt; ANY (</span><span style='font-family:"Microsoft YaHei UI"'>…</span><span
  style='font-family:"Comic Sans MS"'>)</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.5166in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>列中的值必须大于要评估为</span><span style='font-family:"Microsoft YaHei UI";
  color:#333344' lang=en-US> </span><span style='font-family:"Comic Sans MS";
  color:#C7254E' lang=zh-CN>true</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的集合中的最小值。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#C7254E'><span style='font-family:
  "Comic Sans MS"'>&lt; ANY (</span><span style='font-family:"Microsoft YaHei UI"'>…</span><span
  style='font-family:"Comic Sans MS"'>)</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.5166in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>列中的值必须小于要评估为</span><span style='font-family:"Microsoft YaHei UI";
  color:#333344' lang=en-US> </span><span style='font-family:"Comic Sans MS";
  color:#C7254E' lang=zh-CN>true</span><span style='font-family:"Comic Sans MS";
  color:#C7254E' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>的集合中的最大值。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#C7254E'><span style='font-family:
  "Comic Sans MS"'>&gt;= ANY (</span><span style='font-family:"Microsoft YaHei UI"'>…</span><span
  style='font-family:"Comic Sans MS"'>)</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.5166in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>列中的值必须大于或等于要评估为</span><span style='font-family:"Microsoft YaHei UI";
  color:#333344' lang=en-US> </span><span style='font-family:"Comic Sans MS";
  color:#C7254E' lang=zh-CN>true</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的集合中的最小值。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#C7254E'><span style='font-family:
  "Comic Sans MS"'>&lt;= ANY (</span><span style='font-family:"Microsoft YaHei UI"'>…</span><span
  style='font-family:"Comic Sans MS"'>)</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.5166in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>列中的值必须小于或等于要评估为</span><span style='font-family:"Microsoft YaHei UI";
  color:#333344' lang=en-US> </span><span style='font-family:"Comic Sans MS";
  color:#C7254E' lang=zh-CN>true</span><span style='font-family:"Comic Sans MS";
  color:#C7254E' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>的集合中的最大值。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>operand comparison_operator </span><span
style='color:#C00000' lang=zh-CN>ANY</span><span lang=zh-CN> (subquery)</span><span
lang=en-US>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.0395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.7694in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.0395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'>operand</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.7694in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>操作的逻辑对象</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.0395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>comparison_operator</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.7694in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>=<span
  style='mso-spacerun:yes'>  </span>&gt;<span style='mso-spacerun:yes'> 
  </span>&lt;<span style='mso-spacerun:yes'>  </span>&gt;=<span
  style='mso-spacerun:yes'>  </span>&lt;=<span style='mso-spacerun:yes'> 
  </span>&lt;&gt;<span style='mso-spacerun:yes'>  </span>!=</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.0395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>subquery</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.7694in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>子查询语句</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span> s1 </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>FROM</span> t1 </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>WHERE</span> s1 &gt; <span
style='color:#C00000'>ANY</span> (<span style='color:#2E75B5'>SELECT</span> s1 <span
style='color:#2E75B5'>FROM</span> t2);</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>如果子查询不返回任何行，则条件的计算结果为</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>false</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Comic Sans MS"' lang=en-US>ALL &amp; </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>子查询</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> </span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>ALL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>运算符是一个逻辑运算符，它将值与子查询返回的所有集合的每个值进行比较。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>A</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>LL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>运算符必须以比较运算符：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&gt;=</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;=</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>=</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>开头，后跟子查询</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.2465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>逻辑条件</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.6444in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#C7254E'><span style='font-family:
  "Comic Sans MS"'>&gt; ALL(</span><span style='font-family:"Microsoft YaHei UI"'>…</span><span
  style='font-family:"Comic Sans MS"'>)</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.6444in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>列中的值必须大于要评估为</span><span style='font-family:"Microsoft YaHei UI";
  color:#333344' lang=en-US> </span><span style='font-family:"Comic Sans MS";
  color:#C7254E' lang=zh-CN>true</span><span style='font-family:"Comic Sans MS";
  color:#C7254E' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>的集合中的最大值。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#C7254E'><span style='font-family:
  "Comic Sans MS"'>&gt;= ALL(</span><span style='font-family:"Microsoft YaHei UI"'>…</span><span
  style='font-family:"Comic Sans MS"'>)</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.6444in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>列中的值必须大于或等于要评估为</span><span style='font-family:"Microsoft YaHei UI"'
  lang=en-US> </span><span style='font-family:"Comic Sans MS";color:#C7254E'
  lang=zh-CN>true</span><span style='font-family:"Comic Sans MS";color:#C7254E'
  lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的集合中的最大值。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#C7254E'><span style='font-family:
  "Comic Sans MS"'>&lt; ALL(</span><span style='font-family:"Microsoft YaHei UI"'>…</span><span
  style='font-family:"Comic Sans MS"'>)</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.6444in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>列中的值必须小于要评估为</span><span style='font-family:"Microsoft YaHei UI";
  color:#333344' lang=en-US> </span><span style='font-family:"Comic Sans MS";
  color:#C7254E' lang=zh-CN>true</span><span style='font-family:"Microsoft YaHei UI"'
  lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的集合中的最小值。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#C7254E'><span style='font-family:
  "Comic Sans MS"'>&lt;= ALL(</span><span style='font-family:"Microsoft YaHei UI"'>…</span><span
  style='font-family:"Comic Sans MS"'>)</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.6444in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>列中的值必须小于或等于要评估为</span><span style='font-family:"Microsoft YaHei UI";
  color:#333344' lang=en-US> </span><span style='font-family:"Comic Sans MS";
  color:#C7254E' lang=zh-CN>true</span><span style='font-family:"Microsoft YaHei UI"'
  lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的集合中的最小值。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#C7254E'><span style='font-family:
  "Comic Sans MS"'>&lt;&gt; ALL(</span><span style='font-family:"Microsoft YaHei UI"'>…</span><span
  style='font-family:"Comic Sans MS"'>)</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.6444in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>列中的值不得等于要评估为</span><span style='font-family:"Microsoft YaHei UI";
  color:#333344' lang=en-US> </span><span style='font-family:"Comic Sans MS";
  color:#C7254E' lang=zh-CN>true</span><span style='font-family:"Comic Sans MS";
  color:#C7254E' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>的集合中的任何值。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#C7254E'><span style='font-family:
  "Comic Sans MS"'>= ALL(</span><span style='font-family:"Microsoft YaHei UI"'>…</span><span
  style='font-family:"Comic Sans MS"'>)</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.6444in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>列中的值必须等于要评估为</span><span style='font-family:"Microsoft YaHei UI"'
  lang=en-US> </span><span style='font-family:"Comic Sans MS";color:#C7254E'
  lang=zh-CN>true</span><span style='font-family:"Comic Sans MS";color:#C7254E'
  lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的集合中的任何值。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>operand comparison_operator </span><span
style='color:#C00000' lang=zh-CN>ALL</span><span lang=zh-CN> (subquery)</span><span
lang=en-US>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.0395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.8006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.0395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'>operand</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.8006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>操作的逻辑对象</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.0395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>comparison_operator</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.8006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>=<span
  style='mso-spacerun:yes'>  </span>&gt;<span style='mso-spacerun:yes'> 
  </span>&lt;<span style='mso-spacerun:yes'>  </span>&gt;=<span
  style='mso-spacerun:yes'>  </span>&lt;=<span style='mso-spacerun:yes'> 
  </span>&lt;&gt;<span style='mso-spacerun:yes'>  </span>!=</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.0395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>subquery</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.8006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>子查询语句</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span> s1 </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>FROM</span> t1 </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>WHERE</span> s1 &gt; <span
style='color:#C00000'>ALL</span> (<span style='color:#2E75B5'>SELECT</span> s1 <span
style='color:#2E75B5'>FROM</span> t2);</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>如果子查询不返回任何行，则条件的计算结果为</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>false</span></li>
</ul>

<p style='font-family:Calibri;font-size:12.0pt'>&nbsp;</p>

<p style='font-family:Calibri;font-size:12.0pt'>&nbsp;</p>

<p style='font-family:Calibri;font-size:11.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei"'>来</span><span style='font-family:"Malgun Gothic"'>自</span><span
style='font-family:"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/all-subqueries.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/all-subqueries.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
