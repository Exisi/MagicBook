---
categories:
- Spring
tags:
- ‹qualifier›
date:
- 2022-11-28 7:46:34
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">qualifer</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">用于限定</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">spring </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的装配范围</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">指定注入的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">名称，一般不使用这种方法，而使用注解</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@Qualifier("bean")</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Autowired</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">是根据类型进行自动装配的。如果当</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">上下文中存在不止一个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">UserDao</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">类型的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">时，就会抛出</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">BeanCreationException</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">异常</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">;</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"></span></span><br></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:black">如果</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">Spring</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:black">上下文中不存在</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">UserDao</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:black">类型的</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">bean</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:black">，也会抛出</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">BeanCreationException</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:black">异常。我们可以使用</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">@Qualifier</span></span><span
            style="background-color:#ccffcc"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">配合</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">@Autowired</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:black">来解决这些问题。</span></span></span>
</p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">@Autowired&nbsp;&nbsp; </span><br><span style="color:blue">public</span> <span
                style="color:blue">void</span> setUserDao(@Qualifier("userDao") UserDao userDao)
            {&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp; this.userDao = userDao;&nbsp;&nbsp;<br>}&nbsp; </span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">@Autowired&nbsp;&nbsp;<br>@Qualifier("userServiceImpl")&nbsp;&nbsp; </span><br><span
                style="color:blue">public&nbsp;</span>IUserService userService;&nbsp;&nbsp; </span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:black"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">这样&nbsp;</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Spring&nbsp;</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">会找到</span><span
                style="font-family:&quot;Comic Sans MS&quot;">id</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">为&nbsp;</span><span
                style="font-family:&quot;Comic Sans MS&quot;">userServiceImpl&nbsp;</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">和&nbsp;</span><span
                style="font-family:&quot;Comic Sans MS&quot;">userDao&nbsp;</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的&nbsp;</span><span
                style="font-family:&quot;Comic Sans MS&quot;">bean&nbsp;</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">进行装配</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://www.cnblogs.com/wade-luffy/p/6068478.html"
        href="https://www.cnblogs.com/wade-luffy/p/6068478.html"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://www.cnblogs.com/wade-luffy/p/6068478.html</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>