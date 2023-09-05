---
categories:
  - Spring Boot
tags:
  - ［@SuppressWarnings］
date:
  - 2022-9-28 15:35:09
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">SuppressWarnings</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">J2SE5.0</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中标准的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Annotation</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">之一。可以标注在类、字段、方法、参数、构造方法，以及局部变量上。作用是告诉编译器忽略指定的警告，不用在编译完成后出现警告信息</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4305in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.7111in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4305in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">value</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.7111in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">编译器要在带注</span><span
                            style="font-family:&quot;Times New Roman&quot;">​​</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">释的元素中抑制的警告集</span></span></p>
                <table summary="" cellspacing="0"
                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                    class=" cke_show_border">
                    <tbody>
                        <tr>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>关键字</strong></span></span></span></p>
                            </td>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>用途</strong></span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">all</span></span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:#111111">抑制所有警告</span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">boxing</span></span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:#111111">抑制装箱、拆箱操作时候的警告</span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">cast</span></span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:#111111">抑制映射相关的警告</span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">dep-ann</span></span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:#111111">抑制启用注释的警告</span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">deprecation</span></span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:#111111">抑制过期方法警告</span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">fallthrough</span></span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span style="color:#111111"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">抑制确在</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">switch</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">中缺失</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">breaks</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">的警告</span></span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">finally</span></span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span style="color:#111111"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">抑制</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">finally</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">模块没有返回的警告</span></span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">hiding</span></span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:#111111">抑制相对于隐藏变量的局部变量的警告</span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">incomplete-switch</span></span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span style="color:#111111"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">忽略没有完整的</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">switch</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">语句</span></span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">nls</span></span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span style="color:#111111"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">忽略非</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">nls</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">格式的字符</span></span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">null</span></span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span style="color:#111111"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">忽略对</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">null</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">的操作</span></span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">rawtypes</span></span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span style="color:#111111"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">使用</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">generics</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">时忽略没有指定相应的类型</span></span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">restriction</span></span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:#111111">抑制禁止使用劝阻或禁止引用的警告</span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">serial</span></span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span style="color:#111111"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">忽略在</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">serializable</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">类中没有声明</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">serialVersionUID</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">变量</span></span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">static-access</span></span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:#111111">抑制不正确的静态访问方式警告</span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">synthetic-access</span></span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:#111111">抑制子类没有按最优方法访问内部类的警告</span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">unchecked</span></span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:#111111">抑制没有进行类型检查操作的警告</span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">unqualified-field-access</span></span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:#111111">抑制没有权限访问的域的警告</span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9173in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">unused</span></span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0305in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:#111111">抑制没被使用过的代码的警告</span></span></span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:2.927in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@SuppressWarnings</span><span style="color:black">(</span><span
                                style="color:maroon">"all"</span><span style="color:black">)</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">public</span>&nbsp;<span style="color:#8000ff">void</span><span
                                style="color:black">&nbsp;addItems(</span><span style="color:#8000ff">String</span><span
                                style="color:black">&nbsp;item){</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;...</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">}</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span>​​​​​​​
</p>
