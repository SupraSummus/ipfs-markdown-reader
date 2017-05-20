Markdown reader for IPFS
========================

To use it just replace hash part of current URL with address of your
document.

It supports [markdown extension that allows to specify links to MD files](md:/ipfs/{{md_links}}).

[Example page](md:/ipfs/{{example_page}}/index.md) using markdown extension.

Insipired by [markdown reader in ipfs/examples repo](https://github.com/ipfs/examples/tree/master/webapps/markdown-viewer)
([example](/ipfs/Qmeg6SThkHBKLo5yT1Z9LX9haTzLyMLVQVx66dZeNmKoDY/mdown)).

Under the hood it uses [Showdown](https://github.com/showdownjs/showdown).
