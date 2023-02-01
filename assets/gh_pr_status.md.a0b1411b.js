import{_ as s,c as a,o as e,a as n}from"./app.001f7d66.js";const A=JSON.parse('{"title":"gh pr status","description":"","frontmatter":{},"headers":[{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"从父命令继承的选项","slug":"从父命令继承的选项","link":"#从父命令继承的选项","children":[]},{"level":2,"title":"另请参见","slug":"另请参见","link":"#另请参见","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"relativePath":"gh_pr_status.md","lastUpdated":1675236702000}'),l={name:"gh_pr_status.md"},p=n(`<h1 id="gh-pr-status" tabindex="-1">gh pr status <a class="header-anchor" href="#gh-pr-status" aria-hidden="true">#</a></h1><p>显示相关拉取请求的状态</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gh pr status [flags]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h2><p><code>-c</code>, <code>--conflict-status</code></p><p>显示每个拉取请求的合并冲突状态</p><p><code>-q</code>, <code>--jq &lt;expression&gt;</code></p><p>使用 jq 表达式筛选 JSON 输出</p><p><code>--json &lt;fields&gt;</code></p><p>使用指定字段输出 JSON</p><p><code>-t</code>, <code>--template &lt;string&gt;</code></p><p>使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”</p><h2 id="从父命令继承的选项" tabindex="-1">从父命令继承的选项 <a class="header-anchor" href="#从父命令继承的选项" aria-hidden="true">#</a></h2><p><code>-R</code>, <code>--repo &lt;[HOST/]OWNER/REPO&gt;</code></p><p>使用 [HOST/]OWNER/REPO 格式选择另一个仓库</p><h2 id="另请参见" tabindex="-1">另请参见 <a class="header-anchor" href="#另请参见" aria-hidden="true">#</a></h2><ul><li><a href="/github-cli-manual-zh/gh_pr.html">gh pr</a></li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 查看相关拉取请求的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects/my-project$ gh pr status</span></span>
<span class="line"><span style="color:#A6ACCD;">Current branch</span></span>
<span class="line"><span style="color:#A6ACCD;">  #12 Remove the test feature [user:patch-2]</span></span>
<span class="line"><span style="color:#A6ACCD;">   - All checks failing - Review required</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Created by you</span></span>
<span class="line"><span style="color:#A6ACCD;">  You have no open pull requests</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Requesting a code review from you</span></span>
<span class="line"><span style="color:#A6ACCD;">  #13 Fix tests [branch]</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 3/4 checks failing - Review required</span></span>
<span class="line"><span style="color:#A6ACCD;">  #15 New feature [branch]</span></span>
<span class="line"><span style="color:#A6ACCD;">   - Checks passing - Approved</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects/my-project$</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,19),t=[p];function c(o,r,i,d,h,C){return e(),a("div",null,t)}const g=s(l,[["render",c]]);export{A as __pageData,g as default};