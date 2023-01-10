---
categories:
- Spring Boot
tags:
- ［@Option］
date:
- 2022-11-28 15:41:49
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Option</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">用于配合</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Sql</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">注解设置字段的属性，例如主键，超时时间等</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6743in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.584in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6743in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">useCache</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.584in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">是否使用缓存</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6743in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">flushCache</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6097in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">设置刷新缓存机制，例如</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Options.FlushCachePolicy.FALSE</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">表示查询时不刷新缓存</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6743in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">resultSetType</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.584in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">指定</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">resultSet</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">数据集合的类型</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6743in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">statementType</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.584in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">设置编译的方式</span></span></p>
                <ul style="list-style-type:disc">
                    <li><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">STATEMENT</span></span></li>
                </ul>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">直接操作</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">sql</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，不进行预编译，获取数据</span></span></p>
                <ul style="list-style-type:disc">
                    <li><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">PREPARED</span></span></li>
                </ul>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">预处理，参数，进行预编译，获取数据，默认</span></span></p>
                <ul style="list-style-type:disc">
                    <li><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">CALLABLE:</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">执行存储过程</span></span></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6743in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">fetchSize</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.584in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">设置每次查询的最大数据条数</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6743in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">timeout</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.584in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">设置超时时间</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6743in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">useGeneratedKeys</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.584in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">是否根据主键自增</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6743in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">keyProperty</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.584in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">实体类中主键的名称</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6743in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">keyColumn</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.584in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">数据库中的主键字段名</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6743in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">resultSets</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.584in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">指定</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">resultSet</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">集合数据</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6743in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">databaseId</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.584in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">根据不同的数据库厂商</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">id,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">这种多厂商的支持是基于映射语句中的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;databaseId&nbsp;</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">interface</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">Person</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">Mapper</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">{</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">//</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">添加</span></span></span></p>
<p style="margin-left:36px">&nbsp;&nbsp;&nbsp; <span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@</span></span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">Option</span></span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">( </span></span><span style="font-size:11.5pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">useGeneratedKeys</span></span><span
        style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">=</span></span><span
        style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#78230c">true</span></span></span><span style="font-size:11.5pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">, </span></span><span style="font-size:11.5pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">keyProperty</span></span><span style="font-size:11.5pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">=</span></span><span style="font-size:11.5pt"><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">"id"</span></span></span><span
        style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">, </span></span><span
        style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">keyColumn</span></span><span
        style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">=</span></span><span
        style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">"id"
            </span></span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
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
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}</span></span></p>