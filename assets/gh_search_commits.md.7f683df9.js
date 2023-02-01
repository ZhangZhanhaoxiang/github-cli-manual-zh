import{_ as s,c as e,o as a,a as t}from"./app.001f7d66.js";const u=JSON.parse('{"title":"gh search commits","description":"","frontmatter":{},"headers":[{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"另请参见","slug":"另请参见","link":"#另请参见","children":[]}],"relativePath":"gh_search_commits.md","lastUpdated":1675236702000}'),p={name:"gh_search_commits.md"},n=t(`<h1 id="gh-search-commits" tabindex="-1">gh search commits <a class="header-anchor" href="#gh-search-commits" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gh search commits [&lt;query&gt;] [flags]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在 GitHub 上搜索提交。</p><p>该命令支持使用 GitHub 搜索语法、使用参数和限定符标志或两者的组合来构造查询。</p><p>GitHub 搜索语法记录在：<a href="https://docs.github.com/search-github/searching-on-github/searching-commits" target="_blank" rel="noreferrer">https://docs.github.com/search-github/searching-on-github/searching-commits</a></p><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h2><p><code>--author &lt;string&gt;</code></p><p>按作者筛选</p><p><code>--author-date &lt;date&gt;</code></p><p>根据创作日期进行筛选</p><p><code>--author-email &lt;string&gt;</code></p><p>筛选作者电子邮件</p><p><code>--author-name &lt;string&gt;</code></p><p>按作者姓名筛选</p><p><code>--committer &lt;string&gt;</code></p><p>按提交者筛选</p><p><code>--committer-date &lt;date&gt;</code></p><p>根据提交日期筛选</p><p><code>--committer-email &lt;string&gt;</code></p><p>筛选提交者电子邮件</p><p><code>--committer-name &lt;string&gt;</code></p><p>根据提交者名称进行筛选</p><p><code>--hash &lt;string&gt;</code></p><p>按提交哈希值筛选</p><p><code>-q</code>, <code>--jq &lt;expression&gt;</code></p><p>使用 jq 表达式筛选 JSON 输出</p><p><code>--json &lt;fields&gt;</code></p><p>使用指定字段输出 JSON</p><p><code>-L</code>, <code>--limit &lt;int&gt;</code></p><p>要获取的最大提交数量</p><p><code>--merge</code></p><p>筛选合并提交</p><p><code>--order &lt;string&gt;</code></p><p>返回的提交顺序，除非指定了“--sort”标志，否则将被忽略：{asc|desc}</p><p><code>--owner &lt;string&gt;</code></p><p>按仓库所有者筛选</p><p><code>--parent &lt;string&gt;</code></p><p>按父哈希筛选</p><p><code>--repo &lt;strings&gt;</code></p><p>按仓库筛选</p><p><code>--sort &lt;string&gt;</code></p><p>排序提取的提交： {author-date|committer-date}</p><p><code>-t</code>, <code>--template &lt;string&gt;</code></p><p>使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”</p><p><code>--tree &lt;string&gt;</code></p><p>按树哈希筛选</p><p><code>--visibility &lt;strings&gt;</code></p><p>基于仓库可见性进行筛选：{public|private|internal}</p><p><code>-w</code>, <code>--web</code></p><p>在 Web 浏览器中打开搜索查询</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 搜索提交匹配的关键字“readme”和“typo”</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh search commits readme typo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 搜索提交匹配的短语“bug fix”</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh search commits &quot;bug fix&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 搜索由用户“monalisa”提交的 commit</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh search commits --committer=monalisa</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 搜索作者为用户“Jane Doe”的提交</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh search commits --author-name=&quot;Jane Doe&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 搜索提交匹配哈希值“8dd03144ffdc6c0d486d6b705f9c7fba871ee7c3”</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh search commits --hash=8dd03144ffdc6c0d486d6b705f9c7fba871ee7c3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 搜索2022年2月1日之前编写的提交</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh search commits --author-date=&quot;2022-02-01&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="另请参见" tabindex="-1">另请参见 <a class="header-anchor" href="#另请参见" aria-hidden="true">#</a></h2><ul><li><a href="/github-cli-manual-zh/gh_search.html">gh search</a></li></ul>`,54),c=[n];function o(l,i,r,d,h,g){return a(),e("div",null,c)}const C=s(p,[["render",o]]);export{u as __pageData,C as default};
