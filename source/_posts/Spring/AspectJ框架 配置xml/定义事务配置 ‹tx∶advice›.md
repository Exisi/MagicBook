---
categories:
- Spring
tags:
- ‹aop:advice›
date:
- 2022-11-28 8:39:02
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">tx:advice</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">标签用于定义事务的属性（隔离级别，传播行为，事物超时）</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;tx:</span><span
            style="font-family:&quot;Comic Sans MS&quot;">advice&gt;</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">有以下属性：</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.7256in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">id</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.7256in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">advice
                            bean</span><span style="font-family:&quot;Microsoft YaHei UI&quot;">的标识</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.8125in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">transaction-manager</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.7062in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">引用一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">TransactionManager</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="color:green"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;定义事务的属性（隔离级别，传播行为，事物超时）&nbsp;</span><span
                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:5.6215in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;tx:advice&nbsp;id</span><span style="color:black">=</span><span
                                style="color:maroon">"txAdvice"</span><span
                                style="color:blue">&nbsp;transaction-manager</span><span
                                style="color:black">=</span><span style="color:maroon">"transactionManager"</span><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/tx:advice&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;tx:attributes&gt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">是</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;/tx:advice&gt;</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的子标签用于定义事务的属性</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;tx:attributes&gt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">下有一个</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;tx:method</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&gt;</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">子标签用于定义具体事务需要的属性</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;tx:method</span><span
            style="font-family:&quot;Comic Sans MS&quot;">&gt;</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">有以下属性：</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3291in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.2333in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3291in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">name</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.2333in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">方法名的匹配模式，通知根据该模式寻找匹配的方法。</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">该属性可以使用</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">asterisk (*)</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">通配符</span></span></span></p>
                <ul style="list-style-type:disc">
                    <li><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">使用业务方法的名称</span></span></li>
                    <li><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">带有通配符的业务方法的名称</span></span></li>
                    <li><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">直接使用</span></span><span
                            style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">asterisk
                                (*)</span></span><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">通配符</span></span></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3291in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">propagation</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.2333in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">设定事务定义所用的传播级别</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3291in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">isolation</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.2333in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">设定事务的隔离级别</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3291in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">timeout</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.2333in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">指定事务的超时（单位为秒）</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3291in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">read-only</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3027in">
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">该属性为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">true</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指示事务是只读的（典型地，</span></span></span>
                </p>
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对于只执行查询的事务你会将该属性设为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">true</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">如果出现了更新、插入或是删除语句时只读事务就会失败）</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3486in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">no-rollback-for</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.2145in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">以逗号分隔的异常类的列表，目标方法可以抛出</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">这些异常而不会导致通知执行回滚</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3291in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">rollback-for</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.2333in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">以逗号分隔的异常类的列表，当目标方法抛出这些</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">异常时会导致通知执行回滚。默认情况下，该列表为空，</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">因此不在</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">no-rollback-for</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">列表中的任何运行</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">时异常都会导致回滚</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;tx:advice&nbsp;id</span><span style="color:black">=</span><span
                style="color:maroon">"txAdvice"</span><span style="color:blue">&nbsp;transaction-manager</span><span
                style="color:black">=</span><span style="color:maroon">"transactionManager"</span><span
                style="color:blue">&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">&lt;tx:attributes&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:green">&nbsp;&nbsp; <span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;定义事务的属性（隔离级别，传播行为，事物超时）&nbsp;</span><span
                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">&lt;tx:method&nbsp;name</span><span style="color:black">=</span><span
                style="color:maroon">"get"</span><span style="color:blue">&nbsp;propagation</span><span
                style="color:black">=</span><span style="color:maroon">"SUPPORTS"</span><span
                style="color:blue">&nbsp;isolation</span><span style="color:black">=</span><span
                style="color:maroon">"DEFAULT"</span><span style="color:blue">&nbsp;read-only</span><span
                style="color:black">=</span><span style="color:maroon">"true"</span><span
                style="color:blue">&nbsp;/&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">&lt;tx:method&nbsp;name</span><span style="color:black">=</span><span
                style="color:maroon">"find*"</span><span style="color:blue">&nbsp;propagation</span><span
                style="color:black">=</span><span style="color:maroon">"SUPPORTS"</span><span
                style="color:blue">&nbsp;isolation</span><span style="color:black">=</span><span
                style="color:maroon">"DEFAULT"</span><span style="color:blue">&nbsp;read-only</span><span
                style="color:black">=</span><span style="color:maroon">"true"</span><span
                style="color:blue">&nbsp;/&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">&lt;tx:method&nbsp;name</span><span style="color:black">=</span><span
                style="color:maroon">"*"</span><span style="color:blue">&nbsp;propagation</span><span
                style="color:black">=</span><span style="color:maroon">"REQUIRED"</span><span
                style="color:blue">&nbsp;rollback-for</span><span style="color:black">=</span><span
                style="color:maroon">"java.lang.Exception"</span><span
                style="color:blue">&nbsp;/&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">&lt;/tx:attributes&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/tx:advice&gt;</span></span></span></p>