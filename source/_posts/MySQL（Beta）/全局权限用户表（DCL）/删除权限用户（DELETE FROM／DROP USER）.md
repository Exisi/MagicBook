---
categories:
- MySQL
tags:
- DCL
date:
- 2023-1-24 23:21:11
---

<body lang=zh-CN style='font-family:Calibri;font-size:11.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5666in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5666in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数据库中，删除权限用户有两种方法</span></li>
 <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
  margin-bottom:0in'>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>使用</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'> DROP USER </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句删除用户</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>使用</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'>DELETE</span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句直接在</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'> mysql.user </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表中删除用户以及相关权限</span></li>
 </ul>
</ul>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Microsoft YaHei"' lang=zh-CN>使用</span><span style='font-weight:
bold;font-family:"Comic Sans MS"' lang=en-US>DROP USER</span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>语句</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#444444'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DROP USER </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句可用于删除一个或多个用户，并撤销其权限</span></li>
</ul>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>DROP USER </span><span style='font-family:
"Comic Sans MS";color:#B43512'>'</span><span style='font-family:"Microsoft YaHei UI";
color:#B43512'>用户</span><span style='font-family:"Microsoft YaHei";color:#B43512'>名</span><span
style='font-family:"Comic Sans MS";color:#B43512'>'</span><span
style='font-family:"Comic Sans MS"'>@</span><span style='font-family:"Comic Sans MS";
color:#B43512'>'IP</span><span style='font-family:"Microsoft YaHei";color:#B43512'>地址</span><span
style='font-family:"Comic Sans MS";color:#B43512'>'</span><span
style='font-family:"Comic Sans MS";color:#A5A5A5'> , '</span><span
style='font-family:"Microsoft YaHei UI";color:#A5A5A5'>用户</span><span
style='font-family:"Microsoft YaHei";color:#A5A5A5'>名</span><span
style='font-family:"Comic Sans MS";color:#A5A5A5'>'@'IP</span><span
style='font-family:"Microsoft YaHei";color:#A5A5A5'>地址</span><span
style='font-family:"Comic Sans MS";color:#A5A5A5'>', </span><span
style='font-family:"Microsoft YaHei UI";color:#A5A5A5'>…</span></p>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#444444'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DROP USER </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句必须拥有</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> mysql</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;数据库的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DELETE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>权限或全局</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CREATE USER </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>权限。</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#444444'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DROP USER </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句的使用中，若没有明确地给出账户的主机名，则该主机名默认为“</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>%</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>”</span></li>
</ul>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>权限用户的删除不会影响他们之前所创建的表、索引或其他数据库对象，因为
     MySQL 并不会记录是谁创建了这些对象</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; DROP USER 'test1'@'localhost';</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.00 sec)</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Microsoft YaHei"' lang=zh-CN>使用</span><span style='font-weight:
bold;font-family:"Comic Sans MS"' lang=en-US>DELETE</span><span
style='font-weight:bold;font-family:"Microsoft YaHei"' lang=zh-CN>语句</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DELETE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句直接删除</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> mysql.user </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表中相应的用户信息，必须拥有</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> mysql.user </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DELETE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>权限</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>mysql</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Host </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> User </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>这两个字段都是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>
     mysql.user </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>表的主键。因此，需要同时匹配两个字段的值才能确定一条记录</span></li>
</ul>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2151FF' lang=zh-CN>DELETE FROM</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> mysql.user </span><span
style='font-family:"Comic Sans MS";color:#2151FF' lang=zh-CN>WHERE</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> Host=</span><span
style='font-family:"Comic Sans MS";color:#B43512' lang=zh-CN>'IP</span><span
style='font-family:"Microsoft YaHei";color:#B43512' lang=zh-CN>地址</span><span
style='font-family:"Comic Sans MS";color:#B43512' lang=zh-CN>'</span><span
style='font-family:"Comic Sans MS";color:#B43512' lang=en-US> </span><span
style='font-family:"Comic Sans MS";color:#2151FF' lang=zh-CN>AND</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> User=</span><span
style='font-family:"Comic Sans MS";color:#B43512' lang=zh-CN>'</span><span
style='font-family:"Microsoft YaHei UI";color:#B43512' lang=zh-CN>用户</span><span
style='font-family:"Microsoft YaHei";color:#B43512' lang=zh-CN>名</span><span
style='font-family:"Comic Sans MS";color:#B43512' lang=zh-CN>'</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>DELETE FROM mysql.user WHERE Host=<span style='color:#B43512'>'localhost'</span>AND
User=<span style='color:#B43512'>'test2'</span>;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 1 rows affected (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>

