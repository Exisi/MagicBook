---
categories:
  - MyBatis
date:
  - 2021-3-27 7:46:06
tags:
  - ［@One］
  - ［@Many］
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.1326in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.1326in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#FFC000' lang=en-US>One </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>和</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:#ED7D31' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#FFC000' lang=en-US>Many </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=zh-CN>注解分别表示一对一和一对多关系。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@One</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:black' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>注解表示一个对象与另一个对象之间的一对一关系。它可以用在实体类中的属性上，指定该属性所对应的关联对象。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Many</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:black' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=zh-CN>注解表示一个对象与另一个对象之间的一对多关系。它可以用在实体类中的集合属性上，指定该集合所包含的关联对象列表。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#ED7D31'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#FFC000' lang=en-US>One </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>和</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:#ED7D31' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#FFC000' lang=en-US>Many </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=zh-CN>注解有以下属性：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.0493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>select</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.0493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>SQL </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>语句，指定可加载合适类型实例的映射语句（也就是映射器方法）全限定名</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>fetchType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.0493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>用于指定关联对象的加载方式。有两个可选值</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>FetchType.LAZY</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>和</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>FetchType.EAGER</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>。默认</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>FetchType.DEFAULT</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>resultMap</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.1187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>（</span><span style='font-family:"Comic Sans MS"' lang=en-US>MyBatis
  </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>3.5.5</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>以上可用）</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>, </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>结果集的完全限定名，该结果映射到查询结果中的集合对象</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>columnPrefix</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.0493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>（</span><span style='font-family:"Comic Sans MS"' lang=en-US>MyBatis
  </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>3.5.5</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>以上可用），在嵌套的结果集中对所查询的列进行分组的列前缀。
  </span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>interface </span><span lang=en-US>Student</span><span lang=zh-CN>Mapper(</span><span
lang=en-US>){</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@Select</span><span style='color:#666600'>(</span><span
style='color:#B43512'>&quot;select * from Student&quot;</span><span
style='color:#666600'>)</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@Results</span><span style='color:#666600'>({</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000' lang=zh-CN>@Result</span><span
style='color:#666600' lang=zh-CN>(</span><span style='color:black' lang=zh-CN>id=true,</span><span
lang=en-US> </span><span lang=zh-CN>property</span><span style='color:#666600'
lang=zh-CN>=</span><span style='color:#B43512' lang=zh-CN>&quot;id&quot;</span><span
lang=zh-CN>,</span><span lang=en-US> </span><span lang=zh-CN>column=</span><span
style='color:#B43512' lang=zh-CN>&quot;id&quot;</span><span style='color:#666600'
lang=zh-CN>),</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@Result</span><span
style='color:#666600'>(</span>property=<span style='color:#B43512'>&quot;name&quot;</span>,column=<span
style='color:#B43512'>&quot;name&quot;</span><span style='color:#666600'>),</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@Result</span><span
style='color:#666600'>(</span>property=<span style='color:#B43512'>&quot;age&quot;</span>,column=<span
style='color:#B43512'>&quot;age&quot;</span><span style='color:#666600'>),</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@Result</span><span
style='color:#666600'>(</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>property=<span style='color:#B43512'>&quot;address&quot;</span><span
style='color:#666600'>,</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>column=<span style='color:#B43512'>&quot;address_id&quot;</span><span
style='color:#666600'>,</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>one=</span><span style='color:#FFC000' lang=zh-CN>@One</span><span
style='color:#666600' lang=zh-CN>(</span><span lang=zh-CN>select=</span><span
style='color:#B43512' lang=zh-CN>&quot;com.</span><span style='color:#B43512'
lang=en-US>domain</span><span style='color:#B43512' lang=zh-CN>.mapper.AddressMapper.getAddress&quot;</span><span
style='color:#666600' lang=zh-CN>)</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>)<span style='mso-spacerun:yes'>  </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>})<span style='mso-spacerun:yes'>  </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>public List&lt;Student&gt; getAllStudents();</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>interface </span><span lang=en-US>Student</span><span lang=zh-CN>Mapper(</span><span
lang=en-US>){</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@Select</span><span style='color:#666600'>(</span><span
style='color:#B43512'>&quot;select * from mybatis_grade where id=#{id}&quot;</span><span
style='color:#666600'>)</span><span style='color:black'><span
style='mso-spacerun:yes'>  </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@Results</span><span style='color:#666600'>({</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000' lang=zh-CN>@Result</span><span
style='color:#666600' lang=zh-CN>(</span><span style='color:black' lang=zh-CN>id</span><span
style='color:#666600' lang=zh-CN>=</span><span style='color:#000088'
lang=zh-CN>true</span><span style='color:#666600' lang=zh-CN>,</span><span
style='color:black' lang=zh-CN>column</span><span style='color:#666600'
lang=zh-CN>=</span><span style='color:#B43512' lang=zh-CN>&quot;id&quot;</span><span
style='color:#666600' lang=zh-CN>,</span><span style='color:#666600'
lang=en-US> </span><span lang=zh-CN>property</span><span style='color:#666600'
lang=zh-CN>=</span><span style='color:#B43512' lang=zh-CN>&quot;id&quot;</span><span
style='color:#666600' lang=zh-CN>),</span><span style='color:black' lang=zh-CN><span
style='mso-spacerun:yes'>  </span></span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000' lang=zh-CN>@Result</span><span
style='color:#666600' lang=zh-CN>(</span><span style='color:black' lang=zh-CN>column</span><span
style='color:#666600' lang=zh-CN>=</span><span style='color:#B43512'
lang=zh-CN>&quot;grade_name&quot;</span><span lang=zh-CN>,</span><span
lang=en-US> </span><span lang=zh-CN>property</span><span style='color:#666600'
lang=zh-CN>=</span><span style='color:#B43512' lang=zh-CN>&quot;gradeName&quot;</span><span
style='color:#666600' lang=zh-CN>),</span><span style='color:black' lang=zh-CN><span
style='mso-spacerun:yes'>  </span></span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@Result</span><span
style='color:#666600'>(</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>property<span style='color:#666600'>=</span><span style='color:#B43512'>&quot;students&quot;</span><span
style='color:#666600'>,</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>column<span style='color:#666600'>=</span><span style='color:#B43512'>&quot;id&quot;</span><span
style='color:#666600'>,</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>many</span><span style='color:#666600' lang=zh-CN>=</span><span
style='color:#FFC000' lang=zh-CN>@Many</span><span style='color:#666600'
lang=zh-CN>(</span><span lang=zh-CN>select</span><span style='color:#666600'
lang=zh-CN>=</span><span style='color:#B43512' lang=zh-CN>&quot;com.</span><span
style='color:#B43512' lang=en-US>domain</span><span style='color:#B43512'
lang=zh-CN>.mapper.StudentMapper.getStudentsByGradeId&quot;</span><span
style='color:#666600' lang=zh-CN>)</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#666600'>)</span><span style='color:black'><span
style='mso-spacerun:yes'>  </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#666600'>})</span><span style='color:black'><span
style='mso-spacerun:yes'>  </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public Grade getGrade(</span><span lang=en-US>Integer</span><span
lang=zh-CN> id);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
