(()=>{"use strict";(async()=>{const t=await(async()=>new Promise((t=>{const e=document.querySelector("form"),c=document.getElementById("city");e.addEventListener("submit",(e=>{e.preventDefault();const a=`https://api.weatherapi.com/v1/current.json?key=5970c03ba0ec486bad4223716232104&q=${c.value}`;t(a)}))})))();console.log(t);let e=await(async t=>{try{const e=await fetch(t,{mode:"cors"});return await e.json()}catch(t){alert(t)}})(t);console.log(e)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBb0NjQSxXQUNOLE1BQU1DLE9BaEJlRCxVQUNsQixJQUFJRSxTQUFTQyxJQUNoQixNQUFNQyxFQUFPQyxTQUFTQyxjQUFjLFFBQzlCQyxFQUFZRixTQUFTRyxlQUFlLFFBQzFDSixFQUFLSyxpQkFBaUIsVUFBVUMsSUFDM0JBLEVBQUVDLGlCQUVILE1BQU1WLEVBVlAsb0ZBU1lNLEVBQVVLLFFBRXJCVCxFQUFRRixFQUFJLEdBQ2xCLElBT29CLEdBQ2xCWSxRQUFRQyxJQUFJYixHQUNiLElBQUljLE9BdENtQmYsT0FBT0MsSUFFakMsSUFDSSxNQUFNZSxRQUFhQyxNQUFNaEIsRUFBSSxDQUM3QmlCLEtBQUssU0FHUixhQUR1QkYsRUFBS0csTUFFN0IsQ0FBQyxNQUFNVCxHQUNIVSxNQUFNVixFQUNWLEdBNEJ3QlcsQ0FBZXBCLEdBQ3BDWSxRQUFRQyxJQUFJQyxFQUFTLEVBRzVCTyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9NTk3MGMwM2JhMGVjNDg2YmFkNDIyMzcxNjIzMjEwNCZxPWxvbmRvblxuZXhwb3J0IGNvbnN0IGdldFdlYXRoZXJEYXRhID0gYXN5bmMgKHVybCk9PntcbiAgICBcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCh1cmwse1xuICAgICAgICBtb2RlOidjb3JzJ1xuICAgIH0pO1xuICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgICBhbGVydChlKTtcbiAgICB9XG4gXG4gICAgXG59XG5cblxuZXhwb3J0IGNvbnN0IGJ1aWxkVVJMID0gKGNpdHkpPT57XG4gICAgcmV0dXJuIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTU5NzBjMDNiYTBlYzQ4NmJhZDQyMjM3MTYyMzIxMDQmcT0ke2NpdHl9YDtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbnB1dCA9ICBhc3luYyAoKT0+e1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKTtcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChlKT0+eyBcbiAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgY2l0eSA9IHVzZXJJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGJ1aWxkVVJMKGNpdHkpO1xuICAgICAgICAgICAgcmVzb2x2ZSh1cmwpO1xuICAgIH0pO1xuICAgIH0pXG4gICAgXG4gICBcbn1cblxuY29uc3QgcHJpbnQgPSBhc3luYyAoKSA9PntcbiAgICAgICAgY29uc3QgdXJsID0gYXdhaXQgZ2V0VXNlcklucHV0KCk7ICBcbiAgICAgICAgY29uc29sZS5sb2codXJsKTtcbiAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YSh1cmwpO1xuICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICBcbn1cbnByaW50KCk7XG5cblxuIl0sIm5hbWVzIjpbImFzeW5jIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidXNlcklucHV0IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJkYXRhIiwiZmV0Y2giLCJtb2RlIiwianNvbiIsImFsZXJ0IiwiZ2V0V2VhdGhlckRhdGEiLCJwcmludCJdLCJzb3VyY2VSb290IjoiIn0=