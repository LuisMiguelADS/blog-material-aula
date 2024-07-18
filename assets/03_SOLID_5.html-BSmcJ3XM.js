import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as p,c,f as d,b as e,d as a,e as s,a as o}from"./app-D1pzhGXg.js";const r={},l=o('<h1 id="principio-da-inversao-de-dependencia-dip" tabindex="-1"><a class="header-anchor" href="#principio-da-inversao-de-dependencia-dip"><span>Princípio da Inversão de Dependência (DIP)</span></a></h1><p>Adaptado de <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p><h2 id="principios-solid-principio-da-responsabilidade-unica-srp" tabindex="-1"><a class="header-anchor" href="#principios-solid-principio-da-responsabilidade-unica-srp"><span>Princípios SOLID - Princípio da Responsabilidade Única (SRP)</span></a></h2><p>Adaptado de <sup class="footnote-ref"><a href="#footnote1">[1:1]</a><a class="footnote-anchor" id="footnote-ref1:1"></a></sup>.</p><p>SOLID são cinco princípios da programação orientada a objetos que facilitam no desenvolvimento de softwares, tornando-os fáceis de manter e estender. Esses princípios podem ser aplicados a qualquer linguagem de Programação Orientada a Objetos.</p><p>Michael Feathers criou esse acrônimo após observar cinco princípios da orientação a objetos e design de código criados por Robert C. Martin (a.k.a. Uncle Bob) e abordados no artigo The Principles of OOD</p><p>S.O.L.I.D: Os 5 princípios da POO</p><ol><li>S — Single Responsiblity Principle (Princípio da responsabilidade única)</li><li>O — Open-Closed Principle (Princípio Aberto-Fechado)</li><li>L — Liskov Substitution Principle (Princípio da substituição de Liskov)</li><li>I — Interface Segregation Principle (Princípio da Segregação da Interface)</li><li>D — Dependency Inversion Principle (Princípio da inversão da dependência)</li></ol><p>Esses princípios ajudam o programador a escrever códigos mais limpos, separando responsabilidades, diminuindo acoplamentos, facilitando na refatoração e estimulando o reaproveitamento do código.</p><h2 id="principio-da-inversao-de-dependencia-dip-1" tabindex="-1"><a class="header-anchor" href="#principio-da-inversao-de-dependencia-dip-1"><span>Princípio da Inversão de Dependência (DIP)</span></a></h2><p><sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><div class="hint-container tip"><p class="hint-container-title">Definição</p><ul><li>Dependa de abstrações e não de implementações</li><li>Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações</li><li>Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações</li></ul></div><p>que, basicamente significam <em>Programe para uma interface/classe abstrata e não para uma classe concreta</em>.</p>',13),m=o(`<p>A dependência em tempo de compilação da maioria dos aplicativos flui na direção da execução do runtime, o que resulta em um gráfico de dependência direta. Por exemplo, se um módulo A chama uma função/método no módulo B, que por sua vez chama uma função/método no módulo C, então em tempo de compilação, A dependerá de B, que dependerá de C, criando uma cadeia de dependência como mostrado abaixo:</p><figure><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuIf8JCvEJ4zLK0f9pIt8LqX9LKZEpot8p4aylFpmudmbXMek1I18paaiBbPm1f6Ew09E2kWYpX0HY785FJqx1PXAAoK5XQ3KjDIYmwloaZCJWJmafKvWfL0JiAY4AENYgkN2ukhKYjJaKfnkLg3KqSxvUIL5-Jcf8AlSSaehyWau7OjwaBiTKlDIWA4E0000" alt="uml diagram" loading="lazy"><figcaption>Dependência direta</figcaption></figure><p>A aplicação do princípio de inversão de dependência permite que a <code>ClasseA</code> chame métodos em uma abstração implementada por <code>ClasseB</code>, possibilitando que <code>ClasseA</code> chame <code>ClasseB</code> em tempo de execução, mas que <code>ClasseB</code> dependa de uma interface controlada por <code>ClasseA</code> em tempo de compilação (invertendo assim a dependência em tempo de compilação).</p><p>Em tempo de execução, o fluxo de execução do programa permanece inalterado, mas a introdução de interfaces significa que diferentes implementações dessas interfaces podem ser facilmente conectadas.</p><p>Sem Inversão da Dependência</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servico</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">PersistenciaPessoa</span> persistenciaPessoa <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PersistenciaPessoa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//..</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">salvar</span><span class="token punctuation">(</span><span class="token class-name">Pessoa</span> pessoa<span class="token punctuation">)</span><span class="token punctuation">{</span>
        persistenciaPessoa<span class="token punctuation">.</span><span class="token function">salvar</span><span class="token punctuation">(</span>pessoa<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PersistenciaPessoa</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">salvar</span><span class="token punctuation">(</span><span class="token class-name">Pessoa</span> pessoa<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Com Inversão da Dependência</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Servico</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Persistencia</span> persistenciaPessoa<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Servico</span><span class="token punctuation">(</span><span class="token class-name">Persistencia</span> persistenciaPessoa<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>persistenciaPessoa <span class="token operator">=</span> persistenciaPessoa<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//..</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">salvar</span><span class="token punctuation">(</span><span class="token class-name">Pessoa</span> pessoa<span class="token punctuation">)</span><span class="token punctuation">{</span>
        persistenciaPessoa<span class="token punctuation">.</span><span class="token function">salvar</span><span class="token punctuation">(</span>pessoa<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PersistenciaPessoa</span> <span class="token keyword">implements</span> <span class="token class-name">Persistencia</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">salvar</span><span class="token punctuation">(</span><span class="token class-name">Pessoa</span> pessoa<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://www.plantuml.com/plantuml/svg/TP9D2i8m48NtESNGVNi04QaD26x5dRW8wLIBQLBI50hgQLm8NgCNip-nrjfa4J8pRsO-7WaBmxGfCq58plY5dH2yFMQvWXY1gonF1QkVzKDvS2NG72vOKG1jx_Kq4K6NIQL1dJ2EiFsyegcKEgMqA_GB80XWD0GM7i0E4zJrI_AKDL4_PYHPtW8ByrkXtmgTzlY7Snh7A8_-B4RqYq5dCSXzpa6ia9TE_y1XuBzFLk_xgu6fXQ1A6gq4jgisegpKu8WLjGrsZaFVS8Seu-O7l040" alt="uml diagram" loading="lazy"><figcaption>Inversão da Dependência</figcaption></figure><p>Assim a inversão de dependência é uma parte essencial da construção de aplicativos fracamente acoplados, pois os detalhes da implementação podem ser escritos para depender e implementar abstrações de nível superior, e não o contrário.</p><p>Os aplicativos resultantes são mais testáveis, modulares e sustentáveis como resultado.</p><p>Os principais motivos para programar para uma interface/classe abstrata são:</p><ul><li><em>Facilidade de manter o código</em> - As alterações ficam mais isoladas, não precisa mudar tudo que aceitava uma classe concreta para aceitar outra necessária. È possível mudar a implementação sem quebrar a aplicação.</li><li><em>Fica fácil estender o código</em> - Permite que novas implementações sejam feitas sem alterar tudo que esperava determinado objeto; certos comportamentos se tornam mais genéricos podendo manipular objetos que ele desconhece desde que contenha o contrato esperado;</li><li><em>Fica mais fácil realizar testes</em> - É fácil substituir um objeto real de produção por um falso que facilite o teste;</li></ul><p>Além disso interfaces facilitam a redução do acoplamento do código e ajudam a encapsular o código.</p><h3 id="como-podemos-obter-a-inversao-da-dependencia" tabindex="-1"><a class="header-anchor" href="#como-podemos-obter-a-inversao-da-dependencia"><span>Como podemos obter a inversão da dependência?</span></a></h3><p>Uma das formas de obter a inversão da dependência e usar o padrão de projeto da injeção da dependência. Dessa forma injetamos a dependência para obter a inversão da dependência.</p><p>Como exemplo temos Jakarta Contexts and Dependency Injection (CDI) que é um framework para injeção de dependência em Java. Ele fornece um conjunto de anotações e uma infraestrutura para criar e gerenciar objetos de maneira mais fácil e flexível. O CDI é parte da especificação Jakarta EE.</p><p>Outras opções são de CDI em java são:</p><ul><li><em>Spring Framework</em>: é uma das alternativas mais populares ao CDI, oferecendo injeção de dependência, controle transacional, gerenciamento de segurança, entre outras funcionalidades. O Spring possui uma comunidade grande e ativa, além de uma ampla documentação.</li><li><em>Google Guice</em>: é um framework de injeção de dependência leve e fácil de usar, que utiliza anotações para definir as dependências entre classes. O Guice foi criado pela Google e é usado em alguns projetos internos da empresa.</li><li><em>PicoContainer</em>: é um framework de injeção de dependência que oferece uma solução simples e eficiente para gerenciamento de objetos. O PicoContainer é leve e fácil de usar, e permite a criação de aplicativos modulares e escaláveis.</li></ul><h2 id="referencias" tabindex="-1"><a class="header-anchor" href="#referencias"><span>Referências</span></a></h2><hr class="footnotes-sep">`,21),u={class:"footnotes"},v={class:"footnotes-list"},f={id:"footnote1",class:"footnote-item"},k={href:"https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530",target:"_blank",rel:"noopener noreferrer"},b=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),g=e("a",{href:"#footnote-ref1:1",class:"footnote-backref"},"↩︎",-1),h={id:"footnote2",class:"footnote-item"},P={href:"https://macoratti.net/20/05/c_invdep1.htm",target:"_blank",rel:"noopener noreferrer"},D=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function I(_,S){const n=t("ExternalLinkIcon");return p(),c("div",null,[l,d(` 
//TODO Dependa da instancia e não da classe
`),m,e("section",u,[e("ol",v,[e("li",f,[e("p",null,[a("João Roberto da Paixão.O que é SOLID: O guia completo para você entender os 5 princípios da POO."),e("a",k,[a("https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530"),s(n)]),a(" (Acessado em 18/03/2022) "),b,a(),g])]),e("li",h,[e("p",null,[a("Princípio da Inversão da Dependência. "),e("a",P,[a("https://macoratti.net/20/05/c_invdep1.htm"),s(n)]),a(),D])])])])])}const A=i(r,[["render",I],["__file","03_SOLID_5.html.vue"]]),j=JSON.parse('{"path":"/posts/SOLID/03_SOLID_5.html","title":"Princípio da Inversão de Dependência (DIP)","lang":"pt-BR","frontmatter":{"icon":"edit","date":"2024-03-28T01:00:00.000Z","tag":["solid"],"category":["aula"],"order":7,"gitInclude":["../../../src/includes/SOLID.md","../../../src/includes/bib.md"],"description":"Princípio da Inversão de Dependência (DIP) Adaptado de [1]. Princípios SOLID - Princípio da Responsabilidade Única (SRP) Adaptado de [1:1]. SOLID são cinco princípios da program...","head":[["meta",{"property":"og:url","content":"https://20241-ifba-saj-ads-ppr.github.io/blog-material-aula/blog-material-aula/posts/SOLID/03_SOLID_5.html"}],["meta",{"property":"og:site_name","content":"20241 PPR Blog das Aulas"}],["meta",{"property":"og:title","content":"Princípio da Inversão de Dependência (DIP)"}],["meta",{"property":"og:description","content":"Princípio da Inversão de Dependência (DIP) Adaptado de [1]. Princípios SOLID - Princípio da Responsabilidade Única (SRP) Adaptado de [1:1]. SOLID são cinco princípios da program..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"og:updated_time","content":"2024-07-18T23:02:51.000Z"}],["meta",{"property":"article:author","content":"Leandro Souza"}],["meta",{"property":"article:tag","content":"solid"}],["meta",{"property":"article:published_time","content":"2024-03-28T01:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-18T23:02:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Princípio da Inversão de Dependência (DIP)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-28T01:00:00.000Z\\",\\"dateModified\\":\\"2024-07-18T23:02:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leandro Souza\\",\\"url\\":\\"https://github.com/leandro-costa\\"}]}"]]},"headers":[{"level":2,"title":"Princípios SOLID - Princípio da Responsabilidade Única (SRP)","slug":"principios-solid-principio-da-responsabilidade-unica-srp","link":"#principios-solid-principio-da-responsabilidade-unica-srp","children":[]},{"level":2,"title":"Princípio da Inversão de Dependência (DIP)","slug":"principio-da-inversao-de-dependencia-dip-1","link":"#principio-da-inversao-de-dependencia-dip-1","children":[{"level":3,"title":"Como podemos obter a inversão da dependência?","slug":"como-podemos-obter-a-inversao-da-dependencia","link":"#como-podemos-obter-a-inversao-da-dependencia","children":[]}]},{"level":2,"title":"Referências","slug":"referencias","link":"#referencias","children":[]}],"git":{"createdTime":1721343771000,"updatedTime":1721343771000,"contributors":[{"name":"Leandro Costa","email":"leandro.costa@ifba.edu.br","commits":1}]},"readingTime":{"minutes":2.42,"words":727},"filePathRelative":"posts/SOLID/03_SOLID_5.md","localizedDate":"28 de março de 2024","autoDesc":true}');export{A as comp,j as data};