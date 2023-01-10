---
categories:
- Spring Boot
tags:
- ［@Select］
- ［@Insert］
- ［@Delete］
- ［@Update］
date:
- 2022-11-28 15:40:39
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Sql</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">注解用于代替</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Mapper</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">文件中简单的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">sql</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">语句，只作用于方法上，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">sql</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">语句参数为字符串</span></span>
    </li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0493in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>注解</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.734in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0493in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@Select</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.734in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">数据查询语句的注解</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0493in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@Insert</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.734in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">数据增加语句的注解</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0493in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@Delete</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.734in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">数据删除语句的注解</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0493in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@Update</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.734in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">数据修改语句的注解</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>注</strong></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">对于条件较复杂的情况，不太建议这种方式，在字符串中难免会有很多错误，可读性很差</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">interface</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">Person</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">Mapper</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">{</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">//</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">查询</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp; <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@Select</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"select&nbsp;*&nbsp;from&nbsp;t_person&nbsp;where&nbsp;id&nbsp;=&nbsp;#{id}"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">public</span></span> <span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">Person&nbsp;selectPersonById(Integer&nbsp;id);</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">//</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">添加</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp; <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">Insert</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">insert into t_pe</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">rson</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">&nbsp;(id, name,
            </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#78230c">age</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#78230c">) values(#{id}, #{</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">n</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">ame}, #{</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">age</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">}</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">public</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;">Person</span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;">add(</span><span
            style="font-family:&quot;Comic Sans MS&quot;">Person person</span><span
            style="font-family:&quot;Comic Sans MS&quot;">);</span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">//</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">修改</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp; <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">Update</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">update t_pe</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">rson</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">set id=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">#{id}, </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">name=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">#{</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">n</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">ame}, </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">age=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">#{</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">age</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">}</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">public</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">Person</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">Update</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;">(</span><span
            style="font-family:&quot;Comic Sans MS&quot;">Person person</span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">);</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">//</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">删除</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp; <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">Delete</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">delete from t_pe</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">rson where
                id=#{id}"</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">)</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">public</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue"> int</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">deleteUserById</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">int</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">id</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">);</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">&nbsp;</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:.6381in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
            </td>
        </tr>
    </tbody>
</table>