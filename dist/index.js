var e=new RegExp('[^\t\r\n  ↵!"#$%&()*+,-.\\/:;<=>?@[\\]^_`{|}~]+',"g");module.exports=function(r,t){var n,o=[];if("string"!=typeof r||!r||!r.replace(/\s*/,""))return o;if(t&&"[object RegExp]"!==Object.prototype.toString.call(t))return o;for(;null!==(n=(t||e).exec(r));){var i=n[0];i&&i.trim()&&o.push({value:i,index:n.index,offset:i.length})}return o};
//# sourceMappingURL=index.js.map
