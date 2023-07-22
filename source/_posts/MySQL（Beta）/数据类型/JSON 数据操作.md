---
categories:
- MySQL
date:
- 2023-1-19 12:51:05
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">与将</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">格式的字符串存储在字符串列中相比，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">数据类型具有以下优势：</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ol style="list-style-type: decimal; margin-left: 40px;">
    <li value="1"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">自动验证存储在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">列中的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">文档。无效的文档会产生错误。</span></span></li>
</ol>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ol style="list-style-type: decimal; margin-left: 40px;">
    <li value="2"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">优化的存储格式。存储在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">列中的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">文档被转换为允许对文档元素进行快速读取访问的内部格式。</span></span></li>
</ol>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ol style="list-style-type: decimal; margin-left: 40px;">
    <li value="3"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">当服务器稍后必须读取以这种二进制格式存储的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">值时，不需要从文本表示中解析该值。</span></span></li>
</ol>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ol style="list-style-type: decimal; margin-left: 40px;">
    <li value="4"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">二进制格式的结构使服务器能够直接通过键值对或数组索引查找子对象或嵌套值，而无需读取文档中它们之前或之后的所有值。</span></span>
    </li>
</ol>
<p><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>注</strong></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">存储</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">文档所需的空间与</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> LONGBLOB </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">或</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> LONGTEXT </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">大致相同。存储在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">列中的任何</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">文档的大小都限于</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">
                max_allowed_pa</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Times New Roman&quot;">​​</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">cket </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">系统变量的值。 （当服务器在内存中内部操作</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">值时，它可以大于此值；限制适用于服务器存储它。）</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> MySQL 8.0.13
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">之前，</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">JSON </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">列不能有非</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> NULL </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">默认值</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> MySQL </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">值被写为字符串。</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> MySQL </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">解析在需要</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">值的上下文中使用的任何字符串，如果它作为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">无效，则会产生错误。</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><strong><span style="font-family:&quot;Comic Sans MS&quot;">JSON
            </span></strong><strong><span style="font-family:&quot;Microsoft YaHei UI&quot;">值的创建</span></strong></span>
</p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">数组包含由逗号分隔并包含在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> [ </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> ] </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">字符内的值列表：</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">[</span><span style="color:#669900">"abc"</span><span style="color:#909090">,
            </span><span style="color:#990055">10</span><span style="color:#909090">, </span><span
                style="color:black">null</span><span style="color:#909090">, </span><span
                style="color:#990055">true</span><span style="color:#909090">, </span><span
                style="color:#990055">false</span><span style="color:#909090">]</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">对象包含一组键值对，由逗号分隔并包含在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> { </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> } </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">字符内：</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">{</span><span style="color:#990055">"k1"</span><span style="color:#a67f59">:
            </span><span style="color:#669900">"value"</span><span style="color:#909090">, </span><span
                style="color:#990055">"k2"</span><span style="color:#a67f59">: </span><span
                style="color:#990055">10</span><span style="color:#909090">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">数组和对象可以是字符串或数字、</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">空或</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">布尔真或假字面量。</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">对象中的键必须是字符串。时间（日期、时间或日期时间）标量值也是允许的：</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">[</span><span style="color:#669900">"12:18:29.000000"</span><span
                style="color:#909090">, </span><span style="color:#669900">"2015-07-29"</span><span
                style="color:#909090">, </span><span style="color:#669900">"2015-07-29 12:18:29.000000"</span><span
                style="color:#909090">]</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">数组元素和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">对象键值中允许嵌套：</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">[</span><span style="color:#990055">99</span><span style="color:#909090">,
                {</span><span style="color:#990055">"id"</span><span style="color:#a67f59">: </span><span
                style="color:#669900">"HK500"</span><span style="color:#909090">, </span><span
                style="color:#990055">"cost"</span><span style="color:#a67f59">: </span><span
                style="color:#990055">75.99</span><span style="color:#909090">}, [</span><span
                style="color:#669900">"hot"</span><span style="color:#909090">, </span><span
                style="color:#669900">"cold"</span><span style="color:#909090">]] {</span><span
                style="color:#990055">"k1"</span><span style="color:#a67f59">: </span><span
                style="color:#669900">"value"</span><span style="color:#909090">, </span><span
                style="color:#990055">"k2"</span><span style="color:#a67f59">: </span><span
                style="color:#909090">[</span><span style="color:#990055">10</span><span style="color:#909090">,
            </span><span style="color:#990055">20</span><span style="color:#909090">]}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#2e75b5">CREATE TABLE</span> tab_base_info (</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">id
            <span style="color:#2e75b5">BIGINT</span> NOT <span style="color:#2e75b5">NULL PRIMARY KEY</span>
            auto_increment,</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">content
            json</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">);</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><strong><span style="font-family:&quot;Comic Sans MS&quot;">JSON
            </span></strong><strong><span style="font-family:&quot;Microsoft YaHei UI&quot;">值的插入</span></strong></span>
</p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">列存储的数据，必须是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">格式数据，或者</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">NULL</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，否则会报错。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">数据类型是没有默认值的（声明时</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">"DEFAULT
                NULL"</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">）</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#2e75b5">NSERT INTO</span> tab_base_info (content)</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#2e75b5">VALUES</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">(</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">'{"author": "Captain&amp;D", "blog": "<a
                data-cke-saved-href="https://www.cnblogs.com/captainad"
                href="https://www.cnblogs.com/captainad">https://www.cnblogs.com/captainad</a>"}'</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">);</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><strong><span style="font-family:&quot;Comic Sans MS&quot;">JSON
            </span></strong><strong><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">值的部分更新</span></strong></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> MySQL 8.0 </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中，优化器可以对</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">列执行部分就地更新，而不是删除旧文档并将新文档全部写入列。可以针对满足以下条件的更新执行此优化：</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ol style="list-style-type:decimal">
    <li value="1"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">正在更新的列被声明为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
</ol>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ol style="list-style-type:decimal">
    <li value="2"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">UPDATE
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">语句使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON_SET()</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">、</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON_REPLACE()
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">或</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"> JSON_REMOVE() </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">三个函数中的任何一个来更新列。列值的直接分配（例如，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">UPDATE mytable SET jcol =
                '{"a": 10, "b": 25}'</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">）不能作为部分更新执行。</span></span></li>
</ol>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ol style="list-style-type:decimal">
    <li value="3"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">可以以这种方式优化单个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> UPDATE </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">语句中多个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">列的更新；</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> MySQL </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">只能对那些使用刚刚列出的三个函数更新其值的列执行部分更新。</span></span></li>
</ol>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ol style="list-style-type:decimal">
    <li value="4"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">输入列和目标列必须是同一列；</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> UPDATE mytable SET jcol1 =
                JSON_SET(jcol2, '$.a', 100) </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">之类的语句不能作为部分更新执行。只要输入列和目标列相同，更新就可以任意组合使用对上一项中列出的任何函数的嵌套调用。</span></span>
    </li>
</ol>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ol style="list-style-type:decimal">
    <li value="5"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">所有更改都将现有数组或对象值替换为新值，并且不会向父对象或数组添加任何新元素。</span></span>
    </li>
</ol>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ol style="list-style-type:decimal">
    <li value="6"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">被替换的值必须至少与替换值一样大。换句话说，新值不能大于旧值。</span></span></li>
</ol>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><strong><span style="font-family:&quot;Comic Sans MS&quot;">JSON
            </span></strong><strong><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">值的规范化</span></strong></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">当字符串被解析并发现是有效的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">文档时，它也会被规范化。这意味着，如果成员的密钥与文档中稍后找到的密钥重复，并且从左到右读取，则该成员将被丢弃。</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">以下</span></span> <span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON_object</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">() </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">调用生成的对象值只包括第二个</span></span> <span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">key1</span></span> <span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">元素，因为该键名出现在值的前面，如下所示：</span></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT </span><span
                style="color:#dd4a68">JSON_OBJECT</span><span style="color:#909090">(</span><span
                style="color:#669900">'key1'</span><span style="color:#909090">, </span><span
                style="color:#990055">1</span><span style="color:#909090">, </span><span
                style="color:#669900">'key2'</span><span style="color:#909090">, </span><span
                style="color:#669900">'abc'</span><span style="color:#909090">, </span><span
                style="color:#669900">'key1'</span><span style="color:#909090">, </span><span
                style="color:#669900">'def'</span><span style="color:#909090">); </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-------------------------------------------------------------+</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">JSON_OBJECT('key1', 1, 'key2', 'abc', 'key1',
                'def') </span><span style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-------------------------------------------------------------+</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">{"key1": "def", "key2":
                "abc"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-------------------------------------------------------------+</span></span></span>
</p>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">将值插入</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">列时也会执行规范化，如下所示：</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">CREATE TABLE</span> t1 <span
                style="color:#909090">(</span>c1 <span style="color:#834689">JSON</span><span style="color:#909090">);
            </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">INSERT INTO</span> t1 <span
                style="color:#0077aa">VALUES </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">&gt; </span><span style="color:#909090">(</span><span style="color:#669900">'{"x":
                17, "x": "red"}'</span><span style="color:#909090">), </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">&gt; </span><span style="color:#909090">(</span><span style="color:#669900">'{"x":
                17, "x": "red", "x": [3, 5, 7]}'</span><span style="color:#909090">); </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT</span> c1 <span
                style="color:#0077aa">FROM</span> t1<span style="color:#909090">; </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+------------------+</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span
                style="color:#555555">c1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#909090">| </span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+------------------+</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">{"x": "red"}&nbsp;&nbsp;&nbsp;&nbsp;
            </span>&nbsp;&nbsp;&nbsp;<span style="color:#909090">|</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">{"x": [3, 5, 7]}
            </span>&nbsp;&nbsp;&nbsp;<span style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+------------------+</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">8.0.3</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">之前的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">MySQL</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">版本中，具有与文档中先前找到的密钥重复的密钥的成员被丢弃。以下</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON_object</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">() </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">调用生成的对象值不包括第二个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">key1</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">元素，因为该键名出现在值的前面：</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT </span><span
                style="color:#dd4a68">JSON_OBJECT</span><span style="color:#909090">(</span><span
                style="color:#669900">'key1'</span><span style="color:#909090">, </span><span
                style="color:#990055">1</span><span style="color:#909090">, </span><span
                style="color:#669900">'key2'</span><span style="color:#909090">, </span><span
                style="color:#669900">'abc'</span><span style="color:#909090">, </span><span
                style="color:#669900">'key1'</span><span style="color:#909090">, </span><span
                style="color:#669900">'def'</span><span style="color:#909090">); </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-------------------------------------------------------------+</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">JSON_OBJECT('key1', 1, 'key2', 'abc', 'key1',
                'def') </span><span style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-------------------------------------------------------------+</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">{"key1": 1, "key2":
                "abc"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-------------------------------------------------------------+</span></span></span>
</p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">MySQL</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">还丢弃原始</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">文档中键、值或元素之间的额外空白，并在显示时在每个逗号（，）或冒号（：）后留下（或在必要时插入）一个空格。这样做是为了提高可读性</span></span>
    </li>
</ul>
<p><br></p>
<p><br></p>
<p><br></p>
<p><span style="font-size:18px;"><strong><span style="font-family:&quot;Comic Sans MS&quot;">JSON </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">值的合并</span></strong></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">MySQL
                8.0.3</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">（及更高版本）支持两种合并算法</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">它们在处理重复键的方式上有所不同：
            </span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON_MERGE_PRESERVE()
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">保留重复键的值</span></span></li>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON_MERGE_PATCH()
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">丢弃除最后一个值之外的所有值。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">接下来的几段将解释这两个函数中的每一个如何处理</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">文档的不同组合（即对象和数组）的合并。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">合并数组。在组合多个数组的上下文中，这些数组被合并为一个数组。 </span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON_MERGE_PRESERVE()
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">通过将稍后命名的数组连接到第一个数组的末尾来完成此操作。</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON_MERGE_PATCH()
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">将每个参数视为由单个元素组成的数组（因此其索引为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> 0</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">），然后应用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">“</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">最后一个重复键获胜</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">”</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">逻辑来仅选择最后一个参数。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">您可以比较此查询显示的结果：</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT
            </span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">-&gt; </span><span style="color:#dd4a68">JSON_MERGE_PRESERVE</span><span
                style="color:#909090">(</span><span style="color:#669900">'[1, 2]'</span><span style="color:#909090">,
            </span><span style="color:#669900">'["a", "b", "c"]'</span><span style="color:#909090">, </span><span
                style="color:#669900">'[true, false]'</span><span style="color:#909090">) </span><span
                style="color:#0077aa">AS Preserve</span><span style="color:#909090">,
            </span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">-&gt; </span><span style="color:#dd4a68">JSON_MERGE_PATCH</span><span
                style="color:#909090">(</span><span style="color:#669900">'[1, 2]'</span><span style="color:#909090">,
            </span><span style="color:#669900">'["a", "b", "c"]'</span><span style="color:#909090">, </span><span
                style="color:#669900">'[true, false]'</span><span style="color:#909090">) </span><span
                style="color:#0077aa">AS</span> Patch\G</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">***************************</span><span style="color:#555555">1. row </span><span
                style="color:#909090">***************************</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#555555">Preserve</span><span style="color:#909090">:</span><span style="color:#555555">[1,
                2, "a", "b", "c", true, false]<br>&nbsp;&nbsp; Patch</span><span style="color:#909090">:</span><span
                style="color:#555555">[true, false]</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#555555">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">合并多个对象时会生成一个对象。</span></span>
        <ul style="list-style-type:square">
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">JSON_MERGE_PRESERVE</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">() </span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">通过在一个数组中组合该键的所有唯一值来处理具有相同键的多个对象；然后，该数组将用作结果中该键的值。</span></span>
            </li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">JSON_MERGE_PATCH</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">() </span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">从左到右丢弃找到重复键的值，以便结果只包含该键的最后一个值。</span></span>
            </li>
        </ul>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">以下查询说明了重复密钥</span><span
            style="font-family:&quot;Comic Sans MS&quot;">a</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">的结果差异：</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT
            </span>&nbsp;&nbsp;&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">&nbsp;-&gt; </span><span style="color:#dd4a68">JSON_MERGE_PRESERVE</span><span
                style="color:#909090">(</span><span style="color:#669900">'{"a": 1, "b": 2}'</span><span
                style="color:#909090">, </span><span style="color:#669900">'{"c": 3, "a": 4}'</span><span
                style="color:#909090">, </span><span style="color:#669900">'{"c": 5, "d": 3}'</span><span
                style="color:#909090">) </span><span style="color:#0077aa">AS Preserve</span><span
                style="color:#909090">, </span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">-&gt; </span><span style="color:#dd4a68">JSON_MERGE_PATCH</span><span
                style="color:#909090">(</span><span style="color:#669900">'{"a": 3, "b": 2}'</span><span
                style="color:#909090">, </span><span style="color:#669900">'{"c": 3, "a": 4}'</span><span
                style="color:#909090">, </span><span style="color:#669900">'{"c": 5, "d": 3}'</span><span
                style="color:#909090">) </span><span style="color:#0077aa">AS</span> Patch\G</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">***************************</span><span style="color:#555555">1. row </span><span
                style="color:#909090">***************************</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#555555">Preserve</span><span style="color:#909090">:</span><span
                style="color:#555555">{"a"</span><span style="color:#909090">:</span><span style="color:#555555">[1, 4],
                "b"</span><span style="color:#909090">:</span><span style="color:#555555">2, "c"</span><span
                style="color:#909090">:</span><span style="color:#555555">[3, 5], "d"</span><span
                style="color:#909090">:</span><span style="color:#555555">3}<br>&nbsp;&nbsp; Patch</span><span
                style="color:#909090">:</span><span style="color:#555555">{"a"</span><span
                style="color:#909090">:</span><span style="color:#555555">4, "b"</span><span
                style="color:#909090">:</span><span style="color:#555555">2, "c"</span><span
                style="color:#909090">:</span><span style="color:#555555">5, "d"</span><span
                style="color:#909090">:</span><span style="color:#555555">3}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在需要数组值的上下文中使用的非数组值是自动包装的：该值由</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">[and]</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">字符包围，以将其转换为数组。在下面的语句中，每个参数都自动包装为一个数组（</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">[1]</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">[2]</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">）。然后合并这些结果以生成单个结果数组；与前两种情况一样，</span></span>
        <ul style="list-style-type:square">
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">JSON_MERGE_PRESERVE</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">（）组合具有相同密钥的值，</span></span></li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">JSON_MERGE_PATCH</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">（）丢弃除最后一个密钥外的所有重复密钥的值，</span></span></li>
        </ul>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">如下所示：</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">-&gt; </span><span style="color:#dd4a68">JSON_MERGE_PRESERVE</span><span
                style="color:#909090">(</span><span style="color:#669900">'1'</span><span style="color:#909090">,
            </span><span style="color:#669900">'2'</span><span style="color:#909090">) </span><span
                style="color:#0077aa">AS Preserve</span><span style="color:#909090">,
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">-&gt; </span><span style="color:#dd4a68">JSON_MERGE_PATCH</span><span
                style="color:#909090">(</span><span style="color:#669900">'1'</span><span style="color:#909090">,
            </span><span style="color:#669900">'2'</span><span style="color:#909090">) </span><span
                style="color:#0077aa">AS</span> Patch\G</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">***************************</span><span style="color:#555555">1. row </span><span
                style="color:#909090">***************************</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#555555">Preserve</span><span style="color:#909090">:</span><span style="color:#555555">[1,
                2]<br>&nbsp;&nbsp; Patch</span><span style="color:#909090">:</span><span
                style="color:#555555">2</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">通过将对象自动包装为数组并通过组合值或根据合并函数（分别为JSON_MERGE_PRESERVE</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">() </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">或JSON_MERGE_PATCH</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">() </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">）的选择“last duplicate key
                wins”来合并数组和对象值，</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">如本例所示：</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">-&gt; </span><span style="color:#dd4a68">JSON_MERGE_PRESERVE</span><span
                style="color:#909090">(</span><span style="color:#669900">'[10, 20]'</span><span style="color:#909090">,
            </span><span style="color:#669900">'{"a": "x", "b": "y"}'</span><span style="color:#909090">) </span><span
                style="color:#0077aa">AS Preserve</span><span style="color:#909090">,
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">-&gt; </span><span style="color:#dd4a68">JSON_MERGE_PATCH</span><span
                style="color:#909090">(</span><span style="color:#669900">'[10, 20]'</span><span style="color:#909090">,
            </span><span style="color:#669900">'{"a": "x", "b": "y"}'</span><span style="color:#909090">) </span><span
                style="color:#0077aa">AS</span> Patch\G</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">***************************</span><span style="color:#555555">1. row </span><span
                style="color:#909090">***************************</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#555555">Preserve</span><span style="color:#909090">:</span><span
                style="color:#555555">[10, 20, {"a"</span><span style="color:#909090">:</span><span
                style="color:#555555">"x", "b"</span><span style="color:#909090">:</span><span
                style="color:#555555">"y"}]<br>&nbsp;&nbsp; Patch</span><span style="color:#909090">:</span><span
                style="color:#555555">{"a"</span><span style="color:#909090">:</span><span style="color:#555555">"x",
                "b"</span><span style="color:#909090">:</span><span style="color:#555555">"y"}</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><strong><span style="font-family:&quot;Comic Sans MS&quot;">JSON </span></strong><strong><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">值的搜索和修改</span></strong></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">路径表达式在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">文档中选择一个值。</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">路径表达式对于提取</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">文档的一部分或修改</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">文档的函数非常有用，可以指定在该文档中操作的位置。例如，以下查询从</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">文档中提取具有</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">name</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">键的成员的值：</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT </span><span
                style="color:#dd4a68">JSON_EXTRACT</span><span style="color:#909090">(</span><span
                style="color:#669900">'{"id": 14, "name": "Aztalan"}'</span><span style="color:#909090">, </span><span
                style="color:#669900">'$.name'</span><span style="color:#909090">); </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+------------------------------------------------------------------+</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">JSON_EXTRACT('{"id": 14, "name": "Aztalan"}',
                '$.name') </span><span style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+------------------------------------------------------------------+</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span
                style="color:#555555">"Aztalan"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+------------------------------------------------------------------+</span></span></span>
</p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Path</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">语法使用前导</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">$</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">字符来表示正在考虑的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">文档，可选地后跟选择器，以依次指示文档中更具体的部分：</span></span>
        <ul style="list-style-type:disc">
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">后跟键名的句点用给定键命名对象中的成员。如果不带引号的名称在路径表达式中不合法（例如，如果包含空格），则必须在双引号内指定键名。</span></span>
            </li>
        </ul>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">[N] </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">附加到选择数组的路径后，将数组中位置</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">N</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">处的值命名。数组位置是从零开始的整数。如果路径未选择数组值，则路径</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">[0]</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的计算结果与路径相同：</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT </span><span
                style="color:#dd4a68">JSON_SET</span><span style="color:#909090">(</span><span
                style="color:#669900">'"x"'</span><span style="color:#909090">, </span><span
                style="color:#669900">'$[0]'</span><span style="color:#909090">, </span><span
                style="color:#669900">'a'</span><span style="color:#909090">); </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+----------------------------------+</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">JSON_SET('"x"', '$[0]', 'a')
            </span>&nbsp;<span style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+----------------------------------+</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">"a"</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+----------------------------------+</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#555555">1 row in set (0.00 sec)</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">[M</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">到</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">N]</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">指定数组值的子集或范围，从位置</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">M</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">处的值开始，到位置</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">N</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">处的值结束。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">last</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">作为最右边数组元素索引的同义词受支持。还支持数组元素的相对寻址。如果</span><span
            style="font-family:&quot;Comic Sans MS&quot;">path</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">未选择数组值，则</span><span
            style="font-family:&quot;Comic Sans MS&quot;">path[last]</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">的计算结果与</span><span
            style="font-family:&quot;Comic Sans MS&quot;">path</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">相同，如本节后面所示（请参阅最右边的数组元素）。</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">路径可以包含</span><span
            style="font-family:&quot;Comic Sans MS&quot;">*</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">或</span><span
            style="font-family:&quot;Comic Sans MS&quot;">**</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">通配符：</span></span></p>
<ul style="list-style-type: disc; margin-left: 40px;">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">[*]</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">计算为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">对象中所有成员的值。</span></span>
    </li>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">[*]</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">计算为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">数组中所有元素的值。</span></span>
    </li>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">前缀</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">**</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">后缀计算为以命名前缀开头，以命名后缀结尾的所有路径。</span></span></li>
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">文档中不存在的路径（计算结果为不存在的数据）计算结果为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">NULL</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">让</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">$</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">用三个元素引用这个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">数组：</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">[</span><span style="color:#990055">3</span><span style="color:#909090">,
                {</span><span style="color:#990055">"a"</span><span style="color:#a67f59">: </span><span
                style="color:#909090">[</span><span style="color:#990055">5</span><span style="color:#909090">,
            </span><span style="color:#990055">6</span><span style="color:#909090">], </span><span
                style="color:#990055">"b"</span><span style="color:#a67f59">: </span><span
                style="color:#990055">10</span><span style="color:#909090">}, [</span><span
                style="color:#990055">99</span><span style="color:#909090">, </span><span
                style="color:#990055">100</span><span style="color:#909090">]]</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">$[0]</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的计算结果为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">3</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">$[1]</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的计算结果为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">{“a”</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">：</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">[5,6]</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">“b”</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">：</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">10}</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">$[2]</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的计算结果为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">[99100]</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">$[3]</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的计算结果为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">NULL</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">（它指的是第四个数组元素，它不存在）。</span></span></li>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">由于</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">$[1]</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">$[2]</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的计算结果是非标度值，因此它们可以用作选择嵌套值的更具体路径表达式的基础。例如：</span></span>
    </li>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">$[1].a</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的计算结果为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">[5,6]</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">$[1].a[1]</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的计算结果为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">6</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">$[1].b</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">评估为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">10</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">$[2][0]</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的计算结果为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">99</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">如前所述，如果未加引号的键名在路径表达式中不合法，则必须对命名键的路径组件加引号。让</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">$</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">参考这个值：</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">{</span><span style="color:#990055">"a fish"</span><span style="color:#a67f59">:
            </span><span style="color:#669900">"shark"</span><span style="color:#909090">, </span><span
                style="color:#990055">"a bird"</span><span style="color:#a67f59">: </span><span
                style="color:#669900">"sparrow"</span><span style="color:#909090">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">两个键都包含空格，并且必须引用：</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type: disc; margin-left: 40px;">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:black">$."a fish"</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#555555">&nbsp;的结果为&nbsp;</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">shark</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#555555">.</span></span></span></li>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:black">$."a bird"</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#555555">&nbsp;的结果为&nbsp;</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:black">sparrow</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#555555">.</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">使用通配符的路径计算为可以包含多个值的数组：</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT </span><span
                style="color:#dd4a68">JSON_EXTRACT</span><span style="color:#909090">(</span><span
                style="color:#669900">'{"a": 1, "b": 2, "c": [3, 4, 5]}'</span><span style="color:#909090">,
            </span><span style="color:#669900">'$.*'</span><span style="color:#909090">); </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-------------------------------------------------------------+</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">JSON_EXTRACT('{"a": 1, "b": 2, "c": [3, 4,
                5]}', '$.*') </span><span style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-------------------------------------------------------------+</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">[1, 2, [3, 4,
                5]]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-------------------------------------------------------------+</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT </span><span
                style="color:#dd4a68">JSON_EXTRACT</span><span style="color:#909090">(</span><span
                style="color:#669900">'{"a": 1, "b": 2, "c": [3, 4, 5]}'</span><span style="color:#909090">,
            </span><span style="color:#669900">'$.c[*]'</span><span style="color:#909090">); </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+----------------------------------------------------------------+</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">JSON_EXTRACT('{"a": 1, "b": 2, "c": [3, 4,
                5]}', '$.c[*]') </span><span style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+----------------------------------------------------------------+</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">[3, 4,
                5]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+----------------------------------------------------------------+</span></span></span>
</p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在以下示例中，路径</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> $**.b </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">计算为多个路径（</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">$.a.b </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> $.c.b</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">）并生成匹配路径值的数组：</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT </span><span
                style="color:#dd4a68">JSON_EXTRACT</span><span style="color:#909090">(</span><span
                style="color:#669900">'{"a": {"b": 1}, "c": {"b": 2}}'</span><span style="color:#909090">, </span><span
                style="color:#669900">'$**.b'</span><span style="color:#909090">); </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+---------------------------------------------------------------+</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">JSON_EXTRACT('{"a": {"b": 1}, "c": {"b": 2}}',
                '$**.b') </span>&nbsp;&nbsp;<span style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+---------------------------------------------------------------+</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">[1,
                2]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+---------------------------------------------------------------+</span></span></span>
</p>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">数组的范围。您可以使用带</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> to </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">关键字的范围来指定</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">数组的子集。例如，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">$[1 to 3] </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">包含数组的第二个、第三个和第四个元素，如下所示：</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT </span><span
                style="color:#dd4a68">JSON_EXTRACT</span><span style="color:#909090">(</span><span
                style="color:#669900">'[1, 2, 3, 4, 5]'</span><span style="color:#909090">, </span><span
                style="color:#669900">'$[1 to 3]'</span><span style="color:#909090">); </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+----------------------------------------------------+</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">JSON_EXTRACT('[1, 2, 3, 4, 5]', '$[1 to 3]')
            </span>&nbsp;<span style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+----------------------------------------------------+</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">[2, 3,
                4]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+----------------------------------------------------+</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#555555">1 row in set (0.00 sec)</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">语法是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> M </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">到</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> N</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，其中</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> M </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> N </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">分别是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JSON </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">数组中一系列元素的第一个和最后一个索引。</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> N</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">必须大于</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">M</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">；</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> M </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">必须大于或等于</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> 0</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">。数组元素的索引从</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> 0 </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">开始。</span></span></li>
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">您可以在支持通配符的上下文中使用范围。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">最右边的数组元素。</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">last</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">关键字支持作为数组中最后一个元素的索引的同义词。</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">last-N</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">形式的表达式可用于相对寻址和范围内定义，如下所示：</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT </span><span
                style="color:#dd4a68">JSON_EXTRACT</span><span style="color:#909090">(</span><span
                style="color:#669900">'[1, 2, 3, 4, 5]'</span><span style="color:#909090">, </span><span
                style="color:#669900">'$[last-3 to last-1]'</span><span style="color:#909090">);
                +--------------------------------------------------------------+ </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">JSON_EXTRACT('[1, 2, 3, 4, 5]',
                '$[last</span><span style="color:#909090">-</span><span style="color:#555555">3 to last</span><span
                style="color:#909090">-</span><span style="color:#555555">1]') </span><span style="color:#909090">|
                +--------------------------------------------------------------+ </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">[2, 3,
                4]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+--------------------------------------------------------------+</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#555555">1 row in set (0.01 sec)</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">如果根据非数组的值计算路径，则计算结果与将该值包装在单个元素数组中的结果相同：</span></span>
    </li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a67f59">mysql&gt; </span><span style="color:#0077aa">SELECT </span><span
                style="color:#dd4a68">JSON_REPLACE</span><span style="color:#909090">(</span><span
                style="color:#669900">'"Sakila"'</span><span style="color:#909090">, </span><span
                style="color:#669900">'$[last]'</span><span style="color:#909090">, </span><span
                style="color:#990055">10</span><span style="color:#909090">); </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-----------------------------------------------+</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span style="color:#555555">JSON_REPLACE('"Sakila"', '$[last]', 10)
            </span><span style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-----------------------------------------------+</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">|</span><span
                style="color:#555555">10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:#909090">| </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#909090">+-----------------------------------------------+</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#555555">1 row in set (0.00 sec)</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#555555">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">您可以使用带有</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">列标识符的</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">column-&gt;path</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">路径表达式作为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON_EXTRACT</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">（</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">column</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">path</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">）的同义词。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">有些函数获取现有的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">文档，以某种方式对其进行修改，然后返回修改后的文档。路径表达式指示要在文档中的何处进行更改。例如，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON_SET</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">()</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">、</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON_INSERT</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">()v</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON_REPLACE</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">() </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">函数分别获取一个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">文档，以及一个或多个描述在何处修改文档和使用值的路径值对。这些函数在处理文档中现有值和不存在值的方式上有所不同。</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span>​​​​​​​<br>
</p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://dev.mysql.com/doc/refman/8.0/en/json.html"
        href="https://dev.mysql.com/doc/refman/8.0/en/json.html"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://dev.mysql.com/doc/refman/8.0/en/json.html</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>