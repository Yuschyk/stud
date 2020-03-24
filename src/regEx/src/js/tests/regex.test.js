const { describe } = require('mocha');
const reg = require('../regex');

describe('task1', function() {
    it('Найти строки ahb, acb, aeb', function() {
        assert.deepEqual(reg.regEx1('ahb acb aeb aeeb adcb axeb'), ['ahb', 'acb', 'aeb']);
    });
});

describe('task2', function() {
    it('Найти строки abba adca abea', function() {
        assert.deepEqual(reg.regEx2('aba aca aea abba adca abea'), ['abba', 'adca', 'abea']);
    });
});

describe('task3', function() {
    it('Найти строки abba и abea', function() {
        assert.deepEqual(reg.regEx3('aba aca aea abba adca abea'), ['abba', 'abea']);
    });
});

describe('task4', function() {
    it('Найти строки aba, abba, abbba', function() {
        assert.deepEqual(reg.regEx4('aa aba abba abbba abca abea'), ['aba', 'abba', 'abbba']);
    });
});

describe('task5', function() {
    it('Найти строки aa, aba, abba, abbba', function() {
        assert.deepEqual(reg.regEx5('aa aba abba abbba abca abea'), ['aa', 'aba', 'abba', 'abbba']);
    });
});

describe('task6', function() {
    it('Найти строки aa, aba', function() {
        assert.deepEqual(reg.regEx6('aa aba abba abbba abca abea'), ['aa', 'aba']);
    });
});

describe('task7', function() {
    it('Найти строки aa, aba, abba, abbba', function() {
        assert.deepEqual(reg.regEx7('aa aba abba abbba abca abea'), ['aa', 'aba', 'abba', 'abbba']);
    });
});

describe('task8', function() {
    it('Найти строки ab abab abab abababab abea', function() {
        assert.deepEqual(reg.regEx8('ab abab abab abababab abea'), ['ab', 'abab', 'abab', 'abababab', 'ab']);
    });
});

describe('task9', function() {
    it('Найти строки a.a', function() {
        assert.deepEqual(reg.regEx9('a.a aba aea'), ['a.a']);
    });
});

describe('task10', function() {
    it('Найти строки 2+3', function() {
        assert.deepEqual(reg.regEx10('2+3 223 2223'), ['2+3']);
    });
});

describe('task11', function() {
    it('Найти строки 2+3, 2++3, 2+++3', function() {
        assert.deepEqual(reg.regEx11('23 2+3 2++3 2+++3 345 567'), ['2+3', '2++3', '2+++3']);
    });
});

describe('task12', function() {
    it('Найти строки 23, 2+3, 2++3, 2+++3', function() {
        assert.deepEqual(reg.regEx12('23 2+3 2++3 2+++3 445 677'), ['23', '2+3', '2++3', '2+++3']);
    });
});

describe('task13', function() {
    it('Найти строки *q+, *qq+, *qqq+', function() {
        assert.deepEqual(reg.regEx13('*+ *q+ *qq+ *qqq+ *qqq qqq+'), ['*q+', '*qq+', '*qqq+']);
    });
});

describe('task14', function() {
    it('Найти строки, по краям которых стоят буквы "a", и заменит каждую из них на "!"', function() {
        assert.deepEqual(reg.regEx14('aba accca azzza wwwwa'), '!b!, !ccc!, !zzz!');
    });
});

describe('task15', function() {
    it('Найти строки abba, abbba, abbbba и только их', function() {
        assert.deepEqual(reg.regEx15('aa aba abba abbba abbbba abbbbba'), ['abba', 'abbba', 'abbbba']);
    });
});

describe('task16', function() {
    it('Найти строки вида aba, в которых \'b\' встречается менее 3-х раз (включительно).', function() {
        assert.deepEqual(reg.regEx16('aa aba abba abbba abbbba abbbbba'), ['aba', 'abba', 'abbba']);
    });
});

describe('task17', function() {
    it('Найти строки вида aba, в которых \'b\' встречается более 4-х раз (включительно)', function() {
        assert.deepEqual(reg.regEx17('aa aba abba abbba abbbba abbbbba'), ['abbbba', 'abbbbba']);
    });
});

describe('task18', function() {
    it('Найти строки, в которых по краям стоят буквы \'a\', а между ними одна цифра', function() {
        assert.deepEqual(reg.regEx18('a1a a2a a3a a4a a5a aba aca'), ['a1a', 'a2a', 'a3a', 'a4a', 'a5a']);
    });
});

describe('task19', function() {
    it('Найти строки, в которых по краям стоят буквы \'a\', а между ними любое количество цифр', function() {
        assert.deepEqual(reg.regEx19('a1a a22a a333a a4444a a55555a aba aca'), ['a1a', 'a22a', 'a333a', 'a4444a', 'a55555a']);
    });
});

describe('task20', function() {
    it('Найти строки, в которых по краям стоят буквы \'a\', а между ними любое количество цифр (в том числе и ноль)', function() {
        assert.deepEqual(reg.regEx20('aa a1a a22a a333a a4444a a55555a aba aca'), ['aa', 'a1a', 'a22a', 'a333a', 'a4444a', 'a55555a']);
    });
});

describe('task21', function() {
    it('Найти строки следующего вида: по краям стоят буквы \'a\' и \'b\', а между ними - не число', function() {
        assert.deepEqual(reg.regEx21('avb a1b a2b a3b a4b a5b abb acb'), ['avb', 'abb', 'acb']);
    });
});

describe('task22', function() {
    it('Найти строки следующего вида: по краям стоят буквы \'a\' и \'b\', а между ними - не буква и не цифра', function() {
        assert.deepEqual(reg.regEx22('ave a#b a2b a$b a4b a5b a-b acb'), ['a#b', 'a$b', 'a-b']);
    });
});

describe('task23', function() {
    it('Заменить все пробелы на \'!\'', function() {
        assert.deepEqual(reg.regEx23('ave a#a a2a a$a a4a a5a a-a aca'), 'ave!a#a!a2a!a$a!a4a!a5a!a-a!aca');
    });
});

describe('task24', function() {
    it('Найти строки aba, aea, axa, не затронув остальных', function() {
        assert.deepEqual(reg.regEx24('aba aea aca aza axa'), ['aba', 'aea', 'axa']);
    });
});

describe('task25', function() {
    it('Найти строки aba, a.a, a+a, a*a, не затронув остальных', function() {
        assert.deepEqual(reg.regEx25('aba aea aca aza axa a.a a+a a*a'), ['aba', 'a.a', 'a+a', 'a*a']);
    });
});

describe('task26', function() {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - цифра от 3-х до 7-ми', function() {
        assert.deepEqual(reg.regEx26('a0a a2a a4a a6a a7a a.a a+a a*a'), ['a4a', 'a6a', 'a7a']);
    });
});

describe('task27', function() {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - буква от a до g.', function() {
        assert.deepEqual(reg.regEx27('aba aea aca aza axa a.a a+a a*a'), ['aba', 'aea', 'aca']);
    });
});

describe('task28', function() {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - буква от a до f и от j до z', function() {
        assert.deepEqual(reg.regEx28('aba aea aca aza axa a.a aha a*a'), ['aba', 'aea', 'aca', 'aza', 'axa']);
    });
});

describe('task29', function() {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - буква от a до f и от A до Z', function() {
        assert.deepEqual(reg.regEx29('aba aea aCa aza aXa aOa aka ala'), ['aba', 'aea', 'aCa', 'aXa', 'aOa']);
    });
});

describe('task30', function() {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - не \'e\' и не \'x\'', function() {
        assert.deepEqual(reg.regEx30('aba aea aca aza axa a-a a#a'), ['aba', 'aca', 'aza', 'a-a', 'a#a']);
    });
});

describe('task31', function() {
    it('Найти строки следующего вида: по краям стоят буквы \'w\', а между ними - буква кириллицы', function() {
        assert.deepEqual(reg.regEx31('wйw wяw wёw wqw'), ['wйw', 'wяw', 'wёw']);
    });
});

describe('task32', function() {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - маленькие латинские буквы, не затронув остальных', function() {
        assert.deepEqual(reg.regEx32('aAXa aeffa aGha aza ax23a a3sSa'), ['aeffa', 'aza']);
    });
});

describe('task33', function() {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - маленькие и большие латинские буквы, не затронув остальных', function() {
        assert.deepEqual(reg.regEx33('aAXa aeffa aGha aza ax23a a3sSa'), ['aAXa', 'aeffa', 'aGha', 'aza']);
    });
});

describe('task34', function() {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - маленькие латинские буквы и цифры, не затронув остальных', function() {
        assert.deepEqual(reg.regEx34('aAXa aeffa aGha aza ax23a a3sSa'), ['aeffa', 'aza', 'ax23a']);
    });
});

describe('task35', function() {
    it('Найти все слова по шаблону: любая кириллическая буква любое количество раз', function() {
        assert.deepEqual(reg.regEx35('ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ'), ['ааа', 'ббб', 'ёёё', 'ззз', 'ййй', 'ААА', 'БББ', 'ЁЁЁ', 'ЗЗЗ', 'ЙЙЙ']);
    });
});

describe('Task36', function() {
    it('Заменить первое \'aaa\' на \'!\'', function() {
        assert.deepEqual(reg.regEx36('aaa aaa aaa'), '! aaa aaa');
    });
});

describe('Task37', function() {
    it('Заменить первое \'aaa\' на \'!\'', function() {
        assert.deepEqual(reg.regEx37('aaa aaa aaa'), 'aaa aaa !');
    });
});

describe('Task38', function() {
    it('Найти следующего вида: по краям стоят буквы a, а между ними - или буква e любое количество раз или по краям стоят буквы a, а между ними - буква x любое количество раз.', function() {
        assert.deepEqual(reg.regEx38('aeeea aeea aea axa axxa axxxa'), [
            'aeeea', 'aeea', 'aea', 'axa', 'axxa', 'axxxa'
        ]);
    });
});

describe('Task39', function() {
    it('Найти строки следующего вида: по краям стоят буквы a, а между ними - или буква e два раза или буква x любое количество раз.', function() {
        assert.deepEqual(reg.regEx39('aeeea aeea aea axa axxa axxxa'), [
            'aeea','axa', 'axxa', 'axxxa'
        ]);
    });
});

describe('Task40', function() {
    it('Заменить строку a\\a на !', function() {
        assert.deepEqual(reg.regEx40('a\\a abc'), '! abc');
    });
});

describe('Task41', function() {
    it('Заменить строку a\\\\a на !', function() {
        assert.deepEqual(reg.regEx41('a\\a a\\\\a a\\\\\\a'), 'a\\a a\\\\a !');
    });
});

describe('Task42', function() {
    it('Найти содержимое всех конструкций /...\\\ и заменит их на !.', function() {
        assert.deepEqual(reg.regEx42('bbb /aaa\\ bbb /ccc\\'), 'bbb ! bbb !');
    });
});

describe('Task43', function() {
    it('Найти строки по шаблону: любое количество букв и цифр, символ @, любое количество букв и цифр и поменяет местами то, что стоит до @ на то, что стоит после нее. Например, aaa@bbb должно превратиться в bbb@aaa.', function() {
        assert.deepEqual(reg.regEx43('aaa@bbb eee7@kkk'), 'bbb@aaa kkk@eee7');
    });
});

describe('Task44', function() {
    it('Найти все цифры и удвоить их количество', function() {
        assert.deepEqual(reg.regEx44('a1b2c3'), 'a11b22c33');
    });
});

describe('Task45', function() {
    it('mymail@mail.ru - email', function() {
        assert.deepEqual(reg.regEx45('mymail@mail.ru'), true);
    });
    it('my-mail@mail.ru - email', function() {
        assert.deepEqual(reg.regEx45('my-mail@mail.ru'), true);
    });
    it('qwerty.com - He email', function() {
        assert.deepEqual(reg.regEx45('qwerty.com'), false);
    });
});

describe('Task46', function() {
    it('С помощью match найдите все email в виде массива', function() {
        assert.deepEqual(reg.regEx46('mymail@mail.ru, qwerty, @ru, q@mail.ru.ru, my-mail@mail.ru'), ['mymail@mail.ru', 'my-mail@mail.ru']);
    });
});

describe('Task47', function() {
    it('site.com - домен', function() {
        assert.deepEqual(reg.regEx47('site.com'), true);
    });
    it('qwerty - He домен', function() {
        assert.deepEqual(reg.regEx47('qwerty'), false);
    });
});

describe('Task48', function() {
    it('http://site.com - домен', function() {
        assert.deepEqual(reg.regEx48('http://site.com'), true);
    });
    it('qwerty.com - He домен', function() {
        assert.deepEqual(reg.regEx48('qwerty.com'), false);
    });
});

describe('Task49', function() {
    it('http://site.ru - домен', function() {
        assert.deepEqual(reg.regEx49('http://site.ru'), true);
    });
    it('https://site.ru - домен', function() {
        assert.deepEqual(reg.regEx49('https://site.ru'), true);
    });
    it('hts://site.ru - He домен', function() {
        assert.deepEqual(reg.regEx49('hts://site.ru'), false);
    });
});

describe('Task50', function() {
    it('Оопределить, что переданная строка начинается с http или с https', function() {
        assert.deepEqual(reg.regEx50('httpstring'), true);
    });
    it('Определить, что переданная строка начинается с http или с https', function() {
        assert.deepEqual(reg.regEx50('site.ru'), false);
    });
});

describe('Task51', function() {
    it('Определить, что переданная строка заканчивается расширением txt, html или php.', function() {
        assert.deepEqual(reg.regEx51('text.txt'), true);
    });
    it('Определить, что переданная строка заканчивается не расширением txt, html или php.', function() {
        assert.deepEqual(reg.regEx51('test'), false);
    });
});

describe('Task52', function() {
    it('Определить, что переданная строка заканчивается расширением jpg или jpeg.', function() {
        assert.deepEqual(reg.regEx52('image.jpg'), true);
    });
    it('Определить, что переданная строка заканчивается не расширением jpg или jpeg.', function() {
        assert.deepEqual(reg.regEx52('testString'), false);
    });
});

describe('Task53', function() {
    it('Определить, является ли строка числом, длиной до 12 цифр', function() {
        assert.deepEqual(reg.regEx53('123456789'), true);
    });
    it('Определить, является ли строка числом, длиной до 12 цифр', function() {
        assert.deepEqual(reg.regEx53('123456789011'), false);
    });
});

describe('Task54', function() {
    it('Дана строка с буквами, пробелами и цифрами. Найдите сумму всех чисел из данной строки.', function() {
        assert.deepEqual(reg.regEx54('1e2 qwe r2rr23'), 28);
    });
    it('Дана строка с буквами, пробелами и цифрами. Найдите сумму всех чисел из данной строки.', function() {
        assert.deepEqual(reg.regEx54('qwew4 qeqwe'), 4);
    });
});

describe('Task55', function() {
    it('Заменить в строке домены вида http://site.ru на <a href="http://site.ru">http://site.ru</a>', function() {
        assert.deepEqual(reg.regEx55('http://site.ru'), '<a href="http://site.ru">http://site.ru</a>');
    });
});

describe('Task56', function() {
    it('С помощью replace замените все повторяющиеся пробелы на один.', function() {
        assert.deepEqual(reg.regEx56('test        string'), 'test string');
    });
    it('С помощью replace замените все повторяющиеся пробелы на один.', function() {
        assert.deepEqual(reg.regEx56('Это    мульти        пробелы'), 'Это мульти пробелы');
    });
});

describe('Task57', function() {
    it('Найдите и удалите все комментарии CSS.', function() {
        assert.deepEqual(reg.regEx57('color /* : red*/'), 'color   : red ');
    });
    it('Найдите и удалите все комментарии CSS.', function() {
        assert.deepEqual(reg.regEx57('test /*string*/'), 'test  string ');
    });
});

describe('Task58', function() {
    it('Найдите и удалите все комментарии HTML.', function() {
        assert.deepEqual(reg.regEx58('span <!-- span -->'), 'span  span ');
    });
});

describe('Task59', function() {
    it('Найдите все строки по шаблону 3 буквы a, затем буква b и поменяйте 3 буквы a на знак !. То есть из aaab нужно сделать !b.', function() {
        assert.deepEqual(reg.regEx59('aad as a aaab aaadb'),'aad as a !b aaadb');
    });
});

describe('Task60', function() {
    it('Найдите все строки по шаблону 3 буквы a, затем любая буква, но не b и поменяйте 3 буквы a на знак \'!\'.', function() {
        assert.deepEqual(reg.regEx60('aad as a aaab aaas'),'aad as a aaab !s');
    });
});

describe('Task61', function() {
    it('Преобразование строки так, чтобы вместо чисел стояли их квадраты.', function() {
        assert.deepEqual(reg.regEx61('2 3 4 5 6'), '4 9 16 25 36');
    });
});

describe('Task62', function() {
    it('Найди числа, стоящие в кавычках и увеличьте их в два раза.', function() {
        assert.deepEqual(reg.regEx62('"2" 3 "4" 5 "6"'), '"4" 3 "8" 5 "12"');
    });
});

describe('Task63', function() {
    it('Дана строка в которой есть вставки {{текст}}. Найдите все такие вставки и поменяйте в них порядок букв на обратный (то есть из \'текст\' нужно сделать \'тскет\').\n', function() {
        assert.deepEqual(reg.regEx63('Вставка {{текст}}'),'Вставка {{тскет}}');
    });
});

describe('Task65', function() {
    it('Определите, что год находится в интервале от 1900 до 2100 с помощью одного только регулярного выражения.', function() {
        assert.equal(reg.regEx65('2020'), true);
    });
    it('estimate that year is in interval 1900 - 2100, 1952', function() {
        assert.equal(reg.regEx65('2107'), false);
    });
});

describe('Task66', function() {
    it("С помощью test определите, что переданная строка является корректным временем вида '12:59', '23:41', '00:12', '00:00', '09:15'", function() {
        assert.equal(reg.regEx66('12:59'), true);
    });
    it("С помощью test определите, что переданная строка является корректным временем вида '12:59', '23:41', '00:12', '00:00', '09:15'", function() {
        assert.equal(reg.regEx66('25:00'), false);
    });
});

describe('Task67', function() {
    it("С помощью test определите, что переданная строка является корректным временем вида '9.59 am', '12.30 pm'.", function() {
        assert.equal(reg.regEx67('9.59 am'), true);
    });
    it("С помощью test определите, что переданная строка является корректным временем вида '9.59 am', '12.30 pm'.", function() {
        assert.equal(reg.regEx67('25:00'), false);
    });
});

describe('Task68', function() {
    it("Удалите одной регуляркой все слова из предложения, содержащие две одинаковые следующие друг за другом буквы.", function() {
        assert.equal(reg.regEx68('asd asd adda'), 'asd asd ');
    });
});

describe('Task69-70', function() {
    it("Удалите одной регуляркой все повторяющиеся слова из строки, например для 'dsf xxx xxx sd' должно вернуть 'dsf xxx sd'.", function() {
        assert.equal(reg.regEx69And70('dsf xxx xxx xxx xxx xxx sd'), 'dsf xxx sd');
    });
});



