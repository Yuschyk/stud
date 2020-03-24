"use strict"

function regEx1 (str) {
    return str.match(/a.b/g);
};

function regEx2 (str) {
    return str.match(/a..a/g);
};

function regEx3 (str) {
    return str.match(/ab.a/g);
};

function regEx4 (str) {
    return str.match(/ab+a/g);
};

function regEx5 (str) {
    return str.match(/ab*a/g);
};

function regEx6 (str) {
    return str.match(/ab?a/g);
};

function regEx7 (str) {
    return str.match(/a(b|b*)a/g);
};

function regEx8 (str) {
    return str.match(/(ab)+/g);
};

function regEx9 (str) {
    return str.match(/a\.a/g);
};

function regEx10 (str) {
    return str.match(/\d\+\d/g);
};

function regEx11 (str) {
    return str.match(/\d\++\d/g);
};

function regEx12 (str) {
    return str.match(/[2]\+*[3]/g);
};

function regEx13 (str) {
    return str.match(/\*q+\+/g);
};

function regEx14 (str) {
    let arr = str.match(/a.+?a/g).join(', ');
    let newStr = arr.replace(/a/g, '!');
    return newStr;
};

function regEx15 (str) {
    return str.match(/ab{2,4}a/g);;
};

function regEx16 (str) {
    return str.match(/ab{1,3}a/g);
};

function regEx17 (str) {
    return str.match(/ab{4,5}a/g);
};

function regEx18 (str) {
    return str.match(/a\da/g);
};

function regEx19 (str) {
    return str.match(/a\d+a/g);
};

function regEx20 (str) {
    return str.match(/a\d*a/g);
};

function regEx21 (str) {
    return str.match(/a[\D*]b/g);
};

function regEx22 (str) {
    return str.match(/a[\W*]b/g);
};

function regEx23 (str) {
    return str.replace(/\s/g, '!');
};

function regEx24 (str) {
    return str.match(/a[^cz\s]a/g);
};

function regEx25 (str) {
    return str.match(/a[^c-z\s]a/g);
};

function regEx26 (str) {
    return str.match(/a[3-7]a/g);
};

function regEx27 (str) {
    return str.match(/a[a-g]a/g);
};

function regEx28 (str) {
    return str.match(/a[a-fj-z]a/g);
};

function regEx29 (str) {
    return str.match(/a[a-fA-Z]a/g);
};

function regEx30 (str) {
    return str.match(/a[^ex\s]a/g);
};

function regEx31 (str) {
    return str.match(/w[а-яё]w/g);
};

function regEx32 (str) {
    return str.match(/a[a-z]+a/g);
};

function regEx33 (str) {
    return str.match(/a[a-zA-Z]+a/g);
};

function regEx34 (str) {
    return str.match(/a[a-z0-9]+a/g);
};

function regEx35 (str) {
    return str.match(/[а-яА-ЯёЁ]+/g);
};

function regEx36(str) {
    return str.replace(/^aaa/g ,'!');
}

function regEx37(str) {
    return str.replace(/aaa$/g ,'!');
}

function regEx38(str) {
    return str.match(/ae+a|ax+a/g);
}

function regEx39(str) {
    return str.match(/aeea|ax+a/g);
}

function regEx40(str) {
    return str.replace(/a\\a/, '!');
}

function regEx41(str) {
    return str.replace(/a\\\\\\a/, '!');
}

function regEx42(str) {
    return str.replace(/\/...\\/g, '!');
}

function regEx43(str){
    return str.replace(/(\w+)@(\w+)/g, '$2@$1');
}


function regEx44(str){
    return str.replace(/(\d)/g, '$1$1');
}

function regEx45(str){
    return /^[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/.test(str);
}

function regEx46(str){
    return str.match(/[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}/g);
}

function regEx47(str){
    return /([a-zA-z]+\W?[a-z]+\.[a-z]{2,3})/g.test(str);
}

function regEx48(str){
    return /^http:\/\/[a-z.-_\D]+\.[a-z]{2,3}$/.test(str);
}

function regEx49(str){
    return /^(http)s?:\/\/[a-z.-_\D]+\.[a-z]{2,3}$/.test(str);
}

function regEx50(str){
    return /^(http)s?/.test(str);
}

function regEx51(str){
    return /\w+\.(php|html|txt)$/.test(str);
}

function regEx52(str){
    return /\w+\.(jpe?g)$/.test(str);
}

function regEx53(str){
    return /^\d{1,11}$/.test(str);
}

function regEx54(str){
    let arr = [];
    let sum = 0;
    arr = str.match(/(\d)+/g);
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    return sum;
}

function regEx55(str){
    return str.replace(/(http\:\/\/[a-zA-z]+\W?[a-z]+\.[a-z]{2,3})/g, '<a href="$1">$1</a>');
}

function regEx56(str){
    return str.replace(/\s+/g, " ");
}

function regEx57(str){
    return str.replace(/\/\*|\*\//g, " ");
}

function regEx58(str){
    return str.replace(/\<\!\-\-\s|\s\-\-\>/g, " ");
}

function regEx59(str){
    return str.replace(/aaa(?=b)/g, "!")
}

function regEx60(str){
    return str.replace(/aaa(?!b)/g, "!")
}

function regEx61(str){
    return str.replace(/\d+/g, function (i) {
   return  i * i;
    });
}

function regEx62(str){
return str.replace(/\d+(?=")/g, function (i) {
return i * 2;
});
}

function regEx63(str){
    return str.replace(/текст(?=\}\})/g, 'тскет');
}



function regEx65(str){
    return /^(19\d\d|20\d\d|2100)$/.test(str);
}

function regEx66(str){
    return /^([0-1]\d|2[0-3]):[0-5]\d$/g.test(str);
}

function regEx67(str){
    return /^(\d|10|11|12).[0-5]\d (am|pm)$/g.test(str);
}

function regEx68(str){
    return str.replace(/\w*(.)\1\w*/g,'');
}

function regEx69And70(str){
    return str.replace(/\b(\w+)\b(\s\1)+/g, '$1');
}









module.exports = {
    regEx1, regEx2, regEx3, regEx4, regEx5, regEx6, regEx7,
    regEx8, regEx9, regEx10, regEx11, regEx12, regEx13, regEx14,
    regEx15, regEx16, regEx17, regEx18, regEx19, regEx20, regEx21,
    regEx22, regEx23, regEx24, regEx25, regEx26, regEx27, regEx28,
    regEx29, regEx30, regEx31, regEx32, regEx33, regEx34, regEx35,
    regEx36, regEx37, regEx38, regEx39, regEx40, regEx41, regEx42,
    regEx43, regEx44, regEx45, regEx46, regEx47, regEx48, regEx49,
    regEx50, regEx51, regEx52, regEx53, regEx54, regEx55, regEx56,
    regEx57, regEx58, regEx59, regEx60, regEx61, regEx62, regEx63,
    /* regEx64,*/ regEx65, regEx66, regEx67, regEx68, regEx69And70
};