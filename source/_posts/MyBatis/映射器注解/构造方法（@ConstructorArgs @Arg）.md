---
categories:
  - MyBatis
date:
  - 2021-3-27 7:45:02
tags:
  - ［@ConstructorArgs］
  - ［@Arg］
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.3215in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.3215in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MyBatis </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@ConstructorArgs
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@Arg </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>注解用于指定构造函数参数和函数的参数值。这两个注解通常用于映射结果集到</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Java </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对象时，可以通过构造函数来创建对象并设置属性值。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@ConstructorArgs
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>注解用于指定构造函数的参数列表，它可以包含多个
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#FFC000'>@Arg </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>注解</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.5pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@ConstructorArgs</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#ED7D31' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=zh-CN>注解有以下属性：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.7784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>value</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.7784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>构造函数的映射定义，该属性是一个</span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN> Arg</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>数组。包含多个</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>@Args</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Args</span><span style='font-family:"Comic Sans MS";
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
  background-color:black;vertical-align:top;width:6.4819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>id</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.5111in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>与</span><span style='font-family:"Comic Sans MS"' lang=zh-CN> XML </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>元素</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> &lt;idArg&gt;</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>相似，它是一个布尔值，表示该属性是否用于唯一标识和比较对象。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>column</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.4819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>指定参数对应的数据库列名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>javaType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.4819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定参数对应的</span><span
  style='font-family:"Comic Sans MS"'>Java</span><span style='font-family:"Microsoft YaHei UI"'>类型。如果不指定，则根据方法参数类型自动推断。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>jdbcType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.4819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定参数对应的</span><span
  style='font-family:"Comic Sans MS"'>JDBC</span><span style='font-family:"Microsoft YaHei UI"'>类型。如果不指定，则根据</span><span
  style='font-family:"Comic Sans MS"'>Java</span><span style='font-family:"Microsoft YaHei UI"'>类型自动推断</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>typeHandler</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.4819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定处理该参数的</span><span
  style='font-family:"Comic Sans MS"'>TypeHandler</span><span style='font-family:
  "Microsoft YaHei UI"'>类。如果不指定，则使用默认的</span><span style='font-family:"Comic Sans MS"'>TypeHandler</span><span
  style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>select</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.4819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>用于嵌套查询，表示该参数需要执行一个查询语句（</span><span style='font-family:"Comic Sans MS"'
  lang=en-US>@Select</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>）来获取值</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>resultMap</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.4819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in'><span style='font-family:"Microsoft YaHei UI";
  font-size:11.5pt' lang=zh-CN>用于嵌套结果映射，表示该参数需要使用一个</span><span
  style='font-family:"Comic Sans MS";font-size:11.5pt' lang=zh-CN>ResultMap</span><span
  style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>（</span><span
  style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>@Results</span><span
  style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>）来进行结果映射。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.4819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>当方法有多个</span><span
  style='font-family:"Comic Sans MS"'>@Arg</span><span style='font-family:"Microsoft YaHei UI"'>注解时，可以通过</span><span
  style='font-family:"Comic Sans MS"'>name</span><span style='font-family:"Microsoft YaHei UI"'>属性来区分它们所代表的含义。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>columnPrefix</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.4819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>为所有列名添加前缀。</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>interface UserMapper(</span><span lang=en-US>){</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@ConstructorArgs</span>({</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span><span style='color:#FFC000'>@Arg</span>(column
= <span style='color:#B43512'>&quot;id&quot;</span>, javaType = Integer.class,
id = true),</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span><span style='color:#FFC000'>@Arg</span>(column
= <span style='color:#B43512'>&quot;userName&quot;</span>, javaType =
String.class, id = false),</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>       </span><span style='color:#FFC000'><span
style='mso-spacerun:yes'> </span>@Arg</span>(column = <span style='color:#B43512'>&quot;password&quot;</span>,
javaType = String.class, id = false)}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>)</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000' lang=zh-CN>@Select</span><span lang=zh-CN>(</span><span
style='color:#B43512' lang=zh-CN>&quot;select id, userName,</span><span
style='color:#B43512' lang=en-US> </span><span style='color:#B43512'
lang=zh-CN>password from user&quot;</span><span lang=zh-CN>)</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>List&lt;User&gt; selectAll();</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>public interface UserMapper {</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span><span style='color:#FFC000'>@Select</span>(<span
style='color:#B43512'>&quot;SELECT id, name AS ${prefix}username FROM
user&quot;</span>)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>List&lt;User&gt; getAllUsers(<span
style='color:#FFC000'>@Arg</span>(<span style='color:#B43512'>&quot;prefix&quot;</span>)
String prefix);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

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
     font-size:12.0pt;color:#FFC000' lang=zh-CN>@ConstructorArgs</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>注解被优化弃用，现在可以直接在最外层使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Arg</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#ED7D31' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>注解</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>interface UserMapper(</span><span lang=en-US>){</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#ED7D31'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@Arg</span>(column = <span
style='color:#B43512'>&quot;id&quot;</span>, javaType = Integer.class, id =
true),</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@Arg</span>(column = <span
style='color:#B43512'>&quot;userName&quot;</span>, javaType = String.class, id
= false),</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@Arg</span>(column = <span
style='color:#B43512'>&quot;password&quot;</span>, javaType = String.class, id
= false)}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000' lang=zh-CN>@Select</span><span lang=zh-CN>(</span><span
style='color:#B43512' lang=zh-CN>&quot;select id, userName,</span><span
style='color:#B43512' lang=en-US> </span><span style='color:#B43512'
lang=zh-CN>password from user&quot;</span><span lang=zh-CN>)</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>List&lt;User&gt; selectAll();</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
