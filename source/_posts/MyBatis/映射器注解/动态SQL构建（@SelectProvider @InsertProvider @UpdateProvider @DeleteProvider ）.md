---
categories:
  - MyBatis
date:
  - 2023-3-27 7:46:51
tags:
  - ［@SelectProvider］
  - ［@InsertProvider］
  - ［@UpdateProvider］
  - ［@DeleteProvider］
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.8326in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.8326in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>动态</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> SQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>构建注解用于指定一个类或方法，该类或方法返回一个字符串类型的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>SQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句，用于查询插入更新和删除操作</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>注解</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.8097in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>@SelectProvider</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.8097in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>用于构建动态查询</span><span
  style='font-family:"Comic Sans MS"'>SQL</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>@InsertProvider</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.8097in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>用于构建动态新增</span><span
  style='font-family:"Comic Sans MS"'>SQL</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>@UpdateProvider</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.8097in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>用于构建动态更新</span><span
  style='font-family:"Comic Sans MS"'>SQL</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.9326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>@DeleteProvider</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.8097in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>用于构建动态删除</span><span
  style='font-family:"Comic Sans MS"'>SQL</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>动态</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> SQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>构建注解都有以下属性：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.2034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.5861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.2034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.5861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>用于指定类名 （</span><span style='font-family:"Comic Sans MS"'
  lang=en-US>t</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>ype </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>属性是</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> value </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的别名）</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>value</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.5861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>用于指定类名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>method</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.5861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定工具类的方法，必须是</span><span
  style='font-family:"Comic Sans MS"'> public </span><span style='font-family:
  "Microsoft YaHei UI"'>的，返回值必须为</span><span style='font-family:"Comic Sans MS"'>
  String</span><span style='font-family:"Microsoft YaHei UI"'>，可以为</span><span
  style='font-family:"Comic Sans MS"'> static</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>databaseId</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.5861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>User</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Mapper</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>.java</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>interface </span><span lang=en-US>User</span><span lang=zh-CN>Mapper(</span><span
lang=en-US>){</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@SelectProvider</span>(type =
UserSqlBuilder.class, method = <span style='color:#B43512'>&quot;buildGetUserByIdSql&quot;</span>)</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>UserInfo getUserById(</span><span
lang=en-US>Integer</span><span lang=zh-CN> userId);</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000' lang=zh-CN>@InsertProvider</span><span
lang=zh-CN>(type=UserSqlBuilder.class</span><span lang=en-US>, </span><span
lang=zh-CN>method = </span><span style='color:#B43512' lang=zh-CN>&quot;buildInsertUserSql&quot;</span><span
lang=zh-CN>)</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=en-US>Integer</span><span lang=zh-CN>
updateUser(UserInfo user);</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000' lang=zh-CN>@UpdateProvider</span><span
lang=zh-CN>(type = UserSqlBuilder.class</span><span lang=en-US>,</span><span
lang=zh-CN> method = </span><span style='color:#B43512' lang=zh-CN>&quot;buildUpdateUserSql&quot;</span><span
lang=zh-CN>)</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>public int updateUser(UserInfo user);</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@DeleteProvider</span>(type =
UserSqlBuilder.class, method = <span style='color:#B43512'>&quot;buildDeleteUserSql&quot;</span>)</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>public int deleteUser(</span><span
lang=en-US>Integer</span><span lang=zh-CN> userId);</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>UserSqlBuilder</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>.java</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>public class UserSqlBuilder {</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>public String buildGetUserByIdSql(</span><span
style='color:#FFC000' lang=zh-CN>@Param</span><span lang=zh-CN>(</span><span
style='color:#B43512' lang=zh-CN>&quot;userId&quot;</span><span lang=zh-CN>) </span><span
lang=en-US>Integer</span><span lang=zh-CN> userId) {</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>return new SQL() {</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN>{</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>                    </span>SELECT(<span
style='color:#B43512'>&quot;*&quot;</span>);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>                    </span>FROM(<span
style='color:#B43512'>&quot;tb_user&quot;</span>);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>                    </span>WHERE(<span
style='color:#B43512'>&quot;user_id = #{userId}&quot;</span>);</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN>}</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>}.toString();</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'> </span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>public String buildInsertUserSql(UserInfo
user)</span><span lang=en-US> </span><span lang=zh-CN>{</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>return new SQL() {</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN>{</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>                    </span>INSERT_INTO(<span
style='color:#B43512'>&quot;tb_user&quot;</span>);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>                    </span>VALUES(<span
style='color:#B43512'>&quot;user_name&quot;</span>, <span style='color:#B43512'>&quot;#{userName}&quot;</span>);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>                    </span>VALUES(<span
style='color:#B43512'>&quot;blog_url&quot;</span>, <span style='color:#B43512'>&quot;#{blogUrl}&quot;</span>);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>                    </span>VALUES(<span
style='color:#B43512'>&quot;blog_remark&quot;</span>, <span style='color:#B43512'>&quot;#{blogRemark}&quot;</span>);</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN>}</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>}.toString();</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>public String
buildUpdateUserSql(UserInfo user) {</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>return new SQL()<span style='mso-spacerun:yes'>  </span>{</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN>{</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>                    </span>UPDATE(<span
style='color:#B43512'>&quot;tb_user&quot;</span>);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>                    </span>SET(<span
style='color:#B43512'>&quot;user_name = #{userName} ,blog_url=#{blogUrl}
,blog_remark=#{blogRemark}&quot;</span>);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>                    </span>WHERE(<span
style='color:#B43512'>&quot;user_id = #{userId}&quot;</span>);</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN>}</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>}.toString();</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'> </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>        </span>public
String buildDeleteUserSql(</span><span style='color:#FFC000' lang=zh-CN>@Param</span><span
lang=zh-CN>(</span><span style='color:#B43512' lang=zh-CN>&quot;userId&quot;</span><span
lang=zh-CN>) </span><span lang=en-US>Integer</span><span lang=zh-CN> userId) {</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>return new SQL() {</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN>{</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>                    </span>DELETE_FROM(<span
style='color:#B43512'>&quot;tb_user&quot;</span>);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>                    </span>WHERE(<span
style='color:#B43512'>&quot;user_id = #{userId}&quot;</span>);</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN>}</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>}.toString();</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>多个参数的动态</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> SQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>构建注解</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>User</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Mapper</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>.java</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>interface </span><span lang=en-US>User</span><span lang=zh-CN>Mapper(</span><span
lang=en-US>){</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@SelectProvider</span>(type =
UserSqlBuilder.class, method = &quot;buildGetUsersByName&quot;)</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>List&lt;User&gt; getUsersByName(<span style='color:#FFC000'>@Param</span>(&quot;name&quot;)
String name, <span style='color:#FFC000'>@Param</span>(&quot;orderByColumn&quot;)
String orderByColumn);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>UserSqlBuilder</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>.java</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US>public </span><span lang=zh-CN>class UserSqlBuilder {</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"'>// </span><span style='font-family:"Microsoft YaHei UI"'>如果不使用</span><span
style='font-family:"Comic Sans MS"'> @Param</span><span style='font-family:
"Microsoft YaHei UI"'>，就应该定义与</span><span style='font-family:"Comic Sans MS"'>
mapper </span><span style='font-family:"Microsoft YaHei UI"'>方法相同的参数</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>public static String buildGetUsersByName(</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>final String name, final String orderByColumn) {</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>return new SQL()</span><span lang=en-US> </span><span
lang=zh-CN>{</span><span lang=en-US> </span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN>{</span></p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>SELECT(<span style='color:#B43512'>&quot;*&quot;</span>);</p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>FROM(<span style='color:#B43512'>&quot;users&quot;</span>);</p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>WHERE(<span style='color:#B43512'>&quot;name like #{name} ||
'%'&quot;</span>);</p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>ORDER_BY(orderByColumn);</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN>}</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>}.toString();</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"'>// </span><span style='font-family:"Microsoft YaHei UI"'>如果使用</span><span
style='font-family:"Comic Sans MS"'> @Param</span><span style='font-family:
"Microsoft YaHei UI"'>，就可以只定义需要使用的参数</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>public static String buildGetUsersByName(<span
style='color:#FFC000'>@Param</span>(<span style='color:#B43512'>&quot;orderByColumn&quot;</span>)
final String orderByColumn) {</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>return new SQL()</span><span lang=en-US> </span><span
lang=zh-CN>{</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN>{</span></p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>SELECT(<span style='color:#B43512'>&quot;*&quot;</span>);</p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>FROM(<span style='color:#B43512'>&quot;users&quot;</span>);</p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>WHERE(<span style='color:#B43512'>&quot;name like #{name} ||
'%'&quot;</span>);</p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>ORDER_BY(orderByColumn);</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN>}</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>}.toString();</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>type </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> value </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>属性，必须指定任意一个</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> MyBatis </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>3.5.1 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>后的版本中，提供了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ProviderMethodResolver</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>接口，只需要实现这个接口，就会将映射器方法的调用解析到实现的同名方法上，而无需使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN><span
     style='mso-spacerun:yes'> </span>method</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>属性指定方法</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>UserSqlProvider</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>.java</span></li>
</ul>

<p style='margin-left:.75in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"'>// </span><span style='font-family:"Microsoft YaHei UI"'>在你的</span><span
style='font-family:"Comic Sans MS"'> provider </span><span style='font-family:
"Microsoft YaHei UI"'>类中实现</span><span style='font-family:"Comic Sans MS"'>
ProviderMethodResolver </span><span style='font-family:"Microsoft YaHei UI"'>接口</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US>public </span><span lang=zh-CN>class UserSqlProvider
implements ProviderMethodResolver {</span></p>

<p style='margin-left:1.125in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"'>// </span><span style='font-family:"Microsoft YaHei UI"'>默认实现中，会将映射器方法的调用解析到实现的同名方法上</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>public static String getUsersByName(final String name) {</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>return new SQL()</span><span lang=en-US> </span><span
lang=zh-CN>{</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN>{</span></p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>SELECT(<span style='color:#B43512'>&quot;*&quot;</span>);</p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>FROM(<span style='color:#B43512'>&quot;users&quot;</span>);</p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>if (name != null) {</p>

<p style='margin-left:2.25in;font-family:"Comic Sans MS";font-size:
12.0pt'>WHERE(<span style='color:#B43512'>&quot;name like #{value} || '%'&quot;</span>);</p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>}</p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>ORDER_BY(<span style='color:#B43512'>&quot;id&quot;</span>);</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
lang=zh-CN>}</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>}.toString();</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>User</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Mapper</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>.java</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>interface </span><span lang=en-US>User</span><span lang=zh-CN>Mapper(</span><span
lang=en-US>) {</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@SelectProvider</span>(UserSqlProvider.class)</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>List&lt;User&gt; getUsersByName(String name);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>但是</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> MyBatis </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>3.5.1 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>后的版本中，</span><span
     style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>如果在全局配置中指定了</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt' lang=zh-CN>
     defaultSqlProviderType</span><span style='font-family:"Microsoft YaHei UI";
     font-size:11.5pt' lang=zh-CN>，两个属性都可以忽略，如果省略，</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt' lang=zh-CN>MyBatis </span><span
     style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>将使用</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt' lang=zh-CN>
     defaultSqlProviderType </span><span style='font-family:"Microsoft YaHei UI";
     font-size:11.5pt' lang=zh-CN>所指定的类</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>User</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>Test.java</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>Configuration configuration = new Configuration();</p>

<p style='margin-left:.75in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"'>// </span><span style='font-family:"Microsoft YaHei UI"'>让所有映射方法在同一个</span><span
style='font-family:"Comic Sans MS"'> sql provider </span><span
style='font-family:"Microsoft YaHei UI"'>类里面</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>configuration.setDefaultSqlProviderType(TemplateFilePathProvider.class);</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>UserMapper</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>.java</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>public interface UserMapper {</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@SelectProvider </span><span
style='font-family:"Comic Sans MS";color:#70AD47'>// </span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47'>等价于</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>
@SelectProvider(TemplateFilePathProvider.class)</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>User findUser(int id);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@InsertProvider </span><span
style='font-family:"Comic Sans MS";color:#70AD47'>// </span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47'>等价于</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>
@InsertProvider(TemplateFilePathProvider.class)</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>void createUser(User user);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@UpdateProvider </span><span
style='font-family:"Comic Sans MS";color:#70AD47'>// </span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47'>等价于</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>
@UpdateProvider(TemplateFilePathProvider.class)</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>void updateUser(User user);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@DeleteProvider </span><span
style='font-family:"Comic Sans MS";color:#70AD47'>// </span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47'>等价于</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>
@DeleteProvider(TemplateFilePathProvider.class)</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>void deleteUser(int id);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>从版本</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> 3.5.1 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>开始，可以省略</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> method </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>属性，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MyBatis </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>将会使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>
     ProviderMethodResolver </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>接口解析方法的具体实现。如果解析失败，</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>MyBatis </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>将会使用名为</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> provideSql </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>的降级实现</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://mybatis.org/mybatis-3/zh/java-api.html#sqlSessions"><span
style='font-family:"Comic Sans MS"'>https://mybatis.org/mybatis-3/zh/java-api.html#sqlSessions</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
