categories:
- MySQL
tags:
- LEFT OUTER JOIN
date:
- 2023-2-26 11:12:02
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.7409in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.7409in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>LEFT </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#D8D8D8'
     lang=en-US>[OUTER]</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> JOIN </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>包含左边表的全部行，如果与右表中的数据列没有匹配，则添加为空值</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> NULL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>数据</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in'><img
src="data:image/png;base64,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"
width=209 height=141></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:11.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>table_reference</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>LEFT</span><span
style='color:#2E75B5' lang=en-US> </span><span style='color:#D8D8D8'
lang=zh-CN>[OUTER] </span><span style='color:#2E75B5' lang=zh-CN>JOIN</span><span
lang=zh-CN> table_reference</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>ON</span> search_condition</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>| <span style='color:#2E75B5'>USING</span> (column_name <span
style='color:#D8D8D8'>[, column_name] ...</span>)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS"'><span
style='font-size:11.0pt;color:#D8D8D8' lang=en-US>[WHERE where_</span><span
style='font-size:11.0pt;color:#D8D8D8' lang=zh-CN>condition</span><span
style='font-size:11.0pt;color:#D8D8D8' lang=en-US>]</span><span
style='font-size:12.0pt' lang=en-US>;</span></p>

<p style='font-family:"Comic Sans MS";font-size:11.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.3881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.8895in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.3881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=zh-CN>table_reference</span><span lang=en-US>{</span></p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'><span lang=zh-CN>table_factor</span><span lang=en-US> </span><span
  lang=zh-CN>| joined_table</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>}</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.8895in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.0736in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.5388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.093in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>table_factor</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.5201in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>表的引用语句</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.0736in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>joined_table</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.6083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>可以引用自身语句嵌套</p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.3881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>search_condition</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.8895in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>条件语句</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.3881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>column_name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.8895in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据列名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.3881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>tbl_name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.8895in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据表名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.3881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>[WHERE where_</span><span lang=zh-CN>condition</span><span
  lang=en-US>]</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.8895in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>WHERE</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>条件语句</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:11.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SELECT </span><span lang=zh-CN>Person</span><span
lang=en-US>.name,Order.orderNo</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>FROM</span> Person</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>LEFT</span><span
style='color:#2E75B5' lang=zh-CN> JOIN</span><span lang=zh-CN> Order</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ON</span><span lang=zh-CN>
Person.</span><span lang=en-US>id</span><span lang=zh-CN>=Order.</span><span
lang=en-US>id</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#3F3F3F;vertical-align:top;width:.9013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:white'
  lang=en-US><span style='font-weight:bold'>name</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#3F3F3F;vertical-align:top;width:.877in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:white'><span
  style='font-weight:bold' lang=en-US>o</span><span style='font-weight:bold'
  lang=zh-CN>rderNo</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.9013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>Adams</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.877in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>22456</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:whitesmoke;vertical-align:top;width:.9013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>Adams</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:whitesmoke;vertical-align:top;width:.877in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>24562</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.9013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>Carter</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.877in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>77895</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:whitesmoke;vertical-align:top;width:.9013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>Carter</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:whitesmoke;vertical-align:top;width:.877in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>44678</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.9013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span style='font-family:"Comic Sans MS"'
  lang=en-US>PETER</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.877in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'
  lang=en-US>NULL</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:11.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SELECT </span><span lang=zh-CN>Person</span><span
lang=en-US>.name,Order.orderNo</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>FROM</span> Person</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>LEFT</span><span
style='color:#2E75B5' lang=zh-CN> JOIN</span><span lang=zh-CN> Order</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ON</span><span lang=zh-CN>
Person.</span><span lang=en-US>id</span><span lang=zh-CN>=Order.</span><span
lang=en-US>id</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.0pt' lang=en-US><span style='color:#2E75B5'>WHERE</span> Person.name<span
style='color:#2E75B5'> LIKE </span><span style='color:#6DA845'>'P%'</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#3F3F3F;vertical-align:top;width:.9013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:white'
  lang=en-US><span style='font-weight:bold'>name</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#3F3F3F;vertical-align:top;width:.877in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:white'><span
  style='font-weight:bold' lang=en-US>o</span><span style='font-weight:bold'
  lang=zh-CN>rderNo</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.9013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span style='font-family:"Comic Sans MS"'
  lang=en-US>PETER</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.877in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'
  lang=en-US>NULL</p>
  </td>
 </tr>
</table>

</div>

</div>

</div>

</div>

<!--EndFragment-->
</body>