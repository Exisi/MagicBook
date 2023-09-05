---
categories:
  - MyBatis
date:
  - 2023-3-27 7:46:35
tags:
  - ［@TypeDiscriminator］
  - ［@Case］
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.5201in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.5201in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#FFC000'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@TypeDiscriminator</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:black' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=zh-CN>注解等价于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'
     lang=en-US> &lt;</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:black' lang=zh-CN>discriminator</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'
     lang=en-US>&gt;</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>，用于根据结果匹配不同条件决定使用哪个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'
     lang=zh-CN> SQL </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>映射配置</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#FFC000'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Case</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#ED7D31' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=zh-CN>是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=en-US> </span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#FFC000' lang=zh-CN>@TypeDiscriminator</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>的子注解，用于在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'
     lang=en-US> </span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#FFC000' lang=zh-CN>@TypeDiscriminator</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>注解中定义不同情况下需要映射到哪个Java对象。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#FFC000'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@TypeDiscriminator</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#ED7D31' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=zh-CN>注解有以下属性：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.643in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>column</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.643in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>用于鉴别的列名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>javaType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.643in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定鉴别列对应的</span><span
  style='font-family:"Comic Sans MS"'>Java</span><span style='font-family:"Microsoft YaHei UI"'>类型。如果不指定，则根据方法参数类型自动推断。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>jdbcType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.643in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定鉴别列对应的</span><span
  style='font-family:"Comic Sans MS"'>JDBC</span><span style='font-family:"Microsoft YaHei UI"'>类型。如果不指定，则根据</span><span
  style='font-family:"Comic Sans MS"'>Java</span><span style='font-family:"Microsoft YaHei UI"'>类型自动推断</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>typeHandler</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.6881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>指定用于处理鉴别列值的</span><span style='font-family:"Microsoft YaHei UI"'
  lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>TypeHandler</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>这个属性值是类的完全限定名或者是一个类型处理器的实现</span><span
  style='font-family:"Comic Sans MS"'>, </span><span style='font-family:"Microsoft YaHei UI"'>或者是类型别名。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>cases</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.6958in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>定义不同情况下需要映射到哪个</span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>Java</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>对象，该属性是一个</span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN> Case</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>的数组，可以有多个</span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>case</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>。可以包含多个</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> @Case</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#FFC000'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Case</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#ED7D31' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=zh-CN>有以下属性：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.643in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>value</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.643in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>表示该情况下鉴别列匹配的值</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.643in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>表示需要映射到哪个</span><span
  style='font-family:"Comic Sans MS"'>Java</span><span style='font-family:"Microsoft YaHei UI"'>对象</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>results</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.7in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>用于指定</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>SQL</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语句返回结果集的类型。该属性是一个</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> Result</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的数组，可以包含多个</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> @</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>Result</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>constructArgs</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.7125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>于指定构造函数参数列表。该属性是一个</span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN> Arg</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>数组。包含多个</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>@Args</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>，可以由</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> @Results </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>指定</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>interface </span><span lang=en-US>User</span><span lang=zh-CN>Mapper(</span><span
lang=en-US>){</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000' lang=zh-CN>@Select</span><span lang=zh-CN>(value=</span><span
style='color:#B43512' lang=zh-CN>&quot;select id,name</span><span
style='color:#B43512' lang=en-US>,role</span><span style='color:#B43512'
lang=zh-CN> from </span><span style='color:#B43512' lang=en-US>user</span><span
style='color:#B43512' lang=zh-CN> where id=#{id}&quot;</span><span lang=zh-CN>)</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@TypeDiscriminator</span>(</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>javaType = String.class, </p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>column = </span><span style='color:#B43512'
lang=zh-CN>&quot;</span><span style='color:#B43512' lang=en-US>role</span><span
style='color:#B43512' lang=zh-CN>&quot;</span><span lang=zh-CN>, </span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>cases = {</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@Case</span>(</p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>value =<span style='color:#B43512'> &quot;teacher&quot;</span>,
</p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>type = Teacher.class, </p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>results = { </p>

<p style='margin-left:2.25in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@Result</span>(property = <span
style='color:#B43512'>&quot;id&quot;</span>, column = <span style='color:#B43512'>&quot;id&quot;</span>),</p>

<p style='margin-left:2.25in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@Result</span>(</p>

<p style='margin-left:2.625in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>property = </span><span style='color:#B43512'
lang=zh-CN>&quot;</span><span style='color:#B43512' lang=en-US>class</span><span
style='color:#B43512' lang=zh-CN>&quot;</span><span lang=zh-CN>, </span></p>

<p style='margin-left:2.625in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>column = </span><span style='color:#B43512'
lang=zh-CN>&quot;</span><span style='color:#B43512' lang=en-US>class</span><span
style='color:#B43512' lang=zh-CN>&quot;</span><span lang=zh-CN>, </span></p>

<p style='margin-left:2.625in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>many = </span><span style='color:#FFC000'
lang=zh-CN>@Many</span><span lang=zh-CN>(select = </span><span
style='color:#B43512' lang=zh-CN>&quot;</span><span style='color:#B43512'
lang=en-US>com.domain.</span><span style='color:#B43512' lang=zh-CN>mapper.</span><span
style='color:#B43512' lang=en-US>Teacher</span><span style='color:#B43512'
lang=zh-CN>Mapper.get</span><span style='color:#B43512' lang=en-US>Class</span><span
style='color:#B43512' lang=zh-CN>ById&quot;</span><span lang=zh-CN>)) </span></p>

<p style='margin-left:2.25in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>),</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@Case</span>(</p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>value = <span style='color:#B43512'>&quot;student&quot;</span>,
</p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>type = Student.class, </p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>results = { </p>

<p style='margin-left:2.25in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@Result</span>(property = <span
style='color:#B43512'>&quot;id&quot;</span>, column = <span style='color:#B43512'>&quot;id&quot;</span>),</p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>}</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>),</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt' lang=en-US>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>)</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>Student findUserById(int id);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@Case </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>注解可以有多个，每个 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@Case </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>注解对应一种情况。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>当使用 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@TypeDiscriminator
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>注解时，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MyBatis </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>会根据指定的列名和列值来选择对应的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Java </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对象类型，并将查询结果映射为该类型的实例。如果没有匹配到任何一个
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#FFC000'>@Case</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>，则会使用默认类型进行映射。因此，在使用 </span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:#FFC000'>@TypeDiscriminator </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>时，必须至少定义一个默认类型或者包含所有可能情况的
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#FFC000'>@Case</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>。</span></li>
</ul>

</div>

</div>

</div>

<!--EndFragment-->
</body>
