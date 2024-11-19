// question_ai //question_i
// 指定されたIDの画像とオーバーレイを表示
function showImage(imageId) {
    const image = document.getElementById(imageId);
    const overlay = document.getElementById("overlay");
    image.style.display = "block";  // 画像を表示
    overlay.style.display = "block"; // オーバーレイを表示
}
// 画像とオーバーレイを非表示にする
function hideImage() {
    const images = document.querySelectorAll(".modal-image");
    const overlay = document.getElementById("overlay");
    images.forEach(image => image.style.display = "none"); // すべての画像を非表示
    overlay.style.display = "none"; // オーバーレイを非表示
}



// question_ai
// 答えの入力
function checkWord_ai() {
    // 入力されたワードを取得
    const inputWord = document.getElementById('wordInput').value.trim();  // trim()を使って前後の空白を除去
    // 正しいワード
    const correctWords = ['愛情', 'あいじょう', 'アイジョウ','aijou'];
    // 正しいワードが入力されたか確認
    if (correctWords.includes(inputWord)) {
        // 次のページに遷移
        window.location.href = 'answer_ai.html';  // 遷移先ページを指定
    } else {
        // エラーメッセージを表示
        alert('本当？');
    }
}



// question_i
// 答えの入力
function checkWord_i() {
    // 入力されたワードを取得
    const inputWord = document.getElementById('wordInput').value.trim();  // trim()を使って前後の空白を除去

    // 正しいワード
    const correctWords = ['i乗', 'iじょう', 'iジョウ', 'I乗', 'Iじょう', 'Iジョウ', 'ｉ乗', 'ｉじょう', 'ｉジョウ', 'Ｉ乗', 'Ｉじょう', 'Ｉジョウ', 'あい乗', 'あいじょう', 'あいジョウ', 'アイ乗', 'アイじょう', 'アイジョウ', 'aijou'];

    // 正しいワードが入力されたか確認
    if (correctWords.includes(inputWord)) {
        // 次のページに遷移
        window.location.href = 'answer_i.html';  // 遷移先ページを指定
    } else {
        // エラーメッセージを表示
        alert('本当？');
    }
}


// answer_ai




// 404