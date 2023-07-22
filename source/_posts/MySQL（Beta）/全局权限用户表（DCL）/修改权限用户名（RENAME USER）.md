---
categories:
- MySQL
tags:
- DCL
date:
- 2023-1-24 17:17:25
---

<body lang=zh-CN style='font-family:Calibri;font-size:11.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.0888in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.0888in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中，我们可以使用&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>RENAME
     USER</span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>&nbsp;语句修改一个或多个已经存在的用户账号</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2151FF'>RENAME USER </span><span
style='font-family:"Comic Sans MS";color:#B43512'>'</span><span
style='font-family:"Microsoft YaHei UI";color:#B43512'>旧用户</span><span
style='font-family:"Microsoft YaHei";color:#B43512'>名</span><span
style='font-family:"Comic Sans MS";color:#B43512'>'</span><span
style='font-family:"Comic Sans MS"'>@</span><span style='font-family:"Comic Sans MS";
color:#B43512'>'IP</span><span style='font-family:"Microsoft YaHei";color:#B43512'>地址</span><span
style='font-family:"Comic Sans MS";color:#B43512'>' </span><span
style='font-family:"Comic Sans MS";color:#2151FF'>TO </span><span
style='font-family:"Comic Sans MS";color:#B43512'>'</span><span
style='font-family:"Microsoft YaHei";color:#B43512'>新用户名</span><span
style='font-family:"Comic Sans MS";color:#B43512'>'</span><span
style='font-family:"Comic Sans MS"'>@</span><span style='font-family:"Comic Sans MS";
color:#B43512'>'IP</span><span style='font-family:"Microsoft YaHei";color:#B43512'>地址</span><span
style='font-family:"Comic Sans MS";color:#B43512'>'</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>RENAME USER </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句用于对原有的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用户进行重命名。</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>若系统中旧账户不存在或者新账户已存在，该语句执行时会出现错误。</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> RENAME USER </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句，必须拥有</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> mysql </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数据库的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> UPDATE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>权限或全局</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CREATE USER </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>权限</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; </span><span style='color:#2151FF'
lang=zh-CN>RENAME USER </span><span style='color:#B43512' lang=zh-CN>'test1'</span><span
lang=zh-CN>@</span><span style='color:#B43512' lang=zh-CN>'localhost'</span><span
lang=en-US> </span><span style='color:#2151FF' lang=zh-CN>TO </span><span
style='color:#B43512' lang=zh-CN>'testUser1'</span><span lang=zh-CN>@</span><span
style='color:#B43512' lang=zh-CN>'localhost'</span><span lang=zh-CN>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.03 sec)</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>

