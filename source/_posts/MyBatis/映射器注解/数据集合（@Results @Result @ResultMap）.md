---
categories:
  - MyBatis
date:
  - 2023-3-27 7:45:56
tags:
  - ［@Results］
  - ［@Result］
  - ［@ResultMap］
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.0548in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.0548in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:black'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=en-US>@Results </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>用于代替</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'
     lang=en-US>mapper.xml</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>中的</span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'
     lang=en-US>&lt;resultMap&gt; </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>标签</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#ED7D31' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:black'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=en-US>@Result </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>是</span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=en-US>@Results </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>的子注解，有以下参数：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.8923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'
  lang=en-US>id</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.8923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"' lang=en-US>resultMap</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>集合的</span><span style='font-family:"Comic Sans MS"' lang=en-US>id</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>column</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.8923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:black'>数据库字段名称</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>property</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.8923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:black'>实体类中的字段的参数名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>javaType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.8923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"' lang=en-US>resultMap</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>的类型</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>jdbcType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.8923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"' lang=zh-CN>数据库中的字段类型，</span><span style='font-family:
  "Comic Sans MS"' lang=en-US>int</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>、</span><span style='font-family:"Comic Sans MS"' lang=en-US>varchar</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>等</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>typeHandler</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.8923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:black'>设置类型处理器</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>one</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.9159in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI";
  color:black' lang=zh-CN>一对一查询，参数</span><span style='font-family:"Microsoft YaHei UI";
  color:black' lang=en-US> </span><span style='font-family:"Comic Sans MS";
  color:black' lang=en-US>@One</span><span style='font-family:"Microsoft YaHei UI";
  color:black' lang=zh-CN>。一个关联，和</span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN> &lt;association&gt;</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>类似</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>当我们需要通过查询到的一个字段值作为参数，去执行另外一个方法来查询关联的内容，而且两者是一对一关系时，可以使用</span><span
  style='font-family:"Comic Sans MS"'>@One</span><span style='font-family:"Microsoft YaHei UI"'>注解来便捷的实现</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>many</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.9618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>一对多查询，参数</span><span style='font-family:"Comic Sans MS"'
  lang=en-US>@Many</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>，类似</span><span style='font-family:"Comic Sans MS"' lang=en-US>one</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>，查询多条数据。集合关联，和</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> &lt;collection&gt;</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>类似</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:black'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@ResultMap</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:black' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=zh-CN>用于根据</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'
     lang=en-US> </span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:black' lang=en-US>id </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>引用</span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=en-US>@Results</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.9173in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'
  lang=en-US>value</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.9173in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"' lang=en-US>resultMap</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>集合的</span><span style='font-family:"Comic Sans MS"' lang=en-US>id</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>public</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>interface</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=en-US>Person</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>Mapper</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>{</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@Select</span><span
style='color:black'>({</span><span style='color:maroon'>&quot;select&nbsp;id,&nbsp;name,&nbsp;class_id&nbsp;from&nbsp;my_student&quot;</span><span
style='color:black'>})</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>@Results</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>(</span><span
style='font-family:"Microsoft YaHei";color:black' lang=en-US> </span><span
style='font-family:"Comic Sans MS";color:black' lang=en-US>id=</span><span
style='font-family:"Comic Sans MS";color:#B43512' lang=en-US>&quot;select&quot;</span><span
style='font-family:"Comic Sans MS";color:black' lang=en-US>,</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>{</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:black'>&nbsp;&nbsp;&nbsp;</span><span
style='color:#FFC000'>&nbsp;@Result</span><span style='color:black'>(column=</span><span
style='color:maroon'>&quot;id&quot;</span><span style='color:black'>,&nbsp;property=</span><span
style='color:maroon'>&quot;id&quot;</span><span style='color:black'>,&nbsp;jdbcType=JdbcType.INTEGER,&nbsp;id=true),</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='color:#FFC000'>@Result</span><span style='color:black'>(column=</span><span
style='color:maroon'>&quot;name&quot;</span><span style='color:black'>,&nbsp;property=</span><span
style='color:maroon'>&quot;name&quot;</span><span style='color:black'>,&nbsp;jdbcType=JdbcType.VARCHAR),</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:black'>&nbsp;</span><span
style='color:#FFC000'>&nbsp;&nbsp;&nbsp;@Result</span><span style='color:black'>(column=</span><span
style='color:maroon'>&quot;class_id&quot;</span><span style='color:black'>,&nbsp;property=</span><span
style='color:maroon'>&quot;classId&quot;</span><span style='color:black'>,&nbsp;jdbcType=JdbcType.INTEGER)</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>})</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>List&lt;</span><span lang=en-US>Person</span><span
lang=zh-CN>&gt;&nbsp;selectAll();</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000' lang=zh-CN>@Result</span><span
style='color:#FFC000' lang=en-US>Map(</span><span style='color:#B43512'
lang=en-US>&quot;select&quot;</span><span style='color:#FFC000' lang=en-US>)</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>List&lt;</span><span lang=en-US>Persosn</span><span
lang=zh-CN>&gt;&nbsp;selectAll();</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MyBatis
     3.5.4</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>后</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#FFC000' lang=zh-CN>@Results</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>被优化弃用，现在可以直接在最外层使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Arg</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>public</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>interface</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=en-US>Person</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>Mapper</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>{</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@Select</span><span
style='color:black'>({</span><span style='color:maroon'>&quot;select&nbsp;id,&nbsp;name,&nbsp;class_id&nbsp;from&nbsp;my_student&quot;</span><span
style='color:black'>})</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#FFC000'>&nbsp;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@Result</span><span
style='color:black'>(column=</span><span style='color:maroon'>&quot;id&quot;</span><span
style='color:black'>,&nbsp;property=</span><span style='color:maroon'>&quot;id&quot;</span><span
style='color:black'>,&nbsp;jdbcType=JdbcType.INTEGER,&nbsp;id=true),</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@Result</span><span
style='color:black'>(column=</span><span style='color:maroon'>&quot;name&quot;</span><span
style='color:black'>,&nbsp;property=</span><span style='color:maroon'>&quot;name&quot;</span><span
style='color:black'>,&nbsp;jdbcType=JdbcType.VARCHAR),</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@Result</span><span
style='color:black'>(column=</span><span style='color:maroon'>&quot;class_id&quot;</span><span
style='color:black'>,&nbsp;property=</span><span style='color:maroon'>&quot;classId&quot;</span><span
style='color:black'>,&nbsp;jdbcType=JdbcType.INTEGER)</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>List&lt;</span><span lang=en-US>Person</span><span
lang=zh-CN>&gt;&nbsp;selectAll();</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
