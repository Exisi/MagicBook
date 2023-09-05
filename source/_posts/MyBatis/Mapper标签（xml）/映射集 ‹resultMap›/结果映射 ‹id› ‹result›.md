---
categories:
  - MyBatis
tags:
  - ‹id›
  - ‹result›
date:
  - 2023-3-27 7:29:55
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.0618in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.0618in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;id&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;result&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>元素都是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MyBatis</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中用于映射查询结果到</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Java</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>对象属性的标签。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;id&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>元素用于指定</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Java</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>对象的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ID</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>属性。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;result&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>元素也可以用于映射查询结果到</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Java</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>对象的属性上。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#ED7D31' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
     19pt'><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>这些是结果映射最基本的内容。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>id </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> result </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>都将一个列的值映射到一个简单数据类型</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>(</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>字符串</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>,</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>整型</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>,</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>双精度浮点数</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>,</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>日期等</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>)</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的属性或字段。</span></li>
</ul>

<p style='margin-left:.375in;line-height:19pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
     19pt'><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>这两者之间的唯一不同是，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> id </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表示的结果将是对象的标识属性，这会在比较对象实例时用到。
     这样可以提高整体的性能，尤其是缓存和嵌套结果映射</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>(</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>也就是联合映射</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>)</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>的时</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;resultMap id=&quot;userResultMap&quot; type=&quot;User&quot;&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512' lang=zh-CN>&lt;id property=</span><span
lang=zh-CN>&quot;id&quot; </span><span style='color:#B43512' lang=zh-CN>column=</span><span
lang=zh-CN>&quot;</span><span lang=en-US>user</span><span lang=zh-CN>_id&quot;</span><span
style='color:#B43512' lang=zh-CN>/&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512' lang=zh-CN>&lt;result property=</span><span
lang=zh-CN>&quot;</span><span lang=en-US>name</span><span lang=zh-CN>&quot;</span><span
style='color:#B43512' lang=zh-CN> column=</span><span lang=zh-CN>&quot;</span><span
lang=en-US>user</span><span lang=zh-CN>_</span><span lang=en-US>name</span><span
lang=zh-CN>&quot;</span><span style='color:#B43512' lang=zh-CN>/&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512' lang=zh-CN>&lt;result property=</span><span
lang=zh-CN>&quot;</span><span lang=en-US>email</span><span lang=zh-CN>&quot;</span><span
style='color:#B43512' lang=zh-CN> column=</span><span lang=zh-CN>&quot;</span><span
lang=en-US>user</span><span lang=zh-CN>_</span><span lang=en-US>email</span><span
lang=zh-CN>&quot;</span><span style='color:#B43512' lang=zh-CN>/&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/resultMap&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.1187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:7.4791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.1187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt;color:black'>property</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:7.5486in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>映射到列结果的</span><span
  style='font-weight:bold;font-family:"Microsoft YaHei UI"'>类表的字段或属性</span><span
  style='font-family:"Microsoft YaHei UI"'>。如果用来匹配的</span><span
  style='font-family:"Comic Sans MS"'> JavaBeans </span><span style='font-family:
  "Microsoft YaHei UI"'>存在给定名字的属性，那么它将会被使用。否则</span><span style='font-family:
  "Comic Sans MS"'> MyBatis </span><span style='font-family:"Microsoft YaHei UI"'>将会寻找给定名称</span><span
  style='font-family:"Comic Sans MS"'> property </span><span style='font-family:
  "Microsoft YaHei UI"'>的字段。 无论是哪一种情形，你都可以使用通常的点式分隔形式进行复杂属性导航。比如</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>你可以这样映射一些简单的东西</span><span
  style='font-family:"Comic Sans MS"'>: </span><span style='font-family:"Microsoft YaHei UI"'>“</span><span
  style='font-family:"Comic Sans MS"'>username</span><span style='font-family:
  "Microsoft YaHei UI"'>”</span><span style='font-family:"Comic Sans MS"'> ,</span><span
  style='font-family:"Microsoft YaHei UI"'>或者映射到一些复杂的东西</span><span
  style='font-family:"Comic Sans MS"'>: </span><span style='font-family:"Microsoft YaHei UI"'>“</span><span
  style='font-family:"Comic Sans MS"'>address.street.number</span><span
  style='font-family:"Microsoft YaHei UI"'>” 。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.1187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt;color:black'>column</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.5027in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt;color:black'><span
  style='font-weight:bold;font-family:"Microsoft YaHei UI"'>数据库中的列名</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-weight:bold;
  font-family:"Microsoft YaHei UI"'>或者是列的别名</span><span style='font-family:
  "Microsoft YaHei UI"'>。一般情况下，这和 传递给&nbsp;</span><span style='font-family:
  "Comic Sans MS"'>resultSet.getString(columnName)</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;方法的参数一样。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.1187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt;color:black'>javaType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:7.4791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>一个</span><span style='font-family:
  "Comic Sans MS"'> Java </span><span style='font-family:"Microsoft YaHei UI"'>类的完全限定名</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>或一个类型别名</span><span
  style='font-family:"Comic Sans MS"'>(</span><span style='font-family:"Microsoft YaHei UI"'>参考上面内建类型别名
  的列表</span><span style='font-family:"Comic Sans MS"'>) </span><span
  style='font-family:"Microsoft YaHei UI"'>。如果你映射到一个</span><span
  style='font-family:"Comic Sans MS"'> JavaBean,MyBatis </span><span
  style='font-family:"Microsoft YaHei UI"'>通常可以断定类型。 然而</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>如果你映射到的是</span><span
  style='font-family:"Comic Sans MS"'> HashMap,</span><span style='font-family:
  "Microsoft YaHei UI"'>那么你应该明确地指定</span><span style='font-family:"Comic Sans MS"'>
  javaType </span><span style='font-family:"Microsoft YaHei UI"'>来保证期望的行为。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.1187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt;color:black'>jdbcType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.5486in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt;color:black'><span
  style='font-family:"Comic Sans MS"'>JDBC </span><span style='font-family:
  "Microsoft YaHei UI"'>类型，所支持的</span><span style='font-family:"Comic Sans MS"'>
  JDBC </span><span style='font-family:"Microsoft YaHei UI"'>类型参见这个表格之后的“支持的</span><span
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
  background-color:white;vertical-align:top;width:1.1381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt;color:black'>typeHandler</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:7.4597in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>我们在前面讨论过的默认类型处理器。使用这个属性</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>你可以覆盖默
  认的类型处理器。这个属性值是一个类型处理 器实现类的完全限定名，或者是类型别名。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Java</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对象只能有一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ID</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>属性，因此</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292F'>&lt;id&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>标签只能出现一次</span></li>
</ul>

</div>

</div>

</div>

<!--EndFragment-->
</body>
