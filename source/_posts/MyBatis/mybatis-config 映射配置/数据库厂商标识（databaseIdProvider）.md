---
categories:
  - MyBatis
tags:
  - databaseIdProvider
date:
  - 2021-3-27 7:14:01
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#333333">MyBatis </span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">可以根据不同的数据库厂商执行不同的语句，这种多厂商的支持是基于映射语句中的&nbsp;</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#dd1144">databaseId</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">&nbsp;属性。
                </span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#333333"></span></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#333333">MyBatis </span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">会加载带有匹配当前数据库&nbsp;</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#dd1144">databaseId</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">&nbsp;属性和所有不带&nbsp;</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#dd1144">databaseId</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">&nbsp;属性的语句。
                </span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#333333"></span></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">如果同时找到带有&nbsp;</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#dd1144">databaseId</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">&nbsp;和不带&nbsp;</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#dd1144">databaseId</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">&nbsp;的相同语句，则后者会被舍弃。
                </span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#333333"></span></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">为支持多厂商特性，只要像下面这样在</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333"> mybatis-config.xml
                </span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">文件中加入&nbsp;</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#dd1144">databaseIdProvider</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">&nbsp;即可：</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&lt;databaseIdProvider </span><span style="color:#660066">type</span><span
                style="color:#666600">=</span><span style="color:#008800">"DB_VENDOR" </span><span
                style="color:#000088">/&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#333333">databaseIdProvider </span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">对应的</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333"> DB_VENDOR
                </span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">实现会将</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333"> databaseId
                </span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">设置为&nbsp;</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#dd1144">DatabaseMetaData#getDatabaseProductName()</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">&nbsp;返回的字符串。 </span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#333333"></span></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">由于通常情况下这些字符串都非常长，而且相同产品的不同版本会返回不同的值，你可能想通过设置属性别名来使其变短：</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&lt;databaseIdProvider </span><span style="color:#660066">type</span><span
                style="color:#666600">=</span><span style="color:#008800">"DB_VENDOR"</span><span
                style="color:#000088">&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&nbsp; &lt;property </span><span style="color:#660066">name</span><span
                style="color:#666600">=</span><span style="color:#008800">"SQL Server" </span><span
                style="color:#660066">value</span><span style="color:#666600">=</span><span
                style="color:#008800">"sqlserver"</span><span style="color:#000088">/&gt;<br>&nbsp; &lt;property
            </span><span style="color:#660066">name</span><span style="color:#666600">=</span><span
                style="color:#008800">"DB2" </span><span style="color:#660066">value</span><span
                style="color:#666600">=</span><span style="color:#008800">"db2"</span><span
                style="color:#000088">/&gt;<br>&nbsp; &lt;property </span><span style="color:#660066">name</span><span
                style="color:#666600">=</span><span style="color:#008800">"Oracle" </span><span
                style="color:#660066">value</span><span style="color:#666600">=</span><span
                style="color:#008800">"oracle" </span><span style="color:#000088">/&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&lt;/databaseIdProvider&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&nbsp;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在提供了属性别名时，</span><span
                style="font-family:&quot;Comic Sans MS&quot;">databaseIdProvider </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                style="font-family:&quot;Comic Sans MS&quot;"> DB_VENDOR </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">实现会将</span><span
                style="font-family:&quot;Comic Sans MS&quot;"> databaseId </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">设置为数据库产品名与属性中的名称第一个相匹配的值，如果没有匹配的属性，将会设置为
                “</span><span style="font-family:&quot;Comic Sans MS&quot;">null</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">”。 </span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">​​​​​​​</span></span></span><br></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#333333">在这个例子中，如果&nbsp;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#dd1144">getDatabaseProductName()</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">&nbsp;返回“</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">Oracle
                (DataDirect)</span></span><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#333333">”，</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">databaseId </span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">将被设置为“</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">oracle</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">”。</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#333333"><strong>注</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#333333">你可以通过实现接口&nbsp;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#dd1144">org.apache.ibatis.mapping.DatabaseIdProvider</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">&nbsp;并在</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333"> mybatis-config.xml
            </span></span><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#333333">中注册来构建自己的</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333"> DatabaseIdProvider</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">：</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">public interface </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#660066">DatabaseIdProvider
            </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#666600">{</span></span><br>&nbsp; <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#000088">default void</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black"> setProperties</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#666600">(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#660066">Properties</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black"> p</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#666600">) { </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#880000">// </span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#880000">从</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#880000"> 3.5.2 </span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#880000">开始，该方法为默认方法</span></span><br>&nbsp;&nbsp;&nbsp; <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#880000">// </span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#880000">空实现</span></span><br>&nbsp;
        <span style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#666600">}</span></span><br>&nbsp; <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#660066">String</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black"> getDatabaseId</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#666600">(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#660066">DataSource</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black"> dataSource</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#666600">) </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#000088">throws </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#660066">SQLException</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#666600">;</span></span><br><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#666600">}</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://mybatis.org/mybatis-3/zh/configuration.html#databaseIdProvider"
        href="https://mybatis.org/mybatis-3/zh/configuration.html#databaseIdProvider"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://mybatis.org/mybatis-3/zh/configuration.html#databaseIdProvider</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>
