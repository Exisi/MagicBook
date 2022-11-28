---
categories:
- MyBatis
tags:
- resulType
- resultMap
date:
- 2022-11-27 7:30:01
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">MyBatis</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的每一个查询映射的返回类型都是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">ResultMap</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">，只是当我们提供的返回类型属性是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">resultType</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的时候，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">MyBatis</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">会自动的给我们把对应的值赋给</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">resultType</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">所指定对象的属性，而当我们提供的返回类型是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">resultMap</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的时候，将数据库中列数据复制到对象的相应属性上，可以用于复制查询，两者不能同时用</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span
            style="font-family:&quot;Comic Sans MS&quot;"><strong>resultType</strong></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">该属性就是</span><span
            style="font-family:&quot;Comic Sans MS&quot;">resultMap</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">返回的映射类型</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">当</span><strong><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#00b0f0">实体类的属性名</span></span></strong><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">和查询到的</span><strong><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#00b0f0">数据库表的字段名</span></span></strong><strong><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#e84c22">一致</span></span></strong><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">时，</span><span
            style="font-family:&quot;Comic Sans MS&quot;">resultType</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">将查询到的结果映射封装成实体类类型</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&lt;select id="get</span><span style="color:black">UserById</span><span
                style="color:black">" </span><span style="color:red">parameterType</span><span
                style="color:#e84c22">="</span><span style="color:#e84c22">int</span><span
                style="color:#e84c22">"</span> <span style="color:black">resultType="</span><span
                style="color:black">Users</span><span
                style="color:black">"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select * from smbms_user
                where id=#{</span><span style="color:#e84c22">id</span><span
                style="color:black">}<br>&lt;/select&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span
            style="font-family:&quot;Comic Sans MS&quot;"><strong>resultMap</strong></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">当</span><strong><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">实体类的属性名</span></strong><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">和查询到的</span><strong><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">数据库表的字段名</span></strong><strong><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#e84c22">不一致</span></span></strong><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">时，</span><span
            style="font-family:&quot;Comic Sans MS&quot;">resultMap</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">将字段映射到对应的实体类的属性中，防止匹配失败</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">resultMap</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">可以实现将查询结果映射为复杂类型的实体类对象，比如在查询结果映射对象中包括实体类对象和</span><span
            style="font-family:&quot;Comic Sans MS&quot;">list</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">实现一对一查询和一对多查询</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;resultMap id=</span>"<strong>ReultMap</strong>"<span style="color:#b43512">
                type=</span>"Bills"<span style="color:#b43512">&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"billcode" <span
                style="color:#b43512">column=</span>"billcode"<span style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"productName" <span
                style="color:#b43512">column=</span>"productName"<span style="color:#b43512">/&gt;</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"proName" <span
                style="color:#b43512">column=</span>"proName"<span style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"productCount"<span style="color:#b43512">
                column=</span>"productCount"<span style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"isPayment"<span style="color:#b43512">
                column=</span>"isPayment"<span style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"creationDate" <span
                style="color:#b43512">column=</span>"creationDate"<span style="color:#b43512">/&gt;</span></span></span>
</p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;/resultMap&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&nbsp;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;select id=</span>"getBillListByMap" <span
                style="color:#b43512">resultMap=</span>"<strong>ReultMap</strong>"<span
                style="color:#b43512">&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">SELECT
            sb.billcode,sb.productName,sp.proName,sb.productCount,sb.isPayment,sb.creationDate</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">FROM
            smbms_bill AS sb,smbms_provider AS sp</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">WHERE</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">sb.providerId = sp.id</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">AND</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">sb.providerId=#{providerId}</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;/select&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;</span><span
            style="font-family:&quot;Comic Sans MS&quot;">resultMap</span><span
            style="font-family:&quot;Comic Sans MS&quot;">&gt;</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">标签的属性</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1465in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>属性</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6291in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1465in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">id</span></span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6291in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">当前命名空间中的一个唯一标识，用于标识一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">result map.</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1465in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">type</span></span>
                </p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6291in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类的完全限定名</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">, </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或者一个类型别名</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> (</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">内置的别名可以参考上面的表格</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">).</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1465in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">autoMapping</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6833in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">如果设置这个属性，</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">MyBatis</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">将会为这个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">ResultMap</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">开启或者关闭自动映射。这个属性会覆盖全局的属性</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> autoMappingBehavior</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。默认值为：</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">unset</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><br></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">resultMap</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">有以下标签</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2902in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei&quot;"><span
                                style="color:white"><strong>标签</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4847in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2902in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">constructor</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">&gt;</span>&nbsp;</span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">用于在实例化类时，注入结果到构造方法中</span></span></p>
                <ul style="list-style-type:disc">
                    <li><span style="font-size:11.5pt"><strong><span
                                    style="font-family:&quot;Comic Sans MS&quot;">idArg</span></strong></span>&nbsp;
                    </li>
                </ul>
                <p style="margin-left:72px"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">ID </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">参数</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">;</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">标记出作为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> ID </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的结果可以帮助提高整体性能</span></span></p>
                <ul style="list-style-type:disc">
                    <li><span style="font-size:11.5pt"><strong><span
                                    style="font-family:&quot;Comic Sans MS&quot;">arg</span></strong></span></li>
                </ul>
                <p style="margin-left:72px"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">将被注入到构造方法的一个普通结果</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2902in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;id&gt;</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> ID </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">结果</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">;</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">标记出作为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> ID </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的结果可以帮助提高整体性能</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2902in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;result&gt;</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">注入到字段或</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> JavaBean </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性的普通结果</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2902in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;association&gt;</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;一个复杂类型的关联</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">;</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">许多结果将包装成这种类型嵌套结果映射 </span></span></p>
                <ul style="list-style-type:disc">
                    <li><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">关联可以指定为一个&nbsp;</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">resultMap</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;元素，或者引用一个</span></span></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2902in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;collection&gt;</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;一个复杂类型的集合嵌套结果映射</span></span></p>
                <ul style="list-style-type:disc">
                    <li><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">集合可以指定为一个&nbsp;</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">resultMap</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;元素，或者引用一个</span></span></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3097in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;discriminator&gt;</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5222in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">使用结果值来决定使用哪个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;resultMap</span></span></p>
                <ul style="list-style-type:disc">
                    <li><span style="font-size:11.5pt"><strong><span
                                    style="font-family:&quot;Comic Sans MS&quot;">case</span></strong></span>&nbsp;</li>
                </ul>
                <p style="margin-left:72px"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基于某些值的结果映射</span></span></p>
                <p style="margin-left:72px"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">嵌套结果映射 – 一个&nbsp;</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">case</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;也是一个映射它本身的结果</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">因此可以包含很多相 同的元素，或者它可以参照一个外部的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;resultMap</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">&lt;constructor&gt;</span></strong></span> <span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei&quot;">构造方法</span></strong></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">为了将结果注入构造方法，</span><span
            style="font-family:&quot;Comic Sans MS&quot;">MyBatis</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">需要通过某种方式定位相应的构造方法。 </span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">在下面的例子中，</span><span
            style="font-family:&quot;Comic Sans MS&quot;">MyBatis</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">搜索一个声明了三个形参的的构造方法，以&nbsp;&nbsp;</span><span
            style="font-family:&quot;Comic Sans MS&quot;">java.lang.Integer</span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;">,</span>&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;">java.lang.String</span>&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;">and</span>&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;">int</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;&nbsp;的顺序排列。</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;constructor&gt; </span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;idArg column=</span>"id" <span style="color:#b43512">javaType=</span>"int"
            <span style="color:#b43512">name=</span>"id"<span style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;arg column=</span>"username" <span
                style="color:#b43512">javaType=</span>"String" <span style="color:#b43512">name=</span>"username"<span
                style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;arg column=</span>"age"<span style="color:#b43512"> javaType=</span>"_int"
            <span style="color:#b43512">name=</span>"age"<span style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;/constructor&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:104px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.125in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>属性</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5666in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.125in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">column</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5666in">
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">数据库中的列名</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">或者是列的别名。一般情况下，这和
                                传递给&nbsp;</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">resultSet.getString(columnName)</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;方法的参数一样。</span></span></span>
                </p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.125in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">javaType</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5666in">
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">一个</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Java </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类的完全限定名</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">或一个类型别名</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">参考上面内建类型别名的列表</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">)</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。 如果你映射到一个</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JavaBean,MyBatis </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">通常可以断定类型。然而</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">如 果你映射到的是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> HashMap,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">那么你应该明确地指定</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> javaType </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">来保证期望的 行为。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.125in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">jdbcType</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6152in">
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Comic Sans MS&quot;">JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类型，所支持的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类型参见这个表格之前的“支持的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类型”。
                                只需要在可能执行插入、更新和删除的允许空值的列上指定</span><span style="font-family:&quot;Comic Sans MS&quot;">
                                JDBC </span><span style="font-family:&quot;Microsoft YaHei UI&quot;">类型。这是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的要求而非</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> MyBatis </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的要求。如果你直接面向</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">编程</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">你需要对可能为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> null </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的值指定这个类型。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.134in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">typeHandler</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5576in">
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">我们在前面讨论过的默认类型处理器。使用这个属性</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">你可以覆盖默 认的类型处理器。这个属性值是一个类型处理
                                器实现类的完全限定名，或者是类型别名。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.125in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">select</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5666in">
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">用于加载复杂类型属性的映射语句的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> ID,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">它会从</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> column </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">属性中指定的列检索数据，作为参数传递给此</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> select </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">语句。具体请参考</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Association </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">标签。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.125in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">resultMap</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6256in">
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Comic Sans MS&quot;">ResultMap </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> ID</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，可以将嵌套的结果集映射到一个合适的对象树中，功能和</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> select </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">属性相似，它可以实现将多表连接操作的结果映射成一个单一的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">ResultSet</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。这样的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">ResultSet</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">将会将包含重复或部分数据重复的结果集正确的映射到嵌套的对象树中。为了实现它</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">, MyBatis</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">允许你 “串联”</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> ResultMap,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">以便解决嵌套结果集的问题。想了解更多内容，请参考下面的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">Association</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">元素。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.125in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">name</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6333in">
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">构造方法形参的名字。从</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">3.4.3</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">版本开始，通过指定具体的名字，你可以以任意顺序写入</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">arg</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">元素。参看上面的解释。</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span style="font-family:&quot;Comic Sans MS&quot;">&lt;id&gt; &amp;
                    &lt;result&gt;</span></strong></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">这些是结果映射最基本的内容。</span><span
            style="font-family:&quot;Comic Sans MS&quot;">id </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> result </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">都将一个列的值映射到一个简单数据类型</span><span
            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">字符串</span><span
            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">整型</span><span
            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">双精度浮点数</span><span
            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">日期等</span><span
            style="font-family:&quot;Comic Sans MS&quot;">)</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">的属性或字段。</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">这两者之间的唯一不同是，</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> id </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">表示的结果将是对象的标识属性，这会在比较对象实例时用到。
            这样可以提高整体的性能，尤其是缓存和嵌套结果映射</span><span style="font-family:&quot;Comic Sans MS&quot;">(</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">也就是联合映射</span><span
            style="font-family:&quot;Comic Sans MS&quot;">)</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">的时</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;id property=</span>"id" <span
                style="color:#b43512">column=</span>"post_id"<span style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"subject"<span style="color:#b43512">
                column=</span>"post_subject"<span style="color:#b43512">/&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:104px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1187in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>属性</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.2812in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1187in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">property</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.3506in">
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">映射到列结果的</span><strong><span
                                    style="font-family:&quot;Microsoft YaHei UI&quot;">类表的字段或属性</span></strong><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。如果用来匹配的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JavaBeans </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">存在给定名字的属性，那么它将会被使用。否则</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> MyBatis </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">将会寻找给定名称</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> property </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的字段。
                                无论是哪一种情形，你都可以使用通常的点式分隔形式进行复杂属性导航。比如</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">你可以这样映射一些简单的东西</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">: </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">“</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">username</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">”</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> ,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">或者映射到一些复杂的东西</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">: </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">“</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">address.street.number</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">” 。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1187in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">column</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.2812in">
                <p><span style="font-size:11.5pt"><span style="color:black"><strong><span
                                    style="font-family:&quot;Microsoft YaHei UI&quot;">数据库中的列名</span></strong><span
                                style="font-family:&quot;Comic Sans MS&quot;">,</span><strong><span
                                    style="font-family:&quot;Microsoft YaHei UI&quot;">或者是列的别名</span></strong><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。一般情况下，这和 传递给&nbsp;</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">resultSet.getString(columnName)</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;方法的参数一样。</span></span></span>
                </p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1187in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">javaType</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.3506in">
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">一个</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Java </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类的完全限定名</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">或一个类型别名</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">参考上面内建类型别名 的列表</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">) </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。如果你映射到一个</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JavaBean,MyBatis </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">通常可以断定类型。 然而</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">如果你映射到的是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> HashMap,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">那么你应该明确地指定</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> javaType </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">来保证期望的行为。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1187in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">jdbcType</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.2812in">
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Comic Sans MS&quot;">JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类型，所支持的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类型参见这个表格之后的“支持的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类型”。
                                只需要在可能执行插入、更新和删除的允许空值的列上指定</span><span style="font-family:&quot;Comic Sans MS&quot;">
                                JDBC </span><span style="font-family:&quot;Microsoft YaHei UI&quot;">类型。这是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的要求而非</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> MyBatis </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的要求。如果你直接面向</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">编程</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">你需要对可能为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> null </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的值指定这个类型。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.134in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">typeHandler</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.3354in">
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">我们在前面讨论过的默认类型处理器。使用这个属性</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">你可以覆盖默 认的类型处理器。这个属性值是一个类型处理
                                器实现类的完全限定名，或者是类型别名。</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">&lt;</span></strong></span><span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">association</span></strong></span><span
            style="font-size:12.0pt"><strong><span style="font-family:&quot;Comic Sans MS&quot;">&gt;
                </span></strong></span><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei&quot;">关联</span></strong></span>
        <ul style="list-style-type:disc">
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">关联元素用于处理“</span></span><span
                    style="font-size:12.0pt"><strong><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">一对一</span></strong></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">”类型的关系。</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span>
            </li>
        </ul>
    </li>
</ul>
<p></p>
<ul style="list-style-type: disc; margin-left: 40px;">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">比如</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">,</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在我们的示例中</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">,</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">一个博客有一个用户。
                关联映射就工作于这种结果之上。</span></span></li>
</ul>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:SimSun"><span
                style="color:#404040">&nbsp;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;resultMap id="userMap"
            type="User"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;id property="id"
            column="id"&gt;&lt;/id&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;result property="username"
            column="username"&gt;&lt;/result&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;result
            property="password"
            column="password"&gt;&lt;/result&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;result
            property="address"
            column="address"&gt;&lt;/result&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;result
            property="email" column="email"&gt;&lt;/result&gt;<br><span
                style="color:#b43512">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;association
                property=</span>"role"<span style="color:#b43512"> javaType=</span>"Role"<span
                style="color:#b43512">&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;id
                property=</span>"id"<span style="color:#b43512"> column=</span>"role_id"<span
                style="color:#b43512">&gt;&lt;/id&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;result
                property=</span>"name"<span style="color:#b43512"> column=</span>"role_name"<span
                style="color:#b43512">&gt;&lt;/result&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/association&gt;</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/resultMap&gt;</span></span></p>
<p style="margin-left:108px"><span style="font-size:11.5pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">&nbsp;</span></span></span>
</p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:104px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2729in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>属性</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5861in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">column</span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5861in">
                <p><span style="font-size:11.5pt"><strong><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">来自数据库的列名</span></strong><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或重命名的列标签。这和通常传递给</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> resultSet.getString(columnName)</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">方法的字符串是相同的。 </span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">column
                        </span><span style="font-family:&quot;Microsoft YaHei UI&quot;">注 意</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> : </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">要 处 理 复 合 主 键</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> , </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">你 可 以 指 定 多 个 列 名 通 过</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> column= </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">”</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> {prop1=col1,prop2=col2} </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">” 这种语法来传递给嵌套查询语 句。</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">这会引起</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> prop1 </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> prop2 </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">以参数对象形式来设置给目标嵌套查询语句。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">property</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6555in">
                <p><span style="font-size:11.5pt"><strong><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">映射到实体类结果的字段或属性</span></strong><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。如果用来匹配的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> JavaBeans </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">存在给定名字的属性，那么它将会被使用。 </span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">否则</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> MyBatis </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">将会寻找与给定名称相同的字段。
                            这两种情形你可以使用通常点式的复杂属性导航。</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">比如</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">你可以这样映射 一 些 东 西</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> :</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">“</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> username </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">”</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">, </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或 者 映 射 到 一 些 复 杂 的 东 西</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> : </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">“</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">address.street.number</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">” 。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">javaType</span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6472in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">指向一个
                        </span><span style="font-family:&quot;Comic Sans MS&quot;">Java </span><strong><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">实体类</span></strong><strong><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                    style="color:#e84c22">中</span></span></strong><strong><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的字段或属性</span></strong><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或一个</span><strong><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类型别名，</span></strong></span></p>
                <p><span style="font-size:11.5pt"><strong><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">属性可以是</span></strong><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><strong><span
                                style="font-family:&quot;Comic Sans MS&quot;">int,String</span></strong><strong><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></strong><strong><span
                                style="font-family:&quot;Comic Sans MS&quot;">Role</span></strong><span
                            style="font-family:&quot;Comic Sans MS&quot;">) </span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">如果你映射到一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> JavaBean,MyBatis </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">通常可以断定类型。</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">然而</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">如</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> javaType </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">果你映射到的是</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> HashMap,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">那么你应该明确地指定</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> javaType </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">来保证所需的行为。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">select</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6555in">
                <p><span style="font-size:11.5pt"><strong><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">另外一个映射语句的</span></strong><strong><span
                                style="font-family:&quot;Comic Sans MS&quot;"> ID</span></strong><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">可以加载这个属性映射需要的复杂类型。获取的
                            在列属性中指定的列的值将被传递给目标</span><span style="font-family:&quot;Comic Sans MS&quot;"> select
                        </span><span style="font-family:&quot;Microsoft YaHei UI&quot;">语句作为参数。</span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">select
                        </span><span style="font-family:&quot;Microsoft YaHei UI&quot;">注 意</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> : </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">要 处 理 复 合 主 键</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> , </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">你 可 以 指 定 多 个 列 名 通 过</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> column= </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">”</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> {prop1=col1,prop2=col2} </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">” 这种语法来传递给嵌套查询语 句。</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">这会引起</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> prop1 </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> prop2 </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">以参数对象形式来设置给目标嵌套查询语句。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">fetchType</span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5861in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">可选的。有效值为&nbsp;</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">lazy</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">eager</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。 如果使用了，它将取代全局配置参数</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">lazyLoadingEnabled</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2729in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">foreignColumn</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5861in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">指定外键对应的列名，指定的列将与父类型中&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">column</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">&nbsp;的给出的列进行匹配。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2729in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">resultSet</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5861in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">指定用于加载复杂类型的结果集名字。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">jdbcType</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.65in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">在这个表格之前的所支持的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类型列表中的类型。</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">JDBC </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类型是仅仅 需要对插入</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">, </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">更新和删除操作可能为空的列进行处理。</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">这是</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的需要</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">, jdbcType </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">而不是</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> MyBatis </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的。如果你直接使用</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">编程</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">你需要指定这个类型</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">-</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">但 仅仅对可能为空的值。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">typeHandler</span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6555in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">使用这个属性</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">你可以覆盖默认的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> typeHandler </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类型处理器。 </span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">这个属性值是类的完全限定名或者是一个类型处理器的实现</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">, </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或者是类型别名。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">resultMap</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5861in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">用于嵌套外部</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">resultMap</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">结果集</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span style="font-family:&quot;Comic Sans MS&quot;">&lt;collection&gt;
                </span></strong></span><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei&quot;">集合</span></strong></span>
        <ul style="list-style-type:disc">
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">集合元素用于处理“</span></span><span
                    style="font-size:12.0pt"><strong><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">一对多</span></strong></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">”类型的关系</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span>
            </li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">集合元素的作用几乎和关联是相同的。实际上</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">,</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">它们也很相似</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">,</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">文档的异同是多余的。
                        所以我们更多关注于它们的不同</span></span></li>
        </ul>
        <ul style="list-style-type:disc">
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">要映射嵌套结果集合到</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> List
                    </span></span><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">中</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">,</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">我们使用集合元素。就像关联元素一样</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">,</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">我们可以从
                        连接中使用嵌套查询</span></span><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">,</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">或者嵌套结果</span></span></li>
        </ul>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;collection property=</span><span style="color:#949a55">"posts"</span><span
                style="color:#b43512"> ofType=</span><span style="color:#949a55">"domain.blog.Post"</span> <span
                style="color:#b43512">select=</span>"selectPostsForBlog"<span
                style="color:#b43512">&gt;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;id property=</span><span style="color:#949a55">"id" </span><span
                style="color:#b43512">column=</span><span style="color:#949a55">"post_id"</span> <span
                style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span><span style="color:#949a55">"subject" </span><span
                style="color:#b43512">column=</span><span style="color:#949a55">"post_subject"</span><span
                style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span><span style="color:#949a55">"body"</span><span
                style="color:#b43512"> column=</span><span style="color:#949a55">"post_body"</span><span
                style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;/collection&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;select id=</span><span style="color:#949a55">"selectBlog" </span><span
                style="color:#b43512">resultMap=</span><span style="color:#949a55">"blogResult"</span><span
                style="color:#cc6666">&gt;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#959796">SELECT * FROM BLOG WHERE ID = #{id}</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;/select&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;select id=</span><span style="color:#949a55">"selectPostsForBlog"</span><span
                style="color:#b43512"> resultType=</span><span style="color:#949a55">"Post"</span><span
                style="color:#cc6666">&gt;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#959796">SELECT * FROM POST WHERE BLOG_ID = #{id}</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;/select&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&nbsp;</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:104px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2611in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>属性</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.1395in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2611in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">column</span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.209in">
                <p><span style="font-size:11.5pt"><strong><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">来自数据库的列名</span></strong><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或重命名的列标签。这和通常传递给</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> resultSet.getString(columnName)</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">方法的字符串是相同的。 </span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">column
                        </span><span style="font-family:&quot;Microsoft YaHei UI&quot;">注 意</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> : </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">要 处 理 复 合 主 键</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> , </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">你 可 以 指 定 多 个 列 名 通 过</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> column= </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">”</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> {prop1=col1,prop2=col2} </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">” 这种语法来传递给嵌套查询语 句。</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">这会引起</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> prop1 </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> prop2 </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">以参数对象形式来设置给目标嵌套查询语句。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2611in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">property</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.209in">
                <p><span style="font-size:11.5pt"><strong><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">映射到实体类结果的字段或属性</span></strong><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。如果用来匹配的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> JavaBeans </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">存在给定名字的属性，那么它将会被使用。 </span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">否则</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> MyBatis </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">将会寻找与给定名称相同的字段。
                            这两种情形你可以使用通常点式的复杂属性导航。</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">比如</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">你可以这样映射 一 些 东 西</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> :</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">“</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> username </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">”</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">, </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或 者 映 射 到 一 些 复 杂 的 东 西</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> : </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">“</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">address.street.number</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">” 。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2611in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">ofType</span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.209in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">指向一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Java </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">实体类的对象</span><strong><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">（</span></strong><strong><span
                                style="font-family:&quot;Comic Sans MS&quot;">Role</span></strong><strong><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">）</span></strong><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或</span><strong><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">一个对象类型</span></strong><span
                            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">参考上面内建类型别名的列表</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">) </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。如果你映射到一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> JavaBean,MyBatis </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">通常可以断定类型。</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">然而</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">如</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> javaType </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">果你映射到的是</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> HashMap,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">那么你应该明确地指定</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> javaType </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">来保证所需的行为。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2611in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">select</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.209in">
                <p><span style="font-size:11.5pt"><strong><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">另外一个映射语句的</span></strong><strong><span
                                style="font-family:&quot;Comic Sans MS&quot;"> ID</span></strong><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">可以加载这个属性映射需要的复杂类型。获取的
                            在列属性中指定的列的值将被传递给目标</span><span style="font-family:&quot;Comic Sans MS&quot;"> select
                        </span><span style="font-family:&quot;Microsoft YaHei UI&quot;">语句作为参数。</span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">select
                        </span><span style="font-family:&quot;Microsoft YaHei UI&quot;">注 意</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> : </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">要 处 理 复 合 主 键</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> , </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">你 可 以 指 定 多 个 列 名 通 过</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> column= </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">”</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> {prop1=col1,prop2=col2} </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">” 这种语法来传递给嵌套查询语 句。</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">这会引起</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> prop1 </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> prop2 </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">以参数对象形式来设置给目标嵌套查询语句。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2611in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">fetchType</span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.1395in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">可选的。有效值为&nbsp;</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">lazy</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">eager</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。 如果使用了，它将取代全局配置参数</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">lazyLoadingEnabled</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2701in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">foreignColumn</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.1993in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">指定外键对应的列名，指定的列将与父类型中&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">column</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">&nbsp;的给出的列进行匹配。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2611in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">resultSet</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.1395in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">指定用于加载复杂类型的结果集名字。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2611in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">jdbcType</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.1395in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">在这个表格之前的所支持的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类型列表中的类型。</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">JDBC </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类型是仅仅 需要对插入</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">, </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">更新和删除操作可能为空的列进行处理。</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">这是</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的需要</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">, jdbcType </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">而不是</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> MyBatis </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的。如果你直接使用</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">编程</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">你需要指定这个类型</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">-</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">但 仅仅对可能为空的值。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2611in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">typeHandler</span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.1937in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">使用这个属性</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">你可以覆盖默认的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> typeHandler </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类型处理器。 </span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">这个属性值是类的完全限定名或者是一个类型处理器的实现</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">, </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或者是类型别名。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2611in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">resultMap</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.1395in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">用于嵌套外部</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">resultMap</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">结果集</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><br></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">&lt;</span></strong></span><span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">discriminator</span></strong></span><span
            style="font-size:12.0pt"><strong><span style="font-family:&quot;Comic Sans MS&quot;">&gt;
                </span></strong></span><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei&quot;">鉴别器</span></strong></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">有时一个单独的数据库查询也许返回很多不同</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> (</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">但是希望有些关联</span><span
            style="font-family:&quot;Comic Sans MS&quot;">) </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">数据类型的结果集。 鉴别器元素就是被设计来处理这个情况的</span><span
            style="font-family:&quot;Comic Sans MS&quot;">, </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">还有包括类的继承层次结构。 鉴别器非常容易理 解</span><span
            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">因为它的表现很像</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> Java </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">语言中的</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> switch </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">语句。</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">定义鉴别器指定了</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> column </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> javaType </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">属性。 列是</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> MyBatis </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">查找比较值的地方。</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> JavaType </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">是需要被用来保证等价测试的合适类型</span><span
            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">尽管字符串在很多情形下都会有用</span><span
            style="font-family:&quot;Comic Sans MS&quot;">):</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;resultMap id=</span>"vehicleResult" <span
                style="color:#b43512">type=</span>"Vehicle"&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;id property=</span>"id" <span style="color:#b43512">column=</span>"id"
            /&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"vin" <span
                style="color:#b43512">column=</span>"vin"/&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"year"<span style="color:#b43512">
                column=</span>"year"/&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"make"<span style="color:#b43512">
                column=</span>"make"/&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"model" <span
                style="color:#b43512">column=</span>"model"/&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"color" <span
                style="color:#b43512">column=</span>"color"/&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;discriminator javaType=</span>"int"<span style="color:#b43512">
                column=</span>"vehicle_type"&gt;</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;case value=</span>"1"<span style="color:#b43512">
                resultMap=</span>"carResult"/&gt;</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;case value=</span>"2" <span
                style="color:#b43512">resultMap=</span>"truckResult"/&gt;</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;case value=</span>"3"<span style="color:#b43512">
                resultMap=</span>"vanResult"/&gt;</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;case value=</span>"4" <span
                style="color:#b43512">resultMap=</span>"suvResult"/&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;/discriminator&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;/resultMap&gt;</span></span></span></p>
<p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://blog.csdn.net/u012843873/article/details/80198185"
        href="https://blog.csdn.net/u012843873/article/details/80198185"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://blog.csdn.net/u012843873/article/details/80198185</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>