var e=new RegExp('[^\t\r\n  ↵!"#$%&()*+,-.\\/:;<=>?@[\\]^_`{|}~]+',"g");export default function(t,r){var n,o=[];if("string"!=typeof t||!t||!t.replace(/\s*/,""))return o;if(r&&"[object RegExp]"!==Object.prototype.toString.call(r))return o;for(;null!==(n=(r||e).exec(t));){var f=n[0];f&&f.trim()&&o.push({value:f,index:n.index,offset:f.length})}return o}
//# sourceMappingURL=index.mjs.map
