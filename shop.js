    // 最初にno1を表示する
    showElement('no1');

    function showElement(id) {
        // 非表示にする要素をすべて隠す
        hideAllElements();

        // 指定されたIDの要素を表示する
        var elementToShow = document.getElementById(id);
        if (elementToShow) {
            elementToShow.style.display = 'block';
        }
    }

    function hideAllElements() {
        // すべての要素を非表示にする
        var allElements = document.querySelectorAll('.hidden');
        allElements.forEach(function(element) {
            element.style.display = 'none';
        });
    }