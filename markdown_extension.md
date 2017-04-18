Markdown with links to markdown
===============================

Proposed extension to markdown
------------------------------

Links to MD files have their address prefixed by `md:`. For example:

    A title
    =======

    [A link](md:/ipfs/QmfQ75DjAxYzxMP2hdm6o4wFwZS5t7uorEZ2pX9AKXEg2u) to
    IPFS readme as a nice MD file.

    [Dead relative link](md:./relative.md) to MD file.

Reason
------

Let's say you have MD file located at `/ipfs/hash/and/path/index.md`
with links to other MD documents. For example:

    A title
    =======

    [A link](/ipfs/QmfQ75DjAxYzxMP2hdm6o4wFwZS5t7uorEZ2pX9AKXEg2u) to
    IPFS readme as a nice MD file.

    [Dead relative link](./relative.md) to MD file.

Markdown reader for IPFS (for example [this one](/ipfs/Qmeg6SThkHBKLo5yT1Z9LX9haTzLyMLVQVx66dZeNmKoDY/mdown))
will probably render links as something like:

    <a href="/ipfs/QmfQ75DjAxYzxMP2hdm6o4wFwZS5t7uorEZ2pX9AKXEg2u">A link</a>
    <a href="./relative.md">Dead relative link</a>

This is undesirable because user will be directed to raw text documents.
We want to display rendered version of these files. Second link doesn't
even lead to right document becuse it will be treated as relative to
reader location. Assuming that MD reader reads source file path from
hash part of URL desired efect may be:

    <a href="#/ipfs/QmfQ75DjAxYzxMP2hdm6o4wFwZS5t7uorEZ2pX9AKXEg2u">A link</a>
    <a href="#/ipfs/hash/and/path/relative.md">Dead relative link</a>

These links will change hash part of URL which will cause reader to
display new file. Author of MD file is not supposed to worry about
reader-dependent mechanics like passing source file in hash part of a
URL. Following example is bad.

    A title
    =======

    [A link](#/ipfs/QmfQ75DjAxYzxMP2hdm6o4wFwZS5t7uorEZ2pX9AKXEg2u) to
    IPFS readme as a nice MD file.

To properly render links reader must know which file is a markdown file.
