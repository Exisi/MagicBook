---
categories:
  - MyBatis
tags:
  - ‹bind›
date:
  - 2021-3-27 7:35:10
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.077in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.077in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用于将一个表达式的结果绑定到一个变量上，这个变量可以在后面的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句中使用。使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;bind&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>元素可以简化</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句，提高代码的可读性和维护性。</span></li>
</ul>

<p style='font-family:Calibri;font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在下面的例子中，我们使用了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;bind&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>元素将查询条件</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>'%'+name+'%'</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>绑定到了变量</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>userNamePattern</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>上。在后面的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句中，我们可以使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>#{userNamePattern}</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>占位符引用这个变量。这样，在查询时，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MyBatis</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>会将</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>name</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>参数加上前后缀</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>%</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>后作为查询条件进行查询</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'>&lt;select id=&quot;getUserByName&quot;
resultType=&quot;com.example.entity.User&quot;&gt;</p>

<p style='margin-left:.75in;font-size:12.0pt;color:#BFBFBF'><span
style='font-family:"Comic Sans MS"'>&lt;!-- </span><span style='font-family:
"Microsoft YaHei UI"'>将查询条件绑定到变量上</span><span style='font-family:"Comic Sans MS"'>
--&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;bind name=<span style='color:#70AD47'>&quot;userNamePattern&quot;</span>
value=<span style='color:#BFBFBF'>&quot;</span><span style='color:#70AD47'>'%'</span>
+ name + <span style='color:#70AD47'>'%'</span><span style='color:#BFBFBF'>&quot;</span>/&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'>SELECT * FROM user </p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'>WHERE name </p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#BFBFBF'>LIKE </span><span style='color:#C55A11'>#{userNamePattern}</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'>&lt;/select&gt;</p>

<p style='margin-left:.375in;font-family:Calibri;font-size:12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.1944in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.8298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.1944in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.8298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt'>指定变量名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.1944in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>value</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.8381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定表达式，表达式可以是任意的</span><span
  style='font-family:"Comic Sans MS"'>OGNL</span><span style='font-family:"Microsoft YaHei UI"'>表达式，可以使用</span><span
  style='font-family:"Comic Sans MS"'>${}</span><span style='font-family:"Microsoft YaHei UI"'>占位符引用其他变量</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#24292F'>&lt;bind&gt;</span><span
style='font-family:"Microsoft YaHei UI"'>标签只能用于在</span><span style='font-family:
"Comic Sans MS"'>SQL</span><span style='font-family:"Microsoft YaHei UI"'>语句中创建变量并将其绑定到一个表达式上，它并不会影响</span><span
style='font-family:"Comic Sans MS"'>SQL</span><span style='font-family:"Microsoft YaHei UI"'>语句本身的执行逻辑。因此，在使用</span><span
style='font-family:"Comic Sans MS";color:#24292F'>&lt;bind&gt;</span><span
style='font-family:"Microsoft YaHei UI"'>标签时，需要确保绑定的变量在后续的</span><span
style='font-family:"Comic Sans MS"'>SQL</span><span style='font-family:"Microsoft YaHei UI"'>语句中被正确引用和使用</span></p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei";
font-size:12.0pt'>&nbsp;</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
