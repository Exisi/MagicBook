---
categories:
- Spring Boot
tags:
- MybatisPlusInterceptor
- Ipage
date:
- 2022-11-28 15:45:27
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">MybatisPlus</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中提供了</span></span> <span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">MybatisPlusInterceptor</span></span> <span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">拦截器用于查询分页，使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Ipage</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">封装分页数据</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<ol style="list-style-type:decimal">
    <li value="1"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在配置类中添加注册分页功能拦截器</span></span></li>
</ol>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@Configuration</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span>&nbsp;<span style="color:blue">class</span><span
                style="color:black">&nbsp;MybatisPlusConfig&nbsp;{</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:#ffc000">@Bean</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">public</span><span
                style="color:black">&nbsp;MybatisPlusInterceptor&nbsp;mybatisPlusInterceptor()&nbsp;{</span></span></span>
</p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MybatisPlusInterceptor&nbsp;interceptor&nbsp;=&nbsp;</span><span
                style="color:blue">new</span><span
                style="color:black">&nbsp;MybatisPlusInterceptor();</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;interceptor.addInnerInterceptor(</span><span
                style="color:blue">new</span><span
                style="color:black">&nbsp;PaginationInnerInterceptor());</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">return</span><span style="color:black">&nbsp;interceptor;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ol style="list-style-type:decimal">
    <li value="2"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在测试类中查询数据</span></span></li>
</ol>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@Test</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span>&nbsp;<span style="color:#8000ff">void</span><span
                style="color:black">&nbsp;selectPage()&nbsp;{</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;Page&lt;User&gt;&nbsp;mpPage&nbsp;=&nbsp;</span><span
                style="color:blue">new</span><span style="color:black">&nbsp;Page&lt;&gt;(</span><span
                style="color:red">1</span><span style="color:black">,&nbsp;</span><span style="color:red">2</span><span
                style="color:black">)</span><span style="color:black">;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp; <span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">userMapper.selectPage(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">mpPage</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">,</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">null</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">);</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">System.out.println(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:maroon">总页数&nbsp;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">+</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">mpPage.getPages());</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">System.out.println(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:maroon">总记录数&nbsp;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">+</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">mpPage.getTotal());</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">final</span><span
                style="color:black">&nbsp;List&lt;User&gt;&nbsp;userList&nbsp;=&nbsp;mpPage.getRecords();</span></span></span>
</p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;userList.forEach(System.out::println);</span></span></span>
</p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span>​​​​​​​</p>