---
categories:
  - HTML
tags:
  - Node
date:
  - 2020-6-9 15:05:15
---

<body tabindex="0" aria-label="编辑器, ckeditor-4-demo" role="textbox" aria-multiline="true" contenteditable="true"
    aria-readonly="false" class="cke_editable cke_editable_themed cke_contents_ltr cke_show_borders" spellcheck="false">
    <ul style="list-style-type:disc">
        <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Node </span></span><span
                style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">是一个接口，各种类型的</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> DOM API
                </span></span><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">对象会从这个接口继承。它允许我们使用相似的方式对待这些不同类型的对象；比如，继承同一组方法，或者用同样的方式测试</span></span>
        </li>
    </ul>
    <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
    <ul style="list-style-type:disc">
        <li><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">以下接口都从</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> Node </span></span><span
                style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">继承其方法和属性：</span></span>
            <ul style="list-style-type:disc">
                <li><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">Document</span></span></li>
                <li><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">Element</span></span></li>
                <li><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">Attr</span></span></li>
                <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">CharacterData
                            (Text, Comment,CDATASection)</span></span></li>
                <li><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">ProcessingInstruction</span></span></li>
                <li><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">DocumentFragment</span></span></li>
                <li><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">DocumentType</span></span></li>
                <li><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">Notation</span></span></li>
                <li><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">Entity</span></span></li>
                <li><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">EntityReference</span></span></li>
            </ul>
        </li>
    </ul>
    <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
    <ul style="list-style-type:disc">
        <li><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">在方法和属性不相关的特定情况下，这些接口可能返回</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> null</span></span><span
                style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">。它们可能会抛出异常</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> - </span></span><span
                style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">例如，当将子节点添加到不允许子节点存在的节点时。</span></span></li>
    </ul>
    <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
    <p style="margin-left: 40px;"><img
            src="data:image/png;base64,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"
            style="height:42px; width:251px"></p>
    <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
    <ul style="list-style-type:disc">
        <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Node </span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">对象有以下属性：</span></span>
        </li>
    </ul>
    <table summary="" cellspacing="0"
        style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
        class=" cke_show_border">
        <tbody>
            <tr>
                <td
                    style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                    <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                    style="color:white"><strong>属性</strong></span></span></span></p>
                </td>
                <td
                    style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.652in">
                    <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                    style="color:white"><strong>说明</strong></span></span></span></p>
                </td>
                <td
                    style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                    <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                    style="color:white"><strong>状态</strong></span></span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">Node.baseURI</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6715in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个表示</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> base URL </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">DOMString</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。不同语言中的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> base URL </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的概念都不一样。 在</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> HTML </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">中，</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">base URL </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">表示协议和域名，以及一直到最后一个</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">'/'</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">之前的文件目录</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">baseURIObject</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.652in">
                    <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">(</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">不适用于网页内容</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">) </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">只读的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> nsIURI </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象表示元素的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> base URI.</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">childNodes</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.652in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个包含了该节点所有子节点的实时的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">NodeList</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">NodeList </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">是动态变化的。如果该节点的子节点发生了变化，</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">NodeList</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象就会自动更新。</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">firstChild</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.652in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回该节点的第一个子节点</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">Node</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，如果该节点没有子节点则返回</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">null</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">isConnected</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6715in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个布尔值用来检测该节点是否已连接</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> (</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">直接或者间接</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">) </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">到一个上下文对象上，比如通常</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> DOM </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">情况下的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">Document</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象，或者在</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> shadow DOM </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">情况下的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">ShadowRoot</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">lastChild</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.652in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回该节点的最后一个子节点</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">Node</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，如果该节点没有子节点则返回</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">null</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">nextSibling</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.652in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回与该节点同级的下一个节点</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Node</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，如果没有返回</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">null</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">nodeName</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.652in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个包含该节点名字的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">DOMString</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。节点的名字的结构和节点类型不同。比如</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">HTMLElement</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的名字跟它所关联的标签对应，就比如</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">HTMLAudioElement</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的就是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> 'audio' </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">Text</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">节点对应的是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> '#text' </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">还有</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">Document</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">节点对应的是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> '#document'</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">nodeType</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.652in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个与该节点类型对应的无符号短整型的值，可能的值如下：</span></span>
                    </p>
                    <table summary="" cellspacing="0"
                        style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                        class=" cke_show_border">
                        <tbody>
                            <tr>
                                <td
                                    style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.2444in">
                                    <p><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                    style="color:white"><strong>参数</strong></span></span></span></p>
                                </td>
                                <td
                                    style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5548in">
                                    <p style="text-align:center"><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                    style="color:white"><strong>值</strong></span></span></span></p>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.2444in">
                                    <p><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Comic Sans MS&quot;"><span
                                                    style="color:black">ELEMENT_NODE</span></span></span></p>
                                </td>
                                <td
                                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5548in">
                                    <p style="text-align:center"><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Comic Sans MS&quot;"><span
                                                    style="color:black">1</span></span></span></p>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.2444in">
                                    <p><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Comic Sans MS&quot;"><span
                                                    style="color:black">TEXT_NODE</span></span></span></p>
                                </td>
                                <td
                                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5548in">
                                    <p style="text-align:center"><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Comic Sans MS&quot;"><span
                                                    style="color:black">3</span></span></span></p>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.2444in">
                                    <p><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Comic Sans MS&quot;"><span
                                                    style="color:black">CDATA_SECTION_NODE</span></span></span></p>
                                </td>
                                <td
                                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5548in">
                                    <p style="text-align:center"><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Comic Sans MS&quot;"><span
                                                    style="color:black">4</span></span></span></p>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.2444in">
                                    <p><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Comic Sans MS&quot;"><span
                                                    style="color:black">PROCESSING_INSTRUCTION_NODE</span></span></span>
                                    </p>
                                </td>
                                <td
                                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5548in">
                                    <p style="text-align:center"><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Comic Sans MS&quot;"><span
                                                    style="color:black">7</span></span></span></p>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.2444in">
                                    <p><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Comic Sans MS&quot;"><span
                                                    style="color:black">COMMENT_NODE</span></span></span></p>
                                </td>
                                <td
                                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5548in">
                                    <p style="text-align:center"><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Comic Sans MS&quot;"><span
                                                    style="color:black">8</span></span></span></p>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.2444in">
                                    <p><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Comic Sans MS&quot;"><span
                                                    style="color:black">DOCUMENT_NODE</span></span></span></p>
                                </td>
                                <td
                                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5548in">
                                    <p style="text-align:center"><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Comic Sans MS&quot;"><span
                                                    style="color:black">9</span></span></span></p>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.2444in">
                                    <p><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Comic Sans MS&quot;"><span
                                                    style="color:black">DOCUMENT_TYPE_NODE</span></span></span></p>
                                </td>
                                <td
                                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5548in">
                                    <p style="text-align:center"><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Comic Sans MS&quot;"><span
                                                    style="color:black">10</span></span></span></p>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.2444in">
                                    <p><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Comic Sans MS&quot;"><span
                                                    style="color:black">DOCUMENT_FRAGMENT_NODE</span></span></span></p>
                                </td>
                                <td
                                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5548in">
                                    <p style="text-align:center"><span style="font-size:10.5pt"><span
                                                style="font-family:&quot;Comic Sans MS&quot;"><span
                                                    style="color:black">11</span></span></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">nodeValue</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.652in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回或设置当前节点的值。</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">ownerDocument</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.652in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回这个元素属于的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Document</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象 。 如果没有</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Document </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象与之关联，返回</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> null</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">parentNode</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.652in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个当前节点</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Node</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的父节点
                                。如果没有这样的节点，比如说像这个节点是树结构的顶端或者没有插入一棵树中， 这个属性返回</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> null</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">parentElement</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.652in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个当前节点的父节点</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Element </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。 如果当前节点没有父节点或者说父节点不是一个元素</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> (Element), </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">这个属性返回</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> null</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">previousSibling</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.652in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个当前节点同辈的前一个节点</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> ( Node) </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，或者返回</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> null</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">（如果不存在这样的一个节点的话）</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">textContent</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.652in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回或设置一个元素内所有子节点及其后代的文本内容。</span></span>
                    </p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                </td>
            </tr>
        </tbody>
    </table>
    <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
    <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Node </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">对象有以下方法：</span></span></p>
    <table summary="" cellspacing="0"
        style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
        class=" cke_show_border">
        <tbody>
            <tr>
                <td
                    style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3152in">
                    <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                    style="color:white"><strong>方法</strong></span></span></span></p>
                </td>
                <td
                    style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4263in">
                    <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                    style="color:white"><strong>说明</strong></span></span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">appendChild()</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4958in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">将指定的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> childNode </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">参数作为最后一个子节点添加到当前节点。
                                如果参数引用了</span><span style="font-family:&quot;Comic Sans MS&quot;"> DOM </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">树上的现有节点，则节点将从当前位置分离，并附加到新位置。</span></span>
                    </p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">cloneNode()</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4263in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">克隆一个</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Node</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，并且可以选择是否克隆这个节点下的所有内容。默认情况下，节点下的内容会被克隆</span></span>
                    </p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">compareDocumentPosition()</span></span>
                    </p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4263in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">比较当前节点与文档中的另一节点的位置</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">contains()</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4263in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Boolean </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">布尔值，来表示传入的节点是否为该节点的后代节点。</span></span>
                    </p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">getRootNode()</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4645in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回上下文对象的根节点。如果</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> shadow root </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">节点存在的话，也可以在返回的节点中包含它</span></span>
                    </p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">hasChildNodes()</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4263in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">Boolean </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">布尔值，来表示该元素是否包含有子节点</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">insertBefore()</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4263in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">在当前节点下增加一个子节点</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Node</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，并使该子节点位于参考节点的前面</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">isDefaultNamespace()</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4263in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Boolean </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类型值。接受一个命名空间</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> URI </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">作为参数，当参数所指代的命名空间是默认命名空间时返回</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> true</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，否则返回</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> false</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">isEqualNode()</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4263in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Boolean </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类型值。当两个</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> node </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">节点为相同类型的节点且定义的数据点匹配时（即属性和属性值相同，节点值相同）返回</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> true</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，否则返回</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> false</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">isSameNode()</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4263in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Boolean </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类型值。返回这两个节点的引用比较结果</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">lookupPrefix()</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4513in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回包含参数</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> URI </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">所对应的命名空间前缀的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> DOMString</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，若不存在则返回</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> null</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。如果存在多个可匹配的前缀，则返回结果和浏览器具体实现有关</span></span>
                    </p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">lookupNamespaceURI()</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4263in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">接受一个前缀，并返回前缀所对应节点命名空间</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> URI </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。如果</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> URI </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">不存在则返回</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> null</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。传入</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> null </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">作为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> prefix </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">参数将返回默认命名空间</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">normalize()</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4263in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对该元素下的所有文本子节点进行整理，合并相邻的文本节点并清除空文本节点</span></span>
                    </p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">removeChild()</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4263in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">移除当前节点的一个子节点。这个子节点必须存在于当前节点中</span></span>
                    </p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">replaceChild()</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4263in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对选定的节点，替换一个子节点</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Node </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">为另外一个节点</span></span></p>
                </td>
            </tr>
        </tbody>
    </table>
    <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
    <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
    <p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
            data-cke-saved-href="https://developer.mozilla.org/zh-CN/docs/Web/API/Node"
            href="https://developer.mozilla.org/zh-CN/docs/Web/API/Node"><span
                style="font-family:&quot;Comic Sans MS&quot;">https://developer.mozilla.org/zh-CN/docs/Web/API/Node</span></a><span
            style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>
</body>
