---
categories:
  - MyBatis
tags:
  - ‹discriminator›
date:
  - 2022-11-27 7:31:00
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.4583in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.4583in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&lt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>discriminator</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>用于根据查询结果的某个字段值，决定使用哪个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> SQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>映射配置</span></li>
</ul>

<p style='font-family:Calibri;font-size:12.0pt' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>有时候，一个数据库查询可能会返回多个不同的结果集（但总体上还是有一定的联系的），
     鉴别器</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US>&lt;</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt' lang=zh-CN>discriminator</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>&gt; </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>就是被设计来应对这种情况的，比如一般班级中的学生有男女</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&lt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>discriminator</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>常用的两个属性如下：</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.1145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  vertical-align:top;width:1.1145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>column</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.8298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>该属性用于设置要进行鉴别比较值的列。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.1145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>javaType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.8298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>该属性用于指定列的类型，保证使用相同的</span><span
  style='font-family:"Comic Sans MS"'>java</span><span style='font-family:"Microsoft YaHei UI"'>类型来比较值。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.134in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>typeHandler</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.8701in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>使用这个属性</span><span style='font-family:
  "Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>你可以覆盖默认的</span><span
  style='font-family:"Comic Sans MS"'> typeHandler </span><span
  style='font-family:"Microsoft YaHei UI"'>类型处理器。 </span></p>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>这个属性值是类的完全限定名或者是一个类型处理器的实现</span><span
  style='font-family:"Comic Sans MS"'>, </span><span style='font-family:"Microsoft YaHei UI"'>或者是类型别名。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.1145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>jdbcType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.8993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>在这个表格之前的所支持的</span><span
  style='font-family:"Comic Sans MS"'> JDBC </span><span style='font-family:
  "Microsoft YaHei UI"'>类型列表中的类型。</span><span style='font-family:"Comic Sans MS"'>JDBC
  </span><span style='font-family:"Microsoft YaHei UI"'>类型是仅仅 需要对插入</span><span
  style='font-family:"Comic Sans MS"'>, </span><span style='font-family:"Microsoft YaHei UI"'>更新和删除操作可能为空的列进行处理。</span></p>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>这是</span><span style='font-family:
  "Comic Sans MS"'> JDBC </span><span style='font-family:"Microsoft YaHei UI"'>的需要</span><span
  style='font-family:"Comic Sans MS"'>, jdbcType </span><span style='font-family:
  "Microsoft YaHei UI"'>而不是</span><span style='font-family:"Comic Sans MS"'>
  MyBatis </span><span style='font-family:"Microsoft YaHei UI"'>的。如果你直接使用</span><span
  style='font-family:"Comic Sans MS"'> JDBC </span><span style='font-family:
  "Microsoft YaHei UI"'>编程</span><span style='font-family:"Comic Sans MS"'>,</span><span
  style='font-family:"Microsoft YaHei UI"'>你需要指定这个类型</span><span
  style='font-family:"Comic Sans MS"'>-</span><span style='font-family:"Microsoft YaHei UI"'>但
  仅仅对可能为空的值。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&lt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>discriminator</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>可以有</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>1</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>个或多个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> &lt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>case</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>标签，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&lt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>case</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>有一个比较重要的属性</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.2784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>value</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.3298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>该值为</span><span
  style='font-family:"Comic Sans MS"'>discriminator</span><span
  style='font-family:"Microsoft YaHei UI"'>指定</span><span style='font-family:
  "Comic Sans MS"'>column</span><span style='font-family:"Microsoft YaHei UI"'>用来匹配的值，当匹配的时候，结果会走这个</span><span
  style='font-family:"Comic Sans MS"'>case</span><span style='font-family:"Microsoft YaHei UI"'>关联的映射</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.952in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>resultMap</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.259in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>用于嵌套外部</span><span style='font-family:"Comic Sans MS"' lang=en-US>resultMap</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>结果集</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.9458in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>resultSet</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.2652in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt'>指定用于加载复杂类型的结果集名字。</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'><span lang=zh-CN>&lt;resultMap id=&quot;</span><span
lang=en-US>user</span><span lang=zh-CN>Map&quot; type=&quot;</span><span
lang=en-US>Users</span><span lang=zh-CN>&quot;&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'><span style='mso-spacerun:yes'>    </span>&lt;id
column=&quot;id&quot; property=&quot;id&quot;/&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'><span lang=zh-CN><span style='mso-spacerun:yes'>   
</span>&lt;result column=&quot;</span><span lang=en-US>name</span><span
lang=zh-CN>&quot; property=&quot;</span><span lang=en-US>name</span><span
lang=zh-CN>&quot;/&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'><span lang=en-US><span style='mso-spacerun:yes'>   
</span></span><span lang=zh-CN>&lt;result column=&quot;</span><span lang=en-US>role</span><span
lang=zh-CN>&quot; property=&quot;</span><span lang=en-US>role</span><span
lang=zh-CN>&quot;/&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'><span style='mso-spacerun:yes'>   </span></span><span
style='font-family:"Comic Sans MS";color:#70AD47'><span
style='mso-spacerun:yes'> </span>&lt;!-- </span><span style='font-family:"Microsoft YaHei UI";
color:#70AD47'>鉴别器</span><span style='font-family:"Comic Sans MS";color:#70AD47'>
--&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>   
</span>&lt;discriminator javaType=&quot;int&quot; column=&quot;</span><span
lang=en-US>role</span><span lang=zh-CN>&quot;&gt;</span></p>

<p style='margin-left:.75in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'> </span></span><span style='font-family:"Comic Sans MS";
color:#70AD47' lang=zh-CN>&lt;!--</span><span style='font-family:"Microsoft YaHei UI";
color:#70AD47' lang=zh-CN>通过</span><span style='font-family:"Comic Sans MS";
color:#70AD47' lang=en-US>role</span><span style='font-family:"Microsoft YaHei UI";
color:#70AD47' lang=zh-CN>查询用户信息</span><span style='font-family:"Comic Sans MS";
color:#70AD47' lang=zh-CN>--&gt;</span></p>

<p style='margin-left:.75in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>&lt;case value=&quot;</span><span
style='font-family:"Comic Sans MS"' lang=en-US>0</span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>&quot;&gt;</span><span style='font-family:"Comic Sans MS"'
lang=en-US> </span><span style='font-family:"Comic Sans MS";color:#70AD47'
lang=en-US>//</span><span style='font-family:"Microsoft YaHei UI";color:#70AD47'
lang=zh-CN>教师</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>           
</span>&lt;association property=&quot;</span><span lang=en-US>UserDeatil</span><span
lang=zh-CN>&quot; select=&quot;</span><span style='font-weight:bold;color:#00B0F0'
lang=zh-CN>get</span><span style='font-weight:bold;color:#00B0F0' lang=en-US>TeacherByRole</span><span
lang=zh-CN>&quot; column=&quot;</span><span lang=en-US>role</span><span
lang=zh-CN>&quot;/&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>&lt;/case&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>        </span>&lt;case value=&quot;</span><span
style='font-family:"Comic Sans MS"' lang=en-US>1</span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>&quot;&gt;</span><span style='font-family:"Comic Sans MS"'
lang=en-US> </span><span style='font-family:"Comic Sans MS";color:#70AD47'
lang=en-US><span style='mso-spacerun:yes'> </span>//</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>学生</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>           
</span>&lt;association property=&quot;</span><span lang=en-US>UserDetail</span><span
lang=zh-CN>&quot; select=&quot;</span><span style='font-weight:bold;color:#00B0F0'
lang=zh-CN>get</span><span style='font-weight:bold;color:#00B0F0' lang=en-US>StudenetByRole</span><span
lang=zh-CN>&quot; column=&quot;</span><span lang=en-US>role</span><span
lang=zh-CN>&quot;/&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>&lt;/case&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>&lt;/discriminator&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'>&lt;/resultMap&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'><span lang=zh-CN>&lt;select id=&quot;get</span><span
lang=en-US>UserByName</span><span lang=zh-CN>&quot; resultMap=&quot;</span><span
lang=en-US>userMap</span><span lang=zh-CN>&quot;&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'><span style='mso-spacerun:yes'>    </span>&lt;![CDATA[</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'><span lang=zh-CN><span style='mso-spacerun:yes'>   
</span>SELECT</span><span lang=en-US> </span><span lang=zh-CN>id,</span><span
lang=en-US> name, role</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'><span lang=zh-CN><span style='mso-spacerun:yes'>   
</span>FROM </span><span lang=en-US><span
style='mso-spacerun:yes'> </span>class c</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'><span lang=zh-CN><span style='mso-spacerun:yes'>   
</span>WHERE</span><span lang=en-US> c</span><span lang=zh-CN>.</span><span
lang=en-US>id</span><span lang=zh-CN> = #</span><span lang=en-US>{id</span><span
lang=zh-CN>}</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'><span style='mso-spacerun:yes'>    </span>]]&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'>&lt;/select&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>discriminator</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>内部的</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>case</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>会和每行查询结果中的</span><span
style='font-family:"Comic Sans MS"' lang=en-US>sex</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>字段进行匹配，匹配成功了</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>case</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>内部的关联查询会被执行，未匹配上的，只会走</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>discriminator</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>外部默认配置的映射映射规则。</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>&lt;!-- </span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>通过用户</span><span
style='font-family:"Comic Sans MS"' lang=en-US>sex</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>查询用户信息</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> --&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>&lt;select id=&quot;</span><span style='font-weight:
bold;color:#00B0F0' lang=zh-CN>get</span><span style='font-weight:bold;
color:#00B0F0' lang=en-US>Teacher</span><span lang=zh-CN>&quot;
resultType=&quot;</span><span lang=en-US>UserDetail</span><span lang=zh-CN>&quot;&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>SELECT </span><span lang=en-US>* </span><span
lang=zh-CN>FROM </span><span lang=en-US>tacher</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/select&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>&lt;select id=&quot;</span><span style='font-weight:
bold;color:#00B0F0' lang=zh-CN>get</span><span style='font-weight:bold;
color:#00B0F0' lang=en-US>Student</span><span lang=zh-CN>&quot;
resultType=&quot;</span><span lang=en-US>UserDetail</span><span lang=zh-CN>&quot;&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>SELECT </span><span lang=en-US>* </span><span
lang=zh-CN>FROM </span><span lang=en-US>user</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/select&gt;</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
