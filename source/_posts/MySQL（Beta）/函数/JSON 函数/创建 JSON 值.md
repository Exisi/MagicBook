---
categories:
- MySQL
date:
- 2023-1-23 19:07:51
---

<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.5541in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>函数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2868in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.5541in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">JSON_ARRAY()</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3562in">
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">创建</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JSON </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">数组</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.5541in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">JSON_OBJECT()</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3562in">
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">创建</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JSON </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.5541in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">JSON_QUOTE()</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3562in">
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">引用</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JSON </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">文档</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><strong>JSON_ARRAY([val[, val]
                ...])</strong></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">评估一个（可能为空的）值列表并返回一个包含这些值的</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> JSON </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">数组。</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT </span><span
                style="color:#dd4a68">JSON_ARRAY</span><span style="color:#909090">(</span><span
                style="color:#990055">1</span><span style="color:#909090">, </span><span
                style="color:#669900">"abc"</span><span style="color:#909090">, </span><span
                style="color:#990055">NULL</span><span style="color:#909090">, </span><span
                style="color:#990055">TRUE</span><span style="color:#909090">, </span><span
                style="color:#dd4a68">CURTIME</span><span style="color:#909090">()); </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-----------------------------------------------------------+</span></span></span>
</p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span>&nbsp; <span style="color:#555555">JSON_ARRAY(1, "abc", NULL, TRUE,
                CURTIME()) </span>&nbsp;<span style="color:#909090">| </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-----------------------------------------------------------+</span></span></span>
</p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span
                style="color:#555555">[1, "abc", null, true, "11:30:24.000000"]&nbsp;&nbsp;
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#909090">|
            </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-----------------------------------------------------------+</span></span></span>
</p>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><strong>JSON_OBJECT([key, val[,
                key, val] ...])</strong></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">评估一个（可能为空的）键值对列表并返回一个包含这些对的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">对象。如果任何键名称为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> NULL </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">或参数数量为奇数，则会发生错误。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT </span><span
                style="color:#dd4a68">JSON_OBJECT</span><span style="color:#909090">(</span><span
                style="color:#669900">'id'</span><span style="color:#909090">, </span><span
                style="color:#990055">87</span><span style="color:#909090">, </span><span
                style="color:#669900">'name'</span><span style="color:#909090">, </span><span
                style="color:#669900">'carrot'</span><span style="color:#909090">); </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+--------------------------------------------------+</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span>&nbsp; <span style="color:#555555">JSON_OBJECT('id', 87, 'name', 'carrot')
            </span>&nbsp;<span style="color:#909090">| </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+--------------------------------------------------+</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span>&nbsp; <span style="color:#555555">{"id": 87, "name": "carrot"}&nbsp;
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:#909090">| </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+--------------------------------------------------+</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span
            style="font-family:&quot;Comic Sans MS&quot;"><strong>JSON_QUOTE(string)</strong></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">通过用双引号字符包装字符串并转义内部引号和其他字符，将字符串引用为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">值，然后将结果作为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> utf8mb4 </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">字符串返回。如果参数为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> NULL</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，则返回</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> NULL</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">此函数通常用于生成有效的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">字符串文字以包含在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">文档中。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">根据表</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> 12.23</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">“</span></span><a
            data-cke-saved-href="https://dev.mysql.com/doc/refman/8.0/en/json-modification-functions.html#json-unquote-character-escape-sequences"
            href="https://dev.mysql.com/doc/refman/8.0/en/json-modification-functions.html#json-unquote-character-escape-sequences"><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON_UNQUOTE()
                </span></span><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">特殊字符转义序列</span></span></a><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">”</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中显示的转义序列，某些特殊字符使用反斜杠进行转义。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT </span><span
                style="color:#dd4a68">JSON_QUOTE</span><span style="color:#909090">(</span><span
                style="color:#669900">'null'</span><span style="color:#909090">), </span><span
                style="color:#dd4a68">JSON_QUOTE</span><span style="color:#909090">(</span><span
                style="color:#669900">'"null"'</span><span style="color:#909090">); </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+--------------------------+----------------------------+</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span> <span style="color:#555555">JSON_QUOTE('null') </span><span
                style="color:#909090">|</span> <span style="color:#555555">JSON_QUOTE('"null"') </span><span
                style="color:#909090">| </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+--------------------------+----------------------------+</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span> <span style="color:#555555">"null"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:#909090">|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="color:#555555">"\"null\""&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span><span style="color:#909090">| </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+--------------------------+----------------------------+</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT </span><span
                style="color:#dd4a68">JSON_QUOTE</span><span style="color:#909090">(</span><span
                style="color:#669900">'[1, 2, 3]'</span><span style="color:#909090">); </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-------------------------------+</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span> <span style="color:#555555">JSON_QUOTE('[1, 2, 3]') </span><span
                style="color:#909090">| </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-------------------------------+</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span> <span style="color:#555555">"[1, 2, 3]"&nbsp;&nbsp;
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:#909090">| </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-------------------------------+</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">您还可以通过使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> CAST(value AS JSON);
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">将其他类型的值转换为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">类型来获取</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">值</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">有两个生成</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">值的聚合函数可用。</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON_ARRAYAGG()
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">将结果集作为单个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">数组返回，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON_OBJECTAGG()
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">将结果集作为单个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">对象返回。</span></span></li>
</ul>
<p><br></p>
<p><br></p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://dev.mysql.com/doc/refman/8.0/en/json-creation-functions.html"
        href="https://dev.mysql.com/doc/refman/8.0/en/json-creation-functions.html"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://dev.mysql.com/doc/refman/8.0/en/json-creation-functions.html</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>