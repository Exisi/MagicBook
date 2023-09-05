---
categories:
  - MyBatis
tags:
  - ‹selectKey›
date:
  - 2023-3-27 7:29:10
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.3354in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.3354in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;selectKey&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>用于在插入数据时获取自动生成的主键值。在执行插入操作后，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;selectKey&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>可以将自动生成的主键值赋值给</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Java</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>对象的属性或者直接返回给调用者。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>SELECT
     LAST_INSERT_ID() </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>这个</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>sql</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>语句来获取插入记录后返回的自增</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=zh-CN>id</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在执行插入操作时，需要获取自动生成的主键值，并将其赋值给</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Java</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对象的属性。即在内部使用</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;insert id=&quot;insertUser&quot; parameterType=&quot;User&quot;&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>INSERT INTO users (name, age) VALUES (#{name}, #{age})</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&lt;selectKey keyProperty=&quot;id&quot;
resultType=&quot;java.lang.Integer&quot; order=&quot;AFTER&quot;&gt;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>SELECT LAST_INSERT_ID()</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&lt;/selectKey&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/insert&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在执行插入操作时，需要获取自动生成的主键值，并将其返回给调用者。即在外部使用，调用后生效</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>&lt;insert id=&quot;insert&quot;
parameterClass=&quot;User</span><span lang=en-US>s</span><span lang=zh-CN>&quot;</span><span
lang=en-US> </span><span style='color:#B43512' lang=zh-CN>useGeneratedKeys=&quot;true&quot;
keyProperty=&quot;id&quot;</span><span lang=zh-CN>&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>INSERT INTO user</span><span lang=en-US> </span><span
lang=zh-CN>(</span><span style='color:#7F7F7F' lang=zh-CN>user_nick,tel_phone,address,status,
user_type,remark, gmt_create, gmt_modified</span><span lang=zh-CN>)</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>VALUES (</span><span style='color:#7F7F7F' lang=zh-CN>#userNick#,
#telPhone#, #address#, #status#,</span><span style='color:#7F7F7F' lang=en-US> </span><span
style='color:#7F7F7F' lang=zh-CN>#userType#, #remark#, now(), now()</span><span
lang=zh-CN>)</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&lt;selectKey keyProperty=&quot;id&quot;
resultType=&quot;java.lang.Integer&quot;&gt;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>SELECT LAST_INSERT_ID() AS value</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&lt;/selectKey&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/insert&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.5pt;color:#ED7D31' lang=en-US>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.3576in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
  color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:7.5145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3576in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'>keyProperty</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.5145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:12.0pt'><span style='font-family:"Comic Sans MS"'>selectKey</span><span
  style='font-family:"Microsoft YaHei UI"'>语句结果应该被设置的目标属性。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3576in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'>resultType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.584in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'>结果的类型。</span><span
  style='font-family:"Comic Sans MS"'>MyBatis </span><span style='font-family:
  "Microsoft YaHei UI"'>通常可以算出来</span><span style='font-family:"Comic Sans MS"'>;</span><span
  style='font-family:"Microsoft YaHei UI"'>但是写上也没有问题。</span><span
  style='font-family:"Comic Sans MS"'>MyBatis </span><span style='font-family:
  "Microsoft YaHei UI"'>允许任何简单类型用作主键的类型</span><span style='font-family:"Comic Sans MS"'>,</span><span
  style='font-family:"Microsoft YaHei UI"'>包括字符串。</span></p>
  <p style='font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'>这可以被设置为</span><span
  style='font-family:"Comic Sans MS"'>BEFORE</span><span style='font-family:
  "Microsoft YaHei UI"'>或</span><span style='font-family:"Comic Sans MS"'>AFTER</span><span
  style='font-family:"Microsoft YaHei UI"'>。如果设置为</span><span style='font-family:
  "Comic Sans MS"'>BEFORE,</span><span style='font-family:"Microsoft YaHei UI"'>那么它会首先选择主键</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>设置</span><span
  style='font-family:"Comic Sans MS"'>keyProperty </span><span
  style='font-family:"Microsoft YaHei UI"'>然后执行插入语句。如果设置为</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3576in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'>order</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.559in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'><span
  lang=zh-CN>AFTER</span><span lang=en-US>/</span><span lang=zh-CN>BEFORE</span></p>
  <p style='font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'>如果设置为</span><span
  style='font-family:"Comic Sans MS"'> BEFORE,</span><span style='font-family:
  "Microsoft YaHei UI"'>那么它会首先选择主键</span><span style='font-family:"Comic Sans MS"'>,</span><span
  style='font-family:"Microsoft YaHei UI"'>设置</span><span style='font-family:
  "Comic Sans MS"'> keyProperty </span><span style='font-family:"Microsoft YaHei UI"'>然后执行插入语句。如果设置为</span><span
  style='font-family:"Comic Sans MS"'> AFTER,</span><span style='font-family:
  "Microsoft YaHei UI"'>那么先执行插入语句</span><span style='font-family:"Comic Sans MS"'>,</span><span
  style='font-family:"Microsoft YaHei UI"'>然后是</span><span style='font-family:
  "Comic Sans MS"'> selectKey </span><span style='font-family:"Microsoft YaHei UI"'>元素</span><span
  style='font-family:"Comic Sans MS"'>-</span><span style='font-family:"Microsoft YaHei UI"'>这和如</span><span
  style='font-family:"Comic Sans MS"'> Oracle </span><span style='font-family:
  "Microsoft YaHei UI"'>数据库相似</span><span style='font-family:"Comic Sans MS"'>,</span><span
  style='font-family:"Microsoft YaHei UI"'>可以在插入语句中嵌入序列调用</span></p>
  <p style='font-size:12.0pt'><span style='font-weight:bold;
  font-family:"Comic Sans MS"'>SelectKey</span><span style='font-weight:bold;
  font-family:"Microsoft YaHei UI"'>需要注意</span><span style='font-weight:bold;
  font-family:"Comic Sans MS"'>order</span><span style='font-weight:bold;
  font-family:"Microsoft YaHei UI"'>属性，像</span><span style='font-weight:bold;
  font-family:"Comic Sans MS"'>Mysql</span><span style='font-weight:bold;
  font-family:"Microsoft YaHei UI"'>一类支持自动增长类型的数据库中，</span><span
  style='font-weight:bold;font-family:"Comic Sans MS"'>order</span><span
  style='font-weight:bold;font-family:"Microsoft YaHei UI"'>需要设置为</span><span
  style='font-weight:bold;font-family:"Comic Sans MS"'>after</span><span
  style='font-weight:bold;font-family:"Microsoft YaHei UI"'>才会取到正确的值</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.377in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'>statementType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.4951in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'>和前面的相同</span><span
  style='font-family:"Comic Sans MS"'>,MyBatis </span><span style='font-family:
  "Microsoft YaHei UI"'>支持</span><span style='font-family:"Comic Sans MS"'>STATEMENT
  ,PREPARED</span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
  style='font-family:"Comic Sans MS"'>CALLABLE</span><span style='font-family:
  "Microsoft YaHei UI"'>语句的映射类型分别代表</span><span style='font-family:"Comic Sans MS"'>PreparedStatement</span><span
  style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
  "Comic Sans MS"'>CallableStatement</span><span style='font-family:"Microsoft YaHei UI"'>类型。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3576in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>keyColumn</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.5145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt'>返回结果集中生成列属性的列名。如果生成列不止一个，可以用逗号分隔多个属性名称。</p>
  </td>
 </tr>
</table>

</div>

</div>

</div>

</div>

<!--EndFragment-->
</body>
