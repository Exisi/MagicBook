---
categories:
  - MyBatis
tags:
  - ‹delete›
date:
  - 2021-3-27 7:29:15
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.8881in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.8881in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;delete&gt;</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>常用于从数据库中删除记录。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt;color:#70AD47'><span
style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0070C0' lang=zh-CN>&lt;delete</span><span
lang=zh-CN> id=&quot;delete&quot;</span><span lang=en-US> </span><span
lang=zh-CN>parameterType=&quot;</span><span lang=en-US>Users</span><span
lang=zh-CN>&quot;</span><span style='color:#0070C0' lang=zh-CN>&gt; </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>delete from </span><span lang=en-US>user</span><span
lang=zh-CN> where id = #{id} </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#0070C0'>&lt;/delete&gt;</p>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.5583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.8659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.5583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>id</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.8659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>命名空间的唯一标识符，一般是</span><span
  style='font-family:"Comic Sans MS"'> dao </span><span style='font-family:
  "Microsoft YaHei UI"'>中对应的方法名</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.5583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>parameterType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.8659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>参数类型，可选属性。</span><span
  style='font-family:"Comic Sans MS"'>MyBatis </span><span style='font-family:
  "Microsoft YaHei UI"'>可以通过</span><span style='font-family:"Comic Sans MS"'>
  TypeHandler </span><span style='font-family:"Microsoft YaHei UI"'>推断出具体传入语句的参数，默认值为</span><span
  style='font-family:"Comic Sans MS"'> unset</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.5583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>flushCache
  </p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.9354in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>将其设置为</span><span
  style='font-family:"Comic Sans MS"'> true</span><span style='font-family:
  "Microsoft YaHei UI"'>，任何时候只要语句被调用，都会导致本地缓存和二级缓存都会被清空，默认值：</span><span
  style='font-family:"Comic Sans MS"'>false</span><span style='font-family:
  "Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.5583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>timeout</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.8659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:SFMono-Regular'>等待数据库返回请求结果的秒数</span><span
  style='font-family:"Microsoft YaHei"'>，超时时间</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.5583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>statementType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.9354in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  background-color:#E7E6E6;vertical-align:top;width:1.5583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>databaseId</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.9354in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  background-color:white;vertical-align:top;width:1.5583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>lang</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.8659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>用于指定</span><span
  style='font-family:"Comic Sans MS"'> SQL </span><span style='font-family:
  "Microsoft YaHei UI"'>的语言类型</span></p>
  </td>
 </tr>
</table>

</div>

</div>

</div>

</div>

<!--EndFragment-->
</body>
