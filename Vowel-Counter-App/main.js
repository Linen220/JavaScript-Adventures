function countVowels() {
    let text = document.getElementById('inputText').value;
    let result = document.getElementById('result');

    let vowelCount = 0;

    text = text.toLowerCase();
    
    for (let i = 0; i < text.length; i++) {
        if ( isVowel( text[i] ) ) {
            vowelCount++;
        }
    }

    result.textContent = `Total Vowels: ${vowelCount}`;

}

function isVowel( char ) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes( char );
}