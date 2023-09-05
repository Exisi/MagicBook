---
categories:
  - Spring Boot
tags:
  - ［@PropertySource］
date:
  - 2022-9-28 15:26:21
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">我们了解完</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> @ConfigurationProperties
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">注解的使用，知道了它可以将</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> application.yml
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">或</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"> application.properties </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">主配置文件中的属性值与</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> Java Bean </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">对应属性进行注入。</span></span>
    </li>
</ul>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#111111">&nbsp;</span></span></span>
</p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">此时就引出另一个问题，如果所有属性值都配置在主配置文件
                中，主配置文件就会越来越庞大，这显然是不合适的。此时我们可以使用</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"> Spring </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">为我们提供的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> @PropertySource
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">注解，去加载指定的配置文件。结合</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> @ConfigurationProperties
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">注解，便能够实现指定配置文件与</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> Java Bean </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的注入操作</span></span></li>
</ul>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">自定配置文件如下</span></span>
        <ul style="list-style-type:disc">
            <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">person</span></span><span
                        style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">.properties</span></span></span></li>
        </ul>
    </li>
</ul>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">person.name=</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">张三</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">person.age=27</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">person.manager=true</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">person.birthday=2020/03/27</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#111111"><strong>注</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">yaml</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">文件中的属性不能通过</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> @PropertySource </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">注解来访问。所以，如果你的项目中使用了一些自定义属性文件，建议不要用</span><span
            style="font-family:&quot;Comic Sans MS&quot;">yaml</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#111111">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#111111">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#111111">&nbsp;</span></span></span></p>
<p><span style="font-size:13.5pt"><span style="color:#111111"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">单属性注入（</span></strong><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">@PropertySource</span></strong><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;"> &amp; @Value</span></strong><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">）</span></strong></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:#111111"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">当</span><span
                style="font-family:&quot;Comic Sans MS&quot;">@PropertySource</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">引用配置文件后，直接使用</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">@value</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">注解到参数上</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">person.java</span></span></span></li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@Component</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@PropertySource</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(value</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">{</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"classpath:person.properties"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">})</span></span> <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">//</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">读取自定义的配置文件</span></span></span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">class</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">Person{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; <span
                style="color:#ffc000">@Value</span>("${person.name}")</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">private</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">String</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">name;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">&nbsp;&nbsp;&nbsp; @Value</span>("${person.name}")</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">private</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">int</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">age;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">&nbsp;&nbsp;&nbsp; @Value</span>("${person.name}")</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">private</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">boolean</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">isManager;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">&nbsp;&nbsp;&nbsp; @Value</span>("${person.name}")</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">private</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">Date</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">birthday;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#111111">&nbsp;</span></span></span>
</p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#111111">&nbsp;</span></span></span>
</p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#111111">&nbsp;</span></span></span>
</p>
<p><span style="color:#111111"><span style="font-size:13.5pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">多属性注入（</span></strong></span><span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">@PropertySource</span></strong></span><span
            style="font-size:12.0pt"><strong><span style="font-family:&quot;Comic Sans MS&quot;"> &amp;
                </span></strong></span><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">@ConfigurationProperties</span></strong></span><span
            style="font-size:13.5pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">）</span></strong></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#111111">当</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#111111">@PropertySource</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#111111">引用配置文件后，可以使用</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#111111">@ConfigurationProperties</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#111111">()</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#111111">注解的</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">prefix</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:black">属性指定参数前缀，</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">spring boot</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:black">会根据匹配的前缀参数批量注入到类成员变量中</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">person.java</span></span></span></li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@Component</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@ConfigurationProperties</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">(prefix&nbsp;=&nbsp;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"person"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span> </span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@PropertySource</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">(value&nbsp;=&nbsp;{</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"classpath:person.properties"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">})</span></span> <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">//</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">读取自定义的配置文件</span></span></span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span>&nbsp;<span style="color:blue">class</span><span
                style="color:black">&nbsp;Person{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">private</span>&nbsp;<span style="color:#8000ff">String</span><span
                style="color:black">&nbsp;name;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">private</span>&nbsp;<span style="color:#8000ff">int</span><span
                style="color:black">&nbsp;age;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">private</span>&nbsp;<span style="color:#8000ff">boolean</span><span
                style="color:black">&nbsp;isManager;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">private</span><span
                style="color:black">&nbsp;Date&nbsp;birthday;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
