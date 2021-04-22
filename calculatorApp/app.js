class calculatorApp
{
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
      }
    clear()
    {
        this.previousOperand = ''
        this.currentOperand = ''
        this.operation = undefined
    }
    delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }
  
  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }


 chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '/':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operation = document.querySelectorAll('[operation]')
const equalsButton = document.querySelector('[equals]')
const allClearButton = document.querySelector('[all-clear]')
const deleteButton = document.querySelector('[del]')
const firstOperand = document.querySelector('[data-first-operand]')
const secondOperand = document.querySelector('[data-second-operand]')
const x = new calculatorApp(firstOperand, secondOperand)

numberButtons.forEach(button => {
            button.addEventListener('click', () => {
             x.appendNumber(button.innerHTML)
             x.updateDisplay()
            })
       })

operation.forEach(button => {
        button.addEventListener('click', () => {
        x.chooseOperation(button.innerHTML)
        x.updateDisplay()
        })
})

equalsButton.addEventListener('click', button => {
    x.compute()
    x.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button => {
    x.clear()
    x.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    x.delete()
    x.updateDisplay()
  })
