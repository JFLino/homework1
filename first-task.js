
//Преобразование строки к нижнему регистру, но первая буква большая
export function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1);
}

//Преобразование строки с целью правильно расстановки пробелов
export function fixSpaces(str){
    let marks = ['.', ',', ':', ';', '?', '!'];

    for(let i = 0; i < str.length; i++){
        if(marks.includes(str[i])){
            if(str[i-1] == ' ') {
                str = str.slice(0, i-1) + str.slice(i);
                i-=2;
                continue;
            }
            if(str[i+1] != ' ') {
                str = str.slice(0, i+1) + ' ' + str.slice(i+1);
            }
        }
    }

    let arr = str.split(' ');
    arr = arr.filter((item)=>item != ''); //удаляем лишние пробелы
    str = arr.join(' ');
    
    return str;
}

//Подсчет кол-во слов в строке.
export function countWords(str){
    return str.split(' ').length;
}

//Подсчет уникальных слов
export function uniqueWords(str){
    let marks = ['.', ',', ':', ';', '?', '!'];
    let words = str.split(' ');
    words = words.map((item) => { // убирает знаки препинания с конца слов
        if(marks.includes(item.at(-1))){
            return item.slice(0, -1);
        }
        return item;
    });
    let result = new Map();

    for(let word of words){
        let w = word.toLowerCase();
        if(result.get(w)){
            result.set(w, result.get(w) + 1);
        }else{
            result.set(w, 1);
        }
    }
    return result;
}