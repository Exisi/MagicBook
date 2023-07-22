---
categories:
- MySQL
tags:
- DCL
date:
- 2023-1-25 11:28:51
---

<body lang=zh-CN style='font-family:Calibri;font-size:11.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.7458in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.7458in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>授权就是为某个用户赋予某些权限。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>提供了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> GRANT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句来为用户设置权限，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>GRANT</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句可以为新建的权限用户赋予权限</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> GRANT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句中可用于指定权限级别的值有以下几类格式：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.9083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>格式</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.35in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.9083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>*</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.35in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>表示当前数据库中的所有表。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.9083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>*.*</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.35in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>表示所有数据库中的所有表。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.9083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>db_name.*</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.35in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>表示某个数据库中的所有表，</span><span
  style='font-family:"Comic Sans MS"'>db_name </span><span style='font-family:
  "Microsoft YaHei UI"'>指定数据库名。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.9083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>db_name.tbl_name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.3937in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>表示某个数据库中的某个表或视图，</span><span
  style='font-family:"Comic Sans MS"'>db_name </span><span style='font-family:
  "Microsoft YaHei UI"'>指定数据库名，</span><span style='font-family:"Comic Sans MS"'>tbl_name
  </span><span style='font-family:"Microsoft YaHei UI"'>指定表名或视图名。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.9277in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>db_name.routine_name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.3305in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>表示某个数据库中的某个存储过程或函数，</span><span
  style='font-family:"Comic Sans MS"'>routine_name </span><span
  style='font-family:"Microsoft YaHei UI"'>指定存储过程名或函数名。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.9083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>TO
  </span><span style='font-family:"Microsoft YaHei UI"'>子句</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.4187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果权限被授予给一个不存在的用户，</span><span
  style='font-family:"Comic Sans MS"'>MySQL </span><span style='font-family:
  "Microsoft YaHei UI"'>会自动执行一条</span><span style='font-family:"Comic Sans MS"'>
  CREATE USER </span><span style='font-family:"Microsoft YaHei UI"'>语句来创建这个用户，但同时必须为该用户设置密码。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中，拥有</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> GRANT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>权限的用户才可以执行</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> GRANT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>GRANT priv_type <span style='color:#A5A5A5'>[(column_list)]</span> ON
database.table</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>TO user IDENTIFIED BY</span><span style='color:#A5A5A5'
lang=zh-CN> [PASSWORD] </span><span style='color:#B43512' lang=zh-CN>'password'</span><span
style='color:#A5A5A5' lang=zh-CN>, user</span><span style='color:#A5A5A5'
lang=en-US> </span><span style='color:#A5A5A5' lang=zh-CN>IDENTIFIED BY
[PASSWORD] 'password'] ...</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'>WITH with_option [with_option]...</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.4763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.8062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>priv_type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.8062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>表示权限类型；</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>columns_list</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.8062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>表示权限作用于哪些列上，省略该参数时，表示作用于整个表；</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>database.table</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.8062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>用于指定权限的级别；</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>user</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.8062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>表示用户账户，由用户名和主机名构成，格式是</span><span
  style='font-family:"Comic Sans MS"'>“'username'@'hostname'”</span><span
  style='font-family:"Microsoft YaHei UI"'>；</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4875in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>IDENTIFIED
  BY</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.7951in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>用来为用户设置密码，权限用户无密码时可以省略</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>password</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.8062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>是用户的新密码</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>with_option</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.8062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>额外参数</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt;' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.0395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.0173in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.0395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>GRANT
    OPTION</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.0666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>被授权的用户可以将这些权限赋予给别的用户</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.0395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>MAX_QUERIES_PER_HOUR
    count</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.0173in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>设置每个小时可以允许执行</span><span
    style='font-family:"Comic Sans MS"'> count </span><span style='font-family:
    "Microsoft YaHei UI"'>次查询</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.0395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>MAX_UPDATES_PER_HOUR
    count</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.0173in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>设置每个小时可以允许执行</span><span
    style='font-family:"Comic Sans MS"'> count </span><span style='font-family:
    "Microsoft YaHei UI"'>次更新</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.0583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>MAX_CONNECTIONS_PER_HOUR
    count</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.9979in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>设置每小时可以建立</span><span
    style='font-family:"Comic Sans MS"'> count </span><span style='font-family:
    "Microsoft YaHei UI"'>个连接</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.0395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>MAX_USER_CONNECTIONS
    count</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.0173in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>设置单个用户可以同时具有的</span><span
    style='font-family:"Comic Sans MS"'> count </span><span style='font-family:
    "Microsoft YaHei UI"'>个连接</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Microsoft YaHei";
  font-size:12.0pt'>&nbsp;</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; GRANT ALL PRIVILEGESON </span><span
style='color:#B43512' lang=zh-CN>*.*</span><span lang=en-US> </span><span
lang=zh-CN>TO </span><span style='color:#B43512' lang=zh-CN>'testUser'</span><span
lang=zh-CN>@</span><span style='color:#B43512' lang=zh-CN>'localhost'</span><span
lang=en-US> </span><span lang=zh-CN>IDENTIFIED BY </span><span
style='color:#B43512' lang=zh-CN>'</span><span style='color:#B43512'
lang=en-US>123456</span><span style='color:#B43512' lang=zh-CN>'</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>WITH GRANT OPTION;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected, 1 warning (0.05 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>此命令表示授予</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>testUser</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>用户超级权限</span></li>
</ul>

<p style='margin-left:.375in;font-family:SimSun;font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; GRANT SELECT,INSERT ON </span><span
style='color:#B43512' lang=zh-CN>*.*</span><span lang=en-US> </span><span
lang=zh-CN>TO </span><span style='color:#B43512' lang=zh-CN>'testUser</span><span
style='color:#B43512' lang=en-US>1</span><span style='color:#B43512'
lang=zh-CN>'</span><span lang=zh-CN>@</span><span style='color:#B43512'
lang=zh-CN>'localhost'</span><span lang=en-US> </span><span lang=zh-CN>IDENTIFIED
BY </span><span style='color:#B43512' lang=zh-CN>'testPwd'</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>WITH GRANT OPTION;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected, 1 warning (0.05 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SHOW GRANTS </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句查询用户</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> testUser </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的权限，如下所示。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; SHOW GRANTS FOR 'testUser'@'localhost';</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+--------------------------------------------------------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| Grants for testUser@localhost<span
style='mso-spacerun:yes'>                                          </span></span><span
lang=en-US><span
style='mso-spacerun:yes'>                                           </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'> </span>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+--------------------------------------------------------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>| GRANT SELECT, INSERT ON *.* TO 'testUser'@'localhost' WITH GRANT
OPTION |</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+--------------------------------------------------------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>1 row in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>结果显示，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>testUser </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对所有数据库的所有表有查询、插入权限，并可以将这些权限赋予给别的用户</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'>来自</span><span
style='font-family:"Comic Sans MS"'> &lt;</span><a
href="http://c.biancheng.net/view/7502.html"><span style='font-family:"Comic Sans MS";
color:#595959'>http://c.biancheng.net/view/7502.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt;</span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
