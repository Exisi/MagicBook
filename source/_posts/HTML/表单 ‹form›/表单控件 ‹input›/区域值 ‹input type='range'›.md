---
categories:
- HTML
tags:
- ‹input›
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;input
                type="range"&gt;</span></span> <span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">允许用户指定一个数值，该数值必须不小于给定值，并且不得大于另一个给定值。</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">通常使用滑块或拨号控件而不是像</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> number </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">输入类型这样的文本输入框来表示。
                由于这种小部件不精确，因此除非控件的确切值不重要，否则通常不应使用它。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8833in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>属性</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9618in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8833in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">value</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9708in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">包含一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> DOMString </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">该属性包含所选数字的字符串表示形式。
                            该值绝不能为空字符串</span><span style="font-family:&quot;Comic Sans MS&quot;"> (""). </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">默认值介于指定的最小值和最大值之间，除非最大值实际上小于最小值，在这种情况下，默认值设置</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> min </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性的值。确定默认值的算法是</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8833in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">max</span></span>
                </p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.0312in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">允许值范围内的最大值。
                            如果输入到元素中的</span><span style="font-family:&quot;Comic Sans MS&quot;">value</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">超过此值，则元素将无法通过约束验证 。 如果</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> max&nbsp; </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性的值不是数字，则元素没有最大值</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">此值必须大于或等于</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> min </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性的值</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8833in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">min</span></span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9881in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">允许值范围内的最小值。
                            如果元素的</span><span style="font-family:&quot;Comic Sans MS&quot;">value </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">小于此值，则该元素将无法通过 约束验证。如果为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">min </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">指定的值不是有效数字，则输入没有最小值。</span></span>
                </p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">该值必须小于或等于</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> max </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性的值</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8833in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">step</span></span>
                </p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9618in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">range
                        </span><span style="font-family:&quot;Microsoft YaHei UI&quot;">输入的默认步进值为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> 1</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，除非步进基数不是整数，否则仅允许输入整数；否则，默认值为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> 1</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8833in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">list</span></span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.018in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">list
                        </span><span style="font-family:&quot;Microsoft YaHei UI&quot;">属性的值是位于同一文档中的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> &lt;datalist&gt; </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">元素的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> id</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> &lt;datalist&gt; </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">提供了一个预定义值的列表，以向用户建议此输入。列表中与类型不兼容的任何值都不包含在建议的选项中。提供的值是建议，而不是要求：用户可以从此预定义列表中选择或提供不同的值。</span></span>
                </p>
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
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:6.8694in">
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
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
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
                                style="color:black">Document</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/title&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/head&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;body&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;form&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;input</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">type</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"range"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">min=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"-10"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">max=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"10"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/form&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/body&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/html&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#70ad47">&nbsp;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">浏览器运行结果如下：</span></span></p>
<p style="margin-left: 40px;"><span tabindex="-1" contenteditable="false" data-cke-widget-wrapper="1"
        data-cke-filter="off" class="cke_widget_wrapper cke_widget_inline cke_widget_uploadimage cke_upload_uploading"
        data-cke-display-name="img" data-cke-widget-id="10" role="region" aria-label="img 小部件"><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAAsCAIAAAB+CGQtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAH/SURBVHhe7dq7qupQEAZg97ITVETFC2ohWqQSwUbyHqlF8KlsLMX3EBtBrGzEQsQLKqKCpe7Z+J/DgWTLabP++Rpnlul+VjK5fL1er4jiY/CryGjwpDR4Uho8KQ2elAZPSoMnpcGT0uBJafCkNHhSGjwpipc0+/1+s9lcr1epk8lkqVTK5/Pvv2hZHvx0Oh2Px9vtFv0fxWLRdd1Wq4Wej7XBPx6P0Wi0WCzQB3Ecx/O8WCyGnomdwUvq/X7fv9H9ZOv3ej3C7O0c7mSv/0/qQg6Tg9EwwY6fTCZyLTydTgyznl+9Xs/lcmjCLBqNyjmsWq0mEgks/eIn+OFwOJvNsEBJUu92u2jC7Pl8Xi6X9Xpdq9XK5TJWgxjZ6+Spi8PhcDwe0YSZMSadTjcajeVyebvdsBrEyBkeJbfdbocq/CT+SqWyWq3QBzFyXUfJ7X6/o7JCKpX6PN7qI1tSJpPJoOQWj8dRWUFGPBnv0QQxruui5FYoFFCFn8z2MtjLTR36IKbdbjebTXSs5HYum82iCTOJ/Hw+z+dzuZ37fCuvD3B+kD7AQWmRwWDw+fXMvxzH6XQ6aGjYOdV7nvd5tPlLDpOD0TCxc8cLfS37mbXBv+mHGL+xPPg3/fTKjyJ45aePbElp8KQ0eFIaPCkNnpQGT0qDJ6XBk9LgSWnwlCKRb/GT1SVArX48AAAAAElFTkSuQmCC"></span></span>
</p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/range"
        href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/range"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/range</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>