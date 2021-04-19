(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{512:function(e,t,o){"use strict";o.r(t);var a=o(2),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"day-22"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#day-22"}},[e._v("#")]),e._v(" Day 22")]),e._v(" "),o("p",[e._v("Nathan Quam")]),e._v(" "),o("hr"),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/NathanMQuam/gregs-list-axios",target:"_blank",rel:"noopener noreferrer"}},[e._v("Greg's-List front-end"),o("OutboundLink")],1),e._v(" "),o("a",{attrs:{href:"https://github.com/NathanMQuam/greg-mongo-list",target:"_blank",rel:"noopener noreferrer"}},[e._v("Greg's-List node/mongodb server"),o("OutboundLink")],1)]),e._v(" "),o("hr"),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"daily-journal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#daily-journal"}},[e._v("#")]),e._v(" Daily Journal")]),e._v(" "),o("p",[e._v("Read Servers with Node/Express > MongoDb Relationships and answer the following questions")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("What are the three types of relationships?\n"),o("code",[e._v("One-to-one, one-to-many, and many-to-many")])])]),e._v(" "),o("li",[o("p",[e._v("What are the benefits of the traditional linking of relationships instead of Embedding\n"),o("code",[e._v("Embedding the relationship means there's only one read operation when getting the information, and is the preferred method of linking for one-to-one relationships. With a one-to-many relationship where there may be a high volume of the many entities, traditional linking is preferred as it prevents many problems from arising. Bucketing can also be useful for the one-to-many relationships, such as when you are grouping items into discrete categories such as by date, or when paginating a set of data.")])])]),e._v(" "),o("li",[o("p",[e._v("What are some of the challenges faced when deciding how to manage a many-to-many relationship that ultimately drive your decision on how to create it?\n`\nIn the given example authors of many books and books with many authors, using two way embedding is useful, because the books store the foreign keys of their authors, and the authors store the foreign keys of their books.")])])]),e._v(" "),o("p",[e._v("With many books and only a few categories, it's better to store the foreign id's of a book's categories on the book entry, preventing the categories doc from getting bloated.")]),e._v(" "),o("p",[e._v("Finally there's third collection embedding, where the model stores the foreign id of a book and it's name as well as the foreign id's of that book's categories and authors. This keeps the relationship entries small and readable, as well as making it faster to query.\n`")]),e._v(" "),o("blockquote",[o("p",[e._v("TIP")]),e._v(" "),o("p",[o("code",[e._v("Establish Relationship Balance")])]),e._v(" "),o("p",[e._v("Establish the maximum size of "),o("code",[e._v("N")]),e._v(" and the size of "),o("code",[e._v("M")]),e._v(". For example if "),o("code",[e._v("N")]),e._v(" is a maximum of 3 categories for a book and "),o("code",[e._v("M")]),e._v(" is a maximum of 500000 books in a category you should pick One Way Embedding. If "),o("code",[e._v("N")]),e._v(" is a maximum of 3 and "),o("code",[e._v("M")]),e._v(" is a maximum of 5 then Two Way Embedding might work well.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);