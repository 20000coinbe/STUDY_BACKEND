# Closure

### 예제1

```html
<!DOCTYPE html>
<html>
  <body>
    <button class="toggle">toggle</button>
    <div
      class="box"
      style="width: 100px; height: 100px; background: red;"
    ></div>
    <script>
      var box = document.querySelector('.box')
      var toggleBtn = document.querySelector('.toggle')

      var toggle = (function () {
        var isShow = false

        // 1. 클로저를 반환
        return function () {
          box.style.display = isShow ? 'block' : 'none'
          // 3. 상태 변경
          isShow = !isShow
        }
      })()

      // 2. 이벤트 프로퍼티에 클로저 할당
      toggleBtn.onClick = toggle
    </script>
  </body>
</html>
```

1. IIEF는 함수를 반환하고 즉시 소멸, IIEF가 반환한 함수는 자신이 생성됐을 때의 렉시컬환경에 속한 변수 isShow를 기억하는 클로저이다.  
   클로저가 기억하는 변수 isShow는 box요소의 표시상태를 나타낸다.

2. 클로저를 이벤트핸들러로서 이벤트 프로퍼티에 할당. 이벤트 프로퍼티에서 이벤트 핸들러인 클로저를 제거하지 않는 한 클로저가 기억하는 렉시컬환경의 isShow는 소멸되지 않는다 .  
   다시 말해 현재 상태를 기억한다.

3. 버튼을 클릭하면 이벤트 프로퍼티에 할당한 이벤트 핸들러인 클로저가 호출된다. 이때 '.box'요소의 표시 상태를 나타내는 변수 isShow의 값이 변경된다.  
   isShow는 클로저에 의해 참조되고 있기 때문에 유효하며 자신의 변경된 최신상태를 계속해서 유지한다

### 예제2

```html
<!DOCTYPE html>
<html>
  <body>
    <p>전역 변수를 사용한 Counting</p>
    <button id="inclease">+</button>
    <p id="count">0</p>
    <script>
      var incleaseBtn = document.getElementById('inclease')
      var count = document.getElementById('count')

      var counter = 0

      function increase() {
        return ++counter
      }

      incleaseBtn.onClick = function () {
        count.innerHTML = increase()
      }
    </script>
  </body>
</html>
```
