---
categories:
- MySQL
tags:
- DCL
date:
- 2023-1-25 10:27:41
---

<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<meta name=ProgId content=OneNote.File>
<meta name=Generator content="Microsoft OneNote 15">
</head>

<body lang=zh-CN style='font-family:Calibri;font-size:11.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.4972in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.4972in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中，可以通过</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>SELECT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句查询</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>
     mysql.user </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>表中的数据记录来查看相应的用户权限，也可以使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> SHOW
     GRANTS </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt' lang=zh-CN>语句查询用户的权限</span></li>
</ul>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>新创建的用户只有登录</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>服务器的权限，没有任何其它权限，不能查询</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> user </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表</span></li>
</ul>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-size:13.5pt'><span style='font-weight:bold;
font-family:"Microsoft YaHei UI"' lang=zh-CN>使用</span><span style='font-weight:
bold;font-family:"Microsoft YaHei UI"' lang=en-US> </span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>SELECT </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>语句</span></p>

<p style='margin:0in;margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=en-US>SELECT</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语句用于查询数据表字段数据</span></p>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin:0in;margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2151FF' lang=zh-CN>SELECT</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> * </span><span
style='font-family:"Comic Sans MS";color:#2151FF' lang=zh-CN>FROM</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>数据库名</span></p>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2151FF'>SELECT</span> * <span style='color:#2151FF'>FROM</span>
mysql.user;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-size:13.5pt'><span style='font-weight:bold;
font-family:"Microsoft YaHei UI"' lang=zh-CN>使用</span><span style='font-weight:
bold;font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-weight:
bold;font-family:"Comic Sans MS"' lang=zh-CN>SHOW GRANTS </span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>FOR </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>语句</span></p>

<p style='margin:0in;margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>SHOW GRANTS FOR</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>是</span><span
style='font-family:"Comic Sans MS"' lang=en-US>MySQL</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>中用于查看权限用户所有的权限的语句</span></p>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin:0in;margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>SHOW GRANTS FOR </span><span
style='font-family:"Comic Sans MS";color:#B43512' lang=zh-CN>'</span><span
style='font-family:"Microsoft YaHei UI";color:#B43512' lang=zh-CN>用户名</span><span
style='font-family:"Comic Sans MS";color:#B43512' lang=zh-CN>'</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>@</span><span style='font-family:
"Comic Sans MS";color:#B43512' lang=zh-CN>'</span><span style='font-family:
"Comic Sans MS";color:#B43512' lang=en-US>IP</span><span style='font-family:
"Microsoft YaHei UI";color:#B43512' lang=zh-CN>地址</span><span style='font-family:
"Comic Sans MS";color:#B43512' lang=zh-CN>'</span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>;</span></p>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; SHOW GRANTS FOR 'root'@'localhost';</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+---------------------------------------------------------------------------------------------+</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS"'><span
style='font-size:12.0pt' lang=zh-CN>| Grants for root@localhost<span
style='mso-spacerun:yes'>                                          </span></span><span
style='font-size:12.0pt' lang=en-US><span
style='mso-spacerun:yes'>                                            </span></span><span
style='font-size:14.0pt' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='font-size:12.0pt' lang=zh-CN>|</span></p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+---------------------------------------------------------------------------------------------+</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost'
WITH GRANT OPTION </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|</span></p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| GRANT PROXY ON ''@'' TO 'root'@'localhost' WITH
GRANT OPTION<span style='mso-spacerun:yes'>        </span></span><span
lang=en-US><span style='mso-spacerun:yes'>       </span></span><span
lang=zh-CN>|</span></p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+---------------------------------------------------------------------------------------------+</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>2 rows in set (0.00 sec)</p>

<p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; CREATE USER 'testuser1'@'localhost';</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.00 sec)</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; SHOW GRANTS FOR 'testuser1'@'localhost';</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+-----------------------------------------------------------+</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>| Grants for testuser1@localhost<span
style='mso-spacerun:yes'>                                </span>|</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+-----------------------------------------------------------+</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>| GRANT USAGE ON *.* TO 'testuser1'@'localhost' |</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+-----------------------------------------------------------+</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>1 row in set (0.00 sec)</p>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='margin:0in;font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'>来自</span><span
style='font-family:"Comic Sans MS"'> &lt;</span><a
href="http://c.biancheng.net/view/7498.html"><span style='font-family:"Comic Sans MS";
color:#595959'>http://c.biancheng.net/view/7498.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

</div>

</div>

</div>

