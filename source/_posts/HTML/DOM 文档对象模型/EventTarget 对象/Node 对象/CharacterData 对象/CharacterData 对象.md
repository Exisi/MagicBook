---
categories:
- HTML
tags:
- CharacterData
---

<body tabindex="0" aria-label="编辑器, ckeditor-4-demo" role="textbox" aria-multiline="true" contenteditable="true"
    aria-readonly="false" class="cke_editable cke_editable_themed cke_contents_ltr cke_show_borders" spellcheck="false"
    style="cursor: auto;">
    <ul style="list-style-type:disc">
        <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">CharacterData
                </span></span><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">抽象接口表示一个包含字符的</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> Node </span></span><span
                style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">对象。这是一个抽象接口，这意味着没有任何</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> CharacterData
                </span></span><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">类型的对象：它由其他非抽象接口如</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> Text</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">、</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Comment</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">、</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">CDATASection
                </span></span><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">或</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> ProcessingInstruction
                </span></span><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">实现。</span></span></li>
    </ul>
    <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
    <p style="margin-left: 40px;"><img
            src="data:image/png;base64,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"
            style="height:46px; width:432px"></p>
    <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
    <p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">CharacterData</span> <span
                style="font-family:&quot;Microsoft YaHei UI&quot;">对象有以下属性：</span></span></p>
    <table summary="" cellspacing="0"
        style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
        class=" cke_show_border">
        <tbody>
            <tr>
                <td
                    style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1597in">
                    <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                    style="color:white"><strong>属性</strong></span></span></span></p>
                </td>
                <td
                    style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0395in">
                    <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                    style="color:white"><strong>说明</strong></span></span></span></p>
                </td>
                <td
                    style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5076in">
                    <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                    style="color:white"><strong>状态</strong></span></span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1597in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">data</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0395in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">表示此对象中包含的文本数据的字符串。</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5076in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1597in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">length</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0395in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个数字，表示对象中包含的字符串的大小。</span></span>
                    </p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5076in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">已读</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1597in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">nextElementSibling</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0395in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回此节点之后的第一个元素，并且是同级元素。</span></span>
                    </p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5076in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">已读</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1597in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">previousElementSibling</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0395in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回此节点之前的第一个元素，并且是同级元素</span></span>
                    </p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5076in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">已读</span></span></p>
                </td>
            </tr>
        </tbody>
    </table>
    <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
    <ul style="list-style-type:disc">
        <li><span style="font-size:11.5pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">CharacterData</span></span> <span
                style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">对象有以下方法：</span></span>
        </li>
    </ul>
    <table summary="" cellspacing="0"
        style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
        class=" cke_show_border">
        <tbody>
            <tr>
                <td
                    style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6222in">
                    <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                    style="color:white"><strong>方法</strong></span></span></span></p>
                </td>
                <td
                    style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6694in">
                    <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                    style="color:white"><strong>说明</strong></span></span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6222in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">after()</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6694in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">在</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> CharacterData </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">父级的子级列表中插入一组</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Node </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象或字符串，就在</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> CharacterData </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象之后。</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6222in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">appendData()</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.7152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">将给定的字符串附加到</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> CharacterData.data </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">字符串；当此方法返回时，数据包含连接的字符串</span></span>
                    </p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6222in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">before()</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6694in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">在</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> CharacterData </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">父级的子级列表中插入一组</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Node </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象或字符串，就在</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> CharacterData </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象之前。</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6222in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">deleteData()</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.7152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">从</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> CharacterData.data </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">字符串中删除指定数量的字符，从指定的偏移量开始；当此方法返回时，数据包含缩短的字符串</span></span>
                    </p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6222in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">insertData()</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6694in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">在</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> CharacterData.data </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">字符串中以指定偏移量插入指定字符；当此方法返回时，数据包含修改后的字符串</span></span>
                    </p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6222in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">remove()</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6694in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">从其父子列表中删除对象</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6222in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">replaceData()</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.7388in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">用指定的字符串替换指定数量的字符，从指定的偏移量开始；当此方法返回时，数据包含修改后的字符串</span></span>
                    </p>
                </td>
            </tr>
            <tr>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6222in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">replaceWith()</span></span></p>
                </td>
                <td
                    style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6694in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">用一组</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Node </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象或字符串替换其父级的子级列表中的字符</span><span
                                style="font-family:SimSun">。</span></span></p>
                </td>
            </tr>
            <tr>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6222in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">substringData()</span></span></p>
                </td>
                <td
                    style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.7152in">
                    <p><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个字符串，其中包含指定长度的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> CharacterData.data </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">部分并从指定的偏移量开始。</span></span></p>
                </td>
            </tr>
        </tbody>
    </table>
    <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
    <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
    <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
    <p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
            data-cke-saved-href="https://developer.mozilla.org/en-US/docs/Web/API/CharacterData"
            href="https://developer.mozilla.org/en-US/docs/Web/API/CharacterData"><span
                style="font-family:&quot;Comic Sans MS&quot;">https://developer.mozilla.org/en-US/docs/Web/API/CharacterData</span></a><span
            style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>
</body>