function checkNamNhuan(year) {
    if ((year % 4 == 0 && year % 100 != 0 ) || (year % 400 == 0))
        {
            return true
        } 
    else return false
}

function day_true(day) {
    if (day <= 31 && day >= 1) return true
    else return false
}

function month_true(month) {
    if (month <= 12 && month >= 1) return true
    else return false
}

function checkThang12(month) {
    if (month == 12)  return true 
    else false
}

function findTheNextDay(day, month, year) {
    Month_check = [0,31,28,31,30,31,30,31,31,30,31,30,31]

    if (!month_true(month) || !day_true(day)) return `Ngay thang nam ${day} / ${month} / ${year} khong phu hop!`

    if (day <= 28) {
        return `Ngay tiep theo cua ngay  ${day} / ${month} / ${year} la ${day+1} / ${month} / ${year}`
    } else if (day == 28) {
        if (month == 2) {
            if (!checkNamNhuan(year)) 
                return `Ngay tiep theo cua ngay  ${day} / ${month} / ${year} la ${1} / ${month + 1} / ${year}`
        } else {
           return `Ngay tiep theo cua ngay  ${day} / ${month} / ${year} la ${day+1} / ${month} / ${year}`
        }
    } else if (day == 29) {
        if (month == 2) {
            if(checkNamNhuan(year)) {
                return `Ngay tiep theo cua ngay  ${day} / ${month} / ${year} la ${1} / ${month + 1} / ${year}`
            } else {
                return `Ngay thang nam ${day} / ${month} / ${year} khong phu hop!`
            }
        } else {
            return `Ngay tiep theo cua ngay  ${day} / ${month} / ${year} la ${1} / ${month + 1} / ${year}`
        }
    }
    else if (day == 30) {
        if(month == 2) return `Ngay thang nam ${day} / ${month} / ${year} khong phu hop!`
        else if (Month_check[month] == 30) {
            return `Ngay tiep theo cua ngay  ${day} / ${month} / ${year} la ${1} / ${month + 1} / ${year}`
        } else {
            return `Ngay tiep theo cua ngay  ${day} / ${month} / ${year} la ${day+1} / ${month} / ${year}`
        }
    } else if (day == 31 && Month_check[month] == 31) {
        if (checkThang12(month)) {
            return `Ngay tiep theo cua ngay  ${day} / ${month} / ${year} la ${1} / ${1} / ${year + 1}`
        } else {
            return `Ngay tiep theo cua ngay  ${day} / ${month} / ${year} la ${1} / ${month + 1} / ${year}`
        }
    } else {
        return `Ngay thang nam ${day} / ${month} / ${year} khong phu hop!`
    }
}

console.log(findTheNextDay(29,2,2023))
console.log(findTheNextDay(29,2,2000))
console.log(findTheNextDay(1,3,2023))
console.log(findTheNextDay(30,10,2023))
console.log(findTheNextDay(28,2,2024))
console.log(findTheNextDay(28,13,2024))