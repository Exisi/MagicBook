---
categories:
- Spring
tags:
- ‹beans›
date:
- 2022-11-28 7:39:45
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">就是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">java</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">对象，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> spring</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">容器管理的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">java</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">对象，叫做</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9756in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">id</span></span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9756in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">id</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">是</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的唯一标识符，在</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">spring</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">容器中不可能同时存在两个相同的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">id</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">；</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">class</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9756in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类的全限定名（包名</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">+</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类名），用</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">“.”</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">号连接；</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">name</span></span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9756in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">别名（</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">alias</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">），用法：</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">getBean("name")</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，支持设置多个别名，之间用英文逗号分割</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">abstract</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9756in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">设置</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">是否为抽象类，默认</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">abstract="false",</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">如果设为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">true</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，将不能被实例化</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6458in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">autowire-candidate</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.968in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">true</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，如果为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">false</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，那么该</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">不能作为其他</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">自动装配的候选者</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">autowire</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9756in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">引用数据类型的自动装配</span></span></p>
                <table summary="" cellspacing="0"
                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                    class=" cke_show_border">
                    <tbody>
                        <tr>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1687in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>属性值</strong></span></span></span></p>
                            </td>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9979in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>描述</strong></span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1687in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">default</span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9979in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">默认，采用父级标签</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">beans</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">中的</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">default-autowire</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1687in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">byName</span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0569in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">通过属性名称来自动装配，即</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">A</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">类中的</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">B</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">对象名称为</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">name</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">，那么将根据</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">id="name"</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">找到该</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">进行装配，</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">A</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">类必须提供</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">setName</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">方法；</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1687in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">byType</span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0138in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">根据属性类型来找到和配置文件中配置的</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">class</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">类型一致的</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">来自动装配，如果找到多个类型一致的</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">，则抛异常，如果一个都没有找到，则不执行装配操作，也不抛出异常。</span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1687in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">no</span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9979in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">不执行自动装配操作，只能用</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;ref</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">标签进行装配；</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1687in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">constructor</span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9979in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">根据构造器中参数类型来自动装配，如果找到多个类型一致的</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">，则抛异常，如果一个都没有找到，则不执行装配操作，但是抛出异常（这是和</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">byType</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">不一样的地方）。</span></span>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">depends-on</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9756in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">它的作用是一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">实例化的过程需要依赖于另一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的初始化，也就是说被依赖的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">将会在需要依赖的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">初始化之前加载。多个依赖</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">之间用</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">","</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">号分割；</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">destroy-method</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9756in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">它的作用是在销毁</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">之前可以执行指定的方法。注意：必须满足</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">scope="singleton"</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，并且</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">destroy</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">方法参数个数不能超过</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">1</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，并且参数类型只能为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">boolean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">init-method</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9756in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">它的作用是在创建一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">之后调用该方法，初始化方法必须是一个无参方法。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">factory-bean</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">factory-method</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9756in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">设置了</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">factory-bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性后，将指定创建</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的工厂类对象，</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">class</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性将失效</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">lazy-init</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9756in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">设置</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">对象是否懒加载，如果设为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">true</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，则应用第一次用到</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">时才实例化对象，否则在初始化</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">spring</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">容器时加载单例</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">对象。（非单例不实例化）</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">parent</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9756in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">指定</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的父类，</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">class</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性失效。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">primary</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9756in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">当一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">出现多个候选者时，设置</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">primary="true"</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">后，则优先使用该</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">来自动装配。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">scope</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9756in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的作用范围，它包括</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">singleton</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9826in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">单例，指定该</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">在</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">spring</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">容器中只有一个对象，所有通过</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">getBean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">获得的对象都是同一个对象。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">prototype</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9756in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">只要重新获取该</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，都将返回一个不同的对象。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">request</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9756in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">在一次</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">http</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">请求中对应一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，类似于</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">servlet</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6388in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">session</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9756in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">在一次会话中对应一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">application.xml</span></span>
    </li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:6.0458in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;?xml</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">version</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"1.0"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">encoding</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"UTF-8"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">?&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;beans</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">xmlns</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"http://www.springframework.org/schema/beans"</span></span></span>
                </p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">xmlns:xsi</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"http://www.w3.org/2001/XMLSchema-instance"</span></span></span>
                </p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">xsi:schemaLocation</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"http://www.springframework.org/schema/beans</span></span>&nbsp;</span>
                </p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><a
                                data-cke-saved-href="http://www.springframework.org/schema/beans/spring-beans.xsd"
                                href="http://www.springframework.org/schema/beans/spring-beans.xsd"><span
                                    style="color:maroon">http://www.springframework.org/schema/beans/spring-beans.xsd</span></a><span
                                style="color:maroon">"</span><span style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;bean</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">id</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"userService"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">class</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"com.exi.service.impl.UserServiceImpl"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">创建非自定义对象</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;bean</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">id</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"mydate"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">class</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"java.util.Date"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/beans&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">UserService.java</span></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">public
            interface UserService {</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; void hello();</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">UserServiceImpl.java</span></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">public
            class UserServiceImpl implements UserService {</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; @Override</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; public void hello() {</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            System.out.println("</span><span style="font-family:&quot;Microsoft YaHei UI&quot;">执行了方法</span><span
            style="font-family:&quot;Comic Sans MS&quot;">hello</span><span
            style="font-family:&quot;Comic Sans MS&quot;">()");</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; }</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">ServiceTest.java</span></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@Test</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">public class </span><span style="color:#660066">BeanTest</span><span
                style="color:#666600">{</span><br>&nbsp;&nbsp;&nbsp; <span style="color:#000088">public static
                void</span><span style="color:black"> main</span><span style="color:#666600">(</span><span
                style="color:#660066">String</span><span style="color:black"> args</span><span style="color:#666600">[])
            </span><span style="color:#000088">throws </span><span style="color:#660066">Exception</span><span
                style="color:#666600">{</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">String config = "applicationContext.xml";</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span
                style="color:#660066">ApplicationContext</span><span style="color:black"> ctx </span><span
                style="color:#666600">= </span><span style="color:#000088">new </span><span
                style="color:#660066">ClassPathXmlApplicationContext</span><span style="color:#666600">(</span><span
                style="color:#666600">config</span><span
                style="color:#666600">);</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span
                style="color:#660066">UserService service</span> <span style="color:#666600">=</span><span
                style="color:black"> ctx</span><span style="color:#666600">.</span><span
                style="color:black">getBean</span><span style="color:#666600">(</span><span
                style="color:#008800">"</span><span style="color:#008800">userService</span><span
                style="color:#008800">"</span><span
                style="color:#666600">);</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span
                style="color:black">&nbsp;service.hello();</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date date = (Date)
                ctx.getBean("mydate");</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                System.out.println("date==="+date);</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; <span
                style="color:#666600">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt; </span><a
            data-cke-saved-href="https://blog.csdn.net/ZixiangLi/article/details/87937819"
            href="https://blog.csdn.net/ZixiangLi/article/details/87937819"><span
                style="font-family:&quot;Comic Sans MS&quot;">https://blog.csdn.net/ZixiangLi/article/details/87937819</span></a><span
            style="font-family:&quot;Comic Sans MS&quot;">&gt;</span></span></p>