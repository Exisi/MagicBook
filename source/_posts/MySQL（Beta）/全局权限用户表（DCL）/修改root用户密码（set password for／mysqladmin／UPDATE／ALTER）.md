---
categories:
  - MySQL
tags:
  - DCL
date:
  - 2023-1-24 18:18:35
---

<body lang=zh-CN style='font-family:Calibri;font-size:11.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:6.0812in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:6.0812in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中，有四种方式可以修改权限用户的密码</span></li>
 <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
  margin-bottom:0in'>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>使用</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>mysqladmin</span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>命令</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>使用</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>set
      password for</span><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt' lang=zh-CN>命令</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>使用</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>UPDATA</span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>使用</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>ALTER</span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句</span></li>
 </ul>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Microsoft YaHei UI";color:#111111' lang=zh-CN>使用</span><span
style='font-weight:bold;font-family:"Comic Sans MS";color:#111111' lang=en-US> </span><span
style='font-weight:bold;font-family:"Comic Sans MS";color:#111111' lang=zh-CN>mysqladmin</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>命令</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mysqladmin</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>官方提供的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>shell</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>命令行工具</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>(mysql</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>是连接工具</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>)</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，其参数都需要在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>shell</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>命令行上执行。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mysqladmin</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>提供了两类参数：连接参数和命令参数，连接参数用来指定连接信息，命令参数则是服务命令</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>root </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用户可以使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> mysqladmin </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>命令来修改密码</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mysqladmin</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>命令需要先输入旧密码登录，然后更改密码为新密码</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>mysqladmin -u</span><span style='font-family:
"Microsoft YaHei UI"'>用户名</span><span style='font-family:"Comic Sans MS"'> -p</span><span
style='font-family:"Microsoft YaHei UI"'>旧密码</span><span style='font-family:
"Comic Sans MS"'> password </span><span style='font-family:"Microsoft YaHei UI"'>新密码&nbsp;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>C:\Users&gt;mysqladmin -u root -p password &quot;rootpwd&quot;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Enter password: ****</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysqladmin: [Warning] Using a password on the command line interface
can be insecure.</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Warning: Since password will be sent to server in plain text, use ssl
connection to ensure password safety.</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>输入</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> mysqladmin </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>命令后，按回车键，然后输入</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> root </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用户原来的密码。执行完毕后，密码修改成功，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>root </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用户登录时将使用新的密码。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>运行结果中，输入密码后会提示在命令行界面上使用密码可能不安全的警告信息，因为在命令行输入密码时，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>服务器就会提示这些安全警告信息</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Microsoft YaHei UI";color:#111111' lang=zh-CN>使用</span><span
style='font-weight:bold;font-family:"Comic Sans MS";color:#111111' lang=en-US>
set password for </span><span style='font-weight:bold;font-family:"Microsoft YaHei UI";
color:#111111' lang=zh-CN>命令</span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>&nbsp;</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中，只有</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> root </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用户可以通过更新</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数据库来更改密码。使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> root </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用户登录到</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>服务器后，可以使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SET </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句来修改普通用户密码</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>set password for </span><span
style='font-family:"Comic Sans MS";color:#B43512' lang=en-US>'</span><span
style='font-family:"Microsoft YaHei UI";color:#B43512' lang=zh-CN>用户名</span><span
style='font-family:"Comic Sans MS";color:#B43512' lang=en-US>'</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>@</span><span style='font-family:
"Comic Sans MS";color:#B43512' lang=en-US>'IP</span><span style='font-family:
"Microsoft YaHei UI";color:#B43512' lang=zh-CN>地址</span><span style='font-family:
"Comic Sans MS";color:#B43512' lang=en-US>'</span><span style='font-family:
"Comic Sans MS"' lang=zh-CN> = password(</span><span style='font-family:"Comic Sans MS";
color:#B43512' lang=zh-CN>'</span><span style='font-family:"Microsoft YaHei UI";
color:#B43512' lang=zh-CN>新密码</span><span style='font-family:"Comic Sans MS";
color:#B43512' lang=zh-CN>'</span><span style='font-family:"Comic Sans MS"'
lang=zh-CN>)</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; SET PASSWORD FOR 'testuser'@'localhost' =
PASSWORD(&quot;newpwd&quot;);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected, 1 warning (0.01 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt;color:#111111'><span style='font-weight:
bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>使用</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> </span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=zh-CN>UPDATE</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>语法</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;使用</span><span
style='font-family:"Comic Sans MS"' lang=en-US>update</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语法修改直接</span><span
style='font-family:"Comic Sans MS"' lang=en-US>mysql.user</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>中的密码字段</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2151FF' lang=en-US>UPDATE</span><span
style='font-family:"Comic Sans MS"' lang=en-US> user </span><span
style='font-family:"Comic Sans MS";color:#2151FF' lang=en-US>SET </span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>authentication_string</span><span
style='font-family:"Comic Sans MS"' lang=en-US> = password(</span><span
style='font-family:"Comic Sans MS";color:#B43512' lang=en-US>'</span><span
style='font-family:"Microsoft YaHei UI";color:#B43512' lang=zh-CN>新密码</span><span
style='font-family:"Comic Sans MS";color:#B43512' lang=en-US>'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>) </span><span style='font-family:
"Comic Sans MS";color:#2151FF' lang=en-US>WHERE</span><span style='font-family:
"Comic Sans MS"' lang=en-US> user = </span><span style='font-family:"Comic Sans MS";
color:#B43512' lang=en-US>'</span><span style='font-family:"Microsoft YaHei UI";
color:#B43512' lang=zh-CN>用户名</span><span style='font-family:"Comic Sans MS";
color:#B43512' lang=en-US>' </span><span style='font-family:"Comic Sans MS";
color:#2151FF' lang=en-US>AND</span><span style='font-family:"Comic Sans MS"'
lang=en-US> host = </span><span style='font-family:"Comic Sans MS";color:#B43512'
lang=en-US>'IP</span><span style='font-family:"Microsoft YaHei UI";color:#B43512'
lang=zh-CN>地址</span><span style='font-family:"Comic Sans MS";color:#B43512'
lang=en-US>'</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt;</span><span lang=en-US> USE mysql;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>mysql&gt; </span><span
style='font-family:"Comic Sans MS";color:#2151FF' lang=en-US>UPDATE</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> user </span><span
style='font-family:"Comic Sans MS";color:#2151FF' lang=en-US>SET</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> password</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>=</span><span style='font-family:"Comic Sans MS"'
lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>password(</span><span
style='font-family:"Comic Sans MS";color:#B43512' lang=zh-CN>'123'</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>) </span><span style='font-family:
"Comic Sans MS";color:#2151FF' lang=en-US>WHERE</span><span style='font-family:
"Comic Sans MS"' lang=zh-CN> user</span><span style='font-family:"Comic Sans MS"'
lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Comic Sans MS";color:#B43512' lang=zh-CN>'root' </span><span style='font-family:
"Comic Sans MS";color:#2151FF' lang=en-US>AND </span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>host</span><span style='font-family:"Comic Sans MS"'
lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Comic Sans MS";color:#B43512' lang=zh-CN>'localhost';</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>Query OK, 0 rows affected</span><span lang=en-US>,1
warning</span><span lang=zh-CN> (0.</span><span lang=en-US>27</span><span
lang=zh-CN> sec)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>mysql&gt; flush privileges;</span><span
style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.03 sec)</p>

<p style='margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-top:7pt;margin-bottom:7pt;font-size:13.5pt'><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>使用</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> ALTER </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>语法</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:7pt;
     margin-bottom:7pt'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>使用</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>ALTER</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>对数据表中的密码字段进行修改</span></li>
</ul>

<p style='margin-top:7pt;margin-bottom:7pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt'><span style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;margin-top:7pt;margin-bottom:7pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2151FF' lang=en-US>ALTER</span><span
style='font-family:"Comic Sans MS"' lang=en-US> USER </span><span
style='font-family:"Comic Sans MS";color:#B43512' lang=en-US>'</span><span
style='font-family:"Microsoft YaHei UI";color:#B43512' lang=zh-CN>用户名</span><span
style='font-family:"Comic Sans MS";color:#B43512' lang=en-US>'</span><span
style='font-family:"Comic Sans MS"' lang=en-US>@</span><span style='font-family:
"Comic Sans MS";color:#B43512' lang=en-US>'IP</span><span style='font-family:
"Microsoft YaHei UI";color:#B43512' lang=zh-CN>地址</span><span style='font-family:
"Comic Sans MS";color:#B43512' lang=en-US>' </span><span style='font-family:
"Comic Sans MS";color:#2151FF' lang=en-US>IDENTIFIED WITH</span><span
style='font-family:"Comic Sans MS"' lang=en-US> mysql_native_password </span><span
style='font-family:"Comic Sans MS";color:#2151FF' lang=en-US>BY </span><span
style='font-family:"Comic Sans MS";color:#B43512' lang=en-US>'</span><span
style='font-family:"Microsoft YaHei UI";color:#B43512' lang=zh-CN>密码</span><span
style='font-family:"Comic Sans MS";color:#B43512' lang=en-US>'</span></p>

<p style='margin-top:7pt;margin-bottom:7pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; </span><span style='color:#2151FF'
lang=en-US>ALTER</span><span lang=en-US> USER 'root'@'localhost' </span><span
style='color:#2151FF' lang=en-US>IDENTIFIED WITH</span><span lang=en-US>
mysql_native_password </span><span style='color:#2151FF' lang=en-US>BY</span><span
lang=en-US> '123456';</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>Query OK, 0 rows affected</span><span lang=en-US>,1
warning</span><span lang=zh-CN> (0.</span><span lang=en-US>27</span><span
lang=zh-CN> sec)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>mysql&gt; flush privileges;</span><span
style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.03 sec)</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
