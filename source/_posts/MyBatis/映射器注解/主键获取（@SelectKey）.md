---
categories:
  - MyBatis
date:
  - 2022-11-27 7:47:33
tags:
  - ［@SelectKey］
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.4763in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.4763in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@SelectKey</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>注解的功能与</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> &lt;selectKey&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>标签完全一致。用于解决某些数据库（如</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Oracle</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>）主键不能支持自增的情况</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@SelectKey</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>注解有以下属性：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.427in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.5861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.427in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>statement</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.5861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>以字符串数组形式指定将会被执行的</span><span
  style='font-family:"Comic Sans MS"'> SQL </span><span style='font-family:
  "Microsoft YaHei UI"'>语句</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.427in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>keyProperty</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.5861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>指定作为参数传入的对象对应属性的名称，该属性将会更新成新的值</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.427in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>keyColumn</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.5861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据库中的主键字段名</p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
  style='font-weight:bold'>注</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>keyColumn</span><span
  style='font-family:"Microsoft YaHei UI"'>属性只在某些数据库中有效（如</span><span
  style='font-family:"Comic Sans MS"'> Oracle</span><span style='font-family:
  "Microsoft YaHei UI"'>、</span><span style='font-family:"Comic Sans MS"'>PostgreSQL
  </span><span style='font-family:"Microsoft YaHei UI"'>等）</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.427in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>before</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.5861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>可以指定为&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>true</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;或&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>false</span><span style='font-family:
  "Microsoft YaHei UI"'>&nbsp;以指明</span><span style='font-family:"Comic Sans MS"'>
  SQL </span><span style='font-family:"Microsoft YaHei UI"'>语句应被在插入语句的之前还是之后执行</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.427in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>resultType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.5861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>则指定&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>keyProperty</span><span style='font-family:
  "Microsoft YaHei UI"'>&nbsp;的</span><span style='font-family:"Comic Sans MS"'>
  Java </span><span style='font-family:"Microsoft YaHei UI"'>类型。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.427in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>statementType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.5861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>设置编译的方式</p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>StatementType.STATEMENT</span></li>
  </ul>
  <p style='margin-left:.75in;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>直接操作</span><span style='font-family:
  "Comic Sans MS"'>sql</span><span style='font-family:"Microsoft YaHei UI"'>，不进行预编译，获取数据</span></p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>StatementType.PREPARED</span></li>
  </ul>
  <p style='margin-left:.75in;font-family:"Microsoft YaHei UI";
  font-size:11.5pt'>预处理，参数，进行预编译，获取数据，默认</p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>StatementType.CALLABLE:</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>执行存储过程</span></li>
  </ul>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.427in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>databaseId</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.5861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>MyBatis </span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>3.5.5</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>以上可用</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>, </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>如果有一个配置好的</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> DatabaseIdProvider, MyBatis </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>会加载不带</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> databaseId </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>属性和带有匹配当前数据库</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> databaseId </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>属性的所有语句。如果同时存在带</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> databaseId </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>和不带</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> databaseId </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>属性的相同语句，则后者会被舍弃。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>使用 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@SelectKey
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>注解来在插入前读取数据库序列的值</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>interface </span><span lang=en-US>Student</span><span lang=zh-CN>Mapper(</span><span
lang=en-US>){</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000' lang=zh-CN>@Insert</span><span lang=zh-CN>(</span><span
style='color:#B43512' lang=zh-CN>&quot;insert into </span><span
style='color:#B43512' lang=en-US>user</span><span style='color:#B43512'
lang=zh-CN> (id, name) values(#{nameId}, #{name})&quot;</span><span lang=zh-CN>)</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@SelectKey</span>(</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>statement=<span style='color:#F1937A'>&quot;call next value
for TestSequence&quot;</span>, </p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>keyProperty=<span style='color:#F1937A'>&quot;nameId&quot;</span>,
</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>before=true, </p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>resultType=int.class</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>)</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>int insertTable3(Name name);</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>使用 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@SelectKey
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>注解来在插入后读取数据库自增列的值</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000' lang=zh-CN>@Insert</span><span lang=zh-CN>(</span><span
style='color:#B43512' lang=zh-CN>&quot;insert into </span><span
style='color:#B43512' lang=en-US>user</span><span style='color:#B43512'
lang=zh-CN> (name) values(#{name})&quot;</span><span lang=zh-CN>)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@SelectKey</span>(</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>statement=<span style='color:#B43512'>&quot;call identity()&quot;</span>,
</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>keyProperty=<span style='color:#B43512'>&quot;nameId&quot;</span>, </p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>before=false, </p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>resultType=int.class</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>int insertTable2(Name name);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>获取非自增主键</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>interface </span><span lang=en-US>Student</span><span lang=zh-CN>Mapper(</span><span
lang=en-US>){</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@Insert</span>(<span style='color:#B43512'>&quot;insert
into student(id,name,email,addr)
values(#{id},#{name},#{email},#{address})&quot;</span>)<span
style='mso-spacerun:yes'>  </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@SelectKey</span>(</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>statement=</span><span style='color:#B43512'
lang=zh-CN>&quot;</span><span style='color:#B43512' lang=en-US>select </span><span
style='color:#B43512' lang=zh-CN>UUID()&quot;</span><span lang=zh-CN>,<span
style='mso-spacerun:yes'>   </span></span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>keyProperty=&quot;<span style='color:#B43512'>id&quot;</span>,
</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>resultType=String.class, </p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>before=true</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>)<span style='mso-spacerun:yes'>  </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>int insertStudent(Student student);<span style='mso-spacerun:yes'> 
</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>该注解只能在 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@Insert
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>或 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@InsertProvider
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>或 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@Update
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>或 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@UpdateProvider
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>标注的方法上使用，否则将会被忽略</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果指定了 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@SelectKey
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>注解，那么</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MyBatis </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>就会忽略掉由</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>
     @Options </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt'>注解所设置的生成主键</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'>来自</span><span
style='font-family:"Comic Sans MS"'> &lt;</span><a
href="http://www.mybatis.cn/archives/909.html"><span style='font-family:"Comic Sans MS"'>http://www.mybatis.cn/archives/909.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
