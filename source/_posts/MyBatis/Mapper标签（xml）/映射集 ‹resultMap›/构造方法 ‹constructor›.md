---
categories:
  - MyBatis
tags:
  - ‹constructor›
date:
  - 2023-3-27 7:29:52
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5638in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5638in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;constructor&gt;</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>元素是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MyBatis</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>中用于映射</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Java</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>对象构造器的标签。它可以用于在映射文件中指定</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Java</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>对象的构造器参数，并将其与查询结果进行映射。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>为了将结果注入构造方法，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MyBatis</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>需要通过某种方式定位相应的构造方法。
     </span></li>
</ul>

<p style='margin-left:.75in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在下面的例子中，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MyBatis</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>搜索一个声明了三个形参的的构造方法，以&nbsp;&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>java.lang.Integer</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>,</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>java.lang.String</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>and</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>int</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;&nbsp;的顺序排列。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'><span lang=zh-CN>&lt;constructor&gt;</span><span
lang=en-US> </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512' lang=zh-CN>&lt;idArg column=</span><span
lang=zh-CN>&quot;id&quot; </span><span style='color:#B43512' lang=zh-CN>javaType=</span><span
lang=zh-CN>&quot;int&quot;</span><span lang=en-US> </span><span
style='color:#B43512' lang=en-US>name=</span><span lang=en-US>&quot;id&quot;</span><span
style='color:#B43512' lang=zh-CN>/&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512' lang=zh-CN>&lt;arg column=</span><span
lang=zh-CN>&quot;username&quot; </span><span style='color:#B43512' lang=zh-CN>javaType=</span><span
lang=zh-CN>&quot;String&quot;</span><span lang=en-US> </span><span
style='color:#B43512' lang=en-US>name=</span><span lang=en-US>&quot;username&quot;</span><span
style='color:#B43512' lang=zh-CN>/&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512' lang=zh-CN>&lt;arg column=</span><span
lang=zh-CN>&quot;age&quot;</span><span style='color:#B43512' lang=zh-CN>
javaType=</span><span lang=zh-CN>&quot;_int&quot;</span><span lang=en-US> </span><span
style='color:#B43512' lang=en-US>name=</span><span lang=en-US>&quot;age&quot;</span><span
style='color:#B43512' lang=zh-CN>/&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&lt;/constructor&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;constructor&gt;</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>元素可以包含多个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;arg&gt;</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>子元素，每个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;arg&gt;</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>子元素都可以指定一个构造器参数。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;idArg&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>可以用于在映射文件中指定</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Java</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对象的构造器参数，并将其与查询结果进行映射</span></li>
</ul>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.5576in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:white'><span style='font-weight:bold'>子标签</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.1763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.5576in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=zh-CN>&lt;idArg</span><span lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.1763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei"'
  lang=zh-CN>用于指定</span><span style='font-family:"Microsoft YaHei"' lang=en-US>
  </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>Java</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei"' lang=zh-CN>对象的</span><span
  style='font-family:"Microsoft YaHei"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>ID</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei"' lang=zh-CN>属性</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.5576in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>&lt;arg&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.1763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:black'>用于指定构造器中的每个参数</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:SimSun;font-size:12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.3437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.5201in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt;color:black'>column</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.5201in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>数据库中的列名</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>或者是列的别名。一般情况下，这和
  传递给&nbsp;</span><span style='font-family:"Comic Sans MS"'>resultSet.getString(columnName)</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;方法的参数一样。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt;color:black'>javaType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.5895in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>一个</span><span style='font-family:
  "Comic Sans MS"'> Java </span><span style='font-family:"Microsoft YaHei UI"'>类的完全限定名</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>或一个类型别名</span><span
  style='font-family:"Comic Sans MS"'>(</span><span style='font-family:"Microsoft YaHei UI"'>参考上面内建类型别名的列表</span><span
  style='font-family:"Comic Sans MS"'>)</span><span style='font-family:"Microsoft YaHei UI"'>。
  如果你映射到一个</span><span style='font-family:"Comic Sans MS"'> JavaBean,MyBatis </span><span
  style='font-family:"Microsoft YaHei UI"'>通常可以断定类型。然而</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>如
  果你映射到的是</span><span style='font-family:"Comic Sans MS"'> HashMap,</span><span
  style='font-family:"Microsoft YaHei UI"'>那么你应该明确地指定</span><span
  style='font-family:"Comic Sans MS"'> javaType </span><span style='font-family:
  "Microsoft YaHei UI"'>来保证期望的 行为。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt;color:black'>jdbcType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.5895in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt;color:black'><span
  style='font-family:"Comic Sans MS"'>JDBC </span><span style='font-family:
  "Microsoft YaHei UI"'>类型，所支持的</span><span style='font-family:"Comic Sans MS"'>
  JDBC </span><span style='font-family:"Microsoft YaHei UI"'>类型参见这个表格之前的“支持的</span><span
  style='font-family:"Comic Sans MS"'> JDBC </span><span style='font-family:
  "Microsoft YaHei UI"'>类型”。 只需要在可能执行插入、更新和删除的允许空值的列上指定</span><span
  style='font-family:"Comic Sans MS"'> JDBC </span><span style='font-family:
  "Microsoft YaHei UI"'>类型。这是</span><span style='font-family:"Comic Sans MS"'>
  JDBC </span><span style='font-family:"Microsoft YaHei UI"'>的要求而非</span><span
  style='font-family:"Comic Sans MS"'> MyBatis </span><span style='font-family:
  "Microsoft YaHei UI"'>的要求。如果你直接面向</span><span style='font-family:"Comic Sans MS"'>
  JDBC </span><span style='font-family:"Microsoft YaHei UI"'>编程</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>你需要对可能为</span><span
  style='font-family:"Comic Sans MS"'> null </span><span style='font-family:
  "Microsoft YaHei UI"'>的值指定这个类型。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt;color:black'>typeHandler</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.5201in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>我们在前面讨论过的默认类型处理器。使用这个属性</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>你可以覆盖默
  认的类型处理器。这个属性值是一个类型处理 器实现类的完全限定名，或者是类型别名。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt;color:black'>select</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.5201in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>用于加载复杂类型属性的映射语句的</span><span
  style='font-family:"Comic Sans MS"'> ID,</span><span style='font-family:"Microsoft YaHei UI"'>它会从</span><span
  style='font-family:"Comic Sans MS"'> column </span><span style='font-family:
  "Microsoft YaHei UI"'>属性中指定的列检索数据，作为参数传递给此</span><span style='font-family:
  "Comic Sans MS"'> select </span><span style='font-family:"Microsoft YaHei UI"'>语句。具体请参考</span><span
  style='font-family:"Comic Sans MS"'> Association </span><span
  style='font-family:"Microsoft YaHei UI"'>标签。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt;color:black'>resultMap</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.5895in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt;color:black'><span
  style='font-family:"Comic Sans MS"'>ResultMap </span><span style='font-family:
  "Microsoft YaHei UI"'>的</span><span style='font-family:"Comic Sans MS"'> ID</span><span
  style='font-family:"Microsoft YaHei UI"'>，可以将嵌套的结果集映射到一个合适的对象树中，功能和</span><span
  style='font-family:"Comic Sans MS"'> select </span><span style='font-family:
  "Microsoft YaHei UI"'>属性相似，它可以实现将多表连接操作的结果映射成一个单一的</span><span
  style='font-family:"Comic Sans MS"'>ResultSet</span><span style='font-family:
  "Microsoft YaHei UI"'>。这样的</span><span style='font-family:"Comic Sans MS"'>ResultSet</span><span
  style='font-family:"Microsoft YaHei UI"'>将会将包含重复或部分数据重复的结果集正确的映射到嵌套的对象树中。为了实现它</span><span
  style='font-family:"Comic Sans MS"'>, MyBatis</span><span style='font-family:
  "Microsoft YaHei UI"'>允许你 “串联”</span><span style='font-family:"Comic Sans MS"'>
  ResultMap,</span><span style='font-family:"Microsoft YaHei UI"'>以便解决嵌套结果集的问题。想了解更多内容，请参考下面的</span><span
  style='font-family:"Comic Sans MS"'>Association</span><span style='font-family:
  "Microsoft YaHei UI"'>元素。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt;color:black'>name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.5312in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>构造方法形参的名字。从</span><span
  style='font-family:"Comic Sans MS"'>3.4.3</span><span style='font-family:
  "Microsoft YaHei UI"'>版本开始，通过指定具体的名字，你可以以任意顺序写入</span><span style='font-family:
  "Comic Sans MS"'>arg</span><span style='font-family:"Microsoft YaHei UI"'>元素。参看上面的解释。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>columnPrefix</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.5201in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>用于指定查询结果集中的列名前缀，以便将多个列名映射到</span><span
  style='font-family:"Comic Sans MS"'>Java</span><span style='font-family:"Microsoft YaHei UI"'>对象的</span><span
  style='font-family:"Comic Sans MS"'>ID</span><span style='font-family:"Microsoft YaHei UI"'>属性上</span></p>
  </td>
 </tr>
</table>

</div>

</div>

</div>

</div>

<!--EndFragment-->
</body>
