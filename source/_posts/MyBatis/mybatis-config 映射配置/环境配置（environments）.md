---
categories:
- MyBatis
tags:
- environments
date:
- 2022-11-27 7:10:01
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">MyBatis </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">可以配置成适应多种环境，这种机制有助于将</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> SQL </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">映射应用于多种数据库之中</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="color:#538135"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">配置环境</span><span
                style="font-family:&quot;Comic Sans MS&quot;"> --&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;&nbsp;&nbsp; &lt;environments </span><span
                style="color:red">default</span><span style="color:blue">=</span><span
                style="color:#a31515">"development"</span><span
                style="color:blue">&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;environment </span><span
                style="color:red">id</span><span style="color:blue">=</span><span
                style="color:#a31515">"development"</span><span style="color:blue">&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp; <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#538135">&lt;!-- </span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#538135">配置事务管理 采用</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#538135">JDBC</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#538135">事务管理</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#538135"> --&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &lt;transactionManager </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:red">type</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a31515">"JDBC"</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue"> /&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">&lt;!--
            </span></span><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:green">配置数据库连接信息</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:green"> --&gt;</span></span><br><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;dataSource
            </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:red">type</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a31515">"POOLED"</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &lt;property </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:red">name</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a31515">"driver" </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:red">value</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a31515">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;">${driver}</span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#a31515">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">
                /&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &lt;property </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:red">name</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a31515">"url" </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:red">value</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a31515">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;">${url}</span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#a31515">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">
                /&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &lt;property </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:red">name</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a31515">"username" </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:red">value</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a31515">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;">${user}</span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#a31515">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">
                /&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &lt;property </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:red">name</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a31515">"password" </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:red">value</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a31515">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;">${password}</span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#a31515">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">
                /&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &lt;/dataSource&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &lt;/environment&gt;<br>&nbsp;&nbsp;&nbsp; &lt;/environments&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.0847in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei&quot;"><span
                                style="color:white"><strong>标签</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.5395in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.0847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">dataSource</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.5395in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">数据源</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.0847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">transactionManager</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.5395in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">事物管理器</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;"><strong>注</strong></span></span>
</p>
<p style="margin-left:36px"><span style="font-size:10.5pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">为了指定创建哪种环境，只要将它作为可选的参数传递给</span><span
                style="font-family:&quot;Comic Sans MS&quot;"> SqlSessionFactoryBuilder </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">即可。</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:10.5pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#333333">可以接受环境配置的两个方法签名是：</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#660066">SqlSessionFactory</span><span style="color:black"> factory </span><span
                style="color:#666600">= </span><span style="color:#000088">new </span><span
                style="color:#660066">SqlSessionFactoryBuilder</span><span style="color:#666600">().</span><span
                style="color:black">build</span><span style="color:#666600">(</span><span
                style="color:black">reader</span><span style="color:#666600">,</span><span style="color:black">
                environment</span><span style="color:#666600">);</span><br><span
                style="color:#660066">SqlSessionFactory</span><span style="color:black"> factory </span><span
                style="color:#666600">= </span><span style="color:#000088">new </span><span
                style="color:#660066">SqlSessionFactoryBuilder</span><span style="color:#666600">().</span><span
                style="color:black">build</span><span style="color:#666600">(</span><span
                style="color:black">reader</span><span style="color:#666600">,</span><span style="color:black">
                environment</span><span style="color:#666600">,</span><span style="color:black"> properties</span><span
                style="color:#666600">);</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:11.5pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">dataSource</span></strong></span> <span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">数据源</span></strong></span>
        <ul style="list-style-type:disc">
            <li><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">dataSource
                    </span></span><span style="font-size:11.5pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">元素使用标准的</span></span><span
                    style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JDBC
                    </span></span><span style="font-size:11.5pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">数据源接口来配置</span></span><span
                    style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JDBC
                    </span></span><span style="font-size:11.5pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">连接对象的资源。</span></span></li>
        </ul>
        <ul style="list-style-type:disc">
            <li><span style="font-size:11.5pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">大多数</span></span><span
                    style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"> MyBatis
                    </span></span><span style="font-size:11.5pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">应用程序会按示例中的例子来配置数据源。</span></span></li>
        </ul>
    </li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:11.5pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#404040">虽然数据源配置是可选的，但如果要启用延迟加载特性，就必须配置数据源。</span></span></span><span
        style="font-size:11.5pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span></span><br></p>
<p style="margin-left: 80px;"><span style="font-size:11.5pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">有三种内建的数据源类型（也就是</span><span
                style="font-family:&quot;Comic Sans MS&quot;"> type="[UNPOOLED|POOLED|JNDI]"</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">）：</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333"><strong>UNPOOLED</strong></span></span></span></p>
<ul style="list-style-type: disc; margin-left: 120px;">
    <li><span style="font-size:11.5pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">这个数据源的实现会每次请求时打开和关闭连接。虽然有点慢，但对那些数据库连接可用性要求不高的简单应用程序来说，是一个很好的选择。
                性能表现则依赖于使用的数据库，对某些数据库来说，使用连接池并不重要，这个配置就很适合这种情形。</span></span></li>
    <li><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">UNPOOLED </span></span><span
            style="font-size:11.5pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">类型的数据源仅仅需要配置以下</span></span><span
            style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"> 5 </span></span><span
            style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">种属性：</span></span><span
            style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:104px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6701in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei&quot;"><span
                                style="color:white"><strong>属性</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0166in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6701in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">driver</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0166in">
                <p><span style="font-size:11.5pt"><span style="color:#404040"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">这是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">驱动的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Java </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类全限定名（并不是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">驱动中可能包含的数据源类）。</span></span></span>
                </p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6701in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">url</span></span>
                </p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0166in">
                <p><span style="font-size:11.5pt"><span style="color:#404040"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">这是数据库的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC URL </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">地址。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6701in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">username</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0166in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">登录数据库的用户名。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6701in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">password</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0166in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">登录数据库的密码。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6854in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">defaultTransactionIsolationLevel</span></span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0013in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">默认的连接事务隔离级别。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6701in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">defaultNetworkTimeout</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0166in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">等待数据库操作完成的默认网络超时时间（单位：毫秒）</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6701in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>可选项</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0166in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6701in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">driver.encoding=UTF8</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0604in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">这将通过</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">
                                DriverManager.getConnection(url, driverProperties) </span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">方法传递值为&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">UTF8</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">&nbsp;的&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">encoding</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">&nbsp;属性给数据库驱动。</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style="margin-left:72px"><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">&nbsp;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333"><strong>POOLED</strong></span></span></span></p>
<ul style="list-style-type: disc; margin-left: 80px;">
    <li><span style="font-size:11.5pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">这种数据源的实现利用“池”的概念将</span></span><span
            style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span></span><span
            style="font-size:11.5pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">连接对象组织起来，避免了创建新的连接实例时所必需的初始化和认证时间。
                这种处理方式很流行，能使并发</span></span><span style="font-size:11.5pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"> Web </span></span><span style="font-size:11.5pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">应用快速响应请求。</span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:104px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.3534in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>属性</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3333in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.3534in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">driver</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3361in">
                <p><span style="font-size:11.5pt"><span style="color:#404040"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">这是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">驱动的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Java </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类全限定名（并不是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">驱动中可能包含的数据源类）。</span></span></span>
                </p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.3534in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">url</span></span>
                </p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3333in">
                <p><span style="font-size:11.5pt"><span style="color:#404040"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">这是数据库的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC URL </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">地址。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.3534in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">username</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3333in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">登录数据库的用户名。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.3534in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">password</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3333in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">登录数据库的密码。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.3534in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">defaultTransactionIsolationLevel</span></span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3333in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">默认的连接事务隔离级别。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.3534in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">defaultNetworkTimeout</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3333in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">等待数据库操作完成的默认网络超时时间（单位：毫秒）</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.3534in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>可选项</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3333in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.3534in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">driver.encoding=UTF8</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3437in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">这将通过</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">
                                DriverManager.getConnection(url, driverProperties) </span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">方法传递值为&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">UTF8</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">&nbsp;的&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">encoding</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">&nbsp;属性给数据库驱动。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.3534in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">poolMaximumActiveConnections</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3333in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">在任意时间可存在的活动（正在使用）连接数量</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#404040"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">默认值：</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">10</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.3534in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">poolMaximumIdleConnections</span>&nbsp;</span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3333in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">任意时间可能存在的空闲连接数。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.3534in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">poolMaximumCheckoutTime</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3333in">
                <p><span style="font-size:11.5pt"><span style="color:#404040"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">在被强制返回之前，池中连接被检出（</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">checked out</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">）时间</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#404040"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">默认值：</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">20000 </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">毫秒（即</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> 20 </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">秒）</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.3534in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">poolTimeToWait</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3333in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">这是一个底层设置，如果获取连接花费了相当长的时间，连接池会打印状态日志并重新尝试获取一个连接</span></span></span>
                </p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">（避免在误配置的情况下一直失败且不打印日志）</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#404040"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">默认值：</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">20000 </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">毫秒（即</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> 20 </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">秒）</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.3729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">poolMaximumLocalBadConnectionTolerance</span></span>
                </p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3312in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">这是一个关于坏连接容忍度的底层设置， 作用于每一个尝试从缓存池获取连接的线程。</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">如果这个线程获取到的是一个坏的连接，那么这个数据源允许这个线程尝试重新获取一个新的连接，但是这个重新尝试的次数不应该超过&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">poolMaximumIdleConnections</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">&nbsp;与&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">poolMaximumLocalBadConnectionTolerance</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#404040">&nbsp;之和。
                            </span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#404040"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">默认值：</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">3</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">（新增于</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> 3.4.5</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.3534in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">poolPingQuery</span>&nbsp;</span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3493in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">发送到数据库的侦测查询，用来检验连接是否正常工作并准备接受请求。</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#404040"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">默认是“</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">NO PING QUERY SET</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">”，这会导致多数数据库驱动出错时返回恰当的错误消息。</span></span></span>
                </p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.3534in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">poolPingEnabled</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.343in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">是否启用侦测查询。若开启，需要设置&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">poolPingQuery</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">&nbsp;属性为一个可执行的</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#404040"> SQL
                            </span></span><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">语句</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#404040"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">（最好是一个速度非常快的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> SQL </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">语句），默认值：</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">false</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.3534in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">poolPingConnectionsNotUsedFor</span></span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3444in">
                <p><span style="font-size:11.5pt"><span style="color:#404040"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">配置</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> poolPingQuery </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的频率。可以被设置为和数据库连接超时时间一样，来避免不必要的侦测，</span></span></span>
                </p>
                <p><span style="font-size:11.5pt"><span style="color:#404040"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">默认值：</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">0</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#404040"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">（即所有连接每一时刻都被侦测 — 当然仅当</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> poolPingEnabled </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> true </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">时适用）</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style="margin-left:72px"><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333"><strong>JNDI</strong></span></span></span></p>
<ul style="list-style-type: disc; margin-left: 80px;">
    <li><span style="font-size:11.5pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">这个数据源实现是为了能在如</span></span><span
            style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"> EJB </span></span><span
            style="font-size:11.5pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">或应用服务器这类容器中使用，容器可以集中或在外部配置数据源，然后放置一个</span></span><span
            style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JNDI </span></span><span
            style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">上下文的数据源引用。</span></span>
    </li>
    <li><span style="font-size:11.5pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">这种数据源配置只需要两个属性：</span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:104px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1368in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>属性</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.55in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1368in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">initial_context</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6041in">
                <p><span style="font-size:11.5pt"><span style="color:#404040"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">这个属性用来在</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> InitialContext </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">中寻找上下文（即，</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">initialContext.lookup(initial_context)</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">）。这是个可选属性，如果忽略，那么将会直接从</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> InitialContext </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">中寻找</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> data_source </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">属性。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1368in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">data_source</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.55in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#404040">这是引用数据源实例位置的上下文路径。</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#404040"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">提供了</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> initial_context </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">配置时会在其返回的上下文中进行查找，没有提供时则直接在</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> InitialContext </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">中查找。</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">&nbsp;</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1368in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">env.encoding=UTF8</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.55in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">和其他数据源配置类似，可以通过添加前缀“</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">env.</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">”直接把属性传递给</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">
                                InitialContext</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">。这就会在</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333"> InitialContext
                            </span></span><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">实例化时往它的构造方法传递值为&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">UTF8</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">&nbsp;的&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">encoding</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">&nbsp;属性。</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">transactionManager</span></strong></span> <span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">事物管理器</span></strong></span></li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
                style="background-color:white"><span style="font-family:&quot;Comic Sans MS&quot;"> MyBatis
                </span></span><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">中有两种类型的事务管理器（也就是</span></span><span
                style="background-color:white"><span style="font-family:&quot;Comic Sans MS&quot;">
                    type="[JDBC|MANAGED]"</span></span><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">）：</span></span></span></span></p>
<ul style="list-style-type: disc; margin-left: 40px;">
    <li><span style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">JDBC</span></span></span></li>
</ul>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="color:#404040"><span
                style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">这个配置直接使用了</span></span><span
                style="background-color:white"><span style="font-family:&quot;Comic Sans MS&quot;"> JDBC
                </span></span><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">的提交和回滚设施，它依赖从数据源获得的连接来管理事务作用域。</span></span></span></span>
</p>
<ul style="list-style-type: disc; margin-left: 40px;">
    <li><span style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">MANAGED</span></span></span></li>
</ul>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="color:#404040"><span
                style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">这个配置几乎没做什么。它从不提交或回滚一个连接，而是让容器来管理事务的整个生命周期（比如</span></span><span
                style="background-color:white"><span style="font-family:&quot;Comic Sans MS&quot;"> JEE
                </span></span><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">应用服务器的上下文）。
                    默认情况下它会关闭连接。然而一些容器并不希望连接被关闭，因此需要将</span></span><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;"> closeConnection </span></span><span
                style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">属性设置为</span></span><span
                style="background-color:white"><span style="font-family:&quot;Comic Sans MS&quot;"> false
                </span></span><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">来阻止默认的关闭行为</span></span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&lt;transactionManager </span><span style="color:#660066">type</span><span
                style="color:#666600">=</span><span style="color:#008800">"MANAGED"</span><span
                style="color:#000088">&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&nbsp; &lt;property </span><span style="color:#660066">name</span><span
                style="color:#666600">=</span><span style="color:#008800">"closeConnection" </span><span
                style="color:#660066">value</span><span style="color:#666600">=</span><span
                style="color:#008800">"false"</span><span style="color:#000088">/&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&lt;/transactionManager&gt;</span></span></span></p>
<p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://mybatis.org/mybatis-3/zh/configuration.html#environments"
        href="https://mybatis.org/mybatis-3/zh/configuration.html#environments"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://mybatis.org/mybatis-3/zh/configuration.html#environments</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>