---
categories:
  - MyBatis
date:
  - 2023-3-27 7:44:42
tags:
  - ［@Options］
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.7215in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.7215in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=en-US>@Options </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>用于配合</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>SQL </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>注解设置字段的属性，例如主键，超时时间等</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

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
  background-color:black;vertical-align:top;width:5.584in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>useCache</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.584in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>是否使用二级缓存</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>flushCache</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.584in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>设置刷新二级缓存机制</p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'><span lang=zh-CN>Options.FlushCachePolicy.</span><span
  lang=en-US>DEFAULT</span></p>
  <p style='margin-left:.75in;font-family:"Microsoft YaHei UI";
  font-size:11.5pt'>表示查询时使用默认策略刷新缓存</p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>Options.FlushCachePolicy.FALSE</p>
  <p style='margin-left:.75in;font-family:"Microsoft YaHei UI";
  font-size:11.5pt'>表示查询时不刷新缓存</p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'><span lang=zh-CN>Options.FlushCachePolicy.</span><span
  lang=en-US>TRUE</span></p>
  <p style='margin-left:.75in;font-family:"Microsoft YaHei UI";
  font-size:11.5pt'>表示查询时刷新缓存</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>resultSetType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.584in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定</span><span
  style='font-family:"Comic Sans MS"'>resultSet</span><span style='font-family:
  "Microsoft YaHei UI"'>数据集合的类型</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>statementType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.584in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>fetchSize</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.584in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>设置每次查询的最大数据条数</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>timeout</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.584in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>设置超时时间</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>useGeneratedKeys</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.584in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>是否根据主键自增</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>keyProperty</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.584in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>实体类中主键的名称</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>keyColumn</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.584in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  background-color:#E7E6E6;vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>resultSets</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.584in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定</span><span
  style='font-family:"Comic Sans MS"'>resultSet</span><span style='font-family:
  "Microsoft YaHei UI"'>集合数据</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.6743in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>databaseId</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.6034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>public&nbsp;interface&nbsp;PersonMapper&nbsp;{</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000' lang=zh-CN>@</span><span
style='color:#FFC000' lang=en-US>Options</span><span lang=en-US>( </span><span
lang=zh-CN>useGeneratedKeys</span><span lang=en-US>=</span><span
style='color:#78230C' lang=en-US>true</span><span lang=en-US>, </span><span
lang=zh-CN>keyProperty</span><span lang=en-US>=</span><span style='color:#78230C'
lang=en-US>&quot;id&quot;</span><span lang=en-US>, </span><span lang=zh-CN>keyColumn</span><span
lang=en-US>=</span><span style='color:#78230C' lang=en-US>&quot;id&quot; </span><span
lang=en-US>)</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000' lang=zh-CN>@</span><span
style='color:#FFC000' lang=en-US>Insert</span><span style='color:black'
lang=zh-CN>(</span><span style='color:maroon' lang=zh-CN>&quot;</span><span
style='color:maroon' lang=en-US>insert into pe</span><span style='color:#78230C'
lang=en-US>rson</span><span style='color:#78230C' lang=zh-CN>&nbsp;(id, name, </span><span
style='color:#78230C' lang=en-US>age</span><span style='color:#78230C'
lang=zh-CN>) values(#{id}, #{</span><span style='color:#78230C' lang=en-US>n</span><span
style='color:#78230C' lang=zh-CN>ame}, #{</span><span style='color:#78230C'
lang=en-US>age</span><span style='color:#78230C' lang=zh-CN>}</span><span
style='color:#78230C' lang=en-US>&quot;</span><span style='color:black'
lang=zh-CN>)</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>public</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=en-US>Person</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>add(</span><span
style='font-family:"Comic Sans MS"' lang=en-US>Person person</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>@Options</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>只能搭配</span><span style='font-family:"Comic Sans MS"'
lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>Insert</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>语句使用。</span></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
