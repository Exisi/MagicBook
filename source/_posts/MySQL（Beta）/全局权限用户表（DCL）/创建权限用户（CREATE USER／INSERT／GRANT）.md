---
categories:
  - MySQL
tags:
  - DCL
date:
  - 2023-1-24 16:16:15
---

<body lang=zh-CN style='font-family:Calibri;font-size:11.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5791in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5791in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在安装时，会默认创建一个名为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> root </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的用户，该用户拥有超级权限，可以控制整个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>服务器。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在对</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的日常管理和操作中，为了避免有人恶意使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> root </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用户控制数据库，我们通常创建一些具有适当权限的用户，尽可能地不用或少用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> root </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用户登录系统，以此来确保数据的安全访问。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mysql</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>是通过使用 用户名</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>+</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>主机名
     来判断一个用户的身份，也是由此来判断一个用户的权限</span></li>
</ul>

<p style='margin-left:.375in;font-family:SimSun;font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>提供了以下</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> 3 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>种方法创建用户。</span></li>
 <ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
  0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
  font-style:normal'>
  <li value=1 style='margin-top:0;margin-bottom:0;vertical-align:middle;
      color:#444444'><span style='font-family:"Microsoft YaHei UI";font-size:
      12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
      font-size:12.0pt'>使用</span><span style='font-family:"Comic Sans MS";
      font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
      font-size:12.0pt'> CREATE USER </span><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
      font-size:12.0pt'>语句创建用户</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#444444'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>使用</span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>INSERT</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句在</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>
      mysql.user </span><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt' lang=zh-CN>表中添加用户</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#444444'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>使用</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'> GRANT </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句创建用户</span></li>
 </ol>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#444444'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#444444'>&nbsp;</p>

<p style='margin-top:11pt;margin-bottom:11pt;font-size:13.5pt;color:#444444'><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"'>使用</span><span
style='font-weight:bold;font-family:"Comic Sans MS"'>CREATE USER</span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"'>语句</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>可以使用&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>CREATE USER</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;语句来创建</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用户，并设置相应的密码。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2151FF' lang=zh-CN>CREATE USER</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> &lt;</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>用户</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>&gt;</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>[ </span><span style='font-family:"Comic Sans MS";
color:#2151FF' lang=zh-CN>IDENTIFIED</span><span style='font-family:"Comic Sans MS";
color:#2151FF' lang=en-US> </span><span style='font-family:"Comic Sans MS";
color:#2151FF' lang=zh-CN>BY</span><span style='font-family:"Comic Sans MS"'
lang=zh-CN> [ </span><span style='font-family:"Comic Sans MS";color:#2151FF'
lang=zh-CN>PASSWORD</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>
] </span><span style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'> </span>'</span><span style='font-family:"Comic Sans MS"'
lang=zh-CN>&lt;</span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>密码</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>&gt;</span><span
style='font-family:"Comic Sans MS"' lang=en-US>' </span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>] </span><span style='font-family:"Microsoft YaHei UI";
color:#A5A5A5' lang=zh-CN>，</span><span style='font-family:"Comic Sans MS";
color:#A5A5A5' lang=zh-CN>&lt;</span><span style='font-family:"Microsoft YaHei UI";
color:#A5A5A5' lang=zh-CN>用户名</span><span style='font-family:"Comic Sans MS";
color:#A5A5A5' lang=zh-CN>&gt;</span><span style='font-family:"Comic Sans MS";
color:#A5A5A5' lang=en-US> </span><span style='font-family:"Comic Sans MS";
color:#A5A5A5' lang=zh-CN>[ IDENTIFIED</span><span style='font-family:"Comic Sans MS";
color:#A5A5A5' lang=en-US> </span><span style='font-family:"Comic Sans MS";
color:#A5A5A5' lang=zh-CN>BY [ PASSWORD ]</span><span style='font-family:"Comic Sans MS";
color:#A5A5A5' lang=en-US> </span><span style='font-family:"Comic Sans MS";
color:#A5A5A5' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='font-family:"Comic Sans MS";color:#A5A5A5' lang=en-US>'</span><span
style='font-family:"Comic Sans MS";color:#A5A5A5' lang=zh-CN>&lt;</span><span
style='font-family:"Microsoft YaHei UI";color:#A5A5A5' lang=zh-CN>密码</span><span
style='font-family:"Comic Sans MS";color:#A5A5A5' lang=zh-CN>&gt;</span><span
style='font-family:"Comic Sans MS";color:#A5A5A5' lang=en-US>' </span><span
style='font-family:"Comic Sans MS";color:#A5A5A5' lang=zh-CN>] </span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>解析</span></p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.4986in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.6173in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4986in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>&lt;</span><span
  style='font-family:"Microsoft YaHei UI"'>用户</span><span style='font-family:
  "Comic Sans MS"'>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.6305in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定创建用户账号，格式为&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>user_name'@'host_name</span><span
  style='font-family:"Microsoft YaHei UI"'>。</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>这里的</span><span
  style='font-family:"Comic Sans MS"'>user_name</span><span style='font-family:
  "Microsoft YaHei UI"'>是用户名，</span><span style='font-family:"Comic Sans MS"'>host_name</span><span
  style='font-family:"Microsoft YaHei UI"'>为主机名，即用户连接</span><span
  style='font-family:"Comic Sans MS"'> MySQL </span><span style='font-family:
  "Microsoft YaHei UI"'>时所用主机的名字</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果在创建的过程中，只给出了用户名，而没指定主机名，那么主机名默认为“</span><span
  style='font-family:"Comic Sans MS"'>%</span><span style='font-family:"Microsoft YaHei UI"'>”，表示一组主机，即对所有主机开放权限</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4986in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:6pt;margin-bottom:6pt;font-family:"Comic Sans MS";
  font-size:11.5pt'>IDENTIFIED BY</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.6173in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>用于指定用户密码。新用户可以没有初始密码，若该用户不设密码，可省略此子句。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4986in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:6pt;margin-bottom:6pt;font-family:"Comic Sans MS";
  font-size:11.5pt'>PASSWORD</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.6173in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>PASSWORD
  </span><span style='font-family:"Microsoft YaHei UI"'>表示使用哈希值设置密码，该参数可选。如果密码是一个普通的字符串，则不需要使用</span><span
  style='font-family:"Comic Sans MS"'> PASSWORD </span><span style='font-family:
  "Microsoft YaHei UI"'>关键字。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4986in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>&lt;</span><span
  style='font-family:"Microsoft YaHei UI"'>密码</span><span style='font-family:
  "Comic Sans MS"'>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.6173in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>表示用户登录时使用的密码，需要用单引号括起来，例如</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> '123456'</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
 0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
 font-style:normal'>
 <li value=1 style='margin-top:0;margin-bottom:0;vertical-align:middle;
     color:#444444'><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt'>CREATE USER </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>语句可以不指定初始密码。但是从安全的角度来说，不推荐这种做法。</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#444444'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CREATE USER </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句的权限用户必须拥有</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> mysql</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;数据库的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> INSERT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>权限或全局</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CREATE USER </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>权限。</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#444444'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CREATE USER </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句创建一个用户后，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>会在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> mysql </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数据库的&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>user </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表中添加一条新记录。</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#444444'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>CREATE USER </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句可以同时创建多个用户，多个用户用逗号隔开。</span></li>
</ol>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; CREATE USER <span style='background:#CCFFCC'>'test1'@'localhost'</span>
IDENTIFIED BY <span style='background:#DBE5F1'>'test1</span>';</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 1 rows affected (0.06 sec)</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中，可以使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> password() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>函数获取密码的哈希值</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#444444'>mysql&gt; SELECT
password('test1');<br>
+-------------------------------------------+<br>
| password('test1')<span style='mso-spacerun:yes'>                        
</span>|<br>
+-------------------------------------------+<br>
| *06C0BF5B64ECE2F648B5F048A71903906BA08E5C
|<br>
+-------------------------------------------+<br>
1 row in set, 1 warning (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#444444'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#444444'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>通过</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> PASSWORD </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>关键字使用密码的哈希值设置密码</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; </span><span style='color:#2151FF'
lang=zh-CN>CREATE USER </span><span style='background:#CCFFCC' lang=zh-CN>'test1'@'localhost'</span><span
lang=en-US> </span><span style='color:#2151FF' lang=zh-CN>IDENTIFIED BY
PASSWORD </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='background:#DBE5F1'>'*06C0BF5B64ECE2F648B5F048A71903906BA08E5C'</span>;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected, 1 warning (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>新创建的用户拥有的权限很少，它们只能执行不需要权限的操作。如登录</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SHOW </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句查询所有存储引擎和字符集的列表等。如果两个用户的用户名相同，但主机名不同，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>会将它们视为两个用户，并允许为这两个用户分配不同的权限集合。</span></li>
</ul>

<p style='margin-top:4pt;margin-bottom:4pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-top:4pt;margin-bottom:4pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-top:4pt;margin-bottom:4pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-top:4pt;margin-bottom:4pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-top:4pt;margin-bottom:4pt;font-size:13.5pt'><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"'>使用</span><span
style='font-weight:bold;font-family:"Comic Sans MS"'> INSERT </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"'>语句</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>可以使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> INSERT </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>语句将用户的信息添加到</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> mysql.user </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>表中，但必须拥有对</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> mysql.user </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>表的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> INSERT </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>权限。通常</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> INSERT </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>语句只添加</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Host</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>User </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>和&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>authentication_string
     </span><span style='font-family:"Microsoft YaHei";font-size:12.0pt'>这</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> 3 </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>个字段的值</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2151FF'>INSERT INTO</span> mysql.user</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>(Host, User, </span><span style='font-family:
"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>authentication_string,
ssl_cipher, x509_issuer, x509_subject) </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#2151FF'>VALUES </p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>(</span><span style='font-family:"Comic Sans MS";
color:#B43512'>'</span><span style='font-family:"Microsoft YaHei UI";
color:#B43512'>主机名</span><span style='font-family:"Comic Sans MS";color:#B43512'>',
'</span><span style='font-family:"Microsoft YaHei UI";color:#B43512'>权限用户名</span><span
style='font-family:"Comic Sans MS";color:#B43512'>', PASSWORD('</span><span
style='font-family:"Microsoft YaHei UI";color:#B43512'>密码</span><span
style='font-family:"Comic Sans MS";color:#B43512'>'), '', '', ''</span><span
style='font-family:"Comic Sans MS"'>)</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>User </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Host </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>字段区分大小写，创建用户时要指定正确的用户名称或主机名</span></li>
</ul>

<p style='margin-left:.375in;font-family:SimSun;font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果你使用的是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL 5.7 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>之前的版本，将</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>
     authentication_string </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>字段替换成</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> Password </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>即可。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>由于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ssl_cipher</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>x509_issuer </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> x509_subject </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>这</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> 3 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>个字段没有默认值，所以向</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> user </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表插入新记录时，一定要设置这</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> 3 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>个字段的值，否则</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> INSERT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句将不能执行</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=en-US>mysql&gt; </span><span
style='font-family:"Comic Sans MS";color:#2151FF' lang=zh-CN>INSERT INTO</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> mysql.user(Host, User, </span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>authentication_string,
ssl_cipher, x509_issuer, x509_subject) </span><span style='font-family:"Comic Sans MS";
color:#2151FF' lang=zh-CN>VALUES </span><span style='font-family:"Comic Sans MS"'
lang=zh-CN>(</span><span style='font-family:"Comic Sans MS";color:#B43512'
lang=zh-CN>'</span><span style='font-family:"Comic Sans MS";color:#B43512'
lang=en-US>host</span><span style='font-family:"Comic Sans MS";color:#B43512'
lang=zh-CN>', 'username', PASSWORD('password'), '', '', ''</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>);</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;margin-top:4pt;margin-bottom:4pt;font-family:"Comic Sans MS";
font-size:12.0pt'>Query OK, 1 row affected, 1 warning (0.02 sec)</p>

<p style='margin-left:.375in;margin-top:4pt;margin-bottom:4pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>结果显示，新建用户成功。但是这时如果通过该账户登录</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>服务器，不会登录成功，因为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> test2 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用户还没有生效。可以使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> FLUSH </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>命令让用户生效，命令如下：</span></li>
</ul>

<p style='margin-left:.75in;margin-top:4pt;margin-bottom:4pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#444444'>FLUSH PRIVILEGES;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>使用以上命令可以让</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>刷新系统权限相关表。执行</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> FLUSH </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>命令需要</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> RELOAD </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>权限</span></li>
</ul>

<p><cite style='font-family:Calibri;font-size:9.0pt;color:#595959'>&nbsp;</cite></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;margin-top:4pt;margin-bottom:4pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-top:4pt;margin-bottom:4pt;font-size:13.5pt'><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"'>使用</span><span
style='font-weight:bold;font-family:"Comic Sans MS"'>GRANT</span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"'>语句</span></p>

<p style='margin-left:.375in;margin-top:4pt;margin-bottom:4pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>MySQL </span><span style='font-family:"Microsoft YaHei UI"'>提供了</span><span
style='font-family:"Comic Sans MS"'> GRANT </span><span style='font-family:
"Microsoft YaHei UI"'>语句，可以在创建权限用户的同时，为用户添加权限</span></p>

<p style='margin-top:4pt;margin-bottom:4pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt'><span style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;margin-top:4pt;margin-bottom:4pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2151FF' lang=zh-CN>GRANT </span><span
style='font-family:"Comic Sans MS"' lang=en-US>&lt;</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>权限</span><span
style='font-family:"Comic Sans MS"' lang=en-US>&gt;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span style='font-family:
"Comic Sans MS";color:#2151FF' lang=zh-CN>ON</span><span style='font-family:
"Comic Sans MS"' lang=zh-CN> database.table </span><span style='font-family:
"Comic Sans MS";color:#2151FF' lang=zh-CN>TO </span><span style='font-family:
"Comic Sans MS"' lang=en-US>&lt;</span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>用户</span><span style='font-family:"Comic Sans MS"' lang=en-US>&gt;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> [</span><span style='font-family:
"Comic Sans MS";color:#2151FF' lang=zh-CN>IDENTIFIED BY</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> [</span><span style='font-family:
"Comic Sans MS";color:#2151FF' lang=zh-CN>PASSWORD</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>] </span><span style='font-family:
"Comic Sans MS"' lang=en-US>'&lt;</span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>密码</span><span style='font-family:"Comic Sans MS"' lang=en-US>&gt;'</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>]</span></p>

<p style='margin-left:.375in;margin-top:4pt;margin-bottom:4pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.3333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:4pt;margin-bottom:4pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.7826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>&lt;</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>权限</span><span style='font-family:"Comic Sans MS"' lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.7826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>表示新用户的权限</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>database.table</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.7826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>表示新用户的权限范围，即只能在指定的数据库和表上使用自己的权限</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>&lt;</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>用户</span><span style='font-family:"Comic Sans MS"' lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.7826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定新用户的账号，由用户名和主机名构成；格式为&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>user_name'@'host_name</span><span
  style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:6pt;margin-bottom:6pt;font-family:"Comic Sans MS";
  font-size:11.5pt'>IDENTIFIED BY</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.7826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>用于指定用户密码。新用户可以没有初始密码，若该用户不设密码，可省略此子句。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:6pt;margin-bottom:6pt;font-family:"Comic Sans MS";
  font-size:11.5pt'>PASSWORD</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.7826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>PASSWORD
  </span><span style='font-family:"Microsoft YaHei UI"'>表示使用哈希值设置密码，该参数可选。如果密码是一个普通的字符串，则不需要使用</span><span
  style='font-family:"Comic Sans MS"'> PASSWORD </span><span style='font-family:
  "Microsoft YaHei UI"'>关键字。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>&lt;</span><span
  style='font-family:"Microsoft YaHei UI"'>密码</span><span style='font-family:
  "Comic Sans MS"'>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.7826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>表示用户登录时使用的密码，需要用单引号括起来，例如</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> '123456'</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#444444' lang=zh-CN>mysql&gt; </span><span
style='color:#2151FF' lang=zh-CN>GRANT</span><span style='color:#444444'
lang=zh-CN> SELECT </span><span style='color:#2151FF' lang=zh-CN>ON</span><span
style='color:#444444' lang=en-US> </span><span style='color:#444444;background:
#CCFFFF' lang=zh-CN>*.* </span><span style='color:#2151FF' lang=zh-CN>TO</span><span
style='color:#444444' lang=zh-CN> '</span><span style='color:#444444;
background:#CCFFCC' lang=zh-CN>test3'@localhost </span><span style='color:#2151FF'
lang=zh-CN>IDENTIFIED BY </span><span style='color:#444444;background:#DBE5F1'
lang=zh-CN>'test3'</span><span style='color:#444444' lang=zh-CN>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#444444'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#444444'>Query OK, 0 rows affected, 1 warning (0.01 sec)</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei";
font-size:10.5pt;color:#444444' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>其中“</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>*.*</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>”
     表示所有数据库下的所有表。结果显示创建用户成功，且</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> test3 </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>用户对所有表都有查询（</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>SELECT</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>）权限</span></li>
</ul>

<p style='margin-left:.375in;margin-top:4pt;margin-bottom:4pt;font-family:SimSun;
font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a href="http://c.biancheng.net/view/7490.html"><span
style='font-family:"Comic Sans MS"'>http://c.biancheng.net/view/7490.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
