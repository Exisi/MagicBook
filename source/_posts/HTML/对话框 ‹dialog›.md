---
categories:
  - HTML
tags:
  - ‹dialog›
date:
  - 2022-11-8 14:05:05
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;dialog&gt;
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">元素表示一个对话框或其他交互式弹窗，例如一个可关闭警告、检查器或者窗口</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:#555555; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.05in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>属性</strong></span></span></span></p>
            </td>
            <td
                style="background-color:#555555; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6375in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.05in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">open</span></span>
                </p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.7069in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指示这个对话框是激活的和能互动的。当没有设置</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> open </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">属性时，对话框不应该显示给用户。推荐使用</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> .show() </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">或</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> .showModal() </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">方法来渲染对话框，而不是使用</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> open </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">属性。</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:5.9611in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;!DOCTYPE</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">html&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;html</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">lang</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"en"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;head&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;meta</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">charset</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"UTF-8"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;meta</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">http-equiv</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"X-UA-Compatible"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">content</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"IE=edge"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;meta</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"viewport"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">content</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"width=device-width,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">initial-scale=1.0"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;title&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">A</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">dialog</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/title&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/head&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;body&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">dialog</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">open</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;p&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">Greetings,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">one</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">and</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">all!</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/p&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;form</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">method</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"dialog"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;button&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">OK</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/button&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/form&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">dialog</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/body&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/html&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:11.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:11.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">浏览器运行结果：</span></span></p>
<p><img src="data:image/png;base64,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"></p>
<p><span style="font-size:11.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>注</strong></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">默认情况下，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">dialog</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">不会被</span></span> <span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Escape</span></span> <span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">关闭。仅当通过</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JavaScript </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">调用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> s</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">howModal</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">() </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">方法的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">dialog</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">将允许</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Escape</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">关闭它。如果打开了多个对话框，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Escape</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">应仅关闭最后显示的对话框</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">dialog</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">默认情况下只实现了水平居中，垂直居中需要对样式进行更改，从而实现全局居中</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;form&gt;
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">元素可关闭含有属性</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> method="dialog"
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的对话框。当提交表单时，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">dialog</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> returnValue</span></span>
        <span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">属性将会等于表单中被使用的提交按钮的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> value</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
</ul>
<p><br></p>
<p><span style="font-size:11.0pt"><span style="font-family:Calibri">&nbsp;</span></span></p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog"
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span>&nbsp;</p>
