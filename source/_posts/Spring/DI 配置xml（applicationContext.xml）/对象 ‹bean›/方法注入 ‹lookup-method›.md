---
categories:
- Spring
tags:
- ‹lookup-method›
date:
- 2022-11-28 7:44:38
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">用于注入方法返回结果，也就是说能通过配置方式替换方法返回结果。</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">(</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在方法或者抽象方法上使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Lookup</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">注解，将会根据该方法的返回值，自动在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">BeanFactory</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中调用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">getBean()</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">来注入该</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Bean)</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#333333"><strong>语法</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;</span><span style="color:maroon">bean </span><span
                style="color:red">class</span><span style="color:blue">="beanClass"&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;</span><span style="color:maroon">lookup-method </span><span
                style="color:red">name</span><span style="color:blue">="method"</span><span style="color:red">
                bean</span><span style="color:blue">="non-singleton-bean"/&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/</span><span style="color:maroon">bean</span><span
                style="color:blue">&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.6673in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5909in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.6673in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">name</span></span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5909in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">method</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">是</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">beanClass</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">中的一个方法</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">可以不是抽象方法</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.6673in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean</span></span>
                </p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5909in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">non-singleton-bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">指的是</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">lookup-method</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">中</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性指向的必须是一个非单例模式的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">当然如果不是也不会报错，只是每次得到的都是相同引用的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">（同一个实例），这样用</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">lookup-method</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">就没有意义了</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span></span><br></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span></span><span
        style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">另外对于</span><span
                style="font-family:&quot;Comic Sans MS&quot;">method</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在代码中的签名有下面的标准：</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span></span><br></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:gray">&lt;public|protected&gt;</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">[</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">abstract</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">]</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#993300">&lt;return-type&gt;</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#7da700">theMethodName(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">no-arguments</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#7da700">);</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#7da700"></span></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">public|protected</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">要求方法必须是可以被子类重写和调用的；</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">abstract</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">可选，如果是抽象方法，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">CGLIB</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的动态代理类就会实现这个方法，如果不是抽象方法，就会覆盖这个方法，所以没什么影响；</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">return-type</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">就是</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">non-singleton-bean</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的类型，当然可以是它的父类或者接口。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">no-arguments</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">不允许有参数。</span></span></li>
</ul>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">&nbsp;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">假设一个单例模式的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean A</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">需要引用另外一个非单例模式的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean B</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">为了在我们每次引用的时候都能拿到最新的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean B</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，我们可以让</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean A</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">通过实现</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">ApplicationContextWare</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">来感知</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">applicationContext</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">（即可以获得容器上下文），从而能在运行时通过</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">ApplicationContext.getBean(String
                beanName)</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的方法来获取最新的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean B</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">但是如果用</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">ApplicationContextAware</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">接口，就让我们与</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">代码耦合了，违背了控制反转使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">完全由</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">容器管理</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">所以</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">为我们提供了方法注入的方式来实现以上的场景。方法注入方式主要是通过</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;lookup-method/&gt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">标签。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">假设有一个果盘，果盘里放了一些水果，比如苹果，香蕉等，我们希望我们每次在果盘里拿到的都是最新鲜的水果。</span></span><strong><span
                style="margin-left:80px;"><span style="font-size:12.0pt;"><span style="color:green;"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;;"></span></span></span></span></strong>​​​​​​​<br>
    </li>
</ul>
<p><strong><span style="font-size:12.0pt"><span style="color:green"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">实例</span></span></span></strong><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">java</span></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="color:green"><span
                style="font-family:&quot;Comic Sans MS&quot;">// </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">定义一个水果类</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span> <span style="color:blue">class</span><span style="color:black"> Fruit
                {<br>&nbsp;&nbsp;&nbsp; </span><span style="color:blue">public</span><span style="color:black"> Fruit()
                {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; System.out.println("I got Fruit");<br>&nbsp;&nbsp;&nbsp;
                }<br>}</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="color:green"><span
                style="font-family:&quot;Comic Sans MS&quot;">// </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">苹果</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span> <span style="color:blue">class</span> Apple <span
                style="color:blue">extends</span><span style="color:black"> Fruit {<br>&nbsp;&nbsp;&nbsp; </span><span
                style="color:blue">public</span><span style="color:black"> Apple()
                {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; System.out.println("I got a fresh
                apple");<br>&nbsp;&nbsp;&nbsp; }<br>}</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="color:green"><span
                style="font-family:&quot;Comic Sans MS&quot;">// </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">香蕉</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span> <span style="color:blue">class</span> Bananer <span
                style="color:blue">extends</span><span style="color:black"> Fruit {<br>&nbsp;&nbsp;&nbsp; </span><span
                style="color:blue">public</span><span style="color:black"> Bananer ()
                {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; System.out.println("I got a&nbsp; fresh
                bananer");<br>&nbsp;&nbsp;&nbsp; }<br>}</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="color:green"><span
                style="font-family:&quot;Comic Sans MS&quot;">// </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">水果盘，可以拿到水果</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span> <span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">abstract</span></span> <span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">class</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black"> FruitPlate{<br>&nbsp;&nbsp;&nbsp; </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">// </span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">抽象方法获取新鲜水果</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp; <span
                style="color:blue">protected</span> <span style="color:blue">abstract</span><span style="color:black">
                Fruit getFruit();<br>}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">applicationCnotext.xml</span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:6.7937in">
                <p><span style="font-size:12.0pt"><span style="color:green"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;这是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">2</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">个非单例模式的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">bean</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;beans&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;bean</span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;">id="apple"</span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;">class="cn.com.willchen.test.di.Apple"</span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;">scope="prototype"</span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;">/&gt;</span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;bean</span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;">id="bananer"</span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;">class="cn.com.willchen.test.di.Bananer"</span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;">scope="prototype"</span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;">/&gt;</span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:green"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;拿苹果&nbsp;</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;bean</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">id</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"fruitPlate"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">class</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"cn.com.willchen.test.di.FruitPlate"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp; <span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;lookup-method</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"getFruit"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">bean</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"apple"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/bean&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:green"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;拿香蕉&nbsp;</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;bean</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">id</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"fruitPlate"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">class</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"cn.com.willchen.test.di.FruitPlate"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp; <span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;lookup-method</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"getFruit"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">bean</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"bananer"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/bean&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;beans&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Test.java</span></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span> <span style="color:blue">static</span> <span
                style="color:blue">void</span><span style="color:black"> main(String[] args) {</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">ApplicationContext app = </span><span style="color:blue">new</span>
            ClassPathXmlApplicationContext("applicationContext.xml");</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">FruitPlate fp1= (FruitPlate)</span> app.getBean("fruitPlate1");</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">FruitPlate fp2 = (FruitPlate)</span> app.getBean("fruitPlate2");</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">fp1.getFruit();&nbsp;&nbsp;&nbsp; </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">fp2.getFruit();</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">运行结果：</span></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">I got Fruit</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">I got a fresh apple</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">I got Fruit</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">I got a fresh bananer</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#333333">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#333333"><strong>解释</strong></span></span></span></p>
<p style="margin-left: 36px;"><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">从上面例子我们可以看到，在代码中，我们没有用到</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Spring</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的任何类和接口，实现了与</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Spring</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">代码的耦合。</span></span></span></p>
<p style="margin-left: 36px;"><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span></span><br></p>
<p style="margin-left: 36px;"><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">其中，最为核心的部分就是</span><span
                style="font-family:&quot;Comic Sans MS&quot;">lookup-method</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的配置和</span><span
                style="font-family:&quot;Comic Sans MS&quot;">FruitPlate.getFruit()</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">方法。</span></span></span></p>
<p style="margin-left: 36px;"><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span></span><br></p>
<p style="margin-left: 36px;"><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">上面代码中，我们可以看到</span><span
                style="font-family:&quot;Comic Sans MS&quot;">getFruit()</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">方法是个抽象方法，我们并没有实现它啊，那它是怎么拿到水果的呢。这里的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Srping</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">应用了</span><span
                style="font-family:&quot;Comic Sans MS&quot;">CGLIB</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">（动态代理）类库。</span></span></span></p>
<p style="margin-left: 36px;"><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span></span><br></p>
<p style="margin-left: 36px;"><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Comic Sans MS&quot;">Spring</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在初始化容器的时候对配置</span><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;lookup-method/&gt;</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">做了特殊处理，</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Spring</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">会对</span><span
                style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">指定的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">class</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">做动态代理，代理</span><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;lookup-method/&gt;</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">标签中</span><span
                style="font-family:&quot;Comic Sans MS&quot;">name</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">属性所指定的方法，返回</span><span
                style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">属性指定的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">实例对象。</span></span></span></p>
<p style="margin-left: 36px;"><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span></span><br></p>
<p style="margin-left: 36px;"><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">每次我们调用</span><span
                style="font-family:&quot;Comic Sans MS&quot;">fruitPlate1</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">或者</span><span
                style="font-family:&quot;Comic Sans MS&quot;">fruitPlate2</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">这</span><span
                style="font-family:&quot;Comic Sans MS&quot;">2</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">个</span><span
                style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">getFruit()</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">方法时，其实是调用了</span><span
                style="font-family:&quot;Comic Sans MS&quot;">CGLIB</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">生成的动态代理类的方法，自动实现抽象类中的方法</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://www.cnblogs.com/ViviChan/p/4981619.html"
        href="https://www.cnblogs.com/ViviChan/p/4981619.html"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://www.cnblogs.com/ViviChan/p/4981619.html</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>