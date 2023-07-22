---
categories:
- MySQL
tags:
- DCL
date:
- 2023-1-25 12:30:55
---

<body lang=zh-CN style='font-family:Calibri;font-size:11.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.2423in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.2423in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中，可以使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> REVOKE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句删除某个用户的某些权限（此用户不会被删除），在一定程度上可以保证系统的安全性。例如，如果数据库管理员觉得某个用户不应该拥有</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DELETE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>权限，那么就可以删除</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DELETE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>权限。</span></li>
</ul>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>要使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> REVOKE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句，必须拥有</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数据库的全局</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CREATE USER </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>权限或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> UPDATE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>权限。</span></li>
</ul>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:13.5pt'><span
style='font-weight:bold'>删除特定权限</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>删除用户某些特定的权限</span></li>
</ul>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;margin-top:4pt;margin-bottom:4pt;font-family:"Comic Sans MS";
font-size:12.0pt'>REVOKE priv_type [(column_list)]...</p>

<p style='margin-left:.375in;margin-top:4pt;margin-bottom:4pt;font-family:"Comic Sans MS";
font-size:12.0pt'>ON database.table</p>

<p style='margin-left:.375in;margin-top:4pt;margin-bottom:4pt;font-family:"Comic Sans MS";
font-size:12.0pt'>FROM user [, user]…</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.0361in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.3402in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.0361in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt'>priv_type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.3402in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt'>表示权限的类型；</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.0548in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt'>column_list</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.3208in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt'>表示权限作用于哪些列上，没有该参数时作用于整个表上；</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.0361in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt'>user</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.4097in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in;font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>由用户名和主机名构成，格式为“</span><span
  style='font-family:"Comic Sans MS"'>username'@'hostname'</span><span
  style='font-family:"Microsoft YaHei UI"'>”。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-top:6pt;margin-bottom:6pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; REVOKE INSERT ON *.*<br>
<span style='mso-spacerun:yes'>    </span>-&gt; FROM
'testUser'@'localhost';<br>
Query OK, 0 rows affected (0.01 sec)</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;margin-top:4pt;margin-bottom:4pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>mysql&gt; SHOW GRANTS FOR
'testUser'@'localhost';<br>
+--------------------------------------------------------------------------------------+<br>
| Grants for testUser@localhost<span
style='mso-spacerun:yes'>                                                                  
</span></span><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
lang=zh-CN><span
style='mso-spacerun:yes'>   </span>|<br>
+--------------------------------------------------------------------------------------+<br>
| GRANT SELECT ON *.* TO 'testUser'@'localhost' WITH GRANT OPTION
|<br>
+--------------------------------------------------------------------------------------+<br>
1 row in set (0.00 sec)</span></p>

<p style='margin-left:.375in;margin-top:4pt;margin-bottom:4pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>结果显示，删除</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> testUser </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>用户的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> INSERT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>权限成功。</span></li>
</ul>

<p style='margin-left:.375in;margin-top:6pt;margin-bottom:6pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;margin-top:6pt;margin-bottom:6pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-top:6pt;margin-bottom:6pt;font-family:"Microsoft YaHei UI";
font-size:13.5pt'><span style='font-weight:bold'>删除所有权限</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>删除特定用户的所有权限</span></li>
</ul>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;margin-top:4pt;margin-bottom:4pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>REVOKE ALL PRIVILEGES, GRANT OPTION FROM
user </span><span style='color:#A5A5A5' lang=zh-CN>, user</span><span
style='color:#A5A5A5' lang=en-US>1</span><span style='color:#A5A5A5'
lang=zh-CN> ...</span></p>

<p style='margin-top:6pt;margin-bottom:6pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; REVOKE ALL PRIVILEGES, GRANT OPTION FROM<span
style='mso-spacerun:yes'>  </span>FROM 'testUser'@'localhost';</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.01 sec)</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='margin:0in;font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'>来自</span><span
style='font-family:"Comic Sans MS"'> &lt;</span><a
href="http://c.biancheng.net/view/7507.html"><span style='font-family:"Comic Sans MS"'>http://c.biancheng.net/view/7507.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>

