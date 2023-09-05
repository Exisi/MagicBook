---
categories:
  - MySQL
tags:
  - RIGHT OUTER JOIN
date:
  - 2023-2-27 12:04:02
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.009in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.009in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>RIGHT </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#D8D8D8'
     lang=en-US>[OUTER]</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> JOIN </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>包含右边表的全部行，如果与左表中的数据列没有匹配，则添加为空值</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> NULL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>数据</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in'><img
src="data:image/png;base64,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"
width=216 height=145></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:11.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>table_reference</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>RIGHT</span><span lang=en-US> </span><span
style='color:#D8D8D8' lang=zh-CN>[OUTER] </span><span style='color:#2E75B5'
lang=zh-CN>JOIN</span><span lang=zh-CN> table_reference</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>ON</span> search_condition</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>| <span style='color:#2E75B5'>USING</span> (column_name <span
style='color:#D8D8D8'>[, column_name] ...</span>)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS"'><span
style='font-size:11.0pt;color:#D8D8D8' lang=zh-CN>[WHERE where_condition]</span><span
style='font-size:12.0pt' lang=en-US>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

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
12.0pt'><span style='color:#2E75B5'>RIGHT JOIN</span> Order</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ON</span><span lang=zh-CN>
Person.</span><span lang=en-US>id</span><span lang=zh-CN>=Order.</span><span
lang=en-US>id</span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

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
  lang=en-US>NULL</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.877in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>34764</p>
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
12.0pt'><span style='color:#2E75B5'>RIGHT JOIN</span> Order</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>ON</span><span lang=zh-CN>
Person.</span><span lang=en-US>id</span><span lang=zh-CN>=Order.</span><span
lang=en-US>id</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.0pt' lang=en-US><span style='color:#2E75B5'>WHERE</span> Order.orderNo =
34764</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

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
  lang=en-US>NULL</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.877in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>34764</p>
  </td>
 </tr>
</table>

</div>

</div>

</div>

</div>

<!--EndFragment-->
</body>
