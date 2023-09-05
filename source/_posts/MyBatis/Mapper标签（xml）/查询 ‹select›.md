---
categories:
  - MyBatis
tags:
  - ‹select>
date:
  - 2023-3-27 7:29:05
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.7076in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.7076in'>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>&lt;select&gt;</span><span
style='font-family:"Microsoft YaHei"' lang=en-US> </span><span
style='font-family:"Microsoft YaHei"' lang=zh-CN>标签用于执行查询操作并返回结果集。</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>&lt;select&gt;</span><span
style='font-family:"Microsoft YaHei"' lang=zh-CN>标签可以嵌套其他标签，来实现动态</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>SQL</span><span
style='font-family:"Microsoft YaHei"' lang=zh-CN>的拼接，例如</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>&lt;if&gt;</span><span
style='font-family:"Microsoft YaHei"' lang=zh-CN>、</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>&lt;where&gt;</span><span
style='font-family:"Microsoft YaHei"' lang=zh-CN>、</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>&lt;foreach&gt;</span><span
style='font-family:"Microsoft YaHei"' lang=zh-CN>等。</span></p>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt;color:#70AD47'><span
style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:blue' lang=zh-CN>&lt;select</span><span lang=zh-CN>
id=&quot;get</span><span lang=en-US>UserList</span><span lang=zh-CN>&quot;
resultType=&quot;</span><span lang=en-US>Users</span><span lang=zh-CN>&quot;&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select * from user<br>
&lt;/select&gt;</span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#ED7D31'
lang=en-US>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.35in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.4152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.35in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN>id</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.4152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>命名空间的唯一标识符，一般是</span><span
  style='font-family:"Comic Sans MS"'> dao </span><span style='font-family:
  "Microsoft YaHei UI"'>中对应的方法名</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3694in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>parameterType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.4652in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>参数类型，可选属性。</span><span
  style='font-family:"Comic Sans MS"'>MyBatis </span><span style='font-family:
  "Microsoft YaHei UI"'>可以通过</span><span style='font-family:"Comic Sans MS"'>
  TypeHandler </span><span style='font-family:"Microsoft YaHei UI"'>推断出具体传入语句的参数，默认值为</span><span
  style='font-family:"Comic Sans MS"'> unset</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.35in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#00B0F0'>resultType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.4152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#00B0F0'>期望返回的数据类型的类的全限定名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.35in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#00B0F0'>resultMap
  </p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.4847in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#00B0F0'><span style='font-family:
  "Microsoft YaHei UI"'>结果集映射，不可以和</span><span style='font-family:"Comic Sans MS"'>
  resultType </span><span style='font-family:"Microsoft YaHei UI"'>同时使用。一般如果返回数据类型是常用的类型，比如</span><span
  style='font-family:"Comic Sans MS"'> String Map List </span><span
  style='font-family:"Microsoft YaHei UI"'>的时候，可以使用</span><span
  style='font-family:"Comic Sans MS"'> resultType</span><span style='font-family:
  "Microsoft YaHei UI"'>。如果返回的是简单</span><span style='font-family:"Comic Sans MS"'>
  POJO </span><span style='font-family:"Microsoft YaHei UI"'>类的时候，也可以直接使用</span><span
  style='font-family:"Comic Sans MS"'> resultType</span><span style='font-family:
  "Microsoft YaHei UI"'>，如果是复杂的映射或者连级查询的时候就需要使用</span><span style='font-family:
  "Comic Sans MS"'> resultMap</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.35in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>flushCache
  </p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.4458in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>将其设置为</span><span
  style='font-family:"Comic Sans MS"'> true</span><span style='font-family:
  "Microsoft YaHei UI"'>，任何时候只要语句被调用，都会导致本地缓存和二级缓存都会被清空，默认值：</span><span
  style='font-family:"Comic Sans MS"'>false</span><span style='font-family:
  "Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.35in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>useCache </p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.4152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>将其设置为</span><span
  style='font-family:"Comic Sans MS"'> true</span><span style='font-family:
  "Microsoft YaHei UI"'>，将会导致本条语句的结果被二级缓存，默认值：对</span><span style='font-family:
  "Comic Sans MS"'> select </span><span style='font-family:"Microsoft YaHei UI"'>元素为 <span style='font-family:
  "Comic Sans MS"'>true</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.35in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>timeout</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.4152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:SFMono-Regular'>等待数据库返回请求结果的秒数</span><span
  style='font-family:"Microsoft YaHei"'>，超时时间</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.35in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>fetchSize</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.4263in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt'>每次获取记录的总条数设定，</p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>MySQL</span><span
  style='font-family:"Microsoft YaHei UI"'>不支持</span><span style='font-family:
  "Comic Sans MS"'>fetchSize</span><span style='font-family:"Microsoft YaHei UI"'>，默认为一次性取出所有数据</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果是</span><span
  style='font-family:"Comic Sans MS"'>Oracle</span><span style='font-family:
  "Microsoft YaHei UI"'>的话就是默认取出</span><span style='font-family:"Comic Sans MS"'>fetchSize</span><span
  style='font-family:"Microsoft YaHei UI"'>条数据。</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>裸露</span><span
  style='font-family:"Comic Sans MS"'>JDBC</span><span style='font-family:"Microsoft YaHei UI"'>防止</span><span
  style='font-family:"Comic Sans MS"'>OOM</span><span style='font-family:"Microsoft YaHei UI"'>可以调用</span><span
  style='font-family:"Comic Sans MS"'>statement</span><span style='font-family:
  "Microsoft YaHei UI"'>的</span><span style='font-family:"Comic Sans MS"'>enableStreamingResults</span><span
  style='font-family:"Microsoft YaHei UI"'>方法</span><span style='font-family:
  "Comic Sans MS"'>,MyBatis</span><span style='font-family:"Microsoft YaHei UI"'>应该在</span><span
  style='font-family:"Comic Sans MS"'>&lt;select
  fetchSize=&quot;-2147483648&quot;&gt;</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>statementType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.4041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>标记操作</span><span
  style='font-family:"Comic Sans MS"'>SQL</span><span style='font-family:"Microsoft YaHei UI"'>的对象</span></p>
  <ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
   0in;font-family:"Comic Sans MS";font-size:11.5pt;font-weight:normal;
   font-style:normal'>
   <li value=1 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt;font-weight:normal;
       font-style:normal;font-family:"Comic Sans MS";font-size:11.5pt'
       lang=en-US>STATEMENT</span><span style='font-family:"Comic Sans MS";
       font-size:11.5pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
       font-size:11.5pt;color:#70AD47' lang=en-US>--------------------&gt;</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt;font-weight:normal;
       font-style:normal;font-family:"Comic Sans MS";font-size:11.5pt;
       color:#70AD47' lang=zh-CN>$—Statement </span></li>
  </ol>
  <p style='margin-left:.75in;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>直接操作</span><span style='font-family:
  "Comic Sans MS"'>sql</span><span style='font-family:"Microsoft YaHei UI"'>，不进行预编译，获取数据</span></p>
  <ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
   0in;font-family:"Comic Sans MS";font-size:11.5pt;font-weight:normal;
   font-style:normal'>
   <li value=2 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt;font-weight:normal;
       font-style:normal;font-family:"Comic Sans MS";font-size:11.5pt'
       lang=en-US>PrepareStatement</span><span style='font-family:"Comic Sans MS";
       font-size:11.5pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
       font-size:11.5pt;color:#70AD47' lang=en-US>--------------&gt;</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt;font-weight:normal;
       font-style:normal;font-family:"Comic Sans MS";font-size:11.5pt;
       color:#70AD47' lang=zh-CN>#—PreparedStatement</span></li>
  </ol>
  <p style='margin-left:.75in;font-family:"Microsoft YaHei UI";
  font-size:11.5pt'>默认，预处理，参数，进行预编译，获取数据</p>
  <ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
   0in;font-family:"Comic Sans MS";font-size:11.5pt;font-weight:normal;
   font-style:normal'>
   <li value=3 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt;font-weight:normal;
       font-style:normal;font-family:"Comic Sans MS";font-size:11.5pt'
       lang=en-US>CALLABLESTATEMENT</span><span style='font-family:"Comic Sans MS";
       font-size:11.5pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
       font-size:11.5pt;color:#70AD47' lang=en-US>-------&gt;</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt;font-weight:normal;
       font-style:normal;font-family:"Comic Sans MS";font-size:11.5pt;
       color:#70AD47' lang=zh-CN>CallableStatement</span></li>
  </ol>
  <p style='margin-left:.75in;font-size:11.5pt'><span
  style='font-family:"Comic Sans MS"'>CALLABLE:</span><span style='font-family:
  "Microsoft YaHei UI"'>执行存储过程</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>要实现动态传入表名、列名，需要做如下修改 ，添加属性</span><span style='font-family:"Comic Sans MS";
  color:#F33B45' lang=zh-CN>statementType=</span><span style='font-family:"Comic Sans MS";
  color:#F33B45' lang=en-US>&quot;</span><span style='font-family:"Comic Sans MS";
  color:#F33B45' lang=zh-CN>STATEMENT</span><span style='font-family:"Comic Sans MS";
  color:#F33B45' lang=en-US>&quot;</span><span style='font-family:"Microsoft YaHei UI";
  color:#F33B45' lang=zh-CN> ，同时</span><span style='font-family:"Comic Sans MS";
  color:#F33B45' lang=zh-CN>sql</span><span style='font-family:"Microsoft YaHei UI";
  color:#F33B45' lang=zh-CN>里的属有变量取值都改成</span><span style='font-family:"Comic Sans MS";
  color:#F33B45' lang=zh-CN>${xxxx}</span><span style='font-family:"Microsoft YaHei UI";
  color:#F33B45' lang=zh-CN>，而不是</span><span style='font-family:"Comic Sans MS";
  color:#F33B45' lang=zh-CN>#{xxx}</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.35in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>resultSetType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.4152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:12.0pt'><span style='font-family:"Comic Sans MS"'>FORWARD_ONLY</span><span
  style='font-family:"Microsoft YaHei"'>，</span><span style='font-family:"Comic Sans MS"'>SCROLL_SENSITIVE,
  SCROLL_INSENSITIVE </span><span style='font-family:"Microsoft YaHei"'>或</span><span
  style='font-family:"Comic Sans MS"'> DEFAULT</span><span style='font-family:
  "Microsoft YaHei"'>（等价于</span><span style='font-family:"Comic Sans MS"'>
  unset</span><span style='font-family:"Microsoft YaHei"'>） 中的一个，默认值为</span><span
  style='font-family:"Comic Sans MS"'> unset </span><span style='font-family:
  "Microsoft YaHei"'>（依赖数据库驱动）。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.35in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>databaseId</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.4152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>取值</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>oracle</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>、</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>mysql</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>等，表示</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>sql</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语句的数据库类型。</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>元素内部可通过</span><span
  style='font-family:"Comic Sans MS"'>&lt;if test=&quot;_databaseId =
  'oracle'&quot;&gt;</span><span style='font-family:"Microsoft YaHei UI"'>来为特定数据库指定不同的</span><span
  style='font-family:"Comic Sans MS"'>sql</span><span style='font-family:"Microsoft YaHei UI"'>语句</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.35in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>resultOrdered</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.4423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>这个设置仅针对嵌套结果</span><span
  style='font-family:"Comic Sans MS"'> select </span><span style='font-family:
  "Microsoft YaHei UI"'>语句：如果为</span><span style='font-family:"Comic Sans MS"'>
  true</span><span style='font-family:"Microsoft YaHei UI"'>，将会假设包含了嵌套结果集或是分组，当返回一个主结果行时，就不会产生对前面结果集的引用。
  这就使得在获取嵌套结果集的时候不至于内存不够用。默认值：</span><span style='font-family:"Comic Sans MS"'>false</span><span
  style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.35in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>resultSets</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.4152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>这个设置仅适用于多结果集的情况。它将列出语句执行后返回的结果集并赋予每个结果集一个名称，多个名称之间以逗号分隔。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.35in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>lang</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.4152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>用于指定</span><span
  style='font-family:"Comic Sans MS"'> SQL </span><span style='font-family:
  "Microsoft YaHei UI"'>的语言类型</span></p>
  </td>
 </tr>
</table>

</div>

<p><cite style='font-family:Calibri;font-size:11.0pt'>&nbsp;</cite></p>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://mybatis.net.cn/sqlmap-xml.html#cache"><span style='font-family:
"Comic Sans MS"'>https://mybatis.net.cn/sqlmap-xml.html#cache</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
