const readLine = require('readline-sync')

function start() {
    const content = {}
    content.searchTerm = askAndReturnSearchterm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchterm() {
        return readLine.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readLine.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        return selectedPrefixText
    }

    console.log(content)
}

start()