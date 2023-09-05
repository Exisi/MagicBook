---
categories:
  - Spring
tags:
  - MultipartResolver
date:
  - 2022-6-28 14:14:13
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">从</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring3.1</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">开始，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">提供了两个</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">MultipartResolver</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的实现用于处理</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">multipart</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">请求。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ol style="list-style-type: decimal; margin-left: 40px;">
    <li value="1"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><strong>CommonsMultipartResolver</strong></span></span>
    </li>
</ol>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">CommonsMultipartResolver</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">使用</span><span
            style="font-family:&quot;Comic Sans MS&quot;">commons Fileupload</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">来处理</span><span
            style="font-family:&quot;Comic Sans MS&quot;">multipart</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">请求，所以在使用时，必须要引入相应的</span><span
            style="font-family:&quot;Comic Sans MS&quot;">jar</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">包</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ol style="list-style-type: decimal; margin-left: 40px;">
    <li value="2"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><strong>StandardServletMultipartResolver</strong></span></span>
    </li>
</ol>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">StandardServletMultipartResolver</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">是基于</span><span
            style="font-family:&quot;Comic Sans MS&quot;">Servlet3.0</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">来处理</span><span
            style="font-family:&quot;Comic Sans MS&quot;">multipart</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">请求的，所以不需要引用其他</span><span
            style="font-family:&quot;Comic Sans MS&quot;">jar</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">包，但是必须使用支持</span><span
            style="font-family:&quot;Comic Sans MS&quot;">Servlet3.0</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">的容器才可以</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">spring mvc
                +servlet3.0</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">上传文件配置，文件上传插件</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">uploadify</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的应用</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">使用文件上传需要使用&nbsp;</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;multipart-config&gt;</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">限制文件的上传，</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;multipart-config&gt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">有以下子标签：</span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.8104in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>属性名</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5493in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.8104in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;file-size-threshold&gt;</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5493in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">当数据量大于该值时，内容将被写入文件。否则写入内存，默认值为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">0</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.8104in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;location&gt;</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5493in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">上传临时存放生成的文件地址。只能为绝对路径，默认为空</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">""</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.8104in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;max-file-size&gt;</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5493in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">允许上传的文件最大值。默认值为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> -1</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，表示没有限制。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.8104in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;max-request-size&gt;</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6187in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">针对该</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> multipart/form-data </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">请求的最大数量，默认值为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> -1</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，表示没有限制。</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">web.xml</span></span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:6.8138in">
                <p><span style="font-size:12.0pt"><span style="color:#538135"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!-- </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">在</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">web.xml</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">添加</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">multipart-config</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> --&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;servlet&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;servlet-name&gt;</span><span
                                style="color:black">AcrWeb</span><span
                                style="color:blue">&lt;/servlet-name&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;servlet-class&gt;</span><span
                                style="color:black">org.springframework.web.servlet.DispatcherServlet</span><span
                                style="color:blue">&lt;/servlet-class&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;load-on-startup&gt;</span><span style="color:black">1</span><span
                                style="color:blue">&lt;/load-on-startup&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;multipart-config&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;max-file-size&gt;</span><span
                                style="color:black">52428800</span><span
                                style="color:blue">&lt;/max-file-size&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;max-request-size&gt;</span><span
                                style="color:black">52428800</span><span
                                style="color:blue">&lt;/max-request-size&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;file-size-threshold&gt;</span><span
                                style="color:black">0</span><span
                                style="color:blue">&lt;/file-size-threshold&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;/multipart-config&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/servlet&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">dispatcher-servlet</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">.xml</span></span></span>
    </li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:7.2215in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;bean&nbsp;id</span><span style="color:black">=</span><span
                                style="color:maroon">"multipartResolver"</span><span
                                style="color:blue">&nbsp;&nbsp;class</span><span style="color:black">=</span><span
                                style="color:maroon">"org.springframework.web.multipart.support.StandardServletMultipartResolver"</span><span
                                style="color:blue">&gt;</span>&nbsp;&nbsp;</span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/bean&gt;</span>&nbsp;</span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">jsp</span></span><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">页面中引入相关插件</span></span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:7.2118in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&lt;script</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">src=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"&lt;c:url</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">value="</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">/asset/admin/js/uploadify/jquery.uploadify.min.js</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"/&gt;"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&gt;&lt;/script&gt;</span></span>&nbsp;</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp; &nbsp; &nbsp;</span></span><br></p>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp; &nbsp; &nbsp;</span></span><span
        style="font-size:12.0pt"><span style="color:#70ad47"><span style="font-family:&quot;Comic Sans MS&quot;">//Input
                file</span><span style="font-family:&quot;Microsoft YaHei UI&quot;">与插件进行绑定</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:6.6569in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">$(</span><span style="color:maroon">"#apk_upload"</span><span
                                style="color:black">).uploadify({</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">swf:</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"&lt;c:url</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">value='/asset/admin/js/uploadify/uploadify.swf'/&gt;"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">,</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">//cancelImg</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">:</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">"&lt;c:url</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">value='/asset/admin/js/uploadify/uploadify-cancel.png'/&gt;",</span></span></span>
                </p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">uploader:</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"/acr/admin/app/apkupload"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">,</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">fileObjName:</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"file"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">//</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">对应着文件输入框</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">width:</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:red">300</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">,</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">buttonText:</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">'&lt;img</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">src="/acr/asset/admin/js/uploadify/upload.png"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">/&gt;'</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">,</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">//</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">onInit:</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">function</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">()</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">{</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">$(".uploadify-queue").hide();</span></span>&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">},</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">//removeCompleted</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">:</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">false,</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">onUploadSuccess:</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">function</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">(file,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">data,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">response)</span></span>&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">{</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">$(</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"#apkUrl"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">).val(data);</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">},</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">onUploadError:</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">function</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">(file,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">errorCode,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">errorMsg,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">errorString)</span></span>&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">{</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">alert(</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">'</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:maroon">文件&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">'</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">+</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">file.name</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">+</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">'</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:maroon">&nbsp;上传失败</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">:</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">'</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">+</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">errorString);</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">}</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">}</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">);</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">spring mvc </span></span><span
                style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">实现</span></span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:5.8909in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@RequestMapping</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">(value</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">=</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"/apkupload"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">method</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">=</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">RequestMethod.POST)</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">public</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@ResponseBody</span></span>&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#8000ff">String</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">apkUpload(</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@RequestParam</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">MultipartFile</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">file,</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">Model</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">model,</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">HttpServletRequest</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">request)</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">throws</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">IOException{</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">InputStream</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">input</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">=</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">null;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">OutputStream</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">output</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">=</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">null;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#8000ff">String</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">root</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">=</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"H:/file"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">//</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">生成了文件名字</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#8000ff">String</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">filename</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">=</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">file.getOriginalFilename();</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">//</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">文件要上传的位置</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#8000ff">String</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">fileFullName</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">=</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">buildUpPath(root,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">filename);</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">try</span></span>
                        <span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">{</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">File</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">dir</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">=</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">new</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">File(root);</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">if</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">(!dir.exists())</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">{</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">dir.mkdirs();</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">}</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">input</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">=</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">file.getInputStream();</span></span></span>
                </p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">output</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">=</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">new</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">FileOutputStream(</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">new</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">File(fileFullName));</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">//</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">保存文件</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">IOUtils.copy(input,</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">output);</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">}</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">catch</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">(Throwable</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">e)</span></span>&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">{</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">throw</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">e;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">}</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">finally</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">{</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">IOUtils.closeQuietly(input);</span></span></span>
                </p>
                <p><span style="font-size:12.0pt"><span
                            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">IOUtils.closeQuietly(output);</span></span></span>
                </p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">}</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">return</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">root</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">+</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"/"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">+</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">filename;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">}</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>注</strong></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">该插件的</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">uploadify.swf</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">文件时放入到项目的某一个文件下面</span></span>&nbsp;</li>
</ul>
<p><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Uploader</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的值对应的是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">url,</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">该值映射到了</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">springmvc</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的一个方法，该方法是文件上传的核心，</span></span>&nbsp;</li>
</ul>
<p><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">负责把文件写到指定位置的地方去。</span></span>&nbsp;</li>
</ul>
