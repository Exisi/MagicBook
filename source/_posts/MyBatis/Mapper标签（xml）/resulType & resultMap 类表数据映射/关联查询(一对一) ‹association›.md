---
categories:
- MyBatis
tags:
- ‹association›
date:
- 2022-11-27 7:31:01
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">在实际的业务中，我们的用户一般都会有一个角色，也就是一个</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">User</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">对应一个</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">Role</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">。那么在</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:#f6f6f6"><span
                    style="font-family:&quot;Comic Sans MS&quot;">User</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">类里面一般也是以一个实体类来表示</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#444444">&nbsp;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="color:#444444"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">下面是一个</span><span
                style="font-family:&quot;Comic Sans MS&quot;">User</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的实体类</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#444444">&nbsp;</span></span></span>
</p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">public
            class Users {</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">private
            String userName;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">private
            String password;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">private
            String address;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">private
            String email;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#0070c0">private Role role;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444"><span style="background-color:white">}</span></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#444444">&nbsp;</span></span></span>
</p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">我们在查询用户的时候，如果也希望看到他的其他信息，我们会这样来写查询语句</span></span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#444444">&nbsp;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">&lt;select id=</span><span style="color:#f1403c">"getUserById"</span><span
                style="color:#444444"> resultType=</span><span style="color:#f1403c">"User"</span><span
                style="color:#444444">&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                SELECT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">u.</span><span style="color:#0066ff">user</span><span
                style="color:#0066ff">N</span><span style="color:#0066ff">ame</span><span
                style="color:#444444">,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">u.</span><span style="color:#0066ff">password</span><span
                style="color:#444444">,</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">u.</span><span style="color:#0066ff">address</span><span
                style="color:#444444">,</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">u.</span><span style="color:#0066ff">email</span><span
                style="color:#444444">,</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">r.</span><span style="color:#0066ff">id</span><span style="color:#444444"> as
            </span><span style="color:#f1403c">'</span><span style="color:#444444">role_id</span><span
                style="color:#f1403c">'</span><span style="color:#444444">,</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">r.</span><span style="color:#0066ff">name</span><span style="color:#444444"> as
            </span><span style="color:#f1403c">'</span><span style="color:#444444">role_name</span><span
                style="color:#f1403c">'</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                FROM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">user </span><span style="color:#e84c22">as</span><span style="color:#444444">
                u</span><span style="color:#444444">, </span><span style="color:#444444">user_roles</span> <span
                style="color:#e84c22">as</span><span style="color:#444444"> ur </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; WHERE</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">u.</span><span style="color:#0066ff">id</span><span style="color:#444444"> =
                ur.</span><span style="color:#0066ff">user_id</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">AND</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">u.</span><span style="color:#0066ff">id</span><span
                style="color:#444444">=</span><span style="color:#f1403c">#</span><span
                style="color:#444444">{id}</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">&lt;/select&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#444444">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#444444">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#444444">&nbsp;</span></span></span></p>
<p><span style="font-size:13.5pt"><span style="color:#444444"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">使用</span></strong><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">&lt;</span></strong><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">association</span></strong><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">&gt;</span></strong><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">关联表数据</span></strong></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#444444">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#444444">因为</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#444444">User</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#444444">类中只有一个</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#0070c0">Role</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#444444">对象，并没有</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#444444">role_id</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#444444">和</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#444444">role_name</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#444444">字段属性</span></span></span>
    </li>
</ul>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="color:#444444"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">所以，我们要使用</span><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;</span><span
                style="font-family:&quot;Comic Sans MS&quot;">association</span><span
                style="font-family:&quot;Comic Sans MS&quot;">&gt;</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">把</span><span
                style="font-family:&quot;Comic Sans MS&quot;">role_id</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                style="font-family:&quot;Comic Sans MS&quot;">role_name</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">映射得到的结果关联到</span><span
                style="font-family:&quot;Comic Sans MS&quot;">User</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">实体类中的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">role</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">属性上</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#444444">&nbsp;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;resultMap id="userMap"
            type="User"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;id property="id"
            column="id"&gt;&lt;/id&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;result property="userName"
            column="userName"&gt;&lt;/result&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;result
            property="password"
            column="password"&gt;&lt;/result&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;result
            property="address"
            column="address"&gt;&lt;/result&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;result
            property="email"
            column="email"&gt;&lt;/result&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:#b43512">&lt;association property=</span>"<span style="color:#0070c0">role</span>"<span
                style="color:#b43512"> javaType=</span>"<span style="color:#0070c0">Role</span>"<span
                style="color:#b43512">&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;id
                property=</span>"id"<span style="color:#b43512"> column=</span>"role_id"<span
                style="color:#b43512">&gt;&lt;/id&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;result
                property=</span>"name"<span style="color:#b43512"> column=</span>"role_name"<span
                style="color:#b43512">&gt;&lt;/result&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/association&gt;</span></span></span>
</p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/resultMap&gt;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#444444"><span
                    style="background-color:white">最后我们就可以将角色信息一块显示出来：</span></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">{<br>&nbsp;&nbsp;&nbsp; </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#f1403c">"id"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#444444">: </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#f1403c">"1001"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#444444">,<br>&nbsp;&nbsp;&nbsp;
            </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#f1403c">"username"</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">: </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#f1403c">"</span></span><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#f1403c">后羿</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#f1403c">"</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">,<br>&nbsp;&nbsp;&nbsp; </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#f1403c">"password"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#444444">: </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#f1403c">"123456"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#444444">,<br>&nbsp;&nbsp;&nbsp;
            </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#f1403c">"address"</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">: </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#f1403c">"</span></span><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#f1403c">北京市海淀区</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#f1403c">"</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">,<br>&nbsp;&nbsp;&nbsp; </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#f1403c">"email"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#444444">: </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#f1403c">"3553154544@qq.com"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#444444">,<br>&nbsp;&nbsp;&nbsp;
            </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#f1403c">"role"</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">: {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#f1403c">"id"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#444444">: </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#f1403c">"3"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#444444">,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#f1403c">"name"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#444444">: </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#f1403c">"</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#f1403c">射手</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#f1403c">"</span></span><br><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#444444">&nbsp;&nbsp;&nbsp;
                }<br>}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="color:#444444"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">&lt;</span></strong><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">association</span></strong><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">&gt;</span></strong><strong><span
                    style="font-family:&quot;Microsoft YaHei&quot;">结果映射方式</span></strong></span></span></p>
<p><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">下面这个是一个非常简单的示例 来说明它如何工作。代替了执行一个分离的语句</span><span
                style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">我们联合博客表和作者表在一起</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">外部的结果映射</span></strong></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">如果你需要重用</span><span
            style="font-family:&quot;Comic Sans MS&quot;">resultMap</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">的话，你需要将结果映射合到另一个描述的</span><span
            style="font-family:&quot;Comic Sans MS&quot;">resultMap</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">结果映射中</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;resultMap id="<strong>blogResult</strong>"
            type="Blog"&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;id
            property="id" column="id" /&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;result property="title" column="title"/&gt;</span></span>
</p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&nbsp;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;association property="author" column="author_id" </span><strong><span
                    style="color:#b43512">javaType</span></strong><span style="color:#b43512">="Author"
                resultMap="</span><span style="color:#00b0f0">A</span><span style="color:#00b0f0">Result</span><span
                style="color:#b43512">"/&gt;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&nbsp;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/resultMap&gt;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&nbsp;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;resultMap id="</span><span style="color:#00b0f0">A</span><span
                style="color:#00b0f0">Result</span><span style="color:#b43512">" type="Author"&gt;</span></span></span>
</p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;id property="id" column="author_id"/&gt;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property="username" column="author_username"/&gt;</span></span></span>
</p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property="password" column="author_password"/&gt;</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;/resultMap&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#e84c22">&lt;select id=</span>"selectBlog"<span style="color:#e84c22">
                resultMap=</span>"<strong>blogResult</strong>"<span style="color:#e84c22">&gt;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#0070c0">select</span></span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">B.id,
            B.title, </span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">A.author_id, A.author_username,
            A.author_password&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#0070c0">from</span> Blog B</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#0070c0">left outer join</span> Author A</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#0070c0">on</span> B.author_id = A.id</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#0070c0">where</span> B.id = #{id}</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#e84c22">&lt;/select&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&nbsp;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">在上面的示例中你可以看到博客的作者关联代表着“</span><span
            style="font-family:&quot;Comic Sans MS&quot;">authorResult</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">”结果映射来加载作者实例</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">现在，上面的示例用了外部的结果映射元素来映射关联。这使得</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> Author </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">结果映射可以重用</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">内部嵌套结果映射</span></strong></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">如果你不需要重用</span><span
            style="font-family:&quot;Comic Sans MS&quot;">resultMap</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">的话</span><span
            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">或者你仅仅引用你所有的结果映射合到一个单独描述的结果映射中</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;resultMap id="<strong>blogResult</strong>"
            type="Blog"&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;id
            property="id" column="blog_id" /&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;result property="title"
            column="blog_title"/&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&nbsp;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;association property="author"
                <strong>javaType</strong>="Author"&gt;</span></span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;id property="id" column="author_id"/&gt;</span></span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property="username" column="author_username"/&gt;</span></span></span>
</p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property="password" column="author_password"/&gt;</span></span></span>
</p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;/association&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/resultMap&gt;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#e84c22">&lt;select id=</span>"selectBlog"<span style="color:#e84c22">
                resultMap=</span>"<strong>blogResult</strong>"<span style="color:#e84c22">&gt;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#0070c0">select</span></span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">B.id,
            B.title, </span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">A.author_id, A.author_username,
            A.author_password&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#0070c0">from</span> Blog B</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#0070c0">left outer join</span> Author A</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#0070c0">on</span> B.author_id = A.id</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#0070c0">where</span> B.id = #{id}</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#e84c22">&lt;/select&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">查询嵌套映射</span></strong></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">该方法相比连接查询而言效率更高，同时由于可以自定义</span><span
            style="font-family:&quot;Comic Sans MS&quot;">select</span><span
            style="font-family:&quot;Microsoft YaHei&quot;">查询，比起连接查询也要更灵活一些</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;resultMap
            id="<strong>SelectB</strong><strong>logResult</strong>" type="Blog"&gt;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;result
            column="id" property="id"&gt;&lt;/result&gt;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;result
            column="name" property="name"&gt;&lt;/result&gt;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;association property=</span>"author"<strong> javaType</strong>="Author" <span
                style="color:#b43512">select=</span>"<span style="color:#e84c22">get</span><span
                style="color:#e84c22">Author</span>" <span style="color:#b43512">column=</span>"tid"/&gt;</span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/resultMap&gt;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;select id="<span style="color:#e84c22">get</span><span
                style="color:#e84c22">Author</span>" parameterType="int" resultType="Blog"&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">select
            *from Author where author_id=#{author_id}</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/select&gt;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;select id="<span style="color:#00b0f0">get</span><span
                style="color:#00b0f0">Blog</span>" parameterType="int"
            resultType="<strong>SelectB</strong><strong>logResult</strong>"&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">select
            *from Blog</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/select&gt;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://zhuanlan.zhihu.com/p/79153088" href="https://zhuanlan.zhihu.com/p/79153088"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://zhuanlan.zhihu.com/p/79153088</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>