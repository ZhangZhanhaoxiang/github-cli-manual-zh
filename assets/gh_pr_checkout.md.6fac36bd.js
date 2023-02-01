import{_ as a,c as s,o as e,a as n}from"./app.001f7d66.js";const A=JSON.parse('{"title":"gh pr checkout","description":"","frontmatter":{},"headers":[{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"从父命令继承的选项","slug":"从父命令继承的选项","link":"#从父命令继承的选项","children":[]},{"level":2,"title":"另请参见","slug":"另请参见","link":"#另请参见","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"使用拉取请求编号","slug":"使用拉取请求编号","link":"#使用拉取请求编号","children":[]},{"level":3,"title":"使用其他选择条件","slug":"使用其他选择条件","link":"#使用其他选择条件","children":[]}]}],"relativePath":"gh_pr_checkout.md","lastUpdated":1675236702000}'),l={name:"gh_pr_checkout.md"},p=n(`<h1 id="gh-pr-checkout" tabindex="-1">gh pr checkout <a class="header-anchor" href="#gh-pr-checkout" aria-hidden="true">#</a></h1><p>在 git 中切换拉取请求</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gh pr checkout {&lt;number&gt; | &lt;url&gt; | &lt;branch&gt;} [flags]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h2><p><code>-b</code>, <code>--branch &lt;string&gt;</code></p><p>使用本地分支名称（默认：head 分支的名称）</p><p><code>--detach</code></p><p>使用一个分离的 HEAD 切换拉取请求</p><p><code>-f</code>, <code>--force</code></p><p>将现有本地分支重置为拉取请求的最新状态</p><p><code>--recurse-submodules</code></p><p>切换后更新所有子模块</p><h2 id="从父命令继承的选项" tabindex="-1">从父命令继承的选项 <a class="header-anchor" href="#从父命令继承的选项" aria-hidden="true">#</a></h2><p><code>-R</code>, <code>--repo &lt;[HOST/]OWNER/REPO&gt;</code></p><p>使用 [HOST/]OWNER/REPO 格式选择另一个仓库</p><h2 id="另请参见" tabindex="-1">另请参见 <a class="header-anchor" href="#另请参见" aria-hidden="true">#</a></h2><ul><li><a href="/github-cli-manual-zh/gh_pr.html">gh pr</a></li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><h3 id="使用拉取请求编号" tabindex="-1">使用拉取请求编号 <a class="header-anchor" href="#使用拉取请求编号" aria-hidden="true">#</a></h3><p>您可以使用其拉取请求编号在仓库中切换任何拉取请求，包括来自复刻（fork）的请求</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 在本地切换拉取请求</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects/my-project$ gh pr checkout 12</span></span>
<span class="line"><span style="color:#A6ACCD;">remote: Enumerating objects: 66, done.</span></span>
<span class="line"><span style="color:#A6ACCD;">remote: Counting objects: 100% (66/66), done.</span></span>
<span class="line"><span style="color:#A6ACCD;">remote: Total 83 (delta 66), reused 66 (delta 66), pack-reused 17</span></span>
<span class="line"><span style="color:#A6ACCD;">Unpacking objects: 100% (83/83), done.</span></span>
<span class="line"><span style="color:#A6ACCD;">From https://github.com/owner/repo</span></span>
<span class="line"><span style="color:#A6ACCD;"> * [new ref]             refs/pull/8896/head -&gt; patch-2</span></span>
<span class="line"><span style="color:#A6ACCD;">M       README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">Switched to branch &#39;patch-2&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects/my-project$</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="使用其他选择条件" tabindex="-1">使用其他选择条件 <a class="header-anchor" href="#使用其他选择条件" aria-hidden="true">#</a></h3><p>您还可以使用 URL 和分支名称来切换拉取请求。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 在本地切换拉取请求</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects/my-project$ gh pr checkout branch-name</span></span>
<span class="line"><span style="color:#A6ACCD;">Switched to branch &#39;branch-name&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Your branch is up to date with &#39;origin/branch-name&#39;.</span></span>
<span class="line"><span style="color:#A6ACCD;">Already up to date.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects/my-project$</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,24),c=[p];function t(o,r,i,h,d,u){return e(),s("div",null,c)}const g=a(l,[["render",t]]);export{A as __pageData,g as default};