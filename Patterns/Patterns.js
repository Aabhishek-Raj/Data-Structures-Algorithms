class Pattern {
    pattern1() {
        
        for(let i = 0; i < 4; i++) {
            let row = ""

            for(let j = 0; j < 4; j++) {
                row += "* "
            }
            console.log(row)
        }
    }

    pattern2() {
        
        for(let i = 0; i <= 5; i++) {
            let row = ""

            for(let j = 0; j < i; j++) {
                row += "*"
            }
            console.log(row)
        }
    }

    pattern3() {
        
        for(let i = 0; i <= 5; i++) {
            let row = ""

            for(let j = 0; j < i; j++) {
                row += j + 1
            }
            console.log(row)
        }
    }

    pattern4() {
        const n = 5
        
        for(let i = 0; i < n; i++) {
            let row = ""

            for(let j = 0; j < n-i-1; j++) {
                row += " "
            }
            for(let j = 0; j < 2*i+1; j++) {
                row += "*"
            }
            for(let j = 0; j < n-i-1; j++) {
                row += " "
            }
            console.log(row)
        }
    }

    pattern5() {
        const n = 5
        
        for(let i = 0; i < 2*n; i++) {
            let row = ""

            for(let j = 0; j < n-i; j++) {
                row += "*"
            }
            for(let j = 0; j < 2*i+1; j++) {
                row += " "
            }
            for(let j = 0; j < n-i-1; j++) {
                row += " "
            }
            console.log(row)
        }
    }
}

const sol = new Pattern()
sol.pattern5()