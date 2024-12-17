<template><div><h2 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式"><span>正则表达式</span></a></h2>
<table>
<thead>
<tr>
<th>正则表达式</th>
<th>说明</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>^</code></td>
<td>匹配字符串的开始位置</td>
<td><code v-pre>^abc</code> 只匹配以 &quot;abc&quot; 开始的字符串</td>
</tr>
<tr>
<td><code v-pre>$</code></td>
<td>匹配字符串的结束位置</td>
<td><code v-pre>abc$</code> 只匹配以 &quot;abc&quot; 结束的字符串</td>
</tr>
<tr>
<td><code v-pre>.</code></td>
<td>匹配除换行符以外的任何单个字符</td>
<td><code v-pre>a.b</code> 匹配所有形如 &quot;axb&quot; 的字符串，其中 x 是任意字符</td>
</tr>
<tr>
<td><code v-pre>\d</code></td>
<td>匹配数字字符（等价于 <code v-pre>[0-9]</code>）</td>
<td><code v-pre>\d+</code> 匹配一个或多个连续的数字</td>
</tr>
<tr>
<td><code v-pre>\D</code></td>
<td>匹配非数字字符</td>
<td><code v-pre>\D+</code> 匹配一个或多个连续的非数字字符</td>
</tr>
<tr>
<td><code v-pre>\w</code></td>
<td>匹配字母、数字、下划线（等价于 <code v-pre>[a-zA-Z0-9_]</code>）</td>
<td><code v-pre>\w+</code> 匹配一个或多个连续的字母、数字或下划线</td>
</tr>
<tr>
<td><code v-pre>\W</code></td>
<td>匹配非字母、数字、下划线</td>
<td><code v-pre>\W+</code> 匹配一个或多个连续的非字母、非数字或非下划线字符</td>
</tr>
<tr>
<td><code v-pre>\s</code></td>
<td>匹配空白字符（包括空格、制表符、换页符等）</td>
<td><code v-pre>\s+</code> 匹配一个或多个连续的空白字符</td>
</tr>
<tr>
<td><code v-pre>\S</code></td>
<td>匹配非空白字符</td>
<td><code v-pre>\S+</code> 匹配一个或多个连续的非空白字符</td>
</tr>
<tr>
<td><code v-pre>[abc]</code></td>
<td>匹配字符 a、b、c 中的任意一个</td>
<td><code v-pre>[abc]+</code> 匹配一个或多个连续的 a、b 或 c 字符</td>
</tr>
<tr>
<td><code v-pre>[^abc]</code></td>
<td>匹配非字符 a、b、c 中的任意一个</td>
<td><code v-pre>[^abc]+</code> 匹配一个或多个连续的非 a、非 b 或非 c 字符</td>
</tr>
<tr>
<td><code v-pre>[a-z]</code></td>
<td>匹配字符 a 到 z 之间的任意字符</td>
<td><code v-pre>[a-z]+</code> 匹配一个或多个连续的小写字母</td>
</tr>
<tr>
<td><code v-pre>[a-zA-Z]</code></td>
<td>匹配字符 a 到 z 或 A 到 Z 之间的任意字符</td>
<td><code v-pre>[a-zA-Z]+</code> 匹配一个或多个连续的大写或小写字母</td>
</tr>
<tr>
<td><code v-pre>[0-9]</code></td>
<td>匹配数字 0 到 9 之间的任意字符</td>
<td><code v-pre>[0-9]+</code> 匹配一个或多个连续的数字</td>
</tr>
<tr>
<td><code v-pre>\b</code></td>
<td>匹配单词边界</td>
<td><code v-pre>\bword\b</code> 只匹配完整的单词 &quot;word&quot;</td>
</tr>
<tr>
<td><code v-pre>\B</code></td>
<td>匹配非单词边界</td>
<td><code v-pre>\Bword\B</code> 匹配嵌入在其他字符中的 &quot;word&quot;</td>
</tr>
<tr>
<td><code v-pre>^\w{6,12}$</code></td>
<td>匹配长度为 6 到 12 位的字母、数字或下划线组成的密码</td>
<td><code v-pre>&quot;abc123&quot;</code>、<code v-pre>&quot;password&quot;</code></td>
</tr>
<tr>
<td><code v-pre>^\d{6}$</code></td>
<td>匹配长度为 6 位的数字组成的密码</td>
<td><code v-pre>&quot;123456&quot;</code></td>
</tr>
<tr>
<td><code v-pre>^\d{18}$</code></td>
<td>匹配长度为 18 位的身份证号码</td>
<td><code v-pre>&quot;123456789012345678&quot;</code></td>
</tr>
<tr>
<td><code v-pre>^\d{15}$</code></td>
<td>匹配长度为 15 位的旧版身份证号码</td>
<td><code v-pre>&quot;123456789012345&quot;</code></td>
</tr>
<tr>
<td><code v-pre>^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$</code></td>
<td>匹配标准的电子邮件地址</td>
<td><code v-pre>&quot;example@example.com&quot;</code></td>
</tr>
<tr>
<td><code v-pre>^\+\d{1,3}\d{10,15}$</code></td>
<td>匹配带国家区号的电话号码</td>
<td><code v-pre>&quot;+8613800138000&quot;</code></td>
</tr>
<tr>
<td><code v-pre>^\d{3}-\d{3}-\d{4}$</code></td>
<td>匹配美国电话号码格式</td>
<td><code v-pre>&quot;123-456-7890&quot;</code></td>
</tr>
<tr>
<td><code v-pre>^\d{3}-\d{8}$</code></td>
<td>匹配中国大陆固定电话号码格式</td>
<td><code v-pre>&quot;010-12345678&quot;</code></td>
</tr>
<tr>
<td><code v-pre>^\d{11}$</code></td>
<td>匹配中国大陆手机号码格式</td>
<td><code v-pre>&quot;13800138000&quot;</code></td>
</tr>
<tr>
<td><code v-pre>^\d{5}(?:[-\s]\d{4})?$</code></td>
<td>匹配美国邮政编码格式</td>
<td><code v-pre>&quot;12345&quot;</code>、<code v-pre>&quot;12345-6789&quot;</code></td>
</tr>
<tr>
<td><code v-pre>^\d{6}$</code></td>
<td>匹配中国邮政编码格式</td>
<td><code v-pre>&quot;100000&quot;</code></td>
</tr>
<tr>
<td>`^(http</td>
<td>https)😕/[a-zA-Z0-9.-]+(?😕[a-zA-Z0-9._-]<em>)</em>$`</td>
<td>匹配标准的 URL 地址</td>
</tr>
</tbody>
</table>
</div></template>


