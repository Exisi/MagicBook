---
categories:
- Spring
tags:
- ComboPooledDataSource
date:
- 2022-11-28 7:38:01
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">C3P0</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">是一个开源的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JDBC</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">连接池，它实现了数据源和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JNDI</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">绑定，支持</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JDBC3</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">规范和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JDBC2</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的标准扩展</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#333333">dbcp</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">没有自动回收空闲连接的功能，</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">c3p0</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">有自动回收空闲连接功能，</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">C3P0</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">拥有比</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">DBCP</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">更丰富的配置属性，通过这些属性，可以对数据源进行各种有效的控制：</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>属性</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.9548in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>分类</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">driverClass</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">数据库驱动名称</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.9826in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">必须项</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">jdbcUrl</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">数据库地址</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.9826in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">必须项</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">user</span></span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">用户名</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.9826in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">必须项</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">password</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">密码</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.9826in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">必须项</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">acquireIncrement</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">当连接池中的连接用完时，</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">C3P0</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">一次性创建新连接的数目</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">acquireRetryAttempts</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">定义在从数据库获取新连接失败后重复尝试获取的次数，默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">30</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">acquireRetryDelay</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">两次连接中间隔时间，单位毫秒，默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">1000</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">autoCommitOnClose</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">连接关闭时默认将所有未提交的操作回滚。默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">false</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">automaticTestTable</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">C3P0</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">将建一张名为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Test</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的空表，并使用其自带的查询语句进行测试。如果定义了这个参数，那么属性</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">preferredTestQuery</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">将被忽略。你 不能在这张</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Test</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">表上进行任何操作，它将中为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">C3P0</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">测试所用，默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">null</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">breakAfterAcquireFailure</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9861in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">获取连接失败将会引起所有等待获取连接的线程抛出异常。但是数据源仍有效保留，并在下次调&nbsp;&nbsp;
                            用</span><span style="font-family:&quot;Comic Sans MS&quot;">getConnection()</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的时候继续尝试获取连接。如果设为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">true</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，那么在尝试获取连接失败后该数据源将申明已断开并永久关闭。默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> false</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">checkoutTimeout</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">当连接池用完时客户端调用</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">getConnection()</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">后等待获取新连接的时间，超时后将抛出</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">SQLException</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，如设为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">0</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">则无限期等待。单位毫秒，默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">0</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">connectionTesterClassName</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">通过实现</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">ConnectionTester</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">QueryConnectionTester</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的类来测试连接，类名需设置为全限定名。默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">
                            com.mchange.v2.C3P0.impl.DefaultConnectionTester</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">idleConnectionTestPeriod</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">隔多少秒检查所有连接池中的空闲连接，默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">0</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">表示不检查</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">initialPoolSize</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">初始化时创建的连接数，应在</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">minPoolSize</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">与</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">maxPoolSize</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">之间取值。默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">3</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">maxIdleTime</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">最大空闲时间，超过空闲时间的连接将被丢弃。为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">0</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或负数则永不丢弃。默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">0</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">maxPoolSize</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">连接池中保留的最大连接数。默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">15</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">maxStatements</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9798in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">JDBC</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的标准参数，用以控制数据源内加载的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">PreparedStatement</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">数量。但由于预缓存的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Statement</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">属 于单个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Connection</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">而不是整个连接池。所以设置这个参数需要考虑到多方面的因素，如果</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">maxStatements</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">与</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> maxStatementsPerConnection</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">均为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">0</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，则缓存被关闭。默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">0</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">maxStatementsPerConnection</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">连接池内单个连接所拥有的最大缓存</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Statement</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">数。默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">0</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">numHelperThreads</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9861in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">C3P0</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">是异步操作的，缓慢的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">JDBC</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">操作通过帮助进程完成。扩展这些操作可以有效的提升性能，通过多线程实现多个操作同时被执行。默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">3</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">preferredTestQuery</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9861in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">定义所有连接测试都执行的测试语句。在使用连接测试的情况下这个参数能显著提高测试速度。测试的表必须在初始数据源的时候就存在。默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">null</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">propertyCycle</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">用户修改系统配置参数执行前最多等待的秒数。默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">300</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">testConnectionOnCheckout</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">因性能消耗大请只在需要的时候使用它。如果设为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">true</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">那么在每个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">connection</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">提交的时候都 将校验其有效性。建议使用</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">idleConnectionTestPeriod</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">automaticTestTable</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">等方法来提升连接测试的性能。默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">false</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">testConnectionOnCheckin</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">如果设为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">true</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">那么在取得连接的同时将校验连接的有效性。默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">false</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">factoryClassLocation</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">定</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">c3p0 libraries</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的路径，如果（通常都是这样）在本地即可获得那么无需设置，默认</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">null</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">即可</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9041in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">forceIgnoreUnresolvedTransactions</span></span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">强制忽略未解决事务，不建议使用</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">overrideDefaultUser</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">当用户调用</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">getConnection()</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">时使</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">root</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">用户成为去获取连接的用户。主要用于连接池连接非</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">c3p0</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">的数据源时。</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">Default:</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">null</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">overrideDefaultPassword</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9666in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">与</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">overrideDefaultUser</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">参数对应使用的一个参数。</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Default: null</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">usesTraditionalReflectiveProxies</span></span>
                </p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9861in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">早期的</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">c3p0</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">版本对</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">JDBC</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">接口采用动态反射代理。在早期版本用途广泛的情况下这个参数允许用户恢复到动态反射代理以解决不稳定的故障。最新的非反射代理更快并且已经开始广泛的被使用，所以这个参数未必有用。现在原先的动态反射与新的非反射代理同时受到支持，但今后可能的版本可能不支持动态反射代理。</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">Default:</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">false</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0451in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本项</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扩展</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">如果是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">c3p0-0.9.1.2</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">版本，加入一个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">jar</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">即可</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">c3p0-0.9.1.2.jar</span></span>
    </li>
</ul>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">如果是</span><span
                style="font-family:&quot;Comic Sans MS&quot;">c3p0-0.9.2</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">之后的版本，需要加入两个</span><span
                style="font-family:&quot;Comic Sans MS&quot;">jar</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">：</span><span
                style="font-family:&quot;Comic Sans MS&quot;">c3p0-0.9.X.jar</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                style="font-family:&quot;Comic Sans MS&quot;">mchange-commons-java-XX.jar</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">导入</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#303030">ComboPooledDataSource</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#303030">相关依赖：</span></span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:2.6784in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;dependency&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;groupId&gt;</span><span style="color:black">c3p0</span><span
                                style="color:blue">&lt;/groupId&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;artifactId&gt;</span><span style="color:black">c3p0</span><span
                                style="color:blue">&lt;/artifactId&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;version&gt;</span><span style="color:black">0.9.1.2</span><span
                                style="color:blue">&lt;/version&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/dependency&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">ComboPooledDataSource</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">BasicDataSource</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">一样提供了一个用于关闭数据源的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">close()</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">方法，这样我们就可以保证</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">容器关闭时数据源能够成功释放。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:8.2256in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;bean&nbsp;id</span><span style="color:black">=</span><span
                                style="color:maroon">"dataSource"</span><span style="color:blue">&nbsp;class</span><span
                                style="color:black">=</span><span
                                style="color:maroon">"com.mchange.v2.c3p0.ComboPooledDataSource"</span><span
                                style="color:blue">&nbsp;destroy-method</span><span style="color:black">=</span><span
                                style="color:maroon">"close"</span><span style="color:blue">&gt;</span></span></span>
                </p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;property&nbsp;name</span><span style="color:black">=</span><span
                                style="color:maroon">"driverClass"</span><span
                                style="color:blue">&nbsp;value</span><span style="color:black">=</span><span
                                style="color:maroon">"${jdbc_driver}"</span><span
                                style="color:blue">&nbsp;/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;property&nbsp;name</span><span style="color:black">=</span><span
                                style="color:maroon">"jdbcUrl"</span><span style="color:blue">&nbsp;value</span><span
                                style="color:black">=</span><span style="color:maroon">"${jdbc_url}"</span><span
                                style="color:blue">&nbsp;/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;property&nbsp;name</span><span style="color:black">=</span><span
                                style="color:maroon">"user"</span><span style="color:blue">&nbsp;value</span><span
                                style="color:black">=</span><span style="color:maroon">""${jdbc_username}"</span><span
                                style="color:blue">&nbsp;/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;property&nbsp;name</span><span style="color:black">=</span><span
                                style="color:maroon">"password"</span><span style="color:blue">&nbsp;value</span><span
                                style="color:black">=</span><span style="color:maroon">"${jdbc_password}"</span><span
                                style="color:blue">&nbsp;/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/bean&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">&nbsp;</span></span></span></p>