const leapYear=(year)=>{
    if (((year%400)===0 )|| ((year%4)===0)) return true;
    if (year%100===0) return false;
    else return false;
}
console.log(leapYear(1920));
console.log(leapYear(2020));
console.log(leapYear(2022));
console.log(leapYear(2024));
console.log(leapYear(1990));
console.log(leapYear(2008));
console.log(leapYear(2009));
console.log(leapYear(2000));
