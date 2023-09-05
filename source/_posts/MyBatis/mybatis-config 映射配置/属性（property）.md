---
categories:
  - MyBatis
tags:
  - property
date:
  - 2021-3-27 7:10:00
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">这些属性可以在外部进行配置，并可以进行动态替换。你既可以在典型的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> Java </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">属性文件中配置这些属性，也可以在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> properties </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">元素的子元素中设置。</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&lt;properties </span><span style="color:#660066">resource</span><span
                style="color:#666600">=</span><span
                style="color:#008800">"org/mybatis/example/config.properties"</span><span
                style="color:#000088">&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&lt;property </span><span style="color:#660066">name</span><span
                style="color:#666600">=</span><span style="color:#008800">"username" </span><span
                style="color:#660066">value</span><span style="color:#666600">=</span><span
                style="color:#008800">"dev_user"</span><span style="color:#000088">/&gt;<br>&lt;property </span><span
                style="color:#660066">name</span><span style="color:#666600">=</span><span
                style="color:#008800">"password" </span><span style="color:#660066">value</span><span
                style="color:#666600">=</span><span style="color:#008800">"F2Fa3!33TYyg"</span><span
                style="color:#000088">/&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&lt;/properties&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">设置好的属性可以在整个配置文件中用来替换需要动态配置的属性值。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&lt;dataSource </span><span style="color:#660066">type</span><span
                style="color:#666600">=</span><span style="color:#008800">"POOLED"</span><span
                style="color:#000088">&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&lt;property </span><span style="color:#660066">name</span><span
                style="color:#666600">=</span><span style="color:#008800">"driver" </span><span
                style="color:#660066">value</span><span style="color:#666600">=</span><span
                style="color:#008800">"${driver}"</span><span style="color:#000088">/&gt;<br>&lt;property </span><span
                style="color:#660066">name</span><span style="color:#666600">=</span><span style="color:#008800">"url"
            </span><span style="color:#660066">value</span><span style="color:#666600">=</span><span
                style="color:#008800">"${url}"</span><span style="color:#000088">/&gt;<br>&lt;property </span><span
                style="color:#660066">name</span><span style="color:#666600">=</span><span
                style="color:#008800">"username" </span><span style="color:#660066">value</span><span
                style="color:#666600">=</span><span style="color:#008800">"${username}"</span><span
                style="color:#000088">/&gt;<br>&lt;property </span><span style="color:#660066">name</span><span
                style="color:#666600">=</span><span style="color:#008800">"password" </span><span
                style="color:#660066">value</span><span style="color:#666600">=</span><span
                style="color:#008800">"${password}"</span><span style="color:#000088">/&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&lt;/dataSource&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&nbsp;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">username </span><span
            style="font-family:&quot;Microsoft YaHei&quot;">和</span><span style="font-family:&quot;Comic Sans MS&quot;">
            password </span><span style="font-family:&quot;Microsoft YaHei&quot;">将会由</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> properties </span><span
            style="font-family:&quot;Microsoft YaHei&quot;">元素中设置的相应值来替换。 </span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">driver
        </span><span style="font-family:&quot;Microsoft YaHei&quot;">和</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> url </span><span
            style="font-family:&quot;Microsoft YaHei&quot;">属性将会由</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> config.properties </span><span
            style="font-family:&quot;Microsoft YaHei&quot;">文件中对应的值来替换</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://mybatis.org/mybatis-3/zh/configuration.html#environments"
        href="https://mybatis.org/mybatis-3/zh/configuration.html#environments"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://mybatis.org/mybatis-3/zh/configuration.html#environments</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>
